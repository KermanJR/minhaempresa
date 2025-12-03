import { motion } from "framer-motion";
import { Shield, Award, Zap, Code, Users, TrendingUp } from "lucide-react";

const TrustBadges = () => {
  const badges = [
    {
      icon: Shield,
      title: "Segurança Premium",
      description: "Certificações de segurança e compliance",
      badges: ["ISO 27001", "GDPR", "LGPD"],
      color: "from-blue-500/20 to-transparent",
      borderColor: "border-blue-500/30",
    },
    {
      icon: Award,
      title: "Prêmios & Reconhecimento",
      description: "Destaque no mercado de tecnologia",
      badges: ["Top 10 Agências", "Best Dev Team", "Innovation Award"],
      color: "from-purple-500/20 to-transparent",
      borderColor: "border-purple-500/30",
    },
    {
      icon: Code,
      title: "Tecnologia Validada",
      description: "Parcerias com líderes de mercado",
      badges: ["Google Cloud Partner", "AWS Partner", "React Certified"],
      color: "from-green-500/20 to-transparent",
      borderColor: "border-green-500/30",
    },
  ];

  const metrics = [
    { label: "Projetos em Produção", value: "150+" },
    { label: "Uptime Médio", value: "99.9%" },
    { label: "Clientes Ativos", value: "80+" },
    { label: "Satisfação", value: "9.5/10" },
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
        {/* Trust Metrics Row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-24">
          {metrics.map((metric, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="text-center p-4 border border-white/5 rounded-lg hover:border-white/10 transition-all"
            >
              <motion.div
                className="text-2xl md:text-3xl font-black text-green-500 mb-1"
                whileHover={{ scale: 1.05 }}
              >
                {metric.value}
              </motion.div>
              <p className="text-xs md:text-sm text-white/60 font-light">
                {metric.label}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Badges Section */}
        <div className="grid md:grid-cols-3 gap-6">
          {badges.map((badge, idx) => {
            const Icon = badge.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: idx * 0.15 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
                className={`border rounded-2xl p-8 bg-gradient-to-br ${badge.color} ${badge.borderColor} hover:border-white/20 transition-all`}
              >
                {/* Icon */}
                <motion.div
                  className="w-12 h-12 rounded-full bg-gradient-to-br from-white/10 to-transparent flex items-center justify-center mb-6"
                  whileHover={{ scale: 1.1 }}
                >
                  <Icon className="w-6 h-6 text-green-500" />
                </motion.div>

                {/* Title */}
                <h3 className="text-lg font-black text-white mb-2">
                  {badge.title}
                </h3>

                {/* Description */}
                <p className="text-sm text-white/60 mb-6 font-light">
                  {badge.description}
                </p>

                {/* Badges */}
                <div className="space-y-2">
                  {badge.badges.map((badgeText, badgeIdx) => (
                    <motion.div
                      key={badgeIdx}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: idx * 0.15 + badgeIdx * 0.05 }}
                      className="flex items-center gap-2 text-sm text-white/70"
                    >
                      <div className="w-1.5 h-1.5 rounded-full bg-green-500" />
                      {badgeText}
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default TrustBadges;
