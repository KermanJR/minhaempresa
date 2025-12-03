import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import SectionIcon from "@/components/SectionIcon";

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "Qual é o prazo de um projeto?",
      answer:
        "O prazo varia conforme a complexidade. Projetos simples (website) levam 4-6 semanas, mobile apps 8-12 semanas, e sistemas complexos 12-20+ semanas. Elaboramos um cronograma detalhado durante a fase de discovery.",
    },
    {
      question: "Como vocês trabalham com clientes remotos?",
      answer:
        "100% online! Utilizamos ferramentas como Slack, Zoom, Jira e GitHub para comunicação e acompanhamento diário. Você terá acesso total ao progresso via dashboards e reuniões semanais de status.",
    },
    {
      question: "Qual é o investimento mínimo?",
      answer:
        "Não temos investimento mínimo, mas recomendamos começar com projetos acima de R$5.000 para garantir qualidade. Oferecemos pacotes e parcerias flexíveis de acordo com seu orçamento.",
    },
    {
      question: "Vocês fazem suporte e manutenção após o projeto?",
      answer:
        "Sim! Oferecemos planos de suporte mensal que incluem correções de bugs, updates de segurança, pequenas funcionalidades e otimizações. Você nunca fica sozinho.",
    },
    {
      question: "Como é feita a comunicação e acompanhamento?",
      answer:
        "Realizamos reuniões de kickoff, daily standups (assincronamente via Slack), reviews semanais e relatórios de progresso. Você sempre saberá exatamente em que estágio seu projeto está.",
    },
    {
      question: "E se eu não sou técnico, consigo entender a proposta?",
      answer:
        "Absolutamente! Apresentamos tudo de forma clara e didática. Usamos mockups, wireframes e documentação visual. Nossa equipe explica em linguagem acessível, focando no valor de negócio, não em jargão técnico.",
    },
    {
      question: "Quais são as garantias de qualidade?",
      answer:
        "Implementamos testes automatizados, code review rigoroso, staging environment completo e testes de usabilidade. O projeto só sai da nossa mão quando está impecável.",
    },
    {
      question: "Vocês trabalham com outras agências ou freelancers?",
      answer:
        "Podemos integrar com sua equipe existente, assumir projetos em andamento ou trabalhar de forma complementar. Somos flexíveis e focamos no que é melhor para seu projeto.",
    },
  ];

  return (
    <section className="relative py-32 bg-black overflow-hidden">
      {/* Animated Background Gradients */}
      <motion.div
        className="absolute top-1/3 right-1/4 w-96 h-96 bg-gradient-to-br from-blue-500 to-transparent rounded-full blur-3xl"
        animate={{
          x: [0, 100, 0],
          y: [0, 50, 0],
        }}
        transition={{ duration: 20, repeat: Infinity }}
        style={{ opacity: 0.04 }}
      />
      <motion.div
        className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-gradient-to-tl from-purple-500 to-transparent rounded-full blur-3xl"
        animate={{
          x: [0, -100, 0],
          y: [0, -50, 0],
        }}
        transition={{ duration: 25, repeat: Infinity, delay: 2 }}
        style={{ opacity: 0.04 }}
      />

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="flex justify-center items-center gap-2 mb-6">
            <div className="w-8 h-8 flex items-center justify-center rounded border border-green-500/50">
              <SectionIcon size={20} />
            </div>
            <span className="text-xs font-black text-green-500 tracking-widest uppercase">Dúvidas Frequentes</span>
          </div>
          <div className="inline-block border border-green-500/40 rounded-full px-6 py-2 mb-8">
            <span className="text-xs font-semibold text-green-500 tracking-widest uppercase">
              FAQ
            </span>
          </div>
          <h2 className="text-5xl md:text-6xl font-black text-white mb-6">
            Perguntas Frequentes
          </h2>
          <p className="text-lg text-white/60 max-w-2xl mx-auto font-light">
            Tudo que você precisa saber sobre como trabalhamos e nossos serviços.
          </p>
        </motion.div>

        {/* FAQ Accordion */}
        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.05 }}
              viewport={{ once: true }}
              className="mb-4"
            >
              <button
                onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                className="w-full text-left"
              >
                <div className="p-6 rounded-xl border border-white/10 bg-white/2 hover:bg-white/5 hover:border-green-500/30 transition-all duration-300 flex items-center justify-between group"
                >
                  <h3 className="text-lg font-bold text-white group-hover:text-green-500 transition-colors pr-4 flex-1">
                    {faq.question}
                  </h3>
                  <motion.div
                    animate={{ rotate: openIndex === idx ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="flex-shrink-0"
                  >
                    <ChevronDown className="w-5 h-5 text-green-500" />
                  </motion.div>
                </div>
              </button>

              <AnimatePresence>
                {openIndex === idx && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="p-6 bg-white/2 border-x border-b border-white/5 text-white/70 leading-relaxed font-light">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-20 text-center"
        >
          <p className="text-white/60 text-lg font-light mb-6">
            Não encontrou sua pergunta? <span className="text-green-500 font-black">Entre em contato!</span>
          </p>
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 rounded-full bg-green-500 text-black font-black uppercase tracking-wider hover:bg-green-400 transition-all duration-300 shadow-[0_0_25px_rgba(0,255,65,0.5)] hover:shadow-[0_0_40px_rgba(0,255,65,0.7)] inline-block"
          >
            Fale Conosco
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQ;
