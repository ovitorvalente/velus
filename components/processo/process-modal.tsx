"use client";

import { useState } from "react";
import { ArrowRightIcon, X } from "lucide-react";
import { motion } from "framer-motion";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { ProcessStep } from "@/data/process-steps.data";

// Componente do Modal de Detalhes
interface ProcessModalProps {
  step: ProcessStep | null;
  steps: ProcessStep[]; // Nova prop para os steps
  isOpen: boolean;
  onClose: () => void;
}

// Componente do Cabeçalho do Modal
function CabecalhoModal({
  etapaAtual,
  totalEtapas,
  dadosEtapaAtual,
  aoFechar,
}: {
  etapaAtual: number;
  totalEtapas: number;
  dadosEtapaAtual: ProcessStep;
  aoFechar: () => void;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      className="group relative border-b border-gray-200 p-4"
    >
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          {/* Ícone da etapa */}
          <motion.div
            initial={{ scale: 0.8, rotate: -10 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-blue-600 to-purple-600 shadow-lg"
          >
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.3 }}
            >
              <dadosEtapaAtual.icon className="h-7 w-7 text-white" />
            </motion.div>
          </motion.div>
          <div>
            <motion.div
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1, duration: 0.3 }}
            >
              <DialogTitle className="text-xs font-medium uppercase tracking-wider text-blue-600">
                Etapa {etapaAtual} de {totalEtapas}
              </DialogTitle>
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2, duration: 0.3 }}
              className="text-lg font-bold leading-tight text-gray-900"
            >
              {dadosEtapaAtual.title}
            </motion.h2>
          </div>
        </div>
        {/* Botão de fechar */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3, duration: 0.3 }}
        >
          <Button
            size={"icon"}
            onClick={aoFechar}
            className="fixed right-4 top-4 flex items-center justify-center rounded-full bg-gray-200 text-gray-600 transition-all duration-300 group-hover:rotate-180 group-hover:bg-gray-300 group-hover:text-gray-800"
          >
            <X className="size-4" />
          </Button>
        </motion.div>
      </div>
    </motion.div>
  );
}

// Componente da Descrição da Etapa
function DescricaoEtapa({
  descricao,
  etapaAtual,
}: {
  descricao: string;
  etapaAtual: number;
}) {
  // Sistema de gradientes dinâmicos por etapa
  const gradientesEtapa = {
    1: "from-blue-100 via-sky-100 to-transparent",
    2: "from-purple-100 via-pink-100 to-transparent",
    3: "from-yellow-100 via-orange-100 to-transparent",
    4: "from-green-100 via-emerald-100 to-transparent",
  };

  const gradienteAtual =
    gradientesEtapa[etapaAtual as keyof typeof gradientesEtapa] ||
    gradientesEtapa[1];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className={`rounded-2xl bg-gradient-to-r ${gradienteAtual} p-4`}
    >
      <p className="text-base leading-relaxed text-gray-800">{descricao}</p>
    </motion.div>
  );
}

// Componente da Seção Visão Geral
function SecaoVisaoGeral({ visaoGeral }: { visaoGeral: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className="group space-y-3"
    >
      <motion.h3
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.1, duration: 0.3 }}
        className="text-lg font-semibold text-gray-900"
      >
        📋 Visão Geral
      </motion.h3>
      <motion.p
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.2, duration: 0.3 }}
        className="rounded-lg bg-gradient-to-r from-blue-50 to-gray-50 p-4 text-sm leading-relaxed text-gray-900"
      >
        {visaoGeral}
      </motion.p>
    </motion.div>
  );
}

// Componente da Seção Por que é Importante
function SecaoPorQueImportante({
  porQueImportante,
}: {
  porQueImportante: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className="space-y-3"
    >
      <motion.h3
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.1, duration: 0.3 }}
        className="border-t border-gray-100 pt-4 text-lg font-semibold text-gray-900"
      >
        🎯 Por que é crucial?
      </motion.h3>
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.2, duration: 0.3 }}
        className="rounded-lg bg-gradient-to-r from-yellow-50 to-orange-50 p-4 shadow-sm"
      >
        <p className="text-sm leading-relaxed text-yellow-950">
          {porQueImportante}
        </p>
      </motion.div>
    </motion.div>
  );
}

