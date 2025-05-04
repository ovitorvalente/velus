import { Clock } from "lucide-react"

interface CountdownTimerProps {
  timeLeft: {
    days: number
    hours: number
    minutes: number
    seconds: number
  }
}

export function CountdownTimer({ timeLeft }: CountdownTimerProps) {
  const timeItens = [
    {
      label: "DIAS",
      value: timeLeft.days,
    },
    {
      label: "HORAS",
      value: timeLeft.hours,
    },
    {
      label: "MINUTOS",
      value: timeLeft.minutes,
    },
    {
      label: "SEGUNDOS",
      value: timeLeft.seconds,
    }
  ]
  return (
    <div className="mb-8">
      <p className="text-sm text-gray-400 mb-2 flex items-center gap-2">
        <Clock className="h-4 w-4 text-orange-400" />
        Oferta especial termina em:
      </p>
      <div className="flex gap-4">
        {timeItens.map((item, index) => (
          <div key={index} className="border gap-1 border-white/10 hover:border-orange-500 transition-all bg-orange-500/5 hover:bg-orange-500/10 shadow-2xl shadow-orange-500/10 delay-75 duration-150 h-20 w-24 flex items-center justify-center flex-col">
            <div className="text-2xl font-bold">{item.value}</div>
            <div className="text-xs text-gray-400">{item.label}</div>
          </div>
        ))}
      </div>
    </div>
  )
}
