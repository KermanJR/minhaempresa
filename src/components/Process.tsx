import { MessageSquare, Palette, Code, Rocket, CheckCircle, BarChart3, Users, Zap, Shield, TrendingUp } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

const Process = () => {
  const steps = [
    {
      number: "01",
      icon: MessageSquare,
      title: "Descoberta & Consultoria",
      description: "Análise profunda do seu negócio, mercado e objetivos",
      details: [
        "Entrevistas estratégicas com stakeholders",
        "Análise de concorrentes e mercado",
        "Definição de KPIs e métricas de sucesso",
        "Roadmap técnico e comercial",
      ],
      color: "bg-green-500/20",
      borderColor: "border-green-500/30",
      timeline: "Semana 1-2",
    },
    {
      number: "02",
      icon: Palette,
      title: "Design Estratégico",
      description: "Prototipagem e design focado em conversão e UX",
      details: [
        "Wireframes e estrutura de informação",
        "Design system customizado",
        "Protótipos interativos para validação",
        "Testes de usabilidade com usuários reais",
      ],
      color: "bg-green-500/20",
      borderColor: "border-green-500/30",
      timeline: "Semana 3-5",
    },
    {
      number: "03",
      icon: Code,
      title: "Desenvolvimento Ágil",
      description: "Codificação com qualidade enterprise e testes rigorosos",
      details: [
        "Desenvolvimento modular e escalável",
        "Code review e pair programming",
        "Testes automatizados (unit, integration, e2e)",
        "CI/CD pipeline e deployments contínuos",
      ],
      color: "from-green-500/20 to-green-600/20",
      borderColor: "border-green-500/30",
      timeline: "Semana 6-10",
    },
    {
      number: "04",
      icon: Rocket,
      title: "Lançamento & Otimização",
      description: "Deploy profissional e suporte pós-lançamento",
      details: [
        "Deploy em produção com zero downtime",
        "Monitoramento de performance 24/7",
        "Treinamento da equipe",
        "Suporte técnico e manutenção contínua",
      ],
      color: "bg-green-500/20",
      borderColor: "border-green-500/30",
      timeline: "Semana 11+",
    },
  ];

  const guarantees = [
    {
      icon: CheckCircle,
      title: "Qualidade Garantida",
      description: "Código testado e documentado com padrões enterprise",
    },
    {
      icon: Shield,
      title: "Segurança Máxima",
      description: "Proteção contra vulnerabilidades e conformidade com LGPD",
    },
    {
      icon: TrendingUp,
      title: "Performance Otimizada",
      description: "Velocidade de carregamento e responsividade garantidas",
    },
    {
      icon: Users,
      title: "Comunicação Clara",
      description: "Atualizações semanais e acesso ao desenvolvedor dedicado",
    },
  ];

  return (
    <section id="process" className="py-24 relative overflow-hidden bg-black">
      {/* Background Decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary rounded-full blur-3xl" />
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
            <Zap className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary">Metodologia Comprovada</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-green-500">
            Nosso <span className="text-primary">Processo</span>
          </h2>
          <p className="text-white text-lg max-w-3xl mx-auto">
            Seguimos uma metodologia ágil e transparente que garante qualidade, comunicação 
            contínua e resultados excepcionais. Cada etapa é planejada, executada e validada.
          </p>
        </motion.div>

        {/* Process Steps */}
        <div className="max-w-6xl mx-auto mb-20">
          <div className="space-y-8">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className={`glass-effect border ${step.borderColor} p-8 rounded-2xl hover:border-primary/60 transition-all group`}
              >
              <motion.div
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
                className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 rounded-2xl transition-opacity pointer-events-none"
              />
                <div className="grid md:grid-cols-3 gap-8 items-start relative z-10">
                  {/* Step Number & Icon */}
                  <div className="md:col-span-1 flex items-start gap-4">
                    <motion.div
                      whileHover={{ scale: 1.15, rotate: 10 }}
                      className={`w-24 h-24 rounded-2xl bg-gradient-to-br ${step.color} flex items-center justify-center flex-shrink-0 transition-transform`}
                    >
                      <div className="text-center">
                        <motion.div
                          animate={{ y: [0, -5, 0] }}
                          transition={{ duration: 2, repeat: Infinity }}
                          className="text-3xl font-bold text-primary"
                        >
                          {step.number}
                        </motion.div>
                        <step.icon className="w-6 h-6 text-primary mx-auto mt-1" />
                      </div>
                    </motion.div>
                    <div className="hidden md:block text-sm font-semibold text-white whitespace-nowrap pt-2 bg-primary/10 px-3 py-1 rounded-lg">
                      {step.timeline}
                    </div>
                  </div>

                  {/* Step Content */}
                  <div className="md:col-span-2">
                    <motion.h3
                      whileHover={{ color: "hsl(var(--primary))" }}
                      className="text-2xl font-bold mb-2 transition-colors"
                    >
                      {step.title}
                    </motion.h3>
                    <p className="text-white mb-6 group-hover:text-green-500 transition-colors">
                      {step.description}
                    </p>

                    {/* Details List */}
                    <div className="grid sm:grid-cols-2 gap-3">
                      {step.details.map((detail, i) => (
                        <motion.div
                          key={i}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: (index * 0.15) + (i * 0.05) }}
                          whileHover={{ x: 5 }}
                          className="flex items-start gap-3 group/item"
                        >
                          <motion.div
                            whileHover={{ scale: 1.2 }}
                          >
                            <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5 group-hover/item:text-secondary transition-colors" />
                          </motion.div>
                          <span className="text-sm text-white group-hover/item:text-green-500 transition-colors">{detail}</span>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Connection Arrow */}
                {index < steps.length - 1 && (
                  <motion.div
                    animate={{ y: [0, 8, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="flex justify-center mt-8 text-primary/50"
                  >
                    <div className="text-3xl">↓</div>
                  </motion.div>
                )}
              </motion.div>
            ))}
          </div>
        </div>

        {/* Guarantees Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          <h3 className="text-3xl font-bold text-center mb-12 text-green-500">
            Nossas <span className="text-primary">Garantias</span>
          </h3>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {guarantees.map((guarantee, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -8, boxShadow: "0 20px 40px rgba(var(--primary), 0.15)" }}
                className="glass-effect p-6 rounded-xl border border-primary/20 hover:border-primary/60 transition-all group hover:scale-105 cursor-pointer relative overflow-hidden"
              >
                {/* Background Glow */}
                <motion.div
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  className="absolute inset-0 bg-primary/8 opacity-0 group-hover:opacity-100 transition-opacity rounded-xl"
                />

                <div className="relative z-10">
                  <motion.div
                    whileHover={{ scale: 1.2, rotate: 15 }}
                    className="mb-4"
                  >
                    <guarantee.icon className="w-10 h-10 text-primary group-hover:text-secondary transition-colors" />
                  </motion.div>
                  <h4 className="font-semibold mb-2 group-hover:text-primary transition-colors">{guarantee.title}</h4>
                  <p className="text-sm text-white group-hover:text-green-500 transition-colors">{guarantee.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Transparency Box */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="glass-effect p-10 rounded-2xl border-primary/30 max-w-3xl mx-auto"
        >
          <div className="flex items-start gap-6">
            <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center flex-shrink-0">
              <BarChart3 className="w-7 h-7 text-primary" />
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-3 text-green-500">Transparência Total & Relatórios</h3>
              <p className="text-white mb-4">
                Você possui acesso a um dashboard em tempo real com métricas, progresso do projeto, 
                commits, performance e relatórios semanais. Reuniões de status toda segunda-feira 
                garantem alinhamento total com sua visão.
              </p>
              <div className="flex flex-wrap gap-3">
                <div className="px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium">
                  Dashboard em Tempo Real
                </div>
                <div className="px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium">
                  Relatórios Semanais
                </div>
                <div className="px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium">
                  Reuniões Regulares
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-center mt-16"
        >
          <p className="text-white mb-6">
            Pronto para transformar sua ideia em realidade?
          </p>
          <Button variant="hero" size="lg" className="group">
            Começar Projeto Agora
            <Rocket className="ml-2 group-hover:translate-y-1 transition-transform" />
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default Process;
