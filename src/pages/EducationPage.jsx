import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { BookOpen, Users, Sprout, GraduationCap, ArrowRight } from 'lucide-react';

// === DATA PROGRAM EDUKASI ===
const educationPrograms = [
  {
    id: 1,
    title: 'School Field Trip',
    description: 'Ajak siswa belajar di alam terbuka. Program pengenalan pertanian stroberi yang menyenangkan dan interaktif untuk siswa TK hingga SMA.',
    image: '/image/hero.jpg', // Ganti dengan foto anak sekolah/field trip
    icon: Users,
  },
  {
    id: 2,
    title: 'Workshop Pengolahan',
    description: 'Pelajari rahasia dapur kami! Workshop hands-on cara mengolah stroberi segar menjadi selai premium, jus sehat, dan kue lezat.',
    image: '/image/hero1.jpg', // Ganti dengan foto workshop/memasak
    icon: BookOpen,
  },
  {
    id: 3,
    title: 'Magang & Penelitian',
    description: 'Kami membuka kesempatan bagi mahasiswa pertanian dan agribisnis untuk melakukan penelitian atau praktik kerja lapangan (PKL) di kebun kami.',
    image: '/image/hero4.jpg', // Ganti dengan foto mahasiswa/peneliti
    icon: GraduationCap,
  },
];

// Varian Animasi (Konsisten dengan HomePage)
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

export default function EducationPage() {
  return (
    <motion.div
      initial="hidden"
      animate="show"
      variants={containerVariants}
      className="bg-cream-50 min-h-screen"
    >
      {/* ===================== HERO SECTION ===================== */}
      <section 
        className="relative h-[60vh] flex items-center justify-center text-center text-white overflow-hidden bg-cover bg-center"
        style={{ backgroundImage: "url('/image/hero1.jpg')" }} // Background Hero
      >
        <div className="absolute inset-0 bg-black/60"></div>
        <motion.div variants={sectionVariants} className="relative z-10 px-4 max-w-4xl">
          <h1 className="font-serif text-4xl md:text-6xl font-extrabold mb-6 drop-shadow-lg">
            Educational Activities
          </h1>
          <p className="font-sans text-lg md:text-xl text-gray-100 max-w-2xl mx-auto">
            Belajar langsung dari alam. Kami menyediakan ruang bagi generasi muda dan profesional untuk mendalami dunia pertanian stroberi modern.
          </p>
        </motion.div>
      </section>

      {/* ===================== INTRO SECTION ===================== */}
      <motion.section variants={sectionVariants} className="py-20 lg:py-24 bg-white">
        <div className="container mx-auto max-w-5xl px-4 text-center">
          <span className="font-sans text-sm font-bold uppercase tracking-widest text-strawberry-dark mb-2 block">
            Filosofi Edukasi Kami
          </span>
          <h2 className="font-serif text-3xl md:text-4xl font-bold mb-8 text-stone-800">
            Menumbuhkan Rasa Cinta pada Pertanian
          </h2>
          <p className="font-sans text-lg text-gray-600 leading-relaxed mb-8">
            Di Strawberry Corps, pendidikan adalah salah satu pilar utama kami. Kami percaya bahwa pertanian bukan hanya soal menanam, tapi juga tentang memahami ekosistem, menghargai pangan, dan inovasi berkelanjutan. Program kami dirancang untuk memberikan pengalaman nyata yang tidak bisa didapatkan di dalam kelas.
          </p>
          <div className="flex justify-center gap-8 text-stone-700">
            <div className="flex flex-col items-center">
              <Sprout size={32} className="text-green-700 mb-2" />
              <span className="font-serif font-bold">Alam</span>
            </div>
            <div className="flex flex-col items-center">
              <BookOpen size={32} className="text-green-700 mb-2" />
              <span className="font-serif font-bold">Ilmu</span>
            </div>
            <div className="flex flex-col items-center">
              <Users size={32} className="text-green-700 mb-2" />
              <span className="font-serif font-bold">Komunitas</span>
            </div>
          </div>
        </div>
      </motion.section>

      {/* ===================== PROGRAMS GRID ===================== */}
      <motion.section variants={sectionVariants} className="py-20 lg:py-32 bg-cream-100">
        <div className="container mx-auto max-w-7xl px-4">
          <div className="text-center mb-16">
            <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4 text-stone-800">
              Program Unggulan
            </h2>
            <p className="font-sans text-gray-600 max-w-2xl mx-auto">
              Pilih program yang sesuai dengan kebutuhan kelompok atau institusi Anda.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {educationPrograms.map((program) => (
              <motion.div 
                key={program.id} 
                variants={sectionVariants}
                className="bg-white shadow-lg overflow-hidden group hover:-translate-y-2 transition-transform duration-300"
              >
                {/* Gambar Program (Besar & Siku sesuai tema) */}
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src={program.image} 
                    alt={program.title} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute top-4 left-4 bg-green-700 text-white p-2"> {/* Ikon kotak siku */}
                    <program.icon size={24} />
                  </div>
                </div>

                {/* Konten Text */}
                <div className="p-8">
                  <h3 className="font-serif text-2xl font-bold mb-3 text-stone-800">
                    {program.title}
                  </h3>
                  <p className="font-sans text-gray-600 mb-6 leading-relaxed">
                    {program.description}
                  </p>
                  <Link 
                    to="/about" // Atau link ke form pendaftaran jika ada
                    className="inline-flex items-center text-strawberry-dark font-bold hover:text-strawberry-light transition-colors"
                  >
                    Pelajari Detail <ArrowRight size={18} className="ml-2" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* ===================== CTA SECTION ===================== */}
      <motion.section 
        variants={sectionVariants}
        className="py-24 bg-green-900 text-white text-center"
      >
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="font-serif text-3xl md:text-5xl font-bold mb-6">
            Ingin Mengadakan Kunjungan?
          </h2>
          <p className="font-sans text-lg text-gray-200 mb-8">
            Hubungi tim kami untuk menyusun jadwal dan materi yang sesuai dengan kurikulum atau kebutuhan komunitas Anda.
          </p>
          <a
            href="https://wa.me/6281234567890" // Ganti nomor WA
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-white text-green-900 font-bold py-4 px-10 text-lg hover:bg-gray-100 transition-colors shadow-xl" // Tombol siku
          >
            Hubungi Kami Sekarang
          </a>
        </div>
      </motion.section>

    </motion.div>
  );
}