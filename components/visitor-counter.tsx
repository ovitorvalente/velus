import { Users } from "lucide-react"

interface VisitorCounterProps {
  count: number
}

export function VisitorCounter({ count }: VisitorCounterProps) {
  return (
    <div className="flex items-center gap-2 text-sm text-gray-400 bg-orange-500/5 p-2 border border-white/5 w-fit max-md:w-full shadow-2xl shadow-orange-500/20">
      <Users className="h-4 w-4 text-orange-400" />
      <span>
        <span className="font-bold">{count}</span>
        {" "} pessoas visualizando esta página agora</span>
    </div>
  )
}
