"use client";

import {
  Target,
  Palette,
  Rocket,
  Trophy,
  Plus,
  ChevronRight,
} from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { ProcessModal } from "../processo/process-modal";

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

// Dados das etapas do processo
const PROCESS_STEPS: ProcessStep[] = [
  {
    id: 1,
    title: "Descobrindo o Tesouro Escondido",
    description:
      "Imagine que você tem uma mina de ouro no seu quintal, mas não sabe onde cavar. Nós somos os especialistas que vão te mostrar exatamente onde está o tesouro. Através de uma conversa estratégica, descobrimos o que realmente importa para o seu negócio e criamos um mapa do tesouro personalizado.",
    icon: Target,
    details: {
      overview:
        "Esta é a fase fundamental onde estabelecemos as bases sólidas para o sucesso do seu projeto. Através de uma análise profunda e estratégica, criamos um roadmap claro e executável que transforma sua visão em um plano de ação concreto.",
      benefits: [
        "Briefing detalhado e personalizado para seu negócio",
        "Análise completa de mercado e concorrência",
        "Estratégia customizada para seus objetivos específicos",
        "Cronograma realista e flexível",
        "Definição clara de métricas de sucesso",
      ],
      duration: "1-2 semanas",
      deliverables: [
        "Documento de estratégia completo",
        "Cronograma detalhado do projeto",
        "Análise de viabilidade técnica",
        "Proposta comercial detalhada",
      ],
      whyImportant:
        "Sem uma estratégia clara, você está navegando no escuro. Esta fase garante que cada decisão subsequente seja baseada em dados e insights reais, não em suposições.",
    },
  },
  {
    id: 2,
    title: "Transformando Sonhos em Realidade",
    description:
      "Aqui é onde a mágica acontece! Como um alquimista transformando chumbo em ouro, nós transformamos suas ideias em algo que seus clientes vão amar. Cada pixel, cada cor, cada movimento é pensado para fazer seu coração bater mais forte quando ver o resultado final.",
    icon: Palette,
    details: {
      overview:
        "Transformamos conceitos abstratos em realidade visual tangível. Cada elemento é cuidadosamente projetado para transmitir a essência da sua marca e criar conexões emocionais profundas com seu público-alvo.",
      benefits: [
        "Design responsivo para todos os dispositivos",
        "UX otimizada baseada em pesquisas de usuário",
        "Branding consistente e memorável",
        "Protótipos interativos e funcionais",
        "Sistema de design escalável para o futuro",
      ],
      duration: "2-4 semanas",
      deliverables: [
        "Moodboard e conceito visual",
        "Wireframes e protótipos",
        "Sistema de design completo",
        "Guia de marca atualizado",
      ],
      whyImportant:
        "O design é a primeira impressão que seus clientes têm da sua marca. Um design bem executado pode aumentar significativamente a conversão e a percepção de valor.",
    },
  },
  {
    id: 3,
    title: "Construindo o Futuro, Hoje",
    description:
      "É hora de colocar a mão na massa! Como um mestre artesão, cada linha de código, cada funcionalidade é criada com amor e atenção obsessiva aos detalhes. Não queremos apenas um site que funcione - queremos um que faça seus concorrentes ficarem com inveja.",
    icon: Rocket,
    details: {
      overview:
        "Executamos cada etapa com precisão cirúrgica, utilizando as melhores práticas e tecnologias de ponta. Garantimos que seu projeto não apenas funcione, mas supere todas as expectativas e estabeleça novos padrões de qualidade.",
      benefits: [
        "Desenvolvimento ágil com entregas contínuas",
        "Testes rigorosos em todas as fases",
        "Integração com APIs e sistemas existentes",
        "Otimização de performance e SEO",
        "Código limpo e manutenível para o futuro",
      ],
      duration: "3-6 semanas",
      deliverables: [
        "Produto funcional e testado",
        "Documentação técnica completa",
        "Relatórios de performance",
        "Guia de manutenção",
      ],
      whyImportant:
        "A qualidade do desenvolvimento determina a estabilidade, performance e escalabilidade do seu projeto. Um código bem estruturado economiza tempo e dinheiro no longo prazo.",
    },
  },
  {
    id: 4,
    title: "Entregando o Impossível",
    description:
      "Chegou a hora da verdade! Não apenas entregamos seu projeto, mas garantimos que ele seja tão incrível que você vai querer mostrar para todo mundo. É como receber as chaves de um carro esportivo - você não consegue esperar para sair por aí e impressionar.",
    icon: Trophy,
    details: {
      overview:
        "Não apenas entregamos seu projeto, mas garantimos que ele esteja perfeitamente otimizado e pronto para gerar resultados excepcionais para seu negócio. Implementamos melhorias contínuas e suporte proativo.",
      benefits: [
        "Deploy otimizado e seguro",
        "Monitoramento 24/7 do sistema",
        "Suporte contínuo e proativo",
        "Relatórios detalhados de performance",
        "Plano de evolução futura",
      ],
      duration: "1-2 semanas",
      deliverables: [
        "Projeto finalizado e otimizado",
        "Relatório de entrega completo",
        "Plano de manutenção contínua",
        "Treinamento da equipe",
      ],
      whyImportant:
        "A entrega não é o fim, é o começo de uma nova jornada. O suporte contínuo garante que seu projeto continue gerando valor e crescendo com seu negócio.",
    },
  },
];

