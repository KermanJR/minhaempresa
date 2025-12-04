import { motion } from "framer-motion";
import { CheckCircle, Zap, Users, TrendingUp, Award, Lightbulb } from "lucide-react";

const WhyNexus = () => {
  const benefits = [
    {
      icon: CheckCircle,
      title: "Expertise Comprovada",
      description: "150+ projetos entregues com sucesso, gerando resultados reais e mensuráveis para nossos clientes.",
      color: "from-green-500/20 to-transparent",
      borderColor: "border-green-500/30",
    },
    {
      icon: Zap,
      title: "Entrega Ágil",
      description: "Metodologia ágil garantindo deployments rápidos, feedback constante e adaptabilidade total.",
      color: "from-yellow-500/20 to-transparent",
      borderColor: "border-yellow-500/30",
    },
    {
      icon: Users,
      title: "Equipe Premium",
      description: "Profissionais sêniors dedicados ao seu projeto, com média de 9+ anos de experiência.",
      color: "from-blue-500/20 to-transparent",
      borderColor: "border-blue-500/30",
    },
    {
      icon: TrendingUp,
      title: "ROI Garantido",
      description: "Foco em métricas que importam: leads gerados, conversão aumentada, custos reduzidos.",
      color: "from-purple-500/20 to-transparent",
      borderColor: "border-purple-500/30",
    },
    {
      icon: Award,
      title: "Qualidade Premium",
      description: "Código limpo, arquitetura escalável e performance otimizada desde o dia 1.",
      color: "from-pink-500/20 to-transparent",
      borderColor: "border-pink-500/30",
    },
    {
      icon: Lightbulb,
      title: "Inovação Contínua",
      description: "Sempre atualizados com as últimas tecnologias e trends do mercado Web3.",
      color: "from-cyan-500/20 to-transparent",
      borderColor: "border-cyan-500/30",
    },
  ];

  return (
    <section className="relative py-32 bg-black overflow-hidden">
      {/* Animated Background Gradients */}
      <motion.div
        className="absolute top-1/3 left-1/4 w-96 h-96 bg-gradient-to-br from-green-500 to-transparent rounded-full blur-3xl"
        animate={{
          x: [0, 100, 0],
          y: [0, 50, 0],
        }}
        transition={{ duration: 20, repeat: Infinity }}
        style={{ opacity: 0.04 }}
      />
      <motion.div
        className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-tl from-blue-500 to-transparent rounded-full blur-3xl"
        animate={{
          x: [0, -100, 0],
          y: [0, -50, 0],
        }}
        transition={{ duration: 25, repeat: Infinity, delay: 2 }}
        style={{ opacity: 0.04 }}
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
            <img src="/fav1.png" alt="Nexus Developer" className="h-12 w-auto" />
            <span className="text-xs font-black text-green-500 tracking-widest uppercase">Por Que Nexus</span>
          </div>
          <div className="inline-block border border-green-500/40 rounded-full px-6 py-2 mb-8">
            <span className="text-xs font-semibold text-green-500 tracking-widest uppercase">
              Nossos Diferenciais
            </span>
          </div>
          <h2 className="text-5xl md:text-6xl font-black text-white mb-6">
            O que nos torna especiais
          </h2>
          <p className="text-lg text-white/60 max-w-2xl mx-auto font-light">
            Não somos apenas uma agência. Somos parceiros do seu crescimento, comprometidos com resultados reais.
          </p>
        </motion.div>

        {/* Benefits Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((benefit, idx) => {
            const Icon = benefit.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
                className={`relative group border rounded-2xl p-8 bg-gradient-to-br ${benefit.color} ${benefit.borderColor} hover:${benefit.borderColor.replace("border-", "border-")} transition-all duration-300 backdrop-blur-sm`}
              >
                {/* Icon Background */}
                <motion.div
                  className="absolute -top-6 left-8 w-12 h-12 bg-gradient-to-br from-green-500 to-cyan-500 rounded-full flex items-center justify-center shadow-[0_0_25px_rgba(0,255,65,0.4)]"
                  whileHover={{ scale: 1.1 }}
                >
                  <Icon className="w-6 h-6 text-black" />
                </motion.div>

                <h3 className="text-xl font-black text-white mb-4 mt-4">
                  {benefit.title}
                </h3>
                <p className="text-white/70 leading-relaxed font-light">
                  {benefit.description}
                </p>

                {/* Hover accent line */}
                <div className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-green-500 to-transparent rounded-full w-0 group-hover:w-full transition-all duration-300" />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhyNexus;
