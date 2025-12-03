import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Mail, CheckCircle, AlertCircle } from "lucide-react";

const Newsletter = () => {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setStatus("error");
      setMessage("Por favor, insira um email válido.");
      return;
    }

    setStatus("loading");
    
    // Simular API call
    setTimeout(() => {
      setStatus("success");
      setMessage("Bem-vindo! Verifique seu email.");
      setEmail("");
      setTimeout(() => setStatus("idle"), 3000);
    }, 1500);
  };

  return (
    <section className="relative py-24 bg-black overflow-hidden">
      {/* Animated Background */}
      <motion.div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-br from-green-500 to-transparent rounded-full blur-3xl"
        animate={{
          x: [0, 150, -150, 0],
          y: [0, 100, -100, 0],
        }}
        transition={{ duration: 30, repeat: Infinity }}
        style={{ opacity: 0.05 }}
      />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto text-center"
        >
          {/* Icon */}
          <motion.div
            className="flex justify-center mb-6"
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            <div className="p-4 rounded-full bg-gradient-to-br from-green-500/20 to-transparent border border-green-500/30">
              <Mail className="w-8 h-8 text-green-500" />
            </div>
          </motion.div>

          {/* Heading */}
          <h2 className="text-4xl md:text-5xl font-black text-white mb-4">
            Receba Insights Semanais
          </h2>
          <p className="text-lg text-white/60 font-light mb-8">
            Dicas de tecnologia, trends do mercado e casos de sucesso direto na sua caixa de entrada.
          </p>

          {/* Newsletter Form */}
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 mb-6">
            <div className="flex-1 relative">
              <input
                type="email"
                placeholder="seu@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                disabled={status === "loading"}
                className="w-full px-6 py-4 rounded-full bg-white/5 border border-white/20 text-white placeholder-white/40 focus:outline-none focus:border-green-500/50 focus:bg-white/10 transition-all disabled:opacity-50"
              />
            </div>
            <motion.button
              type="submit"
              disabled={status === "loading"}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 rounded-full bg-green-500 text-black font-black uppercase tracking-wider hover:bg-green-400 transition-all duration-300 shadow-[0_0_25px_rgba(0,255,65,0.5)] hover:shadow-[0_0_40px_rgba(0,255,65,0.7)] disabled:opacity-50 whitespace-nowrap"
            >
              {status === "loading" ? "Enviando..." : "Inscrever-se"}
            </motion.button>
          </form>

          {/* Status Messages */}
          <AnimatePresence>
            {status === "success" && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="flex items-center gap-2 justify-center text-green-500 text-sm font-semibold"
              >
                <CheckCircle className="w-5 h-5" />
                {message}
              </motion.div>
            )}
            {status === "error" && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="flex items-center gap-2 justify-center text-red-500 text-sm font-semibold"
              >
                <AlertCircle className="w-5 h-5" />
                {message}
              </motion.div>
            )}
          </AnimatePresence>

          {/* Trust Indicator */}
          <p className="text-white/50 text-xs mt-6">
            ✓ Sem spam • ✓ Cancele a qualquer momento • ✓ Respeitamos sua privacidade
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Newsletter;
