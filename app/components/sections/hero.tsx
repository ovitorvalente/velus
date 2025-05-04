"use client"
import { useRef } from "react"
import { ArrowDown, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useCountdown } from "@/hooks/use-countdown"
import { useVisitorCounter } from "@/hooks/use-visitor-counter"
import { ScrollReveal } from "@/components/scroll-reveal"
import { CountdownTimer } from "@/components/countdown-timer"
import { VisitorCounter } from "@/components/visitor-counter"

export function HeroSection() {
  const timeLeft = useCountdown({ days: 7, hours: 4, minutes: 20, seconds: 10 })
  const visitorCount = useVisitorCounter()
  const heroRef = useRef<HTMLDivElement>(null)

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId)
    if (section) {
      section.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section id="home" ref={heroRef} className="relative min-h-screen flex items-center pt-24">
      <div className="container mx-auto relative z-10">
        <div className="max-w-4xl">
          <ScrollReveal>
            <div className="inline-block bg-orange-500 px-4 py-1 mb-6 rounded-sm">
              <div className="flex items-center gap-2">
                <span className="text-xs font-bold tracking-wider text-black">OFERTA ESPECIAL - 50% OFF</span>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={200}>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter mb-6 leading-none">
              DESIGN
              <br />
              <span className="text-orange-500">DIGITAL</span>
            </h1>
          </ScrollReveal>

          <ScrollReveal delay={400}>
            <p className="text-lg md:text-xl text-gray-300 max-w-2xl mb-8">
              Transformamos ideias em websites impressionantes e arte digital.
              <span className="font-bold text-white"> Mais de 500 clientes satisfeitos.</span>
            </p>
          </ScrollReveal>

          <ScrollReveal delay={600}>
            <CountdownTimer timeLeft={timeLeft} />
          </ScrollReveal>

          <ScrollReveal delay={800}>
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Button
                onClick={() => scrollToSection("contact")}
                className="bg-orange-500 hover:bg-orange-500/10 hover:border-orange-500 border border-transparent shadow-2xl shadow-orange-500/20 hover:text-white text-black transition-all delay-150 duration-150 p-6"
              >
                SOLICITAR ORÇAMENTO
                <ArrowRight className="h-4 w-4 ml-2" />
              </Button>
              <Button
                variant="outline"
                onClick={() => scrollToSection("portfolio")}
                className="border-white/10 bg-black/50 text-white hover:bg-orange-500/10 hover:border-orange-500/50 transition-all delay-150 duration-150 py-6 px-7"
              >
                VER PORTFÓLIO
              </Button>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={1000}>
            <VisitorCounter count={visitorCount} />
          </ScrollReveal>
        </div>
      </div>

      <a href="#services" className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce p-2 cursor-pointer hover:bg-orange-500/5">
        <ArrowDown className="h-6 w-6 text-orange-400" />
      </a>
    </section>
  )
}
