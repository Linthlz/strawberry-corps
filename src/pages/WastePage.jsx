import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, ChevronLeft, ChevronRight, Leaf } from 'lucide-react';

// === DATA SECTION 1: SPOTLIGHT SLIDER ===
const spotlightItems = [
  {
    id: 1,
    category: "Sistem Sirkular",
    title: "Pertanian Sirkular",
    description: "Kami menerapkan sistem di mana sampah organik tidak dibuang, melainkan dikembalikan ke lahan untuk menutup siklus hara dan memperbaiki kesuburan tanah secara alami.", 
    image: "/image/waste2.jpg"
  },
  {
    id: 2,
    category: "Metode Pengolahan",
    title: "Vermicomposting", 
    description: "Memanfaatkan cacing tanah untuk mengurai limbah organik menjadi kascing (pupuk alami) berkualitas tinggi, sebuah metode yang telah kami terapkan selama lebih dari 3 tahun.", 
    image: "/image/waste4.jpg"
  },
  {
    id: 3,
    category: "Inovasi Produk",
    title: "Eco-Enzyme",
    description: "Sisa buah stroberi dan sayuran difermentasi menjadi Eco-Enzyme serbaguna dan Pupuk Organik Cair (POC), menggantikan penggunaan bahan kimia berbahaya.", 
    image: "/image/waste3.jpg"
  },
  {
    id: 4,
    category: "Dampak Nyata",
    title: "Solusi Limbah Tani",
    description: "Kami berhasil mengolah kurang dari 1 ton sampah organik setiap bulannya menjadi kompos, mengurangi pencemaran lingkungan dan beban lahan di Desa Pancasari.", 
    image: "/image/why2.jpg"
  }
];

