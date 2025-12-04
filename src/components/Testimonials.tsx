import { Star, Quote, ChevronLeft, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  const testimonials = [
    {
      name: "Robson Souza",
      role: "Diretor de TI",
      company: "Avipam",
      content:
        "Itens necessário vistos ao longo do projeto foram inclusos na sprint vigente e atendidos sem prejuizo à entrega do projeto.",
      rating: 10,
      nps: 10,
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Robson",
      gradientFrom: "from-green-500",
      gradientTo: "to-emerald-500",
    },
    {
      name: "Isabelle Kopper",
      role: "CEO",
      company: "Biblioteca das Rochas",
      content:
        "Tudo tem sido atendido e a equipe é transparente, o que nos dá confiança de que estamos no local correto.",
      rating: 10,
      nps: 10,
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Isabelle",
      gradientFrom: "from-purple-500",
      gradientTo: "to-pink-500",
    },
    {
      name: "Luis Albinati",
      role: "CTO",
      company: "Caveo",
      content:
        "Boa parte do backlog foi executada sem problemas. Excelente comprometimento e ownership.",
      rating: 10,
      nps: 10,
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Luis",
      gradientFrom: "from-blue-500",
      gradientTo: "to-cyan-500",
    },
  ];

  const handlePrevious = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? testimonials.length - 1 : prev - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prev) =>
      prev === testimonials.length - 1 ? 0 : prev + 1
    );
  };

  return (
    <section className="relative min-h-screen bg-black overflow-hidden py-32">
      {/* Animated Background Gradient */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute -top-40 -left-40 w-80 h-80 bg-gradient-to-br from-purple-500 to-transparent rounded-full blur-3xl"
          animate={{
            x: [0, 100, 0],
            y: [0, 50, 0],
          }}
          transition={{ duration: 20, repeat: Infinity }}
          style={{ opacity: 0.07 }}
        />
        <motion.div
          className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-tr from-blue-500 to-transparent rounded-full blur-3xl"
          animate={{
            x: [0, -100, 0],
            y: [0, -50, 0],
          }}
          transition={{ duration: 25, repeat: Infinity, delay: 2 }}
          style={{ opacity: 0.07 }}
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.1 }}
            viewport={{ once: true }}
            className="mb-6 flex justify-center"
          >
            <img src="/fav1.png" alt="Nexus Developer" className="h-12 w-auto" />
          </motion.div>
          <div className="inline-block border border-green-500/40 rounded-full px-6 py-2 mb-8">
            <span className="text-xs font-semibold text-green-500 tracking-widest uppercase">
              Depoimentos
            </span>
          </div>
          <h2 className="text-5xl md:text-6xl font-black text-white">
            O que nossos clientes dizem
          </h2>
        </motion.div>

        {/* Main Container - Left NPS + Right Carousel */}
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-screen">
          {/* Left Side - NPS Stats */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="flex flex-col justify-center"
          >
            {/* Large NPS Number */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h2 className="text-8xl md:text-9xl font-black text-white mb-4">
                80<span className="text-green-500">%</span>
              </h2>
            </motion.div>

            {/* Star Rating */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
              className="flex gap-1 mb-6"
            >
              {[...Array(10)].map((_, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.3 + i * 0.05 }}
                  viewport={{ once: true }}
                >
                  <Star className="w-4 h-4 fill-purple-500 text-purple-500" />
                </motion.div>
              ))}
            </motion.div>

            {/* Title */}
            <motion.h3
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl font-black text-white mb-4"
            >
              Zona de Excelência
            </motion.h3>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              viewport={{ once: true }}
              className="text-lg text-white/70 mb-12"
            >
              Estamos acima de muitas empresas do nosso setor.
            </motion.p>

            {/* Navigation Arrows */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              viewport={{ once: true }}
              className="flex gap-4"
            >
              <motion.button
                onClick={handlePrevious}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="p-3 rounded-full border border-green-500/50 text-green-500 hover:border-green-500 hover:text-green-400 hover:bg-green-500/10 transition-all duration-300"
              >
                <ChevronLeft className="w-6 h-6" />
              </motion.button>
              <motion.button
                onClick={handleNext}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="p-3 rounded-full border border-green-500/50 text-green-500 hover:border-green-500 hover:text-green-400 hover:bg-green-500/10 transition-all duration-300"
              >
                <ChevronRight className="w-6 h-6" />
              </motion.button>
            </motion.div>
          </motion.div>

          {/* Right Side - Testimonials Carousel */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="flex flex-col items-center gap-8"
          >
            {/* Carousel Cards */}
            <div className="relative w-full h-[500px] perspective">
              {testimonials.map((testimonial, idx) => {
                const isActive = idx === currentIndex;
                const distance = Math.abs(idx - currentIndex);
                const isNext = (currentIndex + 1) % testimonials.length === idx;
                const isPrev =
                  (currentIndex - 1 + testimonials.length) % testimonials.length === idx;

                return (
                  <motion.div
                    key={idx}
                    layout
                    initial={{ opacity: 0, scale: 0.8, y: 40 }}
                    animate={{
                      opacity: isActive ? 1 : isPrev ? 0.6 : isNext ? 0.6 : 0.3,
                      scale: isActive ? 1 : 0.9,
                      y: isActive ? 0 : isPrev ? -20 : isNext ? 20 : 40,
                      x: isActive ? 0 : isPrev ? -60 : isNext ? 60 : 0,
                      zIndex: isActive ? 3 : isPrev || isNext ? 2 : 1,
                    }}
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    onHoverStart={() => setHoveredCard(idx)}
                    onHoverEnd={() => setHoveredCard(null)}
                    className="absolute w-full max-w-sm"
                  >
                    <motion.div
                      whileHover={{ y: -8 }}
                      className="border border-green-500/30 rounded-3xl p-8 bg-black/60 backdrop-blur-lg h-96 flex flex-col justify-between group hover:border-green-500 transition-colors duration-300"
                    >
                      {/* Avatar with Gradient Background */}
                      <div className="flex justify-center -mt-20 mb-4">
                        <motion.div
                          whileHover={{ scale: 1.1 }}
                          className={`w-28 h-28 rounded-full bg-gradient-to-br ${testimonial.gradientFrom} ${testimonial.gradientTo} p-1 shadow-[0_0_30px_rgba(0,255,65,0.3)]`}
                        >
                          <div className="w-full h-full rounded-full border-4 border-black overflow-hidden">
                            <img
                              src={testimonial.avatar}
                              alt={testimonial.name}
                              className="w-full h-full object-cover"
                            />
                          </div>
                        </motion.div>
                      </div>

                      {/* Name and Role */}
                      <div className="text-center mb-4">
                        <h4 className="text-lg font-black text-white mb-1">
                          {testimonial.name}
                        </h4>
                        <p className="text-xs text-green-400">
                          {testimonial.role}
                        </p>
                      </div>

                      {/* Testimonial Text */}
                      <motion.p
                        initial={{ opacity: 0.8 }}
                        whileHover={{ opacity: 1 }}
                        className="text-sm text-white/70 text-center flex-grow mb-4 leading-relaxed group-hover:text-white transition-colors"
                      >
                        "{testimonial.content}"
                      </motion.p>

                      {/* NPS Rating */}
                      <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        className="flex items-center justify-center gap-2"
                      >
                        <span className="text-sm font-bold text-green-400">
                          NPS {testimonial.nps}
                        </span>
                        <div className="flex gap-0.5">
                          {[...Array(10)].map((_, i) => (
                            <motion.div
                              key={i}
                              initial={{ opacity: 0, scale: 0 }}
                              whileInView={{ opacity: 1, scale: 1 }}
                              transition={{ delay: i * 0.03 }}
                              viewport={{ once: true }}
                            >
                              <Star
                                className={`w-3.5 h-3.5 ${
                                  i < testimonial.rating
                                    ? "fill-green-500 text-green-500"
                                    : "text-green-500/20"
                                }`}
                              />
                            </motion.div>
                          ))}
                        </div>
                      </motion.div>
                    </motion.div>
                  </motion.div>
                );
              })}
            </div>

            {/* Dot Indicators */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              viewport={{ once: true }}
              className="flex gap-2 mt-12"
            >
              {testimonials.map((_, idx) => (
                <motion.button
                  key={idx}
                  onClick={() => setCurrentIndex(idx)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    currentIndex === idx
                      ? "bg-green-500 w-8"
                      : "bg-green-500/30 w-2 hover:bg-green-500/60"
                  }`}
                  whileHover={{ scale: 1.2 }}
                />
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
