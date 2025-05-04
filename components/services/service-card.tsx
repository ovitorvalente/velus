import type { ReactNode } from "react";
import { CheckCircle } from "lucide-react";
import { Button } from "@/components/ui (shadcn)/button";

interface ServiceCardProps {
  icon: ReactNode;
  iconBg: string;
  title: string;
  titleColor: string;
  description: string;
  features: string[];
  featureIconColor: string;
  originalPrice: string;
  price: string;
  priceColor: string;
  buttonColor: string;
  popular?: boolean;
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
    <div className="relative h-full border border-white/10 bg-transparent p-8 shadow-2xl shadow-orange-500/5 transition-colors delay-150 duration-500 hover:border-orange-500 hover:bg-orange-500/5">
      {popular && (
        <div className="absolute right-0 top-0 bg-orange-500 px-3 py-1 text-xs font-bold text-black">
          MAIS POPULAR
        </div>
      )}
      <div className="mb-6">
        <div
          className={`${iconBg} mb-4 flex h-16 w-16 items-center justify-center`}
        >
          {icon}
        </div>
        <h3 className={`mb-2 text-2xl font-bold ${titleColor}`}>{title}</h3>
        <p className="text-gray-400">{description}</p>
      </div>
      <ul className="mb-6 space-y-3">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center gap-2">
            <div className={featureIconColor}>
              <CheckCircle className="h-4 w-4" />
            </div>
            <span className="text-sm text-gray-300">{feature}</span>
          </li>
        ))}
      </ul>
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm text-gray-400 line-through">{originalPrice}</p>
          <p className="text-xl">
            <span className={`${priceColor} font-bold`}>{price}</span>
          </p>
        </div>

        <Button
          className={`${buttonColor} border border-transparent transition-all delay-150 duration-500 hover:border-orange-500 hover:bg-orange-500/30`}
          asChild
        >
          <a href="#contact">Contratar</a>
        </Button>
      </div>
    </div>
  );
}
