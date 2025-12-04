import { motion } from "framer-motion";

const TechStack = () => {
  const technologies = [
    {
      category: "Frontend",
      techs: [
        { name: "React", logo: "⚛️" },
        { name: "Next.js", logo: "▲" },
        { name: "TypeScript", logo: "TS" },
        { name: "Tailwind CSS", logo: "🎨" },
        { name: "Framer Motion", logo: "✨" },
        { name: "Vue.js", logo: "💚" },
      ],
    },
    {
      category: "Backend",
      techs: [
        { name: "Node.js", logo: "⬢" },
        { name: "Python", logo: "🐍" },
        { name: "PostgreSQL", logo: "🐘" },
        { name: "MongoDB", logo: "🍃" },
        { name: "Firebase", logo: "🔥" },
        { name: "GraphQL", logo: "◈" },
      ],
    },
    {
      category: "Mobile",
      techs: [
        { name: "React Native", logo: "📱" },
        { name: "Flutter", logo: "🐦" },
        { name: "Expo", logo: "⚡" },
        { name: "Native iOS", logo: "🍎" },
        { name: "Native Android", logo: "🤖" },
        { name: "Kotlin", logo: "🎯" },
      ],
    },
    {
      category: "Cloud & DevOps",
      techs: [
        { name: "AWS", logo: "☁️" },
        { name: "Google Cloud", logo: "🌐" },
        { name: "Docker", logo: "🐳" },
        { name: "Kubernetes", logo: "☸️" },
        { name: "CI/CD", logo: "🚀" },
        { name: "Vercel", logo: "▲" },
      ],
    },
    {
      category: "AI & Tools",
      techs: [
        { name: "OpenAI APIs", logo: "🤖" },
        { name: "LangChain", logo: "🔗" },
        { name: "Stripe", logo: "💳" },
        { name: "SendGrid", logo: "📧" },
        { name: "Jest Testing", logo: "🧪" },
        { name: "Figma", logo: "🎨" },
      ],
    },
  ];

  return (
    <section className="relative py-32 bg-black overflow-hidden">
      {/* Animated Background Gradients */}
      <motion.div
        className="absolute top-1/4 left-1/3 w-96 h-96 bg-gradient-to-br from-purple-500 to-transparent rounded-full blur-3xl"
        animate={{
          x: [0, 50, 0],
          y: [0, 100, 0],
        }}
        transition={{ duration: 20, repeat: Infinity }}
        style={{ opacity: 0.04 }}
      />
      <motion.div
        className="absolute bottom-1/3 right-1/3 w-96 h-96 bg-gradient-to-tl from-cyan-500 to-transparent rounded-full blur-3xl"
        animate={{
          x: [0, -50, 0],
          y: [0, -100, 0],
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
          <div className="flex justify-center items-center gap-3 mb-6">
            <img src="/fav1.png" alt="Nexus Developer" className="h-12 w-auto" />
            <span className="text-xs font-black text-green-500 tracking-widest uppercase">Tech Stack</span>
          </div>
          <div className="inline-block border border-green-500/40 rounded-full px-6 py-2 mb-8">
            <span className="text-xs font-semibold text-green-500 tracking-widest uppercase">
              Tecnologias que Dominamos
            </span>
          </div>
          <h2 className="text-5xl md:text-6xl font-black text-white mb-6">
            Stack Moderno & Premium
          </h2>
          <p className="text-lg text-white/60 max-w-2xl mx-auto font-light">
            Utilizamos as melhores e mais modernas tecnologias para garantir qualidade, performance e escalabilidade.
          </p>
        </motion.div>

        {/* Tech Stack Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6 mb-16">
          {technologies.map((techGroup, groupIdx) => (
            <motion.div
              key={groupIdx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: groupIdx * 0.1 }}
              viewport={{ once: true }}
              className="relative"
            >
              {/* Category Title */}
              <div className="text-center mb-6">
                <h3 className="text-lg font-black text-green-500 uppercase tracking-wider mb-4">
                  {techGroup.category}
                </h3>
                <div className="w-12 h-1 bg-gradient-to-r from-transparent via-green-500 to-transparent mx-auto" />
              </div>

              {/* Tech Items */}
              <div className="space-y-4">
                {techGroup.techs.map((tech, idx) => (
                  <motion.div
                    key={idx}
                    whileHover={{ x: 8 }}
                    className="group cursor-pointer"
                  >
                    <div className="flex items-center gap-3 p-3 rounded-lg border border-white/5 bg-white/2 hover:bg-white/5 hover:border-green-500/30 transition-all duration-300">
                      <span className="text-2xl">{tech.logo}</span>
                      <span className="text-sm font-semibold text-white/80 group-hover:text-green-500 transition-colors">
                        {tech.name}
                      </span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Statement */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center border-t border-white/10 pt-12"
        >
          <p className="text-white/70 text-lg font-light max-w-2xl mx-auto">
            Não nos prendemos a uma única tecnologia. Escolhemos a melhor ferramenta para <span className="text-green-500 font-black">cada projeto</span>, garantindo a solução perfeita.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default TechStack;
