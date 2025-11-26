import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { label: "Sobre", href: "#about" },
    { label: "Serviços", href: "#services" },
    { label: "Clientes", href: "#portfolio" },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-black/80 backdrop-blur-xl shadow-lg border-b border-green-500/20"
          : "bg-black/60 backdrop-blur-xl"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <motion.a
            href="#home"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection("#home");
            }}
            className="flex items-center gap-2 group"
            whileHover={{ scale: 1.05 }}
          >
            <motion.div
              className="w-8 h-8 flex items-center justify-center"
              style={{ filter: "drop-shadow(0 0 8px #00ff41)" }}
            >
              {/* Neon SVG logo */}
              <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M6 16L16 6L26 16L16 26Z" stroke="#00ff41" strokeWidth="2.5" strokeLinejoin="round" />
              </svg>
            </motion.div>
            <span className="text-white text-xl font-bold tracking-tight">nexus</span>
          </motion.a>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-10">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(item.href);
                }}
                className="text-white text-base font-medium hover:text-green-500 transition-colors px-2"
              >
                {item.label}
              </a>
            ))}
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button
                variant="outline"
                size="lg"
                onClick={() => scrollToSection("#contact")}
                className="border-green-500 text-white font-semibold px-6 py-2 rounded-full shadow-[0_0_16px_#00ff41] hover:bg-green-500/10 hover:text-green-500 transition-all"
                style={{ boxShadow: "0 0 16px #00ff41" }}
              >
                Fale com a gente
              </Button>
            </motion.div>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden flex items-center justify-center w-10 h-10 rounded-full border border-green-500 text-white bg-black/60 shadow-[0_0_8px_#00ff41]"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            style={{ boxShadow: "0 0 8px #00ff41" }}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-black/80 backdrop-blur-xl border-t border-green-500/20"
          >
            <div className="container mx-auto px-4 py-6 space-y-4">
              {navItems.map((item, index) => (
                <motion.a
                  key={item.label}
                  href={item.href}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection(item.href);
                  }}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05 }}
                  className="block text-white hover:text-green-500 transition-colors py-2 text-base font-medium"
                >
                  {item.label}
                </motion.a>
              ))}
              <Button
                variant="outline"
                size="lg"
                className="w-full border-green-500 text-white font-semibold rounded-full shadow-[0_0_16px_#00ff41] hover:bg-green-500/10 hover:text-green-500 transition-all"
                style={{ boxShadow: "0 0 16px #00ff41" }}
                onClick={() => scrollToSection("#contact")}
              >
                Fale com a gente
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
