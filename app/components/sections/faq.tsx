"use client"
import { useRef } from "react"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { SectionHeader } from "@/components/section-header"
import { ScrollReveal } from "@/components/scroll-reveal"
import { FaqContact } from "@/components/faq-contact"

const faqItems = [
  {
    question: "Quanto tempo leva para desenvolver um site?",
    answer:
      "O tempo de desenvolvimento varia de acordo com a complexidade do projeto. Um site institucional simples pode levar de 2 a 4 semanas, enquanto projetos mais complexos como e-commerces ou plataformas personalizadas podem levar de 8 a 12 semanas. Após nossa análise inicial, forneceremos um cronograma detalhado para o seu projeto específico.",
  },
  {
    question: "Quais tecnologias vocês utilizam?",
    answer:
      "Trabalhamos com as tecnologias mais modernas e eficientes do mercado. Para desenvolvimento front-end, utilizamos React, Next.js e Tailwind CSS. Para back-end, trabalhamos com Node.js, Python e PHP. Nossos bancos de dados incluem MongoDB, PostgreSQL e MySQL. A escolha da tecnologia depende das necessidades específicas do seu projeto.",
  },
  {
    question: "Como funciona o processo de pagamento?",
    answer:
      "Nosso processo de pagamento é dividido em etapas para garantir segurança tanto para o cliente quanto para nós. Geralmente, solicitamos 40% do valor total como entrada para iniciar o projeto, 30% após a aprovação do design e 30% na entrega final. Aceitamos transferências bancárias, PIX e cartões de crédito em até 12x.",
  },
  {
    question: "Vocês oferecem suporte após o lançamento do site?",
    answer:
      "Sim, oferecemos suporte técnico por 30 dias após o lançamento do site sem custo adicional. Após esse período, disponibilizamos planos de manutenção mensal que incluem atualizações de segurança, backups regulares, pequenas alterações de conteúdo e suporte técnico prioritário.",
  },
  {
    question: "É possível atualizar o conteúdo do site sozinho?",
    answer:
      "Sim, desenvolvemos todos os nossos sites com sistemas de gerenciamento de conteúdo (CMS) intuitivos que permitem que você atualize textos, imagens e outros conteúdos sem conhecimento técnico. Além disso, fornecemos treinamento completo para sua equipe e documentação detalhada sobre como gerenciar o conteúdo do site.",
  },
  {
    question: "Vocês também cuidam do registro de domínio e hospedagem?",
    answer:
      "Sim, oferecemos serviços completos que incluem registro de domínio, hospedagem e configuração de e-mails profissionais. Trabalhamos com provedores de hospedagem confiáveis e de alta performance para garantir que seu site esteja sempre disponível e carregue rapidamente.",
  },
  {
    question: "Como vocês garantem que o site será otimizado para SEO?",
    answer:
      "A otimização para SEO é parte integral do nosso processo de desenvolvimento. Implementamos as melhores práticas de SEO técnico, incluindo estrutura de URL amigável, meta tags otimizadas, schema markup, otimização de imagens, velocidade de carregamento e responsividade. Também oferecemos serviços adicionais de SEO contínuo para melhorar o posicionamento do seu site nos resultados de busca.",
  },
  {
    question: "Vocês desenvolvem aplicativos móveis?",
    answer:
      "Sim, além de websites, desenvolvemos aplicativos móveis nativos para iOS e Android, bem como aplicativos híbridos utilizando tecnologias como React Native e Flutter. Nossa equipe pode ajudar a determinar a melhor abordagem para o seu projeto específico, considerando fatores como orçamento, prazo e requisitos técnicos.",
  },
]

export function FaqSection() {
  const faqRef = useRef<HTMLDivElement>(null)

  return (
    <section id="faq" ref={faqRef} className="py-24 relative bg-black/50">
      <div className="container mx-auto relative z-10">
        <SectionHeader
          line="bg-orange-500"
          title="PERGUNTAS FREQUENTES"
          description="Respostas para as dúvidas mais comuns sobre nossos serviços e processos."
        />

        <div className="max-w-3xl mx-auto">
          <ScrollReveal delay={300}>
            <Accordion type="single" collapsible className="space-y-4">
              {faqItems.map((item, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="bg-black/50 border border-white/10 px-6 rounded-sm"
                >
                  <AccordionTrigger className="text-left text-lg font-medium py-4 hover:text-orange-400 transition-colors">
                    {item.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-300 pb-4">{item.answer}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </ScrollReveal>

          <ScrollReveal delay={400}>
            <FaqContact />
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}
