import { Github, Linkedin, Twitter, Mail, Heart } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: Github, href: "#", label: "GitHub" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Mail, href: "mailto:kerman@exemplo.com", label: "Email" },
  ];

  return (
    <footer className="bg-card/50 border-t border-border/50">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center text-white font-bold">
                CV
              </div>
              <h3 className="text-2xl font-bold gradient-text">CodeVision</h3>
            </div>
            <p className="text-muted-foreground">
              Agência especializada em transformar negócios através de soluções digitais 
              inovadoras e resultados mensuráveis.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Links Rápidos</h4>
            <ul className="space-y-2">
              {["Início", "Sobre", "Portfólio", "Serviços", "Contato"].map((item) => (
                <li key={item}>
                  <a
                    href={`#${item.toLowerCase()}`}
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Conecte-se</h4>
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 rounded-lg glass-effect flex items-center justify-center hover:border-primary/60 transition-all hover:scale-110"
                >
                  <social.icon className="w-5 h-5 text-primary" />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-border/50 text-center text-muted-foreground">
          <p className="flex items-center justify-center gap-2">
            © {currentYear} CodeVision.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
