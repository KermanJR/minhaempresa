import { useState } from "react";
import { ExternalLink, ArrowUpRight, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const PortfolioShowcase = () => {
  // Mostrar apenas os 3 primeiros projetos na página inicial
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
    },
    {
      title: "BraSOL Engenharia",
      category: "Sites",
      description: "Empresa de energia solar. Soluções para residências, indústrias e propriedades rurais.",
      longDescription: "Portal corporativo com showcase de projetos, sistema de orçamento automático, integração com WhatsApp e área administrativa de leads.",
      image: "/brasol.png",
      tags: ["Solar", "Engenharia", "Sustentabilidade"],
      link: "https://brasolengenharia.com.br/",
      stats: {
        projects: "Completo",
        clients: "Múltiplos",
        experience: "Profissional"
      },
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
    },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="portfolio" className="py-24 relative overflow-hidden bg-black">
      {/* Background */}
      <div className="absolute inset-0 opacity-5">
          <div className="absolute top-1/4 left-0 w-96 h-96 bg-green-500 rounded-full blur-3xl" />
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
            <span className="text-sm font-medium text-primary">Trabalhos em Destaque</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-green-500">
            Nossos <span className="text-primary">Projetos</span>
          </h2>
          <p className="text-white text-lg max-w-2xl mx-auto">
            Soluções web de alto padrão que transformam negócios através da tecnologia e inovação digital
          </p>
        </motion.div>

        {/* Projects Grid - 3 Featured Projects */}
        <div className="grid lg:grid-cols-1 gap-8 max-w-6xl mx-auto mb-20">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group cursor-pointer"
            >
              <div className="relative overflow-hidden rounded-3xl aspect-video bg-black/60 shadow-2xl hover:shadow-green-500/20 transition-all duration-500">
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
                      <Button className="bg-green-500 text-white border-green-500 hover:bg-green-600 w-fit px-4 py-2 rounded-full backdrop-blur-md text-xs font-semibold">
                        {project.category}
                      </Button>
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
                      <Button variant="hero" className="bg-green-500 text-white border-green-500 hover:bg-green-600">
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

        {/* View All CTA */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center mt-16 pt-12 border-t border-primary/10"
        >
          <h3 className="text-2xl font-bold mb-4 text-green-500">Quer ver mais projetos?</h3>
          <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
            Temos mais 2 projetos que podemos mostrar. Clique abaixo para ver nosso portfólio completo.
          </p>
          <Button variant="hero" size="lg" className="group" asChild>
            <a href="/portfolio">
              Ver Portfólio Completo
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
            </a>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default PortfolioShowcase;
