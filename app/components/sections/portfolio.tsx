"use client"
import { useRef } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ScrollReveal } from "@/components/scroll-reveal"
import { useInView } from "@/hooks/use-in-view"

export function PortfolioSection() {
  const portfolioRef = useRef<HTMLDivElement>(null)
  const portfolioInView = useInView(portfolioRef)

  return (
    <section id="portfolio" ref={portfolioRef} className="py-24 relative">
      <div className="container mx-auto relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16">
          <ScrollReveal>
            <div>
              <div className="w-24 h-1 bg-white mb-6"></div>
              <h2 className="text-3xl md:text-5xl font-bold">NOSSO TRABALHO</h2>
            </div>
          </ScrollReveal>
          <ScrollReveal delay={200}>
            <p className="text-gray-400 max-w-md mt-4 md:mt-0">
              Projetos selecionados que demonstram nossa expertise e criatividade.
            </p>
          </ScrollReveal>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[1, 2, 3, 4, 5, 6].map((item, index) => (
            <ScrollReveal key={item} delay={300 + index * 100}>
              <div className="group relative overflow-hidden">
                <Image
                  src={`/placeholder.svg?height=400&width=600`}
                  width={600}
                  height={400}
                  alt={`Portfolio item ${item}`}
                  className="w-full h-[300px] object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                  <h3 className="text-xl font-bold mb-2 text-orange-400 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    Projeto {item}
                  </h3>
                  <p className="text-sm text-gray-300 mb-4 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-100">
                    Desenvolvimento Web
                  </p>
                  <Button
                    className="w-fit bg-orange-500 hover:bg-orange-600 text-black transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-200"
                    onClick={() => alert(`Projeto ${item} selecionado!`)}
                  >
                    Ver Projeto
                  </Button>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <div className="flex justify-center mt-12">
          <ScrollReveal delay={800}>
            <Button variant="outline" className="border-white/10 bg-black/50 text-white hover:bg-black/80">
              Ver Todos os Projetos
            </Button>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}
