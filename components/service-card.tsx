import type { ReactNode } from "react"
import { CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/button"

interface ServiceCardProps {
  icon: ReactNode
  iconBg: string
  title: string
  titleColor: string
  description: string
  features: string[]
  featureIconColor: string
  originalPrice: string
  price: string
  priceColor: string
  buttonColor: string
  popular?: boolean
}

export function ServiceCard({
  icon,
  iconBg,
  title,
  titleColor,
  description,
  features,
  featureIconColor,
  originalPrice,
  price,
  priceColor,
  buttonColor,
  popular = false,
}: ServiceCardProps) {
  return (
    <div className="bg-transparent border border-white/10 p-8 h-full hover:border-orange-500 transition-colors delay-150 duration-500 hover:bg-orange-500/5 shadow-2xl shadow-orange-500/5 relative">
      {popular && (
        <div className="absolute top-0 right-0 bg-orange-500 text-black text-xs font-bold px-3 py-1">MAIS POPULAR</div>
      )}
      <div className="mb-6">
        <div className={`${iconBg} w-16 h-16 flex items-center justify-center mb-4`}>{icon}</div>
        <h3 className={`text-2xl font-bold mb-2 ${titleColor}`}>{title}</h3>
        <p className="text-gray-400">{description}</p>
      </div>
      <ul className="space-y-3 mb-6">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center gap-2">
            <div className={featureIconColor}>
              <CheckCircle className="h-4 w-4" />
            </div>
            <span className="text-sm text-gray-300">{feature}</span>
          </li>
        ))}
      </ul>
      <div className="flex justify-between items-center">
        <div>
          <p className="text-gray-400 text-sm line-through">{originalPrice}</p>
          <p className="text-xl">
            <span className={`${priceColor} font-bold`}>{price}</span>
          </p>
        </div>

        <Button className={`${buttonColor} hover:bg-orange-500/30 border-transparent border hover:border-orange-500 transition-all delay-150 duration-500`} asChild>
          <a href="#contact">
            Contratar
          </a>
        </Button>
      </div>
    </div>
  )
}
