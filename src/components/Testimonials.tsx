import { Star, Quote } from "lucide-react";
import { motion } from "framer-motion";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Carlos Silva",
      role: "CEO, TechStart",
      company: "TechStart",
      content:
        "O trabalho da CodeVision superou todas as nossas expectativas. O sistema desenvolvido é robusto, intuitivo e aumentou nossa produtividade em 40%. Recomendo fortemente!",
      rating: 5,
      nps: 10,
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Carlos",
    },
    {
      name: "Marina Costa",
      role: "Diretora de Marketing, StyleHub",
      company: "StyleHub",
      content:
        "Nossa loja virtual ficou incrível! O design moderno e a experiência de compra otimizada resultaram em um aumento de 60% nas conversões. Profissionalismo exemplar.",
      rating: 5,
      nps: 10,
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Marina",
    },
    {
      name: "Roberto Almeida",
      role: "Fundador, FitApp",
      company: "FitApp",
      content:
        "Desenvolveu nosso app do zero com qualidade excepcional. A comunicação foi clara em todas as etapas e o prazo foi cumprido rigorosamente. Excelente parceiro!",
      rating: 5,
      nps: 10,
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Roberto",
    },
    {
      name: "Juliana Santos",
      role: "Proprietária, Boutique Elegance",
      company: "Boutique Elegance",
      content:
        "Meu site institucional está perfeito! Além de lindo, é super rápido e fácil de gerenciar. Recebi muitos elogios dos meus clientes. Valeu cada centavo investido.",
      rating: 5,
      nps: 9,
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Juliana",
    },
    {
      name: "Paulo Mendes",
      role: "CTO, DataFlow",
      company: "DataFlow",
      content:
        "A landing page desenvolvida teve impacto imediato em nossa captação de leads. Design impecável, performance excelente e otimização de conversão no ponto. Top!",
      rating: 5,
      nps: 10,
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Paulo",
    },
  ];

  return (
    <section className="py-24 bg-black">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-green-500">
            O Que Dizem Nossos <span className="text-primary">Clientes</span>
          </h2>
          <p className="text-white text-lg max-w-2xl mx-auto">
            Depoimentos reais de clientes satisfeitos com os resultados
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-5xl mx-auto"
        >
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent>
              {testimonials.map((testimonial, index) => (
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/2">
                  <div className="p-4 h-full">
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      whileHover={{ y: -8, boxShadow: "0 20px 50px rgba(var(--primary), 0.2)" }}
                      className="glass-effect p-8 rounded-xl h-full flex flex-col hover:border-primary/60 transition-all group cursor-pointer relative overflow-hidden"
                    >
                      {/* Background Glow on Hover */}
                      <motion.div
                        initial={{ opacity: 0 }}
                        whileHover={{ opacity: 1 }}
                        className="absolute inset-0 bg-primary/8 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none rounded-xl"
                      />

                      {/* Content */}
                      <div className="relative z-10">
                        <motion.div
                          whileHover={{ scale: 1.2 }}
                          className="mb-4"
                        >
                          <Quote className="text-primary w-10 h-10 opacity-50 group-hover:opacity-100 transition-opacity" />
                        </motion.div>

                        <motion.p
                          initial={{ opacity: 0.8 }}
                          whileHover={{ opacity: 1 }}
                          className="text-white mb-6 flex-grow leading-relaxed group-hover:text-green-500 transition-colors text-sm md:text-base"
                        >
                          "{testimonial.content}"
                        </motion.p>

                        <motion.div
                          initial={{ opacity: 0 }}
                          whileInView={{ opacity: 1 }}
                          className="mb-4 pb-4 border-b border-primary/10"
                        >
                          <div className="flex items-center gap-4">
                            <motion.img
                              whileHover={{ scale: 1.1 }}
                              src={testimonial.avatar}
                              alt={testimonial.name}
                              className="w-14 h-14 rounded-full border-2 border-primary/50 object-cover"
                            />
                            <div className="flex-1">
                              <div className="font-bold text-white group-hover:text-green-500 transition-colors">
                                {testimonial.name}
                              </div>
                              <div className="text-xs text-white">
                                {testimonial.company}
                              </div>
                            </div>
                          </div>
                        </motion.div>

                        <div className="flex justify-between items-center">
                          <motion.div
                            className="flex gap-1"
                            variants={{
                              hidden: { opacity: 0 },
                              visible: {
                                opacity: 1,
                                transition: {
                                  staggerChildren: 0.1,
                                },
                              },
                            }}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                          >
                            {[...Array(testimonial.rating)].map((_, i) => (
                              <motion.div
                                key={i}
                                variants={{
                                  hidden: { opacity: 0, scale: 0 },
                                  visible: { opacity: 1, scale: 1 },
                                }}
                                whileHover={{ scale: 1.2 }}
                              >
                                <Star className="w-4 h-4 fill-primary text-primary" />
                              </motion.div>
                            ))}
                          </motion.div>

                          <motion.div
                            whileHover={{ scale: 1.1, backgroundColor: "rgba(var(--primary), 0.2)" }}
                            className="flex items-center gap-2 bg-primary/10 px-3 py-1 rounded-lg transition-colors group-hover:bg-primary/20"
                          >
                            <span className="text-xs font-semibold text-primary">NPS</span>
                            <span className="font-bold text-primary">{testimonial.nps}</span>
                          </motion.div>
                        </div>
                      </div>
                    </motion.div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden md:flex" />
            <CarouselNext className="hidden md:flex" />
          </Carousel>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;
