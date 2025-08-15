import { HomeSection } from "../components/sections/home.section";
import { ProcessoSection } from "../components/sections/processo.section";

export default function Home() {
  return (
    <main>
      <HomeSection />
      <ProcessoSection />

      <section
        id="contato"
        className="flex h-screen flex-col items-center justify-center"
      >
        <h1>Contato</h1>
      </section>
    </main>
  );
}
