"use client";
import { useRef } from "react";
import { Clock, Gift } from "lucide-react";
import { Button } from "@/components/ui (shadcn)/button";
import { ScrollReveal } from "@/components/scroll-reveal";

export function ContactSection() {
  const contactRef = useRef<HTMLDivElement | null>(null);

  return (
    <section
      id="contact"
      ref={contactRef}
      className="relative bg-black/50 py-24"
    >
      <div className="container relative z-10 mx-auto">
        <div className="mx-auto max-w-4xl">
          <ScrollReveal>
            <div className="border border-white/10 bg-black p-8 md:p-12">
              <div className="mx-auto mb-6 h-1 w-24 bg-orange-500"></div>
              <h2 className="mb-6 text-center text-3xl font-bold md:text-4xl">
                PRONTO PARA TRANSFORMAR SUA PRESENÇA DIGITAL?
              </h2>
              <p className="mb-8 text-center text-lg text-gray-300">
                Aproveite nossa oferta especial por tempo limitado e ganhe{" "}
                <span className="font-bold text-orange-400">
                  50% de desconto
                </span>{" "}
                em seu primeiro projeto.
              </p>

              <div className="mb-8 grid gap-6 md:grid-cols-2">
                <div>
                  <label className="mb-2 block text-sm font-medium text-gray-400">
                    Nome
                  </label>
                  <input
                    type="text"
                    className="w-full border border-white/10 bg-black/70 p-3 text-white transition-all focus:border-orange-500 focus:outline-none"
                    placeholder="Seu nome"
                  />
                </div>
                <div>
                  <label className="mb-2 block text-sm font-medium text-gray-400">
                    Email
                  </label>
                  <input
                    type="email"
                    className="w-full border border-white/10 bg-black/70 p-3 text-white transition-all focus:border-orange-500 focus:outline-none"
                    placeholder="seu@email.com"
                  />
                </div>
                <div className="md:col-span-2">
                  <label className="mb-2 block text-sm font-medium text-gray-400">
                    Mensagem
                  </label>
                  <textarea
                    className="h-32 w-full border border-white/10 bg-black/70 p-3 text-white transition-all focus:border-orange-500 focus:outline-none"
                    placeholder="Conte-nos sobre seu projeto"
                  ></textarea>
                </div>
              </div>

              <div className="flex flex-col items-center">
                <Button className="w-full bg-orange-500 px-8 py-6 text-black hover:bg-orange-600 md:w-auto">
                  SOLICITAR ORÇAMENTO GRATUITO
                  <Gift className="ml-2 h-4 w-4" />
                </Button>
                <div className="mt-4 flex items-center gap-2">
                  <Clock className="h-3 w-3 text-orange-400" />
                  <p className="text-xs text-gray-400">
                    Resposta em até 24 horas
                  </p>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
