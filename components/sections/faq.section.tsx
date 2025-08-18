"use client";

import { ChevronDown, Plus, X, HelpCircle } from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { FAQ_DATA, type FAQItem } from "../../data/faq.data";
import Link from "next/link";

// Categorias disponíveis para filtro (versão compacta)
const CATEGORIAS_FAQ = [
  { id: "padrao", nome: "Padrão", cor: "from-blue-500 to-purple-500" },
  { id: "todos", nome: "Todos", cor: "from-green-500 to-emerald-500" },
  { id: "design", nome: "Design", cor: "from-pink-500 to-rose-500" },
  { id: "marketing", nome: "Marketing", cor: "from-yellow-500 to-orange-500" },
  { id: "tecnico", nome: "Técnico", cor: "from-orange-500 to-red-500" },
  { id: "plugins", nome: "Plugins", cor: "from-emerald-500 to-teal-500" },
];

// Categorias padrão que serão mostradas ao carregar a página
const CATEGORIAS_PADRAO = ["design", "marketing", "tecnico"];

// Componente reutilizável para cada item do FAQ
interface FAQItemProps {
  item: FAQItem;
  isOpen: boolean;
  onToggle: () => void;
}

// Componente do Item FAQ
function ItemFAQ({ item, isOpen, onToggle }: FAQItemProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      whileHover={{
        y: -1,
        scale: 1.005,
        transition: { duration: 0.3, ease: "easeOut" },
      }}
      className={`group rounded-3xl p-6 backdrop-blur-sm transition-all duration-300 ${
        isOpen
          ? "bg-white shadow-2xl shadow-white/20"
          : "bg-transparent hover:bg-gray-50/10 hover:shadow-lg"
      }`}
    >
      <BotaoPergunta item={item} isOpen={isOpen} onToggle={onToggle} />
      <ConteudoResposta item={item} isOpen={isOpen} />
    </motion.div>
  );
}

// Componente do Botão da Pergunta
function BotaoPergunta({ item, isOpen, onToggle }: FAQItemProps) {
  return (
    <motion.button
      onClick={onToggle}
      className="flex w-full items-center justify-between text-left"
      whileHover={{ scale: 1.002 }}
      whileTap={{ scale: 0.998 }}
    >
      <h3
        className={`text-lg font-semibold sm:text-xl ${
          isOpen ? "text-black" : "text-gray-400 group-hover:text-gray-50"
        }`}
      >
        {item.question}
      </h3>

      {/* Ícone de abrir/fechar */}
      <motion.div
        className="flex-shrink-0"
        animate={{ rotate: isOpen ? 180 : 0 }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
      >
        {isOpen ? (
          <div className="flex items-center justify-center rounded-full bg-gray-300 p-2">
            <X className="size-5 text-gray-800" />
          </div>
        ) : (
          <div className="flex items-center justify-center rounded-full bg-transparent p-2">
            <Plus className="size-5 text-gray-600" />
          </div>
        )}
      </motion.div>
    </motion.button>
  );
}

// Componente do Conteúdo da Resposta
function ConteudoResposta({
  item,
  isOpen,
}: {
  item: FAQItem;
  isOpen: boolean;
}) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
        >
          <Separator className="my-4" />
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.3 }}
            className="ml-6 space-y-4 text-gray-600"
          >
            {/* Dividir a resposta em parágrafos se houver quebras de linha */}
            {item.answer.split("\n").map((paragraph, index) => (
              <p key={index} className="text-base leading-relaxed">
                {paragraph}
              </p>
            ))}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

// Componente do Badge do Header
function BadgeHeader() {
  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.2, duration: 0.3 }}
        className="inline-flex items-center gap-2 rounded-full bg-gradient-to-l from-blue-500/30 to-transparent px-4 py-2 text-white"
      >
        <HelpCircle className="h-4 w-4" />
        <span className="text-sm font-semibold uppercase tracking-wider">
          Dúvidas Frequentes
        </span>
      </motion.div>
    </motion.div>
  );
}

// Componente do Título Principal
function TituloPrincipal() {
  return (
    <motion.h2
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.4, duration: 0.6, ease: "easeOut" }}
      className="text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl"
    >
      FAQ
    </motion.h2>
  );
}

// Componente da Descrição
function DescricaoSecao() {
  return (
    <motion.p
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.5, duration: 0.6, ease: "easeOut" }}
      className="mx-auto max-w-4xl text-lg leading-relaxed text-gray-400 sm:text-xl"
    >
      Entenda como nossos processos funcionam e transforme a maneira como você
      apresenta seus projetos digitais para sempre.
    </motion.p>
  );
}

// Componente do Header da Seção
function CabecalhoSecao() {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={variantesCabecalho}
      className="mb-16 text-center"
    >
      <div className="mx-auto mb-6 flex max-w-4xl items-center justify-between gap-4 px-6">
        <TituloPrincipal />
        <BadgeHeader />
      </div>
      <DescricaoSecao />
    </motion.div>
  );
}

