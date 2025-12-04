import { Link } from 'react-router-dom';
// Impor ikon sosial media (Youtube dihapus karena tidak dipakai)
import { Instagram, Facebook } from 'lucide-react'; 

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-stone-900 text-stone-300">
      <div className="container mx-auto max-w-7xl px-4 py-16">
        
        {/* Bagian Atas: Logo & Links */}
        <div className="grid grid-cols-2 gap-12 md:grid-cols-4 lg:grid-cols-5">
          
          {/* Kolom 1: Logo & Tagline */}
          <div className="col-span-2 lg:col-span-2">
            
            {/* === LOGO DAN TEKS === */}
            <Link to="/" className="mb-4 inline-flex items-center gap-3" aria-label="Beranda Strawberry Corps">
              <img 
                src="/image/logo.png" 
                alt="Strawberry Corps Logo" 
                className="h-10 w-auto" 
              />
              <span className="font-serif text-2xl font-bold text-white">
                Strawberry Corps
              </span>
            </Link>

            <p className="font-sans text-sm text-stone-400 max-w-xs">
              Olahan Stroberi Asli Bedugul. Dari kebun kami, dibuat dengan hati, langsung untuk Anda.
            </p>
          </div>

          {/* Kolom 2: Navigasi */}
          <div>
            <h3 className="font-serif text-sm font-semibold uppercase tracking-wider text-white mb-4">Halaman</h3>
            <nav className="flex flex-col space-y-3">
              <Link to="/" className="footer-link hover:text-white transition-colors">Beranda</Link>
              <Link to="/products" className="footer-link hover:text-white transition-colors">Produk</Link>
              <Link to="/about" className="footer-link hover:text-white transition-colors">Tentang Kami</Link>
            </nav>
          </div>

          {/* Kolom 3: Kategori */}
          <div>
            <h3 className="font-serif text-sm font-semibold uppercase tracking-wider text-white mb-4">Kategori</h3>
            <nav className="flex flex-col space-y-3">
              <Link to="/products" className="footer-link hover:text-white transition-colors">Selai</Link>
              <Link to="/products" className="footer-link hover:text-white transition-colors">Minuman</Link>
              <Link to="/products" className="footer-link hover:text-white transition-colors">Camilan</Link>
              <Link to="/products" className="footer-link hover:text-white transition-colors">Kue</Link>
            </nav>
          </div>

          {/* Kolom 4: Kontak (DIPERBARUI) */}
          <div>
            <h3 className="font-serif text-sm font-semibold uppercase tracking-wider text-white mb-4">Kontak</h3>
            <nav className="flex flex-col space-y-3">
              {/* WhatsApp Link */}
              <a 
                href="https://wa.me/6285237601943" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="footer-link hover:text-white transition-colors"
              >
                WhatsApp
              </a>
              
              {/* Google Maps Link */}
              <a 
                href="https://www.google.com/maps/search/?api=1&query=Hidden+Strawberry+Garden+Bedugul" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="footer-link hover:text-white transition-colors"
              >
                Lokasi (Maps)
              </a>
            </nav>
          </div>
        </div>

        {/* Garis Pemisah */}
        <hr className="my-10 border-stone-700" />

        {/* Bagian Bawah: Copyright & Socials */}
        <div className="flex flex-col-reverse items-center justify-between md:flex-row">
          <p className="mt-4 md:mt-0 font-sans text-sm text-stone-500">
            © {currentYear} Strawberry Corps. All rights reserved.
          </p>
          
          <div className="flex space-x-4">
            {/* Facebook */}
            <a 
              href="https://www.facebook.com/strawberry_corps" 
              target="_blank" 
              rel="noopener noreferrer" 
              aria-label="Facebook" 
              className="footer-social-link text-stone-400 hover:text-white transition-colors"
            >
              <Facebook size={20} />
            </a>
            
            {/* Instagram */}
            <a 
              href="https://www.instagram.com/strawberry_corps" 
              target="_blank" 
              rel="noopener noreferrer" 
              aria-label="Instagram" 
              className="footer-social-link text-stone-400 hover:text-white transition-colors"
            >
              <Instagram size={20} />
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
}