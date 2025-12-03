import React from 'react';
import { motion } from 'framer-motion';
import { Phone, MapPin, Clock, ArrowUpRight } from 'lucide-react';
import { makeWhatsAppLink } from '../utils/whatsappHelper.js'; 

// Varian animasi
const pageVariants = {
  initial: { opacity: 0 },
  in: { opacity: 1 },
  out: { opacity: 0 },
};
const pageTransition = { duration: 0.5 };

// --- UPDATE DATA KONTAK DISINI ---
const WA_NUMBER = '6285237601943'; 
// Menggunakan link search query agar akurat ke lokasi Hidden Strawberry Garden
const GMAPS_LINK = 'https://www.google.com/maps/search/?api=1&query=Hidden+Strawberry+Garden+Bedugul'; 

// === DATA BARU UNTUK HIGHLIGHT ===
const highlights = [
  {
    id: 1,
    title: "Pemanis Alami",
    desc: "Produk buatan kami menggunakan pemanis alami stevia dan tanpa pengawet sintetis.",
    image: "/image/Logo_Stevia.png", 
  },
  {
    id: 2,
    title: "Bahan Baku Segar",
    desc: "Bahan baku yang kita pakai sudah tersertifikasi PRIMA 3, aman dari residu pestisida dan berkualitas",
    image: "/image/Logo_Prima_3.jpg", 
  }
];

// === DATA GALERI ===
const galleryImages = [
  { src: '/image/galeri.jpg', alt: 'Proses produksi selai stroberi' },
  { src: '/image/galeri1.jpg', alt: 'Kebun stroberi Strawberry Corps dari dekat' },
  { src: '/image/galeri2.jpg', alt: 'Berbagai produk olahan stroberi' },
  { src: '/image/galeri3.jpg', alt: 'Suasana toko atau outlet Strawberry Corps' },
];

