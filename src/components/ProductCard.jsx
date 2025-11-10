import { motion } from 'framer-motion';

export default function ProductCard({ product, onDetailClick }) {
  
  // Fungsi untuk mengecek apakah URL adalah eksternal (https://)
  const getImageUrl = (imagePath) => {
    if (imagePath.startsWith('http')) {
      return imagePath;
    }
    // Jika path lokal, pastikan diawali dengan '/'
    return imagePath.startsWith('/') ? imagePath : `/${imagePath}`;
  };

  const imageUrl = getImageUrl(product.images[0]);

  return (
    <motion.div
      // === PERUBAHAN DI SINI: rounded-2xl DIHAPUS ===
      className="group flex h-full cursor-pointer flex-col overflow-hidden bg-white shadow-xl transition-all duration-300 ease-in-out hover:shadow-2xl"
      // ===========================================
      onClick={onDetailClick}
      whileHover={{ y: -5 }} 
      // layoutId dihapus sebelumnya untuk animasi sederhana
    >
      {/* Gambar */}
      <div className="relative overflow-hidden">
        <motion.img
          src={imageUrl} 
          alt={product.name}
          loading="lazy"
          className="aspect-square w-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-110"
          // layoutId dihapus sebelumnya
        />
        <span className="absolute top-3 left-3 rounded-full bg-green-700 px-3 py-1 text-xs font-bold text-white">
          {product.category}
        </span>
      </div>
      
      {/* Konten Teks */}
      <div className="flex flex-1 flex-col p-5">
        <motion.h3 
          className="mb-1 text-2xl font-serif text-stone-800"
          // layoutId dihapus sebelumnya
        >
          {product.name}
        </motion.h3>
        
        <p className="mb-3 font-sans text-sm text-stone-600 line-clamp-3">
          {product.description}
        </p>
        
        <div className="mt-auto flex items-center justify-between">
          <span className="text-xl font-bold text-strawberry-dark">{product.price}</span>
          
          {/* Tombol berwarna krem */}
          <span
            className="rounded-full bg-cream-100 px-4 py-2 text-sm font-semibold text-green-700 transition-colors duration-300 group-hover:bg-green-700 group-hover:text-white"
          >
            Lihat Detail
          </span>
        </div>
      </div>
    </motion.div>
  );
}