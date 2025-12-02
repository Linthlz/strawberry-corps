import { motion } from 'framer-motion';

export default function WastePage() {
  return (
    <div className="pt-24 min-h-screen bg-cream-50">
      <div className="container mx-auto px-4 py-12">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-5xl font-serif font-bold text-stone-800 mb-6 text-center"
        >
          Waste Management
        </motion.h1>
        <div className="max-w-4xl mx-auto bg-white p-8 rounded-xl shadow-lg">
          <img src="/image/hero4.jpg" alt="Waste Management" className="w-full h-64 object-cover rounded-lg mb-6"/>
          <p className="text-lg text-gray-700 leading-relaxed">
            Komitmen kami terhadap lingkungan diwujudkan melalui pengelolaan limbah organik menjadi pupuk kompos 
            dan sistem daur ulang air untuk irigasi kebun.
          </p>
        </div>
      </div>
    </div>
  );
}