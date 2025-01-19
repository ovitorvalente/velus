import { Header } from "@/components/header/header";
import { Main } from "@/components/sessions/main";

export default function Home() {
  return (
    <div className="w-full h-screen flex items-center flex-col px-8">
      <Header />

      {/* Sessoes */}
      <Main />
    </div>
  );
}
