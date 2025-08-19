"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Rocket, Compass } from "lucide-react";
import Link from "next/link";
import {
  VALORES_VELUS,
  DIFERENCIAIS,
  ESTATISTICAS,
  EQUIPE_VELUS,
} from "@/data/sobre.data";

// Componente do Badge do Header
function BadgeHeader() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 0.2, duration: 0.3 }}
      className="mb-4 inline-flex items-center rounded-full bg-gradient-to-r from-blue-100 to-transparent p-2 text-blue-700"
    >
      <motion.span
        className="text-xs font-medium sm:text-sm"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.5 }}
      >
        ✨ Nossa História
      </motion.span>
    </motion.div>
  );
}

// Componente do Título Principal
function TituloPrincipal() {
  return (
    <motion.h2
      className="mb-4 text-2xl font-bold leading-tight text-gray-900 sm:text-3xl lg:text-4xl"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.4, duration: 0.6, ease: "easeOut" }}
    >
      Por que a{" "}
      <motion.span
        className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
        whileHover={{
          backgroundPosition: "100% 0%",
          transition: { duration: 0.3 },
        }}
      >
        Velus
      </motion.span>{" "}
      é diferente?
    </motion.h2>
  );
}

// Componente da Descrição Principal
function DescricaoPrincipal() {
  return (
    <motion.p
      className="text-base leading-relaxed text-gray-600 sm:text-lg"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.5, duration: 0.6, ease: "easeOut" }}
    >
      Inspirada na lendária busca pelo velocino de ouro, a Velus representa a
      jornada em busca da excelência digital. Como os argonautas que navegaram
      pelos mares desconhecidos, nós navegamos pelo universo da tecnologia para
      entregar soluções extraordinárias.
    </motion.p>
  );
}

// Componente do Botão CTA
function BotaoCTA() {
  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 0.6, duration: 0.6, ease: "easeOut" }}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <Link
        href="#contato"
        className="group inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-blue-600 px-4 py-3 font-semibold text-white shadow-lg transition-all duration-300 hover:scale-105 hover:bg-blue-700 hover:shadow-xl sm:w-auto sm:px-6"
      >
        Fale conosco
        <motion.div
          animate={{ x: [0, 3, 0] }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <Rocket className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
        </motion.div>
      </Link>
    </motion.div>
  );
}

// Componente do Header da Seção
function CabecalhoSecao() {
  return (
    <div className="mb-16 flex flex-col gap-8 sm:mb-20 sm:flex-row sm:items-center sm:justify-between">
      <div className="max-w-3xl">
        <BadgeHeader />
        <TituloPrincipal />
        <DescricaoPrincipal />
      </div>
      <BotaoCTA />
    </div>
  );
}

