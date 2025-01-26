"use client"
import { motion } from "framer-motion";
import { Code, Gem, TrendingUp, Users } from "lucide-react";

export function CardsSession() {
  const cards = [
    {
      icon: <Code className="w-8 h-8 text-orange-500" />,
      title: "Desenvolvimento Web",
      description: "Criamos sites e aplicações web modernas e responsivas que encantam seus usuários."
    },
    {
      icon: <Gem className="w-8 h-8 text-orange-500" />,
      title: "Design UI/UX",
      description: "Interfaces intuitivas e atraentes que proporcionam a melhor experiência para seus clientes."
    },
    {
      icon: <Users className="w-8 h-8 text-orange-500" />,
      title: "Consultoria Digital",
      description: "Orientação estratégica para transformar seu negócio e destacá-lo no mercado digital."
    },
    {
      icon: <TrendingUp className="w-8 h-8 text-orange-500" />,
      title: "Marketing Digital",
      description: "Estratégias eficientes para aumentar sua presença online e converter mais clientes."
    }
  ];

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.8 }}
        className="w-full max-w-7xl mt-16 sm:mt-20 md:mt-24 lg:mt-32 mb-16 z-40 px-4 sm:px-6 lg:px-8"
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {cards.map((card, index) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.9 + index * 0.1 }}
              className="bg-gradient-to-tl from-transparent via-foreground/5 to-transparent backdrop-blur-3xl p-4 sm:p-6 rounded-3xl hover:ring-2 hover:ring-orange-500 transition-all delay-75 duration-700 group"
            >
              <div className="w-12 sm:w-16 h-12 sm:h-16 rounded-xl flex items-center justify-center mb-4 bg-orange-500/10 group-hover:bg-orange-500/30 transition-all duration-1000 delay-75">
                {card.icon}
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-orange-950 mb-2">{card.title}</h3>
              <p className="text-sm sm:text-base text-orange-950/70">{card.description}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </>
  )
}