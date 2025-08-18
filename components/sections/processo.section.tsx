"use client";

import { Plus, ChevronRight } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ProcessModal } from "../processo/process-modal";
import { ProcessStep, PROCESS_STEPS } from "@/data/process-steps.data";

// Componente reutilizável para os cards de processo
interface ProcessCardProps {
  step: ProcessStep;
  onCardClick: (step: ProcessStep) => void;
  index: number;
}

// Componente do Card de Processo
function CardProcesso({ step, onCardClick, index }: ProcessCardProps) {
  const { title, description } = step;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30, scale: 0.9 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{
        duration: 0.5,
        ease: "easeOut",
        delay: index * 0.1,
      }}
      whileHover={{
        y: -8,
        scale: 1.02,
        rotate: 1,
        transition: { duration: 0.2, ease: "easeOut" },
      }}
      className="group relative cursor-pointer rounded-2xl border border-foreground bg-white p-4 shadow-sm transition-all duration-300 hover:border-gray-200 hover:shadow-2xl sm:p-6"
      onClick={() => onCardClick(step)}
    >
      {/* Ícone */}
      <IconCard step={step} />

      {/* Título */}
      <TituloCard title={title} />

      {/* Descrição */}
      <DescricaoCard description={description} />

      {/* Botão de Expansão */}
      <BotaoExpansao onCardClick={onCardClick} step={step} />
    </motion.div>
  );
}

// Componente do Ícone do Card
function IconCard({ step }: { step: ProcessStep }) {
  const { icon: Icon } = step;

  return (
    <motion.div className="mb-3 transition-all duration-300 sm:mb-4 md:group-hover:rotate-6 md:group-hover:scale-105">
      <Icon className="size-6 text-gray-800 sm:size-8" />
    </motion.div>
  );
}

// Componente do Título do Card
function TituloCard({ title }: { title: string }) {
  return (
    <motion.h3
      className="mb-2 text-base font-semibold text-gray-900 sm:mb-3 sm:text-lg"
      whileHover={{ color: "#1f2937" }}
      transition={{ duration: 0.2 }}
    >
      {title}
    </motion.h3>
  );
}

// Componente da Descrição do Card
function DescricaoCard({ description }: { description: string }) {
  return (
    <motion.p
      className="mb-3 text-xs leading-relaxed text-gray-600 sm:mb-4 sm:text-sm"
      whileHover={{ color: "#374151" }}
      transition={{ duration: 0.2 }}
    >
      {description}
    </motion.p>
  );
}

// Componente do Botão de Expansão
function BotaoExpansao({
  onCardClick,
  step,
}: {
  onCardClick: (step: ProcessStep) => void;
  step: ProcessStep;
}) {
  return (
    <motion.div
      className="absolute bottom-3 right-3 transition-all duration-300 group-hover:rotate-180 group-hover:scale-105 sm:bottom-4 sm:right-4"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
    >
      <motion.button
        className="flex size-7 items-center justify-center rounded-full bg-gray-800 text-white shadow-lg transition-all duration-300 group-hover:scale-105 group-hover:bg-gray-900 sm:size-8"
        onClick={(e) => {
          e.stopPropagation();
          onCardClick(step);
        }}
        whileHover={{
          backgroundColor: "#111827",
          boxShadow:
            "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
        }}
        transition={{ duration: 0.2 }}
      >
        <Plus className="size-3 sm:size-4" />
      </motion.button>
    </motion.div>
  );
}

// Componente do Badge do Header
function BadgeHeader() {
  return (
    <motion.div
      className="mb-4 inline-flex items-center rounded-full bg-gradient-to-r from-blue-100 to-transparent p-2 text-blue-700"
      transition={{ duration: 0.2 }}
    >
      <motion.span
        className="text-xs font-medium sm:text-sm"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.5 }}
      >
        ✨ Transforme sua visão em realidade
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
      Por que centenas de empresas{" "}
      <motion.span
        className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
        whileHover={{
          backgroundPosition: "100% 0%",
          transition: { duration: 0.3 },
        }}
      >
        escolhem a Velus
      </motion.span>{" "}
      para seus projetos digitais?
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
      Descubra como transformamos ideias em{" "}
      <motion.span
        className="font-bold text-gray-900"
        whileHover={{ color: "#1f2937" }}
        transition={{ duration: 0.2 }}
      >
        resultados extraordinários
      </motion.span>{" "}
      que fazem seu negócio crescer exponencialmente.
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
        <SetaAnimada />
      </Link>
    </motion.div>
  );
}

// Componente da Seta Animada
function SetaAnimada() {
  return (
    <motion.div
      animate={{ x: [0, 3, 0] }}
      transition={{
        duration: 2,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    >
      <ChevronRight className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
    </motion.div>
  );
}

// Componente do Header da Seção
function CabecalhoSecao() {
  return (
    <motion.div
      className="mb-12 flex flex-col gap-6 sm:mb-16 sm:flex-row sm:items-center sm:justify-between"
      variants={variantesCabecalho}
    >
      <div className="max-w-3xl">
        <BadgeHeader />
        <TituloPrincipal />
        <DescricaoPrincipal />
      </div>
      <BotaoCTA />
    </motion.div>
  );
}

// Componente dos Cards do Processo
function CardsProcesso({
  onCardClick,
}: {
  onCardClick: (step: ProcessStep) => void;
}) {
  return (
    <motion.div
      className="grid gap-4 sm:grid-cols-2 sm:gap-6 lg:grid-cols-4"
      variants={variantesContainer}
    >
      {PROCESS_STEPS.map((step, index) => (
        <CardProcesso
          key={step.id}
          step={step}
          index={index}
          onCardClick={onCardClick}
        />
      ))}
    </motion.div>
  );
}

// Variantes de animação para o container
const variantesContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

// Variantes para os elementos do header
const variantesCabecalho = {
  hidden: { opacity: 0, y: -20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

// Componente principal da seção
export function ProcessoSection() {
  const [etapaSelecionada, setEtapaSelecionada] = useState<ProcessStep | null>(
    null,
  );
  const [modalAberto, setModalAberto] = useState(false);

  const aoClicarCard = (step: ProcessStep) => {
    setEtapaSelecionada(step);
    setModalAberto(true);
  };

  const aoFecharModal = () => {
    setModalAberto(false);
    setEtapaSelecionada(null);
  };

  return (
    <motion.section
      id="processo"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={variantesContainer}
      className="m-2 rounded-3xl bg-gray-50 py-4 sm:m-4 sm:py-12"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        {/* Header da Seção */}
        <CabecalhoSecao />

        {/* Cards do Processo */}
        <CardsProcesso onCardClick={aoClicarCard} />

        {/* Modal de Detalhes */}
        <AnimatePresence>
          {modalAberto && (
            <ProcessModal
              step={etapaSelecionada}
              steps={PROCESS_STEPS}
              isOpen={modalAberto}
              onClose={aoFecharModal}
            />
          )}
        </AnimatePresence>
      </div>
    </motion.section>
  );
}
