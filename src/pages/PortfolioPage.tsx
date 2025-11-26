import { useState } from "react";
import { ExternalLink, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const PortfolioPage = () => {
  const categories = ["Todos", "Sites", "Sistemas", "E-commerce"];
  const [activeCategory, setActiveCategory] = useState("Todos");

  const projects = [
    {
      title: "Clan Color",
      category: "E-commerce",
      description: "Plataforma de fotos em Polaroid com clube de assinatura mensal. Serviço inovador que revive momentos especiais.",
      longDescription: "Desenvolvemos uma plataforma e-commerce completa com integração de pagamentos, gestão de assinaturas recorrentes, sistema de fotografia polaroid e clube de fidelização.",
      image: "/clan-color.png",
      tags: ["E-commerce", "Fotos", "Assinatura"],
      link: "https://clancolor.com.br/",
      stats: {
        users: "500+",
        conversion: "12%",
        growth: "45%"
      },
      color: "bg-green-500",
      icon: "Target",
    },
    {
      title: "BraSOL Engenharia",
      category: "Sites",
      description: "Empresa de energia solar com mais de 9 anos de experiência e 500+ projetos executados. Soluções para residências, indústrias e propriedades rurais.",
      longDescription: "Portal corporativo com showcase de projetos, sistema de orçamento automático, integração com WhatsApp e área administrativa de leads. +9 anos no mercado, 500+ clientes satisfeitos.",
      image: "/brasol.png",
      tags: ["Solar", "Engenharia", "Sustentabilidade"],
      link: "https://brasolengenharia.com.br/",
      stats: {
        projects: "500+",
        clients: "1000+",
        experience: "9 anos"
      },
      color: "bg-green-500",
      icon: "Zap",
    },
    {
      title: "SINDJUFE-MS",
      category: "Sites",
      description: "Sindicato dos Juízes Federais do Mato Grosso do Sul. Portal com notícias, convênios, artigos e gestão de conteúdo.",
      longDescription: "Portal corporativo completo com CMS integrado, gestão de notícias, seção de convênios, área administrativa e newsletter automática para comunicação com membros.",
      image: "/sindjufe.png",
      tags: ["Sindicato", "Portal", "CMS"],
      link: "https://sindjufems.org.br/",
      stats: {
        members: "5000+",
        articles: "300+",
        uptime: "99.9%"
      },
      color: "bg-green-500",
      icon: "Users",
    },
    {
      title: "Solarcia",
      category: "Sites",
      description: "Empresa de soluções completas em energia solar com sistema de orçamento automatizado e contato direto.",
      longDescription: "Website responsivo com formulário de orçamento inteligente, integração com APIs de cotação de energia solar, chat ao vivo e sistema de CRM integrado.",
      image: "/solarcia.png",
      tags: ["Solar", "Orçamento", "Contato"],
      link: "https://solarcia.com.br/",
      stats: {
        leads: "200+",
        avgTime: "2.3s",
        rating: "4.9★"
      },
      color: "bg-green-500",
      icon: "Zap",
    },
    {
      title: "Dandrade Assessoria em Precatórios",
      category: "Sistemas",
      description: "Sistema especializado em gestão de precatórios com análise de dados e relatórios automáticos.",
      longDescription: "Sistema web enterprise para gestão de precatórios com dashboard analítico, processamento de dados em batch, relatórios customizáveis e API para integrações.",
      image: "/dandrade.png",
      tags: ["TypeScript", "React", "Node.js"],
      link: "https://dandrade.com.br/",
      stats: {
        cases: "150+",
        accuracy: "99.8%",
        processing: "1M+ registros"
      },
      color: "bg-green-500",
      icon: "Target",
    },
  ];

  const filteredProjects =
    activeCategory === "Todos"
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-40 pb-20 px-4 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-secondary rounded-full blur-3xl" />
        </div>

        <div className="container mx-auto max-w-6xl relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-green-500">
              Portfólio <span className="text-primary">Completo</span>
            </h1>
            <p className="text-white text-lg max-w-2xl mx-auto">
              Conheça todos os projetos que desenvolvemos e transformamos em sucesso digital
            </p>
          </motion.div>

          {/* Category Filters */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="flex flex-wrap justify-center gap-3 mb-16"
          >
            {categories.map((category) => (
              <Button
                key={category}
                variant={activeCategory === category ? "default" : "glass"}
                onClick={() => setActiveCategory(category)}
                className="transition-all"
              >
                {category}
              </Button>
            ))}
          </motion.div>

          {/* Projects Grid */}
          <div className="grid lg:grid-cols-2 gap-8">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group cursor-pointer"
              >
                <div className="relative overflow-hidden rounded-3xl aspect-[4/5] lg:aspect-video bg-black/60 shadow-2xl hover:shadow-green-500/20 transition-all duration-500">
                  {/* Background Image */}
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />

                  {/* Overlay Gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-60 group-hover:opacity-75 transition-opacity duration-500" />

                  {/* Content Container */}
                  <div className="absolute inset-0 flex flex-col justify-between p-8 text-white">
                    {/* Top Badge */}
                    <motion.div
                      initial={{ opacity: 0, y: -20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 + 0.2 }}
                      className={`w-fit px-4 py-2 rounded-full backdrop-blur-md bg-green-50 border border-green-500 text-xs font-semibold text-green-700`}
                    >
                      {project.category}
                    </motion.div>

                    {/* Bottom Content */}
                    <div className="space-y-4">
                      {/* Title and Description */}
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 + 0.3 }}
                        className="transform group-hover:translate-y-0 transition-transform duration-500"
                      >
                        <h3 className="text-3xl md:text-4xl font-bold mb-2 leading-tight text-green-500">
                          {project.title}
                        </h3>
                        <p className="text-white text-sm leading-relaxed max-w-xs">
                          {project.description}
                        </p>
                      </motion.div>

                      {/* Stats Grid */}
                      <div className="grid grid-cols-3 gap-3 pt-4 mt-4 border-t border-white/10">
                        {Object.entries(project.stats).map(([key, value], idx) => (
                          <motion.div
                            key={key}
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ delay: index * 0.1 + 0.4 + idx * 0.05 }}
                            className="text-center"
                          >
                            <div className="text-lg font-bold text-primary/90">{value}</div>
                            <div className="text-xs text-white capitalize">{key}</div>
                          </motion.div>
                        ))}
                      </div>

                      {/* CTA */}
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block mt-6"
                      >
                        <Button variant="hero" className="group/btn">
                          Visitar Projeto
                          <ArrowUpRight className="ml-2 w-4 h-4 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" />
                        </Button>
                      </a>
                    </div>
                  </div>

                  {/* Hover Reveal - Full Details */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileHover={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                    className="absolute inset-0 bg-black/80 backdrop-blur-sm p-8 flex flex-col justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none group-hover:pointer-events-auto"
                  >
                    <div className="space-y-4">
                      <h3 className="text-3xl font-bold text-green-500">{project.title}</h3>

                      <p className="text-white text-sm leading-relaxed">
                        {project.longDescription}
                      </p>

                      {/* Tags */}
                      <div className="flex flex-wrap gap-2">
                        {project.tags.map((tag) => (
                          <span
                            key={tag}
                            className="px-3 py-1 bg-primary/20 text-primary text-xs font-medium rounded-full border border-primary/40"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>

                      {/* CTA */}
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block mt-4"
                      >
                        <Button variant="hero" className="group/btn">
                          Visitar Projeto
                          <ArrowUpRight className="ml-2 w-4 h-4 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" />
                        </Button>
                      </a>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default PortfolioPage;
