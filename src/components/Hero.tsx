import { ArrowRight, Shield, Zap, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const Hero = () => {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 pb-32"
    >
      {/* Futuristic Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-card to-background">
        {/* Animated Grid */}
        <div className="absolute inset-0 opacity-20">
          <div 
            className="absolute inset-0" 
            style={{
              backgroundImage: `
                linear-gradient(to right, hsl(var(--primary) / 0.1) 1px, transparent 1px),
                linear-gradient(to bottom, hsl(var(--primary) / 0.1) 1px, transparent 1px)
              `,
              backgroundSize: '60px 60px',
            }}
          />
        </div>

        {/* Floating Particles */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(15)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -50, 0],
                x: [0, Math.random() * 30 - 15, 0],
                opacity: [0.2, 0.5, 0.2],
              }}
              transition={{
                duration: Math.random() * 10 + 10,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <div 
                className="w-2 h-2 bg-primary/40 rounded-full"
                style={{
                  boxShadow: '0 0 20px hsl(var(--primary) / 0.5)',
                }}
              />
            </motion.div>
          ))}
        </div>

        {/* Glowing Orbs */}
        <motion.div
          className="absolute top-1/4 -left-20 w-96 h-96 bg-primary/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-1/4 -right-20 w-96 h-96 bg-secondary/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        {/* Scanning Lines */}
        <motion.div
          className="absolute inset-x-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent"
          animate={{
            top: ['0%', '100%'],
            opacity: [0, 1, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-effect mb-6">
              <div className="w-2 h-2 bg-primary rounded-full animate-pulse" />
              <span className="text-sm font-medium text-muted-foreground">
                Soluções Digitais Profissionais
              </span>
            </div>

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
              Transformamos Ideias em{" "}
              <span className="gradient-text">Soluções Digitais</span>
              <br />
              de Alto Impacto
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-3xl mx-auto">
              Desenvolvemos sites, sistemas e aplicações sob medida que impulsionam 
              seu negócio. Tecnologia de ponta, design estratégico e resultados mensuráveis.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
              <Button
                variant="hero"
                size="lg"
                className="group"
                onClick={() => scrollToSection("#contact")}
              >
                Solicitar Orçamento
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button
                variant="glass"
                size="lg"
                onClick={() => scrollToSection("#portfolio")}
              >
                Ver Projetos
              </Button>
            </div>
          </motion.div>

          {/* Value Props */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto"
          >
            {[
              {
                icon: Shield,
                title: "Qualidade Garantida",
                description: "Código limpo, seguro e otimizado para performance máxima",
              },
              {
                icon: Zap,
                title: "Entrega Ágil",
                description: "Metodologia moderna para entregas rápidas e eficientes",
              },
              {
                icon: TrendingUp,
                title: "Resultados Reais",
                description: "Soluções focadas em gerar ROI e crescimento para seu negócio",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="glass-effect p-6 rounded-lg hover:border-primary/40 transition-all duration-300"
              >
                <item.icon className="w-8 h-8 text-primary mb-4" />
                <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-16 pt-16 border-t border-border/50"
          >
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
              {[
                { label: "Projetos Entregues", value: "150+" },
                { label: "Clientes Ativos", value: "80+" },
                { label: "Anos de Experiência", value: "5+" },
                { label: "Taxa de Satisfação", value: "100%" },
              ].map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl md:text-4xl font-bold gradient-text mb-2">
                    {stat.value}
                  </div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
