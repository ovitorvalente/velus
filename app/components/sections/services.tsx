import { Code, Palette, Zap } from "lucide-react";
import { SectionHeader } from "@/components/ui/section-header";
import { ScrollReveal } from "@/components/scroll-reveal";
import { ServiceCard } from "@/components/services/service-card";

export function ServicesSection() {
  const services = [
    {
      icon: <Code className="h-8 w-8 text-black" />,
      iconBg: "bg-orange-500",
      title: "Desenvolvimento Web",
      titleColor: "text-orange-400",
      description:
        "Sites personalizados com tecnologias modernas, rápidos, responsivos e otimizados para SEO.",
      features: ["Design Responsivo", "Otimização SEO", "Soluções E-commerce"],
      featureIconColor: "text-orange-400",
      originalPrice: "R$7.000",
      price: "R$3.500",
      priceColor: "text-orange-400",
      buttonColor: "bg-orange-500 hover:bg-orange-600 text-black",
      popular: false,
    },
    {
      icon: <Palette className="h-8 w-8 text-black" />,
      iconBg: "bg-white",
      title: "Arte Digital & Design",
      titleColor: "text-white",
      description:
        "Arte digital e designs impressionantes que capturam a atenção e comunicam a mensagem da sua marca.",
      features: ["Identidade Visual", "Ilustrações", "Design UI/UX"],
      featureIconColor: "text-white",
      originalPrice: "R$3.600",
      price: "R$1.800",
      priceColor: "text-white",
      buttonColor: "bg-white hover:bg-gray-200 text-black",
      popular: true,
    },
    {
      icon: <Zap className="h-8 w-8 text-black" />,
      iconBg: "bg-gray-600",
      title: "Marketing Digital",
      titleColor: "text-gray-400",
      description:
        "Estratégias de marketing digital para aumentar sua presença online e impulsionar conversões.",
      features: [
        "Gestão de Redes Sociais",
        "Criação de Conteúdo",
        "Análise & Relatórios",
      ],
      featureIconColor: "text-gray-400",
      originalPrice: "R$2.400/mês",
      price: "R$1.200/mês",
      priceColor: "text-gray-300",
      buttonColor: "bg-gray-600 hover:bg-gray-700 text-white",
      popular: false,
    },
  ];

  return (
    <section id="services" className="relative py-24">
      <div className="container relative z-10 mx-auto">
        <SectionHeader
          line="bg-orange-500"
          title="NOSSOS SERVIÇOS"
          description="Soluções digitais completas para transformar sua presença online e destacar sua marca."
        />

        <div className="grid gap-6 md:grid-cols-3">
          {services.map((service, index) => (
            <ScrollReveal key={index} delay={300 + index * 200}>
              <ServiceCard {...service} />
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
