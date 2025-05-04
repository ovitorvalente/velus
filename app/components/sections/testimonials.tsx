"use client";
import { useRef } from "react";
import { motion } from "framer-motion";
import { ScrollReveal } from "@/components/scroll-reveal";

const testimonials = [
  {
    id: 1,
    content:
      "A parceria com esta equipe transformou completamente nossa presença digital.",
    author: "Ana Silva",
    role: "CEO, TechSolutions",
  },
  {
    id: 2,
    content:
      "Fiquei impressionado com a atenção aos detalhes e a capacidade de transformar nossas ideias.",
    author: "Carlos Mendes",
    role: "Diretor de Marketing, InnovaCorp",
  },
  {
    id: 3,
    content:
      "A equipe demonstrou um profundo entendimento das nossas necessidades e entregou uma solução excepcional.",
    author: "Mariana Costa",
    role: "Fundadora, StartupBR",
  },
  {
    id: 4,
    content:
      "O redesign do nosso site resultou em um aumento significativo nas conversões.",
    author: "Roberto Alves",
    role: "Diretor de Operações, GlobalTech",
  },
  {
    id: 5,
    content:
      "Trabalhar com esta equipe foi uma experiência excepcional. Eles entenderam nossa visão.",
    author: "Juliana Martins",
    role: "Gerente de Produto, FutureSoft",
  },
  {
    id: 6,
    content:
      "Profissionalismo e criatividade definem esta equipe. Resultados impressionantes.",
    author: "Pedro Santos",
    role: "Diretor Criativo, DesignHub",
  },
  {
    id: 7,
    content:
      "Superaram todas as expectativas. Nosso e-commerce teve um crescimento de 200%.",
    author: "Fernanda Lima",
    role: "CEO, ModaExpress",
  },
  {
    id: 8,
    content:
      "A estratégia de SEO implementada elevou nosso site ao topo dos resultados de busca.",
    author: "Lucas Ferreira",
    role: "Gerente de Marketing Digital, WebTrend",
  },
  {
    id: 9,
    content:
      "A dedicação e o suporte contínuo da equipe fizeram toda a diferença para nosso projeto.",
    author: "Sofia Ribeiro",
    role: "COO, DataVision",
  },
  {
    id: 10,
    content:
      "A integração de novas tecnologias ao nosso sistema foi feita de forma impecável.",
    author: "Rafael Oliveira",
    role: "CTO, SmartSystems",
  },
  {
    id: 11,
    content:
      "A implementação do HubSpot pela equipe aumentou nossa taxa de conversão de leads em 30%.",
    author: "Beatriz Souza",
    role: "Diretora de Marketing, Rock & Roll Hall of Fame",
  },
  {
    id: 12,
    content:
      "Com a solução de comunicação da Dialpad, reduzimos o tempo de resposta ao cliente em 40%.",
    author: "Eduardo Lima",
    role: "Gerente de Operações, Xero",
  },
  {
    id: 13,
    content:
      "O suporte da equipe na migração para Shopify economizou 25% dos nossos custos de plataforma.",
    author: "Clara Mendes",
    role: "CEO, The British Museum Shop",
  },
  {
    id: 14,
    content:
      "A estratégia de mídia social da equipe dobrou nosso engajamento no Instagram em apenas três meses.",
    author: "Thiago Almeida",
    role: "Coordenador de Marketing, Patagonia",
  },
  {
    id: 15,
    content:
      "A integração com o Salesforce otimizou nosso fluxo de vendas, resultando em um ROI de 150%.",
    author: "Laura Pereira",
    role: "Diretora de Vendas, PagerDuty",
  },
];

const duplicatedTestimonials = [...testimonials, ...testimonials];

