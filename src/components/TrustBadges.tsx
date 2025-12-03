import { motion } from "framer-motion";
import { Shield, Award, Zap, Code, Users, TrendingUp } from "lucide-react";

const TrustBadges = () => {
  const badges = [
    {
      icon: Shield,
      title: "Segurança Premium",
      description: "Certificações de segurança e compliance",
      badges: ["ISO 27001", "GDPR", "LGPD"],
      color: "from-blue-500/20 to-transparent",
      borderColor: "border-blue-500/30",
    },
    {
      icon: Award,
      title: "Prêmios & Reconhecimento",
      description: "Destaque no mercado de tecnologia",
      badges: ["Top 10 Agências", "Best Dev Team", "Innovation Award"],
      color: "from-purple-500/20 to-transparent",
      borderColor: "border-purple-500/30",
    },
    {
      icon: Code,
      title: "Tecnologia Validada",
      description: "Parcerias com líderes de mercado",
      badges: ["Google Cloud Partner", "AWS Partner", "React Certified"],
      color: "from-green-500/20 to-transparent",
      borderColor: "border-green-500/30",
    },
  ];

  const metrics = [
    { label: "Projetos em Produção", value: "150+" },
    { label: "Uptime Médio", value: "99.9%" },
    { label: "Clientes Ativos", value: "80+" },
    { label: "Satisfação", value: "9.5/10" },
  ];

  return (
    <section >
      
    </section>
  );
};

export default TrustBadges;