export default function AboutPage() {
  const waLink = makeWhatsAppLink(WA_NUMBER, 'Halo Strawberry Corps, saya ingin bertanya sesuatu.');

  return (
    <motion.div
      className="min-h-screen bg-cream-50 pt-24 md:pt-32"
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
      transition={pageTransition}
    >
      {/* Section 1: Cerita Brand (Layout tumpang tindih) */}
      <section className="container mx-auto max-w-6xl px-4 py-16">
        <div className="relative grid grid-cols-1 items-center gap-8 md:grid-cols-2">
          {/* Gambar dengan efek 'organik' */}
          <motion.div 
            className="relative h-64 md:h-full"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <img
              src="/tentang.png" 
              alt="Kebun Strawberry Corps di Bedugul"
              loading="lazy"
              className="h-full w-full object-cover shadow-2xl" 
            />
            {/* Elemen dekoratif tumpang tindih */}
            <div 
              className="absolute -bottom-4 -right-4 z-10 h-32 w-32 border-8 border-white bg-strawberry-light shadow-lg md:-bottom-8 md:-right-8" 
            />
          </motion.div>
          
          {/* Teks Cerita */}
          <motion.div 
            className="relative z-20 md:pl-8"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span className="font-sans text-sm font-bold uppercase tracking-widest text-strawberry-dark">
              Cerita Kami
            </span>
            <h1 className="my-4 text-4xl md:text-5xl font-serif">
              Dari Hati Bedugul
            </h1>
            <p className="mb-4 text-lg text-stone-700">
              Strawberry Corps lahir dari kecintaan kami pada alam Bedugul yang subur. Kami percaya bahwa stroberi terbaik adalah stroberi yang ditanam dengan cinta, kesabaran, dan tanpa bahan kimia berbahaya.
            </p>
            <p className="text-lg text-stone-700">
              Setiap produk olahan kami, mulai dari selai hingga jus, dibuat secara handmade untuk memastikan kualitas dan rasa alami terbaik sampai ke tangan Anda.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Section 2: Cerita Brand Lanjutan */}
      <section className="container mx-auto max-w-6xl px-4 py-16">
        <div className="relative grid grid-cols-1 items-center gap-8 md:grid-cols-2">
          
          {/* === GAMBAR (PINDAH KANAN) === */}
          <motion.div 
            className="relative h-64 md:h-[450px] md:order-last" 
            initial={{ opacity: 0, x: 50 }} 
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <img
              src="/hero1.jpg" 
              alt="Petani Strawberry Corps memegang hasil panen segar di kebun Bedugul"
              loading="lazy"
              className="h-full w-full object-cover shadow-2xl" 
            />
          </motion.div>
          
          {/* === CERITA (PINDAH KIRI) === */}
          <motion.div 
            className="relative z-20 md:pr-8" 
            initial={{ opacity: 0, x: -50 }} 
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span className="font-sans text-sm font-bold uppercase tracking-widest text-strawberry-dark">
              Filosofi Kami
            </span>
            <h1 className="font-serif my-4 text-4xl md:text-5xl text-stone-800">
              Akar Kami di Tanah Bedugul
            </h1>
            <div className="space-y-4 text-lg text-stone-700">
              <p>
                Strawberry Corps tidak hanya lahir di Bedugul kami adalah bagian dari Bedugul. Di tengah kabut sejuk dan tanah vulkanik yang subur inilah kami menemukan panggilan kami.
              </p>
              <p>
                Kami bukan sekadar bisnis, kami adalah keluarga petani. Kami percaya bahwa rasa terbaik datang langsung dari alam, bukan dari pabrik.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ===================== HIGHLIGHTS SECTION ===================== */}
      <section className="container mx-auto max-w-6xl px-4 py-20">
         <div className="grid md:grid-cols-2 gap-12 lg:gap-16">
            {highlights.map((item, index) => (
                <motion.div 
                    key={item.id}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.2 }}
                    className="flex flex-col h-full items-center text-center"
                >
                    <div className="h-56 w-full mb-6 flex items-center justify-center">
                        <img 
                            src={item.image} 
                            alt={item.title} 
                            className="h-full w-full object-contain object-center"
                        />
                    </div>

                    <div className="flex flex-col flex-grow items-center">
                        <h3 className="font-serif text-3xl font-bold text-stone-900 mb-4 leading-tight">
                            {item.title}
                        </h3>
                        <p className="text-gray-600 mb-8 leading-relaxed flex-grow text-lg">
                            {item.desc}
                        </p>
                    </div>
                </motion.div>
            ))}
         </div>
      </section>

      {/* === Section 3: Galeri === */}
      <section className="bg-white py-20 md:py-32">
        <div className="container mx-auto max-w-6xl px-4 text-center">
          <motion.h2 
            className="mb-12 text-4xl md:text-5xl font-serif"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Galeri Kami
          </motion.h2>
          <motion.div 
            className="grid grid-cols-2 md:grid-cols-4 gap-4"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            {galleryImages.map((image, index) => (
              <motion.div
                key={index}
                className="overflow-hidden shadow-lg rounded-xl"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  loading="lazy"
                  className="h-96 w-full object-cover transition-transform duration-300 hover:scale-110" 
                />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Section 4: Kontak */}
      <section 
        className="relative py-20 md:py-32 bg-cover bg-center"
        style={{ backgroundImage: "url('/hero1.jpg')" }} 
      >
        <div className="absolute inset-0 bg-green-900/80"></div>
        <div className="relative z-10 container mx-auto max-w-6xl px-4 text-center">
          <motion.h2 
            className="mb-12 text-4xl md:text-5xl text-white font-serif" 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Kunjungi Kami
          </motion.h2>
          
          <motion.div 
            className="grid grid-cols-1 gap-8 md:grid-cols-3"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            {/* Kartu Kontak 1: WA */}
            <a href={waLink} target="_blank" rel="noopener noreferrer" className="contact-card-link group">
              <div className="bg-white/10 backdrop-blur-sm p-8 text-white border border-white/20 hover:bg-white/20 transition-all h-full">
                <Phone className="h-10 w-10 mx-auto mb-4 text-strawberry-light" />
                <h3 className="text-2xl font-bold mb-2">Telepon & WA</h3>
                <p>{WA_NUMBER.replace(/^62/, '0')}</p>
              </div>
            </a>
            
            {/* Kartu Kontak 2: Lokasi */}
            <a href={GMAPS_LINK} target="_blank" rel="noopener noreferrer" className="contact-card-link group">
              <div className="bg-white/10 backdrop-blur-sm p-8 text-white border border-white/20 hover:bg-white/20 transition-all h-full">
                <MapPin className="h-10 w-10 mx-auto mb-4 text-strawberry-light" />
                <h3 className="text-2xl font-bold mb-2">Lokasi</h3>
                <p className="mb-2">Jl. Gatotkaca, Pancasari, Bedugul</p>
                <span className="text-sm underline decoration-strawberry-light underline-offset-4 group-hover:text-strawberry-light transition-colors">
                  Lihat di Peta
                </span>
              </div>
            </a>
            
            {/* Kartu Kontak 3: Jam Buka */}
            <div className="contact-card-link">
              <div className="bg-white/10 backdrop-blur-sm p-8 text-white border border-white/20 hover:bg-white/20 transition-all h-full">
                <Clock className="h-10 w-10 mx-auto mb-4 text-strawberry-light" />
                <h3 className="text-2xl font-bold mb-2">Jam Buka</h3>
                <p>Setiap Hari</p>
                <p>08:00 - 18:00 WITA</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
}