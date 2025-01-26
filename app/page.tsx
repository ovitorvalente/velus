import { AboutSession } from "@/components/sessions/about";
import { CardsSession } from "@/components/sessions/cards-session";
import { FaqSession } from "@/components/sessions/faq";
import { Footer } from "@/components/footer/footer";
import { MainSession } from "@/components/sessions/main";
import { PlansSession } from "@/components/sessions/plans";
import { ServicesSession } from "@/components/sessions/services";

export default function Home() {
  return (
    <div className="w-full h-screen flex items-center flex-col">
      <MainSession />
      <CardsSession />
      <AboutSession />
      <PlansSession />
      <ServicesSession />
      <FaqSession />
      <Footer />
    </div>
  );
}
