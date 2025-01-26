import React from "react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import Image from "next/image";

const services = [
  {
    category: "Sites e Lojas Virtuais",
    details: [
      {
        name: "Sites em WordPress",
        description: "Criação de sites personalizados com o CMS mais utilizado do mundo, garantindo design e funcionalidade.",
        price: "A partir de R$ 1.500,00",
        image: "/images/wordpress-site.jpg",
      },
      {
        name: "Lojas Virtuais em Shopify",
        description: "Desenvolvemos lojas otimizadas e prontas para vendas usando Shopify.",
        price: "A partir de R$ 2.000,00",
        image: "/images/shopify-store.jpg",
      },
      {
        name: "Landing Pages em Wix e Yampi",
        description: "Landing pages rápidas e atraentes para destacar seus produtos ou serviços.",
        price: "A partir de R$ 1.200,00",
        image: "/images/landing-page.jpg",
      },
    ],
  },
  {
    category: "APIs e Integrações",
    details: [
      {
        name: "Criação de APIs",
        description: "Desenvolvimento de APIs robustas e escaláveis para suas aplicações.",
        price: "Sob consulta",
        image: "/images/api-development.jpg",
      },
    ],
  },
  {
    category: "Criação de Conteúdo Digital",
    details: [
      {
        name: "Logos e Identidade Visual",
        description: "Desenvolvemos identidades visuais que fortalecem a marca da sua empresa.",
        price: "A partir de R$ 500,00",
        image: "/images/logo-design.jpg",
      },
      {
        name: "Banners e Artes Visuais",
        description: "Criação de banners e materiais visuais para redes sociais e campanhas.",
        price: "A partir de R$ 300,00",
        image: "/images/banner-design.jpg",
      },
    ],
  },
  {
    category: "SEO e Marketing",
    details: [
      {
        name: "Melhorias de SEO",
        description: "Otimização de sites para melhor ranqueamento nos motores de busca.",
        price: "Sob consulta",
        image: "/images/seo-optimization.jpg",
      },
      {
        name: "Ajustes no Google Negócio",
        description: "Aprimoramos sua presença no Google Negócio para atrair mais clientes locais.",
        price: "A partir de R$ 400,00",
        image: "/images/google-business.jpg",
      },
    ],
  },
];

export default function ServicesPage() {
  return (
    <div className="container mx-auto py-10 px-4">
      <h1 className="text-4xl font-bold text-center mb-6">Nossos Serviços</h1>
      <Tabs defaultValue={services[0].category} className="w-full">
        <TabsList className="flex justify-center mb-4">
          {services.map((service) => (
            <TabsTrigger key={service.category} value={service.category}>
              {service.category}
            </TabsTrigger>
          ))}
        </TabsList>
        {services.map((service) => (
          <TabsContent key={service.category} value={service.category}>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {service.details.map((detail) => (
                <Card key={detail.name} className="shadow-lg">
                  <Image
                    src={detail.image}
                    alt={detail.name}
                    width={400}
                    height={250}
                    className="rounded-t-lg"
                  />
                  <CardHeader>
                    <h3 className="text-lg font-semibold">{detail.name}</h3>
                  </CardHeader>
                  <CardContent>
                    <p>{detail.description}</p>
                    <p className="font-bold mt-2">{detail.price}</p>
                    <Button className="mt-4">Saiba Mais</Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
        ))}
      </Tabs>
    </div>
  );
}
