// Tipos TypeScript para melhor tipagem
export interface FAQItem {
  id: number;
  question: string;
  answer: string;
  category:
    | "geral"
    | "tecnico"
    | "comercial"
    | "suporte"
    | "design"
    | "marketing"
    | "plugins";
}

// Dados das perguntas frequentes
export const FAQ_DATA: FAQItem[] = [
  {
    id: 1,
    question: "Como funciona o processo de desenvolvimento na Velus?",
    answer:
      "Nosso processo é dividido em 4 etapas principais: descoberta estratégica, design criativo, desenvolvimento técnico e entrega otimizada. Cada fase é executada com metodologia ágil, garantindo transparência total e entregas contínuas.",
    category: "geral",
  },
  {
    id: 2,
    question: "Quanto tempo leva para desenvolver um projeto completo?",
    answer:
      "O tempo varia conforme a complexidade do projeto. Projetos pequenos levam de 4-6 semanas, médios de 8-12 semanas e grandes de 16-24 semanas. Sempre fornecemos cronogramas detalhados na fase de planejamento.",
    category: "comercial",
  },
  {
    id: 3,
    question: "Vocês oferecem suporte pós-entrega?",
    answer:
      "Sim! Oferecemos suporte contínuo e proativo por 3 meses após a entrega, incluindo monitoramento 24/7, atualizações de segurança e otimizações de performance. Após esse período, disponibilizamos planos de manutenção contínua.",
    category: "suporte",
  },
  {
    id: 4,
    question: "Quais tecnologias vocês utilizam?",
    answer:
      "Utilizamos as tecnologias mais modernas e confiáveis do mercado: React/Next.js para frontend, Node.js/Python para backend, bancos de dados PostgreSQL/MongoDB, e infraestrutura cloud AWS/Google Cloud. Sempre escolhemos a stack ideal para cada projeto.",
    category: "tecnico",
  },
  {
    id: 5,
    question: "Como garantem a qualidade do código?",
    answer:
      "Implementamos testes automatizados em todas as fases, code reviews rigorosos, padrões de qualidade estabelecidos e monitoramento contínuo. Utilizamos ferramentas de análise estática e testes de integração para garantir código limpo e manutenível.",
    category: "tecnico",
  },
  {
    id: 6,
    question: "Vocês trabalham com projetos internacionais?",
    answer:
      "Sim! Atendemos clientes de todo o mundo, com equipe fluente em português, inglês e espanhol. Nossa infraestrutura cloud permite deploy global e oferecemos suporte em múltiplos fusos horários.",
    category: "comercial",
  },
  {
    id: 7,
    question: "Como é feita a estimativa de custos?",
    answer:
      "Nossa estimativa é baseada em análise detalhada dos requisitos, complexidade técnica, cronograma e recursos necessários. Fornecemos propostas transparentes com breakdown completo dos custos, sem surpresas ocultas.",
    category: "comercial",
  },
  {
    id: 8,
    question: "Vocês fazem manutenção de projetos existentes?",
    answer:
      "Sim! Oferecemos serviços de manutenção, atualização e modernização de projetos existentes. Fazemos análise completa do código legado e propomos melhorias para otimizar performance, segurança e funcionalidades.",
    category: "suporte",
  },
  {
    id: 9,
    question: "Qual é a política de confidencialidade?",
    answer:
      "Temos uma política rigorosa de confidencialidade. Todos os projetos são protegidos por acordos de NDA (Non-Disclosure Agreement) e nossos colaboradores são treinados em segurança da informação. Seus dados e ideias estão sempre seguros conosco.",
    category: "geral",
  },
  {
    id: 10,
    question: "Vocês oferecem treinamento para a equipe?",
    answer:
      "Sim! Após a entrega do projeto, oferecemos treinamento completo para sua equipe, incluindo documentação detalhada, vídeos tutoriais e sessões de capacitação. Garantimos que sua equipe esteja preparada para usar e manter o sistema.",
    category: "suporte",
  },
  // Novas perguntas sobre Design e Artes Digitais
  {
    id: 11,
    question: "Que tipos de artes digitais vocês criam?",
    answer:
      "Criamos uma ampla variedade de artes digitais: ilustrações vetoriais, mockups de produtos, infográficos, ícones personalizados, banners para redes sociais, artes para e-commerce, concept arts e muito mais. Cada peça é desenvolvida com foco na identidade visual da sua marca.",
    category: "design",
  },
  {
    id: 12,
    question: "Como funciona o processo de design gráfico?",
    answer:
      "Nosso processo de design começa com briefing detalhado, pesquisa de referências, criação de moodboards, desenvolvimento de conceitos, criação de mockups e refinamento até a aprovação final. Trabalhamos com as principais ferramentas: Adobe Creative Suite, Figma, Sketch e outras ferramentas profissionais.",
    category: "design",
  },
  {
    id: 13,
    question: "Vocês fazem identidade visual completa?",
    answer:
      "Sim! Desenvolvemos identidades visuais completas incluindo logo, paleta de cores, tipografia, aplicações em diferentes suportes, manual de marca e guidelines para uso. Garantimos consistência visual em todas as aplicações da sua marca.",
    category: "design",
  },
  {
    id: 14,
    question: "Que formatos de arquivo vocês entregam?",
    answer:
      "Entregamos arquivos em múltiplos formatos: vetorial (AI, EPS, SVG), raster de alta resolução (PNG, JPG, TIFF), editáveis (PSD, XD, Figma) e otimizados para web. Todos os arquivos são organizados e nomeados adequadamente para facilitar o uso.",
    category: "design",
  },
  // Novas perguntas sobre Marketing Digital e Tráfego Pago
  {
    id: 15,
    question: "Como vocês gerenciam campanhas de tráfego pago?",
    answer:
      "Gerenciamos campanhas completas: análise de público-alvo, criação de estratégias, configuração de pixels, criação de anúncios, otimização contínua e relatórios detalhados. Trabalhamos com Google Ads, Facebook Ads, Instagram Ads, LinkedIn Ads e outras plataformas.",
    category: "marketing",
  },
  {
    id: 16,
    question: "Qual o ROI esperado em campanhas de marketing digital?",
    answer:
      "O ROI varia conforme o setor e estratégia, mas nossos clientes costumam ter retornos de 3x a 10x o investimento. Implementamos tracking avançado, otimização contínua e estratégias de remarketing para maximizar os resultados.",
    category: "marketing",
  },
  {
    id: 17,
    question: "Vocês fazem gestão de redes sociais?",
    answer:
      "Sim! Oferecemos gestão completa: planejamento de conteúdo, criação de posts, gestão de comunidade, análise de métricas, campanhas pagas e estratégias de crescimento orgânico. Trabalhamos com Instagram, Facebook, LinkedIn, TikTok e outras plataformas.",
    category: "marketing",
  },
  {
    id: 18,
    question: "Como vocês otimizam campanhas de marketing?",
    answer:
      "Utilizamos análise de dados em tempo real, A/B testing, otimização de landing pages, segmentação avançada de público e machine learning para otimizar continuamente as campanhas. Monitoramos métricas como CTR, CPC, conversões e ROI para maximizar resultados.",
    category: "marketing",
  },
  // Novas perguntas sobre Plugins e Ferramentas
  {
    id: 19,
    question: "Que tipos de plugins vocês desenvolvem?",
    answer:
      "Desenvolvemos plugins para WordPress, Shopify, WooCommerce, Magento e outras plataformas. Criamos soluções personalizadas para funcionalidades específicas, integrações com APIs, otimizações de performance e ferramentas de automação.",
    category: "plugins",
  },
  {
    id: 20,
    question: "Os plugins são compatíveis com todas as versões?",
    answer:
      "Sim! Desenvolvemos plugins com compatibilidade retroativa e atualizações regulares para novas versões das plataformas. Testamos em múltiplos ambientes e fornecemos documentação detalhada para instalação e configuração.",
    category: "plugins",
  },
  {
    id: 21,
    question: "Vocês oferecem suporte para plugins personalizados?",
    answer:
      "Sim! Oferecemos suporte técnico completo, incluindo instalação, configuração, personalização, manutenção e atualizações. Nossa equipe está sempre disponível para resolver dúvidas e implementar melhorias.",
    category: "plugins",
  },
  {
    id: 22,
    question: "Como vocês garantem a segurança dos plugins?",
    answer:
      "Implementamos as melhores práticas de segurança: validação de dados, sanitização de inputs, nonces para formulários, verificação de permissões e testes de penetração. Todos os plugins passam por auditoria de segurança antes do lançamento.",
    category: "plugins",
  },
  // Novas perguntas sobre E-commerce e Sites
  {
    id: 23,
    question: "Vocês desenvolvem lojas virtuais completas?",
    answer:
      "Sim! Desenvolvemos e-commerces completos com todas as funcionalidades: catálogo de produtos, carrinho de compras, sistema de pagamentos, gestão de estoque, relatórios de vendas, integração com marketplaces e muito mais.",
    category: "tecnico",
  },
  {
    id: 24,
    question: "Que plataformas de e-commerce vocês trabalham?",
    answer:
      "Trabalhamos com as principais plataformas: WooCommerce, Shopify, Magento, PrestaShop e também desenvolvemos soluções customizadas. Escolhemos a plataforma ideal baseada nas necessidades específicas do seu negócio.",
    category: "tecnico",
  },
  {
    id: 25,
    question: "Como vocês otimizam sites para SEO?",
    answer:
      "Implementamos SEO técnico completo: estrutura de URLs, meta tags, schema markup, otimização de imagens, velocidade de carregamento, mobile-first design e conteúdo otimizado. Utilizamos ferramentas avançadas para análise e monitoramento contínuo.",
    category: "marketing",
  },
  {
    id: 26,
    question: "Vocês fazem migração de sites existentes?",
    answer:
      "Sim! Fazemos migração completa de sites para novas plataformas, preservando todo o conteúdo, SEO e funcionalidades. Incluímos backup completo, testes de funcionalidade e monitoramento pós-migração para garantir que tudo funcione perfeitamente.",
    category: "tecnico",
  },
];

// Categorias disponíveis
export const FAQ_CATEGORIES = [
  { key: "todos", label: "Todas", count: FAQ_DATA.length },
  {
    key: "geral",
    label: "Geral",
    count: FAQ_DATA.filter((item) => item.category === "geral").length,
  },
  {
    key: "tecnico",
    label: "Técnico",
    count: FAQ_DATA.filter((item) => item.category === "tecnico").length,
  },
  {
    key: "comercial",
    label: "Comercial",
    count: FAQ_DATA.filter((item) => item.category === "comercial").length,
  },
  {
    key: "suporte",
    label: "Suporte",
    count: FAQ_DATA.filter((item) => item.category === "suporte").length,
  },
  {
    key: "design",
    label: "Design",
    count: FAQ_DATA.filter((item) => item.category === "design").length,
  },
  {
    key: "marketing",
    label: "Marketing",
    count: FAQ_DATA.filter((item) => item.category === "marketing").length,
  },
  {
    key: "plugins",
    label: "Plugins",
    count: FAQ_DATA.filter((item) => item.category === "plugins").length,
  },
] as const;
