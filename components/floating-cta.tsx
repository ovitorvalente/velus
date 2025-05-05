"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui (shadcn)/button";
import { Phone, X } from "lucide-react";

export function FloatingCTA() {
  const [isVisible, setIsVisible] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > window.innerHeight * 0.6) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
        setIsOpen(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-20 right-6 z-40">
      {isOpen ? (
        <div className="border border-white/10 bg-black/90 p-4">
          <button
            onClick={() => setIsOpen(false)}
            className="absolute right-2 top-2 text-gray-400 hover:text-white"
          >
            <X className="h-4 w-4" />
          </button>
          <div className="mb-4">
            <h3 className="mb-1 font-bold text-white">Precisa de ajuda?</h3>
            <p className="text-xs text-gray-300">
              Fale com um especialista agora
            </p>
          </div>
          <div className="flex gap-2">
            <Button className="w-full bg-orange-500 font-medium text-black hover:bg-orange-600">
              <Phone className="mr-2 h-4 w-4" /> Ligar agora
            </Button>
          </div>
        </div>
      ) : (
        <button
          onClick={() => setIsOpen(true)}
          className="rounded-full bg-orange-500 p-3"
        >
          <Phone className="h-6 w-6 text-black" />
        </button>
      )}
    </div>
  );
}
