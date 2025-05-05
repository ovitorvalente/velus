"use client";

import { useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, Plus, Minus, ChevronRight, MessageCircle } from "lucide-react";
import { SectionHeader } from "@/components/ui/section-header";
import { ScrollReveal } from "@/components/scroll-reveal";

const categories = [
  { id: "all", name: "Todas" },
  { id: "development", name: "Desenvolvimento" },
  { id: "payment", name: "Pagamento" },
  { id: "support", name: "Suporte" },
  { id: "technical", name: "Técnico" },
];

const faqItems = [
  {
    question: "Quanto tempo leva para desenvolver um site?",
    answer:
      "O tempo de desenvolvimento varia de acordo com a complexidade do projeto. Um site institucional simples pode levar de 2 a 4 semanas, enquanto projetos mais complexos como e-commerces ou plataformas personalizadas podem levar de 8 a 12 semanas. Após nossa análise inicial, forneceremos um cronograma detalhado para o seu projeto específico.",
    category: "development",
  },
  {
    question: "Quais tecnologias vocês utilizam?",
    answer:
      "Trabalhamos com as tecnologias mais modernas e eficientes do mercado. Para desenvolvimento front-end, utilizamos React, Next.js e Tailwind CSS. Para back-end, trabalhamos com Node.js, Python e PHP. Nossos bancos de dados incluem MongoDB, PostgreSQL e MySQL. A escolha da tecnologia depende das necessidades específicas do seu projeto.",
    category: "technical",
  },
  {
    question: "Como funciona o processo de pagamento?",
    answer:
      "Nosso processo de pagamento é dividido em etapas para garantir segurança tanto para o cliente quanto para nós. Geralmente, solicitamos 40% do valor total como entrada para iniciar o projeto, 30% após a aprovação do design e 30% na entrega final. Aceitamos transferências bancárias, PIX e cartões de crédito em até 12x.",
    category: "payment",
  },
  {
    question: "Vocês oferecem suporte após o lançamento do site?",
    answer:
      "Sim, oferecemos suporte técnico por 30 dias após o lançamento do site sem custo adicional. Após esse período, disponibilizamos planos de manutenção mensal que incluem atualizações de segurança, backups regulares, pequenas alterações de conteúdo e suporte técnico prioritário.",
    category: "support",
  },
  {
    question: "É possível atualizar o conteúdo do site sozinho?",
    answer:
      "Sim, desenvolvemos todos os nossos sites com sistemas de gerenciamento de conteúdo (CMS) intuitivos que permitem que você atualize textos, imagens e outros conteúdos sem conhecimento técnico. Além disso, fornecemos treinamento completo para sua equipe e documentação detalhada sobre como gerenciar o conteúdo do site.",
    category: "technical",
  },
  {
    question: "Vocês também cuidam do registro de domínio e hospedagem?",
    answer:
      "Sim, oferecemos serviços completos que incluem registro de domínio, hospedagem e configuração de e-mails profissionais. Trabalhamos com provedores de hospedagem confiáveis e de alta performance para garantir que seu site esteja sempre disponível e carregue rapidamente.",
    category: "technical",
  },
  {
    question: "Como vocês garantem que o site será otimizado para SEO?",
    answer:
      "A otimização para SEO é parte integral do nosso processo de desenvolvimento. Implementamos as melhores práticas de SEO técnico, incluindo estrutura de URL amigável, meta tags otimizadas, schema markup, otimização de imagens, velocidade de carregamento e responsividade. Também oferecemos serviços adicionais de SEO contínuo para melhorar o posicionamento do seu site nos resultados de busca.",
    category: "development",
  },
  {
    question: "Vocês desenvolvem aplicativos móveis?",
    answer:
      "Sim, além de websites, desenvolvemos aplicativos móveis nativos para iOS e Android, bem como aplicativos híbridos utilizando tecnologias como React Native e Flutter. Nossa equipe pode ajudar a determinar a melhor abordagem para o seu projeto específico, considerando fatores como orçamento, prazo e requisitos técnicos.",
    category: "development",
  },
];

