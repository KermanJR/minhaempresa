import { Code, Zap, Lightbulb, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const Hero = () => {
  // Minimalist hero, no scroll, no cards, no CTA

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black"
    >
      {/* Neon Animated Logo/Shape */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <motion.div
          className="w-[420px] h-[420px]"
          style={{ filter: "drop-shadow(0 0 40px #00ff41)" }}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: [1, 1.05, 0.95, 1] }}
          transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
        >
          {/* SVG Neon Shape - can be replaced with your logo */}
          <svg viewBox="0 0 420 420" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M60 210 L210 60 L360 210 L210 360 Z"
              stroke="#00ff41"
              strokeWidth="8"
              strokeLinejoin="round"
              filter="url(#neon)"
            />
            <defs>
              <filter id="neon" x="0" y="0" width="420" height="420" filterUnits="userSpaceOnUse">
                <feDropShadow dx="0" dy="0" stdDeviation="8" flood-color="#00ff41"/>
              </filter>
            </defs>
          </svg>
        </motion.div>
      </div>

      {/* Minimal Content */}
      <div className="container mx-auto px-4 relative z-10 flex flex-col items-center justify-center">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-center text-[5rem] md:text-[7rem] font-black text-white mb-6 leading-none"
        >
          Digital. Rápido. Seguro.
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="text-center text-green-500 text-2xl font-medium mb-2"
        >
          Tecnologia que impulsiona negócios.
        </motion.p>
      </div>
    {/* ...existing code... */}
    </section>
  );
};

export default Hero;
