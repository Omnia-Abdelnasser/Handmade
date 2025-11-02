"use client";

import { useEffect, useState } from "react";
import { FaWhatsapp } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

export default function WhatsAppFloating() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.a
          href="https://wa.me/201094963250"
          target="_blank"
          rel="noopener noreferrer"
          initial={{ opacity: 0, x: 60, scale: 0.5 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          exit={{ opacity: 0, x: 60, scale: 0.5 }}
          transition={{ duration: 0.6, type: "spring" }}
          className="fixed bottom-6 right-6 p-2 rounded-full bg-green-500 text-white shadow-lg z-50 hover:bg-green-600 hover:scale-110 transition-all duration-300 animate-bounce"
        >
          <FaWhatsapp size={28} />
        </motion.a>
      )}
    </AnimatePresence>
  );
}
