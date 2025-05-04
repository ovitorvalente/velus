import { ScrollReveal } from "./scroll-reveal"

interface SectionHeaderProps {
  line: string
  title: string
  description: string
}

export function SectionHeader({ line, title, description }: SectionHeaderProps) {
  return (
    <div className="flex flex-col md:flex-row md:items-end justify-between mb-16">
      <ScrollReveal>
        <div>
          <div className={`w-24 h-1 ${line} mb-6`}></div>
          <h2 className="text-3xl md:text-5xl font-bold">{title}</h2>
        </div>
      </ScrollReveal>
      <ScrollReveal delay={200}>
        <p className="text-gray-400 max-w-md mt-4 md:mt-0">{description}</p>
      </ScrollReveal>
    </div>
  )
}
