import { Code, Rocket, Zap, Users, Award, TrendingUp, Target, CheckCircle2, Briefcase, Globe } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

const About = () => {
  const coreValues = [
    {
      icon: Award,
      title: "Excelência Técnica",
      description: "Código robusto, escalável e mantível. Enterprise-grade em todo projeto.",
    },
    {
      icon: TrendingUp,
      title: "Foco em Resultados",
      description: "Cada solução é medida por impacto no negócio, não apenas por funcionalidades.",
    },
    {
      icon: Target,
      title: "Estratégia Comercial",
      description: "Alinhamento com objetivos de negócio desde a primeira conversa.",
    },
    {
      icon: Users,
      title: "Parceria Verdadeira",
      description: "Você ganha uma extensão da sua equipe, totalmente dedicada ao sucesso.",
    },
  ];

  const expertise = [
    {
      icon: Code,
      title: "Desenvolvimento Enterprise",
      items: ["Arquitetura escalável e robusta", "Padrões SOLID e design patterns", "Code review e qualidade contínua"]
    },
    {
      icon: Rocket,
      title: "Performance & Otimização",
      items: ["Core Web Vitals otimizados", "Infraestrutura cloud moderna", "Monitoramento em produção 24/7"]
    },
    {
      icon: Globe,
      title: "Compliance & Segurança",
      items: ["LGPD e regulamentações", "Criptografia e dados sensíveis", "Testes de penetração e auditoria"]
    },
    {
      icon: CheckCircle2,
      title: "QA & Testes",
      items: ["Testes unitários automatizados", "Cobertura >80%", "Testes de carga e stress"]
    },
  ];

  const stats = [
    { number: "80+", label: "Clientes Ativos", detail: "em todo Brasil" },
    { number: "150+", label: "Projetos Entregues", detail: "com sucesso" },
    { number: "5+", label: "Anos de Expertise", detail: "no mercado" },
    { number: "99.9%", label: "Taxa de Uptime", detail: "garantida" },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="about" className="py-32 relative overflow-hidden bg-black">
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-green-500">
            Quem Somos
          </h2>
          <p className="text-white text-lg max-w-3xl mx-auto leading-relaxed">
            Agência de software focada em resultados e parcerias duradouras. Atuamos de forma discreta, priorizando a confiança e o sucesso dos nossos clientes.
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20 py-12 border-t border-b border-green-500/30">
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-green-500 mb-2">80+</div>
            <div className="font-semibold text-white mb-1">Clientes Ativos</div>
            <div className="text-xs text-white">em todo Brasil</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-green-500 mb-2">150+</div>
            <div className="font-semibold text-white mb-1">Projetos Entregues</div>
            <div className="text-xs text-white">com sucesso</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-green-500 mb-2">5+</div>
            <div className="font-semibold text-white mb-1">Anos de atuação</div>
            <div className="text-xs text-white">no mercado</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-green-500 mb-2">99.9%</div>
            <div className="font-semibold text-white mb-1">Taxa de Uptime</div>
            <div className="text-xs text-white">garantida</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
