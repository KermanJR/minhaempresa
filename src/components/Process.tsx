import { MessageSquare, Palette, Code, Rocket } from "lucide-react";
import { motion } from "framer-motion";

const Process = () => {
  const steps = [
    {
      icon: MessageSquare,
      title: "1. Descoberta",
      description:
        "Entendemos profundamente seu negócio, objetivos e público-alvo para criar a estratégia perfeita.",
      color: "from-primary/20 to-primary/5",
    },
    {
      icon: Palette,
      title: "2. Design",
      description:
        "Criamos protótipos visuais modernos e interfaces intuitivas focadas na experiência do usuário.",
      color: "from-secondary/20 to-secondary/5",
    },
    {
      icon: Code,
      title: "3. Desenvolvimento",
      description:
        "Codificação com as melhores práticas, testes rigorosos e tecnologias de ponta para garantir qualidade.",
      color: "from-primary/20 to-primary/5",
    },
    {
      icon: Rocket,
      title: "4. Lançamento",
      description:
        "Deploy otimizado, treinamento da equipe e suporte contínuo para garantir o sucesso do projeto.",
      color: "from-secondary/20 to-secondary/5",
    },
  ];

  return (
    <section id="process" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Nosso <span className="gradient-text">Processo</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Metodologia comprovada para entregar projetos de excelência
          </p>
        </motion.div>

        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="relative"
              >
                <div className="glass-effect p-8 rounded-xl hover:border-primary/60 transition-all group hover:scale-105 h-full">
                  <div
                    className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${step.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform glow-primary`}
                  >
                    <step.icon className="w-10 h-10 text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {step.description}
                  </p>
                </div>

                {/* Connection Line */}
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 -right-4 w-8 h-0.5 bg-gradient-to-r from-primary/50 to-transparent" />
                )}
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 text-center"
        >
          <div className="glass-effect p-8 rounded-xl max-w-2xl mx-auto border-primary/30">
            <h3 className="text-2xl font-bold mb-3">Transparência Total</h3>
            <p className="text-muted-foreground">
              Você acompanha cada etapa do desenvolvimento com atualizações regulares,
              demonstrações e feedback contínuo para garantir que o resultado final seja
              exatamente o que você imaginou.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Process;
