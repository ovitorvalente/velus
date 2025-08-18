import { Target, Palette, Rocket, Trophy } from "lucide-react";

export interface ProcessStep {
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

export const PROCESS_STEPS: ProcessStep[] = [
  {
    id: 1,
    title: "Descobrindo o Tesouro Escondido",
    description: "Estratégia e planejamento personalizado para seu projeto",
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
    description: "Design e prototipagem com foco na experiência do usuário",
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
    description: "Desenvolvimento ágil com foco em qualidade e performance",
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
    description: "Deploy otimizado e suporte contínuo para seu sucesso",
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
