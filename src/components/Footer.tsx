import { MapPin, Phone, Clock } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="mt-12 pt-8 border-t border-slate-700/50">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
        <div className="text-center md:text-left">
          <h3 className="text-emerald-400 font-semibold text-sm mb-2 uppercase tracking-wider">
            Layanan Resmi
          </h3>
          <p className="text-slate-400 text-xs leading-relaxed">
            Pusat informasi dan layanan pelanggan resmi AdaKami untuk panduan lengkap bantuan teknis bagi seluruh pengguna.
          </p>
        </div>

        <div className="text-center md:text-left">
          <h3 className="text-emerald-400 font-semibold text-sm mb-2 uppercase tracking-wider">
            Hubungi Kami
          </h3>
          <div className="space-y-2">
            <div className="flex items-center justify-center md:justify-start gap-2 text-slate-400 text-xs">
              <MapPin className="w-4 h-4 text-emerald-500" />
              <span>Kuningan Timur, Jakarta Selatan, DKI Jakarta</span>
            </div>
            <div className="flex items-center justify-center md:justify-start gap-2 text-slate-400 text-xs">
              <Phone className="w-4 h-4 text-emerald-500" />
              <span className="font-semibold text-white">0821-750-6899</span>
            </div>
          </div>
        </div>

        <div className="text-center md:text-left">
          <h3 className="text-emerald-400 font-semibold text-sm mb-2 uppercase tracking-wider">
            Waktu Layanan
          </h3>
          <div className="flex items-center justify-center md:justify-start gap-2 text-slate-400 text-xs leading-relaxed">
            <Clock className="w-4 h-4 text-emerald-500" />
            <span className="font-bold text-emerald-400">Tersedia 24 Jam</span>
          </div>
          <p className="text-slate-500 text-[10px] mt-1 italic">
            Melayani informasi dan bantuan teknis kapan saja.
          </p>
        </div>
      </div>

      <div className="text-center py-4 border-t border-slate-800">
        <p className="text-slate-500 text-xs">
          © 2026 Layanan Pelanggan AdaKami. Semua hak cipta dilindungi undang-undang.
        </p>
      </div>
    </footer>
  );
}
