import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

import {
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  Play, 
  ArrowDownCircle, 
  ArrowUpCircle,
  TrendingUp, // Ikon untuk Stats
  Users,      // Ikon untuk Stats
  Package,    // Ikon untuk Stats
  Sprout      // Ikon untuk Stats
} from 'lucide-react';

// === DATA SLIDES HERO SECTION ===
const slides = [
  {
    image: '/hero.jpg',
    title: 'Segar dari Jantung Bedugul',
    subtitle:
      'Rasakan kelezatan stroberi premium yang dipetik segar setiap hari dari kebun dataran tinggi kami.',
  },
  {
    image: '/hero1.jpg',
    title: 'Dibuat dengan Hati',
    subtitle:
      'Setiap selai, jus, dan produk olahan kami dibuat secara handmade untuk menjaga cita rasa alaminya.',
  },
  {
    image: '/hero4.jpg',
    title: '100% Organik & Alami',
    subtitle:
      'Kami berkomitmen pada pertanian berkelanjutan, menghasilkan buah stroberi terbaik tanpa pestida.',
  },
];

// === DATA FITUR KEUNGGULAN ===
const features = [
  {
    image: '/image/why1.jpg',
    title: '100% Alami & Organik',
    description:
      'Stroberi kami tumbuh subur secara alami, bebas dari pestisida dan bahan kimia berbahaya.',
  },
  {
    image: '/image/why.png',
    title: 'Panen Segar Setiap Hari',
    description:
      'Kami memastikan hanya buah stroberi segar yang baru dipetik yang sampai ke tangan Anda.',
  },
  {
    image: '/image/why2.jpg',
    title: 'Kualitas Premium Terjamin',
    description:
      'Dari bibit unggul hingga pengemasan, kami menjaga standar kualitas tertinggi di setiap langkah.',
  },
];

// === DATA FAKTA / STATS (Dengan Icon Kembali) ===
const stats = [
  { 
    value: '133%', 
    label: 'Peningkatan Nilai Ekonomi', 
    desc: 'Dibandingkan jalur tengkulak',
    icon: TrendingUp,
    color: 'text-green-400',
    bg: 'bg-green-900/50'
  }, 
  { 
    value: '500+', 
    label: 'Pemuda Terinspirasi', 
    desc: 'Melalui edukasi & magang',
    icon: Users,
    color: 'text-yellow-400',
    bg: 'bg-yellow-900/50'
  }, 
  { 
    value: '23+', 
    label: 'Mitra Petani Lokal', 
    desc: 'Pemberdayaan masyarakat',
    icon: Sprout,
    color: 'text-emerald-400',
    bg: 'bg-emerald-900/50'
  }, 
  { 
    value: '10+', 
    label: 'Produk Inovatif', 
    desc: 'Hilirisasi olahan stroberi',
    icon: Package,
    color: 'text-rose-400',
    bg: 'bg-rose-900/50'
  }, 
];

// === DATA TESTIMONI ===
const testimonials = [
  {
    quote:
      'Selai stroberi dari Strawberry Corps adalah yang terbaik! Rasanya seperti stroberi asli dari kebun, tidak terlalu manis, sempurna untuk sarapan.',
    author: 'Citra Dewi',
    role: 'Pecinta Sarapan',
    avatar: '/image/avatar-1.jpg',
  },
  {
    quote:
      'Jus stroberi murni mereka sangat menyegarkan dan benar-benar menghilangkan dahaga. Saya selalu stok di kulkas!',
    author: 'Bayu Prakoso',
    role: 'Penggemar Jus Sehat',
    avatar: '/image/avatar-2.jpg',
  },
  {
    quote:
      'Saya tidak pernah tahu stroberi kering bisa seenak ini! Camilan sehat yang lezat dan membuat ketagihan.',
    author: 'Siti Aminah',
    role: 'Penikmat Camilan',
    avatar: '/image/avatar-3.jpg',
  },
];

