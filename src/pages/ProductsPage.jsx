import { useState } from 'react';
import { motion } from 'framer-motion';
import { products } from '../data/products';
import ProductCard from '../components/ProductCard';
import ProductModal from '../components/ProductModal';

// Varian animasi
const pageVariants = {
  initial: { opacity: 0 },
  in: { opacity: 1 },
  out: { opacity: 0 },
};
const pageTransition = { duration: 0.5 };

const containerVariants = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1, // Animasi kartu satu per satu
    },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: { y: 0, opacity: 1 },
};

export default function ProductsPage() {
  const [selectedProduct, setSelectedProduct] = useState(null);

  return (
    <>
      <motion.div
        className="min-h-screen bg-cream-50"
        initial="initial"
        animate="in"
        exit="out"
        variants={pageVariants}
        transition={pageTransition}
      >
        <div className="container mx-auto max-w-7xl px-4 py-24 pt-32 md:py-32">
          <motion.h1 
            className="mb-16 text-center text-5xl md:text-6xl"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Koleksi Produk Kami
          </motion.h1>

          <motion.div 
            className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {products.map((product) => (
              <motion.div key={product.id} variants={itemVariants}>
                <ProductCard
                  product={product}
                  onDetailClick={() => setSelectedProduct(product)}
                />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.div>

      {/* Modal Produk (menggunakan AnimatePresence untuk animasi buka/tutup) */}
      <ProductModal
        product={selectedProduct}
        onClose={() => setSelectedProduct(null)}
      />
    </>
  );
}