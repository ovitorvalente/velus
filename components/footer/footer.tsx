"use client";

import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from "lucide-react";
import Link from "next/link";

export function Footer() {
  const footerLinks = [
    {
      title: "Links Úteis",
      links: [
        { label: "Sobre Nós", href: "/sobre" },
        { label: "Serviços", href: "/servicos" },
        { label: "Planos", href: "/planos" },
        { label: "Blog", href: "/blog" },
        { label: "Contato", href: "/contato" },
      ],
    },
    {
      title: "Suporte",
      links: [
        { label: "Central de Ajuda", href: "/ajuda" },
        { label: "Política de Privacidade", href: "/privacidade" },
        { label: "Termos de Uso", href: "/termos" },
        { label: "FAQ", href: "/faq" },
      ],
    },
  ];

  const socialLinks = [
    { icon: <Facebook className="w-5 h-5" />, href: "https://www.instagram.com/grupo.velus/" },
    { icon: <Twitter className="w-5 h-5" />, href: "https://twitter.com" },
    { icon: <Instagram className="w-5 h-5" />, href: "https://instagram.com" },
    { icon: <Linkedin className="w-5 h-5" />, href: "https://linkedin.com" },
  ];

  const contactInfo = [
    {
      icon: <Mail className="w-5 h-5" />, text: "contato.velus@gmail.com", href: "mailto:contato.velus@gmail.com?subject=Assunto do E-mail&body=Corpo do E-mail"
    },
    { icon: <Phone className="w-5 h-5" />, text: "+55 (24) 98870-0151", href: "https://wa.me/24988700151" },
    { icon: <MapPin className="w-5 h-5" />, text: "Barra Mansa - Rio de Janeiro, Brasil", href: "https://www.google.com/maps/place/Barra+Mansa,+RJ/@-22.5449771,-44.1774112,13z/data=!3m1!4b1!4m6!3m5!1s0x9e9bf8d9cfa62b:0x56dbc34364c7ad23!8m2!3d-22.5408519!4d-44.1772604!16zL20vMGY2X2J3?entry=ttu&g_ep=EgoyMDI1MDEyMi4wIKXMDSoASAFQAw%3D%3D" },
  ];

  const plans = [
    { label: "Plano Básico", href: "/planos/basico" },
    { label: "Plano Avançado", href: "/planos/avancado" },
    { label: "Plano Enterprise", href: "/planos/enterprise" },
  ];

  const services = [
    { label: "Social Media Marketing Digital", href: "/servicos/social-media" },
    { label: "Consultoria Estratégica", href: "/servicos/consultoria" },
    { label: "Design Gráfico", href: "/servicos/design" },
    { label: "Tráfego Pago", href: "/servicos/trafego-pago" },
    { label: "Web Design & E-commerce", href: "/servicos/web-design" },
    { label: "Branding & Identidade Visual", href: "/servicos/branding" },
  ];

  const generateWhatsAppLink = (serviceTitle: string) => {
    const message = `Olá! Gostaria de saber mais sobre o serviço de ${serviceTitle}. Poderia me ajudar?`;
    return `https://wa.me/24988700151/?text=${encodeURIComponent(message)}`;
  };

  return (
    <>
      <footer className="w-full bg-orange-500 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Links Úteis */}
          {footerLinks.map((section, index) => (
            <div key={index} className="space-y-4">
              <h3 className="text-2xl font-bold text-white">{section.title}</h3>
              <ul className="space-y-2">
                {section.links.map((link, i) => (
                  <li key={i}>
                    <Link
                      href={link.href}
                      rel="noopener noreferrer"
                      passHref
                      className="text-white hover:text-black transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Planos */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-white">Planos</h3>
            <ul className="space-y-2">
              {plans.map((plan, index) => (
                <li key={index}>
                  <Link
                    href={generateWhatsAppLink(plan.label)}
                    target="_blank"
                    rel="noopener noreferrer"
                    passHref
                    className="text-white hover:text-black transition-colors"
                  >
                    {plan.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Serviços */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-white">Serviços</h3>
            <ul className="space-y-2">
              {services.map((service, index) => (
                <li key={index}>
                  <Link
                    href={generateWhatsAppLink(service.label)}
                    target="_blank"
                    rel="noopener noreferrer"
                    passHref
                    className="text-white hover:text-black transition-colors"
                  >
                    {service.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contato */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-white">Contato</h3>
            <ul className="space-y-2">
              {contactInfo.map((info, index) => (
                <li key={index} className="flex items-center gap-2">
                  {info.icon}
                  <Link
                    href={info.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    passHref
                    className="text-white hover:text-black transition-colors">
                    {info.text}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Rodapé Inferior */}
        <div className="border-t border-white/50 mt-8 pt-8">
          <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-4">
            {/* Redes Sociais */}
            <div className="flex gap-4">
              {socialLinks.map((social, index) => (
                <Link
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  passHref
                  className="text-white hover:text-black transition-colors"
                >
                  {social.icon}
                </Link>
              ))}
            </div>

            {/* Direitos Autorais */}
            <p className="text-white text-center">
              © {new Date().getFullYear()} Grupo Velus. Todos os direitos reservados.
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}