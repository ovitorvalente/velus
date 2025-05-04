import { Suspense } from "react"
import { PopupProvider } from "./components/providers/popup-provider"
import { ParticlesContainer } from "@/components/particles-container"
import { SiteHeader } from "@/components/header"
import { LoadingSpinner } from "@/components/loading-spinner"
import { HomePageSections } from "./components/home/homepage-sections"
import { SiteFooter } from "@/components/site-footer"

export default function Home() {
  return (
    <PopupProvider>
      <div className="min-h-screen bg-black text-white overflow-hidden">
        <ParticlesContainer />
        <SiteHeader />
        <Suspense fallback={<LoadingSpinner />}>
          <HomePageSections />
        </Suspense>
        <SiteFooter />
      </div>
    </PopupProvider>
  )
}
