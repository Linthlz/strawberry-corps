import { motion } from 'framer-motion';

export default function CommunityPage() {
  return (
    <div className="pt-24 min-h-screen bg-cream-50">
      <div className="container mx-auto px-4 py-12">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-5xl font-serif font-bold text-stone-800 mb-6 text-center"
        >
          Community Development
        </motion.h1>
        <div className="max-w-4xl mx-auto bg-white p-8 rounded-xl shadow-lg">
          <img src="/image/home.jpg" alt="Community Development" className="w-full h-64 object-cover rounded-lg mb-6"/>
          <p className="text-lg text-gray-700 leading-relaxed">
            Kami memberdayakan petani lokal Bedugul melalui pelatihan, kemitraan yang adil, dan 
            dukungan teknologi untuk meningkatkan kesejahteraan komunitas sekitar.
          </p>
        </div>
      </div>
    </div>
  );
}