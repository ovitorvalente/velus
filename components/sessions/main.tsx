"use client"
import { AnimatePresence, motion } from "framer-motion";
import { useState, useEffect } from "react";
import { ArrowRight, Sparkles, Rocket, Target, LucideArrowUpRight } from "lucide-react";
import Link from "next/link";
import { Button } from "../ui/button";

export function MainSession() {
  const TextChanger = () => {
    const words = [
      "digital!",
      "inovador!",
      "tecnológico!",
      "criativo!",
      "inteligente!",
      "transformador!",
      "estratégico!",
      "personalizado!"
    ];
    const [currentWord, setCurrentWord] = useState(0);

    useEffect(() => {
      const interval = setInterval(() => {
        setCurrentWord((prevWord) => (prevWord + 1) % words.length);
      }, 3000);
      return () => clearInterval(interval);
    }, [words.length]);

    return (
      <AnimatePresence mode="wait">
        <motion.span
          key={words[currentWord]}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="font-bold text-white bg-orange-500 rounded-full px-4 sm:px-6 py-0.5"
        >
          {words[currentWord]}
        </motion.span>
      </AnimatePresence>
    );
  };

  const features = [
    { icon: <Sparkles className="w-5 h-5 text-orange-500" />, text: "Soluções Inovadoras" },
    { icon: <Target className="w-5 h-5 text-orange-500" />, text: "Resultados Comprovados" },
    { icon: <Rocket className="w-5 h-5 text-orange-500" />, text: "Crescimento Efetivo" },
  ];

  return (
    <>
      <section className="flex flex-col items-center w-full h-full mt-24 px-4 sm:px-6 lg:px-8">
        <div className="flex w-full max-w-7xl">
          <div className="flex flex-col w-full mt-12 sm:mt-16 md:mt-20 lg:mt-24 gap-6 sm:gap-8 z-10 items-center text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-foreground leading-tight sm:leading-relaxed max-w-4xl">
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

            <div className="flex flex-wrap justify-center gap-4 sm:gap-6">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.text}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                  className="flex items-center gap-2 text-orange-950 text-sm sm:text-base"
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
              className="flex flex-col sm:flex-row items-center justify-center gap-4 bg-orange-100/50 p-1 sm:p-2 rounded-full shadow-2xl shadow-orange-100"
            >
              <Link
                target="_blank"
                href="https://cal.com/velus"
                className="group border py-1 pr-1 pl-4 gap-2 flex items-center justify-center rounded-full bg-orange-500 text-background font-bold hover:translate-x-4 transition-all delay-75 duration-500"
              >
                Converse com os fundadores
                <Button size={"icon"} className="rounded-full">
                  <LucideArrowUpRight className="group-hover:rotate-12 transition-all delay-75 duration-700" />
                </Button>
              </Link>
              <Link
                href={"/"}
                className="group bg-transparent text-orange-950 font-bold flex items-center justify-center px-4"
              >
                Conheça nossos serviços
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
          </div>
        </div>
        <div className="hidden lg:block absolute right-0 top-0 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl backdrop-blur-3xl -z-50" />
        <div className="hidden lg:block absolute right-48 bottom-24 w-64 h-64 bg-orange-500/5 rounded-full blur-3xl -z-50" />
      </section>
    </>
  );
}