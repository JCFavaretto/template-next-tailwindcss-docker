// app/page.tsx

import { CTAButton } from "./components/CTAButton";
import { FeatureCard } from "./components/FeatureCard";
import { HeroSection } from "./components/HeroSection";
import { TechStack } from "./components/TechStack";

export default function Home() {
  const features = [
    {
      icon: "🚀",
      title: "Next.js 14",
      description: "App Router, Server Actions y Rendimiento Optimizado",
    },
    {
      icon: "🛡️",
      title: "TypeScript",
      description: "Tipado estático para mayor seguridad en el código",
    },
    {
      icon: "🐳",
      title: "Dockerizado",
      description: "Despliegue profesional con Nginx y build multi-etapa",
    },
    {
      icon: "🎨",
      title: "Tailwind CSS",
      description: "Diseño responsive y sistema de diseño modular",
    },
  ];

  return (
    <div className="min-h-screen">
      <HeroSection />

      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
            Características Clave
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <FeatureCard key={index} {...feature} />
            ))}
          </div>
        </div>
      </section>

      <TechStack />

      <section className="bg-blue-50 py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6 text-gray-800">
            ¿Listo para comenzar?
          </h2>
          <div className="flex justify-center gap-4">
            <CTAButton href="#features" variant="secondary">
              Ver características
            </CTAButton>
            <CTAButton href="/documentation" variant="primary">
              Ver documentación
            </CTAButton>
          </div>
        </div>
      </section>
    </div>
  );
}
