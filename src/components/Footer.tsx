import { MapPin, Phone } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="mt-12 pt-8 border-t border-slate-700/50">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
        <div className="text-center md:text-left">
          <h3 className="text-emerald-400 font-semibold text-sm mb-2 uppercase tracking-wider">
            Tentang Kami
          </h3>
          <p className="text-slate-400 text-xs leading-relaxed">
            Portal informasi resmi AdaKami untuk kemudahan akses dan panduan lengkap bagi pengguna.
          </p>
        </div>

        <div className="text-center md:text-left">
          <h3 className="text-emerald-400 font-semibold text-sm mb-2 uppercase tracking-wider">
            Kontak
          </h3>
          <div className="space-y-2">
            <div className="flex items-center justify-center md:justify-start gap-2 text-slate-400 text-xs">
              <MapPin className="w-4 h-4 text-emerald-500" />
              <span>Kuningan Timur, Jakarta Selatan</span>
            </div>
            <div className="flex items-center justify-center md:justify-start gap-2 text-slate-400 text-xs">
              <Phone className="w-4 h-4 text-emerald-500" />
              <span className="font-semibold">0821-750-6899</span>
            </div>
          </div>
        </div>

        <div className="text-center md:text-left">
          <h3 className="text-emerald-400 font-semibold text-sm mb-2 uppercase tracking-wider">
            Jam Operasional
          </h3>
          <p className="text-slate-400 text-xs leading-relaxed">
            Senin - Jumat: 09:00 - 18:00 WIB<br />
            Sabtu: 09:00 - 15:00 WIB
          </p>
        </div>
      </div>

      <div className="text-center py-4 border-t border-slate-800">
        <p className="text-slate-500 text-xs">
          © 2026 Portal Bantuan AdaKami. Semua hak cipta dilindungi undang-undang.
        </p>
      </div>
    </footer>
  );
}
