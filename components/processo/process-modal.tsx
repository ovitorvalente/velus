"use client";

import { X } from "lucide-react";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";

// Tipos TypeScript para melhor tipagem
interface ProcessStep {
  id: number;
  title: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
  details: {
    overview: string;
    benefits: string[];
    duration: string;
    deliverables: string[];
    whyImportant: string;
  };
}

// Componente do Modal de Detalhes
interface ProcessModalProps {
  step: ProcessStep | null;
  isOpen: boolean;
  onClose: () => void;
}

export function ProcessModal({ step, isOpen, onClose }: ProcessModalProps) {
  if (!step) return null;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-md rounded-2xl border-0 bg-white/95 p-0 shadow-2xl backdrop-blur-xl">
        {/* Header do Modal - Estilo Apple */}
        <div className="relative overflow-hidden rounded-t-2xl bg-gradient-to-b from-gray-50 to-white p-6 pb-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              {/* Ícone com estilo Apple */}
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-500 to-blue-600 shadow-lg">
                <step.icon className="h-7 w-7 text-white" />
              </div>

              <div>
                <DialogTitle className="text-xs font-medium uppercase tracking-wider text-gray-500">
                  Etapa {step.id} de 4
                </DialogTitle>
                <h2 className="text-xl font-semibold leading-tight text-gray-900">
                  {step.title}
                </h2>
              </div>
            </div>

            {/* Botão de Fechar - Estilo Apple */}
            <button
              onClick={onClose}
              className="flex h-8 w-8 items-center justify-center rounded-full bg-gray-100 text-gray-600 transition-all duration-200 hover:bg-gray-200 hover:text-gray-800"
            >
              <X className="h-4 w-4" />
            </button>
          </div>
        </div>

        {/* Conteúdo do Modal - Estilo Apple */}
        <div className="p-6 pt-4">
          {/* Visão Geral */}
          <div className="mb-6">
            <h3 className="mb-3 text-sm font-medium text-gray-900">
              Visão Geral
            </h3>
            <p className="text-sm leading-relaxed text-gray-600">
              {step.details.overview}
            </p>
          </div>

          {/* Por que é Importante */}
          <div className="mb-6 rounded-xl bg-amber-50/30 p-4">
            <h3 className="mb-2 text-sm font-medium text-amber-800">
              🎯 Por que é crucial?
            </h3>
            <p className="text-sm leading-relaxed text-amber-700">
              {step.details.whyImportant}
            </p>
          </div>

          {/* Informações Rápidas - Estilo Apple */}
          <div className="mb-6 grid grid-cols-2 gap-4">
            <div className="rounded-xl bg-gray-50/50 p-4 text-center">
              <div className="mb-1 text-xs font-medium text-gray-500">
                Duração
              </div>
              <div className="text-lg font-semibold text-gray-900">
                {step.details.duration}
              </div>
            </div>
            <div className="rounded-xl bg-gray-50/50 p-4 text-center">
              <div className="mb-1 text-xs font-medium text-gray-500">
                Status
              </div>
              <div className="text-lg font-semibold text-green-600">Ativo</div>
            </div>
          </div>

          {/* Benefícios Principais - Estilo Apple */}
          <div className="mb-6">
            <h3 className="mb-3 text-sm font-medium text-gray-900">
              Principais Benefícios
            </h3>
            <div className="space-y-3">
              {step.details.benefits.slice(0, 3).map((benefit, index) => (
                <div
                  key={index}
                  className="flex items-start gap-3 rounded-lg bg-gray-50/50 p-3"
                >
                  <div className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-blue-500" />
                  <span className="text-sm leading-relaxed text-gray-700">
                    {benefit}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
