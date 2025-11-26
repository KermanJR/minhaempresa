import {
  Globe,
  Layers,
  Target,
  Smartphone,
  ShoppingCart,
  Sparkles,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const Services = () => {
  const services = [
    {
      icon: Globe,
      title: "Sites Institucionais",
      description:
        "Websites profissionais que fortalecem sua presença digital e transmitem credibilidade ao seu negócio.",
      features: ["Design Responsivo", "SEO Otimizado", "CMS Personalizado"],
    },
    {
      icon: Layers,
      title: "Sistemas Web",
      description:
        "Sistemas robustos e escaláveis para automatizar processos e aumentar a eficiência operacional.",
      features: ["Dashboards Customizados", "API Integration", "Cloud Deploy"],
    },
    {
      icon: Target,
      title: "Landing Pages",
      description:
        "Páginas de alta conversão focadas em capturar leads e impulsionar suas campanhas de marketing.",
      features: ["Alta Conversão", "A/B Testing", "Analytics Integrado"],
    },
    {
      icon: Smartphone,
      title: "Aplicativos",
      description:
        "Apps nativos e híbridos para iOS e Android, oferecendo experiências móveis excepcionais.",
      features: ["Cross-Platform", "Push Notifications", "Offline Support"],
    },
    {
      icon: ShoppingCart,
      title: "E-commerce",
      description:
        "Lojas virtuais completas com gestão de produtos, pagamentos seguros e experiência de compra otimizada.",
      features: ["Multi-Pagamento", "Gestão de Estoque", "Relatórios"],
    },
    {
      icon: Sparkles,
      title: "Soluções Personalizadas",
      description:
        "Desenvolvimento sob medida para atender necessidades específicas do seu negócio com tecnologia de ponta.",
      features: ["Consultoria", "Integração", "Suporte Dedicado"],
    },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="services" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Nossos <span className="gradient-text">Serviços</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Soluções digitais integradas que impulsionam o crescimento e a eficiência do seu negócio
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="glass-effect p-8 rounded-xl hover:border-primary/60 transition-all group hover:scale-105"
            >
              <div className="w-16 h-16 rounded-lg bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform glow-primary">
                <service.icon className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors">
                {service.title}
              </h3>
              <p className="text-muted-foreground mb-6">{service.description}</p>
              <ul className="space-y-2">
                {service.features.map((feature, i) => (
                  <li key={i} className="flex items-center text-sm">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary mr-3" />
                    {feature}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="glass-effect p-8 md:p-12 rounded-2xl max-w-3xl mx-auto border-primary/30">
            <h3 className="text-3xl font-bold mb-4">
              Pronto para começar seu projeto?
            </h3>
            <p className="text-muted-foreground text-lg mb-8">
              Vamos transformar sua ideia em realidade com tecnologia de ponta e design
              excepcional
            </p>
            <Button
              variant="hero"
              size="lg"
              onClick={() => scrollToSection("#contact")}
            >
              Solicite um Orçamento Gratuito
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
