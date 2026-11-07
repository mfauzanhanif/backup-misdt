import { useState, useEffect } from 'react';

export default function AnnouncementModal() {
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        // Mengubah key session storage agar muncul kembali di device user untuk pengumuman baru
        const dismissed = sessionStorage.getItem('pmbm-announcement-2728-dismissed');
        if (!dismissed) {
            const timer = setTimeout(() => setIsOpen(true), 1500);
            return () => clearTimeout(timer);
        }
    }, []);

    const handleClose = () => {
        setIsOpen(false);
        sessionStorage.setItem('pmbm-announcement-2728-dismissed', 'true');
    };

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 p-4 backdrop-blur-sm">
            <div className="animate-fade-in-up relative w-full max-w-lg overflow-hidden rounded-2xl bg-white shadow-2xl">
                {/* Header */}
                <div className="bg-gradient-to-r from-teal-600 to-teal-700 px-6 py-4 text-white">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                            {/* Menggunakan icon toa/speaker untuk pengumuman */}
                            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z"
                                />
                            </svg>
                            <h2 className="font-heading text-lg font-bold">PENDAFTARAN DIBUKA</h2>
                        </div>
                        <button onClick={handleClose} className="rounded-full p-1 hover:bg-white/20" aria-label="Tutup">
                            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                    </div>
                    <p className="mt-1 text-sm text-teal-100">PMBM T.A. 2027/2028</p>
                </div>

                {/* Body */}
                <div className="px-6 py-5">
                    <div className="mb-4 rounded-xl border border-teal-100 bg-teal-50 p-4">
                        <p className="mb-1 text-center text-lg font-bold text-teal-700">📢 PENERIMAAN MURID BARU MADRASAH</p>
                        <p className="text-center text-sm font-medium text-teal-600">MIS DAR AL TAUHID ARJAWINANGUN</p>
                    </div>

                    <p className="mb-4 text-sm leading-relaxed text-gray-600">
                        Pendaftaran Murid Baru Madrasah (PMBM) Tahun Ajaran 2027-2028 telah resmi dibuka. Segera daftarkan putra-putri Ayah/Bunda karena kuota terbatas <strong>HANYA 75 SISWA</strong>.
                    </p>

                    <div className="mb-4 grid grid-cols-1 gap-3 sm:grid-cols-2">
                        <div className="rounded-lg border border-gray-200 bg-gray-50 p-3 text-center">
                            <p className="text-xs font-bold text-teal-700">GELOMBANG 1</p>
                            <p className="mt-1 text-sm font-semibold text-gray-800">15 Nov 2026</p>
                            <p className="text-xs text-gray-500">s/d 22 Jan 2027</p>
                        </div>
                        <div className="rounded-lg border border-gray-200 bg-gray-50 p-3 text-center">
                            <p className="text-xs font-bold text-teal-700">GELOMBANG 2</p>
                            <p className="mt-1 text-sm font-semibold text-gray-800">22 Maret 2027</p>
                            <p className="text-xs text-gray-500">s/d Kuota Terpenuhi</p>
                        </div>
                    </div>

                    <p className="text-right text-xs font-medium text-gray-400">— Panitia PMBM MISDT</p>
                </div>

                {/* Footer */}
                <div className="border-t bg-gray-50 px-6 py-3">
                    <button
                        onClick={handleClose}
                        className="w-full rounded-xl bg-primary-600 px-4 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-primary-700"
                    >
                        Tutup Pengumuman
                    </button>
                </div>
            </div>
        </div>
    );
}
