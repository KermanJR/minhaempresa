import { motion } from "framer-motion";
import { Zap, Users, Award } from "lucide-react";

const Stats = () => {
  const stats = [
    {
      icon: Zap,
      number: "150+",
      label: "Projetos Entregues",
      description: "Soluções web, mobile e backend em produção",
      color: "from-green-500/20 to-transparent",
      accentColor: "text-green-500",
    },
    {
      icon: Users,
      number: "80+",
      label: "Clientes Satisfeitos",
      description: "Com média de 9.5/10 em satisfação",
      color: "from-blue-500/20 to-transparent",
      accentColor: "text-blue-500",
    },
    {
      icon: Award,
      number: "99.9%",
      label: "Uptime Médio",
      description: "Infraestrutura confiável e escalável",
      color: "from-purple-500/20 to-transparent",
      accentColor: "text-purple-500",
    },
  ];

  return (
    <section className="relative py-24 bg-black overflow-hidden border-y border-white/5">
      {/* Animated Background */}
      <motion.div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-br from-green-500 to-transparent rounded-full blur-3xl"
        animate={{
          x: [0, 100, -100, 0],
          y: [0, 50, -50, 0],
        }}
        transition={{ duration: 25, repeat: Infinity }}
        style={{ opacity: 0.03 }}
      />

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid md:grid-cols-3 gap-8">
          {stats.map((stat, idx) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="text-center group"
              >
                {/* Icon with glow */}
                <motion.div
                  className="flex justify-center mb-6"
                  whileHover={{ scale: 1.1 }}
                >
                  <div className={`p-4 rounded-full bg-gradient-to-br ${stat.color} border border-white/10 group-hover:border-white/20 transition-all`}>
                    <Icon className={`w-8 h-8 ${stat.accentColor}`} />
                  </div>
                </motion.div>

                {/* Number */}
                <motion.div
                  className={`text-5xl md:text-6xl font-black mb-2 ${stat.accentColor}`}
                  whileHover={{ scale: 1.05 }}
                >
                  {stat.number}
                </motion.div>

                {/* Label */}
                <h3 className="text-xl font-black text-white mb-2">
                  {stat.label}
                </h3>

                {/* Description */}
                <p className="text-white/60 text-sm font-light">
                  {stat.description}
                </p>

                {/* Bottom accent line */}
                <motion.div
                  className={`mt-6 h-1 bg-gradient-to-r ${stat.color} rounded-full w-0 group-hover:w-full transition-all duration-300`}
                />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Stats;
