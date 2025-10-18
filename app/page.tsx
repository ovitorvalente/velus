import { HomeSection } from "../components/sections/home.section";
import { ProcessoSection } from "../components/sections/processo.section";
import { FAQSection } from "../components/sections/faq.section";
import { SobreSection } from "@/components/sections/sobre.section";

export default function Home() {
  return (
    <main>
      <HomeSection />
      <ProcessoSection />
      <FAQSection />
      <SobreSection />
      <section
        id="contato"
        className="flex h-screen flex-col items-center justify-center"
      >
        <h1>Contato</h1>
      </section>
    </main>
  );
}
