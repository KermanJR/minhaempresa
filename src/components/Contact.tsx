import { useState } from "react";
import { Mail, Phone, Send, CheckCircle, MessageCircle, Calendar, ArrowRight, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { motion } from "framer-motion";
import emailjs from '@emailjs/browser';

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });
  const [activeTab, setActiveTab] = useState<"form" | "quick">("form");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validação básica
    if (!formData.name || !formData.email || !formData.message) {
      setError("Nome, email e mensagem são obrigatórios");
      return;
    }

    setIsSubmitting(true);
    setError("");

    try {
      // Enviar email via EmailJS
      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        phone: formData.phone || 'Não informado',
        service: formData.service || 'Não especificado',
        message: formData.message,
        to_email: 'nexusdeveloperprofissional@gmail.com'
      };

      await emailjs.send(
        'service_i9tdm3k',     // Você vai criar no EmailJS
        'template_contact',  // Você vai criar no EmailJS
        templateParams,
        '1AplQGolV8oCsNRRk'    // Sua Public Key do EmailJS
      );

      toast({
        title: "Mensagem Enviada! ✓",
        description: "Você receberá um retorno em até 24h.",
      });
      setFormData({ name: "", email: "", phone: "", service: "", message: "" });
      setIsSubmitting(false);
    } catch (err) {
      console.error("Erro ao enviar email:", err);
      setError("Erro ao enviar mensagem. Tente novamente.");
      setIsSubmitting(false);
    }
  };

  const contactMethods = [
    {
      icon: MessageCircle,
      label: "WhatsApp",
      value: "+55 (67) 99236-9127 / (67) 99195-7902",
      description: "Conversa imediata",
    },
    {
      icon: Phone,
      label: "Telefone",
      value: "+55 (67) 99236-9127 / (67) 99195-7902",
      description: "Chamada direta",
    },
    {
      icon: Mail,
      label: "Email",
      value: "nexusdeveloperprofissional@gmail.com",
      description: "Mensagem formal",
    },
  ];

  return (
    <section id="contact" className="py-32 bg-black relative overflow-hidden">
      {/* Animated Background Gradients */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <motion.div
          className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-green-500 to-transparent rounded-full blur-3xl"
          animate={{
            x: [0, 100, 0],
            y: [0, 50, 0],
          }}
          transition={{ duration: 20, repeat: Infinity }}
          style={{ opacity: 0.04 }}
        />
        <motion.div
          className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-tr from-blue-500 to-transparent rounded-full blur-3xl"
          animate={{
            x: [0, -100, 0],
            y: [0, -50, 0],
          }}
          transition={{ duration: 25, repeat: Infinity, delay: 2 }}
          style={{ opacity: 0.04 }}
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-24"
        >
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="flex justify-center items-center gap-3 mb-6"
          >
            <img src="/fav1.png" alt="Nexus Developer" className="h-12 w-auto" />
            <span className="text-xs font-black text-green-500 tracking-widest uppercase">Nexus Support</span>
          </motion.div>
          <div className="inline-block border border-green-500/40 rounded-full px-6 py-2 mb-8">
            <span className="text-xs font-semibold text-green-500 tracking-widest uppercase">
              Vamos Conversar
            </span>
          </div>
          <h2 className="text-5xl md:text-7xl font-black text-white mb-6 leading-tight">
            Pronto para
            <span className="block text-green-500">transformar seu negócio?</span>
          </h2>
          <p className="text-white/70 text-lg max-w-3xl mx-auto font-light leading-relaxed">
            Conte-nos sobre seu projeto e como podemos ajudar. Garantimos retorno em até 24h.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {/* Tab Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex gap-3 justify-center mb-12 flex-wrap"
          >
            {[
              { id: "form", label: "Formulário Completo" },
              { id: "quick", label: "Contato Rápido" },
            ].map((tab) => (
              <motion.button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                  activeTab === tab.id
                    ? "bg-green-500 text-black shadow-[0_0_25px_rgba(0,255,65,0.5)]"
                    : "border border-white/10 text-white/70 hover:border-green-500/50 hover:text-white"
                }`}
              >
                {tab.label}
              </motion.button>
            ))}
          </motion.div>

          {/* Tab Content - Form */}
          {activeTab === "form" && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="border border-white/10 rounded-3xl overflow-hidden backdrop-blur-sm bg-white/[0.02] p-12"
            >
              {/* Animated Border */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-green-500/0 via-green-500/10 to-green-500/0"
                animate={{
                  opacity: [0.05, 0.15, 0.05],
                }}
                transition={{ duration: 4, repeat: Infinity }}
                style={{ pointerEvents: "none" }}
              />

              <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-white mb-3">
                      Nome Completo <span className="text-green-500">*</span>
                    </label>
                    <Input
                      required
                      placeholder="Seu nome"
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                      className="bg-white/5 border-white/10 focus:border-green-500 text-white placeholder:text-white/40 rounded-lg"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-white mb-3">
                      Email <span className="text-green-500">*</span>
                    </label>
                    <Input
                      required
                      type="email"
                      placeholder="seu@email.com"
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      className="bg-white/5 border-white/10 focus:border-green-500 text-white placeholder:text-white/40 rounded-lg"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-white mb-3">
                      Telefone
                    </label>
                    <Input
                      placeholder="(00) 00000-0000"
                      value={formData.phone}
                      onChange={(e) =>
                        setFormData({ ...formData, phone: e.target.value })
                      }
                      className="bg-white/5 border-white/10 focus:border-green-500 text-white placeholder:text-white/40 rounded-lg"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-white mb-3">
                      Tipo de Serviço
                    </label>
                    <Input
                      placeholder="Ex: E-commerce, Site, Sistema..."
                      value={formData.service}
                      onChange={(e) =>
                        setFormData({ ...formData, service: e.target.value })
                      }
                      className="bg-white/5 border-white/10 focus:border-green-500 text-white placeholder:text-white/40 rounded-lg"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-white mb-3">
                    Conte sobre seu projeto <span className="text-green-500">*</span>
                  </label>
                  <Textarea
                    required
                    placeholder="Qual é o seu desafio? O que você está buscando?"
                    rows={6}
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    className="bg-white/5 border-white/10 focus:border-green-500 text-white placeholder:text-white/40 rounded-lg resize-none"
                  />
                </div>

                {error && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="p-4 rounded-lg bg-red-500/20 border border-red-500/50 text-red-400 text-sm"
                  >
                    {error}
                  </motion.div>
                )}

                <div className="flex gap-4 pt-4">
                  <motion.button
                    type="submit"
                    disabled={isSubmitting}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex-1 bg-green-500 text-black font-black uppercase tracking-wider py-4 rounded-full hover:bg-green-400 transition-all duration-300 shadow-[0_0_25px_rgba(0,255,65,0.5)] hover:shadow-[0_0_40px_rgba(0,255,65,0.7)] disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                  >
                    {isSubmitting ? (
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
                        Enviar Proposta
                        <ArrowRight className="w-4 h-4" />
                      </>
                    )}
                  </motion.button>
                </div>

                <div className="flex items-center gap-3 text-sm text-white/70 justify-center pt-4 border-t border-white/10">
                  <Clock className="w-4 h-4 text-green-500" />
                  <span>Resposta garantida em até 24 horas</span>
                </div>
              </form>
            </motion.div>
          )}

          {/* Tab Content - Quick Contact */}
          {activeTab === "quick" && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="space-y-4"
            >
              {contactMethods.map((method, index) => {
                const Icon = method.icon;
                return (
                  <motion.a
                    key={index}
                    href={
                      method.label === "WhatsApp"
                        ? `https://wa.me/5567992369127`
                        : method.label === "Telefone"
                        ? "tel:+5567992369127"
                        : "mailto:nexusdeveloperprofissional@gmail.com"
                    }
                    target={method.label !== "Email" ? "_blank" : undefined}
                    rel={method.label !== "Email" ? "noopener noreferrer" : undefined}
                    whileHover={{ x: 8, borderColor: "rgb(0, 255, 65)" }}
                    className="border border-white/10 hover:border-green-500/50 transition-all group flex items-center justify-between p-6 rounded-2xl backdrop-blur-sm bg-white/[0.02]"
                  >
                    <div className="flex items-center gap-4">
                      <motion.div 
                        whileHover={{ scale: 1.1 }}
                        className="w-12 h-12 rounded-lg bg-gradient-to-br from-green-500/20 to-transparent border border-green-500/30 flex items-center justify-center flex-shrink-0"
                      >
                        <Icon className="w-6 h-6 text-green-500" />
                      </motion.div>
                      <div>
                        <h3 className="font-semibold text-white">
                          {method.label}
                        </h3>
                        <p className="text-green-400/80 text-sm font-mono">{method.value}</p>
                        <p className="text-white/40 text-xs mt-1">
                          {method.description}
                        </p>
                      </div>
                    </div>
                    <ArrowRight className="w-4 h-4 text-green-500/60 group-hover:text-green-500 transition-colors" />
                  </motion.a>
                );
              })}

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="mt-8 p-8 rounded-2xl border border-white/10 bg-gradient-to-br from-white/[0.02] to-white/[0.01] backdrop-blur-sm"
              >
                <div className="flex items-start gap-4">
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    className="w-12 h-12 rounded-lg bg-gradient-to-br from-green-500/20 to-transparent border border-green-500/30 flex items-center justify-center flex-shrink-0"
                  >
                    <Calendar className="w-6 h-6 text-green-500" />
                  </motion.div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-white mb-2">Agendar uma Reunião</h3>
                    <p className="text-white/60 text-sm mb-4">
                      Prefere conversar em um horário específico? Agende uma reunião conosco.
                    </p>
                    <motion.a
                      href="mailto:nexusdeveloperprofissional@gmail.com?subject=Agendamento de Reunião"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="inline-flex items-center gap-2 px-6 py-3 border border-green-500/50 text-green-500 font-semibold rounded-full hover:bg-green-500/10 transition-all duration-300"
                    >
                      Solicitar Agendamento
                      <Calendar className="w-4 h-4" />
                    </motion.a>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </div>


      </div>
    </section>
  );
};

export default Contact;
