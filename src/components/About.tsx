import { Award, TrendingUp, Target, Users } from "lucide-react";
import { motion } from "framer-motion";
import NexusLogo from "@/components/NexusLogo";

const About = () => {
  const pillars = [
    {
      icon: Award,
      title: "Excelência",
      description: "Código robusto, escalável e enterprise-grade"
    },
    {
      icon: TrendingUp,
      title: "Resultados",
      description: "Soluções medidas por impacto real no negócio"
    },
    {
      icon: Target,
      title: "Estratégia",
      description: "Alinhamento total com seus objetivos comerciais"
    },
    {
      icon: Users,
      title: "Parceria",
      description: "Extensão dedicada da sua equipe interna"
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section id="about" className="py-32 relative overflow-hidden bg-black">
      {/* Animated Background Gradients */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <motion.div
          className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-green-500 to-transparent rounded-full blur-3xl"
          animate={{
            x: [0, 100, 0],
            y: [0, 50, 0],
          }}
          transition={{ duration: 20, repeat: Infinity }}
          style={{ opacity: 0.05 }}
        />
        <motion.div
          className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-tr from-purple-500 to-transparent rounded-full blur-3xl"
          animate={{
            x: [0, -100, 0],
            y: [0, -50, 0],
          }}
          transition={{ duration: 25, repeat: Infinity, delay: 2 }}
          style={{ opacity: 0.05 }}
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <motion.div
          className="text-center mb-24"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.1 }}
            viewport={{ once: true }}
            className="mb-6 flex justify-center"
          >
            <NexusLogo size="lg" />
          </motion.div>
          <div className="inline-block border border-green-500/40 rounded-full px-6 py-2 mb-8">
            <span className="text-xs font-semibold text-green-500 tracking-widest uppercase">
              Quem Somos
            </span>
          </div>
          <h2 className="text-5xl md:text-6xl font-black text-white mb-6">
            Sobre a Nexus
          </h2>
          <p className="text-white/70 text-lg md:text-xl max-w-4xl mx-auto font-light leading-relaxed">
            Uma agência de tecnologia focada em <span className="text-green-500 font-semibold">transformação digital</span>. Criamos soluções que não apenas funcionam, mas que geram impacto real no seu negócio.
          </p>
        </motion.div>

        {/* Four Pillars Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-24"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {pillars.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <motion.div
                key={idx}
                variants={itemVariants}
                className="group relative h-full cursor-pointer"
                whileHover={{ y: -4 }}
              >
                {/* Card Background */}
                <div className="relative h-full p-8 rounded-xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.04] backdrop-blur-sm transition-all duration-300 overflow-hidden">
                  {/* Subtle Hover Gradient */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-br from-green-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                  />

                  <div className="relative z-10 flex flex-col h-full">
                    {/* Icon */}
                    <motion.div
                      whileHover={{ scale: 1.15, rotate: 5 }}
                      transition={{ duration: 0.3 }}
                      className="mb-6"
                    >
                      <Icon className="w-8 h-8 text-green-500 stroke-[1.5]" />
                    </motion.div>

                    {/* Title */}
                    <h3 className="text-xl font-black text-white mb-3 tracking-tight">
                      {pillar.title}
                    </h3>

                    {/* Description */}
                    <p className="text-white/60 text-sm leading-relaxed font-light flex-grow">
                      {pillar.description}
                    </p>

                    {/* Bottom Accent */}
                    <motion.div
                      className="mt-6 h-px bg-gradient-to-r from-green-500/0 via-green-500/30 to-green-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    />

                    {/* Index */}
                    <motion.div className="mt-4 text-xs text-white/30 font-semibold tracking-widest">
                      {String(idx + 1).padStart(2, "0")}
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>


      </div>
    </section>
  );
};

export default About;
