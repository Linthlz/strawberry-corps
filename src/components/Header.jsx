import { useState, useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { motion, useScroll, useMotionValueEvent, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

// === MENU LENGKAP (5 PILAR) ===
const navLinks = [
  { href: '/', label: 'Agro Tourism' }, 
  { href: '/education', label: 'Educational Activities' },
  { href: '/products', label: 'Product' },
  { href: '/waste', label: 'Waste Management' },
  { href: '/community', label: 'Community Development' },
  { href: '/about', label: 'About' },
];
// ==============================

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isHidden, setIsHidden] = useState(false);
  const { scrollY } = useScroll();

  const location = useLocation();
  
  // 1. Deteksi halaman
  const isHomePage = location.pathname === '/';
  const isWastePage = location.pathname === '/waste'; // Menambahkan deteksi halaman Waste

  useMotionValueEvent(scrollY, 'change', (latest) => {
    const previous = scrollY.getPrevious();
    if (latest > previous && latest > 150) {
      setIsHidden(true);
    } else {
      setIsHidden(false);
    }
  });

  const [isScrolled, setIsScrolled] = useState(false);
  useEffect(() => {
    return scrollY.on('change', (latest) => {
      setIsScrolled(latest > 50);
    });
  }, [scrollY]);

  // 2. Logika Warna Header (PENTING)
  // Header dianggap "Solid" (Putih) jika:
  // - Sudah di-scroll (isScrolled true)
  // - ATAU: Sedang BUKAN di Homepage DAN BUKAN di Wastepage
  // (Artinya: Di Home dan Wastepage, header akan Transparan saat di paling atas)
  const isSolid = isScrolled || (!isHomePage && !isWastePage);

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
          
          {/* Logo & Teks Brand */}
          <Link to="/" className="flex items-center gap-3" aria-label="Beranda Strawberry Corps">
            <img 
              src="/image/logo.png" 
              alt="Strawberry Corps Logo" 
              className="h-10 w-auto" 
            />
            <span 
              className="text-2xl font-bold font-serif transition-colors"
              // Text berubah jadi Merah saat solid, Putih saat transparan
              style={{ color: isSolid ? '#b91c1c' : '#ffffff' }} 
            >
              Strawberry Corps
            </span>
          </Link>

          {/* Nav Desktop */}
          <div className="hidden xl:flex items-center space-x-6">
            {navLinks.map((link) => (
              <NavLink
                key={link.href}
                to={link.href}
                className={({ isActive }) =>
                  `font-sans text-sm font-medium transition-colors ${
                    // Warna Link menyesuaikan background header
                    isSolid ? 'text-stone-700' : 'text-white' 
                  } ${
                    isActive
                      // Jika aktif: Merah Gelap saat solid, atau tetap Putih/Merah terang saat transparan
                      ? (isSolid ? 'text-strawberry-dark font-bold' : 'font-bold underline decoration-2 underline-offset-4')
                      : 'hover:text-strawberry'
                  }`
                }
              >
                {link.label}
              </NavLink>
            ))}
          </div>

          {/* Tombol Nav Mobile */}
          <div className="xl:hidden">
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

      {/* Drawer Menu Mobile */}
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
              <span className="font-serif text-xl font-bold text-strawberry-dark">
                Strawberry Corps
              </span>
              <button onClick={() => setIsOpen(false)} aria-label="Tutup menu">
                <X size={28} className="text-stone-700" />
              </button>
            </div>
            <nav className="mt-8 flex flex-col space-y-4">
              {navLinks.map((link) => (
                <NavLink
                  key={link.href}
                  to={link.href}
                  onClick={() => setIsOpen(false)}
                  className={({ isActive }) =>
                    `text-lg font-medium border-b border-gray-100 pb-2 ${
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