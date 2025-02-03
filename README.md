# 🚀 Next.js + Tailwind CSS + Docker Template

¡Bienvenido a tu nuevo proyecto! Este es un template profesional para crear aplicaciones modernas con Next.js, Tailwind CSS y Docker. Perfecto para comenzar rápidamente con las mejores prácticas.

## 🌟 Características Principales

- **Next.js 14**: App Router, Server Actions y rendimiento optimizado.
- **Tailwind CSS**: Diseño responsive y sistema de diseño modular.
- **TypeScript**: Tipado estático para mayor seguridad en el código.
- **Dockerizado**: Despliegue profesional con Nginx y build multi-etapa.
- **Estructura Modular**: Componentes reutilizables y fácil de escalar.

## 🛠️ Cómo Usar Este Template

### 1. Clonar el Repositorio

```bash
git clone https://github.com/tu-usuario/tu-repo.git mi-proyecto
cd mi-proyecto
```

### 2. Instalar Dependencias

```bash
npm install
```

### 3. Cambiar el Nombre del Proyecto

Si deseas cambiar el nombre del proyecto, sigue estos pasos:

#### En `package.json`:

```json
{
  "name": "mi-proyecto",
  "version": "1.0.0",
  ...
}
```

#### En `app/layout.tsx`:

```tsx
export const metadata = {
  title: "Mi Proyecto",
  description: "Descripción de mi proyecto",
};
```

#### En `docker-compose.yml` (opcional):

```yaml
services:
  web:
    container_name: mi-proyecto
```

### 4. Ejecutar en Modo Desarrollo

```bash
npm run dev
```

Visita [http://localhost:3000](http://localhost:3000) en tu navegador.

### 5. Construir y Ejecutar con Docker

```bash
docker-compose up --build
```

El proyecto estará disponible en [http://localhost:3000](http://localhost:3000).

## 🚀 Estructura del Proyecto

```plaintext
mi-proyecto/
├── app/
│   ├── components/       # Componentes reutilizables
│   ├── layout.tsx        # Layout principal
│   └── page.tsx          # Página de inicio
├── public/               # Archivos estáticos
├── docker-compose.yml    # Configuración de Docker
├── Dockerfile            # Configuración de la imagen Docker
├── tailwind.config.ts    # Configuración de Tailwind CSS
└── package.json          # Dependencias y scripts
```

## 🎨 Personalización

### Cambiar Colores

Modifica el archivo `tailwind.config.ts` para personalizar los colores:

```ts
theme: {
  extend: {
    colors: {
      primary: '#3B82F6', // Azul por defecto
      secondary: '#6366F1',
    }
  }
}
```

### Agregar Secciones

Crea nuevos componentes en `/app/components` y úsalos en `page.tsx`.

## 📦 Despliegue

### Docker

Para desplegar en producción:

```bash
docker-compose up --build -d
```

Detener Docker:

```bash
docker-compose down
```

### Vercel

Este proyecto está listo para desplegar en Vercel. Simplemente conecta tu repositorio y sigue los pasos.

## 📄 Licencia

Este proyecto está bajo la licencia MIT. Ver `LICENSE` para más detalles.

## 🙌 Contribuir

¡Las contribuciones son bienvenidas! Si encuentras un error o tienes una sugerencia, abre un issue o envía un pull request.

✨ ¡Gracias por usar este template! ✨
