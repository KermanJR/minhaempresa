import { motion } from "framer-motion";
import { CheckCircle, AlertCircle, TrendingUp } from "lucide-react";

const Guarantee = () => {
  const guarantees = [
    {
      icon: CheckCircle,
      title: "Garantia de Satisfação",
      description: "Se não gostar, reformulamos sem custo adicional nos primeiros 30 dias",
      color: "from-green-500/20 to-transparent",
      borderColor: "border-green-500/30",
    },
    {
      icon: AlertCircle,
      title: "Sem Risco de Contrato",
      description: "Cancele quando quiser. Sem multa, sem letra pequena, sem problema",
      color: "from-blue-500/20 to-transparent",
      borderColor: "border-blue-500/30",
    },
    {
      icon: TrendingUp,
      title: "ROI Garantido",
      description: "Ou devolvemos 50% do valor investido se não atingirmos os KPIs acordados",
      color: "from-purple-500/20 to-transparent",
      borderColor: "border-purple-500/30",
    },
  ];

  return (
    <section className="relative py-32 bg-black overflow-hidden">
      {/* Animated Background */}
      <motion.div
        className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-br from-green-500 to-transparent rounded-full blur-3xl"
        animate={{
          x: [0, 50, -50, 0],
          y: [0, 100, -100, 0],
        }}
        transition={{ duration: 30, repeat: Infinity }}
        style={{ opacity: 0.03 }}
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
          <div className="inline-block border border-green-500/40 rounded-full px-6 py-2 mb-8">
            <span className="text-xs font-semibold text-green-500 tracking-widest uppercase">
              Risco Zero
            </span>
          </div>
          <h2 className="text-5xl md:text-6xl font-black text-white mb-6">
            Trabalhe com Confiança
          </h2>
          <p className="text-lg text-white/60 max-w-2xl mx-auto font-light">
            Oferecemos múltiplas garantias porque temos certeza do nosso trabalho.
          </p>
        </motion.div>

        {/* Guarantee Cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {guarantees.map((guarantee, idx) => {
            const Icon = guarantee.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -8 }}
                className={`border rounded-2xl p-8 bg-gradient-to-br ${guarantee.color} ${guarantee.borderColor} hover:border-white/20 transition-all`}
              >
                {/* Icon */}
                <motion.div
                  className="w-14 h-14 rounded-xl bg-gradient-to-br from-white/10 to-transparent flex items-center justify-center mb-6 border border-white/10"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                >
                  <Icon className="w-7 h-7 text-green-500" />
                </motion.div>

                {/* Title */}
                <h3 className="text-xl font-black text-white mb-3">
                  {guarantee.title}
                </h3>

                {/* Description */}
                <p className="text-white/70 leading-relaxed font-light">
                  {guarantee.description}
                </p>
              </motion.div>
            );
          })}
        </div>

        {/* Trust Statement */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto p-8 border border-white/10 rounded-2xl bg-white/[0.02]"
        >
          <p className="text-white/80 text-lg font-light leading-relaxed">
            Acreditamos que <span className="text-green-500 font-black">relacionamentos baseados em confiança</span> geram melhores resultados. Por isso, removemos riscos e oferecemos transparência total em cada etapa do projeto.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Guarantee;
