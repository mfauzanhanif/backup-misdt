import GuestLayout from '@/layouts/GuestLayout';

export default function Ppdb() {
    return (
        <GuestLayout title="PMBM">
            {/* Header */}
            <section className="bg-gradient-to-br from-primary-800 to-primary-900 py-16 text-white">
                <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
                    <h1 className="font-heading mb-3 text-4xl font-bold">Penerimaan Murid Baru Madrasah</h1>
                    <p className="text-primary-200">Tahun Ajaran 2027-2028</p>
                </div>
            </section>

            {/* CTA Formulir Pendaftaran */}
            <section className="section-padding bg-gray-50 py-12">
                <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
                    <div className="overflow-hidden rounded-2xl border border-primary-100 bg-white p-8 shadow-sm">
                        <div className="grid grid-cols-1 items-center gap-6 md:grid-cols-2 md:gap-10">
                            <div>
                                <div className="mb-2 inline-flex items-center gap-2 rounded-full bg-primary-50 px-3 py-1 text-xs font-semibold text-primary-700">
                                    <span className="h-2 w-2 rounded-full bg-primary-500"></span>
                                    Pendaftaran Online Dibuka
                                </div>
                                <h2 className="font-heading mb-3 text-2xl font-bold text-gray-900">
                                    Isi Formulir <span className="text-gradient">Pendaftaran</span>
                                </h2>
                                <p className="text-sm leading-relaxed text-gray-500">
                                    Pendaftaran Murid Baru Madrasah (PMBM) TP 2027/2028 telah dibuka. Silakan mengisi formulir pendaftaran secara online melalui <strong className="font-semibold text-gray-700">mis.daraltauhid.com/admission</strong>.
                                </p>
                            </div>
                            <div className="text-center md:text-right">
                                <a
                                    href="/admission"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-2 rounded-xl bg-primary-600 px-8 py-3.5 text-sm font-semibold text-white shadow-lg transition-all hover:-translate-y-0.5 hover:bg-primary-700 hover:shadow-xl"
                                >
                                    Isi Formulir Sekarang
                                    <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                    </svg>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Timeline Gelombang */}
            <section className="section-padding bg-white py-12">
                <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
                    <div className="mb-10 text-center">
                        <h2 className="font-heading mb-3 text-3xl font-bold text-gray-900">
                            Jadwal <span className="text-gradient">Pendaftaran</span>
                        </h2>
                        <p className="mt-2 font-medium text-primary-600">Kuota Terbatas: HANYA 75 SISWA</p>
                    </div>

                    <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                        {/* Gelombang 1 */}
                        <div className="relative overflow-hidden rounded-2xl border-2 border-primary-400 bg-primary-50 p-6 shadow-sm">
                            <div className="absolute top-0 right-0 rounded-bl-xl bg-primary-600 px-3 py-1 text-xs font-bold text-white">
                                SEDANG DIBUKA
                            </div>
                            <div className="mb-3 text-3xl">📋</div>
                            <h3 className="font-heading mb-2 text-xl font-bold text-primary-800">Gelombang 1</h3>
                            <p className="mb-3 text-sm font-medium text-primary-700">15 November 2026 — 22 Januari 2027</p>
                            <p className="text-sm text-primary-600">Segera daftarkan putra/putri Anda.</p>
                        </div>

                        {/* Gelombang 2 */}
                        <div className="relative overflow-hidden rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
                            <div className="mb-3 text-3xl">⏳</div>
                            <h3 className="font-heading mb-2 text-xl font-bold text-gray-800">Gelombang 2</h3>
                            <p className="mb-3 text-sm font-medium text-gray-600">22 Maret 2027 — Kuota Terpenuhi</p>
                            <p className="text-sm text-gray-500 font-medium">Akan ditutup lebih awal jika kuota 75 siswa terpenuhi.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Persyaratan */}
            <section className="section-padding bg-gray-50 py-12">
                <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
                    <div className="mb-10 text-center">
                        <h2 className="font-heading mb-3 text-3xl font-bold text-gray-900">
                            Persyaratan <span className="text-gradient">Berkas</span>
                        </h2>
                        <p className="mt-2 text-sm text-gray-600">Masing-masing berkas dikumpulkan sebanyak 2 lembar.</p>
                    </div>

                    <div className="rounded-2xl border border-gray-100 bg-white p-8 shadow-sm">
                        <ul className="space-y-4">
                            {[
                                'Usia minimal 6 tahun per bulan Juli 2027',
                                'Fotocopy Akta Kelahiran',
                                'Fotocopy Kartu Keluarga (KK)',
                                'Fotocopy KTP Orang Tua/Wali',
                                'Fotocopy Ijazah TK/RA',
                                'Pas Foto ukuran 2x3 dan 3x4',
                                'Ketentuan Foto: Background merah & baju putih (Laki-laki berpeci hitam, Perempuan berkerudung putih)',
                            ].map((item, idx) => (
                                <li key={idx} className="flex items-start gap-3">
                                    <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary-100 text-xs font-bold text-primary-700">
                                        {idx + 1}
                                    </span>
                                    <span className="text-sm text-gray-700">{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </section>

            {/* Alur Pendaftaran */}
            <section className="section-padding bg-white py-12">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="mb-10 text-center">
                        <h2 className="font-heading mb-3 text-3xl font-bold text-gray-900">
                            Alur <span className="text-gradient">Pendaftaran</span>
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
                        {/* Offline */}
                        <div className="rounded-2xl border border-gray-100 bg-gray-50 p-8">
                            <div className="mb-4 flex items-center gap-3">
                                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary-100">
                                    <svg className="h-6 w-6 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                                    </svg>
                                </div>
                                <div>
                                    <h3 className="font-heading text-lg font-bold text-gray-900">Pendaftaran Offline</h3>
                                    <p className="text-xs text-gray-500 mt-1">Senin-Jum'at (08.00-16.00) | Sabtu (08.00-12.00)</p>
                                </div>
                            </div>
                            <ol className="space-y-3">
                                {[
                                    'Datang langsung ke sekolah MI Dar Al Tauhid',
                                    'Isi formulir pendaftaran',
                                    'Menyerahkan persyaratan berkas',
                                    'Bayar biaya pendaftaran',
                                    'Ikuti observasi/tes',
                                ].map((step, idx) => (
                                    <li key={idx} className="flex items-center gap-3">
                                        <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary-600 text-xs font-bold text-white">
                                            {idx + 1}
                                        </span>
                                        <span className="text-sm text-gray-600">{step}</span>
                                    </li>
                                ))}
                            </ol>
                        </div>

                        {/* Online */}
                        <div className="rounded-2xl border border-gray-100 bg-gray-50 p-8">
                            <div className="mb-4 flex items-center gap-3">
                                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent-100">
                                    <svg className="h-6 w-6 text-accent-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                    </svg>
                                </div>
                                <h3 className="font-heading text-lg font-bold text-gray-900">Pendaftaran Online</h3>
                            </div>
                            <ol className="space-y-3">
                                {[
                                    'Buka link mis.daraltauhid.com/admission',
                                    'Isi formulir pendaftaran digital',
                                    'Bayar biaya pendaftaran (transfer)',
                                    'Ikuti observasi/tes sesuai jadwal',
                                ].map((step, idx) => (
                                    <li key={idx} className="flex items-center gap-3">
                                        <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-accent-600 text-xs font-bold text-white">
                                            {idx + 1}
                                        </span>
                                        <span className="text-sm text-gray-600">{step}</span>
                                    </li>
                                ))}
                            </ol>
                        </div>
                    </div>

                    {/* CTA - Sudah dibuka komentarnya (karena pendaftaran sedang berlangsung) */}
                    <div className="mt-10 text-center">
                        <a
                            href="https://mis.daraltauhid.com/admission"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 rounded-xl bg-primary-600 px-8 py-4 text-sm font-bold text-white shadow-lg transition-all hover:-translate-y-0.5 hover:bg-primary-700 hover:shadow-xl"
                        >
                            Daftar Online Sekarang
                            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                            </svg>
                        </a>
                    </div>
                </div>
            </section>
        </GuestLayout>
    );
}
