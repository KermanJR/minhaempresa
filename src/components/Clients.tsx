import { motion } from "framer-motion";

const Clients = () => {
  const clients = [
    { name: "Clan Color", logo: "/clan-color.png" },
    { name: "BraSOL", logo: "/brasol.png" },
    { name: "SINDJUFE-MS", logo: "/sindjufe.png" },
    { name: "Solarcia", logo: "/solarcia.png" },
    { name: "Dandrade", logo: "/dandrade.png" },
    { name: "Nest Rental", logo: "/nestrental.png" },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section className="py-20 relative overflow-hidden bg-black">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-green-500">
            Empresas que <span className="text-primary">Confiam em Nós</span>
          </h2>
          <p className="text-white text-lg max-w-2xl mx-auto">
            Mais de 80+ clientes em diferentes setores escolhem CodeVision para suas soluções digitais
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 items-center justify-items-center"
        >
          {clients.map((client, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -8, scale: 1.08 }}
              className="glass-effect p-6 rounded-xl border border-primary/20 hover:border-primary/60 transition-all w-full h-24 flex items-center justify-center group hover:shadow-lg hover:shadow-primary/10 cursor-pointer relative overflow-hidden"
            >
              {/* Background Glow */}
              <motion.div
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
                className="absolute inset-0 bg-primary/8 opacity-0 group-hover:opacity-100 transition-opacity rounded-xl"
              />

              <motion.img
                src={client.logo}
                alt={client.name}
                whileHover={{ scale: 1.15 }}
                className="max-w-24 max-h-16 object-contain filter group-hover:brightness-125 transition-all relative z-10"
              />

              {/* Border Glow */}
              <motion.div
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
                className="absolute inset-0 rounded-xl border border-primary/30 pointer-events-none group-hover:border-primary/60 transition-colors"
              />
            </motion.div>
          ))}
        </motion.div>

        {/* Trust Indicators */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-20 grid md:grid-cols-3 gap-8 max-w-4xl mx-auto"
        >
          <div className="text-center">
            <div className="text-3xl font-bold text-primary mb-2">+200</div>
            <p className="text-sm text-white">Clientes Satisfeitos</p>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-primary mb-2">+500</div>
            <p className="text-sm text-white">Funcionalidades Desenvolvidas</p>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-primary mb-2">98%</div>
            <p className="text-sm text-white">Taxa de Satisfação NPS</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Clients;
