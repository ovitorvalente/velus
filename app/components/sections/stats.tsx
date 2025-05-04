"use client";

import { ScrollReveal } from "@/components/scroll-reveal";
import { animate, motion, useMotionValue, useTransform } from "framer-motion";
import { useEffect, useRef } from "react";

export function StatsSection() {
  const infos = [
    {
      value: 500,
      signal: "+",
      description: "CLIENTES",
      delay: 0,
      textColor: "text-orange-400",
      hoverEffect: "hover:-translate-y-2",
    },
    {
      value: 1200,
      signal: "+",
      description: "PROJETOS",
      delay: 200,
      textColor: "text-white",
      hoverEffect: "hover:translate-y-2",
    },
    {
      value: 8,
      signal: "",
      description: "ANOS DE EXPERIÊNCIA",
      delay: 400,
      textColor: "text-orange-400",
      hoverEffect: "hover:-translate-y-2",
    },
    {
      value: 98,
      signal: "%",
      description: "SATISFAÇÃO",
      delay: 600,
      textColor: "text-white",
      hoverEffect: "hover:translate-y-2",
    },
  ];

  return (
    <section className="relative bg-black/50 py-16">
      <div className="container relative z-10 mx-auto">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          {infos.map((info, index) => (
            <ScrollReveal key={index} delay={info.delay} className="group">
              <StatCard {...info} />
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function StatCard({
  value,
  signal,
  description,
  textColor,
  hoverEffect,
}: {
  value: number;
  signal: string;
  description: string;
  textColor: string;
  hoverEffect: string;
}) {
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.round(latest));
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          animate(count, value, {
            duration: 2,
            ease: "easeOut",
          });
        }
      },
      { threshold: 0.1 },
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [value, count]);

  return (
    <div
      ref={ref}
      className={`text-center ${hoverEffect} border border-white/5 p-6 shadow-2xl shadow-orange-500/5 transition-all delay-150 duration-500 hover:border-orange-500/20 hover:bg-orange-500/5 hover:shadow-orange-500/10`}
    >
      <div className={`mb-2 text-4xl font-bold md:text-5xl ${textColor}`}>
        <motion.span>{rounded}</motion.span>
        {signal}
      </div>
      <div className="text-sm text-gray-400">{description}</div>
    </div>
  );
}
