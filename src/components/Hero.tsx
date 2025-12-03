import { Code, Zap, Lightbulb, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black"
    >
      {/* Subtle Animated Background Grid */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-green-500 to-transparent rounded-full blur-3xl"
          animate={{
            x: [0, 100, 0],
            y: [0, 50, 0],
          }}
          transition={{ duration: 20, repeat: Infinity }}
          style={{ opacity: 0.04 }}
        />
        <motion.div
          className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-tr from-blue-500 to-transparent rounded-full blur-3xl"
          animate={{
            x: [0, -100, 0],
            y: [0, -50, 0],
          }}
          transition={{ duration: 25, repeat: Infinity, delay: 2 }}
          style={{ opacity: 0.04 }}
        />
      </div>

      {/* Minimal Neon Shape - More Subtle */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-30 md:opacity-40">
        <motion.div
          className="w-[300px] h-[300px] md:w-[400px] md:h-[400px]"
          animate={{
            opacity: [0.3, 0.5, 0.3],
            scale: [1, 1.02, 1],
          }}
          transition={{ duration: 4, repeat: Infinity }}
        >
          <svg viewBox="0 0 420 420" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect
              x="60"
              y="60"
              width="300"
              height="300"
              stroke="#00ff41"
              strokeWidth="2"
              filter="url(#neonFilter)"
            />
            <circle cx="210" cy="210" r="100" stroke="#00ff41" strokeWidth="1" opacity="0.4" />
            <defs>
              <filter id="neonFilter" x="0" y="0" width="420" height="420">
                <feDropShadow dx="0" dy="0" stdDeviation="6" floodColor="#00ff41" floodOpacity="0.8"/>
              </filter>
            </defs>
          </svg>
        </motion.div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col items-center justify-center min-h-screen text-center">
          {/* Subtitle Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-8 inline-block"
          >
            <div className="border border-green-500/40 rounded-full px-6 py-2">
              <span className="text-xs font-semibold text-green-500 tracking-widest uppercase">
                Transformação Digital
              </span>
            </div>
          </motion.div>

          {/* Main Title */}
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-6xl md:text-7xl lg:text-8xl font-black text-white mb-8 leading-tight"
          >
            Digital.
            <br />
            <span className="text-green-500">Rápido.</span>
            <br />
            Seguro.
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-lg md:text-xl text-white/70 max-w-2xl mb-12 font-light"
          >
            Tecnologia que impulsiona negócios. Soluções escaláveis, seguras e focadas em resultados reais.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="flex flex-col sm:flex-row gap-4 mb-6"
          >
            <motion.a
              href="#portfolio"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 rounded-full bg-green-500 text-black font-black uppercase tracking-wider hover:bg-green-400 transition-all duration-300 shadow-[0_0_25px_rgba(0,255,65,0.5)] hover:shadow-[0_0_40px_rgba(0,255,65,0.7)] inline-flex items-center gap-2 justify-center"
            >
              Ver Nossos Projetos
              <ArrowRight className="w-4 h-4" />
            </motion.a>
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 rounded-full border-2 border-white/20 text-white font-black uppercase tracking-wider hover:border-green-500 hover:text-green-500 hover:bg-green-500/10 transition-all duration-300 inline-flex items-center gap-2 justify-center"
            >
              Agendar Conversa
            </motion.a>
          </motion.div>

          {/* Trust Text */}
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.9 }}
            className="text-xs text-white/50 uppercase tracking-widest font-semibold"
          >
            ✓ 150+ Projetos Entregues • ✓ 80+ Clientes Satisfeitos • ✓ 9+ Anos de Experiência
          </motion.p>

          {/* Scroll Indicator */}
          <motion.div
            className="absolute bottom-10 left-1/2 -translate-x-1/2"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <div className="flex flex-col items-center gap-2">
              <span className="text-xs text-white/50 uppercase tracking-widest font-semibold">Scroll</span>
              <svg
                className="w-6 h-6 text-green-500/50"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
              </svg>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
