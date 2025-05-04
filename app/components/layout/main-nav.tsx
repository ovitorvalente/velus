"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import Link from "next/link";

interface NavLink {
  label: string;
  href: `#${string}`;
  id: string;
}

export function MainNav({ className = "" }: { className?: string }) {
  const [activeSection, setActiveSection] = useState<string>("home");
  const [isScrolling, setIsScrolling] = useState<boolean>(false);
  const scrollTimeout = useRef<ReturnType<typeof setTimeout> | null>(null);

  const Links = useRef<NavLink[]>([
    { label: "INÍCIO", href: "#home", id: "home" },
    { label: "SERVIÇOS", href: "#services", id: "services" },
    { label: "PORTFÓLIO", href: "#portfolio", id: "portfolio" },
    { label: "PROCESSO", href: "#process", id: "process" },
    { label: "TESTEMUNHOS", href: "#testimonials", id: "testimonials" },
    { label: "FAQ", href: "#faq", id: "faq" },
    { label: "CONTATO", href: "#contact", id: "contact" },
  ]).current;

  const setupObservers = useCallback(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (isScrolling) return;

        entries.forEach((entry) => {
          if (entry.isIntersecting && entry.intersectionRatio >= 0.5) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        threshold: [0.1, 0.5, 0.9],
        rootMargin: "0px 0px -25% 0px",
      }
    );

    Links.forEach(({ id }) => {
      const section = document.getElementById(id);
      if (section) observer.observe(section);
    });

    return () => observer.disconnect();
  }, [isScrolling, Links]);

  const handleScroll = useCallback(() => {
    if (isScrolling) return;

    if (scrollTimeout.current) {
      clearTimeout(scrollTimeout.current);
    }

    scrollTimeout.current = setTimeout(() => {
      const scrollPos = window.scrollY + window.innerHeight / 3;

      Links.forEach(({ id }) => {
        const section = document.getElementById(id);
        if (!section) return;

        const { offsetTop, offsetHeight } = section;
        if (scrollPos >= offsetTop && scrollPos < offsetTop + offsetHeight) {
          setActiveSection(id);
        }
      });
    }, 100);
  }, [isScrolling, Links]);

  const scrollToSection = (id: string) => {
    setIsScrolling(true);
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
    setTimeout(() => setIsScrolling(false), 1000);
  };

  useEffect(() => {
    setupObservers();
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (scrollTimeout.current) {
        clearTimeout(scrollTimeout.current);
      }
    };
  }, [setupObservers, handleScroll]);

  return (
    <nav className={`flex items-center gap-8 ${className}`}>
      {Links.map((link) => (
        <Link
          key={link.id}
          href={link.href}
          onClick={(e) => {
            e.preventDefault();
            scrollToSection(link.id);
          }}
          className={`text-sm transition-colors duration-300 ${
            activeSection === link.id
              ? "text-orange-500 font-bold"
              : "text-white hover:text-orange-300"
          }`}
        >
          {link.label}
        </Link>
      ))}
    </nav>
  );
}