// Componente da Seção Informações Rápidas
function SecaoInformacoesRapidas({ duracao }: { duracao: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className="space-y-3"
    >
      <motion.h3
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.1, duration: 0.3 }}
        className="border-t border-gray-100 pt-4 text-lg font-semibold text-gray-900"
      >
        ⚡ Informações Rápidas
      </motion.h3>
      <div className="grid grid-cols-2 gap-3">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2, duration: 0.3 }}
          className="rounded-2xl border border-blue-50 bg-gradient-to-r from-transparent to-blue-100 p-3 text-center"
        >
          <h4 className="mb-1 text-xs font-medium text-blue-600">Duração</h4>
          <span className="text-base font-semibold text-blue-900">
            {duracao}
          </span>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3, duration: 0.3 }}
          className="rounded-2xl border border-green-50 bg-gradient-to-r from-green-100 to-transparent p-3 text-center"
        >
          <h4 className="mb-1 text-xs font-medium text-green-600">Status</h4>
          <span className="text-base font-semibold text-green-900">Ativo</span>
        </motion.div>
      </div>
    </motion.div>
  );
}

// Componente da Seção Benefícios Principais
function SecaoBeneficiosPrincipais({ beneficios }: { beneficios: string[] }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className="space-y-3"
    >
      <motion.h3
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.1, duration: 0.3 }}
        className="border-t border-gray-100 pt-4 text-lg font-semibold text-gray-900"
      >
        ✨ Principais Benefícios
      </motion.h3>
      <div className="space-y-2">
        {beneficios.slice(0, 3).map((beneficio, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 + index * 0.1, duration: 0.3 }}
            className="flex items-center gap-3 rounded-2xl border border-gray-200 bg-gray-50 p-3 shadow-sm"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{
                delay: 0.3 + index * 0.1,
                duration: 0.2,
                type: "spring",
              }}
              className="h-1.5 w-1.5 rounded-full bg-blue-500"
            />
            <span className="text-sm leading-relaxed text-gray-700">
              {beneficio}
            </span>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}

// Componente da Seção Entregas
function SecaoEntregas({ entregas }: { entregas: string[] }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className="space-y-3"
    >
      <motion.h3
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.1, duration: 0.3 }}
        className="border-t border-gray-100 pt-4 text-lg font-semibold text-gray-900"
      >
        📦 Entregas
      </motion.h3>
      <div className="grid grid-cols-2 gap-2">
        {entregas.slice(0, 4).map((entrega, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 + index * 0.05, duration: 0.3 }}
            className="flex items-center gap-2 rounded-2xl border border-gray-200 bg-white p-2.5 shadow-sm"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{
                delay: 0.3 + index * 0.05,
                duration: 0.2,
                type: "spring",
              }}
              className="size-1.5 rounded-full bg-blue-500"
            />
            <span className="text-xs text-gray-700">{entrega}</span>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}

// Componente dos Indicadores de Progresso
function IndicadoresProgresso({
  etapaAtual,
  totalEtapas,
}: {
  etapaAtual: number;
  totalEtapas: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className="flex justify-center space-x-1.5"
    >
      {[...Array(totalEtapas)].map((_, index) => (
        <motion.div
          key={index}
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: index * 0.1, duration: 0.2, type: "spring" }}
          className={cn(
            "size-2 rounded-full transition-all duration-300",
            index + 1 === etapaAtual ? "bg-blue-600" : "bg-gray-300",
          )}
        />
      ))}
    </motion.div>
  );
}

