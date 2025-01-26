"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "../ui/button";
import { ArrowUpRight } from "lucide-react";
import { MobileHeader } from "./mobileHeader";

export function Header() {
  const pathname = usePathname();

  const menuOption = [
    {
      text: "Página Inicial",
      link: "/",
    },
    {
      text: "Quem Somos",
      link: "/about",
    },
  ];

  return (
    <>
      <header className="flex items-center justify-center w-full fixed top-0 py-4 z-50 backdrop-blur-3xl border-b border-orange-50/10 px-4">
        <div className="flex items-center justify-between w-full max-w-5xl">
          <div className="group flex items-center justify-center bg-orange-100 max-md:bg-orange-500 cursor-pointer hover:bg-orange-500 transition-all delay-75 duration-500 rounded-e-full rounded-bl-full p-1">
            <Link href="/"
              className="font-bold mx-4 text-2xl text-orange-500 group-hover:text-orange-50 max-md:text-orange-50 transition-all delay-75 duration-500"
            >
              Velus
            </Link>
          </div>
          <nav className="flex items-center justify-center p-1 rounded-full bg-orange-50/50 border shadow-2xl gap-2 max-md:hidden">
            {menuOption.map((item, index) => (
              <Link
                href={item.link}
                key={index}
                className={`font-bold rounded-full px-4 py-2 transition-all delay-75 duration-700 ${pathname === item.link
                  ? "bg-orange-500 text-orange-50 hover:opacity-50"
                  : "text-orange-950 hover:text-orange-500"
                  }`}
              >
                {item.text}
              </Link>
            ))}
          </nav>
          <Link
            href={
              "http://wa.me/+5524988700151/?text=Olá! Estou entrando em contato para saber mais sobre os serviços e soluções oferecidos. Poderia me ajudar?"
            }
            target="_blank"
            rel="noopener noreferrer"
            className="group max-md:hidden flex items-center justify-center gap-2 pl-4 pr-1 py-1 bg-orange-500 text-background hover:text-orange-950 font-bold rounded-full hover:bg-transparent ring-2 ring-orange-500 transition-all delay-75 duration-500"
          >
            Contate-nos
            <Button
              size={"icon"}
              className="rounded-full group-hover:rotate-45 group-hover:bg-orange-500 transition-all delay-75 duration-500"
            >
              <ArrowUpRight />
            </Button>
          </Link>
        </div>

        <MobileHeader />
      </header>
    </>
  );
}