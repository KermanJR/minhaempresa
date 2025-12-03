import { useState } from "react";
import { Mail, Download, Check } from "lucide-react";
import { motion } from "framer-motion";

const LeadMagnet = () => {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setLoading(true);

    // Simular envio
    setTimeout(() => {
      setSubmitted(true);
      setLoading(false);
      setTimeout(() => {
        setEmail("");
        setSubmitted(false);
      }, 3000);
    }, 1500);
  };

  return (
    <section className="relative py-24 bg-black overflow-hidden">
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

      {/* Animated Background Orbs */}
      <motion.div
        className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-green-500 to-transparent rounded-full blur-3xl"
        animate={{
          y: [0, 50, 0],
          x: [0, 30, 0],
        }}
        transition={{ duration: 15, repeat: Infinity }}
        style={{ opacity: 0.08 }}
      />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto">
          {/* Header */}
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="inline-block border border-green-500/40 rounded-full px-6 py-2 mb-6">
              <span className="text-xs font-semibold text-green-500 tracking-widest uppercase">
                Recurso Grátis
              </span>
            </div>

            <h2 className="text-4xl md:text-5xl font-black text-white mb-4">
              Descubra quanto custa sua
              <span className="block text-green-500">solução digital ideal</span>
            </h2>

            <p className="text-white/60 text-lg font-light">
              Baixe nosso guia completo: "Quanto Investir em Tecnologia em 2025"
              com cases reais, ROI estimado e roadmap de implementação.
            </p>
          </motion.div>

          {/* Main Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="relative border border-white/10 rounded-3xl overflow-hidden backdrop-blur-sm"
          >
            {/* Gradient Border Animation */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-green-500/0 via-green-500/20 to-green-500/0"
              animate={{
                opacity: [0.05, 0.15, 0.05],
              }}
              transition={{ duration: 4, repeat: Infinity }}
            />

            <div className="relative p-8 md:p-12">
              <div className="grid md:grid-cols-2 gap-8 md:gap-12">
                {/* Left Side - Benefits */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  viewport={{ once: true }}
                  className="flex flex-col justify-center"
                >
                  <h3 className="text-2xl font-black text-white mb-6">
                    O que você vai receber:
                  </h3>

                  <div className="space-y-4">
                    {[
                      "Benchmarks de investimento por tipo de projeto",
                      "Calculadora de ROI interactive",
                      "5 cases de sucesso com valores reais",
                      "Timeline recomendada de implementação",
                      "Checklist de decisão: Build vs Outsource",
                      "Contato direto com nossos especialistas",
                    ].map((benefit, idx) => (
                      <motion.div
                        key={idx}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.4, delay: 0.3 + idx * 0.05 }}
                        viewport={{ once: true }}
                        className="flex items-start gap-3"
                      >
                        <div className="mt-1 flex-shrink-0">
                          <Check className="w-5 h-5 text-green-500" />
                        </div>
                        <span className="text-white/80 font-medium">{benefit}</span>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>

                {/* Right Side - Form */}
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  viewport={{ once: true }}
                  className="flex flex-col justify-center"
                >
                  {!submitted ? (
                    <form onSubmit={handleSubmit} className="space-y-4">
                      <div>
                        <label className="block text-sm font-semibold text-white mb-3">
                          Seu Email
                        </label>
                        <div className="relative">
                          <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-green-500" />
                          <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="seu@email.com"
                            required
                            className="w-full pl-12 pr-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-white/40 focus:outline-none focus:border-green-500/50 focus:bg-white/15 transition-all duration-300"
                          />
                        </div>
                      </div>

                      <motion.button
                        type="submit"
                        disabled={loading}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className="w-full py-3 rounded-xl bg-gradient-to-r from-green-500 to-green-600 text-black font-black uppercase tracking-wider hover:shadow-[0_0_30px_rgba(0,255,65,0.5)] transition-all duration-300 disabled:opacity-70 flex items-center justify-center gap-2"
                      >
                        {loading ? (
                          <>
                            <motion.div
                              animate={{ rotate: 360 }}
                              transition={{ duration: 1, repeat: Infinity }}
                              className="w-5 h-5 border-2 border-black border-t-transparent rounded-full"
                            />
                            Enviando...
                          </>
                        ) : (
                          <>
                            <Download className="w-5 h-5" />
                            Baixar Guia Grátis
                          </>
                        )}
                      </motion.button>

                      <p className="text-xs text-white/50 text-center">
                        Protegemos sua privacidade. Sem spam, nunca.
                      </p>
                    </form>
                  ) : (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="text-center py-8"
                    >
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ type: "spring", damping: 10 }}
                        className="w-16 h-16 rounded-full bg-green-500/20 border border-green-500/50 flex items-center justify-center mx-auto mb-4"
                      >
                        <Check className="w-8 h-8 text-green-500" />
                      </motion.div>
                      <h4 className="text-xl font-black text-white mb-2">
                        Perfeito!
                      </h4>
                      <p className="text-white/60">
                        Verifique sua caixa de entrada. O guia foi enviado!
                      </p>
                    </motion.div>
                  )}
                </motion.div>
              </div>
            </div>

            {/* Corner Decorations */}
            <motion.div className="absolute top-0 left-0 w-24 h-24 border-t border-l border-green-500/20 rounded-br-3xl" />
            <motion.div className="absolute bottom-0 right-0 w-24 h-24 border-b border-r border-green-500/20 rounded-tl-3xl" />
          </motion.div>

          {/* Trust Statement */}
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="text-center text-white/50 text-sm mt-8"
          >
            Mais de 2.000 empresas usaram este guia para tomar decisões de tecnologia
          </motion.p>
        </div>
      </div>
    </section>
  );
};

export default LeadMagnet;
