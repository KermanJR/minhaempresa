import { useState } from "react";
import { MessageSquare, Palette, Code, Rocket, ArrowRight, CheckCircle } from "lucide-react";
import { motion } from "framer-motion";

const Process = () => {
  const [hoveredStep, setHoveredStep] = useState<number | null>(null);

  const steps = [
    {
      number: "01",
      icon: MessageSquare,
      title: "Descoberta",
      description: "Entrevistas estratégicas e análise profunda do seu negócio para definir objetivos claros.",
      details: ["Entrevistas com stakeholders", "Análise competitiva", "Definição de KPIs"],
      color: "from-blue-500 to-cyan-500",
      duration: "2 semanas",
    },
    {
      number: "02",
      icon: Palette,
      title: "Design",
      description: "Prototipagem interativa focada em conversão e experiência do usuário excepcional.",
      details: ["Wireframes", "Design system", "Protótipos"],
      color: "from-purple-500 to-pink-500",
      duration: "2 semanas",
    },
    {
      number: "03",
      icon: Code,
      title: "Desenvolvimento",
      description: "Código enterprise-grade com testes automatizados e arquitetura escalável.",
      details: ["Arquitetura modular", "Testes completos", "CI/CD pipeline"],
      color: "from-green-500 to-emerald-500",
      duration: "4 semanas",
    },
    {
      number: "04",
      icon: Rocket,
      title: "Deploy",
      description: "Lançamento com zero downtime, monitoramento 24/7 e suporte dedicado.",
      details: ["Deploy seguro", "Monitoramento", "Suporte 24/7"],
      color: "from-orange-500 to-red-500",
      duration: "1+ semana",
    },
  ];

  return (
    <section id="process" className="relative bg-black py-32 overflow-hidden">
      {/* Animated Background Gradient */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute -top-40 -left-40 w-80 h-80 bg-gradient-to-br from-green-500 to-transparent rounded-full blur-3xl"
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
          className="text-center mb-20"
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
              Processo
            </span>
          </div>
          <h2 className="text-5xl md:text-6xl font-black text-white mb-4">
            Transformação em 4 Passos
          </h2>
          <p className="text-white/60 text-lg font-light">
            Quatro etapas simples que transformam sua visão em realidade
          </p>
        </motion.div>

        {/* Process Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {steps.map((step, idx) => {
            const Icon = step.icon;
            const isHovered = hoveredStep === idx;

            return (
              <motion.div
                key={idx}
                onHoverStart={() => setHoveredStep(idx)}
                onHoverEnd={() => setHoveredStep(null)}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="group relative"
              >
                {/* Card Background */}
                <motion.div
                  className={`relative h-full rounded-2xl border border-green-500/30 overflow-hidden transition-all duration-300 ${
                    isHovered ? "border-green-500 bg-black/60" : "bg-black/40"
                  }`}
                  animate={{
                    y: isHovered ? -8 : 0,
                  }}
                  transition={{ duration: 0.3 }}
                >
                  {/* Gradient Background */}
                  <motion.div
                    className={`absolute inset-0 bg-gradient-to-br ${step.color} opacity-0 transition-opacity duration-300`}
                    animate={{
                      opacity: isHovered ? 0.08 : 0,
                    }}
                  />

                  {/* Content */}
                  <div className="relative z-10 p-6 h-full flex flex-col">
                    {/* Step Number with Icon */}
                    <motion.div
                      className="mb-4"
                      animate={{
                        scale: isHovered ? 1.1 : 1,
                      }}
                      transition={{ duration: 0.3 }}
                    >
                      <motion.div
                        className={`w-14 h-14 rounded-xl bg-gradient-to-br ${step.color} flex items-center justify-center mb-3 border border-white/20 shadow-lg`}
                        animate={{
                          boxShadow: isHovered
                            ? `0 0 30px rgba(0, 255, 65, 0.4)`
                            : "0 4px 6px rgba(0, 0, 0, 0.1)",
                        }}
                      >
                        <Icon className="w-7 h-7 text-white" />
                      </motion.div>
                      <motion.span
                        className={`text-4xl font-black transition-colors duration-300 ${
                          isHovered ? "text-green-500" : "text-white/40"
                        }`}
                      >
                        {step.number}
                      </motion.span>
                    </motion.div>

                    {/* Title */}
                    <motion.h3
                      className="text-xl font-black text-white mb-2"
                      animate={{
                        color: isHovered ? "#00ff41" : "#ffffff",
                      }}
                      transition={{ duration: 0.3 }}
                    >
                      {step.title}
                    </motion.h3>

                    {/* Duration */}
                    <motion.p
                      className="text-xs font-semibold mb-3 transition-colors duration-300"
                      animate={{
                        color: isHovered ? "#00ff41" : "#ffffff66",
                      }}
                    >
                      {step.duration}
                    </motion.p>

                    {/* Description */}
                    <p className="text-sm text-white/60 leading-relaxed flex-grow mb-4">
                      {step.description}
                    </p>

                    {/* Details on Hover */}
                    <motion.div
                      className="border-t border-green-500/20 pt-3"
                      initial={{ opacity: 0, height: 0 }}
                      animate={{
                        opacity: isHovered ? 1 : 0,
                        height: isHovered ? "auto" : 0,
                      }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="space-y-2">
                        {step.details.map((detail, i) => (
                          <motion.div
                            key={i}
                            initial={{ opacity: 0, x: -10 }}
                            animate={{
                              opacity: isHovered ? 1 : 0,
                              x: isHovered ? 0 : -10,
                            }}
                            transition={{
                              duration: 0.3,
                              delay: isHovered ? i * 0.05 : 0,
                            }}
                            className="flex items-center gap-2"
                          >
                            <div className="w-1.5 h-1.5 rounded-full bg-green-500" />
                            <span className="text-xs text-green-400">{detail}</span>
                          </motion.div>
                        ))}
                      </div>
                    </motion.div>
                  </div>

                  {/* Border Glow */}
                  <motion.div
                    className="absolute inset-0 rounded-2xl border border-green-500 opacity-0 pointer-events-none transition-opacity duration-300"
                    animate={{
                      opacity: isHovered ? 1 : 0,
                    }}
                    style={{
                      filter: isHovered
                        ? "drop-shadow(0 0 12px rgba(0, 255, 65, 0.6))"
                        : "drop-shadow(0 0 0px rgba(0, 255, 65, 0))",
                    }}
                  />
                </motion.div>

                {/* Arrow Connector (hidden on mobile) */}
                {idx < steps.length - 1 && (
                  <motion.div
                    className="hidden lg:block absolute -right-8 top-1/2 -translate-y-1/2 z-20"
                    animate={{
                      x: isHovered ? 4 : 0,
                    }}
                  >
                    <div className="w-12 h-12 rounded-full border-2 border-green-500/30 flex items-center justify-center bg-black/80 group-hover:border-green-500 transition-colors">
                      <ArrowRight className="w-5 h-5 text-green-500/60 group-hover:text-green-500 transition-colors" />
                    </div>
                  </motion.div>
                )}
              </motion.div>
            );
          })}
        </div>

        {/* Process Flow Visualization */}
        <motion.div
          className="bg-black/40 border border-green-500/20 rounded-2xl p-8 mb-20"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-black text-white mb-8 text-center">
            Timeline Total: <span className="text-green-500">11+ Semanas</span>
          </h3>

          {/* Progress Bar */}
          <div className="space-y-4">
            {steps.map((step, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="flex items-center gap-4"
              >
                <span className="text-sm font-bold text-green-500 w-20">
                  {step.duration}
                </span>
                <div className="flex-grow h-3 bg-green-500/10 rounded-full overflow-hidden border border-green-500/20">
                  <motion.div
                    className={`h-full bg-gradient-to-r ${step.color}`}
                    initial={{ width: 0 }}
                    whileInView={{ width: "100%" }}
                    transition={{ duration: 1, delay: idx * 0.15 }}
                    viewport={{ once: true }}
                  />
                </div>
                <span className="text-sm text-white/60 w-28">{step.title}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Key Benefits */}
        <motion.div
          className="max-w-4xl mx-auto mb-20"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="grid md:grid-cols-2 gap-6">
            {[
              { title: "Zero Downtime", desc: "Deploy sem interrupção do seu serviço" },
              { title: "Suporte 24/7", desc: "Equipe disponível em tempo real" },
              { title: "Testes Completos", desc: "Cobertura de 100% dos cenários" },
              { title: "Documentação", desc: "Documentação detalhada incluída" },
            ].map((benefit, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                whileHover={{ x: 4 }}
                viewport={{ once: true }}
                className="group p-5 rounded-xl border border-green-500/20 hover:border-green-500/60 bg-black/40 transition-all duration-300"
              >
                <div className="flex items-start gap-3">
                  <motion.div
                    whileHover={{ scale: 1.2 }}
                    className="flex-shrink-0"
                  >
                    <CheckCircle className="w-6 h-6 text-green-500" />
                  </motion.div>
                  <div>
                    <h4 className="font-bold text-white mb-1">{benefit.title}</h4>
                    <p className="text-sm text-white/60">{benefit.desc}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

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
            {/* Animated Border */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-green-500/0 via-green-500/20 to-green-500/0"
              animate={{
                opacity: [0.05, 0.15, 0.05],
              }}
              transition={{ duration: 4, repeat: Infinity }}
            />

            {/* Content */}
            <div className="relative z-10 text-center">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.1 }}
                viewport={{ once: true }}
              >
                <div className="inline-block border border-green-500/40 rounded-full px-6 py-2 mb-8">
                  <span className="text-xs font-semibold text-green-500 tracking-widest uppercase">
                    Transformação Digital
                  </span>
                </div>
                <h3 className="text-5xl md:text-6xl font-black text-white mb-6 leading-tight">
                  Pronto para
                  <span className="block text-green-500">começar?</span>
                </h3>
              </motion.div>

              <motion.p
                className="text-white/70 text-lg max-w-3xl mx-auto mb-10 leading-relaxed"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
                viewport={{ once: true }}
              >
                Vamos transformar sua visão em um projeto extraordinário. 11+ semanas de dedicação total.
              </motion.p>

              {/* Stats */}
              <motion.div
                className="grid grid-cols-3 gap-6 mb-12 max-w-2xl mx-auto"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.25 }}
                viewport={{ once: true }}
              >
                {[
                  { label: "4 Etapas", value: "Bem Definidas" },
                  { label: "11+ Semanas", value: "Dedicadas" },
                  { label: "100%", value: "Comprometimento" },
                ].map((item, idx) => (
                  <div key={idx} className="border-l border-green-500/20 pl-4 text-left">
                    <p className="text-sm text-white/50">{item.label}</p>
                    <p className="font-black text-white text-sm">{item.value}</p>
                  </div>
                ))}
              </motion.div>

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
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 rounded-full bg-green-500 text-black font-black uppercase tracking-wider hover:bg-green-400 transition-all duration-300 shadow-[0_0_25px_rgba(0,255,65,0.5)] hover:shadow-[0_0_40px_rgba(0,255,65,0.7)]"
                >
                  Agendar Consultoria
                </motion.a>
              </motion.div>
            </div>

            {/* Corner Decorations */}
            <motion.div className="absolute top-0 left-0 w-32 h-32 border-t border-l border-green-500/20 rounded-br-3xl" />
            <motion.div className="absolute bottom-0 right-0 w-32 h-32 border-b border-r border-green-500/20 rounded-tl-3xl" />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Process;
