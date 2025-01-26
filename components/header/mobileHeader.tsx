"use client"

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import Link from "next/link"
import { Button } from "../ui/button"
import { AlignRight, ArrowUpRight, ChevronRight } from "lucide-react"

const menuOption = [
  {
    text: "Pagina Inicial",
    link: "/",
  },
  {
    text: "Serviços",
    link: "/services",
  },

  {
    text: "Quem Somos",
    link: "/about",
  },
]

export function MobileHeader() {
  return (
    <>
      <Sheet>
        <SheetTrigger className="md:hidden hover:text-orange-500 transition-colors delay-75 duration-500">
          <AlignRight />
        </SheetTrigger>
        <SheetContent
          side={"top"}
          className="w-full h-full"
        >
          <SheetHeader className="hidden">
            <SheetTitle></SheetTitle>
            <SheetDescription>
            </SheetDescription>
          </SheetHeader>

          <div className="w-full h-full p-4 gap-4 flex flex-col mt-12">
            {menuOption.map((item, index) => (
              <Link
                key={index}
                href={item.link}
                className={`group flex items-center justify-between font-bold hover:text-orange-500 text-4xl transition-all delay-75 duration-700 `}
              >
                {item.text}
                <ChevronRight className="opacity-0 group-hover:opacity-100 text-orange-500 transition-opacity ease-in-out delay-75 duration-500" />
              </Link>
            ))}

            <Link href={"/me"} className="group text-3xl gap-4 fixed bottom-12 w-[80%] flex items-center justify-end pr-1 py-1 bg-orange-500 text-background hover:text-orange-950 font-bold rounded-full hover:bg-transparent ring-2 ring-orange-500 transition-all delay-75 duration-500">
              Contate-nos
              <Button className="rounded-full flex items-center justify-center w-12 h-12 group-hover:rotate-45 group-hover:bg-orange-500 transition-all delay-75 duration-500">
                <ArrowUpRight />
              </Button>
            </Link>
          </div>
        </SheetContent>
      </Sheet >
    </>
  )
}