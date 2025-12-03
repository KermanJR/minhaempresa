import { useState } from "react";
import { Star, TrendingUp, Users, Target, X, ExternalLink } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const Portfolio = () => {
  const [selectedCategory, setSelectedCategory] = useState("Todos");
  const [selectedProject, setSelectedProject] = useState<number | null>(null);

  const projects = [
    {
      title: "Clan Color",
      category: "E-commerce",
      description: "App com 10K+ downloads e 5K+ usuários ativos em menos de um ano.",
      fullDescription: "Desenvolvemos um aplicativo e-commerce completo para a Clan Color, transformando sua presença digital com catálogo inteligente, sistema de pagamento robusto e integração logística.",
      clientName: "Sofia Garcia",
      clientRole: "CEO",
      clientCompany: "Clan Color",
      testimonial: "A equipe demonstrou grande dedicação e entusiasmo desde o início do projeto.",
      nps: "10",
      image: "/clan-color.png",
      link: "https://clancolor.com.br/",
      color: "from-pink-500 to-rose-500",
      metrics: [
        { icon: TrendingUp, label: "Downloads", value: "10K+" },
        { icon: Users, label: "Usuários Ativos", value: "5K+" },
        { icon: Target, label: "Conversão", value: "+150%" },
      ],
    },
    {
      title: "BraSOL Engenharia",
      category: "Sites",
      description: "500+ leads qualificados por mês com conversão +300%.",
      fullDescription: "Site institucional de alta performance com geração de leads automatizada, calculadora de economia e integração CRM para energia solar.",
      clientName: "Carlos Santos",
      clientRole: "Diretor",
      clientCompany: "BraSOL",
      testimonial: "O resultado superou nossas expectativas. Aumentou nossa conversão em 300%.",
      nps: "10",
      image: "/brasol.png",
      link: "https://brasolengenharia.com.br/",
      color: "from-yellow-500 to-orange-500",
      metrics: [
        { icon: Target, label: "Leads/Mês", value: "500+" },
        { icon: TrendingUp, label: "Conversão", value: "+300%" },
        { icon: Users, label: "Visitantes", value: "50K/mês" },
      ],
    },
    {
      title: "SINDJUFE-MS",
      category: "Sites",
      description: "Portal corporativo para 5K+ membros com engajamento +250%.",
      fullDescription: "Portal institucional com sistema de gestão de associados, área de membros protegida, calendário de eventos e comunicação integrada.",
      clientName: "Juíz Fernando",
      clientRole: "Presidente",
      clientCompany: "SINDJUFE-MS",
      testimonial: "Melhorou significativamente a comunicação com nossos associados.",
      nps: "9",
      image: "/sindjufe.png",
      link: "https://sindjufems.org.br/",
      color: "from-blue-500 to-indigo-500",
      metrics: [
        { icon: Users, label: "Membros Ativos", value: "5K+" },
        { icon: TrendingUp, label: "Engajamento", value: "+250%" },
        { icon: Target, label: "Satisfação", value: "NPS 9" },
      ],
    },
    {
      title: "Solarcia",
      category: "Sites",
      description: "Plataforma SaaS com +180% de vendas em tempo real.",
      fullDescription: "Plataforma SaaS com orçamento automático, simulador 3D, integração bancária para financiamento e dashboard de acompanhamento.",
      clientName: "Marina Costa",
      clientRole: "Sócia",
      clientCompany: "Solarcia",
      testimonial: "Aumentamos nossas vendas em 180% desde o lançamento do novo site.",
      nps: "10",
      image: "/solarcia.png",
      link: "https://solarcia.com.br/",
      color: "from-green-500 to-emerald-500",
      metrics: [
        { icon: TrendingUp, label: "Vendas", value: "+180%" },
        { icon: Target, label: "Orçamentos/Mês", value: "2K+" },
        { icon: Users, label: "Clientes", value: "1K+" },
      ],
    },
    {
      title: "Dandrade Assessoria",
      category: "Sistemas",
      description: "ERP especializado com +70% de produtividade.",
      fullDescription: "ERP para gestão de precatórios com processamento inteligente, automação de cálculos legais e relatórios em tempo real.",
      clientName: "Dr. Dandrade",
      clientRole: "Fundador",
      clientCompany: "Dandrade",
      testimonial: "O sistema transformou completamente nossa operação.",
      nps: "10",
      image: "/dandrade.png",
      link: "https://dandrade.com.br/",
      color: "from-purple-500 to-violet-500",
      metrics: [
        { icon: TrendingUp, label: "Produtividade", value: "+70%" },
        { icon: Target, label: "Processamento", value: "-70% tempo" },
        { icon: Users, label: "Usuários", value: "500+" },
      ],
    },
    {
      title: "Nest Rental",
      category: "Sistemas",
      description: "Marketplace B2B com receita +300% em 6 meses.",
      fullDescription: "Marketplace completo com sistema de reservas, pagamento fracionado, seguro integrado e logística gerenciada.",
      clientName: "Lucas Oliveira",
      clientRole: "Founder",
      clientCompany: "Nest Rental",
      testimonial: "Triplicamos nosso volume de negócios em 6 meses.",
      nps: "10",
      image: "/nestrental.png",
      link: "https://nestrental.com.br/",
      color: "from-cyan-500 to-blue-500",
      metrics: [
        { icon: TrendingUp, label: "Receita", value: "+300%" },
        { icon: Target, label: "Transações/Mês", value: "5K+" },
        { icon: Users, label: "Usuários", value: "10K+" },
      ],
    },
    {
      title: "Simasul Siderurgia",
      category: "Sites",
      description: "Portal industrial gerando 300+ leads por mês.",
      fullDescription: "Portal corporativo com catálogo de produtos, especificações técnicas, sistema de orçamento e CRM integrado.",
      clientName: "Gerente Geral",
      clientRole: "Gerente",
      clientCompany: "Simasul",
      testimonial: "Melhorou nossa presença no mercado significativamente.",
      nps: "9",
      image: "/simasul.png",
      link: "https://simasul.com.br/",
      color: "from-slate-500 to-gray-500",
      metrics: [
        { icon: Target, label: "Leads/Mês", value: "300+" },
        { icon: Users, label: "Visitantes/Mês", value: "30K" },
        { icon: TrendingUp, label: "Crescimento", value: "+150%" },
      ],
    },
    {
      title: "Rocket Suprimentos",
      category: "E-commerce",
      description: "E-commerce com +200% de vendas online.",
      fullDescription: "E-commerce com integração de estoque em tempo real, gerador de orçamentos dinâmicos e sistema logístico de entrega expressa.",
      clientName: "Diretor Comercial",
      clientRole: "Diretor",
      clientCompany: "Rocket Suprimentos",
      testimonial: "Aumentou significativamente nossas vendas online.",
      nps: "10",
      image: "/rocket.png",
      link: "https://rocketsuprimentos.com.br/",
      color: "from-red-500 to-orange-500",
      metrics: [
        { icon: TrendingUp, label: "Vendas", value: "+200%" },
        { icon: Target, label: "Pedidos/Mês", value: "800+" },
        { icon: Users, label: "Clientes", value: "2K+" },
      ],
    },
  ];

  const categories = ["Todos", "E-commerce", "Sites", "Sistemas"];

  const filteredProjects = selectedCategory === "Todos" 
    ? projects 
    : projects.filter(p => p.category === selectedCategory);

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
          className="text-center mb-12"
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
          <h2 className="text-5xl md:text-6xl font-black text-white mb-4">
            Soluções que transformam negócios
          </h2>
          <p className="text-white/60 text-lg font-light max-w-2xl mx-auto">
            Veja como ajudamos empresas a crescer com tecnologia de ponta
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          className="flex flex-wrap gap-3 justify-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
        >
          {categories.map((category) => (
            <motion.button
              key={category}
              onClick={() => setSelectedCategory(category)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                selectedCategory === category
                  ? "bg-green-500 text-black shadow-[0_0_25px_rgba(0,255,65,0.5)]"
                  : "border border-white/20 text-white hover:border-green-500/50 hover:text-green-500"
              }`}
            >
              {category}
            </motion.button>
          ))}
        </motion.div>

        {/* Portfolio Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
          <AnimatePresence mode="wait">
            {filteredProjects.map((project, idx) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                onClick={() => setSelectedProject(idx)}
                className="group cursor-pointer"
              >
                <div className="relative h-full rounded-2xl overflow-hidden border border-white/10 hover:border-green-500/50 transition-all duration-300 bg-black/40 hover:bg-black/60 flex flex-col">
                  {/* Image */}
                  <div className="relative h-48 overflow-hidden bg-gradient-to-br from-white/5 to-transparent">
                    <motion.img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    
                    {/* Category Badge */}
                    <div className="absolute top-4 right-4">
                      <span className={`inline-block bg-gradient-to-r ${project.color} text-white px-3 py-1 rounded-full text-xs font-bold`}>
                        {project.category}
                      </span>
                    </div>

                    {/* Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                      <p className="text-green-500 font-black text-sm">Clique para ver detalhes</p>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6 space-y-4 flex-1 flex flex-col">
                    {/* Title */}
                    <h3 className="text-xl font-black text-white group-hover:text-green-500 transition-colors">
                      {project.title}
                    </h3>

                    {/* Short Description */}
                    <p className="text-sm text-white/60 line-clamp-2 leading-relaxed">
                      {project.description}
                    </p>

                    {/* Metrics Preview */}
                    <div className="space-y-2 pt-2 border-t border-white/10 flex-1">
                      {project.metrics.slice(0, 2).map((metric, mIdx) => {
                        const Icon = metric.icon;
                        return (
                          <div key={mIdx} className="flex items-center gap-2">
                            <Icon className="w-4 h-4 text-green-500 flex-shrink-0" />
                            <span className="text-xs text-white/70">
                              <span className="font-black text-green-500">{metric.value}</span> {metric.label}
                            </span>
                          </div>
                        );
                      })}
                    </div>

                    {/* NPS Stars */}
                    <div className="flex items-center gap-2 pt-2">
                      <div className="flex gap-1">
                        {[...Array(Math.min(5, parseInt(project.nps)))].map((_, i) => (
                          <Star key={i} className="w-3 h-3 fill-green-500 text-green-500" />
                        ))}
                      </div>
                      <span className="text-xs text-white/60">NPS {project.nps}</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Modal de Caso de Sucesso */}
        <AnimatePresence>
          {selectedProject !== null && filteredProjects[selectedProject] && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProject(null)}
              className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            >
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                transition={{ type: "spring", damping: 20 }}
                onClick={(e) => e.stopPropagation()}
                className="bg-black border border-green-500/30 rounded-3xl max-w-3xl w-full max-h-[90vh] overflow-y-auto"
              >
                {/* Modal Header */}
                <div className="sticky top-0 bg-black border-b border-green-500/20 px-6 md:px-10 py-6 flex items-start justify-between">
                  <div>
                    <span className={`inline-block bg-gradient-to-r ${filteredProjects[selectedProject].color} text-white px-3 py-1 rounded-full text-xs font-bold mb-3`}>
                      {filteredProjects[selectedProject].category}
                    </span>
                    <h2 className="text-3xl md:text-4xl font-black text-white">
                      {filteredProjects[selectedProject].title}
                    </h2>
                  </div>
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={() => setSelectedProject(null)}
                    className="p-2 hover:bg-white/10 rounded-full transition-colors"
                  >
                    <X className="w-6 h-6 text-white" />
                  </motion.button>
                </div>

                {/* Modal Content */}
                <div className="px-6 md:px-10 py-10 space-y-8">
                  {/* Main Image */}
                  <div className="rounded-2xl overflow-hidden border border-white/10">
                    <img
                      src={filteredProjects[selectedProject].image}
                      alt={filteredProjects[selectedProject].title}
                      className="w-full h-96 object-cover"
                    />
                  </div>

                  {/* Description */}
                  <div>
                    <h3 className="text-xl font-black text-white mb-3">Sobre o Projeto</h3>
                    <p className="text-white/70 leading-relaxed">
                      {filteredProjects[selectedProject].fullDescription}
                    </p>
                  </div>

                  {/* All Metrics */}
                  <div>
                    <h3 className="text-xl font-black text-white mb-4">Resultados</h3>
                    <div className="grid grid-cols-3 gap-4">
                      {filteredProjects[selectedProject].metrics.map((metric, idx) => {
                        const Icon = metric.icon;
                        return (
                          <div key={idx} className="bg-white/5 border border-white/10 rounded-xl p-4 text-center hover:border-green-500/30 transition-colors">
                            <Icon className="w-6 h-6 text-green-500 mx-auto mb-2" />
                            <p className="text-lg font-black text-green-500">{metric.value}</p>
                            <p className="text-xs text-white/60 mt-1">{metric.label}</p>
                          </div>
                        );
                      })}
                    </div>
                  </div>

                  {/* Testimonial */}
                  <div className="bg-gradient-to-r from-green-500/10 to-transparent border border-green-500/20 rounded-2xl p-6">
                    <div className="flex gap-4">
                      <div className="w-12 h-12 rounded-full bg-green-500/20 flex-shrink-0 flex items-center justify-center">
                        <span className="text-green-500 font-black">
                          {filteredProjects[selectedProject].clientName.charAt(0)}
                        </span>
                      </div>
                      <div className="flex-1">
                        <p className="text-white italic mb-3">
                          "{filteredProjects[selectedProject].testimonial}"
                        </p>
                        <div className="flex items-center gap-2">
                          {[...Array(Math.min(5, parseInt(filteredProjects[selectedProject].nps)))].map((_, i) => (
                            <Star key={i} className="w-4 h-4 fill-green-500 text-green-500" />
                          ))}
                          <span className="text-sm font-black text-white ml-2">NPS {filteredProjects[selectedProject].nps}</span>
                        </div>
                        <p className="text-sm text-white/70 mt-2">
                          {filteredProjects[selectedProject].clientName}, {filteredProjects[selectedProject].clientRole} - {filteredProjects[selectedProject].clientCompany}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* CTA Button */}
                  <motion.a
                    href={filteredProjects[selectedProject].link}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-green-500 to-green-600 text-black font-black py-4 rounded-xl hover:shadow-[0_0_30px_rgba(0,255,65,0.5)] transition-all duration-300"
                  >
                    Visitar Projeto
                    <ExternalLink className="w-5 h-5" />
                  </motion.a>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* CTA Section */}
        <motion.div
          className="mt-32 relative"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
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

            <motion.div className="absolute top-0 left-0 w-32 h-32 border-t border-l border-green-500/20 rounded-br-3xl" />
            <motion.div className="absolute bottom-0 right-0 w-32 h-32 border-b border-r border-green-500/20 rounded-tl-3xl" />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Portfolio;
