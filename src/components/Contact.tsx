import { useState } from "react";
import { Mail, Phone, Send, CheckCircle, MessageCircle, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { motion } from "framer-motion";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    message: "",
  });
  const [activeTab, setActiveTab] = useState<"form" | "quick">("form");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Proposta Recebida!",
      description: "Você receberá um retorno em até 24h.",
    });
    setFormData({ name: "", email: "", phone: "", company: "", message: "" });
  };

  const contactMethods = [
    {
      icon: MessageCircle,
      label: "WhatsApp",
      value: "+55 (67) 99236-9127",
      description: "Conversa imediata",
    },
    {
      icon: Phone,
      label: "Telefone",
      value: "+55 (67) 99236-9127",
      description: "Chamada direta",
    },
    {
      icon: Mail,
      label: "Email",
      value: "kermanpereira@gmail.com",
      description: "Mensagem formal",
    },
  ];

  return (
    <section id="contact" className="py-24 bg-black relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-green-500">
            Vamos Conversar
          </h2>
          <p className="text-white text-lg max-w-2xl mx-auto">
            Conte-nos sobre seu projeto e como podemos ajudar seu negócio a crescer
          </p>
        </motion.div>

        <div className="max-w-5xl mx-auto">
          {/* Tab Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex gap-4 justify-center mb-12"
          >
            {[
              { id: "form", label: "Formulário" },
              { id: "quick", label: "Contato Rápido" },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={`px-6 py-2 rounded-lg font-medium transition-all ${
                  activeTab === tab.id
                    ? "bg-gray-900 text-white"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </motion.div>

          {/* Tab Content - Form */}
          {activeTab === "form" && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="bg-black/40 p-8 rounded-xl border border-green-500/30"
            >
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-white mb-2">
                      Nome Completo *
                    </label>
                    <Input
                      required
                      placeholder="Seu nome"
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                      className="bg-white border-gray-300 focus:border-gray-900"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-white mb-2">
                      Email *
                    </label>
                    <Input
                      required
                      type="email"
                      placeholder="seu@email.com"
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      className="bg-black/60 border-green-500/30 focus:border-green-500 text-white"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-white mb-2">
                      Telefone
                    </label>
                    <Input
                      placeholder="(00) 00000-0000"
                      value={formData.phone}
                      onChange={(e) =>
                        setFormData({ ...formData, phone: e.target.value })
                      }
                      className="bg-black/60 border-green-500/30 focus:border-green-500 text-white"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-white mb-2">
                      Empresa
                    </label>
                    <Input
                      placeholder="Sua empresa"
                      value={formData.company}
                      onChange={(e) =>
                        setFormData({ ...formData, company: e.target.value })
                      }
                      className="bg-black/60 border-green-500/30 focus:border-green-500 text-white"
                    />
                  </div>
                </div>

                <div>
                    <label className="block text-sm font-medium text-white mb-2">
                    Conte sobre seu projeto *
                  </label>
                  <Textarea
                    required
                    placeholder="Qual é o seu desafio? O que você está buscando?"
                    rows={6}
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                      className="bg-black/60 border border-green-500/30 focus:border-green-500 text-white resize-none"
                  />
                </div>

                <Button
                  type="submit"
                      className="w-full bg-green-500 text-white border-green-500 hover:bg-green-600 h-12 font-medium"
                >
                  Enviar Proposta
                  <Send className="ml-2 w-4 h-4" />
                </Button>

                <div className="flex items-center gap-2 text-sm text-white justify-center pt-4">
                  <CheckCircle className="w-4 h-4 text-white" />
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
              {contactMethods.map((method, index) => (
                <motion.a
                  key={index}
                  href={
                    method.label === "WhatsApp"
                      ? `https://wa.me/5567992369127`
                      : method.label === "Telefone"
                      ? "tel:+5567992369127"
                      : "mailto:kermanpereira@gmail.com"
                  }
                  target={method.label !== "Email" ? "_blank" : undefined}
                  rel={method.label !== "Email" ? "noopener noreferrer" : undefined}
                  whileHover={{ x: 8 }}
                  className="bg-black/40 border border-green-500/20 hover:border-green-500/40 transition-all group flex items-center justify-between cursor-pointer p-6 rounded-lg"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-lg bg-gray-200 flex items-center justify-center group-hover:bg-gray-300 transition-colors flex-shrink-0">
                      <method.icon className="w-6 h-6 text-gray-700" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-green-500">
                        {method.label}
                      </h3>
                      <p className="text-gray-600 text-sm">{method.value}</p>
                      <p className="text-gray-500 text-xs mt-1">
                        {method.description}
                      </p>
                    </div>
                  </div>
                  <Send className="w-4 h-4 text-gray-400 group-hover:text-gray-700 transition-colors" />
                </motion.a>
              ))}

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="mt-8 p-6 rounded-lg border border-green-500/20 bg-black/40"
              >
                <h3 className="font-semibold text-white mb-2 flex items-center gap-2">
                  <Calendar className="w-5 h-5 text-gray-700" />
                  Agendar uma Reunião
                </h3>
                <p className="text-gray-400 text-sm mb-4">
                  Prefere conversar em um horário específico? Agende uma reunião conosco.
                </p>
                <Button
                  asChild
                  variant="outline"
                  className="w-full border-gray-300 text-gray-900 hover:bg-gray-100"
                >
                  <a
                    href="https://calendly.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Abrir Calendário
                    <Calendar className="ml-2 w-4 h-4" />
                  </a>
                </Button>
              </motion.div>
            </motion.div>
          )}
        </div>

        {/* Trust Indicators */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-20 grid md:grid-cols-4 gap-8 pt-12 border-t border-gray-200 text-center"
        >
          {[
            { number: "24h", label: "Tempo de Resposta" },
            { number: "150+", label: "Projetos Entregues" },
            { number: "100%", label: "Satisfação de Clientes" },
            { number: "9 anos", label: "No Mercado" },
          ].map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
            >
              <div className="text-3xl font-bold text-green-500 mb-1">
                {stat.number}
              </div>
              <div className="text-gray-400 text-sm">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