// Componente dos Valores
function SecaoValores() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.6, duration: 0.6, ease: "easeOut" }}
      className="mb-24"
    >
      <motion.h3
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.7, duration: 0.6, ease: "easeOut" }}
        className="mb-16 text-center text-2xl font-bold text-gray-900 sm:text-3xl"
      >
        Nossos Pilares
      </motion.h3>

      <div className="mx-auto max-w-6xl">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {VALORES_VELUS.map((valor, index) => (
            <motion.div
              key={valor.id}
              initial={{ opacity: 0, y: 30, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{
                duration: 0.5,
                ease: "easeOut",
                delay: 0.8 + index * 0.1,
              }}
              whileHover={{
                y: -8,
                scale: 1.02,
                rotate: 1,
                transition: { duration: 0.2, ease: "easeOut" },
              }}
              className="group relative cursor-pointer rounded-2xl border border-gray-200/60 bg-white p-6 shadow-sm transition-all duration-300 hover:border-gray-300/80 hover:shadow-2xl sm:p-8"
            >
              {/* Ícone com gradiente */}
              <motion.div
                className={`relative z-10 mb-4 inline-flex size-16 items-center justify-center rounded-2xl shadow-lg sm:mb-6`}
                style={{
                  background: `linear-gradient(to right, ${
                    valor.color === "from-blue-500 to-blue-600"
                      ? "#3b82f6, #2563eb"
                      : valor.color === "from-purple-500 to-purple-600"
                        ? "#8b5cf6, #7c3aed"
                        : valor.color === "from-indigo-500 to-indigo-600"
                          ? "#6366f1, #4f46e5"
                          : "#3b82f6, #2563eb"
                  })`,
                }}
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ duration: 0.3 }}
              >
                <valor.icon className="size-8 text-white" />
              </motion.div>

              <h4 className="mb-3 text-lg font-semibold text-gray-900 sm:mb-4 sm:text-xl">
                {valor.title}
              </h4>
              <p className="text-sm leading-relaxed text-gray-600 sm:text-base">
                {valor.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

// Componente dos Diferenciais
function SecaoDiferenciais() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.9, duration: 0.6, ease: "easeOut" }}
      className="mb-24"
    >
      <motion.h3
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.0, duration: 0.6, ease: "easeOut" }}
        className="mb-16 text-center text-2xl font-bold text-gray-900 sm:text-3xl"
      >
        Por Que Escolher a Velus?
      </motion.h3>

      <div className="mx-auto max-w-7xl">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {DIFERENCIAIS.map((diferencial, index) => (
            <motion.div
              key={diferencial.id}
              initial={{ opacity: 0, y: 30, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{
                duration: 0.5,
                ease: "easeOut",
                delay: 1.1 + index * 0.1,
              }}
              whileHover={{
                y: -8,
                scale: 1.02,
                rotate: 1,
                transition: { duration: 0.2, ease: "easeOut" },
              }}
              className="group relative cursor-pointer rounded-2xl border border-gray-200/60 bg-white p-5 shadow-sm transition-all duration-300 hover:border-gray-300/80 hover:shadow-2xl sm:p-6"
            >
              <motion.div
                className={`relative z-10 mx-auto mb-4 inline-flex h-14 w-14 items-center justify-center rounded-2xl shadow-lg sm:mb-5`}
                style={{
                  background: `linear-gradient(to right, ${
                    diferencial.color === "from-yellow-500 to-orange-500"
                      ? "#eab308, #f97316"
                      : diferencial.color === "from-green-500 to-emerald-500"
                        ? "#22c55e, #10b981"
                        : diferencial.color === "from-pink-500 to-rose-500"
                          ? "#ec4899, #f43f5e"
                          : diferencial.color === "from-blue-600 to-purple-600"
                            ? "#2563eb, #7c3aed"
                            : "#3b82f6, #2563eb"
                  })`,
                }}
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ duration: 0.3 }}
              >
                <diferencial.icon className="h-7 w-7 text-white" />
              </motion.div>

              <h4 className="mb-3 text-base font-semibold text-gray-900 sm:mb-4 sm:text-lg">
                {diferencial.title}
              </h4>
              <p className="text-sm leading-relaxed text-gray-600">
                {diferencial.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

// Componente das Estatísticas
function SecaoEstatisticas() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1.2, duration: 0.6, ease: "easeOut" }}
      className="mb-24"
    >
      <motion.h3
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.3, duration: 0.6, ease: "easeOut" }}
        className="mb-16 text-center text-2xl font-bold text-gray-900 sm:text-3xl"
      >
        Números que Falam por Si
      </motion.h3>

      <div className="mx-auto max-w-7xl">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {ESTATISTICAS.map((estatistica, index) => (
            <motion.div
              key={estatistica.id}
              initial={{ opacity: 0, y: 30, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{
                duration: 0.5,
                ease: "easeOut",
                delay: 1.4 + index * 0.1,
              }}
              whileHover={{
                y: -8,
                scale: 1.02,
                rotate: 1,
                transition: { duration: 0.2, ease: "easeOut" },
              }}
              className="group relative cursor-pointer rounded-2xl border border-gray-200/60 bg-white p-6 text-center shadow-sm transition-all duration-300 hover:border-gray-300/80 hover:shadow-2xl sm:p-8"
            >
              <motion.div
                className={`relative z-10 mx-auto mb-5 inline-flex h-20 w-20 items-center justify-center rounded-2xl shadow-lg`}
                style={{
                  background: `linear-gradient(to right, ${
                    estatistica.color === "from-blue-500 to-blue-600"
                      ? "#3b82f6, #2563eb"
                      : estatistica.color === "from-purple-500 to-purple-600"
                        ? "#8b5cf6, #7c3aed"
                        : estatistica.color === "from-green-500 to-emerald-500"
                          ? "#22c55e, #10b981"
                          : estatistica.color === "from-orange-500 to-red-500"
                            ? "#f97316, #ef4444"
                            : "#3b82f6, #2563eb"
                  })`,
                }}
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ duration: 0.3 }}
              >
                <estatistica.icon className="h-10 w-10 text-white" />
              </motion.div>

              <motion.div
                initial={{ scale: 0.8 }}
                animate={{ scale: 1 }}
                transition={{ delay: 1.6 + index * 0.1, duration: 0.5 }}
                className="mb-3 text-4xl font-bold text-gray-900 sm:text-5xl"
              >
                {estatistica.title}
              </motion.div>

              <h4 className="mb-3 text-lg font-semibold text-gray-800 sm:text-xl">
                {estatistica.subtitle}
              </h4>
              <p className="text-sm leading-relaxed text-gray-600 sm:text-base">
                {estatistica.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

// Componente da Equipe
function SecaoEquipe() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1.5, duration: 0.6, ease: "easeOut" }}
      className="mb-24"
    >
      <motion.h3
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.6, duration: 0.6, ease: "easeOut" }}
        className="mb-16 text-center text-2xl font-bold text-gray-900 sm:text-3xl"
      >
        Nossa Equipe de Heróis
      </motion.h3>

      <div className="mx-auto max-w-6xl">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {EQUIPE_VELUS.map((membro, index) => (
            <motion.div
              key={membro.id}
              initial={{ opacity: 0, y: 30, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{
                duration: 0.5,
                ease: "easeOut",
                delay: 1.7 + index * 0.1,
              }}
              whileHover={{
                y: -8,
                scale: 1.02,
                rotate: 1,
                transition: { duration: 0.2, ease: "easeOut" },
              }}
              className="group relative cursor-pointer rounded-2xl border border-gray-200/60 bg-white p-5 text-center shadow-sm transition-all duration-300 hover:border-gray-300/80 hover:shadow-2xl sm:p-6"
            >
              <motion.div
                className={`relative z-10 mx-auto mb-4 inline-flex size-16 items-center justify-center rounded-2xl shadow-lg sm:mb-5`}
                style={{
                  background: `linear-gradient(to right, ${
                    membro.color === "from-pink-500 to-rose-500"
                      ? "#ec4899, #f43f5e"
                      : membro.color === "from-blue-500 to-indigo-500"
                        ? "#3b82f6, #6366f1"
                        : membro.color === "from-purple-500 to-pink-500"
                          ? "#8b5cf6, #ec4899"
                          : membro.color === "from-emerald-500 to-teal-500"
                            ? "#10b981, #14b8a6"
                            : "#3b82f6, #2563eb"
                  })`,
                }}
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ duration: 0.3 }}
              >
                <membro.icon className="h-8 w-8 text-white" />
              </motion.div>

              <h4 className="mb-3 text-lg font-semibold text-gray-900 sm:mb-4">
                {membro.title}
              </h4>
              <p className="text-sm leading-relaxed text-gray-600">
                {membro.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

// Componente da História Expandida
function SecaoHistoria() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1.8, duration: 0.6, ease: "easeOut" }}
      className="mb-24"
    >
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.9, duration: 0.6, ease: "easeOut" }}
          className="rounded-3xl border border-gray-200 bg-white p-8 shadow-sm transition-all duration-300 hover:shadow-xl sm:p-12 lg:p-16"
        >
          <motion.h3
            className="mb-12 text-center text-2xl font-bold text-gray-900 sm:text-3xl lg:text-4xl"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 2.0, duration: 0.5 }}
          >
            A Lenda da Velus: Uma Jornada Épica
          </motion.h3>

          <div className="space-y-10 leading-relaxed text-gray-600 lg:space-y-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 2.1, duration: 0.6 }}
              className="relative"
            >
              <div className="absolute left-0 top-0 h-full w-1 rounded-full bg-gradient-to-b from-blue-500 to-purple-500"></div>
              <div className="ml-8">
                <h4 className="mb-4 text-lg font-semibold text-gray-900 sm:text-xl">
                  🏛️ A Origem Mitológica
                </h4>
                <p className="text-base sm:text-lg">
                  Assim como Jasão e os argonautas navegaram pelos mares
                  desconhecidos em busca do velocino de ouro, a Velus navega
                  pelo universo da tecnologia em busca da excelência digital.
                  Nossa missão é tão nobre quanto a dos heróis gregos:
                  conquistar o impossível através da dedicação, coragem e
                  sabedoria.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 2.2, duration: 0.6 }}
              className="relative"
            >
              <div className="absolute right-0 top-0 h-full w-1 rounded-full bg-gradient-to-b from-purple-500 to-pink-500"></div>
              <div className="mr-8 text-right">
                <h4 className="mb-4 text-lg font-semibold text-gray-900 sm:text-xl">
                  🚀 A Jornada de Inovação
                </h4>
                <p className="text-base sm:text-lg">
                  Nossa jornada começou com um sonho audacioso: criar soluções
                  digitais que não apenas atendessem às necessidades dos
                  clientes, mas que superassem suas expectativas e os levassem a
                  novos patamares de sucesso. Como o velocino que voava pelos
                  céus, nossas soluções transcendem os limites convencionais.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 2.3, duration: 0.6 }}
              className="relative"
            >
              <div className="absolute left-0 top-0 h-full w-1 rounded-full bg-gradient-to-b from-pink-500 to-orange-500"></div>
              <div className="ml-8">
                <h4 className="mb-4 text-lg font-semibold text-gray-900 sm:text-xl">
                  ⚡ O Poder da Tecnologia
                </h4>
                <p className="text-base sm:text-lg">
                  Hoje, somos reconhecidos pela qualidade excepcional de nossos
                  projetos, pela inovação constante em nossas soluções e pelo
                  compromisso inabalável com o sucesso de nossos clientes. Nossa
                  equipe de especialistas trabalha com a mesma determinação dos
                  argonautas, enfrentando cada desafio como uma nova aventura.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 2.4, duration: 0.6 }}
              className="relative"
            >
              <div className="absolute right-0 top-0 h-full w-1 rounded-full bg-gradient-to-b from-orange-500 to-yellow-500"></div>
              <div className="mr-8 text-right">
                <h4 className="mb-4 text-lg font-semibold text-gray-900 sm:text-xl">
                  🏆 O Legado da Excelência
                </h4>
                <p className="text-base sm:text-lg">
                  Cada projeto é uma nova missão, cada cliente um novo
                  companheiro de jornada. A Velus não apenas desenvolve soluções
                  digitais - criamos experiências que transformam vidas e
                  negócios. Nossa lenda continua sendo escrita a cada projeto
                  bem-sucedido, a cada cliente satisfeito, a cada inovação
                  implementada.
                </p>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}

