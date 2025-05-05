import type React from "react"
import "./globals.css"
import { Inter } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Velus | Desenvolvimento Web & Arte Digital",
  description:
    "Transformando ideias em websites impressionantes e arte digital. Criamos experiências digitais que cativam e convertem.",
  openGraph: {
    title: "Velus | Desenvolvimento Web & Arte Digital",
    description:
      "Transformando ideias em websites impressionantes e arte digital. Criamos experiências digitais que cativam e convertem.",
    url: "https://velus.com",
    siteName: "Velus",
    locale: "pt_BR",
    type: "website",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
