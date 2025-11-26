import { useState } from "react";
import { ExternalLink, ArrowUpRight, Star, Users, Target, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const Portfolio = () => {
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
      color: "from-pink-500 to-rose-500",
      icon: Target,
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
      color: "from-yellow-500 to-orange-500",
      icon: Zap,
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
      color: "from-blue-600 to-blue-400",
      icon: Users,
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
      color: "from-amber-500 to-yellow-500",
      icon: Zap,
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
      color: "from-purple-600 to-indigo-600",
      icon: Target,
    },
  ];

  const filteredProjects =
    activeCategory === "Todos"
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  return (
    <section id="portfolio" className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/4 left-0 w-96 h-96 bg-primary rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-secondary rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-effect mb-6">
           
            <span className="text-sm font-medium text-primary">Projetos em Produção</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Nossos <span className="gradient-text">Projetos</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Soluções web de alto padrão que transformam negócios através da tecnologia e inovação digital
          </p>
        </motion.div>

        {/* Category Filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
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

        {/* Projects Grid - Large Interactive Cards */}
        <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto mb-20">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group cursor-pointer"
            >
              <div className="relative overflow-hidden rounded-3xl aspect-[4/5] lg:aspect-video bg-gradient-to-br from-gray-900 to-gray-800 shadow-2xl hover:shadow-primary/20 transition-all duration-500">
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
                    className={`w-fit px-4 py-2 rounded-full backdrop-blur-md bg-white/10 border border-white/20 text-xs font-semibold`}
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
                      <h3 className="text-3xl md:text-4xl font-bold mb-2 leading-tight">
                        {project.title}
                      </h3>
                      <p className="text-white/90 text-sm leading-relaxed max-w-xs">
                        {project.description}
                      </p>
                    </motion.div>

                  
                    
                  </div>
                </div>

                {/* Hover Reveal - Full Details */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileHover={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                  className="absolute inset-0 bg-black/95 backdrop-blur-sm p-8 flex flex-col justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none group-hover:pointer-events-auto"
                >
                  <div className="space-y-4">
                    <h3 className="text-3xl font-bold text-white">{project.title}</h3>
                    
                    <p className="text-white/80 text-sm leading-relaxed">
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

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center mt-20 pt-12 border-t border-primary/10"
        >
          <h3 className="text-2xl font-bold mb-4">Pronto para criar algo extraordinário?</h3>
          <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
            Nos últimos 5 anos, ajudamos mais de 80 empresas a transformarem seus negócios digitalmente.
          </p>
          <Button variant="hero" size="lg" className="group">
            Solicite um Orçamento Gratuito
            <ArrowUpRight className="ml-2 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default Portfolio;
