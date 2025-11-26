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
      title: "Sites & Portais",
      description:
        "Websites institucionais, portais corporativos e plataformas que fortalecem sua presença digital e geram autoridade no mercado.",
      features: ["Design Responsivo", "SEO Avançado", "CMS Personalizado"],
    },
    {
      icon: Layers,
      title: "Sistemas Web",
      description:
        "Sistemas robustos e escaláveis que automatizam processos críticos, aumentam eficiência operacional e reduzem custos.",
      features: ["Dashboards Customizados", "API REST/GraphQL", "Cloud Deploy"],
    },
    {
      icon: Target,
      title: "Landing Pages",
      description:
        "Páginas de alta conversão focadas em capturar leads qualificados e impulsionar suas campanhas de marketing com resultados comprovados.",
      features: ["Otimização de Conversão", "A/B Testing", "Analytics Avançado"],
    },
    {
      icon: Smartphone,
      title: "Aplicativos Móveis",
      description:
        "Apps nativos (iOS/Android) e progressivos que oferecem experiências móveis excepcionais com suporte offline e push notifications.",
      features: ["Cross-Platform", "Push Notifications", "Offline Support"],
    },
    {
      icon: ShoppingCart,
      title: "E-commerce & Lojas",
      description:
        "Plataformas de venda online completas com gestão de estoque, múltiplos gateways de pagamento e experiência de compra otimizada.",
      features: ["Multi-Pagamento", "Gestão de Estoque", "Relatórios Detalhados"],
    },
    {
      icon: Sparkles,
      title: "Soluções Personalizadas",
      description:
        "Desenvolvimento under medida para atender às necessidades únicas do seu negócio com tecnologia de ponta e suporte dedicado.",
      features: ["Consultoria Estratégica", "Integração Sistêmica", "Suporte Dedicado"],
    },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="services" className="py-24 relative overflow-hidden bg-black">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-green-500">
            Nossos Serviços
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Soluções digitais integradas que impulsionam o crescimento do seu negócio
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              whileHover={{ y: -8 }}
              className="p-8 rounded-lg border border-green-500/30 hover:border-green-500/60 transition-all bg-black/40 group cursor-pointer"
            >
              <div className="w-12 h-12 rounded-lg bg-green-500/20 flex items-center justify-center mb-6 group-hover:bg-green-500/30 transition-colors">
                <service.icon className="w-6 h-6 text-green-500" />
              </div>

              <h3 className="text-xl font-bold mb-3 text-green-500">
                {service.title}
              </h3>

              <p className="text-gray-400 mb-6 text-sm leading-relaxed">
                {service.description}
              </p>

              <div className="space-y-2">
                {service.features.map((feature, i) => (
                  <div
                    key={i}
                    className="flex items-center text-sm text-gray-400"
                  >
                    <div className="w-1.5 h-1.5 rounded-full bg-green-500 mr-3 flex-shrink-0" />
                    {feature}
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="p-8 md:p-12 rounded-lg border border-green-500/30 max-w-3xl mx-auto bg-black/40">
            <h3 className="text-3xl font-bold mb-4 text-green-500">
              Pronto para impulsionar seu negócio?
            </h3>
            <p className="text-gray-400 text-lg mb-8">
              Vamos conversar sobre como podemos transformar sua visão em realidade com tecnologia de ponta
            </p>
            <Button
              variant="outline"
              className="bg-green-500 text-white border-green-500 hover:bg-green-600"
              onClick={() => scrollToSection("#contact")}
            >
              Agendar Consultoria
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
