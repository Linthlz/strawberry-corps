import React from 'react';
import { motion } from 'framer-motion';
import { 
  Users, TrendingUp, Sprout, Handshake, Globe, Award, ArrowRight 
} from 'lucide-react';

// --- DATA ---
const partners = [
  { category: "Government", names: ["Kemenpora RI", "Kementerian Pertanian", "Pemprov Bali"] },
  { category: "Corporate", names: ["PT Petrokimia Gresik", "Pupuk Indonesia", "PT HM Sampoerna"] },
  { category: "Global", names: ["YSEALI (USA)", "U.S. Embassy", "Universitas Udayana"] }
];

const impacts = [
  { icon: <TrendingUp className="w-6 h-6" />, count: "133%", label: "Kenaikan Income" },
  { icon: <Users className="w-6 h-6" />, count: "23+", label: "Mitra Petani" },
  { icon: <Sprout className="w-6 h-6" />, count: "20%", label: "Produktivitas" },
  { icon: <Globe className="w-6 h-6" />, count: "500+", label: "Pemuda Terlatih" },
];

// --- ANIMATION VARIANTS ---
const containerVar = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.2 }
  }
};

const itemVar = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

export default function CommunityPage() {
  return (
    <div className="min-h-screen font-sans text-stone-800 bg-[#FAFAF8] overflow-x-hidden">

      {/* --- 1. HERO SECTION WITH GLASS CARD --- */}
      <div className="relative min-h-[90vh] flex items-center justify-center">
        
        {/* Background Parallax-ish Image */}
        <div className="absolute inset-0 z-0">
          <img 
            src="/image/comm.jpg" 
            alt="Community Background" 
            className="w-full h-full object-cover"
          />
          {/* Overlay Gradient Elegan */}
          <div className="absolute inset-0 bg-gradient-to-r from-stone-900/80 via-stone-900/40 to-transparent" />
        </div>

        {/* Content Box - Glassmorphism */}
        <div className="container mx-auto px-6 relative z-10 grid md:grid-cols-2 gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl"
          >
        
            <h1 className="text-5xl md:text-7xl font-serif font-bold text-white mb-6 leading-[1.1]">
              Membangun Desa, <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-orange-400">
                Memuliakan Petani
              </span>
            </h1>
            
            <p className="text-lg text-stone-200 mb-8 leading-relaxed max-w-lg font-light">
              Kami percaya bahwa stroberi terbaik tidak hanya manis rasanya, 
              tapi juga manis dampaknya bagi kehidupan masyarakat Desa Pancasari.
            </p>

          </motion.div>
        </div>

        {/* --- FLOATING STATS STRIP --- */}
        <div className="absolute bottom-0 left-0 right-0 z-20 translate-y-1/2 hidden md:block">
          <div className="container mx-auto px-4">
            <div className="bg-white rounded-2xl shadow-2xl p-6 md:p-10 grid grid-cols-4 divide-x divide-stone-100 items-center">
              {impacts.map((item, idx) => (
                <div key={idx} className="flex flex-col items-center justify-center text-center px-4 group cursor-default">
                  <div className="mb-3 p-3 bg-red-50 rounded-full text-red-600 group-hover:bg-red-600 group-hover:text-white transition-colors duration-300">
                    {item.icon}
                  </div>
                  <h3 className="text-3xl font-bold text-stone-800">{item.count}</h3>
                  <p className="text-xs font-bold text-stone-400 uppercase tracking-wide mt-1">{item.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Spacer untuk floating stats di mobile/desktop */}
      <div className="h-24 md:h-32 bg-[#FAFAF8]"></div>

      {/* --- 2. STORY SECTION (ASYMMETRICAL LAYOUT) --- */}
      <section className="py-20 overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center gap-16">
            
            {/* Visual Collage Side */}
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="w-full md:w-1/2 relative"
            >
              <div className="relative z-10">
                {/* Gambar Utama */}
                <img 
                  src="/image/com..jpg" // Ganti dengan foto petani real
                  alt="Petani Panen" 
                  className="w-[85%] rounded-[3rem] rounded-tr-none shadow-2xl object-cover aspect-[4/5]" 
                />
                
                {/* Gambar Overlay Kecil */}
                <div className="absolute -bottom-12 -right-4 w-[55%] border-8 border-[#FAFAF8] rounded-[2rem] shadow-xl overflow-hidden">
                   <img 
                    src="/image/com.png" // Gambar kebun/tangan
                    alt="Detail Tangan Petani" 
                    className="w-full h-full object-cover aspect-square hover:scale-110 transition-transform duration-700" 
                  />
                </div>

                {/* Decorative Pattern */}
                <div className="absolute -top-10 -left-10 text-red-100 -z-10">
                  <svg width="200" height="200" viewBox="0 0 200 200" fill="currentColor">
                    <path d="M44.7,-76.4C58.9,-69.2,71.8,-59.1,81.6,-46.6C91.4,-34.1,98.1,-19.2,95.8,-5.2C93.5,8.8,82.2,21.9,71.2,33.3C60.2,44.7,49.5,54.4,37.6,63.1C25.7,71.8,12.6,79.5,-1.3,81.8C-15.2,84.1,-29.3,80.9,-41.8,73.1C-54.3,65.3,-65.2,52.8,-73.4,38.8C-81.6,24.8,-87.1,9.3,-84.9,-5.1C-82.7,-19.5,-72.8,-32.8,-62.1,-43.5C-51.4,-54.2,-39.9,-62.3,-27.8,-71.2C-15.7,-80.1,-3,-89.8,10.6,-88.7C24.2,-87.6,30.5,-83.6,44.7,-76.4Z" transform="translate(100 100)" />
                  </svg>
                </div>
              </div>
            </motion.div>

            {/* Text Content Side */}
            <motion.div 
              className="w-full md:w-1/2"
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              variants={containerVar}
            >
              <motion.span variants={itemVar} className="text-red-600 font-bold tracking-widest uppercase mb-2 block">
                The Story
              </motion.span>
              <motion.h2 variants={itemVar} className="text-4xl md:text-5xl font-serif font-bold text-stone-900 mb-8">
                Kelompok Tani <br/><span className="italic text-red-700">Segening</span>
              </motion.h2>
              
              <motion.div variants={itemVar} className="space-y-6 text-lg text-stone-600 leading-relaxed text-justify">
                <p>
                  Di balik setiap stroberi manis yang Anda nikmati, ada kerja keras "Petani Gurem" di lereng Bedugul yang seringkali terpinggirkan.
                </p>
                <p>
                  Strawberry Corps hadir bukan sebagai pembeli semata, tapi sebagai <strong>Mitra Sejajar</strong>. Kami memangkas rantai distribusi, memberikan harga yang adil (Fair Trade), dan mengajarkan teknologi pertanian ramah lingkungan.
                </p>
              </motion.div>

              <motion.div variants={itemVar} className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="bg-white p-5 rounded-2xl shadow-sm border border-stone-100 hover:border-red-200 transition-all cursor-pointer group">
                  <Handshake className="w-8 h-8 text-red-500 mb-3 group-hover:scale-110 transition-transform" />
                  <h4 className="font-bold text-stone-800">Fair Trade</h4>
                  <p className="text-sm text-stone-500 mt-1">Jaminan harga stabil untuk petani.</p>
                </div>
                <div className="bg-white p-5 rounded-2xl shadow-sm border border-stone-100 hover:border-green-200 transition-all cursor-pointer group">
                  <Sprout className="w-8 h-8 text-green-500 mb-3 group-hover:scale-110 transition-transform" />
                  <h4 className="font-bold text-stone-800">Eco-Farming</h4>
                  <p className="text-sm text-stone-500 mt-1">Pupuk organik &amp; zero waste.</p>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* --- 3. CURVED SEPARATOR --- */}
      <div className="w-full overflow-hidden leading-[0] transform translate-y-1">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block w-[calc(100%+1.3px)] h-[80px] text-stone-900 fill-current">
          <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"></path>
        </svg>
      </div>

      {/* --- 4. PARTNERS SECTION (DARK THEME) --- */}
      <section className="bg-stone-900 py-24 text-white">
        <div className="container mx-auto px-6">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-serif font-bold mb-6">Jejak Kolaborasi</h2>
            <p className="text-stone-400 max-w-2xl mx-auto text-lg">
              Sinergi harmonis antara Pemerintah, Industri, dan Pendidikan.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {partners.map((section, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.2 }}
                className="relative bg-white/5 backdrop-blur-sm rounded-3xl p-8 border border-white/10 hover:border-red-500/50 hover:bg-white/10 transition-all duration-300 group overflow-hidden"
              >
                {/* Decorative Gradient Background on Hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-red-600/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>

                <div className="relative z-10">
                  <div className="flex items-center justify-between mb-8">
                    <h3 className="text-2xl font-bold font-serif">{section.category}</h3>
                    <div className="p-2 bg-white/10 rounded-full">
                       {idx === 0 && <Award className="w-5 h-5 text-yellow-400" />}
                       {idx === 1 && <Handshake className="w-5 h-5 text-blue-400" />}
                       {idx === 2 && <Globe className="w-5 h-5 text-green-400" />}
                    </div>
                  </div>
                  
                  <div className="space-y-3">
                    {section.names.map((name, i) => (
                      <div key={i} className="flex items-center space-x-3 text-stone-300 group-hover:text-white transition-colors">
                        <div className="h-px w-4 bg-stone-600 group-hover:w-6 group-hover:bg-red-500 transition-all"></div>
                        <span className="text-sm font-medium tracking-wide">{name}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}