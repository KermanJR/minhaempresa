import { Code, Rocket, Zap, Users } from "lucide-react";
import { motion } from "framer-motion";

const About = () => {
  const features = [
    {
      icon: Code,
      title: "Código Limpo",
      description: "Desenvolvimento com as melhores práticas e padrões da indústria",
    },
    {
      icon: Rocket,
      title: "Performance",
      description: "Soluções otimizadas para máxima velocidade e eficiência",
    },
    {
      icon: Zap,
      title: "Inovação",
      description: "Uso de tecnologias modernas e tendências do mercado",
    },
    {
      icon: Users,
      title: "Foco no Cliente",
      description: "Entrega personalizada alinhada aos objetivos do negócio",
    },
  ];

  return (
    <section id="about" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Sobre <span className="gradient-text">Nós</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Uma equipe especializada em transformar negócios através de soluções digitais inovadoras e resultados mensuráveis
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <p className="text-foreground/90 text-lg leading-relaxed">
              Com mais de 5 anos de experiência, nossa equipe especializa-se em transformar ideias em
              soluções digitais estratégicas. Nosso trabalho vai além do código – é sobre entender seus
              objetivos e criar plataformas que geram impacto real e crescimento mensurável.
            </p>
            <p className="text-foreground/90 text-lg leading-relaxed">
              Desde websites institucionais até sistemas complexos e plataformas e-commerce
              escaláveis, utilizamos tecnologias de ponta como React, Node.js, TypeScript e
              muito mais para entregar projetos que superam expectativas e impulsionam negócios.
            </p>
            <p className="text-foreground/90 text-lg leading-relaxed">
              Cada projeto é uma oportunidade de criar soluções únicas, combinando design estratégico,
              performance excepcional e experiência do usuário que gera conversão e fidelização.
            </p>
            <div className="flex flex-wrap gap-3 pt-4">
              {[
                "React",
                "Node.js",
                "TypeScript",
                "Next.js",
                "TailwindCSS",
                "PostgreSQL",
                "AWS",
                "Docker",
              ].map((tech) => (
                <span
                  key={tech}
                  className="px-4 py-2 glass-effect rounded-lg text-sm font-medium text-primary border border-primary/30 hover:border-primary/60 hover:scale-105 transition-all cursor-default"
                >
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-2 gap-4"
          >
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="glass-effect p-6 rounded-xl hover:border-primary/60 transition-all group hover:scale-105"
              >
                <feature.icon className="w-10 h-10 text-primary mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="font-semibold mb-2">{feature.title}</h3>
                <p className="text-sm text-muted-foreground">{feature.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
