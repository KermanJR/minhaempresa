import { useState } from "react";
import { MessageCircle, Mail, Phone, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const FloatingChat = () => {
  const [isOpen, setIsOpen] = useState(false);

  const contactOptions = [
    {
      icon: MessageCircle,
      label: "WhatsApp",
      description: "Resposta em minutos",
      action: () => window.open("https://wa.me/67999999999?text=Olá%2C%20gostaria%20de%20saber%20mais%20sobre%20os%20serviços%20da%20Nexus", "_blank"),
      color: "from-green-500 to-emerald-500",
    },
    {
      icon: Mail,
      label: "Email",
      description: "contato@nexus.com",
      action: () => (window.location.href = "mailto:contato@nexus.com"),
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: Phone,
      label: "Ligação",
      description: "Agende uma call",
      action: () => window.open("https://calendly.com/nexus", "_blank"),
      color: "from-purple-500 to-pink-500",
    },
  ];

  return (
    <>
      {/* Floating Button */}
      <motion.button
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ type: "spring", damping: 15, delay: 0.5 }}
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 z-40 group"
      >
        <motion.div
          animate={{ scale: isOpen ? 0 : 1, opacity: isOpen ? 0 : 1 }}
          transition={{ duration: 0.3 }}
          className="absolute inset-0 rounded-full bg-gradient-to-r from-green-500 to-emerald-500 shadow-[0_0_30px_rgba(0,255,65,0.5)]"
        />

        <motion.div
          animate={{
            scale: isOpen ? 1.2 : 1,
          }}
          className="relative w-16 h-16 rounded-full bg-gradient-to-r from-green-500 to-emerald-500 flex items-center justify-center shadow-lg hover:shadow-[0_0_30px_rgba(0,255,65,0.6)] transition-shadow"
        >
          <AnimatePresence mode="wait">
            {!isOpen ? (
              <motion.div
                key="chat-icon"
                initial={{ opacity: 0, rotate: -90 }}
                animate={{ opacity: 1, rotate: 0 }}
                exit={{ opacity: 0, rotate: 90 }}
              >
                <MessageCircle className="w-7 h-7 text-black" />
              </motion.div>
            ) : (
              <motion.div
                key="close-icon"
                initial={{ opacity: 0, rotate: -90 }}
                animate={{ opacity: 1, rotate: 0 }}
                exit={{ opacity: 0, rotate: 90 }}
              >
                <X className="w-7 h-7 text-black" />
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>

        {/* Pulse Animation */}
        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.8, 0, 0.8],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            repeatType: "loop",
          }}
          className="absolute inset-0 rounded-full border-2 border-green-500 pointer-events-none"
        />
      </motion.button>

      {/* Chat Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            transition={{ type: "spring", damping: 20 }}
            className="fixed bottom-24 right-6 z-40 w-80"
          >
            {/* Header */}
            <div className="bg-black border border-green-500/30 rounded-3xl overflow-hidden shadow-2xl backdrop-blur-sm">
              <div className="bg-gradient-to-r from-green-500 to-emerald-500 px-6 py-4">
                <h3 className="text-black font-black text-lg">Fale Conosco</h3>
                <p className="text-black/80 text-sm">Escolha seu canal preferido</p>
              </div>

              {/* Contact Options */}
              <div className="divide-y divide-white/10">
                {contactOptions.map((option, idx) => {
                  const Icon = option.icon;
                  return (
                    <motion.button
                      key={idx}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: idx * 0.1 }}
                      onClick={() => {
                        option.action();
                        setIsOpen(false);
                      }}
                      className="w-full px-6 py-4 hover:bg-white/5 transition-colors text-left group"
                    >
                      <div className="flex items-center gap-4">
                        <div className={`p-3 rounded-xl bg-gradient-to-r ${option.color} flex-shrink-0`}>
                          <Icon className="w-5 h-5 text-white" />
                        </div>
                        <div className="flex-1">
                          <p className="font-black text-white group-hover:text-green-500 transition-colors">
                            {option.label}
                          </p>
                          <p className="text-xs text-white/50">{option.description}</p>
                        </div>
                        <motion.div
                          animate={{ x: [0, 4, 0] }}
                          transition={{ duration: 1.5, repeat: Infinity }}
                          className="text-green-500"
                        >
                          →
                        </motion.div>
                      </div>
                    </motion.button>
                  );
                })}
              </div>

              {/* Footer */}
              <div className="px-6 py-4 bg-white/5 border-t border-white/10">
                <p className="text-xs text-white/60 text-center">
                  Disponível 24/7. Resposta em até 2 horas.
                </p>
              </div>
            </div>

            {/* Tooltip */}
            <motion.div
              initial={{ opacity: 0, x: 10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              className="absolute -bottom-12 right-0 bg-black border border-green-500/30 rounded-lg px-4 py-2"
            >
              <p className="text-xs text-green-500 font-semibold whitespace-nowrap">
                Dúvidas? Estamos aqui! →
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsOpen(false)}
            className="fixed inset-0 z-30"
          />
        )}
      </AnimatePresence>
    </>
  );
};

export default FloatingChat;
