"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import {
  Target,
  ChevronDown,
  Plus,
  Calculator,
  Lock,
  Brain,
  Star,
  Zap,
  Rocket,
  Shield,
  Award,
} from "lucide-react";
import Link from "next/link";
import React from "react";

// Componente de Grid de Fundo Sutil
function GridFundo() {
  return (
    <div className="pointer-events-none absolute inset-0">
      <div
        className="h-full w-full opacity-10"
        style={{
          backgroundImage: `
            linear-gradient(rgba(156, 163, 175, 0.2) 1px, transparent 1px),
            linear-gradient(90deg, rgba(156, 163, 175, 0.2) 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px",
        }}
      />
      {/* Plus signs nos cruzamentos estratégicos */}
      {Array.from({ length: 12 }, (_, i) => (
        <motion.div
          key={i}
          className="absolute text-xs text-gray-300"
          style={{
            left: `${(i * 8) % 100}%`,
            top: `${(i * 10) % 100}%`,
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: i * 0.1 }}
        >
          +
        </motion.div>
      ))}
    </div>
  );
}

// Hook para obter cor de fundo baseada no horário de Brasília
function useBackgroundColor() {
  const [backgroundColor, setBackgroundColor] = React.useState("bg-black");
  const [textColor, setTextColor] = React.useState("text-amber-50");
  const [accentColor, setAccentColor] = React.useState(
    "from-amber-400 to-orange-500",
  );

  React.useEffect(() => {
    const updateBackgroundColor = () => {
      // Horário de Brasília (UTC-3)
      const now = new Date();
      const brasiliaTime = new Date(now.getTime() + 3 * 60 * 60 * 1000); // UTC+3 para compensar o UTC-3
      const hour = brasiliaTime.getHours();

      let bgColor, txtColor, accColor;

      if (hour >= 6 && hour < 12) {
        // Manhã: 6h às 11h59 - Preto com toque dourado
        bgColor = "bg-black";
        txtColor = "text-amber-50";
        accColor = "from-amber-400 to-orange-500";
      } else if (hour >= 12 && hour < 18) {
        // Tarde: 12h às 17h59 - Preto com toque dourado
        bgColor = "bg-black";
        txtColor = "text-amber-50";
        accColor = "from-yellow-400 to-amber-500";
      } else {
        // Noite: 18h às 5h59 - Preto com toque dourado
        bgColor = "bg-black";
        txtColor = "text-amber-50";
        accColor = "from-orange-400 to-red-500";
      }

      setBackgroundColor(bgColor);
      setTextColor(txtColor);
      setAccentColor(accColor);
    };

    // Atualiza imediatamente
    updateBackgroundColor();

    // Atualiza a cada minuto
    const interval = setInterval(updateBackgroundColor, 60000);

    return () => clearInterval(interval);
  }, []);

  return { backgroundColor, textColor, accentColor };
}

// Componente de Elementos Flutuantes Laterais
function ElementosFlutuantes() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {/* Elementos Flutuantes da Esquerda */}
      <div className="absolute left-8 top-20">
        <motion.div
          className="flex h-20 w-20 items-center justify-center rounded-2xl bg-gradient-to-br from-purple-400/20 to-blue-400/20 backdrop-blur-sm"
          initial={{ opacity: 0, x: -50, rotate: -15 }}
          animate={{ opacity: 1, x: 0, rotate: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
          whileHover={{
            scale: 1.1,
            rotate: 5,
            transition: { duration: 0.3, ease: "easeOut" },
          }}
        >
          <Target className="h-10 w-10 text-purple-600" />
        </motion.div>
      </div>

      <div className="absolute left-16 top-64">
        <motion.div
          className="flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-cyan-400/20 to-blue-400/20 backdrop-blur-sm"
          initial={{ opacity: 0, x: -30, scale: 0.5 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
          whileHover={{
            scale: 1.2,
            transition: { duration: 0.3, ease: "easeOut" },
          }}
        >
          <Zap className="h-8 w-8 text-cyan-600" />
        </motion.div>
      </div>

      <div className="absolute left-12 top-96">
        <motion.div
          className="flex h-24 w-24 items-center justify-center rounded-3xl bg-gradient-to-br from-orange-400/20 to-pink-400/20 backdrop-blur-sm"
          initial={{ opacity: 0, x: -40, rotate: 15 }}
          animate={{ opacity: 1, x: 0, rotate: 0 }}
          transition={{ duration: 0.8, delay: 0.7, ease: "easeOut" }}
          whileHover={{
            scale: 1.15,
            rotate: -5,
            transition: { duration: 0.3, ease: "easeOut" },
          }}
        >
          <Rocket className="h-12 w-12 text-orange-600" />
        </motion.div>
      </div>

      {/* Elementos Flutuantes da Direita */}
      <div className="absolute right-8 top-32">
        <motion.div
          className="flex h-24 w-24 items-center justify-center rounded-3xl bg-gradient-to-br from-blue-400/20 to-indigo-400/20 backdrop-blur-sm"
          initial={{ opacity: 0, x: 50, rotate: 15 }}
          animate={{ opacity: 1, x: 0, rotate: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          whileHover={{
            scale: 1.1,
            rotate: -5,
            transition: { duration: 0.3, ease: "easeOut" },
          }}
        >
          <Shield className="h-12 w-12 text-blue-600" />
        </motion.div>
      </div>

      <div className="absolute right-20 top-80">
        <motion.div
          className="flex h-20 w-20 items-center justify-center rounded-2xl bg-gradient-to-br from-green-400/20 to-emerald-400/20 backdrop-blur-sm"
          initial={{ opacity: 0, x: 40, scale: 0.8 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
          whileHover={{
            scale: 1.15,
            transition: { duration: 0.3, ease: "easeOut" },
          }}
        >
          <Award className="h-10 w-10 text-green-600" />
        </motion.div>
      </div>

      <div className="absolute right-12 top-[28rem]">
        <motion.div
          className="flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-pink-400/20 to-purple-400/20 backdrop-blur-sm"
          initial={{ opacity: 0, x: 35, rotate: -10 }}
          animate={{ opacity: 1, x: 0, rotate: 0 }}
          transition={{ duration: 0.8, delay: 0.8, ease: "easeOut" }}
          whileHover={{
            scale: 1.2,
            rotate: 10,
            transition: { duration: 0.3, ease: "easeOut" },
          }}
        >
          <Brain className="h-8 w-8 text-pink-600" />
        </motion.div>
      </div>

      {/* Elementos Flutuantes Centrais Superiores */}
      <div className="absolute left-1/4 top-16">
        <motion.div
          className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-yellow-400/20 to-orange-400/20 backdrop-blur-sm"
          initial={{ opacity: 0, y: -30, scale: 0.7 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.9, ease: "easeOut" }}
          whileHover={{
            scale: 1.1,
            y: -5,
            transition: { duration: 0.3, ease: "easeOut" },
          }}
        >
          <Star className="h-6 w-6 text-yellow-600" />
        </motion.div>
      </div>

      <div className="absolute right-1/4 top-24">
        <motion.div
          className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-indigo-400/20 to-purple-400/20 backdrop-blur-sm"
          initial={{ opacity: 0, y: -25, scale: 0.8 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.8, delay: 1.0, ease: "easeOut" }}
          whileHover={{
            scale: 1.1,
            y: -5,
            transition: { duration: 0.3, ease: "easeOut" },
          }}
        >
          <Lock className="h-7 w-7 text-indigo-600" />
        </motion.div>
      </div>

      {/* Linhas de Conexão Sutil */}
      <svg className="absolute inset-0 h-full w-full">
        <motion.path
          d="M 200 200 Q 400 150 600 200 T 1000 250"
          stroke="url(#connectionGradient)"
          strokeWidth="1"
          fill="none"
          opacity="0.1"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 2, delay: 1.2, ease: "easeOut" }}
        />
        <motion.path
          d="M 150 400 Q 350 350 550 400 T 950 450"
          stroke="url(#connectionGradient)"
          strokeWidth="1"
          fill="none"
          opacity="0.1"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 2, delay: 1.4, ease: "easeOut" }}
        />
        <defs>
          <linearGradient
            id="connectionGradient"
            x1="0%"
            y1="0%"
            x2="100%"
            y2="0%"
          >
            <stop offset="0%" stopColor="#8B5CF6" />
            <stop offset="100%" stopColor="#3B82F6" />
          </linearGradient>
        </defs>
      </svg>

      {/* Partículas Flutuantes Sutis */}
      {Array.from({ length: 8 }, (_, i) => (
        <motion.div
          key={`particle-${i}`}
          className="absolute h-1 w-1 rounded-full bg-gradient-to-r from-indigo-400/40 to-blue-400/40"
          style={{
            left: `${20 + ((i * 10) % 60)}%`,
            top: `${30 + ((i * 15) % 70)}%`,
          }}
          initial={{ opacity: 0, scale: 0 }}
          animate={{
            opacity: [0, 0.6, 0],
            scale: [0, 1, 0],
            y: [0, -20, 0],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            delay: i * 0.4,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
}

// Componente do Hero Principal
function HeroPrincipal() {
  const { backgroundColor, textColor, accentColor } = useBackgroundColor();

  return (
    <div
      className={`relative mt-10 min-h-screen ${backgroundColor} transition-all duration-1000`}
    >
      {/* Grid de fundo sutil */}
      <GridFundo />

      {/* Elementos flutuantes laterais */}
      <ElementosFlutuantes />

      {/* Hero Centralizado na Tela */}
      <div className="relative z-10 flex h-screen items-center justify-center">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Título Principal - Centralizado na tela */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-center"
          >
            <h1
              className={`mb-6 text-4xl font-bold leading-tight ${textColor} sm:text-5xl lg:text-6xl xl:text-7xl`}
            >
              <span className="block">Descubra, Colete e</span>
              <span
                className={`block bg-gradient-to-r ${accentColor} bg-clip-text text-transparent`}
              >
                Transforme
              </span>
              <span className="block">seu Negócio</span>
            </h1>

            <p
              className={`mx-auto mb-16 max-w-3xl text-lg font-medium leading-relaxed ${textColor} opacity-80 sm:text-xl lg:text-2xl`}
            >
              Somos especialistas em criar experiências digitais extraordinárias
              que transformam negócios e inspiram usuários.
            </p>

            {/* CTA Melhorado e Mais Impactante */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
              className="space-y-8"
            >
              {/* Botões CTA principais */}
              <div className="flex flex-col items-center gap-4 sm:flex-row sm:gap-6">
                {/* Botão principal com design premium */}
                <Link href="#processo">
                  <motion.div
                    whileHover={{
                      scale: 1.05,
                      y: -5,
                      transition: { duration: 0.3, ease: "easeOut" },
                    }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Button
                      size="lg"
                      className={`group relative h-auto overflow-hidden rounded-3xl bg-gradient-to-r ${accentColor} hover:shadow-3xl px-12 py-6 text-xl font-bold text-white shadow-2xl transition-all duration-500 hover:shadow-purple-500/30`}
                    >
                      {/* Efeito de brilho interno */}
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

                      {/* Efeito de borda luminosa */}
                      <div
                        className={`absolute inset-0 rounded-3xl bg-gradient-to-r ${accentColor} opacity-0 blur-xl transition-opacity duration-500 group-hover:opacity-30`}
                      />

                      <span className="relative z-10 flex items-center gap-4">
                        <Plus className="h-6 w-6" />
                        QUERO COMEÇAR AGORA!
                        <motion.div
                          animate={{ x: [0, 8, 0] }}
                          transition={{
                            duration: 2,
                            repeat: Infinity,
                            ease: "easeInOut",
                          }}
                          className="relative"
                        >
                          <Rocket className="h-6 w-6" />
                        </motion.div>
                      </span>
                    </Button>
                  </motion.div>
                </Link>

                {/* Botão secundário elegante */}
                <Link href="#sobre">
                  <motion.div
                    whileHover={{
                      scale: 1.05,
                      y: -5,
                      transition: { duration: 0.3, ease: "easeOut" },
                    }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Button
                      size="lg"
                      variant="outline"
                      className="group relative h-auto overflow-hidden rounded-3xl border-2 border-white/30 bg-white/10 px-10 py-6 text-xl font-semibold text-white backdrop-blur-sm transition-all duration-500 hover:border-white/50 hover:bg-white/20 hover:shadow-2xl hover:shadow-white/20"
                    >
                      {/* Efeito de brilho interno */}
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

                      <span className="relative z-10 flex items-center gap-4">
                        <Calculator className="h-6 w-6" />
                        VER DEMO GRATUITO
                        <motion.div
                          whileHover={{ rotate: 180 }}
                          transition={{ duration: 0.6, ease: "easeOut" }}
                        >
                          <Star className="h-6 w-6" />
                        </motion.div>
                      </span>
                    </Button>
                  </motion.div>
                </Link>
              </div>

              {/* CTA adicional com destaque visual */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
                className="mx-auto max-w-2xl"
              >
                <div className="group relative cursor-pointer rounded-2xl border border-white/20 bg-white/5 p-6 backdrop-blur-sm transition-all duration-300 hover:border-white/30 hover:bg-white/10 hover:shadow-2xl hover:shadow-white/10">
                  <div className="flex items-center justify-center gap-4">
                    <motion.div
                      animate={{ rotate: [0, 360] }}
                      transition={{
                        duration: 8,
                        repeat: Infinity,
                        ease: "linear",
                      }}
                      className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-r from-purple-500 to-pink-500 p-1"
                    >
                      <div className="flex h-full w-full items-center justify-center rounded-full bg-white">
                        <Target className="h-6 w-6 text-purple-600" />
                      </div>
                    </motion.div>

                    <div className="text-center">
                      <p className={`text-lg font-semibold ${textColor}`}>
                        🚀 TRANSFORME SEU NEGÓCIO EM 30 DIAS
                      </p>
                      <p className={`text-sm ${textColor} opacity-70`}>
                        GARANTIMOS RESULTADOS OU SEU DINHEIRO DE VOLTA
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Seta para baixo */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 1.5, ease: "easeOut" }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 transform"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown className="h-8 w-8 text-gray-400" />
        </motion.div>
      </motion.div>
    </div>
  );
}

// Componente principal da seção Home
export function HomeSection() {
  return (
    <>
      <HeroPrincipal />
    </>
  );
}
