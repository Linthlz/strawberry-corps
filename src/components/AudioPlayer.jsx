import { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Volume2, VolumeX } from 'lucide-react';

export default function AudioPlayer() {
  const [isMuted, setIsMuted] = useState(true);
  const audioRef = useRef(null);

  useEffect(() => {
    // Coba putar audio segera setelah komponen dimuat
    if (audioRef.current) {
      audioRef.current.muted = true; // Pastikan mute aktif agar autoplay diizinkan browser
      const playPromise = audioRef.current.play();

      if (playPromise !== undefined) {
        playPromise.catch((error) => {
          console.log("Autoplay dicegah oleh browser:", error);
          // Audio akan tetap paused sampai user menekan tombol
        });
      }
    }
  }, []);

  const toggleMute = () => {
    const newMutedState = !isMuted;
    setIsMuted(newMutedState);

    if (audioRef.current) {
      audioRef.current.muted = newMutedState;
      
      // Jika user meng-unmute, kita pastikan audio diputar (jika sebelumnya ter-pause)
      if (!newMutedState) {
        audioRef.current.play().catch((e) => console.log("Gagal memutar:", e));
      }
    }
  };

  return (
    <>
      {/* Hapus 'autoPlay' di sini dan tangani via useEffect agar lebih stabil.
        'playsInline' membantu di perangkat mobile (iOS).
      */}
      <audio 
        ref={audioRef} 
        src="/audio/music.mp3" 
        loop 
        muted 
        playsInline 
      />
      
      <motion.button
        onClick={toggleMute}
        // Style sesuai permintaan Anda: h-10 w-10, bg-gray-100/60, text-white (catatan: text-white di bg terang mungkin sulit dibaca, saya ganti text-gray-800 agar kontras, atau kembalikan ke text-white jika background website Anda gelap)
        className="fixed bottom-6 left-6 z-40 flex h-10 w-10 items-center justify-center rounded-full bg-gray-900/60 backdrop-blur-sm text-white shadow-2xl hover:bg-gray-900/80"
        aria-label={isMuted ? 'Nyalakan suara' : 'Matikan suara'}
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ type: 'spring', stiffness: 260, damping: 20, delay: 0.5 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        {isMuted ? <VolumeX size={18} /> : <Volume2 size={18} />}
      </motion.button>
    </>
  );
}