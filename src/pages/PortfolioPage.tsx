import { useState } from "react";
import { ArrowRight, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import NexusLogo from "@/components/NexusLogo";

const PortfolioPage = () => {
  const [activeProject, setActiveProject] = useState<number | null>(null);
  const [activeFilter, setActiveFilter] = useState("Todos");

  const projects = [
    {
      id: 1,
      title: "Clan Color",
      category: "E-commerce",
      shortTitle: "Clan Color",
      image: "/clan-color.png",
      link: "https://clancolor.com.br/",
      gradient: "from-pink-500 via-rose-500 to-red-500",
      bgColor: "bg-pink-950/20",
    },
    {
      id: 2,
      title: "BraSOL Engenharia",
      category: "Sites",
      shortTitle: "BraSOL",
      image: "/brasol.png",
      link: "https://brasolengenharia.com.br/",
      gradient: "from-yellow-500 via-orange-500 to-amber-500",
      bgColor: "bg-yellow-950/20",
    },
    {
      id: 3,
      title: "SINDJUFE-MS",
      category: "Sites",
      shortTitle: "SINDJUFE",
      image: "/sindjufe.png",
      link: "https://sindjufems.org.br/",
      gradient: "from-blue-500 via-indigo-500 to-purple-500",
      bgColor: "bg-blue-950/20",
    },
    {
      id: 4,
      title: "Solarcia",
      category: "Sites",
      shortTitle: "Solarcia",
      image: "/solarcia.png",
      link: "https://solarcia.com.br/",
      gradient: "from-cyan-500 via-teal-500 to-green-500",
      bgColor: "bg-cyan-950/20",
    },
    {
      id: 5,
      title: "Dandrade Assessoria",
      category: "Sistemas",
      shortTitle: "Dandrade",
      image: "/dandrade.png",
      link: "https://dandrade.com.br/",
      gradient: "from-purple-500 via-pink-500 to-rose-500",
      bgColor: "bg-purple-950/20",
    },
  ];

  const categories = ["Todos", "Sites", "Sistemas", "E-commerce"];
  const filteredProjects = activeFilter === "Todos" 
    ? projects 
    : projects.filter(p => p.category === activeFilter);

  return (
    <div className="min-h-screen bg-black overflow-hidden">
      <Navbar />

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden bg-black pt-20">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[linear-gradient(rgba(0,255,65,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(0,255,65,0.02)_1px,transparent_1px)] bg-[size:80px_80px]" />
        </div>

        <motion.div
          className="absolute -top-40 -right-40 w-96 h-96 bg-gradient-to-br from-green-500 to-transparent rounded-full blur-3xl"
          animate={{ x: [0, 100, 0], y: [0, 50, 0] }}
          transition={{ duration: 20, repeat: Infinity }}
          style={{ opacity: 0.06 }}
        />
        <motion.div
          className="absolute -bottom-40 -left-40 w-96 h-96 bg-gradient-to-tr from-purple-500 to-transparent rounded-full blur-3xl"
          animate={{ x: [0, -100, 0], y: [0, -50, 0] }}
          transition={{ duration: 25, repeat: Infinity, delay: 2 }}
          style={{ opacity: 0.06 }}
        />

        <div className="container mx-auto px-4 relative z-10 text-center max-w-5xl">
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-7xl md:text-8xl lg:text-9xl font-black text-white mb-8 leading-tight"
          >
            Projetos
            <span className="block bg-gradient-to-r from-green-400 via-green-500 to-emerald-500 text-transparent bg-clip-text">
              Marcantes
            </span>
          </motion.h1>

          {/* Nexus Logo Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex justify-center items-center gap-2 mb-8"
          >
            <NexusLogo size="sm" withGlow={true} animated={true} />
            <span className="text-xs font-black text-green-500 tracking-widest uppercase">NEXUS Portfolio</span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="flex justify-center text-3xl text-green-500"
          >
            ↓
          </motion.div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="relative py-12 px-4 bg-black border-b border-white/10">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-wrap justify-center gap-4"
          >
            {categories.map((category, idx) => (
              <motion.button
                key={category}
                onClick={() => setActiveFilter(category)}
                whileHover={{ scale: 1.08 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                viewport={{ once: true }}
                className={`px-6 py-3 rounded-full font-black uppercase tracking-wider transition-all duration-300 text-sm ${
                  activeFilter === category
                    ? "bg-green-500 text-black shadow-[0_0_30px_rgba(0,255,65,0.6)]"
                    : "border-2 border-white/20 text-white/70 hover:border-green-500/50 hover:text-white"
                }`}
              >
                {category}
              </motion.button>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Full Screen Projects */}
      <section className="relative bg-black">
        {filteredProjects.map((project, idx) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, delay: idx * 0.1 }}
            className="relative h-screen flex items-center justify-center overflow-hidden border-b border-white/10 cursor-pointer group"
            onClick={() => setActiveProject(activeProject === project.id ? null : project.id)}
          >
            {/* Background Image */}
            <motion.img
              src={project.image}
              alt={project.title}
              className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            />

            {/* Gradient Overlay */}
            <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-25 transition-opacity duration-500 mix-blend-screen`} />
            
            {/* Dark Overlay */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-black via-black/50 to-black/20"
              initial={{ opacity: 0.7 }}
              whileHover={{ opacity: 0.5 }}
              transition={{ duration: 0.3 }}
            />

            {/* Content */}
            <div className="absolute inset-0 flex flex-col items-start justify-end p-12 md:p-20 z-10 max-w-2xl">
              {/* Category Badge */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.15 + 0.1 }}
                className={`px-4 py-2 rounded-full text-xs font-black uppercase tracking-widest bg-gradient-to-r ${project.gradient} text-black mb-6`}
              >
                {project.category}
              </motion.div>

              {/* Title */}
              <motion.h2
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.15 + 0.2 }}
                className="text-6xl md:text-7xl lg:text-8xl font-black text-white mb-4 leading-tight"
              >
                {project.shortTitle}
              </motion.h2>

              {/* Subtle Line */}
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: 60 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.15 + 0.3, duration: 0.6 }}
                className="h-1 bg-gradient-to-r from-green-500 to-green-400 mb-8"
              />

              {/* Expanded Content */}
              <AnimatePresence>
                {activeProject === project.id && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 20 }}
                    transition={{ duration: 0.3 }}
                    className="space-y-6 mt-4"
                  >
                    <motion.a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ x: 4, scale: 1.02 }}
                      className="inline-flex items-center gap-3 px-6 py-3 bg-green-500 text-black font-black uppercase tracking-wider rounded-full hover:bg-green-400 transition-all duration-300 shadow-[0_0_30px_rgba(0,255,65,0.5)]"
                    >
                      Visitar Projeto
                      <ArrowRight className="w-4 h-4" />
                    </motion.a>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Hover Indicator */}
            <motion.div
              className="absolute bottom-12 right-12 text-white/40 group-hover:text-green-500 transition-colors duration-300"
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <div className="text-sm font-semibold">{activeProject === project.id ? "Fechar" : "Expandir"}</div>
            </motion.div>

            {/* Border Glow */}
            <motion.div
              className="absolute inset-0 border border-green-500/0 group-hover:border-green-500/30 transition-all duration-300"
              style={{
                boxShadow: "inset 0 0 40px rgba(0, 255, 65, 0)",
              }}
              whileHover={{
                boxShadow: "inset 0 0 40px rgba(0, 255, 65, 0.1), 0 0 60px rgba(0, 255, 65, 0.2)",
              }}
            />

            {/* Close Button */}
            <AnimatePresence>
              {activeProject === project.id && (
                <motion.button
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0 }}
                  onClick={(e) => {
                    e.stopPropagation();
                    setActiveProject(null);
                  }}
                  className="absolute top-8 right-8 z-20 p-3 bg-white/10 backdrop-blur-sm hover:bg-white/20 rounded-full transition-all duration-300"
                >
                  <X className="w-6 h-6 text-white" />
                </motion.button>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </section>

      {/* Final CTA Section */}
      <section className="relative py-40 px-4 bg-black border-t border-white/10">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[linear-gradient(rgba(0,255,65,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(0,255,65,0.02)_1px,transparent_1px)] bg-[size:100px_100px]" />
        </div>

        <motion.div
          className="absolute -top-40 -right-40 w-96 h-96 bg-gradient-to-br from-green-500 to-transparent rounded-full blur-3xl"
          animate={{ x: [0, 50, 0], y: [0, 30, 0] }}
          transition={{ duration: 20, repeat: Infinity }}
          style={{ opacity: 0.05 }}
        />

        <div className="container mx-auto max-w-4xl relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-6xl md:text-7xl font-black text-white mb-8">
              Vamos criar
              <span className="block bg-gradient-to-r from-green-400 to-emerald-500 text-transparent bg-clip-text">
                o seu sucesso?
              </span>
            </h2>

            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-3 px-8 py-4 bg-green-500 text-black font-black uppercase tracking-wider rounded-full hover:bg-green-400 transition-all duration-300 shadow-[0_0_30px_rgba(0,255,65,0.6)] hover:shadow-[0_0_50px_rgba(0,255,65,0.8)]"
            >
              Começar Agora
              <ArrowRight className="w-4 h-4" />
            </motion.a>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default PortfolioPage;
