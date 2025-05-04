"use client";
import { useRef } from "react";
import Image from "next/image";
import { ScrollReveal } from "@/components/scroll-reveal";
import { Button } from "@/components/ui (shadcn)/button";

const portfolioItems = [
  {
    id: 1,
    title: "E-commerce Moderno",
    category: "Loja Virtual",
    imageUrl:
      "https://images.unsplash.com/photo-1555529669-e69e7aa0ba9a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&h=400&q=80",
  },
  {
    id: 2,
    title: "Dashboard Corporativo",
    category: "Sistema Web",
    imageUrl:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&h=400&q=80",
  },
  {
    id: 3,
    title: "Aplicativo Mobile",
    category: "UI/UX Design",
    imageUrl:
      "https://images.unsplash.com/photo-1555774698-0b77e0d5fac6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&h=400&q=80",
  },
  {
    id: 4,
    title: "Site Institucional",
    category: "Desenvolvimento Web",
    imageUrl:
      "https://images.unsplash.com/photo-1547658719-da2b51169166?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&h=400&q=80",
  },
  {
    id: 5,
    title: "Plataforma SaaS",
    category: "Solução Cloud",
    imageUrl:
      "https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&h=400&q=80",
  },
  {
    id: 6,
    title: "Landing Page",
    category: "Conversão Otimizada",
    imageUrl:
      "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&h=400&q=80",
  },
];

export function PortfolioSection() {
  const portfolioRef = useRef<HTMLDivElement>(null);

  return (
    <section
      id="portfolio"
      ref={portfolioRef}
      className="relative bg-black/90 py-24"
    >
      <div className="container relative z-10 mx-auto px-4">
        <div className="mb-16 flex flex-col justify-between md:flex-row md:items-end">
          <ScrollReveal>
            <div>
              <div className="mb-4 h-1 w-24 bg-gradient-to-r from-orange-500 to-transparent"></div>
              <h2 className="text-4xl font-bold md:text-5xl lg:text-6xl">
                NOSSO <span className="text-orange-400">PORTFÓLIO</span>
              </h2>
            </div>
          </ScrollReveal>
          <ScrollReveal delay={200}>
            <p className="mt-4 max-w-md text-gray-400 md:mt-0">
              Projetos selecionados que demonstram nossa expertise em criar
              soluções digitais impactantes.
            </p>
          </ScrollReveal>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {portfolioItems.map((item, index) => (
            <ScrollReveal key={item.id} delay={300 + index * 100}>
              <div className="group relative overflow-hidden rounded-lg shadow-2xl transition-all duration-500 hover:shadow-orange-500/20">
                <Image
                  src={item.imageUrl}
                  width={600}
                  height={400}
                  alt={item.title}
                  unoptimized={true}
                  className="h-[350px] w-full object-cover transition-transform duration-700 group-hover:scale-110"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                  <div className="absolute inset-0 flex flex-col justify-end p-6">
                    <div className="translate-y-8 transform space-y-2 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                      <span className="text-sm font-semibold text-orange-400">
                        {item.category}
                      </span>
                      <h3 className="text-xl font-bold text-white">
                        {item.title}
                      </h3>
                      <Button
                        asChild
                        className="mt-4 w-fit bg-orange-500 text-black hover:bg-orange-600"
                      >
                        <a href="#contact">Ver Detalhes</a>
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* <div className="mt-16 flex justify-center">
          <ScrollReveal delay={800}>
            <Button
              variant="outline"
              className="border-orange-500 bg-transparent text-orange-500 hover:bg-orange-500/10 hover:text-white"
            >
              Explorar Todos os Projetos
            </Button>
          </ScrollReveal>
        </div> */}
      </div>
    </section>
  );
}
