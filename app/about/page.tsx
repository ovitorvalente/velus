"use client"
import { motion } from "framer-motion";
import { Target, Rocket, Gem } from "lucide-react";
import Image from "next/image";

export default function AboutPage() {
  const teamMembers = [
    {
      name: "João Silva",
      role: "Fundador & CEO",
      description: "Especialista em estratégias digitais com mais de 10 anos de experiência em transformação tecnológica.",
      image: "/joao-silva.jpg"
    },
    {
      name: "Maria Souza",
      role: "Diretora de Tecnologia",
      description: "Engenheira de software com expertise em desenvolvimento web e soluções inovadoras.",
      image: "/maria-souza.jpg"
    },
    {
      name: "Pedro Santos",
      role: "Diretor de Marketing",
      description: "Especialista em marketing digital e estratégias de crescimento para empresas tecnológicas.",
      image: "/pedro-santos.jpg"
    }
  ];

  const companyValues = [
    {
      icon: <Target className="w-8 h-8 text-orange-500" />,
      title: "Foco em Resultados",
      description: "Comprometimento total com o sucesso e crescimento dos nossos clientes."
    },
    {
      icon: <Rocket className="w-8 h-8 text-orange-500" />,
      title: "Inovação Constante",
      description: "Buscamos sempre as soluções mais modernas e eficientes do mercado digital."
    },
    {
      icon: <Gem className="w-8 h-8 text-orange-500" />,
      title: "Excelência",
      description: "Entregamos serviços de alta qualidade com atenção aos mínimos detalhes."
    }
  ];

  return (
    <>
      <div className="fixed inset-0 bg-gradient-to-br from-zinc-100 to-orange-50 -z-10" />
      <section className="flex flex-col items-center w-full min-h-screen px-4 sm:px-6 lg:px-8 mt-24">
        <motion.div

          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.8 }}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0, }}
          transition={{ duration: 0.9 }}
          className="flex w-full max-w-7xl bg-gradient-to-tl from-transparent via-orange-500/50 to-transparent p-12 rounded-3xl mt-12"
        >
          <div className="flex flex-col w-full sm:mt-16 md:mt-20 lg:mt-24 gap-6 sm:gap-8 items-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-5xl text-center sm:text-5xl md:text-6xl lg:text-7xl font-bold text-foreground leading-10 max-w-4xl">
                Inovação Digital ao Seu Alcance
              </h1>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-3xl font-bold text-center text-orange-950 mt-8"
            >
              Transformando Ideias em Realidade
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-base sm:text-lg md:text-xl text-foreground opacity-80 max-w-2xl text-center"
            >
              Somos uma empresa de tecnologia dedicada a impulsionar o sucesso digital de nossos clientes, combinando criatividade, inovação e expertise técnica.
            </motion.p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="w-full max-w-7xl mt-16 sm:mt-20 md:mt-24 lg:mt-32 mb-16 z-50"
        >
          <h2 className="text-3xl font-bold text-center mb-12 text-orange-950">Nossos Valores</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {companyValues.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.9 + index * 0.1 }}
                className="bg-foreground/5 backdrop-blur-3xl p-6 rounded-3xl hover:ring-2 hover:ring-orange-500 transition-all delay-75 duration-300 group"
              >
                <div className="w-16 h-16 rounded-xl flex items-center justify-center mb-4 bg-orange-500/10 group-hover:bg-orange-500/30 transition-all duration-1000 delay-75">
                  {value.icon}
                </div>
                <h3 className="text-xl font-bold text-orange-950 mb-2">{value.title}</h3>
                <p className="text-sm text-orange-950/70">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="w-full max-w-7xl mt-16 mb-16"
        >
          <h2 className="text-3xl font-bold text-center mb-12 text-orange-950">Nossa Equipe</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 1.1 + index * 0.1 }}
                className="text-center"
              >
                <div className="mx-auto mb-4 w-40 h-40 rounded-full overflow-hidden border-4 border-orange-500/30">
                  <Image
                    src={member.image}
                    alt={member.name}
                    width={160}
                    height={160}
                    className="object-cover w-full h-full"
                  />
                </div>
                <h3 className="text-xl font-bold text-orange-950">{member.name}</h3>
                <p className="text-orange-950/70 mb-2">{member.role}</p>
                <p className="text-sm text-orange-950/60 max-w-xs mx-auto">{member.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <div className="hidden lg:block absolute right-0 top-0 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl" />
        <div className="hidden lg:block absolute right-48 bottom-24 w-64 h-64 bg-orange-500/5 rounded-full blur-3xl" />
      </section >
    </>
  );
}