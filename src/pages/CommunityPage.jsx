import React from 'react';
import { motion } from 'framer-motion';
import { 
  Users, TrendingUp, Sprout, Handshake, Globe, Award 
} from 'lucide-react';

// --- DATA PARTNERS (JEJAK KOLABORASI) ---
// Data tetap 3 per kategori, hanya ditambahkan properti 'src' untuk gambar.
// Saya menggunakan placeholder agar layout langsung terlihat. Ganti dengan path logo asli Anda nanti.
const partners = [
  { 
    category: "Government", 
    items: [
      { name: "Kemenpora RI", src: "/image/kolab1.jpeg" },
      { name: "Kementerian Pertanian", src: "/image/kolab2.jpeg" },
      { name: "Pemprov Bali", src: "/image/kolab3.jpeg" }
    ]
  },
  { 
    category: "Corporate", 
    items: [
      { name: "PT Petrokimia Gresik", src: "/image/kolab4.jpeg" },
      { name: "Pupuk Indonesia", src: "/image/kolab5.jpeg" },
      { name: "PT HM Sampoerna", src: "/image/kolab6.jpeg" }
    ]
  },
  { 
    category: "Global", 
    items: [
      { name: "YSEALI (USA)", src: "/image/kolab7.jpeg" },
      { name: "U.S. Embassy", src: "/image/kolab8.jpeg" },
      { name: "Universitas Udayana", src: "/image/kolab.jpeg" }
    ]
  }
];

// --- DATA LAINNYA (TETAP) ---
const impacts = [
  { icon: <TrendingUp className="w-6 h-6" />, count: "133%", label: "Kenaikan Income" },
  { icon: <Users className="w-6 h-6" />, count: "23+", label: "Mitra Petani" },
  { icon: <Sprout className="w-6 h-6" />, count: "20%", label: "Produktivitas" },
  { icon: <Globe className="w-6 h-6" />, count: "500+", label: "Pemuda Terlatih" },
];

// --- DATA MEDIA LOGOS ---
const mediaLogos = [
  { name: "IAAS", src: "/image/iaas.png" },
  { name: "HIPMI Bali", src: "/image/hipmi.png" },
  { name: "Petani Muda Keren", src: "/image/petani.png" },
  { name: "TVRI", src: "/image/tvri.png" },
  { name: "Trubus", src: "/image/trubus.jpg" },
  { name: "CNN Indonesia", src: "/image/cnn.png" },
  { name: "Bali TV", src: "/image/balitv.png" },
  { name: "Agrina", src: "/image/agrina.png" },
];

// --- VARIANTS ---
const containerVar = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.1 } }
};

const itemVar = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

export default function CommunityPage() {
  return (
    <div className="min-h-screen font-sans text-stone-800 bg-[#FAFAF8] overflow-x-hidden">

      {/* --- 1. HERO SECTION --- */}
      <div className="relative min-h-[90vh] flex items-center justify-center">
        <div className="absolute inset-0 z-0">
          <img 
            src="/image/comm.jpg" 
            alt="Community Background" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-stone-900/80 via-stone-900/40 to-transparent" />
        </div>

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
            <div className="bg-red-900 rounded-2xl shadow-2xl p-6 md:p-10 grid grid-cols-4 divide-x divide-white/20 items-center border border-red-800">
              {impacts.map((item, idx) => (
                <div key={idx} className="flex flex-col items-center justify-center text-center px-4 group cursor-default">
                  <div className="mb-3 p-3 bg-white/10 rounded-full text-white border border-white/10 group-hover:bg-white group-hover:text-red-900 transition-colors duration-300 backdrop-blur-sm">
                    {item.icon}
                  </div>
                  <h3 className="text-3xl font-bold text-white">{item.count}</h3>
                  <p className="text-xs font-bold text-red-200 uppercase tracking-wide mt-1">{item.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="h-24 md:h-32 bg-[#FAFAF8]"></div>

      {/* --- 2. STORY SECTION --- */}
      <section className="py-20 overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center gap-16">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="w-full md:w-1/2 relative"
            >
              <div className="relative z-10">
                <img 
                  src="/image/com..jpg" 
                  alt="Petani Panen" 
                  className="w-[85%] rounded-[3rem] rounded-tr-none shadow-2xl object-cover aspect-[4/5]" 
                />
                <div className="absolute -bottom-12 -right-4 w-[55%] border-8 border-[#FAFAF8] rounded-[2rem] shadow-xl overflow-hidden">
                   <img 
                    src="/image/com.png"
                    alt="Detail Tangan Petani" 
                    className="w-full h-full object-cover aspect-square hover:scale-110 transition-transform duration-700" 
                  />
                </div>
              </div>
            </motion.div>

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

  {/* --- 3. MEDIA & COMMUNITY (DIKEMBALIKAN KE CREAM) --- */}
      <section className="py-24"> 
        <div className="container mx-auto px-6">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-serif font-bold text-stone-900 mb-2">Media & Community</h2>
            <div className="w-16 h-1 bg-red-600 mx-auto rounded-full"></div>
            <p className="mt-4 text-stone-500">Terima kasih atas liputan dan dukungan dari berbagai pihak.</p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 items-start justify-items-center">
            {mediaLogos.map((media, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="flex flex-col items-center justify-center group w-full"
              >
                {/* CONTAINER IMAGE */}
                <div className="h-20 md:h-24 w-full flex items-center justify-center mb-4">
                   <img 
                    src={media.src} 
                    alt={media.name}
                    className="max-w-[140px] max-h-full object-contain hover:scale-110 transition-transform duration-300 drop-shadow-sm"
                  />
                </div>

                {/* CAPTION DI BAWAH */}
                <p className="text-sm font-bold text-stone-600 text-center uppercase tracking-wide group-hover:text-red-600 transition-colors">
                  {media.name}
                </p>
              </motion.div>
            ))}
            
            {mediaLogos.length === 0 && (
              <p className="col-span-4 text-center text-red-500 italic">
                *Silakan tambahkan file logo ke folder public/image dan update array mediaLogos*
              </p>
            )}
          </div>
        </div>
      </section>

      {/* --- 4. CURVED SEPARATOR --- */}
      <div className="w-full overflow-hidden leading-[0] transform translate-y-1">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block w-[calc(100%+1.3px)] h-[80px] text-stone-900 fill-current">
          <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"></path>
        </svg>
      </div>

      {/* --- 5. PARTNERS SECTION (DATA ASLI 3/JENIS + GAMBAR) --- */}
      <section className="bg-stone-900 pb-24 pt-12 text-white">
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
                  
                  {/* LIST DENGAN LOGO INSTANSI */}
                  <div className="space-y-4">
                    {section.items.map((item, i) => (
                      <div key={i} className="flex items-center space-x-4 bg-black/20 p-3 rounded-lg border border-white/5 hover:bg-white/10 transition-all cursor-default">
                        {/* Box Logo Kecil */}
                        <div className="w-12 h-12 flex-shrink-0 bg-white rounded-lg flex items-center justify-center p-1 overflow-hidden">
                           <img 
                             src={item.src} 
                             alt={item.name} 
                             className="w-full h-full object-contain"
                           />
                        </div>
                        {/* Nama Instansi */}
                        <span className="text-sm font-medium text-stone-200 tracking-wide leading-tight">
                          {item.name}
                        </span>
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