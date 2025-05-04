import { Suspense } from "react";
import { PopupProvider } from "./components/providers/popup-provider";
import { ParticlesContainer } from "@/components/particles-container";
import { LoadingSpinner } from "@/components/loading-spinner";
import { HomePageSections } from "./components/home/homepage-sections";
import { Header } from "./components/layout/header/header";
import { Footer } from "./components/layout/footer/footer";

export default function Home() {
  return (
    <PopupProvider>
      <div className="min-h-screen bg-black text-white overflow-hidden">
        <ParticlesContainer />
        <Header />
        <Suspense fallback={<LoadingSpinner />}>
          <HomePageSections />
        </Suspense>
        <Footer />
      </div>
    </PopupProvider>
  );
}
