import { BookOpen, BarChart3, Settings, MessageSquare } from 'lucide-react';

interface MenuItem {
  icon: React.ReactNode;
  title: string;
  message: string;
}

export default function InfoCard() {
  const waNumber = '628216364259';

  const menuItems: MenuItem[] = [
    {
      icon: <BookOpen className="w-5 h-5" />,
      title: 'Informasi Dasar',
      message: 'Saya ingin mengetahui informasi dasar',
    },
    {
      icon: <BarChart3 className="w-5 h-5" />,
      title: 'Panduan & Alur',
      message: 'Saya ingin memahami panduan dan alur penggunaan',
    },
    {
      icon: <Settings className="w-5 h-5" />,
      title: 'Penyesuaian Preferensi',
      message: 'Saya ingin menyesuaikan preferensi saya',
    },
    {
      icon: <MessageSquare className="w-5 h-5" />,
      title: 'Diskusi & Klarifikasi',
      message: 'Saya ingin berdiskusi dan klarifikasi',
    },
  ];

  const handleClick = (message: string) => {
    window.open(`https://wa.me/${waNumber}?text=${encodeURIComponent(message)}`, '_blank');
  };

  return (
    <div className="space-y-6">
      <div className="bg-gradient-to-br from-slate-900/80 to-slate-800/80 backdrop-blur-xl rounded-2xl p-6 border border-slate-700/50 shadow-2xl">
        <h2 className="text-lg font-semibold text-emerald-400 mb-2">Mulai dari Sini</h2>
        <p className="text-sm text-slate-300 leading-relaxed mb-5">
          Pilih kategori di bawah sesuai kebutuhan Anda. Setiap menu akan menghubungkan Anda ke tim yang siap membantu.
        </p>
        <button
          onClick={() => handleClick('Halo, saya memerlukan bantuan')}
          className="w-full bg-gradient-to-r from-emerald-600 to-green-600 hover:from-emerald-500 hover:to-green-500 text-white font-semibold py-3.5 rounded-xl shadow-lg transition-all duration-300 hover:shadow-emerald-500/50"
        >
          Ajukan Pertanyaan
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {menuItems.map((item, index) => (
          <button
            key={index}
            onClick={() => handleClick(item.message)}
            className="flex items-center gap-4 p-5 bg-slate-900/60 hover:bg-slate-800/80 backdrop-blur-sm border border-slate-700/50 hover:border-emerald-500/50 rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-emerald-500/10 text-left group"
          >
            <div className="p-3 bg-gradient-to-br from-emerald-600 to-green-600 rounded-lg group-hover:shadow-lg group-hover:shadow-emerald-500/50 transition-all duration-300">
              {item.icon}
            </div>
            <span className="text-sm font-medium text-slate-200 group-hover:text-emerald-400 transition-colors">
              {item.title}
            </span>
          </button>
        ))}
      </div>
    </div>
  );
}
