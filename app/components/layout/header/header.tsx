"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ChevronRight, Menu, X } from "lucide-react";
import { Logo } from "@/components/logo";
import { MainNav } from "../main-nav";
import { MobileNav } from "./mobile-nav";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;

      if (scrollPosition > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed left-0 right-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-white/5 bg-black/80 py-3 backdrop-blur-sm"
          : "bg-transparent py-6"
      }`}
    >
      <nav className="container mx-auto flex items-center justify-between max-md:px-4">
        <Logo />

        <MainNav className="hidden md:flex" />

        <div className="hidden md:block">
          <Button
            onClick={() => {
              document
                .getElementById("contact")
                ?.scrollIntoView({ behavior: "smooth" });
            }}
            className="h-auto border border-transparent bg-orange-500 px-6 py-2 text-black transition-all delay-150 duration-500 hover:border-orange-500 hover:bg-orange-500/10 hover:text-white"
          >
            COMEÇAR AGORA
            <ChevronRight className="ml-2 h-4 w-4" />
          </Button>
        </div>

        <div className="md:hidden">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="text-white hover:bg-white/10"
          >
            {mobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </Button>
        </div>
      </nav>

      {mobileMenuOpen && <MobileNav onClose={() => setMobileMenuOpen(false)} />}
    </header>
  );
}
