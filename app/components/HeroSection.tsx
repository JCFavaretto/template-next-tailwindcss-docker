import { CTAButton } from "./CTAButton";

// app/components/HeroSection.tsx
export const HeroSection = () => (
  <section className="bg-gradient-to-b from-blue-800 to-blue-600 text-white py-20  rounded-md shadow-sm">
    <div className="container mx-auto px-4 text-center">
      <h1 className="text-4xl md:text-5xl font-bold mb-6 animate-fade-in-down">
        Plantilla Next.js Profesional
      </h1>
      <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto">
        Tu punto de partida para aplicaciones modernas con Docker, Tailwind y
        mejores prácticas
      </p>
    </div>
    <div className="container mx-auto px-4 text-center rounded-md shadow-sm bg-blue-50 p-10 w-fit ">
      <h2 className="text-3xl font-bold mb-6 text-primary">
        ¿Listo para comenzar?
      </h2>
      <div className="flex justify-center gap-4  ">
        <CTAButton href="#features" variant="secondary">
          Ver características
        </CTAButton>
        <CTAButton
          href="https://github.com/JCFavaretto/template-next-tailwindcss-docker#readme"
          variant="primary"
        >
          Ver documentación
        </CTAButton>
      </div>
    </div>
  </section>
);
