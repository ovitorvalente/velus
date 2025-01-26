import { AboutSession } from "@/components/sessions/about";
import { MainSession } from "@/components/sessions/main";
import { PricingSession } from "@/components/sessions/pricing";

export default function Home() {
  return (
    <div className="w-full h-screen flex items-center flex-col">

      {/* Sessoes */}
      <MainSession />
      <AboutSession />
      <PricingSession />
    </div>
  );
}
