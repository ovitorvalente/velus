"use client";
import { usePopup } from "@/hooks/use-popup";
import { Button } from "@/components/ui (shadcn)/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "./ui (shadcn)/dialog";
import { Input } from "./ui (shadcn)/input";

export function SpecialOfferPopup() {
  const { showPopup, setShowPopup } = usePopup();

  if (!showPopup) return null;

  return (
    <>
      <Dialog open={showPopup} onOpenChange={setShowPopup}>
        <DialogContent className="w-full max-w-sm bg-black/80 p-8 shadow-2xl shadow-orange-900/15 backdrop-blur-3xl transition-all delay-300 duration-300 hover:bg-orange-800/5">
          <div className="flex flex-col items-center">
            <div className="mx-auto mb-8 h-1 w-16 bg-orange-500" />
            <DialogHeader>
              <DialogTitle className="mb-4 text-center text-xl font-bold md:text-2xl">
                OFERTA ESPECIAL
              </DialogTitle>
              <DialogDescription className="mb-6 text-center text-gray-300">
                Inscreva-se agora e ganhe{" "}
                <span className="font-bold text-orange-400">
                  10% de desconto extra
                </span>{" "}
                em qualquer serviço!
              </DialogDescription>
            </DialogHeader>

            <div className="mt-8 flex w-full flex-col space-y-4">
              <Input
                type="email"
                className="w-full border border-white/10 p-3 text-white transition-all delay-300 duration-300 hover:border-orange-900 focus:border-orange-500 focus:outline-none"
                placeholder="seu@email.com"
              />
              <Button className="w-full bg-orange-500 text-black transition-all delay-150 duration-150 hover:bg-orange-900">
                QUERO RECEBER O DESCONTO
              </Button>
              <p className="text-center text-xs text-gray-500">
                Ao se inscrever, você concorda com nossos termos e política de
                privacidade.
              </p>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}
