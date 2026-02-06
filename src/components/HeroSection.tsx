export default function HeroSection() {
  return (
    <div className="mb-8">
      <div className="relative overflow-hidden rounded-3xl">
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-900/40 to-slate-900/60 z-10"></div>
        <img
          src="https://images.pexels.com/photos/7688336/pexels-photo-7688336.jpeg?auto=compress&cs=tinysrgb&w=1200"
          alt="Layanan Pelanggan AdaKami"
          className="w-full h-64 md:h-80 object-cover"
          onError={(e) => {
            e.currentTarget.src = 'https://images.pexels.com/photos/3183197/pexels-photo-3183197.jpeg?auto=compress&cs=tinysrgb&w=1200';
          }}
        />
        <div className="absolute inset-0 z-20 flex items-center justify-center p-6">
          <div className="text-center">
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-3">
              Layanan Pelanggan AdaKami
            </h1>
            <p className="text-emerald-100 text-sm md:text-base max-w-xl">
              Pusat bantuan resmi dan panduan informasi terpadu 24 jam untuk kenyamanan Anda.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
