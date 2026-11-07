<?php

namespace App\Http\Controllers;

use App\Models\Candidate;
use DateTime;
use Illuminate\Http\Request;
use Inertia\Inertia;

class PPDBController extends Controller
{
    public function index()
    {
        return Inertia::render('PPDB/index');
    }

    public function cek()
    {
        return Inertia::render('PPDB/cek-hasil');
    }

    // 1. Fungsi untuk menerima form POST dan mencocokkan data
    public function prosesCek(Request $request)
    {
        $request->validate([
            'nik' => 'required|numeric',
            'tanggal_lahir' => 'required|numeric|digits:8',
        ], [
            'tanggal_lahir.digits' => 'Tanggal lahir harus 8 angka (Contoh: 17082018)'
        ]);

        $date = DateTime::createFromFormat('dmY', $request->tanggal_lahir);
        if (! $date || $date->format('dmY') !== $request->tanggal_lahir) {
            return back()->withErrors(['tanggal_lahir' => 'Format tanggal lahir tidak valid.']);
        }
        $tglLahirDb = $date->format('Y-m-d');

        $siswa = Candidate::where('nik', $request->nik)
            ->where('tanggal_lahir', $tglLahirDb)
            ->first();

        if (!$siswa) {
            return back()->withErrors(['pesan' => 'Data tidak ditemukan. Pastikan NIK dan Tanggal Lahir sudah benar.']);
        }

        $tanggalFormatted = $this->formatTanggalIndo($siswa->tanggal_lahir);

        // Redirect ke route GET sambil membawa data
        return redirect()->route('PPDB.hasil')->with('siswa_result', [
            'nama' => $siswa->nama_lengkap,
            'nik' => $siswa->nik,
            'tempat_lahir' => $siswa->tempat_lahir,
            'tanggal_lahir' => $tanggalFormatted,
            'jenis_kelamin' => $siswa->jenis_kelamin->value,
            'hasil_psikotes' => $siswa->hasil_psikotes->value,
            'no_surat' => $siswa->no_surat,
        ]);
    }

    public function hasil()
    {
        $siswa = session('siswa_result');

        if (!$siswa) {
            return redirect()->route('PPDB.cek');
        }

        session()->reflash(); // Pertahankan data session jika di-refresh

        return Inertia::render('PPDB/hasil', [
            'siswa' => $siswa
        ]);
    }

    public function downloadSurat(Request $request)
    {
        // 1. Ambil NIK dari request dan cari data siswa
        $nik = $request->query('nik');
        $siswa = Candidate::where('nik', $nik)->firstOrFail();

        // Tolak download jika status masih PROSES
        if ($siswa->hasil_psikotes === \App\Enum\HasilPsikotes::PROSES) {
            abort(403, 'Surat belum tersedia karena hasil masih dalam proses.');
        }

        // 2. Format tanggal lahir
        $tanggalFormatted = $this->formatTanggalIndo($siswa->tanggal_lahir);

        // 3. Buat URL Validasi menggunakan kode verifikasi pendek
        if (empty($siswa->kode_verifikasi)) {
            $siswa->kode_verifikasi = \Illuminate\Support\Str::random(16);
            $siswa->save();
        }
        $urlValidasi = url('/verifikasi/pmbm/' . $siswa->kode_verifikasi);

        // 4. Siapkan Data untuk View PDF
        $dataPdf = [
            'siswa' => [
                'nama' => $siswa->nama_lengkap,
                'nik' => $siswa->nik,
                'tempat_lahir' => $siswa->tempat_lahir,
                'tanggal_lahir' => $tanggalFormatted,
                'hasil_psikotes' => $siswa->hasil_psikotes->value,
                'no_surat' => $siswa->no_surat,
            ],
            'sapaan' => $siswa->jenis_kelamin->value === 'LAKI-LAKI' ? 'Ananda' : 'Adinda',
            'url_validasi' => $urlValidasi
        ];

        // 5. Render PDF dengan ukuran F4 (Folio) -> 215.9 mm x 330.2 mm
        $pdf = app('dompdf.wrapper')->loadView('pdf.surat-pengumuman', $dataPdf)
            ->setPaper([0, 0, 609.45, 935.43], 'portrait');

        // 6. Download file dengan nama dinamis
        $namaFile = 'Surat_Pengumuman_PPDB_' . str_replace(' ', '_', $siswa->nama_lengkap) . '.pdf';
        return $pdf->download($namaFile);
    }

    public function verifikasi($kode)
    {
        // 1. Cari data siswa berdasarkan kode verifikasi
        $siswa = Candidate::where('kode_verifikasi', $kode)->first();

        if (!$siswa) {
            return Inertia::render('PPDB/verifikasi', [
                'status_validasi' => 'INVALID',
                'pesan' => 'Dokumen ini memuat data yang tidak terdaftar di sistem kami.'
            ]);
        }

        // 3. Format Tanggal
        $tanggalFormatted = $this->formatTanggalIndo($siswa->tanggal_lahir);

        // 4. Return Data Valid
        return Inertia::render('PPDB/verifikasi', [
            'status_validasi' => 'VALID',
            'siswa' => [
                'nama' => $siswa->nama_lengkap,
                // Sensor NIK untuk privasi (Tampil: 321306********01)
                'nik_masked' => substr($siswa->nik, 0, 6) . '********' . substr($siswa->nik, -2),
                'tempat_lahir' => $siswa->tempat_lahir,
                'tanggal_lahir' => $tanggalFormatted,
                'hasil_psikotes' => $siswa->hasil_psikotes->value,
            ]
        ]);
    }

    private function formatTanggalIndo(string $tanggal): string
    {
        $date = new DateTime($tanggal);
        $bulanIndo = [
            1 => 'Januari', 2 => 'Februari', 3 => 'Maret', 4 => 'April',
            5 => 'Mei', 6 => 'Juni', 7 => 'Juli', 8 => 'Agustus',
            9 => 'September', 10 => 'Oktober', 11 => 'November', 12 => 'Desember',
        ];

        return (int) $date->format('j') . ' ' . $bulanIndo[(int) $date->format('n')] . ' ' . $date->format('Y');
    }
}
