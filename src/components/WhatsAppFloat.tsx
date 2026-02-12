import { MessageCircle, X } from 'lucide-react';
import { useState } from 'react';

export default function WhatsAppFloat() {
  const [isOpen, setIsOpen] = useState(false);
  const waNumber = '6287768328162';
  const defaultMessage = 'Halo, saya ingin bantuan mengenai layanan AdaKami';

  const handleSendMessage = (message: string) => {
    window.open(`https://wa.me/${waNumber}?text=${encodeURIComponent(message)}`, '_blank');
    setIsOpen(false);
  };

  return (
    <>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 w-16 h-16 bg-green-500 hover:bg-green-600 rounded-full flex items-center justify-center shadow-2xl transition-all duration-300 hover:scale-110 z-50"
        aria-label="Chat WhatsApp"
      >
        {isOpen ? (
          <X className="w-8 h-8 text-white" />
        ) : (
          <MessageCircle className="w-8 h-8 text-white" />
        )}
      </button>

      {isOpen && (
        <div className="fixed bottom-28 right-6 w-80 bg-slate-900 rounded-2xl shadow-2xl border border-slate-700 overflow-hidden z-40 animate-slideUp">
          <div className="bg-gradient-to-r from-green-600 to-emerald-600 p-4">
            <h3 className="text-white font-semibold text-lg">Layanan Pelanggan AdaKami</h3>
            <p className="text-green-50 text-sm mt-1">Siap membantu kendala Anda 24 Jam</p>
          </div>

          <div className="p-4 space-y-3 max-h-96 overflow-y-auto">
            <button
              onClick={() => handleSendMessage('Halo, saya butuh informasi layanan resmi')}
              className="w-full text-left p-3 bg-slate-800 hover:bg-slate-700 rounded-lg transition-colors text-sm text-slate-200"
            >
              📋 Informasi Layanan Resmi
            </button>

            <button
              onClick={() => handleSendMessage('Halo, saya ingin panduan bantuan teknis')}
              className="w-full text-left p-3 bg-slate-800 hover:bg-slate-700 rounded-lg transition-colors text-sm text-slate-200"
            >
              📖 Panduan Bantuan Teknis
            </button>

            <button
              onClick={() => handleSendMessage('Halo, saya butuh bantuan kendala akun')}
              className="w-full text-left p-3 bg-slate-800 hover:bg-slate-700 rounded-lg transition-colors text-sm text-slate-200"
            >
              🔧 Bantuan Kendala Akun
            </button>

            <button
              onClick={() => handleSendMessage('Halo, saya ingin bicara dengan CS AdaKami')}
              className="w-full text-left p-3 bg-slate-800 hover:bg-slate-700 rounded-lg transition-colors text-sm text-slate-200"
            >
              💬 Hubungi CS Resmi
            </button>

            <div className="pt-3 border-t border-slate-700">
              <button
                onClick={() => handleSendMessage(defaultMessage)}
                className="w-full bg-green-500 hover:bg-green-600 text-white font-semibold py-3 rounded-lg transition-colors"
              >
                Kirim Pesan Sekarang
              </button>
            </div>
          </div>
        </div>
      )}

      <style>{`
        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-slideUp {
          animation: slideUp 0.3s ease-out;
        }
      `}</style>
    </>
  );
}
