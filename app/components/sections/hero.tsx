"use client";
import { useRef } from "react";
import { ArrowDown, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui (shadcn)/button";
import { useCountdown } from "@/hooks/use-countdown";
import { useVisitorCounter } from "@/hooks/use-visitor-counter";
import { ScrollReveal } from "@/components/scroll-reveal";
import { CountdownTimer } from "@/components/countdown-timer";
import { VisitorCounter } from "@/components/visitor-counter";
import { TechTitle } from "../home/tech-title";

export function HeroSection() {
  const timeLeft = useCountdown({
    days: 7,
    hours: 4,
    minutes: 20,
    seconds: 10,
  });
  const visitorCount = useVisitorCounter();
  const heroRef = useRef<HTMLDivElement>(null);

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      ref={heroRef}
      className="relative flex min-h-screen items-center pt-24"
    >
      <div className="container relative z-10 mx-auto">
        <div className="max-w-4xl">
          <ScrollReveal>
            <a
              href="#contact"
              className="mb-6 inline-block rounded-sm bg-orange-500/80 px-4 py-1"
            >
              <div className="flex items-center gap-2">
                <span className="text-xs font-bold tracking-wider text-black">
                  OFERTA ESPECIAL -{" "}
                  <span className="font-black text-white">50% OFF</span>
                </span>
              </div>
            </a>
          </ScrollReveal>

          <TechTitle />

          <ScrollReveal delay={600}>
            <CountdownTimer timeLeft={timeLeft} />
          </ScrollReveal>

          <ScrollReveal delay={800}>
            <div className="mb-8 flex flex-col gap-4 sm:flex-row">
              <Button
                onClick={() => scrollToSection("contact")}
                className="border border-transparent bg-orange-500 p-6 text-black shadow-2xl shadow-orange-500/20 transition-all delay-150 duration-150 hover:border-orange-500 hover:bg-orange-500/10 hover:text-white"
              >
                SOLICITAR ORÇAMENTO
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button
                variant="outline"
                onClick={() => scrollToSection("portfolio")}
                className="border-white/10 bg-black/50 px-7 py-6 text-white transition-all delay-150 duration-150 hover:border-orange-500/50 hover:bg-orange-500/10"
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

      <a
        href="#services"
        className="absolute bottom-10 left-1/2 -translate-x-1/2 transform animate-bounce cursor-pointer p-2 hover:bg-orange-500/5"
      >
        <ArrowDown className="h-6 w-6 text-orange-400" />
      </a>
    </section>
  );
}
