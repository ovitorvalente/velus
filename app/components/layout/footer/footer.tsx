"use client";

import type React from "react";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, ArrowRight, Send } from "lucide-react";
import { Logo } from "@/components/logo";
import { SocialLinks } from "@/components/social-links";

function EnhancedFooterNav({
  title,
  titleColor,
  links,
}: {
  title: string;
  titleColor: string;
  links: { label: string; href: string }[];
}) {
  return (
    <div>
      <h3 className={`mb-6 text-lg font-semibold ${titleColor}`}>{title}</h3>
      <ul className="space-y-3">
        {links.map((link, index) => (
          <motion.li
            key={index}
            initial={{ x: -10, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: index * 0.1 }}
          >
            <a
              href={link.href}
              className="group flex items-center text-gray-400 transition-colors hover:text-orange-400"
            >
              <motion.span
                className="inline-block"
                initial={{ width: 0 }}
                whileHover={{ width: 15 }}
                transition={{ duration: 0.2 }}
              >
                <ArrowRight className="mr-2 h-3 w-3 opacity-0 transition-opacity group-hover:opacity-100" />
              </motion.span>
              {link.label}
            </a>
          </motion.li>
        ))}
      </ul>
    </div>
  );
}

export function Footer() {
  const [email, setEmail] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setIsSubscribed(true);
      setTimeout(() => {
        setIsSubscribed(false);
        setEmail("");
      }, 3000);
    }
  };

  return (
    <footer className="relative overflow-hidden border-t border-white/10 bg-black">
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

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/5 to-transparent opacity-10"></div>

      <div className="container relative z-10 mx-auto px-4 py-16">
        <div className="grid gap-12 md:grid-cols-4">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="mb-6"
            >
              <Logo />
            </motion.div>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="mb-6 text-gray-400"
            >
              Criando experiências digitais excepcionais através de design e
              desenvolvimento inovadores.
            </motion.p>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.5 }}
            >
              <SocialLinks />
            </motion.div>
          </div>

          <EnhancedFooterNav
            title="SERVIÇOS"
            titleColor="text-orange-400"
            links={[
              { label: "Desenvolvimento Web", href: "#" },
              { label: "Arte Digital & Design", href: "#" },
              { label: "Soluções E-commerce", href: "#" },
              { label: "Marketing Digital", href: "#" },
            ]}
          />

          <EnhancedFooterNav
            title="EMPRESA"
            titleColor="text-white"
            links={[
              { label: "Sobre Nós", href: "#" },
              { label: "Nosso Trabalho", href: "#" },
              { label: "Carreiras", href: "#" },
              { label: "Contato", href: "#" },
            ]}
          />

          <div>
            <h3 className="mb-6 text-lg font-semibold text-white">CONTATO</h3>
            <ul className="space-y-4">
              <motion.li
                initial={{ x: 20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.1 }}
                className="group flex items-center text-gray-400"
              >
                <div className="mr-3 bg-orange-500/10 p-2 transition-colors group-hover:bg-orange-500/20">
                  <Mail className="h-4 w-4 text-orange-400" />
                </div>
                <span className="transition-colors group-hover:text-orange-400">
                  contato@velus.com
                </span>
              </motion.li>
              <motion.li
                initial={{ x: 20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="group flex items-center text-gray-400"
              >
                <div className="mr-3 bg-orange-500/10 p-2 transition-colors group-hover:bg-orange-500/20">
                  <Phone className="h-4 w-4 text-orange-400" />
                </div>
                <span className="transition-colors group-hover:text-orange-400">
                  +55 (11) 99999-9999
                </span>
              </motion.li>
              <motion.li
                initial={{ x: 20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="group flex items-center text-gray-400"
              >
                <div className="mr-3 bg-orange-500/10 p-2 transition-colors group-hover:bg-orange-500/20">
                  <MapPin className="h-4 w-4 text-orange-400" />
                </div>
                <span className="transition-colors group-hover:text-orange-400">
                  Av. Digital, 123 - São Paulo, SP
                </span>
              </motion.li>
            </ul>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="group relative mb-12 mt-16"
        >
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
          <div className="absolute inset-[1px] bg-black/80 backdrop-blur-sm" />

          <div className="relative flex flex-col items-center justify-between gap-6 p-8 md:flex-row">
            <div>
              <h3 className="mb-2 text-xl font-bold text-white">
                Inscreva-se na nossa newsletter
              </h3>
              <p className="text-gray-400">
                Receba as últimas novidades e ofertas exclusivas.
              </p>
            </div>
            <form onSubmit={handleSubscribe} className="flex w-full md:w-auto">
              <div className="relative flex-grow">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Seu email"
                  className="w-full border border-white/10 bg-black/50 px-4 py-3 text-white transition-colors focus:border-orange-500 focus:outline-none md:w-64"
                  required
                />
              </div>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center bg-orange-500 px-6 py-3 font-medium text-black transition-colors hover:bg-orange-600"
                type="submit"
                disabled={isSubscribed}
              >
                {isSubscribed ? (
                  "Inscrito!"
                ) : (
                  <>
                    Inscrever <Send className="ml-2 h-4 w-4" />
                  </>
                )}
              </motion.button>
            </form>
          </div>
        </motion.div>

        <div className="mt-12 flex flex-col items-center justify-between border-t border-white/10 pt-8 md:flex-row">
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="text-sm text-gray-500"
          >
            © 2025 Velus. Todos os direitos reservados.
          </motion.p>
          <div className="mt-4 flex gap-6 md:mt-0">
            {["Política de Privacidade", "Termos de Serviço", "Cookies"].map(
              (item, index) => (
                <motion.a
                  key={index}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.7 + index * 0.1 }}
                  href="#"
                  className="text-sm text-gray-500 transition-colors hover:text-orange-400"
                >
                  {item}
                </motion.a>
              ),
            )}
          </div>
        </div>
      </div>
    </footer>
  );
}
