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
      content:
        "O trabalho do Kerman superou todas as nossas expectativas. O sistema desenvolvido é robusto, intuitivo e aumentou nossa produtividade em 40%. Recomendo fortemente!",
      rating: 5,
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Carlos",
    },
    {
      name: "Marina Costa",
      role: "Diretora de Marketing, StyleHub",
      content:
        "Nossa loja virtual ficou incrível! O design moderno e a experiência de compra otimizada resultaram em um aumento de 60% nas conversões. Profissionalismo exemplar.",
      rating: 5,
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Marina",
    },
    {
      name: "Roberto Almeida",
      role: "Fundador, FitApp",
      content:
        "Desenvolveu nosso app do zero com qualidade excepcional. A comunicação foi clara em todas as etapas e o prazo foi cumprido rigorosamente. Excelente parceiro!",
      rating: 5,
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Roberto",
    },
    {
      name: "Juliana Santos",
      role: "Proprietária, Boutique Elegance",
      content:
        "Meu site institucional está perfeito! Além de lindo, é super rápido e fácil de gerenciar. Recebi muitos elogios dos meus clientes. Valeu cada centavo investido.",
      rating: 5,
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Juliana",
    },
    {
      name: "Paulo Mendes",
      role: "CTO, DataFlow",
      content:
        "A landing page desenvolvida teve impacto imediato em nossa captação de leads. Design impecável, performance excelente e otimização de conversão no ponto. Top!",
      rating: 5,
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Paulo",
    },
  ];

  return (
    <section className="py-24 bg-card/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            O Que Dizem Nossos <span className="gradient-text">Clientes</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
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
                    <div className="glass-effect p-8 rounded-xl h-full flex flex-col hover:border-primary/60 transition-all">
                      <Quote className="text-primary w-10 h-10 mb-4 opacity-50" />
                      <p className="text-foreground/90 mb-6 flex-grow leading-relaxed">
                        "{testimonial.content}"
                      </p>
                      <div className="flex items-center gap-4 mb-4">
                        <img
                          src={testimonial.avatar}
                          alt={testimonial.name}
                          className="w-14 h-14 rounded-full border-2 border-primary/50"
                        />
                        <div>
                          <div className="font-bold text-foreground">
                            {testimonial.name}
                          </div>
                          <div className="text-sm text-muted-foreground">
                            {testimonial.role}
                          </div>
                        </div>
                      </div>
                      <div className="flex gap-1">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star
                            key={i}
                            className="w-5 h-5 fill-primary text-primary"
                          />
                        ))}
                      </div>
                    </div>
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
