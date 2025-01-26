"use client";

import { TrendingUp } from "lucide-react";
import { CartesianGrid, LabelList, Line, LineChart } from "recharts";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

const chartData = [
  { month: "Jan", performance: 10, fill: "#FF6B32" },
  { month: "Fev", performance: 25, fill: "#FF9F1C" },
  { month: "Mar", performance: 45, fill: "#FFA726" },
  { month: "Abr", performance: 70, fill: "#FF7F3F" },
  { month: "Mai", performance: 120, fill: "#FF5722" }, // Crescimento mais expressivo
];

const chartConfig = {
  performance: {
    label: "Desempenho",
    color: "#FF6B32",
  },
} satisfies ChartConfig;

export function AboutChart() {
  return (
    <Card className="border-none shadow-none bg-transparent">
      <CardHeader>
        <CardTitle className="text-orange-950 text-2xl font-bold">
          Transforme o Crescimento da Sua Empresa!
        </CardTitle>
        <CardDescription className="text-orange-800/80 text-sm">
          Veja como sua performance pode decolar com o apoio da Velus. Acompanhamento de Janeiro a Maio de 2024.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig}>
          <LineChart
            accessibilityLayer
            data={chartData}
            margin={{
              top: 24,
              left: 24,
              right: 24,
            }}
          >
            <CartesianGrid vertical={false} stroke="#FFE0B2" />
            <ChartTooltip
              cursor={false}
              content={
                <ChartTooltipContent
                  indicator="line"
                  nameKey="performance"
                  hideLabel
                  className="bg-orange-100 text-orange-950 p-2 rounded-md"
                />
              }
            />
            <Line
              dataKey="performance"
              type="natural"
              stroke="#FF6B32"
              strokeWidth={4}
              dot={{
                fill: "#FF9F1C",
                r: 6,
              }}
              activeDot={{
                r: 8,
                fill: "#FF5722",
                stroke: "#FFFFFF",
                strokeWidth: 2,
              }}
            >
              <LabelList
                position="top"
                offset={16}
                className="fill-orange-950"
                fontSize={14}
                dataKey="month"
              />
            </Line>
          </LineChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex-col items-start gap-2 text-sm">
        <div className="flex gap-2 font-medium leading-none text-orange-950">
          Último Mês: 15% de Crescimento!
          <TrendingUp className="h-4 w-4 text-orange-600" />
        </div>
        <div className="leading-none text-orange-800/80">
          A Velus está aqui para impulsionar sua empresa. Vamos juntos manter esse crescimento constante e alcançar resultados extraordinários!
        </div>
      </CardFooter>
    </Card>
  );
}
