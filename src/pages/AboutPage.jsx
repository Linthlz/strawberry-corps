import { motion } from 'framer-motion';
import { Phone, MapPin, Clock } from 'lucide-react';
import { makeWhatsAppLink } from '../utils/whatsappHelper.js'; // Pastikan .js ada

// Varian animasi
const pageVariants = {
  initial: { opacity: 0 },
  in: { opacity: 1 },
  out: { opacity: 0 },
};
const pageTransition = { duration: 0.5 };

const WA_NUMBER = '6281234567890'; // Ganti nomormu
const GMAPS_LINK = 'http://googleusercontent.com/maps/google.com/1'; // Ganti link Google Maps

// === DATA BARU UNTUK GALERI ===
const galleryImages = [
  { src: '/image/galeri.jpg', alt: 'Proses produksi selai stroberi' },
  { src: '/image/galeri1.jpg', alt: 'Kebun stroberi Strawberry Corps dari dekat' },
  { src: '/image/galeri2.jpg', alt: 'Berbagai produk olahan stroberi' },
  { src: '/image/galeri3.jpg', alt: 'Suasana toko atau outlet Strawberry Corps' },
];
// =============================

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
              className="h-full w-full object-cover shadow-2xl" // Sudut siku
            />
            {/* Elemen dekoratif tumpang tindih */}
            <div 
              className="absolute -bottom-4 -right-4 z-10 h-32 w-32 border-8 border-white bg-strawberry-light shadow-lg md:-bottom-8 md:-right-8" // Sudut siku
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
            <h1 className="my-4 text-4xl md:text-5xl">
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

{/* Section 2: Cerita Brand (Sesuai kode Anda) */}
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
              className="h-full w-full object-cover shadow-2xl" // Sudut siku
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
              Cerita Kami
            </span>
            <h1 className="font-serif my-4 text-4xl md:text-5xl text-stone-800">
              Akar Kami di Tanah Bedugul
            </h1>
            <div className="space-y-4 text-lg text-stone-700">
              <p>
                Strawberry Corps tidak hanya lahir <i>di</i> Bedugul; kami adalah bagian <i>dari</i> Bedugul. Di tengah kabut sejuk dan tanah vulkanik yang subur inilah kami menemukan panggilan kami: menanam stroberi yang jujur, murni, dan penuh cita rasa.
              </p>
              <p>
                Kami bukan sekadar bisnis, kami adalah keluarga petani. Kami percaya bahwa rasa terbaik datang langsung dari alam, bukan dari pabrik. Itulah mengapa kebun kami bebas dari pestisida, dan setiap buah stroberi kami rawat dengan sentuhan personal.
              </p>
              <p>
                Saat Anda membuka sebotol selai kami, Anda mencicipi kesabaran, matahari pagi Bedugul, dan dedikasi tulus yang masuk ke dalam setiap produk. Ini adalah janji kami akan kualitas tanpa kompromi.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* === Section 3: Galeri === */}
      <section className="bg-white py-20 md:py-32">
        <div className="container mx-auto max-w-6xl px-4 text-center">
          <motion.h2 
            className="mb-12 text-4xl md:text-5xl"
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
                className="overflow-hidden shadow-lg"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  loading="lazy"
                  // === PERUBAHAN DI SINI: h-64 menjadi h-96 ===
                  className="h-96 w-full object-cover transition-transform duration-300 hover:scale-110" 
                  // ============================================
                />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
      {/* =============================== */}


      {/* Section 4: Kontak (Diubah dari Section 2) */}
      <section 
        className="relative py-20 md:py-32 bg-cover bg-center"
        style={{ backgroundImage: "url('/hero1.jpg')" }} // Ganti gambar Anda di sini
      >
        {/* Overlay Sesuai Palet Warna */}
        <div className="absolute inset-0 bg-green-900/80"></div>

        {/* Konten diletakkan di atas overlay */}
        <div className="relative z-10 container mx-auto max-w-6xl px-4 text-center">
          <motion.h2 
            className="mb-12 text-4xl md:text-5xl text-white" 
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
            {/* Kartu Kontak 1 */}
            <a href={waLink} target="_blank" rel="noopener noreferrer" className="contact-card-link">
              <div className="contact-card rounded-none">
                <Phone className="h-10 w-10 text-forest-dark" />
                <h3 className="text-2xl">Telepon & WA</h3>
                <p>{WA_NUMBER.replace('62', '0')}</p>
              </div>
            </a>
            
            {/* Kartu Kontak 2 */}
            <a href={GMAPS_LINK} target="_blank" rel="noopener noreferrer" className="contact-card-link">
              <div className="contact-card rounded-none">
                <MapPin className="h-10 w-10 text-forest-dark" />
                <h3 className="text-2xl">Lokasi</h3>
                <p>Jl. Raya Bedugul (Lihat Peta)</p>
              </div>
            </a>
            
            {/* Kartu Kontak 3 */}
            <div className="contact-card-link">
              <div className="contact-card rounded-none">
                <Clock className="h-10 w-10 text-forest-dark" />
                <h3 className="text-2xl">Jam Buka</h3>
                <p>Setiap Hari, 09:00 - 17:00 WITA</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
}