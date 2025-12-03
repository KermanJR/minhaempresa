import { useState } from "react";
import {
  Globe,
  Layers,
  Target,
  Smartphone,
  ShoppingCart,
  Sparkles,
} from "lucide-react";
import NexusLogo from "@/components/NexusLogo";
import { motion } from "framer-motion";

const Services = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const services = [
    {
      icon: Globe,
      title: "Web Development",
      description: "Plataformas web escaláveis, responsivas e otimizadas para performance máxima.",
      features: ["React/Next.js", "APIs REST/GraphQL", "Cloud Deploy"],
      color: "from-blue-500/20 to-cyan-500/20",
      borderColor: "border-blue-500/30",
      hoverColor: "hover:border-blue-500",
    },
    {
      icon: Smartphone,
      title: "Mobile Apps",
      description: "Aplicativos nativos iOS/Android e soluções cross-platform com experiência premium.",
      features: ["Flutter/React Native", "Native iOS/Android", "Real-time Sync"],
      color: "from-purple-500/20 to-pink-500/20",
      borderColor: "border-purple-500/30",
      hoverColor: "hover:border-purple-500",
    },
    {
      icon: Layers,
      title: "Backend Systems",
      description: "Arquitetura de sistemas robustos, escaláveis e preparados para crescimento exponencial.",
      features: ["Node.js/Python", "Microserviços", "Database Design"],
      color: "from-green-500/20 to-emerald-500/20",
      borderColor: "border-green-500/30",
      hoverColor: "hover:border-green-500",
    },
    {
      icon: Target,
      title: "AI & Automation",
      description: "Integração de inteligência artificial e automação para potencializar processos.",
      features: ["LLM Integration", "Computer Vision", "Process Automation"],
      color: "from-orange-500/20 to-yellow-500/20",
      borderColor: "border-orange-500/30",
      hoverColor: "hover:border-orange-500",
    },
    {
      icon: ShoppingCart,
      title: "E-Commerce",
      description: "Plataformas de vendas completas com integração de pagamento e gestão avançada.",
      features: ["Multi-currency", "Inventory Management", "Analytics"],
      color: "from-red-500/20 to-rose-500/20",
      borderColor: "border-red-500/30",
      hoverColor: "hover:border-red-500",
    },
    {
      icon: Sparkles,
      title: "Digital Strategy",
      description: "Consultoria estratégica para transformação digital e posicionamento em Web3.",
      features: ["Tech Roadmap", "Market Analysis", "Innovation Strategy"],
      color: "from-indigo-500/20 to-purple-500/20",
      borderColor: "border-indigo-500/30",
      hoverColor: "hover:border-indigo-500",
    },
  ];

  return (
    <section id="services" className="relative min-h-screen bg-black py-32 overflow-hidden">
      {/* Grid Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `
              linear-gradient(to right, rgba(0,255,65,0.1) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(0,255,65,0.1) 1px, transparent 1px)
            `,
            backgroundSize: "50px 50px",
          }}
        />
      </div>

      {/* Animated Glow Orbs */}
      <motion.div
        className="absolute top-20 left-1/4 w-96 h-96 bg-gradient-to-br from-blue-500 to-transparent rounded-full blur-3xl"
        animate={{
          x: [0, 100, 0],
          y: [0, 50, 0],
        }}
        transition={{ duration: 20, repeat: Infinity }}
        style={{ opacity: 0.05 }}
      />
      <motion.div
        className="absolute bottom-20 right-1/4 w-96 h-96 bg-gradient-to-tl from-purple-500 to-transparent rounded-full blur-3xl"
        animate={{
          x: [0, -100, 0],
          y: [0, -50, 0],
        }}
        transition={{ duration: 25, repeat: Infinity, delay: 2 }}
        style={{ opacity: 0.05 }}
      />

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="flex justify-center items-center gap-3 mb-6">
            <NexusLogo size="md" />
            <span className="text-xs font-black text-green-500 tracking-widest uppercase">Soluções Nexus</span>
          </div>
          <div className="inline-block border border-green-500/40 rounded-full px-6 py-2 mb-8">
            <span className="text-xs font-semibold text-green-500 tracking-widest uppercase">
              Serviços
            </span>
          </div>
          <p className="text-white/60 text-lg font-light max-w-2xl mx-auto">
            Soluções tecnológicas de ponta para Web3
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
          {services.map((service, idx) => {
            const Icon = service.icon;
            const isHovered = hoveredIndex === idx;

            return (
              <motion.div
                key={idx}
                onHoverStart={() => setHoveredIndex(idx)}
                onHoverEnd={() => setHoveredIndex(null)}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: idx * 0.08 }}
                viewport={{ once: true }}
                className="group relative"
              >
                {/* Card Background */}
                <motion.div
                  className={`relative h-full rounded-2xl border ${service.borderColor} ${service.hoverColor} transition-all duration-300 overflow-hidden backdrop-blur-sm p-8 flex flex-col`}
                  animate={{
                    backgroundColor: isHovered ? "rgba(0, 0, 0, 0.6)" : "rgba(0, 0, 0, 0.3)",
                  }}
                  transition={{ duration: 0.3 }}
                >
                  {/* Gradient Overlay */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none`} />

                  {/* Content */}
                  <div className="relative z-10 flex flex-col h-full">
                    {/* Icon */}
                    <motion.div
                      className="mb-6"
                      animate={{
                        scale: isHovered ? 1.1 : 1,
                        y: isHovered ? -5 : 0,
                      }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="w-12 h-12 rounded-lg border border-white/20 flex items-center justify-center group-hover:border-white/40 transition-colors duration-300">
                        <Icon className="w-6 h-6 text-white/80 group-hover:text-white transition-colors duration-300" />
                      </div>
                    </motion.div>

                    {/* Title */}
                    <motion.h3
                      className="text-xl font-black text-white mb-2"
                      animate={{
                        color: isHovered ? "#00ff41" : "#ffffff",
                      }}
                      transition={{ duration: 0.3 }}
                    >
                      {service.title}
                    </motion.h3>

                    {/* Description */}
                    <motion.p
                      className="text-sm text-white/60 leading-relaxed mb-6 flex-grow group-hover:text-white/80 transition-colors duration-300"
                    >
                      {service.description}
                    </motion.p>

                    {/* Features */}
                    <motion.div
                      className="space-y-2 mb-6"
                      animate={{
                        opacity: isHovered ? 1 : 0.7,
                      }}
                      transition={{ duration: 0.3 }}
                    >
                      {service.features.map((feature, i) => (
                        <motion.div
                          key={i}
                          initial={{ opacity: 0, x: -10 }}
                          animate={{
                            opacity: isHovered ? 1 : 0.5,
                            x: isHovered ? 0 : -5,
                          }}
                          transition={{
                            duration: 0.3,
                            delay: isHovered ? i * 0.05 : 0,
                          }}
                          className="flex items-center gap-2"
                        >
                          <div className="w-1.5 h-1.5 rounded-full bg-white/40 group-hover:bg-green-500 transition-colors duration-300" />
                          <span className="text-xs text-white/50 group-hover:text-white/70 transition-colors duration-300">
                            {feature}
                          </span>
                        </motion.div>
                      ))}
                    </motion.div>

                    {/* CTA */}
                    <motion.button
                      className="w-full py-2.5 rounded-lg border border-white/20 text-white text-sm font-semibold hover:border-green-500 hover:text-green-500 transition-all duration-300 group-hover:bg-white/5"
                      animate={{
                        borderColor: isHovered ? "rgba(0, 255, 65, 0.5)" : "rgba(255, 255, 255, 0.2)",
                        color: isHovered ? "#00ff41" : "#ffffff",
                      }}
                      transition={{ duration: 0.3 }}
                    >
                      Saiba mais
                    </motion.button>
                  </div>

                  {/* Border Glow */}
                  <motion.div
                    className="absolute inset-0 rounded-2xl opacity-0 pointer-events-none"
                    animate={{
                      opacity: isHovered ? 1 : 0,
                      boxShadow: isHovered
                        ? "inset 0 0 20px rgba(0, 255, 65, 0.1)"
                        : "inset 0 0 0px rgba(0, 255, 65, 0)",
                    }}
                    transition={{ duration: 0.3 }}
                  />
                </motion.div>

                {/* Outer Glow */}
                <motion.div
                  className="absolute -inset-0.5 rounded-2xl opacity-0 -z-10 pointer-events-none"
                  animate={{
                    opacity: isHovered ? 1 : 0,
                    background: `radial-gradient(circle at center, ${
                      service.borderColor.includes("blue")
                        ? "rgba(59, 130, 246, 0.2)"
                        : service.borderColor.includes("purple")
                        ? "rgba(168, 85, 247, 0.2)"
                        : service.borderColor.includes("green")
                        ? "rgba(0, 255, 65, 0.2)"
                        : service.borderColor.includes("orange")
                        ? "rgba(249, 115, 22, 0.2)"
                        : service.borderColor.includes("red")
                        ? "rgba(239, 68, 68, 0.2)"
                        : "rgba(99, 102, 241, 0.2)"
                    }, transparent)`,
                  }}
                  transition={{ duration: 0.5 }}
                />
              </motion.div>
            );
          })}
        </div>

        {/* CTA Section */}
        <motion.div
          className="mt-32 relative"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          {/* Background Card */}
          <div className="relative border border-white/10 rounded-3xl overflow-hidden backdrop-blur-sm p-16 md:p-20">
            {/* Gradient Overlay */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-br from-green-500/10 via-transparent to-blue-500/10"
              animate={{
                opacity: [0.05, 0.1, 0.05],
              }}
              transition={{ duration: 4, repeat: Infinity }}
            />

            {/* Content */}
            <div className="relative z-10 text-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                viewport={{ once: true }}
              >
                <p className="text-green-500 text-sm font-bold uppercase tracking-widest mb-6">
                  Próximo Passo
                </p>
                <h3 className="text-5xl md:text-6xl font-black text-white mb-6 leading-tight">
                  Vamos construir o futuro
                  <span className="block text-green-500">juntos</span>
                </h3>
              </motion.div>

              <motion.p
                className="text-white/70 text-lg max-w-3xl mx-auto mb-10 leading-relaxed"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
                viewport={{ once: true }}
              >
                Tecnologia de ponta para posicionar sua marca na Web3. Vamos transformar sua visão em realidade.
              </motion.p>

              {/* CTA Buttons */}
              <motion.div
                className="flex flex-col sm:flex-row gap-4 justify-center items-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                viewport={{ once: true }}
              >
                <motion.a
                  href="#contact"
                  whileHover={{ scale: 1.05, x: 5 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 rounded-full bg-green-500 text-black font-black uppercase tracking-wider hover:bg-green-400 transition-all duration-300 shadow-[0_0_25px_rgba(0,255,65,0.5)] hover:shadow-[0_0_40px_rgba(0,255,65,0.7)] inline-flex items-center gap-2"
                >
                  Agendar Consultoria
                  <motion.span
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    →
                  </motion.span>
                </motion.a>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 rounded-full border border-white/30 text-white font-black uppercase tracking-wider hover:border-green-500 hover:text-green-500 transition-all duration-300"
                >
                  Ver Mais
                </motion.button>
              </motion.div>
            </div>

            {/* Corner Decorations */}
            <motion.div className="absolute top-0 right-0 w-32 h-32 border-t border-r border-green-500/20 rounded-bl-3xl" />
            <motion.div className="absolute bottom-0 left-0 w-32 h-32 border-b border-l border-green-500/20 rounded-tr-3xl" />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
