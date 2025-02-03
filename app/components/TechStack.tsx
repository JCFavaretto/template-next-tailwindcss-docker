// app/components/TechStack.tsx
export const TechStack = () => {
  const techIcons = [
    { name: "Next.js", icon: "⚡" },
    { name: "Tailwind", icon: "🎨" },
    { name: "TypeScript", icon: "📘" },
    { name: "Docker", icon: "🐳" },
    { name: "Nginx", icon: "🔒" },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
          Tecnologías Principales
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
          {techIcons.map((tech, index) => (
            <div
              key={index}
              className="text-center p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
            >
              <div className="text-4xl mb-2">{tech.icon}</div>
              <span className="text-gray-700 font-medium">{tech.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
