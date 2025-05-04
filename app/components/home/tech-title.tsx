"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ScrollReveal } from "@/components/scroll-reveal";

export function TechTitle() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const phrases = [
    {
      prefix: "DESIGN",
      suffix: "DIGITAL",
      prefixColor: "text-white",
      suffixColor: "text-orange-500",
    },
    {
      prefix: "UI",
      suffix: "INTELIGENTE",
      prefixColor: "text-blue-300",
      suffixColor: "text-blue-600",
    },
    {
      prefix: "UX",
      suffix: "HUMANIZADO",
      prefixColor: "text-cyan-300",
      suffixColor: "text-cyan-600",
    },
    {
      prefix: "WEB",
      suffix: "RESPONSIVO",
      prefixColor: "text-emerald-300",
      suffixColor: "text-emerald-600",
    },
    {
      prefix: "APP",
      suffix: "NATIVO",
      prefixColor: "text-violet-300",
      suffixColor: "text-violet-600",
    },
    {
      prefix: "TECH",
      suffix: "INOVADOR",
      prefixColor: "text-purple-300",
      suffixColor: "text-purple-600",
    },
    {
      prefix: "CODE",
      suffix: "ESCALÁVEL",
      prefixColor: "text-amber-300",
      suffixColor: "text-amber-600",
    },
    {
      prefix: "DEV",
      suffix: "EFICIENTE",
      prefixColor: "text-lime-300",
      suffixColor: "text-lime-600",
    },
    {
      prefix: "SEO",
      suffix: "OTIMIZADO",
      prefixColor: "text-teal-300",
      suffixColor: "text-teal-600",
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % phrases.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [phrases.length]);

  return (
    <ScrollReveal delay={200}>
      <div className="group relative my-6 whitespace-nowrap">
        <h1 className="inline-flex text-5xl font-bold leading-none tracking-tighter md:text-7xl lg:text-8xl">
          <AnimatePresence mode="wait">
            <motion.span
              key={`prefix-${currentIndex}`}
              initial={{ opacity: 0, x: -20 }}
              animate={{
                opacity: 1,
                x: 0,
                transition: {
                  type: "spring",
                  stiffness: 300,
                  damping: 20,
                },
              }}
              exit={{
                opacity: 0,
                x: 20,
                transition: { duration: 0.2 },
              }}
              className={`mr-2 ${phrases[currentIndex].prefixColor}`}
            >
              {phrases[currentIndex].prefix}
            </motion.span>
          </AnimatePresence>
          <AnimatePresence mode="wait">
            <motion.span
              key={`suffix-${currentIndex}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{
                opacity: 1,
                y: 0,
                transition: {
                  type: "spring",
                  stiffness: 300,
                  damping: 20,
                },
              }}
              exit={{
                opacity: 0,
                y: -20,
                transition: { duration: 0.2 },
              }}
              className={phrases[currentIndex].suffixColor}
            >
              {phrases[currentIndex].suffix}
            </motion.span>
          </AnimatePresence>
        </h1>
      </div>
    </ScrollReveal>
  );
}