// === DATA VIDEO YOUTUBE ===
const youtubeVideos = [
  {
    id: 'eNEgk7Vkhj4', 
    title: 'PETIK CUAN BUDIDAYA STROBERI ',
    description: 'KISAH SUKSES DIBALIK AGROWISATA HIDDEN STRAWBERRY GARDEN'
  },
  {
    id: 'wm6OvTxqY9c', 
    title: 'Hidden Strawberry Garden',
    description: 'Bisa Petik Langsung Di Kebun Strawberry Bedugul.'
  },
  {
    id: 'xv6DN8BwJ00', 
    title: 'Bertani Itu Keren',
    description: 'Hidden Strawberry Garden, Mimpi Tak Tersembunyi.'
  },
  // --- Video Tambahan ---
  {
    id: 'a3HCbSQDp3Y',
    title: 'Hidden Strawberry Garden Tour',
    description: 'Mengubah hasil panen melimpah menjadi produk bernilai tinggi.'
  },
  {
    id: 'G6w38u-OFEM',
    title: 'Wisata petik langsung Strawberry di Bedugul Bali',
    description: 'Hidden Strawberry, Berkebun di Bedugul.'
  },
  {
    id: '3qS6Y4D0jOo', 
    title: 'Inovasi Hidden Strawberry Garden di Bedugul, Bali',
    description: 'Perjalanan Strawberry Corps dari awal hingga saat ini.'
  },
];

// Varian animasi
const sectionVariants = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.9, ease: [0.25, 0.1, 0.25, 1] },
  },
};

const containerVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.15 } },
};

