import { ScrollReveal } from "@/components/scroll-reveal";

export function ProcessSection() {
  const list = [
    {
      count: "01",
      title: "Descoberta",
      description:
        "Entendemos suas necessidades, objetivos e público-alvo para criar uma estratégia personalizada.",
      delay: 300,
      style: "text-orange-400",
    },
    {
      count: "02",
      title: "Design",
      description:
        "Criamos conceitos visuais e protótipos que alinham-se com sua identidade e objetivos.",
      delay: 500,
      style: "text-white",
    },
    {
      count: "03",
      title: "Desenvolvimento",
      description:
        "Transformamos os designs em código, construindo soluções robustas e escaláveis.",
      delay: 700,
      style: "text-orange-400",
    },
    {
      count: "04",
      title: "Lançamento",
      description:
        "Implementamos, testamos e otimizamos para garantir um produto final perfeito.",
      delay: 900,
      style: "text-white",
    },
  ];
  return (
    <section id="process" className="relative bg-black/50 py-24">
      <div className="container relative z-10 mx-auto">
        <div className="mb-16 flex flex-col justify-between md:flex-row md:items-end">
          <ScrollReveal>
            <div>
              <div className="mb-6 h-1 w-24 bg-orange-500" />
              <h2 className="text-3xl font-bold md:text-5xl">NOSSO PROCESSO</h2>
            </div>
          </ScrollReveal>
          <ScrollReveal delay={200}>
            <p className="mt-4 max-w-md text-gray-400 md:mt-0">
              Uma abordagem estruturada para garantir resultados excepcionais em
              cada projeto.
            </p>
          </ScrollReveal>
        </div>

        <div className="grid gap-6 md:grid-cols-4">
          {list.map((item, index) => (
            <ScrollReveal key={index} delay={item.delay}>
              <div className="relative border border-white/5 p-8 transition-all delay-150 duration-500 hover:border-orange-500/50 hover:bg-orange-500/5 hover:shadow-lg hover:shadow-orange-500/15">
                <div className="mb-4 text-5xl font-bold text-gray-500/30">
                  {item.count}
                </div>
                <h3 className={`mb-2 text-2xl font-bold ${item.style}`}>
                  {item.title}
                </h3>
                <p className="text-gray-400">{item.description}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
