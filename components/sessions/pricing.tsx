"use client"

import { motion } from "framer-motion";
import { Check, X, ArrowRight } from "lucide-react";
import Link from "next/link";

export function PricingSession() {
  const pricingPlans = [
    {
      name: "Básico",
      price: 499,
      description: "Ideal para pequenos negócios e startups",
      features: [
        "Landing Page Responsiva",
        "Design Personalizado",
        "SEO Básico",
        "Suporte por E-mail"
      ],
      comingSoon: false
    },
    {
      name: "Avançado",
      price: 999,
      description: "Solução completa para empresas em crescimento",
      features: [
        "Site Institucional Completo",
        "Design Premium UI/UX",
        "Otimização Avançada SEO",
        "Integração de APIs",
        "Suporte Prioritário"
      ],
      highlight: true,
      comingSoon: false
    },
    {
      name: "Enterprise",
      price: "Sob Consulta",
      description: "Soluções personalizadas para grandes projetos",
      features: [
        "Desenvolvimento Customizado",
        "Consultoria Estratégica",
        "Suporte Dedicado",
        "Arquitetura Escalável"
      ],
      comingSoon: true
    }
  ];

  return (
    <>
      <div className="fixed inset-0 bg-gradient-to-br from-zinc-100 to-orange-50 -z-50" />
      <section className="flex flex-col items-center w-full min-h-screen mt-24 px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl font-bold text-orange-950 mb-4">
            Nossos Planos
          </h1>
          <p className="text-xl text-orange-800 max-w-2xl mx-auto">
            Soluções flexíveis e personalizadas para impulsionar sua presença digital
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl w-full">
          {pricingPlans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 * index }}
              className={`
                bg-white rounded-3xl p-8 shadow-lg 
                ${plan.highlight ? 'border-2 border-orange-500 scale-105' : 'border border-orange-100'}
                ${plan.comingSoon ? 'opacity-50' : ''}
                hover:shadow-xl transition-all duration-300
              `}
            >
              <div className="flex flex-col h-full">
                <div>
                  <h2 className="text-2xl font-bold text-orange-950 mb-2">
                    {plan.name}
                    {plan.highlight && (
                      <span className="ml-2 text-xs bg-orange-500 text-white px-2 py-0.5 rounded-full">
                        Mais Popular
                      </span>
                    )}
                  </h2>
                  <p className="text-orange-800 mb-4">{plan.description}</p>
                  <div className="text-4xl font-bold text-orange-950 mb-6">
                    {plan.comingSoon ? "Em Breve" : `R$ ${plan.price}`}
                    {!plan.comingSoon && <span className="text-base text-orange-600">/mês</span>}
                  </div>
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
                    href="/contato"
                    className="w-full flex items-center justify-center bg-orange-500 text-white py-3 rounded-full hover:bg-orange-600 transition-colors group"
                  >
                    Escolher Plano
                    <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                ) : (
                  <div className="w-full text-center text-orange-600 font-bold py-3">
                    Em Desenvolvimento
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