import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const ScrollEffect = () => {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercent = docHeight > 0 ? scrollTop / docHeight : 0;
      setScrollProgress(scrollPercent);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Scroll Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 h-1 bg-gradient-to-r from-green-400 via-green-500 to-green-600 z-[9997]"
        style={{
          width: `${scrollProgress * 100}%`,
          boxShadow: "0 0 20px rgba(0, 255, 65, 0.8)",
        }}
        initial={{ opacity: 0 }}
        animate={{ opacity: scrollProgress > 0 ? 0.8 : 0 }}
      />

      {/* Subtle Scroll Glow */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-32 pointer-events-none z-[9996]"
        style={{
          background: `linear-gradient(to bottom, 
            rgba(0, 255, 65, ${scrollProgress * 0.08}), 
            transparent)`,
        }}
      />
    </>
  );
};

export default ScrollEffect;
