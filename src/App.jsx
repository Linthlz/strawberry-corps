import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import ScrollToTopButton from './components/ScrollToTopButton.jsx';
import AudioPlayer from './components/AudioPlayer.jsx';

// === Import Halaman ===
import HomePage from './pages/HomePage.jsx';
import ProductsPage from './pages/ProductsPage.jsx';
import AboutPage from './pages/AboutPage.jsx';

// Tambahan agar sesuai navLinks
import EducationPage from './pages/EducationPage.jsx';
import WastePage from './pages/WastePage.jsx';
import CommunityPage from './pages/CommunityPage.jsx';

function App() {
  const location = useLocation();

  return (
    <>
      {/* Header selalu tampil */}
      <Header />

      {/* Audio Player global */}
      <AudioPlayer />

      <main>
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            
            {/* Halaman sesuai navLinks dari Header */}
            <Route path="/" element={<HomePage />} />
            <Route path="/education" element={<EducationPage />} />
            <Route path="/products" element={<ProductsPage />} />
            <Route path="/waste" element={<WastePage />} />
            <Route path="/community" element={<CommunityPage />} />

            {/* Halaman tambahan */}
            <Route path="/about" element={<AboutPage />} />

          </Routes>
        </AnimatePresence>
      </main>

      {/* Tombol Scroll to Top */}
      <ScrollToTopButton />

      {/* Footer global */}
      <Footer />
    </>
  );
}

export default App;
