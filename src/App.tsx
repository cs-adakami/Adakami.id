import ProtectedContent from './components/ProtectedContent';
import HeroSection from './components/HeroSection';
import InfoCard from './components/InfoCard';
import Footer from './components/Footer';
import WhatsAppFloat from './components/WhatsAppFloat';

function App() {
  return (
    <ProtectedContent>
      <div className="min-h-screen bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900">
        <div className="max-w-6xl mx-auto px-5 py-8">
          <div className="mb-6">
            <span className="inline-block text-xs tracking-widest uppercase text-emerald-400 font-semibold mb-3">
              Layanan Informasi Terpadu AdaKami
            </span>
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-3">
              Portal Informasi Pengguna
            </h1>
            <p className="text-slate-400 text-sm md:text-base leading-relaxed max-w-3xl">
              Halaman ini menyediakan panduan umum dan jalur komunikasi untuk membantu memahami layanan secara lebih jelas.
            </p>
          </div>

          <HeroSection />
          <InfoCard />
          <Footer />
        </div>

        <WhatsAppFloat />
      </div>
    </ProtectedContent>
  );
}

export default App;
