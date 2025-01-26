"use client"
import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "../ui/button";
import { ArrowUpRight } from "lucide-react";
import { AboutChart } from "../charts/aboutChart";

export function AboutSession() {
  return (
    <section className="w-full flex flex-col items-center justify-center my-8 md:py-16 bg-gradient-to-b from-white via-orange-50 to-white">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="flex w-full max-w-[90%] lg:max-w-[80%] gap-8 flex-col lg:flex-row items-center justify-between"
      >
        <div className="flex items-start justify-center text-start flex-col gap-8 max-w-3xl">
          <h2 className="text-4xl md:text-5xl font-bold text-orange-950 underline decoration-wavy underline-offset-8 decoration-orange-500">
            Sobre a Velus
          </h2>

          <div className="flex gap-8">
            <span className="w-6 rounded-full bg-gradient-to-b from-transparent via-orange-500/50 to-transparent" />
            <div className="flex flex-col gap-8">
              <p className="text-lg md:text-2xl text-orange-950/80 text-justify">
                A Velus é uma empresa especializada em soluções digitais que transforma o potencial de tecnologia e criatividade em resultados reais para empresas e profissionais. Com foco em inovação, qualidade e personalização, oferecemos serviços como desenvolvimento de sites e lojas virtuais, criação de APIs, design de identidade visual, estratégias de SEO e marketing digital.
              </p>

              <p className="text-lg md:text-2xl text-orange-950/80 text-justify">
                Nosso compromisso é atender às necessidades únicas de cada cliente, oferecendo suporte contínuo e resultados comprovados. Com uma equipe altamente qualificada, buscamos ser referência em inovação digital, construindo parcerias sólidas para impulsionar o sucesso dos nossos clientes no mercado.
              </p>
            </div>
          </div>
        </div>
        <div className="bg-gradient-to-tl from-orange-50/5 via-orange-500/20 to-orange-100/5 p-6 md:p-8 rounded-3xl w-full max-w-2xl">
          <AboutChart />
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="flex items-center justify-center w-full mt-8 md:mt-16 px-4"
      >
        <span className="w-[10%] md:w-[22%] h-1 bg-gradient-to-r from-white via-orange-200 to-orange-500" />
        <Link href={"/about"} className="group w-full md:w-[20%] flex items-center justify-center gap-2 px-4 py-2 bg-transparent text-orange-950 hover:text-orange-50 font-bold rounded-full hover:bg-orange-500 ring-2 ring-orange-500 transition-all delay-75 duration-500">
          Saiba mais sobre nós
          <Button size={"icon"} className="rounded-full rotate-45 group-hover:rotate-0 bg-orange-500 group-hover:bg-background group-hover:text-foreground transition-all delay-75 duration-500">
            <ArrowUpRight />
          </Button>
        </Link>
        <span className="w-[10%] md:w-full h-1 bg-gradient-to-r from-orange-500 via-orange-200 to-transparent" />
      </motion.div>
    </section>
  );
}