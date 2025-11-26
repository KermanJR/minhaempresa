import { useState } from "react";
import { ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const Portfolio = () => {
  const categories = ["Todos", "Sites", "Sistemas", "Landing Pages", "Apps", "E-commerce"];
  const [activeCategory, setActiveCategory] = useState("Todos");

  const projects = [
    {
      title: "Clan Color",
      category: "E-commerce",
      description: "Plataforma de fotos em Polaroid com clube de assinatura mensal. Serviço inovador que revive momentos especiais.",
      image: "../../public/clan-color.png",
      tags: ["E-commerce", "Fotos", "Assinatura"],
      link: "https://clancolor.com.br/",
    },
    {
      title: "BraSOL Engenharia",
      category: "Sites",
      description: "Empresa de energia solar com mais de 9 anos de experiência e 500+ projetos executados. Soluções para residências, indústrias e propriedades rurais",
      image: "../../public/brasol.png",
      tags: ["Solar", "Engenharia", "Sustentabilidade"],
      link: "https://brasolengenharia.com.br/",
    },
    
    {
      title: "SINDJUFE-MS",
      category: "Sites",
      description: "Sindicato dos Juízes Federais do Mato Grosso do Sul. Portal com notícias, convênios, artigos e gestão de conteúdo.",
      image: "../../public/sindjufe.png",
      tags: ["Sindicato", "Portal", "CMS"],
      link: "https://sindjufems.org.br/",
    },
    {
      title: "Solarcia",
      category: "Sites",
      description: "Empresa de soluções completas em energia solar com sistema de orçamento automatizado e contato direto.",
      image: "../../public/solarcia.png",
      tags: ["Solar", "Orçamento", "Contato"],
      link: "https://solarcia.com.br/",
    },
 
    {
      title: "Dandrade Assessoria em Precatórios",
      category: "Sistemas",
      description: "Conjunto de projetos web que demonstram expertise em desenvolvimento full-stack com foco em user experience e inovação",
      image: "../../public/dandrade.png",
      tags: ["TypeScript", "React", "Node.js"],
      link: "https://dandrade.com.br/",
    },
   
  ];

  const filteredProjects =
    activeCategory === "Todos"
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  return (
    <section id="portfolio" className="py-24 bg-card/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
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
          className="flex flex-wrap justify-center gap-3 mb-12"
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
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="glass-effect rounded-xl overflow-hidden group hover:border-primary/60 transition-all"
            >
              <div className="relative overflow-hidden aspect-video">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center gap-4 pb-6">
                  <a href={project.link} target="_blank" rel="noopener noreferrer">
                    <Button variant="hero" size="sm">
                      <ExternalLink className="w-4 h-4" />
                    </Button>
                  </a>
                </div>
              </div>
              <div className="p-6">
                <div className="text-xs text-primary font-semibold mb-2 uppercase tracking-wider">
                  {project.category}
                </div>
                <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs px-3 py-1 bg-primary/10 text-primary rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
