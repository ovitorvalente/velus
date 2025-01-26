"use client"

import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"; // Importe os componentes do shadcn

export function FaqSession() {
  // Variável com as perguntas e respostas
  const faqItems = [
    {
      question: "Posso mudar de plano depois?",
      answer: "Sim, você pode mudar de plano a qualquer momento. Entre em contato conosco para fazer a alteração.",
    },
    {
      question: "Há suporte disponível?",
      answer: "Oferecemos suporte 24/7 para todos os planos, via e-mail, chat e telefone.",
    },
    {
      question: "Qual é a política de reembolso?",
      answer: "Oferecemos uma garantia de desistência de 7 dias. Se não estiver satisfeito, reembolsaremos seu dinheiro.",
    },
    {
      question: "Posso cancelar meu plano a qualquer momento?",
      answer: "Sim, você pode cancelar seu plano a qualquer momento sem taxas adicionais.",
    },
    {
      question: "Como funciona a garantia de 7 dias?",
      answer: "Se você não estiver satisfeito com nossos serviços nos primeiros 7 dias, basta nos informar para receber um reembolso total.",
    },
    {
      question: "Vocês oferecem descontos para planos anuais?",
      answer: "Sim, oferecemos descontos especiais para planos anuais. Entre em contato para saber mais.",
    },
    {
      question: "Posso personalizar meu plano?",
      answer: "Sim, no plano Enterprise, oferecemos soluções totalmente personalizadas para atender às suas necessidades.",
    },
  ];

  return (
    <>
      <section className="w-full bg-white py-16">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-5xl font-bold text-black mb-4 max-md:text-4xl underline decoration-wavy underline-offset-auto decoration-orange-500">
              Perguntas Frequentes
            </h2>
            <p className="text-xl text-orange-950 max-md:text-base">
              Tire suas dúvidas sobre nossos planos e serviços
            </p>
          </motion.div>

          <Accordion type="single" collapsible className="w-full">
            {faqItems.map((item, index) => (
              <AccordionItem key={`item-${index}`} value={`item-${index}`}>
                <AccordionTrigger className="text-orange-950 hover:text-orange-700 text-xl">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="text-orange-800 text-lg">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>
    </>
  );
}