// Componente do CTA Final
function CTASecao() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ delay: 2.5, duration: 0.6, ease: "easeOut" }}
      className="mx-auto max-w-5xl p-8 text-center sm:p-12 lg:p-16"
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2.6, duration: 0.6, ease: "easeOut" }}
        className="relative z-10"
      >
        {/* Badge decorativo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 2.7, duration: 0.5 }}
          className="mx-auto mb-6 inline-flex items-center rounded-full bg-gradient-to-r from-transparent to-blue-100 px-4 py-2 text-sm font-medium text-blue-700"
        >
          🚀 Próximo Passo
        </motion.div>

        <motion.h3
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2.8, duration: 0.6, ease: "easeOut" }}
          className="mb-8 text-2xl font-bold text-gray-900 sm:text-3xl lg:text-4xl"
        >
          Pronto para Embarcar na{" "}
          <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Jornada?
          </span>
        </motion.h3>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2.9, duration: 0.6, ease: "easeOut" }}
          className="mx-auto mb-10 max-w-3xl text-lg leading-relaxed text-gray-600 sm:text-xl lg:text-2xl"
        >
          Junte-se aos heróis da transformação digital e descubra como a Velus
          pode transformar sua visão em realidade extraordinária.
        </motion.p>

        {/* Estatísticas rápidas */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 3.0, duration: 0.6, ease: "easeOut" }}
          className="mb-10 flex flex-wrap justify-center gap-6 text-center"
        >
          <div className="flex flex-col items-center">
            <div className="text-2xl font-bold text-blue-600">500+</div>
            <div className="text-sm text-gray-600">Projetos Entregues</div>
          </div>
          <div className="flex flex-col items-center">
            <div className="text-2xl font-bold text-purple-600">98%</div>
            <div className="text-sm text-gray-600">Taxa de Sucesso</div>
          </div>
          <div className="flex flex-col items-center">
            <div className="text-2xl font-bold text-indigo-600">24/7</div>
            <div className="text-sm text-gray-600">Suporte Contínuo</div>
          </div>
        </motion.div>

        <motion.div
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="flex flex-col gap-6 sm:flex-row sm:justify-center"
        >
          <Link href="#contato">
            <Button
              size="lg"
              className="group relative h-auto overflow-hidden rounded-2xl bg-gradient-to-r from-blue-600 to-purple-600 px-8 py-4 text-base font-semibold text-white shadow-lg transition-all duration-300 hover:scale-105 hover:from-blue-700 hover:to-purple-700 hover:shadow-xl sm:px-10 sm:py-5 sm:text-lg"
            >
              {/* Efeito de brilho */}
              <motion.div
                className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent"
                animate={{ x: ["100%", "100%"] }}
                transition={{ duration: 3, repeat: Infinity, delay: 1 }}
              />

              <span className="relative flex items-center gap-2">
                Começar Jornada
                <motion.div
                  animate={{ x: [0, 3, 0] }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                >
                  <Rocket className="size-5" />
                </motion.div>
              </span>
            </Button>
          </Link>

          <Link href="#processo">
            <Button
              size="lg"
              variant="outline"
              className="group relative h-auto overflow-hidden rounded-2xl border-2 border-gray-300 bg-white px-8 py-4 text-base font-semibold text-gray-700 transition-all duration-300 hover:scale-105 hover:border-blue-400 hover:bg-blue-50 hover:text-blue-700 sm:px-10 sm:py-5 sm:text-lg"
            >
              <span className="relative flex items-center gap-2">
                Conhecer Processo
                <motion.div
                  animate={{ x: [0, 2, 0] }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                >
                  <Compass className="size-5" />
                </motion.div>
              </span>
            </Button>
          </Link>
        </motion.div>

        {/* Texto adicional */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 3.2, duration: 0.6 }}
          className="mt-8 text-sm text-gray-500"
        >
          ✨ Primeira consulta gratuita • Sem compromisso • Resposta em 24h
        </motion.p>
      </motion.div>
    </motion.div>
  );
}

// Componente principal da seção
export function SobreSection() {
  return (
    <section id="sobre" className="bg-gray-50 py-8 sm:py-16 lg:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header da Seção */}
        <CabecalhoSecao />

        {/* Seção dos Valores */}
        <SecaoValores />

        {/* Seção dos Diferenciais */}
        <SecaoDiferenciais />

        {/* Seção das Estatísticas */}
        <SecaoEstatisticas />

        {/* Seção da Equipe */}
        <SecaoEquipe />

        {/* Seção da História Expandida */}
        <SecaoHistoria />

        {/* CTA Final */}
        <CTASecao />
      </div>
    </section>
  );
}
