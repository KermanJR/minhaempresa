import { useState } from "react";
import { Mail, Phone, MapPin, Send } from "lucide-react";
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
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Mensagem Enviada! ✨",
      description: "Entrarei em contato em breve. Obrigado!",
    });
    setFormData({ name: "", email: "", phone: "", message: "" });
  };

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "kermanpereira@gmail.com",
      href: "mailto:kermanpereira@gmail.com",
    },
    {
      icon: Phone,
      label: "Telefone",
      value: "+55 (67) 992369127",
      href: "tel:+5567992369127",
    },
    {
      icon: MapPin,
      label: "Localização",
      value: "Campo Grande, MS - Brasil",
      href: "#",
    },
  ];

  return (
    <section id="contact" className="py-24 bg-card/30 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Vamos Conversar <span className="gradient-text">Sobre Seu Projeto</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Entre em contato e descubra como posso ajudar seu negócio a crescer
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-bold mb-6">Informações de Contato</h3>
              <div className="space-y-4">
                {contactInfo.map((info, index) => (
                  <motion.a
                    key={index}
                    href={info.href}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    className="flex items-center gap-4 glass-effect p-4 rounded-lg hover:border-primary/60 transition-all group"
                  >
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                      <info.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <div className="text-sm text-muted-foreground">{info.label}</div>
                      <div className="font-semibold">{info.value}</div>
                    </div>
                  </motion.a>
                ))}
              </div>
            </div>

            <div className="glass-effect p-6 rounded-xl border-primary/30">
              <h3 className="text-xl font-bold mb-4">Por que trabalhar comigo?</h3>
              <ul className="space-y-3">
                {[
                  "Comunicação clara e transparente",
                  "Prazos cumpridos rigorosamente",
                  "Código limpo e documentado",
                  "Suporte pós-lançamento",
                  "Preços competitivos",
                ].map((item, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-primary" />
                    <span className="text-foreground/90">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <form onSubmit={handleSubmit} className="glass-effect p-8 rounded-xl space-y-6">
              <div>
                <label className="block text-sm font-medium mb-2">Nome Completo</label>
                <Input
                  required
                  placeholder="Seu nome"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="bg-background/50 border-border/50 focus:border-primary transition-colors"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Email</label>
                <Input
                  required
                  type="email"
                  placeholder="seu@email.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="bg-background/50 border-border/50 focus:border-primary transition-colors"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Telefone</label>
                <Input
                  placeholder="(00) 00000-0000"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="bg-background/50 border-border/50 focus:border-primary transition-colors"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Mensagem</label>
                <Textarea
                  required
                  placeholder="Conte-me sobre seu projeto..."
                  rows={5}
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  className="bg-background/50 border-border/50 focus:border-primary transition-colors resize-none"
                />
              </div>
              <Button type="submit" variant="hero" size="lg" className="w-full group">
                Enviar Mensagem
                <Send className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
