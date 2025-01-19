"use client"
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Main() {
  const stats = [
    { label: "Negócios", value: "11.800+" },
    { label: "Contas bancárias", value: "4.700+" },
    { label: "Transações", value: "1,1 milhões" },
    { label: "Valor da transação", value: "U$$ 812 milhões" }
  ];

  return (
    <>
      <div className="fixed inset-0 bg-white -z-10" />

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 bg-white z-50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <span className="text-xl font-bold">Logo</span>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <Link href="#" className="text-gray-600 hover:text-gray-900">Características</Link>
              <Link href="#" className="text-gray-600 hover:text-gray-900">Preços</Link>
              <Link href="#" className="text-gray-600 hover:text-gray-900">Atualizações</Link>
              <Link href="#" className="text-gray-600 hover:text-gray-900">História</Link>
              <Link href="#" className="text-gray-600 hover:text-gray-900">Download</Link>
              <Link href="#" className="text-gray-600 hover:text-gray-900">Desenvolvedores</Link>
              <Button variant="outline" className="ml-4">Entrar</Button>
            </div>
          </div>
        </div>
      </nav>

      <section className="relative min-h-screen">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Left Column */}
            <div className="flex flex-col justify-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <span className="inline-block px-4 py-1 bg-gray-100 rounded-full text-sm mb-6">
                  Atualizações de produtos de outubro →
                </span>

                <h1 className="text-5xl font-medium text-gray-900 leading-tight mb-8">
                  Faturamento, controle de tempo, reconciliação de arquivos, armazenamento, visão geral financeira e seu próprio assistente feito para
                  <span className="font-bold">Fovocêeere</span>
                </h1>

                <div className="flex gap-4 mb-12">
                  <Button className="bg-black text-white hover:bg-gray-800">
                    Fale com os fundadores
                  </Button>
                  <Button variant="outline" className="border-2">
                    Experimente grátis
                  </Button>
                </div>

                <p className="text-sm text-gray-500">
                  Aproveite a oferta de US$ 49/mês, gratuita durante o beta.
                </p>
              </motion.div>

              {/* Stats Section */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="grid grid-cols-2 lg:grid-cols-4 gap-8 mt-16"
              >
                {stats.map((stat, index) => (
                  <div key={index} className="space-y-2">
                    <dt className="text-sm text-gray-500">{stat.label}</dt>
                    <dd className="text-xl font-mono font-medium text-gray-900">{stat.value}</dd>
                  </div>
                ))}
              </motion.div>
            </div>

            {/* Right Column - Dashboard Preview */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="relative"
            >
              <div className="transform rotate-3 origin-top-left">
                <div className="bg-gray-100 rounded-lg shadow-2xl p-4">
                  <div className="aspect-w-16 aspect-h-12 bg-white rounded-lg">
                    {/* Replace with your actual dashboard preview */}
                    <div className="w-full h-full bg-gray-50 rounded-lg"></div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}