// ==========================================
//           KOMPONEN HOMEPAGE
// ==========================================
const HomePage = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [showAllVideos, setShowAllVideos] = useState(false);

  const nextSlide = () =>
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));

  const prevSlide = () =>
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));

  useEffect(() => {
    const slideInterval = setInterval(nextSlide, 5000);
    return () => clearInterval(slideInterval);
  }, []);

  const displayedVideos = showAllVideos ? youtubeVideos : youtubeVideos.slice(0, 3);

  return (
    <>
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="show"
        className="overflow-hidden bg-cream-50"
      >
        {/* ===================== HERO SECTION ===================== */}
        <section className="relative h-screen w-full overflow-hidden">
          {slides.map((slide, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0 }}
              animate={{ opacity: index === currentSlide ? 1 : 0 }}
              transition={{ duration: 1.2, ease: 'easeInOut' }}
              className="absolute inset-0 h-full w-full"
            >
              <div
                className="h-full w-full bg-cover bg-center"
                style={{ backgroundImage: `url(${slide.image})` }}
              >
                <div className="h-full w-full bg-black/50 flex items-center justify-center">
                  <motion.div
                    variants={sectionVariants}
                    className="text-center text-white px-4 max-w-4xl"
                  >
                    <motion.h1
                      key={slide.title}
                      initial={{ opacity: 0, y: 25 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.8, delay: 0.3 }}
                      className="font-serif text-4xl md:text-6xl font-extrabold tracking-tight mb-4 drop-shadow-lg"
                    >
                      {slide.title}
                    </motion.h1>
                    <motion.p
                      key={slide.subtitle}
                      initial={{ opacity: 0, y: 25 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.9, delay: 0.5 }}
                      className="font-sans text-lg md:text-xl text-gray-200"
                    >
                      {slide.subtitle}
                    </motion.p>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          ))}

          {/* Navigasi Slider */}
          <button
            onClick={prevSlide}
            aria-label="Slide sebelumnya"
            className="absolute left-4 top-1/2 -translate-y-1/2 p-2 bg-black/20 rounded-full text-white hover:bg-black/40 transition-colors z-10"
          >
            <ChevronLeft size={24} />
          </button>
          <button
            onClick={nextSlide}
            aria-label="Slide berikutnya"
            className="absolute right-4 top-1/2 -translate-y-1/2 p-2 bg-black/20 rounded-full text-white hover:bg-black/40 transition-colors z-10"
          >
            <ChevronRight size={24} />
          </button>
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex space-x-2 z-10">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                aria-label={`Pergi ke slide ${index + 1}`}
                className={`h-2 w-2 rounded-full transition-all ${
                  index === currentSlide
                    ? 'w-4 bg-white'
                    : 'bg-white/50 hover:bg-white'
                }`}
              />
            ))}
          </div>
        </section>

        {/* ===================== FEATURES ===================== */}
        <motion.section
          variants={sectionVariants}
          className="relative py-20 lg:py-32 bg-cream-100"
        >
          <div className="max-w-screen-xl px-4 mx-auto text-center">
            <motion.h2
              variants={sectionVariants}
              className="font-serif text-3xl md:text-4xl font-bold mb-4 text-stone-800"
            >
              Kenapa Memilih Kami?
            </motion.h2>
            <motion.p
              variants={sectionVariants}
              className="font-sans max-w-3xl mx-auto text-gray-600 mb-12"
            >
              Kami percaya pada kekuatan alam. Tiga pilar utama kami adalah
              kejujuran, kesegaran, dan kualitas tanpa kompromi.
            </motion.p>

            <motion.div
              variants={containerVariants}
              className="grid gap-8 md:grid-cols-3"
            >
              {features.map((feature, index) => (
                <motion.div key={index} variants={sectionVariants}>
                  <div className="bg-white shadow-lg h-full overflow-hidden transition-transform transform hover:-translate-y-2 flex flex-col">
                    <img
                      src={feature.image}
                      alt={feature.title}
                      className="w-full h-[36rem] object-cover"
                      loading="lazy"
                    />
                    <div className="p-6 flex flex-col flex-grow">
                      <h3 className="font-serif text-xl font-bold mb-2 text-stone-900">
                        {feature.title}
                      </h3>
                      <p className="font-sans text-gray-600 flex-grow">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.section>

        {/* ===================== SECTION: COMPANY STATS (HIJAU + CARD + LOGO) ===================== */}
        <motion.section
          variants={sectionVariants}
          className="relative py-20 text-white overflow-hidden bg-green-900" // Background Hijau Solid
        >
          {/* Ornamen Background Abstrak Halus */}
          <div className="absolute top-0 left-0 w-full h-full bg-[url('/path-to-subtle-pattern.png')] opacity-10"></div>

          <div className="relative max-w-screen-xl mx-auto px-4 z-10">
            <motion.div
              variants={containerVariants}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
            >
              {stats.map((stat, index) => (
                <motion.div 
                  key={index} 
                  variants={sectionVariants}
                  whileHover={{ y: -10 }}
                  className="relative group"
                >
                  {/* Card Design (Glassmorphism Effect di atas Hijau) */}
                  <div className="h-full bg-white/10 backdrop-blur-sm border border-white/10 rounded-2xl p-6 flex flex-col items-center text-center transition-all duration-300 hover:bg-white/20 hover:border-white/30 hover:shadow-xl">
                    
                    {/* Icon Circle (Logo) */}
                    <div className={`mb-6 p-4 rounded-full ${stat.bg} ${stat.color} shadow-lg ring-1 ring-white/20 group-hover:scale-110 transition-transform duration-300`}>
                      <stat.icon size={32} strokeWidth={2} />
                    </div>

                    {/* Angka Besar */}
                    <p className="font-serif text-5xl md:text-5xl font-extrabold mb-2 text-white drop-shadow-sm">
                      {stat.value}
                    </p>
                    
                    {/* Label */}
                    <p className="font-sans text-lg font-bold text-green-100 mb-2 tracking-wide uppercase">
                      {stat.label}
                    </p>
                    
                    {/* Deskripsi Kecil */}
                    <p className="font-sans text-sm text-gray-300 group-hover:text-white transition-colors">
                      {stat.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.section>

        {/* ===================== SECTION: TESTIMONIALS ===================== */}
        <motion.section
          variants={sectionVariants}
          className="relative py-20 lg:py-32 bg-cream-50"
        >
          <div className="max-w-screen-xl mx-auto px-4">
            <motion.h2
              variants={sectionVariants}
              className="font-serif text-3xl md:text-4xl font-bold mb-4 text-center text-stone-800"
            >
              Apa Kata Mereka?
            </motion.h2>
            <motion.p
              variants={sectionVariants}
              className="font-sans max-w-3xl mx-auto text-gray-600 mb-12 text-center"
            >
              Dengar langsung dari pelanggan setia kami tentang pengalaman mereka dengan Strawberry Corps.
            </motion.p>

            <motion.div
              variants={containerVariants}
              className="grid gap-8 md:grid-cols-3"
            >
              {testimonials.map((testimonial, index) => (
                <motion.div key={index} variants={sectionVariants}>
                  <div className="bg-white p-8 rounded-2xl shadow-lg h-full flex flex-col">
                    <p className="font-sans text-base text-stone-700 mb-6 flex-grow">
                      {testimonial.quote}
                    </p>
                    <div className="flex items-center">
                      <img
                        src={testimonial.avatar}
                        alt={testimonial.author}
                        className="w-12 h-12 rounded-full mr-4 object-cover"
                      />
                      <div>
                        <p className="font-bold text-stone-800">{testimonial.author}</p>
                        <p className="text-sm text-gray-500">{testimonial.role}</p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.section>

        {/* ===================== CTA PARALLAX ===================== */}
        <motion.section
          variants={sectionVariants}
          className="relative py-24 md:py-32 bg-cover bg-center bg-fixed"
          style={{ backgroundImage: "url('/image/home.jpg')" }}
        >
          <div className="absolute inset-0 bg-black/60"></div>
          <div className="relative z-10 max-w-screen-xl mx-auto px-4 text-center">
            <motion.div variants={sectionVariants} className="max-w-3xl mx-auto">
              <h2 className="font-sans text-sm font-semibold text-strawberry-light uppercase tracking-wider">
                Filosofi Kami
              </h2>
              <p className="font-serif mt-2 text-3xl md:text-4xl font-extrabold text-white">
                Dari Kebun, Dibuat dengan Hati
              </p>
              <p className="font-sans mt-4 text-lg text-gray-200">
                Setiap stroberi adalah janji kami akan kesegaran. Kami
                menggabungkan metode pertanian tradisional Bedugul dengan standar
                kualitas modern.
              </p>
              <div className="mt-8">
                <Link
                  to="/about"
                  className="inline-block bg-strawberry-DEFAULT text-white font-bold py-3 px-8 rounded-full text-lg shadow-lg transition-transform transform hover:scale-105"
                >
                  Cerita Kami
                </Link>
              </div>
            </motion.div>
          </div>
        </motion.section>

        {/* ===================== BAGIAN VIDEO YOUTUBE ===================== */}
        <motion.section
          variants={sectionVariants}
          className="relative py-20 lg:py-32 text-white"
          style={{
            backgroundImage: "linear-gradient(to bottom, rgba(153, 27, 27, 0.9), rgba(69, 10, 10, 0.95)), url('/image/background-merah.jpg')",
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundAttachment: 'fixed',
          }}
        >
          <div className="max-w-screen-xl px-4 mx-auto">
            <motion.h2
              variants={sectionVariants}
              className="font-serif text-3xl md:text-4xl font-bold mb-4 text-center text-white drop-shadow-md"
            >
              Galeri Video & Edukasi
            </motion.h2>
            <motion.p
              variants={sectionVariants}
              className="font-sans max-w-2xl mx-auto text-gray-200 mb-12 text-center"
            >
              Saksikan cerita di balik layar Strawberry Corps, dari proses pembibitan hingga panen di kebun kami yang asri.
            </motion.p>

            <motion.div
              variants={containerVariants}
              className="grid gap-8 md:grid-cols-2 lg:grid-cols-3"
            >
              {displayedVideos.map((video) => (
                <motion.div key={video.id} variants={sectionVariants}>
                  <div className="flex flex-col h-full group">
                    
                    {/* CONTAINER VIDEO (KOTAK & BESAR) */}
                    <div className="aspect-square w-full bg-black/50 shadow-2xl rounded-xl overflow-hidden border border-white/20 transition-all duration-300 group-hover:border-white/50 group-hover:shadow-white/10">
                      <iframe
                        className="w-full h-full"
                        src={`https://www.youtube.com/embed/${video.id}`}
                        title={video.title}
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        loading="lazy"
                      ></iframe>
                    </div>

                    {/* CAPTION (JUDUL & DESKRIPSI) DI BAWAH VIDEO */}
                    <div className="pt-5 px-1">
                      <h3 className="font-serif text-xl font-bold text-white mb-2 line-clamp-2 leading-tight group-hover:text-yellow-200 transition-colors">
                        {video.title}
                      </h3>
                      <p className="font-sans text-sm text-gray-200 line-clamp-3 leading-relaxed opacity-90">
                        {video.description}
                      </p>
                    </div>

                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* Tombol Tampilkan/Sembunyikan Video */}
            {youtubeVideos.length > 3 && (
              <motion.div variants={sectionVariants} className="mt-16 text-center">
                <button
                  onClick={() => setShowAllVideos(!showAllVideos)}
                  className="group inline-flex items-center gap-2 text-lg font-bold text-white transition-all hover:text-yellow-200 bg-white/20 hover:bg-white/30 px-8 py-3 rounded-full backdrop-blur-sm shadow-lg border border-white/30"
                >
                  {showAllVideos ? (
                    <>
                      Sembunyikan Video
                      <ArrowUpCircle className="transition-transform duration-300 group-hover:-translate-y-1" size={24} />
                    </>
                  ) : (
                    <>
                      Tampilkan Video Lainnya
                      <ArrowDownCircle className="transition-transform duration-300 group-hover:translate-y-1" size={24} />
                    </>
                  )}
                </button>
              </motion.div>
            )}
          </div>
        </motion.section>
      </motion.div>
    </>
  );
};

export default HomePage;