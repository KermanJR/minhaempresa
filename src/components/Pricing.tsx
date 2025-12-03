import { useState } from "react";
import { motion } from "framer-motion";
import { Check, ArrowRight } from "lucide-react";
import NexusLogo from "@/components/NexusLogo";

const Pricing = () => {
  const [hoveredPackage, setHoveredPackage] = useState<number | null>(null);

  const packages = [
    {
      name: "Startup",
      subtitle: "Para lançar sua ideia",
      price: "A partir de R$ 5.000",
      description: "Perfeito para MVP e primeiros passos digitais",
      features: [
        "Website responsivo",
        "Até 5 páginas",
        "Email profissional",
        "SEO básico",
        "Suporte 30 dias",
      ],
      color: "from-blue-500 to-cyan-500",
      borderColor: "border-blue-500/30",
      cta: "Começar",
      popular: false,
    },
    {
      name: "Growth",
      subtitle: "Para escalar o negócio",
      price: "A partir de R$ 15.000",
      description: "Solução completa para empresas em crescimento",
      features: [
        "Website + E-commerce",
        "App mobile (iOS/Android)",
        "Dashboard administrativo",
        "Integração de pagamentos",
        "SEO avançado",
        "Suporte 90 dias",
        "Analytics & Relatórios",
      ],
      color: "from-green-500 to-emerald-500",
      borderColor: "border-green-500/50",
      cta: "Solicitar Proposta",
      popular: true,
    },
    {
      name: "Enterprise",
      subtitle: "Para máxima performance",
      price: "Sob demanda",
      description: "Arquitetura custom para escala corporativa",
      features: [
        "Arquitetura personalizada",
        "Microserviços escaláveis",
        "APIs e integrações",
        "IA/Automação",
        "Multi-região deployment",
        "Suporte 24/7 dedicado",
        "SLA garantido",
      ],
      color: "from-purple-500 to-pink-500",
      borderColor: "border-purple-500/30",
      cta: "Conversar",
      popular: false,
    },
  ];

  return (
    <section className="relative py-32 bg-black overflow-hidden">
      {/* Animated Background Gradients */}
      <motion.div
        className="absolute top-1/4 right-1/4 w-96 h-96 bg-gradient-to-br from-green-500 to-transparent rounded-full blur-3xl"
        animate={{
          x: [0, 100, 0],
          y: [0, 50, 0],
        }}
        transition={{ duration: 20, repeat: Infinity }}
        style={{ opacity: 0.04 }}
      />
      <motion.div
        className="absolute bottom-1/3 left-1/3 w-96 h-96 bg-gradient-to-tl from-blue-500 to-transparent rounded-full blur-3xl"
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
            <NexusLogo size="md" />
            <span className="text-xs font-black text-green-500 tracking-widest uppercase">Investimento</span>
          </div>
          <div className="inline-block border border-green-500/40 rounded-full px-6 py-2 mb-8">
            <span className="text-xs font-semibold text-green-500 tracking-widest uppercase">
              Pacotes
            </span>
          </div>
          <h2 className="text-5xl md:text-6xl font-black text-white mb-6">
            Planos que se adequam ao seu tamanho
          </h2>
          <p className="text-lg text-white/60 max-w-2xl mx-auto font-light">
            De startups a grandes corporações, temos a solução perfeita para você.
          </p>
        </motion.div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-8 lg:max-w-6xl mx-auto">
          {packages.map((pkg, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              viewport={{ once: true }}
              onHoverStart={() => setHoveredPackage(idx)}
              onHoverEnd={() => setHoveredPackage(null)}
              className="relative group"
            >
              {/* Popular Badge */}
              {pkg.popular && (
                <motion.div
                  className="absolute -top-4 left-1/2 -translate-x-1/2 z-20"
                  animate={{ y: [0, -5, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <div className="bg-gradient-to-r from-green-500 to-cyan-500 text-black text-xs font-black px-4 py-2 rounded-full shadow-lg">
                    MAIS POPULAR
                  </div>
                </motion.div>
              )}

              {/* Card */}
              <motion.div
                className={`relative h-full rounded-2xl border p-8 backdrop-blur-sm transition-all duration-300 ${
                  pkg.popular
                    ? `${pkg.borderColor} bg-gradient-to-br ${pkg.color.replace("from", "from-white")}/5`
                    : `border-white/10 bg-white/2 group-hover:border-white/20`
                } ${hoveredPackage === idx ? "border-white/40" : ""}`}
                animate={{
                  y: hoveredPackage === idx ? -8 : 0,
                  scale: pkg.popular && hoveredPackage === idx ? 1.02 : 1,
                }}
              >
                {/* Package Name */}
                <h3 className="text-2xl font-black text-white mb-2">
                  {pkg.name}
                </h3>
                <p className="text-sm text-white/60 mb-6 font-light">
                  {pkg.subtitle}
                </p>

                {/* Price */}
                <div className="mb-8">
                  <div className={`text-4xl font-black bg-gradient-to-r ${pkg.color} bg-clip-text text-transparent mb-2`}>
                    {pkg.price}
                  </div>
                  <p className="text-white/50 text-sm font-light">
                    {pkg.description}
                  </p>
                </div>

                {/* CTA Button */}
                <motion.a
                  href="#contact"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`w-full py-3 rounded-xl font-black uppercase tracking-wider transition-all duration-300 flex items-center justify-center gap-2 mb-8 ${
                    pkg.popular
                      ? `bg-gradient-to-r ${pkg.color} text-black shadow-lg hover:shadow-xl`
                      : "border border-white/20 text-white hover:border-white/40 hover:bg-white/5"
                  }`}
                >
                  {pkg.cta}
                  <ArrowRight className="w-4 h-4" />
                </motion.a>

                {/* Features List */}
                <div className="space-y-4 border-t border-white/10 pt-8">
                  {pkg.features.map((feature, featureIdx) => (
                    <motion.div
                      key={featureIdx}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: featureIdx * 0.05 }}
                      className="flex gap-3 items-start"
                    >
                      <Check className={`w-5 h-5 flex-shrink-0 mt-0.5 ${
                        pkg.popular ? "text-green-500" : "text-white/60"
                      }`} />
                      <span className="text-white/80 text-sm font-light leading-relaxed">
                        {feature}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-20"
        >
          <p className="text-white/60 text-lg font-light mb-6">
            Não encontrou o pacote ideal? <span className="text-green-500 font-black">Vamos customizar!</span>
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Pricing;
