"use client";

import { motion } from "framer-motion";
import { Instagram, LayoutTemplate, PenTool, BarChart, ShoppingCart, BookOpen, ArrowRight } from "lucide-react";
import Link from "next/link";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export function ServicesSession() {
  const services = [
    {
      title: "Social Media Marketing Digital",
      description: "Gestão de redes sociais, criação de conteúdo estratégico e planejamento de campanhas digitais.",
      icon: <Instagram className="w-8 h-8 text-orange-500" />,
      features: [
        "Gestão de redes sociais (Instagram, Facebook, Tiktok, etc.)",
        "Criação de conteúdo estratégico e criativo",
        "Planejamento de campanhas digitais",
        "Consultoria em estratégias de vendas e engajamento"
      ]
    },
    {
      title: "Consultoria Estratégica",
      description: "Análise de mercado, branding, posicionamento e planejamento estratégico de marketing.",
      icon: <BarChart className="w-8 h-8 text-orange-500" />,
      features: [
        "Análise de mercado",
        "Consultoria em branding e posicionamento",
        "Análise de concorrência e tendências",
        "Planejamento estratégico de marketing"
      ]
    },
    {
      title: "Design Gráfico",
      description: "Criação de materiais gráficos personalizados para impressão e digital.",
      icon: <PenTool className="w-8 h-8 text-orange-500" />,
      features: [
        "Design de produtos personalizados",
        "Criação de flyers, cartazes e banners",
        "Materiais para impressão (cartões de visita, cardápios, folders, etc.)",
        "Layouts para apresentações e e-books"
      ]
    },
    {
      title: "Tráfego Pago",
      description: "Gestão de campanhas pagas no Google Ads e Facebook/Instagram Ads.",
      icon: <ShoppingCart className="w-8 h-8 text-orange-500" />,
      features: [
        "Planejamento e gestão de campanhas",
        "Criação de anúncios otimizados",
        "Estratégias personalizadas para tráfego qualificado",
        "Monitoramento e relatórios de performance"
      ]
    },
    {
      title: "Web Design & E-commerce",
      description: "Criação de sites institucionais, lojas online e landing pages personalizadas.",
      icon: <LayoutTemplate className="w-8 h-8 text-orange-500" />,
      features: [
        "Criação de sites institucionais",
        "Desenvolvimento de lojas online (WordPress, WooCommerce)",
        "Landing pages personalizadas",
        "Otimização para SEO e performance"
      ]
    },
    {
      title: "Branding & Identidade Visual",
      description: "Criação de logotipos, identidade visual e redesign de marcas existentes.",
      icon: <BookOpen className="w-8 h-8 text-orange-500" />,
      features: [
        "Criação de logotipos",
        "Manual de logotipo",
        "Desenvolvimento de identidade visual completa",
        "Redesign de marcas existentes"
      ]
    }
  ];

  // Função para gerar o link do WhatsApp com mensagem personalizada
  const generateWhatsAppLink = (serviceTitle: string) => {
    const message = `Olá! Gostaria de saber mais sobre o serviço de ${serviceTitle}. Poderia me ajudar?`;
    return `https://wa.me/24988700151/?text=${encodeURIComponent(message)}`;
  };

  return (
    <section id="services-section" className="flex flex-col items-center w-full py-24 bg-gradient-to-b from-orange-500 via-white to-white">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center mb-8 md:mb-16 px-4"
      >
        <h1 className="text-7xl max-md:text-5xl font-bold text-orange-50 mb-4">
          Nossos Serviços
        </h1>
        <p className="text-2xl max-md:text-xl text-orange-100 mx-auto">
          Soluções completas para impulsionar sua presença digital e alcançar resultados reais.
        </p>
      </motion.div>

      {/* Carrossel para dispositivos móveis */}
      <div className="w-full max-w-7xl px-4 md:hidden">
        <Carousel>
          <CarouselContent>
            {services.map((service, index) => (
              <CarouselItem key={service.title} className="basis-full">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 * index }}
                  className="bg-white rounded-3xl p-6 shadow hover:shadow-2xl max-md:shadow-none max-md:hover:shadow-none transition-all duration-300"
                >
                  <div className="flex flex-col h-full">
                    <div className="text-center">
                      <div className="flex justify-center mb-4">
                        {service.icon}
                      </div>
                      <h2 className="text-2xl font-bold text-orange-950 mb-2">
                        {service.title}
                      </h2>
                      <p className="text-orange-800 mb-4">{service.description}</p>
                    </div>

                    <ul className="flex-grow mb-6">
                      {service.features.map((feature, i) => (
                        <li key={i} className="flex items-center gap-2 mb-2 text-orange-950/80">
                          <span className="w-2 h-2 bg-orange-500 rounded-full" />
                          {feature}
                        </li>
                      ))}
                    </ul>

                    <Link
                      href={generateWhatsAppLink(service.title)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full flex items-center justify-center bg-orange-500 text-white py-2 rounded-full hover:bg-orange-600 transition-colors group"
                    >
                      Saiba Mais
                      <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </motion.div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="left-2" />
          <CarouselNext className="right-2" />
        </Carousel>
      </div>

      {/* Grid para dispositivos maiores */}
      <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl w-full px-4">
        {services.map((service, index) => (
          <motion.div
            key={service.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 * index }}
            className="bg-white rounded-3xl p-6 shadow-2xl hover:shadow-xl transition-all duration-300"
          >
            <div className="flex flex-col h-full">
              <div className="text-center">
                <div className="flex justify-center mb-4">
                  {service.icon}
                </div>
                <h2 className="text-2xl font-bold text-orange-950 mb-2">
                  {service.title}
                </h2>
                <p className="text-orange-800 mb-4">{service.description}</p>
              </div>

              <ul className="flex-grow mb-6">
                {service.features.map((feature, i) => (
                  <li key={i} className="flex items-center gap-2 mb-2 text-orange-950/80">
                    <span className="w-2 h-2 bg-orange-500 rounded-full" />
                    {feature}
                  </li>
                ))}
              </ul>

              <Link
                href={generateWhatsAppLink(service.title)}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center bg-orange-500 text-white py-2 rounded-full hover:bg-orange-600 transition-colors group"
              >
                Saiba Mais
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}