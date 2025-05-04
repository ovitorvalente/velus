"use client"
import { usePopup } from "@/hooks/use-popup"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "./ui/dialog"
import { Input } from "./ui/input"

export function SpecialOfferPopup() {
  const { showPopup, setShowPopup } = usePopup()

  if (!showPopup) return null

  return (
    <>
      <Dialog open={showPopup} onOpenChange={setShowPopup}>
        <DialogContent className="w-full max-w-sm bg-black/80 p-8 hover:bg-orange-800/5 shadow-2xl shadow-orange-900/15 backdrop-blur-3xl transition-all delay-300 duration-300">
          <div className="flex flex-col items-center">
            <div className="w-16 h-1 bg-orange-500 mb-8 mx-auto" />
            <DialogHeader>
              <DialogTitle className="text-xl md:text-2xl font-bold mb-4 text-center">OFERTA ESPECIAL</DialogTitle>
              <DialogDescription className="text-center text-gray-300 mb-6">
                Inscreva-se agora e ganhe <span className="font-bold text-orange-400">10% de desconto extra</span> em qualquer
                serviço!
              </DialogDescription>
            </DialogHeader>

            <div className="flex flex-col w-full mt-8 space-y-4">
              <Input
                type="email"
                className="w-full border border-white/10 p-3 text-white focus:border-orange-500 focus:outline-none transition-all hover:border-orange-900 delay-300 duration-300"
                placeholder="seu@email.com"
              />
              <Button className="w-full bg-orange-500 hover:bg-orange-900 transition-all delay-150 duration-150 text-black">QUERO RECEBER O DESCONTO</Button>
              <p className="text-xs text-gray-500 text-center">
                Ao se inscrever, você concorda com nossos termos e política de privacidade.
              </p>
            </div>

          </div>
        </DialogContent>
      </Dialog>
    </>
  )
}