export default function WastePage() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % spotlightItems.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + spotlightItems.length) % spotlightItems.length);
  };

  return (
    <div className="w-full font-sans">
      
      {/* ==============================================
          SECTION 1: WASTE SPOTLIGHT (RED BACKGROUND + LOCAL IMAGE OVERLAY)
          ============================================== */}
      <section className="relative w-full min-h-screen bg-red-950 text-white overflow-hidden flex flex-col justify-center py-12">
        
        {/* 1. LAYER GAMBAR LOKAL (BACKGROUND) */}
        <div className="absolute inset-0 z-0">
          {/* Gambar Background */}
          <img 
            src="/image/background1.jpg" 
            alt="Waste Management Background" 
            // Menggunakan mix-blend-overlay agar tekstur gambar menyatu dengan warna merah
            className="w-full h-full object-cover opacity-50 mix-blend-overlay" 
          />
          
          {/* PERUBAHAN DISINI: Solid Overlay (Tanpa Gradasi) */}
          {/* bg-red-950 dengan opacity tinggi (80%) membuat tampilan rata dan elegan */}
          <div className="absolute inset-0 bg-red-950/80"></div>
        </div>

        {/* 2. PATTERN & AKSEN TAMBAHAN */}
        <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] pointer-events-none mix-blend-overlay z-0"></div>
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-white/5 rounded-full blur-[120px] pointer-events-none z-0"></div>

        {/* 3. KONTEN UTAMA (Z-INDEX 10 AGAR DI ATAS GAMBAR) */}
        <div className="container mx-auto px-6 lg:px-12 h-full flex flex-col lg:flex-row items-center gap-12 relative z-10">
          
          {/* KOLOM KIRI: NARASI */}
          <div className="w-full lg:w-5/12 space-y-8">
            <div>
              <h1 className="text-5xl lg:text-6xl font-serif font-bold leading-tight mb-6 text-white drop-shadow-sm">
                Mengubah Limbah <br />
                <span className="italic text-red-200">Menjadi Berkah</span>
              </h1>

              <p className="text-red-100 text-lg leading-relaxed max-w-md border-l-2 border-white pl-4">
                Temukan bagaimana Strawberry Corps menerapkan <strong>Pertanian Sirkular</strong> untuk mengatasi masalah limbah tani dan menciptakan ekosistem yang berkelanjutan di Pancasari.
              </p>
            </div>

            <button className="group flex items-center gap-3 px-8 py-3 border border-white/30 rounded-full hover:bg-white hover:text-red-950 transition-all duration-300 backdrop-blur-sm bg-white/10">
              <span className="font-medium tracking-wide">Jelajahi Solusi Kami</span>
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </button>

            {/* Navigasi Slide */}
            <div className="flex items-center gap-6 pt-8 border-t border-red-900/50">
              <span className="text-2xl font-serif text-white">
                0{currentIndex + 1} <span className="text-red-300 text-lg">/ 0{spotlightItems.length}</span>
              </span>
              
              <div className="flex gap-3">
                <button 
                  onClick={prevSlide} 
                  className="p-3 rounded-full border border-red-800 hover:bg-white hover:text-red-950 transition-colors bg-red-900/40 backdrop-blur-sm"
                >
                  <ChevronLeft size={20} />
                </button>
                <button 
                  onClick={nextSlide} 
                  className="p-3 rounded-full border border-red-800 hover:bg-white hover:text-red-950 transition-colors bg-red-900/40 backdrop-blur-sm"
                >
                  <ChevronRight size={20} />
                </button>
              </div>
            </div>
          </div>

          {/* KOLOM KANAN: SLIDER KARTU */}
          <div className="w-full lg:w-7/12 relative h-[500px] flex items-center pl-0 lg:pl-12">
            <div className="relative w-full h-full flex gap-6 overflow-hidden">
               <AnimatePresence mode='popLayout'>
                  {[0, 1].map((offset) => {
                    const itemIndex = (currentIndex + offset) % spotlightItems.length;
                    const item = spotlightItems[itemIndex];
                    
                    return (
                      <motion.div
                        key={item.id}
                        layout
                        initial={{ opacity: 0, x: 100 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -100 }}
                        transition={{ duration: 0.5, ease: "easeInOut" }}
                        className={`relative rounded-2xl overflow-hidden shrink-0 
                          ${offset === 0 ? 'w-full lg:w-[60%] z-20' : 'hidden lg:block lg:w-[35%] opacity-40 scale-90 z-10'}
                          h-[450px] shadow-2xl cursor-pointer group border border-red-900/50 backdrop-blur-md bg-white/5`}
                      >
                        <img 
                          src={item.image} 
                          alt={item.title} 
                          className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                        />
                        {/* Gradient pada kartu tetap dipertahankan agar teks kartu terbaca */}
                        <div className="absolute inset-0 bg-gradient-to-t from-red-950 via-red-900/60 to-transparent opacity-90"></div>
                        <div className="absolute bottom-0 left-0 p-8 w-full">
                           <span className="text-white text-xs font-bold tracking-widest uppercase mb-2 block">
                             {item.category}
                           </span>
                           <h3 className="text-2xl font-serif font-bold mb-3 leading-tight text-white group-hover:text-red-200 transition-colors">
                             {item.title}
                           </h3>
                           {offset === 0 && (
                             <motion.div 
                               initial={{ opacity: 0, height: 0 }}
                               animate={{ opacity: 1, height: 'auto' }}
                               transition={{ delay: 0.2 }}
                             >
                               <p className="text-red-100 text-sm line-clamp-3 leading-relaxed mb-4">
                                 {item.description}
                               </p>
                               <div className="h-1 w-12 bg-white rounded-full"></div>
                             </motion.div>
                           )}
                        </div>
                      </motion.div>
                    );
                  })}
               </AnimatePresence>
            </div>
          </div>
        </div>
      </section>

      {/* ==============================================
          SECTION 2: WASTE PHILOSOPHY
          ============================================== */}
      <section className="bg-stone-50 py-24 text-stone-900">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            
            {/* KOLOM KIRI: TEKS NARATIF */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <span className="text-red-700 font-bold tracking-widest text-sm uppercase mb-4 block">
                Misi Hijau Kami
              </span>
              
              <h2 className="text-4xl lg:text-5xl font-serif font-bold text-stone-900 mb-8 leading-tight">
                Komitmen Nol Limbah <br/> di Tanah Bedugul
              </h2>
              
              <div className="space-y-6 text-lg text-stone-600 leading-relaxed font-light">
                <p>
                  Strawberry Corps tidak hanya tentang memanen buah manis; kami adalah penjaga keseimbangan alam. 
                  Di tengah tantangan <strong>48+ ton limbah tani</strong> yang dihasilkan setiap bulan di desa kami, 
                  kami memilih untuk tidak diam. Kami melihat tumpukan sisa panen bukan sebagai sampah, melainkan 
                  sebagai sumber kehidupan yang tertunda.
                </p>
                <p>
                  Melalui konsep <strong>Pertanian Sirkular</strong>, kami mengembalikan apa yang diambil dari alam. 
                  Sisa batang dan buah tak layak jual diolah melalui rumah cacing (<em>vermicomposting</em>) dan fermentasi 
                  <em>eco-enzyme</em>. Ini bukan sekadar teknik, melainkan cara kami berterima kasih kepada tanah vulkanik 
                  yang subur ini.
                </p>
                <p>
                  Hasilnya adalah pupuk organik premium yang menyuburkan kembali kebun stroberi kami tanpa bahan kimia. 
                  Saat Anda menikmati produk Strawberry Corps, Anda turut mendukung siklus kebaikan yang menjaga 
                  Bedugul tetap asri dan lestari.
                </p>
              </div>
            </motion.div>

            {/* KOLOM KANAN: GAMBAR SINGLE BESAR */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative h-[500px] w-full rounded-sm overflow-hidden shadow-2xl"
            >
               <img 
                 src="/image/waste1.jpg" 
                 alt="Kebun Stroberi Bedugul yang Berkabut" 
                 className="absolute inset-0 w-full h-full object-cover"
               />
            </motion.div>

          </div>
        </div>
      </section>

        {/* ==============================================
            SECTION: ICON SUSTAINABILITY (MERAH + BG IMAGE)
          ============================================== */}
      <section className="relative py-20 text-white overflow-hidden">

      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-90"
        style={{
          backgroundImage: "url('/public/image/background2.jpg')",
        }}
      ></div>

      {/* Overlay Merah Gelap */}
      <div className="absolute inset-0 bg-red-950/90"></div>

      {/* CONTENT */}
      <div className="relative z-10 container mx-auto px-6 lg:px-12">
              
        {/* JUDUL SECTION */}
        <div className="text-center mb-14">
          <h2 className="text-4xl font-serif font-bold text-white mb-4">
            Pilar Pengelolaan Limbah Kami
          </h2>
          <p className="text-red-200 text-lg max-w-2xl mx-auto">
            Tiga pendekatan utama yang menjadi dasar pertanian sirkular di Strawberry Corps.
          </p>
        </div>

        {/* GRID ICON 3 */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">

          {/* ICON 1 */}
          <div className="flex flex-col items-center space-y-5">
            <img
              src="/recycle.png"
              alt="Recycle Icon"
              className="w-20 h-20 filter invert brightness-200"
            />
            <h3 className="text-2xl font-serif font-bold">Daur Ulang</h3>
          </div>

          {/* ICON 2 */}
          <div className="flex flex-col items-center space-y-5">
            <img 
              src="/fertilizer.png"
              alt="Fertilizer Icon"
              className="w-20 h-20 filter invert brightness-200"
            />
            <h3 className="text-2xl font-serif font-bold">Pupuk Organik</h3>
          </div>

          {/* ICON 3 */}
          <div className="flex flex-col items-center space-y-5">
            <img 
              src="/waste.png"
              alt="Organic Waste Icon"
              className="w-20 h-20 filter invert brightness-200"
            />
            <h3 className="text-2xl font-serif font-bold">Pengolahan Limbah</h3>
          </div>

        </div>

      </div>
    </section>



      {/* ==============================================
          SECTION 3: IMPACT STORY
          ============================================== */}
      <section className="bg-white py-24 text-stone-800 relative z-20 border-t border-stone-100">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            
            {/* --- KOLOM KIRI: IMAGE GRID --- */}
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="grid grid-cols-2 gap-4"
            >
              <div className="col-span-2 h-64 overflow-hidden rounded-2xl group">
                <img 
                  src="/image/waste5.jpg" 
                  alt="Petani panen stroberi" 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              
              <div className="h-64 overflow-hidden rounded-2xl group">
                <img 
                  src="/image/waste6.jpg" 
                  alt="Pengolahan Tanah" 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>

              <div className="h-64 overflow-hidden rounded-2xl group">
                <img 
                  src="/image/waste7.jpg" 
                  alt="Produk Eco Enzyme" 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
            </motion.div>


            {/* --- KOLOM KANAN: TYPOGRAPHY CONTENT --- */}
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="space-y-8 lg:pt-4"
            >
              <h2 className="text-4xl md:text-5xl font-serif font-bold text-red-950 leading-tight">
                Menutup Siklus, <br/>
                Memberdayakan Desa
              </h2>

              <p className="text-lg text-stone-600 leading-relaxed">
                Di Desa Pancasari, kami menghadapi realita bahwa lebih dari <strong>48 ton limbah tani</strong> dihasilkan setiap bulannya. Tanpa pengelolaan yang tepat, limbah ini sebelumnya hanya menjadi beban lahan dan sumber pencemaran lingkungan.
              </p>

              <p className="text-lg text-stone-600 leading-relaxed">
                Strawberry Corps hadir dengan solusi <strong>Pertanian Sirkular</strong>. Melalui metode <em>vermicomposting</em> dan pembuatan <em>eco-enzyme</em>, kami mengembalikan sisa panen ke alam. Langkah ini tidak hanya menutup siklus hara, tetapi juga memperbaiki kesuburan tanah secara alami tanpa bahan kimia berbahaya.
              </p>

              <div className="bg-red-50 p-6 rounded-xl border-l-4 border-red-800">
                <p className="text-stone-700 font-medium italic">
                  "Upaya ini terbukti meningkatkan nilai ekonomi petani hingga <strong>133%</strong> dibandingkan jika mereka hanya menjual hasil panen mentah kepada tengkulak."
                </p>
              </div>


            </motion.div>
          </div>
        </div>
      </section>

    </div>
  );
}