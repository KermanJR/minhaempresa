import { Code, Rocket, Zap, Users, Award, TrendingUp, Target, CheckCircle2, Briefcase, Globe } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

const About = () => {
  const coreValues = [
    {
      icon: Award,
      title: "Excelência",
      description: "Qualidade enterprise em cada projeto, sem exceções",
    },
    {
      icon: TrendingUp,
      title: "Crescimento",
      description: "Focamos em métricas que impactam diretamente seu ROI",
    },
    {
      icon: Target,
      title: "Estratégia",
      description: "Cada linha de código serve um propósito comercial claro",
    },
    {
      icon: Users,
      title: "Parceria",
      description: "Somos extensão da sua equipe, não apenas fornecedores",
    },
  ];

  const expertise = [
    {
      icon: Code,
      title: "Código Enterprise",
      items: ["Arquitetura escalável", "Padrões de design", "Code review rigoroso"]
    },
    {
      icon: Rocket,
      title: "Performance",
      items: ["Otimização de assets", "Core Web Vitals", "Infraestrutura de ponta"]
    },
    {
      icon: Globe,
      title: "Soluções Globais",
      items: ["Multi-linguagem", "Compliance LGPD", "Segurança SSL/TLS"]
    },
    {
      icon: CheckCircle2,
      title: "QA Completo",
      items: ["Testes automatizados", "Cobertura 80%+", "Validação em produção"]
    },
  ];

  const stats = [
    { number: "80+", label: "Clientes Ativos", icon: Briefcase },
    { number: "150+", label: "Projetos Entregues", icon: Rocket },
    { number: "5+", label: "Anos no Mercado", icon: Target },
    { number: "99.9%", label: "Taxa de Uptime", icon: Award },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="about" className="py-32 relative overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-primary rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-secondary rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-effect mb-6">
            <Briefcase className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary">Quem Somos</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Agência de <span className="gradient-text">Transformação Digital</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
            Somos CodeVision, uma agência especializada em desenvolver soluções digitais de alto impacto que 
            geram resultados mensuráveis e crescimento sustentável para negócios em transformação.
          </p>
        </motion.div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20 py-12 border-y border-primary/10"
        >
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="flex justify-center mb-3">
                <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center">
                  <stat.icon className="w-7 h-7 text-primary" />
                </div>
              </div>
              <div className="text-3xl md:text-4xl font-bold gradient-text mb-2">{stat.number}</div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </motion.div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-16 items-start mb-20">
          {/* Left Column - Mission & Values */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            {/* Mission */}
            <div className="space-y-4">
              <h3 className="text-2xl font-bold">Nossa Missão</h3>
              <p className="text-foreground/80 leading-relaxed">
                Capacitar negócios a alcançarem seu potencial digital máximo através de soluções 
                tecnológicas estratégicas, centradas no usuário e orientadas por dados.
              </p>
            </div>

            {/* Vision */}
            <div className="space-y-4">
              <h3 className="text-2xl font-bold">Nossa Visão</h3>
              <p className="text-foreground/80 leading-relaxed">
                Ser o parceiro tecnológico preferido para empresas que buscam transformação digital 
                com excelência, inovação e resultado garantido.
              </p>
            </div>

            {/* Core Values */}
            <div className="space-y-4">
              <h3 className="text-2xl font-bold mb-6">Valores Fundamentais</h3>
              <div className="grid grid-cols-2 gap-4">
                {coreValues.map((value, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="glass-effect p-5 rounded-xl border border-primary/20 hover:border-primary/60 transition-all group hover:shadow-lg hover:shadow-primary/10"
                  >
                    <value.icon className="w-8 h-8 text-primary mb-3 group-hover:scale-110 transition-transform" />
                    <h4 className="font-semibold text-sm mb-1">{value.title}</h4>
                    <p className="text-xs text-muted-foreground leading-relaxed">{value.description}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right Column - Expertise */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-bold mb-8">Nossa Expertise</h3>

            {expertise.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="glass-effect p-6 rounded-xl border border-primary/20 hover:border-primary/60 hover:shadow-lg hover:shadow-primary/10 transition-all group"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                    <exp.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className="font-semibold text-lg mb-3">{exp.title}</h4>
                    <ul className="space-y-2">
                      {exp.items.map((item, i) => (
                        <li key={i} className="flex items-center gap-2 text-sm text-muted-foreground">
                          <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Technologies */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="glass-effect p-10 rounded-2xl border border-primary/20 mb-16"
        >
          <h3 className="text-2xl font-bold mb-8">Stack Tecnológico</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              "React", "Next.js", "TypeScript", "Node.js",
              "PostgreSQL", "AWS", "Docker", "TailwindCSS",
              "GraphQL", "Stripe", "Firebase", "Redis"
            ].map((tech) => (
              <motion.div
                key={tech}
                whileHover={{ scale: 1.05, y: -2 }}
                className="px-4 py-3 bg-primary/10 text-primary rounded-lg text-sm font-medium border border-primary/30 hover:border-primary/80 transition-all text-center"
              >
                {tech}
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <div className="glass-effect p-12 rounded-2xl border border-primary/30 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">Pronto para transformar seu negócio?</h3>
            <p className="text-muted-foreground mb-8">
              Vamos conversar sobre como a CodeVision pode impulsionar seu crescimento digital
            </p>
            <Button 
              variant="hero" 
              size="lg" 
              className="group"
              onClick={() => scrollToSection("#contact")}
            >
              Solicite uma Consultoria Gratuita
              <Rocket className="ml-2 w-4 h-4 group-hover:translate-y-1 transition-transform" />
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