export function TestimonialsSection() {
  const carouselRef = useRef<HTMLDivElement>(null);

  return (
    <section id="testimonials" ref={carouselRef} className="relative py-24">
      <div className="absolute inset-0 z-0">
        <div className="absolute left-1/4 top-0 h-64 w-64 bg-orange-500/10 blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 h-80 w-80 bg-orange-300/5 blur-3xl"></div>
      </div>
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/5 to-transparent opacity-10"></div>
      <div className="absolute inset-x-0 bottom-0 h-px bg-black/40"></div>

      <div className="container relative z-10 mx-auto">
        <div className="mb-16 flex flex-col justify-between md:flex-row md:items-end">
          <ScrollReveal>
            <div>
              <div className="mb-6 h-1 w-24 bg-white" />
              <h2 className="text-3xl font-bold md:text-5xl">DEPOIMENTOS</h2>
            </div>
          </ScrollReveal>
          <ScrollReveal delay={200}>
            <p className="mt-4 max-w-md text-gray-400 md:mt-0">
              O que nossos clientes dizem sobre trabalhar conosco.
            </p>
          </ScrollReveal>
        </div>

        <div className="relative mx-auto max-w-7xl">
          <div className="absolute bottom-0 left-0 top-0 z-10 w-16 bg-gradient-to-r from-black to-transparent"></div>
          <div className="absolute bottom-0 right-0 top-0 z-10 w-16 bg-gradient-to-l from-black to-transparent"></div>

          <div className="overflow-hidden" ref={carouselRef}>
            <motion.div
              className="flex gap-6 py-4"
              animate={{
                x: [0, -100 * testimonials.length],
              }}
              transition={{
                x: {
                  repeat: Number.POSITIVE_INFINITY,
                  repeatType: "loop",
                  duration: 60,
                  ease: "linear",
                },
              }}
            >
              {duplicatedTestimonials.map((testimonial, index) => (
                <div
                  key={`${testimonial.id}-${index}`}
                  className="group w-[300px] flex-shrink-0"
                >
                  <div className="relative h-full overflow-hidden border border-white/10 bg-black/60 p-6 backdrop-blur-sm">
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-orange-500 via-yellow-500 to-orange-500 opacity-0 group-hover:opacity-100"
                      style={{
                        backgroundSize: "200% 200%",
                      }}
                      animate={{
                        backgroundPosition: ["0% 0%", "100% 100%", "0% 0%"],
                      }}
                      transition={{
                        repeat: Number.POSITIVE_INFINITY,
                        duration: 3,
                        ease: "linear",
                      }}
                    />
                    <div className="absolute inset-[2px] z-10 bg-black"></div>

                    <div className="relative z-20">
                      <p className="mb-4 line-clamp-4 text-sm text-gray-200">
                        {testimonial.content}
                      </p>
                      <div className="flex items-center gap-4">
                        <div className="flex h-8 w-8 items-center justify-center rounded-full bg-orange-500/20 text-xs font-bold">
                          {testimonial.author.charAt(0)}
                        </div>
                        <div>
                          <h4 className="text-sm font-bold text-white">
                            {testimonial.author}
                          </h4>
                          <p className="text-xs text-orange-400">
                            {testimonial.role}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>

        <div className="relative mx-auto mt-8 max-w-7xl">
          <div className="absolute bottom-0 left-0 top-0 z-10 w-16 bg-gradient-to-r from-black to-transparent"></div>
          <div className="absolute bottom-0 right-0 top-0 z-10 w-16 bg-gradient-to-l from-black to-transparent"></div>

          <div className="overflow-hidden">
            <motion.div
              className="flex gap-6 py-4"
              animate={{
                x: [-100 * testimonials.length, 0],
              }}
              transition={{
                x: {
                  repeat: Number.POSITIVE_INFINITY,
                  repeatType: "loop",
                  duration: 60,
                  ease: "linear",
                },
              }}
            >
              {duplicatedTestimonials.map((testimonial, index) => (
                <div
                  key={`reverse-${testimonial.id}-${index}`}
                  className="group w-[300px] flex-shrink-0"
                >
                  <div className="relative h-full overflow-hidden border border-white/10 bg-black/60 p-6 backdrop-blur-sm">
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-orange-500 via-yellow-500 to-orange-500 opacity-0 group-hover:opacity-100"
                      style={{
                        backgroundSize: "200% 200%",
                      }}
                      animate={{
                        backgroundPosition: ["0% 0%", "100% 100%", "0% 0%"],
                      }}
                      transition={{
                        repeat: Number.POSITIVE_INFINITY,
                        duration: 3,
                        ease: "linear",
                      }}
                    />
                    <div className="absolute inset-[2px] z-10 bg-black"></div>

                    <div className="relative z-20">
                      <p className="mb-4 line-clamp-4 text-sm text-gray-200">
                        {testimonial.content}
                      </p>
                      <div className="flex items-center">
                        <div className="mr-3 h-10 w-10 overflow-hidden border border-orange-500/20">
                          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-orange-500/20 text-xs font-bold">
                            {testimonial.author.charAt(0)}
                          </div>
                        </div>
                        <div>
                          <h4 className="text-sm font-bold text-white">
                            {testimonial.author}
                          </h4>
                          <p className="text-xs text-orange-400">
                            {testimonial.role}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
