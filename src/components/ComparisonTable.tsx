import { motion } from "framer-motion";
import { Check, X, ArrowRight } from "lucide-react";

const ComparisonTable = () => {
  const comparison = [
    {
      feature: "Custo Inicial",
      agency: "Investimento maior, ROI garantido",
      freelancer: "Mais barato, qualidade inconsistente",
      inhouse: "Custo fixo muito alto",
      nexus: "✓ Sem taxa oculta",
    },
    {
      feature: "Qualidade",
      agency: "Padrão profissional",
      freelancer: "Variável, sem garantia",
      inhouse: "Depende da contratação",
      nexus: "✓ Enterprise-grade",
    },
    {
      feature: "Escalabilidade",
      agency: "Cresce com você",
      freelancer: "Limitado",
      inhouse: "Precisa contratar mais",
      nexus: "✓ Infinita",
    },
    {
      feature: "Comunicação",
      agency: "Dedicado e claro",
      freelancer: "Pode ser inconsistente",
      inhouse: "100% integrado",
      nexus: "✓ Daily updates",
    },
    {
      feature: "Time Expertise",
      agency: "Equipes multidisciplinares",
      freelancer: "Especialista único",
      inhouse: "Seu time",
      nexus: "✓ 9+ anos exp",
    },
    {
      feature: "Suporte Pós-Projeto",
      agency: "Garantido",
      freelancer: "Pode não estar disponível",
      inhouse: "Contínuo",
      nexus: "✓ Lifetime",
    },
  ];

  return (
    <section className="relative py-32 bg-black overflow-hidden">
      {/* Animated Background */}
      <motion.div
        className="absolute top-1/3 right-1/4 w-96 h-96 bg-gradient-to-br from-green-500 to-transparent rounded-full blur-3xl"
        animate={{
          x: [0, 100, 0],
          y: [0, 50, 0],
        }}
        transition={{ duration: 20, repeat: Infinity }}
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
          <h2 className="text-5xl md:text-6xl font-black text-white mb-6">
            Por que Nexus é diferente?
          </h2>
          <p className="text-lg text-white/60 max-w-2xl mx-auto font-light">
            Comparamos com as opções mais comuns de desenvolvimento e delivery.
          </p>
        </motion.div>

        {/* Table */}
        <div className="overflow-x-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="min-w-full border border-white/10 rounded-2xl overflow-hidden backdrop-blur-sm"
          >
            <table className="w-full">
              <thead>
                <tr className="border-b border-white/10 bg-white/[0.02]">
                  <th className="px-6 py-4 text-left text-sm font-black text-white/80">
                    Critério
                  </th>
                  <th className="px-6 py-4 text-center text-sm font-semibold text-white/60">
                    Freelancer
                  </th>
                  <th className="px-6 py-4 text-center text-sm font-semibold text-white/60">
                    Time In-house
                  </th>
                  <th className="px-6 py-4 text-center text-sm font-semibold text-white/60">
                    Agência
                  </th>
                  <th className="px-6 py-4 text-center text-sm font-black text-green-500 bg-gradient-to-b from-green-500/10 to-transparent">
                    Nexus
                  </th>
                </tr>
              </thead>
              <tbody>
                {comparison.map((row, idx) => (
                  <motion.tr
                    key={idx}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: idx * 0.05 }}
                    viewport={{ once: true }}
                    className={`border-b border-white/5 hover:bg-white/[0.01] transition-colors ${
                      idx % 2 === 0 ? "" : "bg-white/[0.005]"
                    }`}
                  >
                    <td className="px-6 py-4 text-sm font-bold text-white/80">
                      {row.feature}
                    </td>
                    <td className="px-6 py-4 text-sm text-white/60 text-center">
                      {row.freelancer}
                    </td>
                    <td className="px-6 py-4 text-sm text-white/60 text-center">
                      {row.inhouse}
                    </td>
                    <td className="px-6 py-4 text-sm text-white/60 text-center">
                      {row.agency}
                    </td>
                    <td className="px-6 py-4 text-center text-sm font-black text-green-500 bg-gradient-to-b from-green-500/5 to-transparent">
                      <Check className="w-5 h-5 mx-auto" />
                    </td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </motion.div>
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-20"
        >
          <p className="text-white/60 text-lg font-light mb-8">
            Quer conhecer mais detalhes? Temos a solução perfeita para seu projeto.
          </p>
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 rounded-full bg-green-500 text-black font-black uppercase tracking-wider hover:bg-green-400 transition-all duration-300 shadow-[0_0_25px_rgba(0,255,65,0.5)] hover:shadow-[0_0_40px_rgba(0,255,65,0.7)] inline-flex items-center gap-2"
          >
            Agendar Consultoria
            <ArrowRight className="w-4 h-4" />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default ComparisonTable;
