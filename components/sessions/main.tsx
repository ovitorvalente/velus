"use client"
import { Button } from "../ui/button";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { ArrowRight, Sparkles, Rocket, Target, Code, Gem, Users, TrendingUp } from "lucide-react";
import Link from "next/link";

export function Main() {
  const TextChanger = () => {
    const words = ["digital!", "inovador!", "tecnológico!", "criativo!"];
    const [currentWord, setCurrentWord] = useState(0);

    useEffect(() => {
      const interval = setInterval(() => {
        setCurrentWord((prevWord) => (prevWord + 1) % words.length);
      }, 3000);
      return () => clearInterval(interval);
    }, []);

    return (
      <motion.span
        key={words[currentWord]}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="font-bold text-violet-500 bg-violet-200 rounded-full px-6 py-0.5"
      >
        {words[currentWord]}
      </motion.span>
    );
  };

  const features = [
    { icon: <Sparkles className="w-5 h-5" />, text: "Soluções Inovadoras" },
    { icon: <Target className="w-5 h-5" />, text: "Resultados Comprovados" },
    { icon: <Rocket className="w-5 h-5" />, text: "Crescimento Rápido" },
  ];

  const cards = [
    {
      icon: <Code className="w-8 h-8 text-violet-500" />,
      title: "Desenvolvimento Web",
      description: "Criamos sites e aplicações web modernas e responsivas que encantam seus usuários."
    },
    {
      icon: <Gem className="w-8 h-8 text-violet-500" />,
      title: "Design UI/UX",
      description: "Interfaces intuitivas e atraentes que proporcionam a melhor experiência para seus clientes."
    },
    {
      icon: <Users className="w-8 h-8 text-violet-500" />,
      title: "Consultoria Digital",
      description: "Orientação estratégica para transformar seu negócio e destacá-lo no mercado digital."
    },
    {
      icon: <TrendingUp className="w-8 h-8 text-violet-500" />,
      title: "Marketing Digital",
      description: "Estratégias eficientes para aumentar sua presença online e converter mais clientes."
    }
  ];

  return (
    <>
      <div className="fixed inset-0 bg-gradient-to-br from-zinc-100 to-violet-50 -z-10" />
      <section className="flex flex-col items-center w-full min-h-screen px-4 sm:px-6 lg:px-8 mt-24">
        <div className="flex w-full max-w-7xl">
          <div className="flex flex-col w-full mt-12 sm:mt-16 md:mt-20 lg:mt-24 gap-6 sm:gap-8 z-10 items-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-4xl text-center sm:text-5xl md:text-6xl lg:text-7xl font-bold text-foreground leading-10 max-w-4xl">
                Conectando ideias ao sucesso{" "}
                <TextChanger />
              </h1>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-base sm:text-lg md:text-xl text-foreground opacity-80 max-w-2xl"
            >
              Transforme sua visão em soluções digitais inovadoras. Estamos aqui para impulsionar sua jornada no mundo digital com estratégias eficazes e personalizadas para o seu negócio crescer de forma sólida e sustentável.
            </motion.p>

            <div className="flex flex-wrap gap-4 sm:gap-6">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.text}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                  className="flex items-center gap-2 text-foreground text-sm sm:text-base"
                >
                  {feature.icon}
                  <span>{feature.text}</span>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex items-center justify-center gap-2 bg-foreground/5 p-0.5 rounded-full"
            >
              <Link
                target="_blank"

                href="https://cal.com/velus"
                className="border py-2 px-4 flex items-center justify-center rounded-full bg-foreground text-background font-bold hover:translate-x-4 transition-all delay-75 duration-300"
              >
                Converse com os fundadores
              </Link>
              <Link
                href={"/"}
                className="group bg-transparent text-foreground font-bold flex items-center justify-center px-4"
              >
                Conheça nossos serviços
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="w-full max-w-7xl mt-16 sm:mt-20 md:mt-24 lg:mt-32 mb-16"
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {cards.map((card, index) => (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.9 + index * 0.1 }}
                className="bg-foreground/5 backdrop-blur-3xl p-4 sm:p-6 rounded-3xl hover:ring-2 hover:ring-violet-500 transition-all delay-75 duration-300 group"
              >
                <div className="w-12 sm:w-16 h-12 sm:h-16 rounded-xl flex items-center justify-center mb-4 group-hover:bg-violet-500/10 transition-colors duration-300">
                  {card.icon}
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-foreground mb-2">{card.title}</h3>
                <p className="text-sm sm:text-base text-foreground/70">{card.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <div className="hidden lg:block absolute right-0 top-0 w-96 h-96 bg-violet-500/10 rounded-full blur-3xl" />
        <div className="hidden lg:block absolute right-48 bottom-24 w-64 h-64 bg-violet-500/5 rounded-full blur-2xl" />
      </section >
    </>
  );
}