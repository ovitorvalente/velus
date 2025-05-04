
"use client"
import { useRef } from "react"
import { Clock, Gift } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useInView } from "@/hooks/use-in-view"
import { ScrollReveal } from "@/components/scroll-reveal"

export function ContactSection() {
  const contactRef = useRef<HTMLDivElement | null>(null)
  const contactInView = useInView(contactRef)

  return (
    <section id="contact" ref={contactRef} className="py-24 relative bg-black/50">
      <div className="container mx-auto relative z-10">
        <div className="max-w-4xl mx-auto">
          <ScrollReveal>
            <div className="bg-black border border-white/10 p-8 md:p-12">
              <div className="w-24 h-1 bg-orange-500 mb-6 mx-auto"></div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">
                PRONTO PARA TRANSFORMAR SUA PRESENÇA DIGITAL?
              </h2>
              <p className="text-lg text-gray-300 mb-8 text-center">
                Aproveite nossa oferta especial por tempo limitado e ganhe{" "}
                <span className="font-bold text-orange-400">50% de desconto</span> em seu primeiro projeto.
              </p>

              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div>
                  <label className="block text-sm font-medium text-gray-400 mb-2">Nome</label>
                  <input
                    type="text"
                    className="w-full bg-black/70 border border-white/10 p-3 text-white focus:border-orange-500 focus:outline-none transition-all"
                    placeholder="Seu nome"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-400 mb-2">Email</label>
                  <input
                    type="email"
                    className="w-full bg-black/70 border border-white/10 p-3 text-white focus:border-orange-500 focus:outline-none transition-all"
                    placeholder="seu@email.com"
                  />
                </div>
                <div className="md:col-span-2">
                  <label className="block text-sm font-medium text-gray-400 mb-2">Mensagem</label>
                  <textarea
                    className="w-full bg-black/70 border border-white/10 p-3 text-white focus:border-orange-500 focus:outline-none transition-all h-32"
                    placeholder="Conte-nos sobre seu projeto"
                  ></textarea>
                </div>
              </div>

              <div className="flex flex-col items-center">
                <Button className="w-full md:w-auto bg-orange-500 hover:bg-orange-600 text-black px-8 py-6">
                  SOLICITAR ORÇAMENTO GRATUITO
                  <Gift className="h-4 w-4 ml-2" />
                </Button>
                <div className="flex items-center gap-2 mt-4">
                  <Clock className="h-3 w-3 text-orange-400" />
                  <p className="text-xs text-gray-400">Resposta em até 24 horas</p>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}
