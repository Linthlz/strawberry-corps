import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Users, Sprout, GraduationCap, ArrowRight, CheckCircle, ArrowUpRight } from 'lucide-react';

// === DATA PROGRAM EDUKASI ===
const educationPrograms = [
  {
    id: 1,
    title: 'Pembinaan & Magang Kewirausahaan',
    description: 'Melalui program magang wirausaha dan Wirausaha Merdeka, kami membimbing mahasiswa dalam inovasi, pengembangan produk, dan kompetisi bisnis.',
    icon: Sprout,
  },
  {
    id: 2,
    title: 'Edukasi Inklusif untuk Semua',
    description: 'Kami aktif memberikan edukasi lintas kelompok, mulai dari siswa sekolah, mahasiswa internasional, hingga komunitas disabilitas.',
    icon: Users,
  },
  {
    id: 3,
    title: 'Edukasi & Pelatihan Pemuda',
    description: 'Kami telah mengedukasi lebih dari 500+ pemuda dari berbagai jenjang, mulai dari TK, SD, SMP, SMA, mahasiswa hingga masyarakat umum.',
    icon: GraduationCap,
  },
];

// === DATA ARTIKEL ===
const articles = [
  {
    id: 1,
    title: "Mentoring Kewirausahaan ke mahasiswa dari berbagai universitas",
    desc: "Mentoring mahasiswa dengan membekali wawasan bisnis, pengembangan ide sejak dini.",
    image: "/image/Edukasi_5.png", 
  },
  {
    id: 2,
    title: "Edukasi oleh Edukator kepada siswa mancanegara",
    desc: "Memanfaatkan limbah pertanian stroberi menjadi karya seni yang mengasah motorik halus dan kreativitas siswa.",
    image: "/image/Edukasi_7.png",
  }
];

// === DATA "WAYS WE HELP" ===
const helpPoints = [
  "Edukasi Inklusif",
  "Mentoring Kewirausahaan",
  "Pembinaan ",
  "Pelatihan Lapangan",
];

// === VARIAN ANIMASI ===
const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const staggerContainer = {
  hidden: {},
  show: { transition: { staggerChildren: 0.2 } }
};