// Componente dos Botões de Navegação
function BotoesNavegacao({
  etapaAtual,
  totalEtapas,
  aoContinuar,
  aoFechar,
}: {
  etapaAtual: number;
  totalEtapas: number;
  aoContinuar: () => void;
  aoFechar: () => void;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className="flex gap-3"
    >
      {/* Botão Fechar - sempre visível */}
      <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
        <Button
          type="button"
          size={"lg"}
          variant={"ghost"}
          onClick={aoFechar}
          className="rounded-2xl border-none bg-transparent text-gray-800 transition-all duration-300 hover:bg-gray-200 hover:text-black"
        >
          Fechar
        </Button>
      </motion.div>

      {/* Botão Próximo ou Entendi baseado na etapa */}
      {etapaAtual < totalEtapas ? (
        <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
          <Button
            size={"lg"}
            className="group rounded-2xl bg-blue-600 text-white hover:bg-blue-700"
            type="button"
            onClick={aoContinuar}
          >
            Próximo
            <motion.div
              animate={{ x: [0, 3, 0] }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <ArrowRightIcon
                className="-me-1 opacity-60 transition-transform group-hover:translate-x-1"
                size={16}
                aria-hidden="true"
              />
            </motion.div>
          </Button>
        </motion.div>
      ) : (
        <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
          <Button
            type="button"
            size={"lg"}
            className="rounded-2xl bg-green-600 text-white hover:bg-green-700"
            onClick={aoFechar}
          >
            Entendi
          </Button>
        </motion.div>
      )}
    </motion.div>
  );
}

// Componente do Rodapé do Modal
function RodapeModal({
  etapaAtual,
  totalEtapas,
  aoContinuar,
  aoFechar,
}: {
  etapaAtual: number;
  totalEtapas: number;
  aoContinuar: () => void;
  aoFechar: () => void;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className="border-t border-gray-200 p-4"
    >
      <div className="mx-1 flex items-center justify-between gap-4">
        <IndicadoresProgresso
          etapaAtual={etapaAtual}
          totalEtapas={totalEtapas}
        />
        <BotoesNavegacao
          etapaAtual={etapaAtual}
          totalEtapas={totalEtapas}
          aoContinuar={aoContinuar}
          aoFechar={aoFechar}
        />
      </div>
    </motion.div>
  );
}

// Componente principal do Modal
export function ProcessModal({
  step,
  steps,
  isOpen,
  onClose,
}: ProcessModalProps) {
  const [etapaAtual, setEtapaAtual] = useState(1);

  if (!step) return null;

  const totalEtapas = steps.length;
  const dadosEtapaAtual = steps[etapaAtual - 1];

  const aoContinuar = () => {
    if (etapaAtual < totalEtapas) {
      setEtapaAtual(etapaAtual + 1);
    }
  };

  const aoFechar = () => {
    // Reset da etapa atual e fechamento do modal
    setEtapaAtual(1);
    onClose();
  };

  // Função para fechar o modal via ESC ou clique fora
  const handleClose = () => {
    setEtapaAtual(1);
    onClose();
  };

  return (
    <Dialog
      open={isOpen}
      onOpenChange={(open) => {
        if (!open) {
          handleClose();
        }
      }}
    >
      <DialogContent className="group h-[90vh] max-w-4xl gap-0 overflow-hidden bg-white p-0 max-md:h-full">
        {/* Cabeçalho do Modal */}
        <CabecalhoModal
          etapaAtual={etapaAtual}
          totalEtapas={totalEtapas}
          dadosEtapaAtual={dadosEtapaAtual}
          aoFechar={aoFechar}
        />

        {/* Conteúdo principal com scroll */}
        <motion.div
          key={etapaAtual}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className="flex-1 space-y-6 overflow-y-auto px-6 py-5"
        >
          {/* Descrição da etapa */}
          <DescricaoEtapa
            descricao={dadosEtapaAtual.description}
            etapaAtual={etapaAtual}
          />

          {/* Visão Geral */}
          <SecaoVisaoGeral visaoGeral={dadosEtapaAtual.details.overview} />

          {/* Por que é Importante */}
          <SecaoPorQueImportante
            porQueImportante={dadosEtapaAtual.details.whyImportant}
          />

          {/* Informações Rápidas */}
          <SecaoInformacoesRapidas duracao={dadosEtapaAtual.details.duration} />

          {/* Benefícios Principais */}
          <SecaoBeneficiosPrincipais
            beneficios={dadosEtapaAtual.details.benefits}
          />

          {/* Entregas */}
          <SecaoEntregas entregas={dadosEtapaAtual.details.deliverables} />
        </motion.div>

        {/* Rodapé com paginação e navegação */}
        <RodapeModal
          etapaAtual={etapaAtual}
          totalEtapas={totalEtapas}
          aoContinuar={aoContinuar}
          aoFechar={aoFechar}
        />
      </DialogContent>
    </Dialog>
  );
}
