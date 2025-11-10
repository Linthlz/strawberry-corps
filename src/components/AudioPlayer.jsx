import { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Volume2, VolumeX } from 'lucide-react'; // Ikon untuk mute/unmute

export default function AudioPlayer() {
  const [isMuted, setIsMuted] = useState(true); // Mulai dalam keadaan Muted
  const audioRef = useRef(null);

  // Efek ini untuk memastikan audioRef sudah ada
  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.muted = isMuted;
    }
  }, []);

  const toggleMute = () => {
    const newMutedState = !isMuted;
    setIsMuted(newMutedState);
    if (audioRef.current) {
      audioRef.current.muted = newMutedState;
    }
  };

  return (
    <>
      {/* Elemen audio yang tersembunyi */}
      <audio ref={audioRef} src="/audio/music.mp3" autoPlay loop muted />
      
      {/* === PERUBAHAN DI SINI === */}
      <motion.button
        onClick={toggleMute}
        // Ukuran diubah ke h-10 w-10, warna diubah ke abu-abu transparan + blur
        className="fixed bottom-6 left-6 z-40 flex h-10 w-10 items-center justify-center rounded-full bg-gray-100/60 backdrop-blur-sm text-white shadow-2xl"
        aria-label={isMuted ? 'Nyalakan suara' : 'Matikan suara'}
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ type: 'spring', stiffness: 260, damping: 20, delay: 0.5 }}
        whileHover={{ scale: 1.1 }}
      >
        {/* Ukuran ikon diubah ke 18 */}
        {isMuted ? <VolumeX size={18} /> : <Volume2 size={18} />}
      </motion.button>
      {/* ======================= */}
    </>
  );
}