// Componente do Tabs de Filtro
function TabsFiltro({
  categoriaAtiva,
  aoAlterarCategoria,
}: {
  categoriaAtiva: string;
  aoAlterarCategoria: (categoria: string) => void;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.6, duration: 0.6, ease: "easeOut" }}
      className="mb-12"
    >
      <div className="mx-auto max-w-2xl">
        <div className="flex flex-wrap items-center justify-center gap-3">
          {CATEGORIAS_FAQ.map((categoria) => (
            <motion.button
              key={categoria.id}
              onClick={() => aoAlterarCategoria(categoria.id)}
              className={`relative rounded-3xl px-4 py-3 text-sm font-medium transition-all duration-200 ${
                categoriaAtiva === categoria.id
                  ? "text-white"
                  : "bg-transparent text-gray-600 hover:text-white"
              }`}
              whileHover={{ scale: 1.01 }}
              whileTap={{ scale: 0.99 }}
            >
              {categoriaAtiva === categoria.id && (
                <motion.div
                  layoutId="activeTab"
                  className="absolute inset-0 rounded-2xl bg-gray-600"
                  transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                />
              )}
              <span className="relative z-10">{categoria.nome}</span>
            </motion.button>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

// Componente da Lista de FAQ
function ListaFAQ({
  faqFiltrado,
  itensAbertos,
  aoAlternarItem,
}: {
  faqFiltrado: FAQItem[];
  itensAbertos: Set<number>;
  aoAlternarItem: (id: number) => void;
}) {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={variantesLista}
      className="mx-auto max-w-4xl space-y-6"
    >
      {faqFiltrado.map((item, index) => (
        <motion.div key={item.id} variants={variantesItem} custom={index}>
          <ItemFAQ
            item={item}
            isOpen={itensAbertos.has(item.id)}
            onToggle={() => aoAlternarItem(item.id)}
          />
        </motion.div>
      ))}
    </motion.div>
  );
}

// Componente do CTA Final
function CTASecao() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.8, duration: 0.6, ease: "easeOut" }}
      className="mx-auto mt-20 max-w-4xl rounded-3xl bg-gradient-to-br from-transparent via-blue-500/25 to-blue-500/50 py-8 text-center shadow-2xl shadow-white/5"
    >
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.9, duration: 0.4 }}
        className="mb-6 text-lg text-white sm:text-xl"
      >
        Ainda tem dúvidas? Nossa equipe está pronta para ajudar!
      </motion.p>
      <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
        <Link href="#contato">
          <Button
            size="lg"
            className="h-auto rounded-2xl bg-white px-6 py-3 text-base font-medium text-gray-900 shadow-sm transition-all duration-200 hover:bg-gray-50 hover:shadow-md"
          >
            Fale conosco
            <motion.div
              animate={{ x: [0, 2, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              className="ml-2"
            >
              <ChevronDown className="size-4 rotate-[-90deg] text-gray-600" />
            </motion.div>
          </Button>
        </Link>
      </motion.div>
    </motion.div>
  );
}

// Variantes de animação para o header
const variantesCabecalho = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

// Variantes para a lista de FAQ
const variantesLista = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3,
    },
  },
};

// Variantes para cada item da lista
const variantesItem = {
  hidden: { opacity: 0, y: 20 },
  visible: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: index * 0.1,
      duration: 0.4,
      ease: "easeOut",
    },
  }),
};

// Componente principal da seção
export function FAQSection() {
  const [itensAbertos, setItensAbertos] = useState<Set<number>>(new Set([1]));
  const [categoriaAtiva, setCategoriaAtiva] = useState<string>("padrao");

  const aoAlternarItem = (id: number) => {
    const novosItensAbertos = new Set<number>();

    // Se o item clicado já estava aberto, fecha ele
    // Se estava fechado, abre ele e fecha os outros
    if (!itensAbertos.has(id)) {
      novosItensAbertos.add(id);
    }

    setItensAbertos(novosItensAbertos);
  };

  const aoAlterarCategoria = (categoria: string) => {
    setCategoriaAtiva(categoria);
    // Fechar todos os itens ao trocar de categoria
    setItensAbertos(new Set());
  };

  // Filtrar FAQ baseado na categoria selecionada
  const faqFiltrado = (() => {
    if (categoriaAtiva === "todos") {
      return FAQ_DATA;
    } else if (categoriaAtiva === "padrao") {
      // Mostrar apenas as categorias padrão
      return FAQ_DATA.filter((item) =>
        CATEGORIAS_PADRAO.includes(item.category),
      );
    } else {
      // Mostrar apenas a categoria específica
      return FAQ_DATA.filter((item) => item.category === categoriaAtiva);
    }
  })();

  return (
    <motion.section
      id="faq"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      className="py-20 sm:py-32"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        {/* Header da Seção */}
        <CabecalhoSecao />

        {/* Tabs de Filtro */}
        <TabsFiltro
          categoriaAtiva={categoriaAtiva}
          aoAlterarCategoria={aoAlterarCategoria}
        />

        {/* Lista de FAQ */}
        <ListaFAQ
          faqFiltrado={faqFiltrado}
          itensAbertos={itensAbertos}
          aoAlternarItem={aoAlternarItem}
        />

        {/* CTA Final */}
        <CTASecao />
      </div>
    </motion.section>
  );
}
