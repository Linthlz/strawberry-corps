import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
// import WhatsAppButton from './components/WhatsAppButton.jsx'; // <-- Hapus atau ganti nama ini
import ScrollToTopButton from './components/ScrollToTopButton.jsx'; // <-- GANTI DENGAN INI
import AudioPlayer from './components/AudioPlayer.jsx'; // <-- TAMBAHKAN INI

// Impor semua halaman Anda
import HomePage from './pages/HomePage.jsx';
import ProductsPage from './pages/ProductsPage.jsx';
import AboutPage from './pages/AboutPage.jsx';

function App() {
  const location = useLocation();

  return (
    <>
      <Header />
      <AudioPlayer /> {/* <-- TAMBAHKAN INI */}
      
      <main>
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<HomePage />} />
            <Route path="/products" element={<ProductsPage />} />
            <Route path="/about" element={<AboutPage />} />
          </Routes>
        </AnimatePresence>
      </main>
      
      <ScrollToTopButton /> {/* <-- GANTI INI */}
      <Footer />
    </>
  );
}

export default App;