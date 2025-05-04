import { ScrollReveal } from "../scroll-reveal";

interface SectionHeaderProps {
  line: string;
  title: string;
  description: string;
}

export function SectionHeader({
  line,
  title,
  description,
}: SectionHeaderProps) {
  return (
    <div className="mb-16 flex flex-col justify-between md:flex-row md:items-end">
      <ScrollReveal>
        <div>
          <div className={`h-1 w-24 ${line} mb-6`}></div>
          <h2 className="text-3xl font-bold md:text-5xl">{title}</h2>
        </div>
      </ScrollReveal>
      <ScrollReveal delay={200}>
        <p className="mt-4 max-w-md text-gray-400 md:mt-0">{description}</p>
      </ScrollReveal>
    </div>
  );
}
