"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { Construction } from "lucide-react";

export default function NotFound() {
  const router = useRouter();
  const [countdown, setCountdown] = useState(10);

  useEffect(() => {
    const redirectTimer = setTimeout(() => {
      router.push("/");
    }, 10000);

    const countdownInterval = setInterval(() => {
      setCountdown((prev) => prev - 1);
    }, 1000);

    return () => {
      clearTimeout(redirectTimer);
      clearInterval(countdownInterval);
    };
  }, [router]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-black">
      <div className="text-center space-y-6">
        {/* Ícone de construção */}
        <Construction className="w-20 h-20 mx-auto text-orange-500" />

        {/* Título */}
        <h1 className="text-7xl max-md:text-5xl font-bold text-orange-500">Página em Desenvolvimento</h1>

        {/* Mensagem */}
        <p className="text-xl text-zinc-500 max-w-5xl mx-auto">
          Estamos trabalhando para trazer uma experiência incrível para você. Enquanto isso, você será redirecionado automaticamente para a página inicial.
        </p>

        {/* Contador regressivo */}
        <div className="text-3xl font-bold text-orange-500">
          Redirecionando em {countdown} segundos...
        </div>

        <Link
          href="/"
          className="group inline-flex items-center justify-start bg-orange-500 text-white p-4 font-bold text-base rounded-3xl shadow-2xl hover:bg-orange-600 transition-colors"
        >
          Retornar para a Página Inicial
        </Link>
      </div>
    </div >
  );
}