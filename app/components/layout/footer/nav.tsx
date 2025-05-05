interface FooterNavProps {
  title: string
  titleColor: string
  links: { label: string; href: string }[]
}

export function FooterNav({ title, titleColor, links }: FooterNavProps) {
  return (
    <div>
      <h3 className={`text-lg font-semibold mb-6 ${titleColor}`}>{title}</h3>
      <ul className="space-y-4">
        {links.map((link, index) => (
          <li key={index}>
            <a href={link.href} className="text-gray-400 hover:text-white transition-colors">
              {link.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  )
}
