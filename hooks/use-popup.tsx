"use client"
import { PopupContext } from "@/app/components/providers/popup-provider"
import { useContext } from "react"

export function usePopup() {
  const context = useContext(PopupContext)

  if (context === undefined) {
    throw new Error("usePopup must be used within a PopupProvider")
  }

  return context
}
