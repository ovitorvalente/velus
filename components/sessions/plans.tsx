"use client"

import { motion } from "framer-motion";
import { Check, X, ArrowRight, Zap, Shield, Smile } from "lucide-react";
import Link from "next/link";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export function PlansSession() {
  const pricingPlans = [
    {
      name: "Básico",
      description: "Ideal para pequenos negócios e startups",
      features: [
        "Landing Page Responsiva",
        "Design Personalizado",
        "SEO Básico",
        "Suporte por E-mail"
      ],
      comingSoon: false,
      link: "https://wa.me/24988700151/?text=Ol%C3%A1%21%20Gostaria%20de%20contratar%20o%20plano%20b%C3%A1sico%20do%20pacote%20de%20voc%C3%AAs.%20Como%20fa%C3%A7o%20para%20prosseguir%3F",
      icon: <Smile className="w-8 h-8 text-orange-500" />,
      benefits: [
        "Suporte 24/7",
        "Garantia de desistência de 7 dias",
        "Atualizações mensais"
      ]
    },
    {
      name: "Avançado",
      description: "Solução completa para empresas em crescimento",
      features: [
        "Site Institucional Completo",
        "Design Premium UI/UX",
        "Otimização Avançada SEO",
        "Integração de APIs",
        "Suporte Prioritário"
      ],
      highlight: true,
      comingSoon: false,
      link: "https://wa.me/24988700151/?text=Ol%C3%A1%21%20Gostaria%20de%20contratar%20o%20plano%20avan%C3%A7ado%20do%20pacote%20de%20voc%C3%AAs.%20Como%20fa%C3%A7o%20para%20prosseguir%3F",
      icon: <Zap className="w-8 h-8 text-orange-500" />,
      benefits: [
        "Suporte 24/7",
        "Garantia de desistência de 7 dias",
        "Atualizações semanais",
      ]
    },
    {
      name: "Enterprise",
      description: "Soluções personalizadas para grandes projetos",
      features: [
        "Desenvolvimento Customizado",
        "Consultoria Estratégica",
        "Suporte Dedicado",
        "Arquitetura Escalável"
      ],
      comingSoon: true,
      link: "https://wa.me/24988700151/?text=Ol%C3%A1%21%20Gostaria%20de%20contratar%20o%20plano%20Enterprise%20do%20pacote%20de%20voc%C3%AAs.%20Como%20fa%C3%A7o%20para%20prosseguir%3F",
      icon: <Shield className="w-8 h-8 text-orange-500" />,
      benefits: [
        "Garantia de desistência de 7 dias",
        "Consultoria personalizada",
        "Suporte dedicado"
      ]
    }
  ];

  return (
    <>
      <section className="flex flex-col items-center w-full min-h-screen mt-24 px-4 bg-gradient-to-b from-white via-white to-orange-500">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-8 md:mb-16 px-4"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-orange-950 mb-4">
            Nossos Planos
          </h1>
          <p className="text-lg md:text-xl text-orange-800 max-w-2xl mx-auto">
            Soluções flexíveis e personalizadas para impulsionar sua presença digital
          </p>
        </motion.div>

        {/* Carrossel para dispositivos móveis */}
        <div className="w-full max-w-7xl px-4 md:hidden">
          <Carousel>
            <CarouselContent>
              {pricingPlans.map((plan, index) => (
                <CarouselItem key={plan.name} className="basis-full">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 * index }}
                    className={`
                      bg-white rounded-3xl p-6 shadow-lg 
                      ${plan.highlight ? 'border-2 border-orange-500' : 'border border-orange-100'}
                      ${plan.comingSoon ? 'opacity-50' : ''}
                      hover:shadow-xl transition-all duration-300
                    `}
                  >
                    <div className="flex flex-col h-full">
                      <div className="text-center">
                        <div className="flex justify-center mb-4">
                          {plan.icon}
                        </div>
                        <h2 className="text-2xl font-bold text-orange-950 mb-2">
                          {plan.name}
                          {plan.highlight && (
                            <span className="ml-2 text-xs bg-orange-500 text-white px-2 py-0.5 rounded-full">
                              Mais Popular
                            </span>
                          )}
                        </h2>
                        <p className="text-orange-800 mb-4">{plan.description}</p>
                      </div>

                      <ul className="flex-grow mb-6">
                        {plan.features.map((feature) => (
                          <li
                            key={feature}
                            className="flex items-center gap-2 mb-2 text-orange-950/80"
                          >
                            {plan.comingSoon ?
                              <X className="w-5 h-5 text-red-500" /> :
                              <Check className="w-5 h-5 text-green-500" />
                            }
                            {feature}
                          </li>
                        ))}
                      </ul>

                      {!plan.comingSoon ? (
                        <Link
                          href={plan.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-full flex items-center justify-center bg-orange-500 text-white py-2 rounded-full hover:bg-orange-600 transition-colors group"
                        >
                          Escolher Plano
                          <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </Link>
                      ) : (
                        <div className="w-full text-center text-orange-600 font-bold py-2">
                          Em Desenvolvimento
                        </div>
                      )}

                      {plan.benefits && (
                        <div className="mt-6 text-sm text-orange-800">
                          <h3 className="font-semibold mb-2">Benefícios Inclusos:</h3>
                          <ul>
                            {plan.benefits.map((benefit, i) => (
                              <li key={i} className="flex items-center gap-2 mb-1">
                                <Check className="w-4 h-4 text-green-500" />
                                {benefit}
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </div>
                  </motion.div>
                </CarouselItem>
              ))}
            </CarouselContent>
            {/* Setas de navegação no mobile */}
            <CarouselPrevious className="left-2 md:left-4" />
            <CarouselNext className="right-2 md:right-4" />
          </Carousel>
        </div>

        {/* Grid para dispositivos maiores */}
        <div className="hidden md:grid md:grid-cols-3 gap-6 max-w-7xl w-full px-4">
          {pricingPlans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 * index }}
              className={`
                bg-white rounded-3xl p-6 md:p-8 shadow-lg 
                ${plan.highlight ? 'border-2 border-orange-500 md:scale-105' : 'border border-orange-100'}
                ${plan.comingSoon ? 'opacity-50' : ''}
                hover:shadow-xl transition-all duration-300
              `}
            >
              <div className="flex flex-col h-full">
                <div className="text-center">
                  <div className="flex justify-center mb-4">
                    {plan.icon}
                  </div>
                  <h2 className="text-2xl font-bold text-orange-950 mb-2">
                    {plan.name}
                    {plan.highlight && (
                      <span className="ml-2 text-xs bg-orange-500 text-white px-2 py-0.5 rounded-full">
                        Mais Popular
                      </span>
                    )}
                  </h2>
                  <p className="text-orange-800 mb-4">{plan.description}</p>
                </div>

                <ul className="flex-grow mb-6">
                  {plan.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-center gap-2 mb-2 text-orange-950/80"
                    >
                      {plan.comingSoon ?
                        <X className="w-5 h-5 text-red-500" /> :
                        <Check className="w-5 h-5 text-green-500" />
                      }
                      {feature}
                    </li>
                  ))}
                </ul>

                {!plan.comingSoon ? (
                  <Link
                    href={plan.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full flex items-center justify-center bg-orange-500 text-white py-2 md:py-3 rounded-full hover:bg-orange-600 transition-colors group"
                  >
                    Escolher Plano
                    <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                ) : (
                  <div className="w-full text-center text-orange-600 font-bold py-2 md:py-3">
                    Em Desenvolvimento
                  </div>
                )}

                {plan.benefits && (
                  <div className="mt-6 text-sm text-orange-800">
                    <h3 className="font-semibold mb-2">Benefícios Inclusos:</h3>
                    <ul>
                      {plan.benefits.map((benefit, i) => (
                        <li key={i} className="flex items-center gap-2 mb-1">
                          <Check className="w-4 h-4 text-green-500" />
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </>
  );
}