import { ScrollReveal } from "@/components/scroll-reveal";

export function StatsSection() {
  const infos = [
    {
      value: "500",
      signal: "+",
      description: "CLIENTES",
      delay: 0,
      textColor: "text-orange-400",
      hoverTranslate: "hover:-translate-y-2"
    },
    {
      value: "1200",
      signal: "+",
      description: "PROJETOS",
      delay: 200,
      textColor: "text-white",
      hoverTranslate: "hover:translate-y-2"
    },
    {
      value: "8",
      signal: "",
      description: "ANOS DE EXPERIÊNCIA",
      delay: 400,
      textColor: "text-orange-400",
      hoverTranslate: "hover:-translate-y-2"
    },
    {
      value: "98",
      signal: "%",
      description: "SATISFAÇÃO",
      delay: 600,
      textColor: "text-white",
      hoverTranslate: "hover:translate-y-2"
    },
  ]
  return (
    <section className="py-16 relative bg-black/50">
      <div className="container mx-auto relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {infos.map((info, index) => (
            <ScrollReveal key={index} delay={info.delay} className="group">
              <div className={`text-center ${info.hoverTranslate} p-6 border border-white/5 hover:bg-orange-500/5 transition-all delay-150 duration-500 shadow-2xl shadow-orange-500/5 hover:shadow-orange-500/10 hover:border-orange-500/20`}>
                <div className={`text-4xl md:text-5xl font-bold mb-2 ${info.textColor}`}>
                  <span className="counter" data-target="500">
                    {info.value}
                  </span>
                  {info.signal}
                </div>
                <div className="text-sm text-gray-400">{info.description}</div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
