"use client";

import { useState } from "react";
import { ArrowRight, MessageSquare, X } from "lucide-react";
import { Button } from "@/components/ui (shadcn)/button";

export function ChatWidget() {
  const [showChat, setShowChat] = useState(false);

  return (
    <div className="fixed bottom-6 left-6 z-40">
      <button
        onClick={() => setShowChat(!showChat)}
        className="rounded-full bg-orange-500 p-3"
      >
        {showChat ? (
          <X className="h-6 w-6 text-black" />
        ) : (
          <MessageSquare className="h-6 w-6 text-black" />
        )}
      </button>

      {showChat && (
        <div className="absolute bottom-16 left-0 w-72 border border-white/10 bg-black/90 animate-in fade-in slide-in-from-bottom-5 md:w-80">
          <div className="border-b border-white/10 p-4">
            <h3 className="font-bold text-white"> Chat ao vivo </h3>
            <p className="text-xs text-gray-400">
              {" "}
              Estamos online e prontos para ajudar{" "}
            </p>
          </div>
          <div className="h-64 overflow-y-auto p-4">
            <div className="flex flex-col gap-3">
              <div className="max-w-[80%] self-start bg-orange-900/30 p-3">
                <p className="text-sm">
                  {" "}
                  Olá! Como podemos ajudar você hoje ?{" "}
                </p>
              </div>
            </div>
          </div>
          <div className="border-t border-white/10 p-4">
            <div className="flex gap-2">
              <input
                type="text"
                placeholder="Digite sua mensagem..."
                className="flex-1 border border-white/10 bg-black/70 p-2 text-sm text-white focus:border-orange-500 focus:outline-none"
              />
              <Button size="icon" className="bg-orange-500 text-black">
                <ArrowRight className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
