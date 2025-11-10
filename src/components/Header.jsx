import { useState, useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { motion, useScroll, useMotionValueEvent, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { href: '/', label: 'Beranda' },
  { href: '/products', label: 'Produk' },
  { href: '/about', label: 'Tentang Kami' },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isHidden, setIsHidden] = useState(false);
  const { scrollY } = useScroll();

  // Deteksi halaman saat ini
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  // Sembunyikan header saat scroll ke bawah
  useMotionValueEvent(scrollY, 'change', (latest) => {
    const previous = scrollY.getPrevious();
    if (latest > previous && latest > 150) {
      setIsHidden(true);
    } else {
      setIsHidden(false);
    }
  });

  // Ganti background header saat scroll
  const [isScrolled, setIsScrolled] = useState(false);
  useEffect(() => {
    return scrollY.on('change', (latest) => {
      setIsScrolled(latest > 50);
    });
  }, [scrollY]);

  // LOGIKA PENTING: Header solid JIKA:
  // (Bukan di HomePage) ATAU (Kita di HomePage TAPI sudah di-scroll)
  const isSolid = !isHomePage || isScrolled;

  return (
    <>
      <motion.header
        variants={{
          visible: { y: 0 },
          hidden: { y: '-100%' },
        }}
        animate={isHidden ? 'hidden' : 'visible'}
        transition={{ duration: 0.35, ease: 'easeInOut' }}
        className={`fixed top-0 z-50 w-full transition-all duration-300
          ${isSolid ? 'bg-white shadow-md' : 'bg-transparent'}
        `}
      >
        <nav className="container mx-auto flex max-w-7xl items-center justify-between px-4 py-4">
          
          {/* === LOGO DAN TEKS DIGABUNGKAN DI SINI === */}
          <Link to="/" className="flex items-center gap-3" aria-label="Beranda Strawberry Corps">
            {/* 1. Gambar Logo */}
            <img 
              src="/image/logo.png" // Menggunakan logo.png sesuai kode Anda
              alt="Strawberry Corps Logo" 
              className="h-10 w-auto" // Sesuaikan tinggi logo (h-10)
            />
            {/* 2. Teks Logo (dengan warna dinamis) */}
            <span 
              className="text-2xl font-bold font-serif transition-colors"
              style={{ color: isSolid ? '#b91c1c' : '#ffffff' }} 
            >
              Strawberry Corps
            </span>
          </Link>
          {/* ======================================== */}
          
          {/* Link teks duplikat sudah dihapus */}

          {/* Nav Desktop */}
          <div className="hidden items-center space-x-6 md:flex">
            {navLinks.map((link) => (
              <NavLink
                key={link.href}
                to={link.href}
                className={({ isActive }) =>
                  `font-sans font-medium transition-colors ${
                    isSolid ? 'text-stone-700' : 'text-white' 
                  } ${
                    isActive
                      ? 'text-strawberry-dark'
                      : 'hover:text-strawberry'
                  }`
                }
              >
                {link.label}
              </NavLink>
            ))}
          </div>

          {/* Tombol Nav Mobile */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(true)}
              className={isSolid ? 'text-stone-800' : 'text-white'}
              aria-label="Buka menu"
            >
              <Menu size={28} />
            </button>
          </div>
        </nav>
      </motion.header>

      {/* Drawer Menu Mobile (menggunakan framer-motion) */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            className="fixed inset-y-0 right-0 z-50 w-full max-w-sm bg-white p-6 shadow-xl"
            role="dialog"
            aria-modal="true"
          >
            <div className="flex items-center justify-between">
              {/* Judul menu mobile diubah menjadi nama brand */}
              <span className="font-serif text-xl font-bold text-strawberry-dark">
                Strawberry Corps
              </span>
              <button onClick={() => setIsOpen(false)} aria-label="Tutup menu">
                <X size={28} className="text-stone-700" />
              </button>
            </div>
            <nav className="mt-8 flex flex-col space-y-6">
              {navLinks.map((link) => (
                <NavLink
                  key={link.href}
                  to={link.href}
                  onClick={() => setIsOpen(false)}
                  className={({ isActive }) =>
                    `text-2xl font-medium ${
                      isActive ? 'text-strawberry-dark' : 'text-stone-700'
                    }`
                  }
                >
                  {link.label}
                </NavLink>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}