export default function EducationPage() {
  return (
    <div className="bg-cream-50 min-h-screen overflow-hidden font-sans text-stone-800">
      
      {/* ===================== HERO SECTION ===================== */}
      <section className="relative pt-36 md:pt-44 pb-32 w-full overflow-hidden">
        <div className="absolute inset-0 w-full h-full z-0 pointer-events-none">
            <div 
                className="absolute inset-0 bg-cover bg-center"
                style={{ 
                    backgroundImage: "url('/image/background2.JPG')", 
                    opacity: 0.15 
                }} 
            ></div>
            <div className="absolute inset-0 bg-gradient-to-b from-cream-50/20 via-cream-50/60 to-cream-50"></div>
        </div>

        <div className="absolute top-20 right-10 md:right-32 hidden md:block z-10 pointer-events-none">
           <svg width="60" height="60" viewBox="0 0 100 100" fill="none" stroke="#EAB308" strokeWidth="5">
              <path d="M10 50 Q 25 25 50 50 T 90 50" />
           </svg>
        </div>
        <div className="absolute top-32 left-10 md:left-32 hidden md:block z-10 pointer-events-none">
           <svg width="40" height="40" viewBox="0 0 50 50" fill="none" stroke="#D32F2F" strokeWidth="4">
              <circle cx="25" cy="25" r="10" />
           </svg>
        </div>

        <div className="container mx-auto px-4 relative z-10 text-center">
            <motion.div 
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              variants={staggerContainer}
              className="max-w-4xl mx-auto"
            >
              <motion.h1 variants={fadeInUp} className="font-serif text-4xl md:text-6xl font-extrabold mb-6 leading-tight text-stone-900">
                Belajar, Bermain, & <br />
                <span className="font-serif text-4xl md:text-6xl font-extrabold mb-6 leading-tight text-stone-900">Tumbuh Bersama!</span>
              </motion.h1>
              
              <motion.p variants={fadeInUp} className="text-gray-600 text-lg mb-8 max-w-2xl mx-auto">
                Fokus pada keterampilan dasar pertanian, kecintaan pada alam, dan kolaborasi tim yang menyenangkan di kebun stroberi kami.
              </motion.p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 max-w-6xl mx-auto items-end"
            >
                <div className="transform -rotate-6 hover:rotate-0 transition-transform duration-500 bg-white p-2 shadow-xl rounded-2xl">
                    <img src="/image/Edukasi_1.JPG" alt="Kids Playing" className="rounded-xl w-full h-48 md:h-64 object-cover" />
                </div>
                <div className="transform rotate-3 hover:rotate-0 transition-transform duration-500 bg-white p-2 shadow-xl rounded-2xl mb-8">
                    <img src="/image/Edukasi_6.png" alt="Learning" className="rounded-xl w-full h-56 md:h-72 object-cover" />
                </div>
                <div className="transform -rotate-2 hover:rotate-0 transition-transform duration-500 bg-white p-2 shadow-xl rounded-2xl">
                    <img src="/image/Edukasi_11.jpg" alt="Strawberry" className="rounded-xl w-full h-48 md:h-64 object-cover" />
                </div>
                <div className="transform rotate-6 hover:rotate-0 transition-transform duration-500 bg-white p-2 shadow-xl rounded-2xl mb-6">
                    <img src="/image/Edukasi_8.JPG" alt="Art Activity" className="rounded-xl w-full h-52 md:h-60 object-cover" />
                </div>
            </motion.div>
        </div>
      </section>

      {/* ===================== BANNER SECTION ===================== */}
      <section className="bg-gradient-to-r from-green-800 to-green-900 py-16 text-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="flex flex-col justify-center">
              <h2 className="font-serif text-3xl font-bold mb-2">Program Edukasi</h2>
              <p className="text-green-100 text-sm">Aktivitas belajar, Langkah Kaderisasi, dan Regenerasi</p>
            </div>
            {educationPrograms.map((program) => (
              <div key={program.id} className="bg-white/10 p-6 rounded-xl backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-colors">
                <div className="bg-white text-green-800 p-3 rounded-full w-fit mb-4">
                    <program.icon size={24} />
                </div>
                <h3 className="font-bold text-xl mb-2">{program.title}</h3>
                <p className="text-sm text-green-100 leading-relaxed">
                  {program.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===================== INSIGHTS & ARTICLES ===================== */}
      <section className="py-24 container mx-auto px-4 max-w-7xl">
         <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="flex flex-col h-full"
            >
                <div className="rounded-[2rem] overflow-hidden shadow-xl mb-8 h-80 lg:h-96">
                   <img src="/image/Edukasi_4.png" alt="Reading Class" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
                </div>
                <div className="flex-1 flex flex-col justify-center">
                    <h2 className="font-serif text-3xl lg:text-4xl font-bold text-stone-900 mb-4 leading-tight">
                        Mahasiswa Binaan Sukses Beninovasi
                    </h2>
                    <p className="text-gray-600 mb-6 leading-relaxed">
                        Mahasiswa binaan kami berhasil mengembangkan produk inovatif melalui proses mentoring intensif, riset lapangan, dan pendampingan bisnis berbasis pengalaman nyata.
                    </p>
                </div>
            </motion.div>

            <div className="flex flex-col gap-10">
                {articles.map((article, index) => (
                    <motion.div 
                        key={article.id}
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: index * 0.2 }}
                        className="flex flex-col sm:flex-row gap-6 items-start"
                    >
                        <div className="w-full sm:w-1/2 h-56 rounded-[1.5rem] overflow-hidden shadow-md flex-shrink-0">
                             <img src={article.image} alt={article.title} className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
                        </div>
                        <div className="flex flex-col justify-center py-2">
                             <h3 className="font-serif text-2xl font-bold text-stone-900 mb-3 leading-tight">
                                {article.title}
                             </h3>
                             <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                                {article.desc}
                             </p>
                        </div>
                    </motion.div>
                ))}
            </div>
         </div>
      </section>

      {/* ===================== 3-COLUMN "HOW WE HELP" (SEAMLESS BLUR) ===================== */}
      {/* 1. Hapus 'container' & 'max-w-7xl' dari <section> agar background full-width.
          2. Hapus 'bg-stone-50/50' agar warna dasar transparan (mewarisi bg-cream-50).
          3. Tambahkan div 'Gradient Mask' di paling atas untuk menyatukan transisi.
      */}
      <section className="relative py-24 w-full overflow-hidden">
        
        {/* --- GRADIENT MASK (KUNCI AGAR MENYATU) --- */}
        {/* Gradasi dari Cream Solid ke Transparan di bagian atas, membuat efek "timbul" */}
        <div className="absolute top-0 left-0 w-full h-40 bg-gradient-to-b from-cream-50 to-transparent z-10 pointer-events-none"></div>

        {/* --- BACKGROUND BLUR ELEMENTS (FULL WIDTH) --- */}
        <div className="absolute top-0 -left-[20%] w-[800px] h-[800px] bg-red-200/30 rounded-full blur-[120px] pointer-events-none mix-blend-multiply z-0"></div>
        <div className="absolute bottom-0 -right-[20%] w-[800px] h-[800px] bg-green-200/30 rounded-full blur-[120px] pointer-events-none mix-blend-multiply z-0"></div>
        <div className="absolute top-1/3 left-1/2 transform -translate-x-1/2 w-[900px] h-[900px] bg-yellow-100/40 rounded-full blur-[150px] pointer-events-none z-0"></div>
        {/* -------------------------------------------------- */}

        {/* --- CONTAINER KONTEN (Agar Kartu Tetap di Tengah) --- */}
        <div className="container mx-auto px-4 max-w-7xl relative z-20">
            <div className="grid lg:grid-cols-3 gap-6 h-auto lg:h-[600px]">
                
                {/* COLUMN 1 */}
                <motion.div 
                   initial={{ opacity: 0, x: -30 }}
                   whileInView={{ opacity: 1, x: 0 }}
                   transition={{ duration: 0.8 }}
                   className="rounded-[2.5rem] overflow-hidden shadow-2xl h-64 lg:h-full relative group"
                >
                    <img src="/image/hero.jpg" alt="Activity" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                    <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors"></div>
                </motion.div>

                {/* COLUMN 2 (Center Card) */}
                <motion.div 
                   initial={{ opacity: 0, y: 30 }}
                   whileInView={{ opacity: 1, y: 0 }}
                   transition={{ duration: 0.8, delay: 0.2 }}
                   // Gunakan backdrop-blur agar terlihat seperti kaca di atas blur background
                   className="bg-[#D9F99D]/90 backdrop-blur-md rounded-[2.5rem] p-8 lg:p-10 flex flex-col justify-between relative overflow-hidden shadow-2xl ring-1 ring-green-400/20"
                >
                    <div className="absolute -top-10 -right-10 w-40 h-40 border-[30px] border-[#C5E86C] rounded-full opacity-50"></div>
                    <div className="absolute top-5 right-5 w-10 h-10 border-[5px] border-[#C5E86C] rounded-full opacity-60"></div>

                    <div className="relative z-10 pt-10">
                        <h2 className="font-serif text-3xl lg:text-4xl font-bold text-stone-900 mb-4 leading-tight">
                           Bagaimana Kami <br/> Membantu Anda?
                        </h2>
                        <p className="text-stone-700 mb-6 leading-relaxed">
                           Ruang digital & fisik dimana khalayak umum bisa mengakses pertanian.
                        </p>
                        <ul className="space-y-3 mb-8">
                            {helpPoints.map((point, i) => (
                                <li key={i} className="flex items-center gap-3">
                                    <div className="bg-white p-1 rounded-full text-green-700">
                                        <CheckCircle size={16} fill="currentColor" className="text-white" />
                                    </div>
                                    <span className="font-bold text-stone-800 text-sm">{point}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="relative z-10">
                        <Link 
                            to="/about"
                            className="w-full bg-white text-stone-900 py-4 px-6 rounded-full font-bold flex items-center justify-between group hover:bg-stone-900 hover:text-white transition-all duration-300 shadow-lg"
                        >
                            <span>Hubungi Kami Sekarang</span>
                            <div className="bg-[#D9F99D] group-hover:bg-gray-700 p-2 rounded-full transition-colors">
                                 <ArrowRight size={20} className="text-stone-900 group-hover:text-white" />
                            </div>
                        </Link>
                    </div>
                </motion.div>

                {/* COLUMN 3 */}
                <motion.div 
                   initial={{ opacity: 0, x: 30 }}
                   whileInView={{ opacity: 1, x: 0 }}
                   transition={{ duration: 0.8, delay: 0.4 }}
                   className="rounded-[2.5rem] overflow-hidden shadow-2xl h-64 lg:h-full hidden lg:block relative group"
                >
                    <img src="/image/Edukasi_12.png" alt="Field Trip" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                     <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors"></div>
                </motion.div>

            </div>
        </div>
      </section>

    </div>
  );
}