// Componente reutilizável para os cards de processo
interface ProcessCardProps {
  step: ProcessStep;
  onCardClick: (step: ProcessStep) => void;
}

function ProcessCard({ step, onCardClick }: ProcessCardProps) {
  const { title, description, icon: Icon } = step;

  return (
    <div
      className="group relative cursor-pointer rounded-2xl bg-white p-6 shadow-sm transition-all duration-300 hover:shadow-md"
      onClick={() => onCardClick(step)}
    >
      {/* Ícone */}
      <div className="mb-4">
        <Icon className="h-8 w-8 text-gray-800" />
      </div>

      {/* Título */}
      <h3 className="mb-3 text-lg font-semibold text-gray-900">{title}</h3>

      {/* Descrição */}
      <p className="mb-4 text-sm leading-relaxed text-gray-600">
        {description}
      </p>

      {/* Botão de Expansão */}
      <div className="absolute bottom-4 right-4">
        <button
          className="flex h-8 w-8 items-center justify-center rounded-full bg-gray-800 text-white shadow-lg transition-all duration-200 hover:scale-105 hover:bg-gray-900"
          onClick={(e) => {
            e.stopPropagation();
            onCardClick(step);
          }}
        >
          <Plus className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
}

// Componente principal da seção
export function ProcessoSection() {
  const [selectedStep, setSelectedStep] = useState<ProcessStep | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleCardClick = (step: ProcessStep) => {
    setSelectedStep(step);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedStep(null);
  };

  return (
    <section id="processo" className="m-8 rounded-3xl bg-gray-50 py-20">
      <div className="mx-auto max-w-7xl px-6">
        {/* Header da Seção */}
        <div className="mb-16 flex items-center justify-between">
          <div className="max-w-3xl">
            <div className="mb-4 inline-flex items-center rounded-full bg-blue-50 px-4 py-2 text-blue-700">
              <span className="text-sm font-medium">
                ✨ Transforme sua visão em realidade
              </span>
            </div>

            <h2 className="mb-4 text-4xl font-bold leading-tight text-gray-900">
              Por que centenas de empresas{" "}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                escolhem a Velus
              </span>{" "}
              para seus projetos digitais?
            </h2>

            <p className="text-lg leading-relaxed text-gray-600">
              Descubra como transformamos ideias em{" "}
              <span className="font-semibold text-gray-800">
                resultados extraordinários
              </span>{" "}
              que fazem seu negócio crescer exponencialmente.
            </p>
          </div>

          <Link
            href="#contato"
            className="group inline-flex items-center gap-2 rounded-2xl bg-blue-600 px-6 py-3 font-semibold text-white shadow-lg transition-all duration-300 hover:scale-105 hover:bg-blue-700 hover:shadow-xl"
          >
            Fale conosco
            <ChevronRight className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </div>

        {/* Cards do Processo */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {PROCESS_STEPS.map((step) => (
            <ProcessCard
              key={step.id}
              step={step}
              onCardClick={handleCardClick}
            />
          ))}
        </div>

        {/* Modal de Detalhes */}
        <ProcessModal
          step={selectedStep}
          isOpen={isModalOpen}
          onClose={handleCloseModal}
        />
      </div>
    </section>
  );
}
