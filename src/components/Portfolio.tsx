import { useState } from "react";
import { ArrowRight, ArrowUpRight, Star } from "lucide-react";
import { motion } from "framer-motion";

const Portfolio = () => {
  const projects = [

    {
      title: "Clan Color",
      category: "E-commerce",
      sprint: "E-COMMERCE SPRINT",
      description: "Impactamos o mundo da moda com uma solução inovadora que alcançou mais de 10 mil downloads em menos de um ano.",
      clientName: "Sofia Garcia",
      clientRole: "CEO",
      clientCompany: "Clan Color",
      testimonial: "A equipe demonstrou grande dedicação e entusiasmo desde o início do projeto, contribuindo com sugestões valiosas que enriqueceram o desenvolvimento do aplicativo.",
      nps: "10",
      image: "/clan-color.png",
      link: "https://clancolor.com.br/",
      color: "from-pink-500 to-rose-500",
    },
    {
      title: "BraSOL Engenharia",
      category: "Sites",
      sprint: "SOLAR SOLUTIONS",
      description: "Transformamos a presença digital de uma empresa de energia solar, gerando mais de 500 leads qualificados mensalmente.",
      clientName: "Carlos Santos",
      clientRole: "Diretor",
      clientCompany: "BraSOL",
      testimonial: "O resultado superou nossas expectativas. O site passou a gerar leads de qualidade e aumentou nossa conversão em 300%.",
      nps: "10",
      image: "/brasol.png",
      link: "https://brasolengenharia.com.br/",
      color: "from-yellow-500 to-orange-500",
    },
    {
      title: "SINDJUFE-MS",
      category: "Sites",
      sprint: "INSTITUTIONAL PORTAL",
      description: "Criamos um portal corporativo moderno que serve mais de 5 mil membros com gestão de conteúdo inteligente.",
      clientName: "Juíz Fernando",
      clientRole: "Presidente",
      clientCompany: "SINDJUFE-MS",
      testimonial: "A plataforma melhorou significativamente a comunicação com nossos associados e aumentou o engajamento em 250%.",
      nps: "9",
      image: "/sindjufe.png",
      link: "https://sindjufems.org.br/",
      color: "from-blue-500 to-indigo-500",
    },
    {
      title: "Solarcia",
      category: "Sites",
      sprint: "RENEWABLE ENERGY",
      description: "Desenvolvemos uma plataforma de energia solar com sistema de orçamento automatizado em tempo real.",
      clientName: "Marina Costa",
      clientRole: "Sócia",
      clientCompany: "Solarcia",
      testimonial: "Aumentamos nossas vendas em 180% desde o lançamento do novo site. Incrível!",
      nps: "10",
      image: "/solarcia.png",
      link: "https://solarcia.com.br/",
      color: "from-green-500 to-emerald-500",
    },
    {
      title: "Dandrade Assessoria",
      category: "Sistemas",
      sprint: "ENTERPRISE SYSTEM",
      description: "Sistema especializado em gestão de precatórios com dashboard analítico de classe mundial.",
      clientName: "Dr. Dandrade",
      clientRole: "Fundador",
      clientCompany: "Dandrade",
      testimonial: "O sistema transformou completamente nossa operação. Reduzimos tempo de processamento em 70%.",
      nps: "10",
      image: "/dandrade.png",
      link: "https://dandrade.com.br/",
      color: "from-purple-500 to-violet-500",
    },
    {
      title: "Nest Rental",
      category: "Sistemas",
      sprint: "MARKETPLACE SOLUTION",
      description: "Plataforma de marketplace completa para aluguel de equipamentos com sistema de pagamento fracionado.",
      clientName: "Lucas Oliveira",
      clientRole: "Founder",
      clientCompany: "Nest Rental",
      testimonial: "Dentro de 6 meses, triplicamos nosso volume de negócios. A plataforma é incrível!",
      nps: "10",
      image: "/nestrental.png",
      link: "https://nestrental.com.br/",
      color: "from-cyan-500 to-blue-500",
    },
    {
      title: "Simasul Siderurgia",
      category: "Site",
      sprint: "MARKETPLACE SOLUTION",
      description: "Indústria siderúrgica localizada na cidade de Aquidauana – MS, que atua no segmento de produção de ferro gusa, aciaria, fundição e siderurgia.",
      clientName: "Lucas Oliveira",
      clientRole: "Founder",
      clientCompany: "Nest Rental",
      testimonial: "Dentro de 6 meses, triplicamos nosso volume de negócios. A plataforma é incrível!",
      nps: "10",
      image: "/simasul.png",
      link: "https://simasul.com.br/",
      color: "from-cyan-500 to-blue-500",
    },
    {
      title: "Rocket Suprimentos",
      category: "Site",
      sprint: "MARKETPLACE SOLUTION",
      description: "Fornecimento de produtos e serviços de comunicação visual de alta qualidade quando você mais precisa. Resposta Imediata.",
      clientName: "Lucas Oliveira",
      clientRole: "Founder",
      clientCompany: "Nest Rental",
      testimonial: "Dentro de 6 meses, triplicamos nosso volume de negócios. A plataforma é incrível!",
      nps: "10",
      image: "/rocket.png",
      link: "https://rocketsuprimentos.com.br/",
      color: "from-cyan-500 to-blue-500",
    },
  ];

  return (
    <section id="portfolio" className="relative min-h-screen bg-black overflow-hidden py-32">
      {/* Grid Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `
              linear-gradient(to right, rgba(0,255,65,0.1) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(0,255,65,0.1) 1px, transparent 1px)
            `,
            backgroundSize: "50px 50px",
          }}
        />
      </div>

      {/* Animated Glow Orbs */}
      <motion.div
        className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-br from-blue-500 to-transparent rounded-full blur-3xl"
        animate={{
          x: [0, 100, 0],
          y: [0, 50, 0],
        }}
        transition={{ duration: 20, repeat: Infinity }}
        style={{ opacity: 0.05 }}
      />
      <motion.div
        className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-tl from-purple-500 to-transparent rounded-full blur-3xl"
        animate={{
          x: [0, -100, 0],
          y: [0, -50, 0],
        }}
        transition={{ duration: 25, repeat: Infinity, delay: 2 }}
        style={{ opacity: 0.05 }}
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
          <div className="inline-block border border-green-500/40 rounded-full px-6 py-2 mb-8">
            <span className="text-xs font-semibold text-green-500 tracking-widest uppercase">
              Portfólio
            </span>
          </div>
          <p className="text-white/60 text-lg font-light max-w-2xl mx-auto">
            Soluções digitais que transformaram negócios
          </p>
        </motion.div>

        {/* Portfolio Items Vertical Stack */}
        <div className="space-y-24">
          {projects.map((project, idx) => {
            const isEven = idx % 2 === 0;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: idx * 0.1 }}
                viewport={{ once: true, margin: "-100px" }}
                className={`grid lg:grid-cols-2 gap-12 items-center ${isEven ? "" : "lg:grid-cols-2 lg:direction-rtl"}`}
              >
                {/* Text Content */}
                <motion.div
                  className={`space-y-6 ${isEven ? "lg:order-1" : "lg:order-2"}`}
                >
                  {/* Tag */}
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                    viewport={{ once: true }}
                  >
                    <span className={`inline-block bg-gradient-to-r ${project.color} text-white px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider`}>
                      {project.sprint}
                    </span>
                  </motion.div>

                  {/* Title */}
                  <motion.h3
                    initial={{ opacity: 0, y: -10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.15 }}
                    viewport={{ once: true }}
                    className="text-4xl md:text-5xl font-black text-white leading-tight"
                  >
                    {project.title}
                  </motion.h3>

                  {/* Description */}
                  <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.2 }}
                    viewport={{ once: true }}
                    className="text-base text-white/70 leading-relaxed"
                  >
                    {project.description}
                  </motion.p>

                  {/* Stats */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.25 }}
                    viewport={{ once: true }}
                    className="grid grid-cols-2 gap-4 pt-4"
                  >
                    <div className="border-l-2 border-green-500 pl-4">
                      <p className="text-2xl font-black text-green-500">NPS {project.nps}</p>
                      <p className="text-xs text-white/50">Satisfação</p>
                    </div>
                    <div className="border-l-2 border-white/20 pl-4">
                      <p className="text-2xl font-black text-white">{project.clientName}</p>
                      <p className="text-xs text-white/50">Cliente</p>
                    </div>
                  </motion.div>

                  {/* CTA */}
                  <motion.a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    viewport={{ once: true }}
                    whileHover={{ x: 5 }}
                    className="inline-flex items-center gap-2 text-white font-black uppercase text-sm group hover:text-green-500 transition-colors duration-300"
                  >
                    Visitar projeto
                    <motion.span
                      animate={{ x: [0, 5, 0] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                    >
                      <ArrowRight className="w-4 h-4" />
                    </motion.span>
                  </motion.a>
                </motion.div>

                {/* Image Section */}
                <motion.div
                  className={`relative ${isEven ? "lg:order-2" : "lg:order-1"}`}
                  initial={{ opacity: 0, scale: 0.95, x: isEven ? 40 : -40 }}
                  whileInView={{ opacity: 1, scale: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  viewport={{ once: true, margin: "-100px" }}
                >
                  <div className="group relative rounded-2xl overflow-hidden border border-white/10 hover:border-green-500/50 transition-all duration-500 bg-black/40 backdrop-blur">
                    {/* Image Container */}
                    <div className="relative aspect-video overflow-hidden">
                      <motion.img
                        src={project.image}
                        alt={project.title}
                        initial={{ scale: 1.1 }}
                        whileInView={{ scale: 1 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                      />

                      {/* Overlay Gradient */}
                      <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-0 group-hover:opacity-10 mix-blend-overlay transition-opacity duration-500`} />

                      {/* Glass Overlay on Hover */}
                      <motion.div
                        initial={{ opacity: 0 }}
                        whileHover={{ opacity: 1 }}
                        className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"
                      />
                    </div>

                    {/* Bottom Info Bar */}
                    <motion.div
                      className="px-6 py-4 border-t border-white/10"
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.4 }}
                      viewport={{ once: true }}
                    >
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-xs text-white/50">{project.category}</p>
                          <p className="text-sm font-bold text-white">{project.clientRole}</p>
                        </div>
                        <div className="flex gap-1">
                          {[...Array(Math.min(5, parseInt(project.nps)))].map((_, i) => (
                            <Star key={i} className="w-4 h-4 fill-green-500 text-green-500" />
                          ))}
                        </div>
                      </div>
                    </motion.div>

                    {/* Glow Effect */}
                    <motion.div
                      className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                      style={{
                        boxShadow: "inset 0 0 20px rgba(0, 255, 65, 0.1)",
                      }}
                    />
                  </div>

                  {/* Corner Accent */}
                  <motion.div
                    className="absolute -top-2 -right-2 w-16 h-16 border border-green-500/20 rounded-lg pointer-events-none group-hover:border-green-500/50 transition-colors duration-300"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.5 }}
                    viewport={{ once: true }}
                  />
                </motion.div>
              </motion.div>
            );
          })}
        </div>

        {/* CTA Section */}
        <motion.div
          className="mt-32 relative"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          {/* Background Card */}
          <div className="relative border border-white/10 rounded-3xl overflow-hidden backdrop-blur-sm p-16 md:p-20">
            {/* Animated Border */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-green-500/0 via-green-500/20 to-green-500/0"
              animate={{
                opacity: [0.05, 0.15, 0.05],
              }}
              transition={{ duration: 4, repeat: Infinity }}
            />

            {/* Content */}
            <div className="relative z-10 text-center">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.1 }}
                viewport={{ once: true }}
              >
                <div className="inline-block border border-green-500/40 rounded-full px-6 py-2 mb-8">
                  <span className="text-xs font-semibold text-green-500 tracking-widest uppercase">
                    Próximo Passo
                  </span>
                </div>
                <h3 className="text-5xl md:text-6xl font-black text-white mb-6 leading-tight">
                  Vamos criar seu próximo
                  <span className="block text-green-500">caso de sucesso</span>
                </h3>
              </motion.div>

              <motion.p
                className="text-white/70 text-lg max-w-3xl mx-auto mb-10 leading-relaxed"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
                viewport={{ once: true }}
              >
                Transformamos visões em soluções extraordinárias. Veja como podemos fazer isso pelo seu negócio.
              </motion.p>

              {/* CTA Buttons */}
              <motion.div
                className="flex flex-col sm:flex-row gap-4 justify-center items-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                viewport={{ once: true }}
              >
                <motion.a
                  href="#contact"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 rounded-full bg-green-500 text-black font-black uppercase tracking-wider hover:bg-green-400 transition-all duration-300 shadow-[0_0_25px_rgba(0,255,65,0.5)] hover:shadow-[0_0_40px_rgba(0,255,65,0.7)]"
                >
                  Solicitar Orçamento
                </motion.a>
              </motion.div>
            </div>

            {/* Corner Decorations */}
            <motion.div className="absolute top-0 left-0 w-32 h-32 border-t border-l border-green-500/20 rounded-br-3xl" />
            <motion.div className="absolute bottom-0 right-0 w-32 h-32 border-b border-r border-green-500/20 rounded-tl-3xl" />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Portfolio;
