import { useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { X, ShoppingBag } from 'lucide-react';
import { makeWhatsAppLink } from '../utils/whatsappHelper.js';

const WA_NUMBER = '6285237601943'; // Ganti nomormu

// Varian animasi sederhana
const backdropVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.2 } },
  exit: { opacity: 0, transition: { duration: 0.3 } }
};

const modalVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.3, ease: 'easeOut' } },
  exit: { opacity: 0, y: 30, transition: { duration: 0.3, ease: 'easeIn' } },
};

export default function ProductModal({ product, onClose }) {
  useEffect(() => {
    function handleKeyDown(event) {
      if (event.key === 'Escape') {
        onClose();
      }
    }
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  useEffect(() => {
    if (product) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => { document.body.style.overflow = 'auto'; };
  }, [product]);


  if (!product) return null;
  
  const waLink = makeWhatsAppLink(WA_NUMBER, `Halo Strawberry Corps, saya ingin memesan ${product.name} (${product.price}).`);

  const getImageUrl = (imagePath) => {
    if (imagePath.startsWith('http')) {
      return imagePath;
    }
    return imagePath.startsWith('/') ? imagePath : `/${imagePath}`;
  };

  const imageUrl = getImageUrl(product.images[0]);

  return (
    <AnimatePresence>
      {product && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          initial="hidden"
          animate="visible"
          exit="exit" // Diubah ke 'exit'
          variants={backdropVariants}
          onClick={onClose} 
          role="dialog"
          aria-modal="true"
          aria-labelledby={`modal-title-${product.id}`}
        >
          {/* Backdrop */}
          <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />

          {/* Konten Modal */}
          <motion.div
            className="relative z-10 w-full max-w-3xl overflow-hidden rounded-2xl bg-white shadow-2xl"
            variants={modalVariants}
            exit="exit" // Diubah ke 'exit'
            onClick={(e) => e.stopPropagation()} 
            // layoutId Dihapus dari sini
          >
            <button
              onClick={onClose}
              className="absolute top-3 right-3 z-20 rounded-full bg-gray-800/50 p-1.5 text-white transition-colors hover:bg-gray-800"
              aria-label="Tutup modal"
            >
              <X size={20} />
            </button>
            
            <div className="grid grid-cols-1 md:grid-cols-2">
              {/* Galeri Gambar */}
              <div className="relative">
                <motion.img
                  src={imageUrl} 
                  alt={product.name}
                  className="aspect-square w-full object-cover"
                  // layoutId Dihapus dari sini
                />
              </div>

              {/* Info Produk */}
              <div className="flex flex-col p-6 md:p-8">
                <span className="mb-1 text-sm font-semibold uppercase tracking-wide text-green-700">
                  {product.category}
                </span>
                <motion.h2 
                  className="mb-2 text-3xl font-serif font-bold text-stone-800"
                  id={`modal-title-${product.id}`}
                  // layoutId Dihapus dari sini
                >
                  {product.name}
                </motion.h2>
                
                <span className="mb-4 text-3xl font-bold text-strawberry-dark">
                  {product.price}
                </span>
                
                <div className="prose prose-sm max-w-none text-stone-700">
                  <p>{product.description}</p>
                  {product.ingredients && ( 
                    <>
                      <strong>Bahan:</strong>
                      <ul>
                        {product.ingredients.map((ing) => (
                          <li key={ing}>{ing}</li>
                        ))}
                      </ul>
                    </>
                  )}
                </div>
                
                <a
                  href={waLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-auto inline-flex w-full items-center justify-center gap-2 rounded-full bg-green-700 px-6 py-3.5 text-lg font-bold text-white shadow-lg transition-transform duration-300 hover:scale-105 hover:bg-green-800"
                >
                  <ShoppingBag size={20} />
                  Pesan via WhatsApp
                </a>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}