"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Button } from "../ui/button";
import { Separator } from "../ui/separator";

const NAV_ITEMS = [
  { label: "Serviços", href: "#servicos" },
  { label: "Portfólio", href: "#portfolio" },
  { label: "Processo", href: "#processo" },
  { label: "FAQ", href: "#faq" },
  { label: "Sobre", href: "#sobre" },
  { label: "Contato", href: "#contato" },
] as const;

export function Header() {
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    // Função para atualizar a seção ativa
    const updateActiveSection = () => {
      const hash = window.location.hash.slice(1) || "home";
      setActiveSection(hash);
    };

    // Função para detectar seção ativa baseada no scroll
    const handleScroll = () => {
      const sections = document.querySelectorAll("section[id], div[id]");
      const scrollPosition = window.scrollY + 100; // Offset para melhor detecção

      let currentSection = "home";

      sections.forEach((section) => {
        const sectionElement = section as HTMLElement;
        const sectionTop = sectionElement.offsetTop;
        const sectionHeight = sectionElement.offsetHeight;
        const sectionId = section.id;

        if (
          scrollPosition >= sectionTop &&
          scrollPosition < sectionTop + sectionHeight
        ) {
          currentSection = sectionId;
        }
      });

      // Atualizar hash na URL se mudou
      if (currentSection !== activeSection) {
        window.history.replaceState(null, "", `#${currentSection}`);
        setActiveSection(currentSection);
      }
    };

    // Definir seção ativa inicial
    updateActiveSection();

    // Listeners para diferentes eventos
    window.addEventListener("hashchange", updateActiveSection);
    window.addEventListener("scroll", handleScroll);
    window.addEventListener("click", (e) => {
      // Detectar cliques em links internos
      const target = e.target as HTMLElement;
      const link = target.closest('a[href^="#"]');
      if (link) {
        setTimeout(updateActiveSection, 100); // Pequeno delay para o hash mudar
      }
    });

    // Cleanup dos listeners
    return () => {
      window.removeEventListener("hashchange", updateActiveSection);
      window.removeEventListener("scroll", handleScroll);
    };
  }, [activeSection]);

  return (
    <header className="fixed left-0 right-0 top-0 z-50 flex items-center justify-between bg-black/80 backdrop-blur-3xl">
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between py-4 max-lg:p-4">
        <div className="flex items-center gap-8">
          <Link
            href="#home"
            className={`group flex items-center gap-2 transition-all duration-300 hover:text-primary ${
              activeSection === "home" ? "font-semibold text-primary" : ""
            }`}
          >
            <span className="text-2xl font-bold">VELUS</span>
          </Link>
          <Separator orientation="vertical" className="h-4" />
          <nav className="flex items-center gap-8">
            {NAV_ITEMS.map(({ label, href }) => {
              const section = href.slice(1); // Remove o # do href
              const isActive = activeSection === section;

              return (
                <Link
                  key={href}
                  href={href}
                  className={`text-sm font-medium transition-all duration-300 hover:text-primary ${
                    isActive
                      ? "font-semibold text-primary"
                      : "text-muted-foreground"
                  }`}
                >
                  {label.toUpperCase()}
                </Link>
              );
            })}
          </nav>
        </div>
        <Button
          variant="outline"
          className="rounded-full transition-all duration-300 hover:bg-primary hover:text-primary-foreground"
        >
          Fale conosco
        </Button>
      </div>
    </header>
  );
}
