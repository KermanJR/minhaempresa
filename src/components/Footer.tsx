import { Github, Linkedin, Twitter, Mail } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: Github, href: "#", label: "GitHub" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Mail, href: "mailto:kermanpereira@gmail.com", label: "Email" },
  ];

  return (
    <footer className="bg-black border-t border-green-500/30">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-green-500 border-2 border-green-600 rounded-lg flex items-center justify-center text-white text-xs font-bold">
                CV
              </div>
              <h3 className="text-2xl font-bold text-green-500">CodeVision</h3>
            </div>
            <p className="text-white text-sm">
              Agência de software especializada em transformação digital e soluções que geram impacto real no negócio.
            </p>
          </div>

          <div>
            <h4 className="text-sm font-bold text-green-500 mb-4 uppercase tracking-wider">Links</h4>
            <ul className="space-y-2">
              {["Início", "Sobre", "Portfólio", "Serviços", "Contato"].map((item) => (
                <li key={item}>
                  <a
                    href={`#${item.toLowerCase()}`}
                    className="text-white hover:text-green-500 transition-colors text-sm"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-bold text-green-500 mb-4 uppercase tracking-wider">Conecte-se</h4>
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="w-9 h-9 rounded-lg border border-green-500/30 flex items-center justify-center hover:border-green-500 hover:bg-green-500/10 transition-all"
                >
                  <social.icon className="w-4 h-4 text-green-700" />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-green-500/20 text-center text-white text-xs uppercase tracking-wider">
          <p>© {currentYear} CodeVision. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
