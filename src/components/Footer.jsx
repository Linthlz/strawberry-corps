import { Link } from 'react-router-dom';
// Impor ikon sosial media
import { Instagram, Facebook, Youtube } from 'lucide-react'; 

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-stone-900 text-stone-300">
      <div className="container mx-auto max-w-7xl px-4 py-16">
        
        {/* Bagian Atas: Logo & Links */}
        <div className="grid grid-cols-2 gap-12 md:grid-cols-4 lg:grid-cols-5">
          
          {/* Kolom 1: Logo & Tagline (dibuat lebih lebar) */}
          <div className="col-span-2 lg:col-span-2">
            
            {/* === LOGO DAN TEKS DIGABUNGKAN DI SINI === */}
            <Link to="/" className="mb-4 inline-flex items-center gap-3" aria-label="Beranda Strawberry Corps">
              {/* 1. Gambar Logo (Versi terang untuk background gelap) */}
              <img 
                src="/image/logo.png" // Pastikan Anda punya logo versi terang
                alt="Strawberry Corps Logo" 
                className="h-10 w-auto" 
              />
              {/* 2. Teks Logo */}
              <span className="font-serif text-2xl font-bold text-white">
                Strawberry Corps
              </span>
            </Link>
            {/* ======================================== */}

            <p className="font-sans text-sm text-stone-400 max-w-xs">
              Olahan Stroberi Asli Bedugul. Dari kebun kami, dibuat dengan hati, langsung untuk Anda.
            </p>
          </div>

          {/* Kolom 2: Navigasi */}
          <div>
            <h3 className="font-serif text-sm font-semibold uppercase tracking-wider text-white mb-4">Halaman</h3>
            <nav className="flex flex-col space-y-3">
              <Link to="/" className="footer-link">Beranda</Link>
              <Link to="/products" className="footer-link">Produk</Link>
              <Link to="/about" className="footer-link">Tentang Kami</Link>
            </nav>
          </div>

          {/* Kolom 3: Kategori (Contoh) */}
          <div>
            <h3 className="font-serif text-sm font-semibold uppercase tracking-wider text-white mb-4">Kategori</h3>
            <nav className="flex flex-col space-y-3">
              <Link to="/products" className="footer-link">Selai</Link>
              <Link to="/products" className="footer-link">Minuman</Link>
              <Link to="/products" className="footer-link">Camilan</Link>
              <Link to="/products" className="footer-link">Kue</Link>
            </nav>
          </div>

          {/* Kolom 4: Kontak */}
          <div>
            <h3 className="font-serif text-sm font-semibold uppercase tracking-wider text-white mb-4">Kontak</h3>
            <nav className="flex flex-col space-y-3">
              <a href="#" className="footer-link">WhatsApp</a>
              <a href="#" className="footer-link">Lokasi (Maps)</a>
              <a href="#" className="footer-link">info@strawberrycorps.com</a>
            </nav>
          </div>
        </div>

        {/* Garis Pemisah */}
        <hr className="my-10 border-stone-700" />

        {/* Bagian Bawah: Copyright & Socials */}
        <div className="flex flex-col-reverse items-center justify-between md:flex-row">
          <p className="mt-4 md:mt-0 font-sans text-sm text-stone-500">
            &copy; {currentYear} Strawberry Corps. All rights reserved.
          </p>
          <div className="flex space-x-4">
            <a href="#" aria-label="Facebook" className="footer-social-link">
              <Facebook size={20} />
            </a>
            <a href="#" aria-label="Instagram" className="footer-social-link">
              <Instagram size={20} />
            </a>
            <a href="#" aria-label="YouTube" className="footer-social-link">
              <Youtube size={20} />
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
}