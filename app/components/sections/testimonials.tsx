"use client"
import { useRef } from "react"
import { Star } from "lucide-react"
import { ScrollReveal } from "@/components/scroll-reveal"

export function TestimonialsSection() {
  const testimonialsRef = useRef<HTMLDivElement>(null)

  return (
    <section id="testimonials" ref={testimonialsRef} className="py-24 relative">
      <div className="container mx-auto relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16">
          <ScrollReveal>
            <div>
              <div className="w-24 h-1 bg-white mb-6"></div>
              <h2 className="text-3xl md:text-5xl font-bold">DEPOIMENTOS</h2>
            </div>
          </ScrollReveal>
          <ScrollReveal delay={200}>
            <p className="text-gray-400 max-w-md mt-4 md:mt-0">O que nossos clientes dizem sobre trabalhar conosco.</p>
          </ScrollReveal>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {[1, 2, 3].map((item, index) => (
            <ScrollReveal key={item} delay={300 + index * 200}>
              <div className="bg-black/50 border border-white/5 p-8">
                <div className="flex items-center gap-2 mb-6">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} className="w-5 h-5 text-orange-400 fill-orange-400" />
                  ))}
                </div>
                <p className="text-gray-300 mb-6 italic">
                  &ldquo;A Velus transformou completamente nossa presença online. A equipe entregou um site que não apenas tem
                  uma aparência incrível, mas também tem um desempenho excepcional.&rdquo;
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-orange-500 flex items-center justify-center rounded-full">
                    <span className="font-bold text-sm text-black">{item}</span>
                  </div>
                  <div>
                    <h4 className="font-medium">Cliente {item}</h4>
                    <p className="text-sm text-gray-400">Empresa {item}</p>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
