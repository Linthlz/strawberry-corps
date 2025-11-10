import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { products } from '../data/products.js';
import ProductCard from '../components/ProductCard.jsx';
import ProductModal from '../components/ProductModal.jsx';

import {
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  Quote
} from 'lucide-react'; // Ikon fitur (Leaf, Sprout, Award) sudah tidak dipakai

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

// === DATA FITUR KEUNGGULAN (Path gambar ikon) ===
const features = [
  {
    image: '/image/why1.jpg', // Sesuaikan nama file jika perlu
    title: '100% Alami & Organik',
    description:
      'Stroberi kami tumbuh subur secara alami, bebas dari pestisida dan bahan kimia berbahaya.',
  },
  {
    image: '/image/why.png', // Sesuaikan nama file jika perlu
    title: 'Panen Segar Setiap Hari',
    description:
      'Kami memastikan hanya buah stroberi segar yang baru dipetik yang sampai ke tangan Anda.',
  },
  {
    image: '/image/why2.jpg', // Sesuaikan nama file jika perlu
    title: 'Kualitas Premium Terjamin',
    description:
      'Dari bibit unggul hingga pengemasan, kami menjaga standar kualitas tertinggi di setiap langkah.',
  },
];

// === DATA FAKTA / STATS ===
const stats = [
  { value: '10+', label: 'Tahun Pengalaman', color: 'text-strawberry-dark' }, // Diubah ke strawberry-dark
  { value: '5+', label: 'Hektar Kebun', color: 'text-strawberry-dark' },    // Diubah ke strawberry-dark
  { value: '15+', label: 'Varian Produk', color: 'text-strawberry-dark' },   // Diubah ke strawberry-dark
  { value: '1000+', label: 'Pelanggan Setia', color: 'text-strawberry-dark' }, // Diubah ke strawberry-dark
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
  const [selectedProduct, setSelectedProduct] = useState(null);

  const bestSellers = products.slice(0, 3);

  const nextSlide = () =>
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));

  const prevSlide = () =>
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));

  useEffect(() => {
    const slideInterval = setInterval(nextSlide, 5000);
    return () => clearInterval(slideInterval);
  }, []);

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

        {/* ===================== FEATURES (Dengan Gambar Besar) ===================== */}
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
                  {/* === KARTU FITUR (Diperbarui) === */}
                  <div className="bg-white shadow-lg h-full overflow-hidden transition-transform transform hover:-translate-y-2 flex flex-col"> {/* <-- rounded-2xl DIHAPUS */}
                    {/* 1. Gambar Besar di Atas */}
                    <img
                      src={feature.image}
                      alt={feature.title}
                      className="w-full h-[36rem] object-cover" 
                      loading="lazy"
                    />
                    {/* 2. Teks di Bawah */}
                    <div className="p-6 flex flex-col flex-grow">
                      <h3 className="font-serif text-xl font-bold mb-2 text-stone-900">
                        {feature.title}
                      </h3>
                      <p className="font-sans text-gray-600 flex-grow">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                  {/* =============================== */}
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.section>

 {/* ===================== SECTION: COMPANY STATS ===================== */}
        <motion.section
          variants={sectionVariants}
          className="bg-green-900 py-16 text-white" // Warna hijau digelapkan sedikit
        >
          <div className="max-w-screen-xl mx-auto px-4">
            <motion.div
              variants={containerVariants}
              className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center"
            >
              {stats.map((stat, index) => (
                <motion.div key={index} variants={sectionVariants}>
                  <p className="font-serif text-5xl md:text-6xl font-extrabold mb-2">
                    {stat.value}
                  </p>
                  <p className={`font-sans text-lg md:text-xl font-semibold ${stat.color}`}>
                    {stat.label}
                  </p>
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

        {/* ===================== BAGIAN PRODUK ===================== */}
        <motion.section
          variants={sectionVariants}
          className="relative py-20 lg:py-32 bg-cream-50"
        >
          <div className="max-w-screen-xl px-4 mx-auto">
            <motion.h2
              variants={sectionVariants}
              className="font-serif text-3xl md:text-4xl font-bold mb-12 text-center text-stone-800"
            >
              Produk Pilihan Kami
            </motion.h2>

            <motion.div
              variants={containerVariants}
              className="grid gap-8 md:grid-cols-2 lg:grid-cols-3"
            >
              {bestSellers.map((product) => (
                <motion.div key={product.id} variants={sectionVariants}>
                  <ProductCard
                    product={product}
                    onDetailClick={() => setSelectedProduct(product)}
                  />
                </motion.div>
              ))}
            </motion.div>

            <motion.div variants={sectionVariants} className="mt-16 text-center">
              <Link
                to="/products"
                className="group inline-flex items-center gap-2 text-lg font-semibold text-green-700 transition-colors hover:text-strawberry-dark"
              >
                Lihat Semua Koleksi
                <ArrowRight className="transition-transform duration-300 group-hover:translate-x-1" size={20} />
              </Link>
            </motion.div>
          </div>
        </motion.section>
      </motion.div>

      <ProductModal
        product={selectedProduct}
        onClose={() => setSelectedProduct(null)}
      />
    </>
  );
};

export default HomePage;