export function FaqSection() {
  const faqRef = useRef<HTMLDivElement>(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("all");
  const [openItem, setOpenItem] = useState<string | null>(null);

  const filteredFaqItems = faqItems.filter((item) => {
    const matchesSearch =
      item.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.answer.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory =
      activeCategory === "all" || item.category === activeCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <section id="faq" ref={faqRef} className="relative overflow-hidden py-24">
      <div className="absolute inset-0 z-0 opacity-10">
        <motion.div
          className="absolute left-10 top-20 h-64 w-64 bg-orange-500/10 blur-3xl"
          animate={{
            x: [0, 50, 0],
            y: [0, 30, 0],
          }}
          transition={{
            repeat: Number.POSITIVE_INFINITY,
            duration: 15,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-20 right-10 h-80 w-80 bg-orange-300/5 blur-3xl"
          animate={{
            x: [0, -70, 0],
            y: [0, 50, 0],
          }}
          transition={{
            repeat: Number.POSITIVE_INFINITY,
            duration: 18,
            ease: "easeInOut",
          }}
        />
      </div>

      <div className="container relative z-10 mx-auto px-4">
        <SectionHeader
          line="bg-orange-500"
          title="PERGUNTAS FREQUENTES"
          description="Respostas para as dúvidas mais comuns sobre nossos serviços e processos."
        />

        <div className="mx-auto max-w-3xl">
          <ScrollReveal>
            <div className="relative mb-8">
              <div className="relative">
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-orange-500/10 via-orange-500 to-orange-500/5 opacity-70"
                  style={{
                    backgroundSize: "200% 200%",
                  }}
                  animate={{
                    backgroundPosition: ["0% 0%", "100% 100%", "0% 0%"],
                  }}
                  transition={{
                    repeat: Number.POSITIVE_INFINITY,
                    duration: 3,
                    ease: "linear",
                  }}
                />
                <div className="absolute inset-[1px] bg-black" />
                <div className="relative flex items-center">
                  <Search className="absolute left-4 h-5 w-5 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Buscar perguntas..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full bg-transparent py-3 pl-12 pr-4 text-white placeholder-gray-300 focus:outline-none"
                  />
                </div>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={100}>
            <div className="mb-8 flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className={`px-4 py-2 text-sm transition-all ${
                    activeCategory === category.id
                      ? "border border-orange-500 bg-orange-500/10 font-bold text-white"
                      : "border border-white/10 bg-black/50 text-gray-300 hover:border-orange-500/50"
                  }`}
                >
                  {category.name}
                </button>
              ))}
            </div>
          </ScrollReveal>

          <ScrollReveal delay={200}>
            <div className="space-y-4">
              <AnimatePresence>
                {filteredFaqItems.length > 0 ? (
                  filteredFaqItems.map((item, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.05 }}
                    >
                      <div className="group relative">
                        <motion.div
                          className="absolute inset-0 bg-gradient-to-r from-orange-500/10 via-orange-500 to-orange-500/5 opacity-0 group-hover:opacity-100"
                          style={{
                            backgroundSize: "200% 200%",
                          }}
                          animate={{
                            backgroundPosition: ["0% 0%", "100% 100%", "0% 0%"],
                          }}
                          transition={{
                            repeat: Number.POSITIVE_INFINITY,
                            duration: 3,
                            ease: "linear",
                          }}
                        />
                        <div className="absolute inset-[1px] bg-black"></div>

                        <div className="relative">
                          <button
                            onClick={() =>
                              setOpenItem(
                                openItem === `item-${index}`
                                  ? null
                                  : `item-${index}`,
                              )
                            }
                            className="flex w-full items-center justify-between px-6 py-4 text-left text-lg font-medium transition-colors hover:text-orange-400"
                          >
                            <span>{item.question}</span>
                            <div className="flex h-6 w-6 items-center justify-center">
                              {openItem === `item-${index}` ? (
                                <Minus className="h-4 w-4 text-orange-400" />
                              ) : (
                                <Plus className="h-4 w-4 text-gray-400" />
                              )}
                            </div>
                          </button>

                          <AnimatePresence>
                            {openItem === `item-${index}` && (
                              <motion.div
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: "auto", opacity: 1 }}
                                exit={{ height: 0, opacity: 0 }}
                                transition={{ duration: 0.3 }}
                                className="overflow-hidden"
                              >
                                <div className="px-6 pb-6 text-gray-300">
                                  <motion.div
                                    initial={{ y: -10, opacity: 0 }}
                                    animate={{ y: 0, opacity: 1 }}
                                    transition={{ duration: 0.2, delay: 0.1 }}
                                  >
                                    {item.answer}
                                  </motion.div>
                                </div>
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </div>
                      </div>
                    </motion.div>
                  ))
                ) : (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="py-10 text-center"
                  >
                    <p className="text-gray-400">
                      Nenhuma pergunta encontrada. Tente outra busca.
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={400}>
            <div className="group relative mt-32">
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-orange-500/5 via-orange-500/50 to-orange-500/10 opacity-70"
                style={{
                  backgroundSize: "200% 200%",
                }}
                animate={{
                  backgroundPosition: ["0% 0%", "100% 100%", "0% 0%"],
                }}
                transition={{
                  repeat: Number.POSITIVE_INFINITY,
                  duration: 3,
                  ease: "linear",
                }}
              />
              <div className="absolute inset-[2px] bg-black/80 backdrop-blur-sm" />

              <div className="relative p-8">
                <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
                  <div className="flex items-center">
                    <div className="mr-4 rounded-full bg-orange-500/5 p-3">
                      <MessageCircle className="h-8 w-8 text-orange-400" />
                    </div>
                    <div>
                      <h3 className="mb-1 text-xl font-bold text-white">
                        Ainda tem dúvidas?
                      </h3>
                      <p className="text-gray-300">
                        Entre em contato conosco para obter respostas
                        personalizadas.
                      </p>
                    </div>
                  </div>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex w-44 items-center justify-center gap-4 border border-orange-500/50 bg-orange-500/50 p-2 transition-all delay-150 duration-500 hover:bg-orange-500/5"
                  >
                    Fale Conosco <ChevronRight className="size-4" />
                  </motion.button>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
