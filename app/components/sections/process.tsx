"use client"
import { ScrollReveal } from "@/components/scroll-reveal"
import { useRef } from "react"

export function ProcessSection() {
  const processRef = useRef<HTMLDivElement>(null)

  return (
    <section id="process" ref={processRef} className="py-24 relative bg-black/50">
      <div className="container mx-auto relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16">
          <ScrollReveal>
            <div>
              <div className="w-24 h-1 bg-orange-500 mb-6"></div>
              <h2 className="text-3xl md:text-5xl font-bold">NOSSO PROCESSO</h2>
            </div>
          </ScrollReveal>
          <ScrollReveal delay={200}>
            <p className="text-gray-400 max-w-md mt-4 md:mt-0">
              Uma abordagem estruturada para garantir resultados excepcionais em cada projeto.
            </p>
          </ScrollReveal>
        </div>

        <div className="grid md:grid-cols-4 gap-6">
          <ScrollReveal delay={300}>
            <div className="bg-black/50 border border-white/5 p-8 relative">
              <div className="text-5xl font-bold text-gray-800 mb-4">01</div>
              <h3 className="text-xl font-bold mb-2 text-orange-400">Descoberta</h3>
              <p className="text-gray-400">
                Entendemos suas necessidades, objetivos e público-alvo para criar uma estratégia personalizada.
              </p>
            </div>
          </ScrollReveal>
          <ScrollReveal delay={500}>
            <div className="bg-black/50 border border-white/5 p-8 relative">
              <div className="text-5xl font-bold text-gray-800 mb-4">02</div>
              <h3 className="text-xl font-bold mb-2 text-white">Design</h3>
              <p className="text-gray-400">
                Criamos conceitos visuais e protótipos que alinham-se com sua identidade e objetivos.
              </p>
            </div>
          </ScrollReveal>
          <ScrollReveal delay={700}>
            <div className="bg-black/50 border border-white/5 p-8 relative">
              <div className="text-5xl font-bold text-gray-800 mb-4">03</div>
              <h3 className="text-xl font-bold mb-2 text-orange-400">Desenvolvimento</h3>
              <p className="text-gray-400">
                Transformamos os designs em código, construindo soluções robustas e escaláveis.
              </p>
            </div>
          </ScrollReveal>
          <ScrollReveal delay={900}>
            <div className="bg-black/50 border border-white/5 p-8 relative">
              <div className="text-5xl font-bold text-gray-800 mb-4">04</div>
              <h3 className="text-xl font-bold mb-2 text-white">Lançamento</h3>
              <p className="text-gray-400">
                Implementamos, testamos e otimizamos para garantir um produto final perfeito.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}
