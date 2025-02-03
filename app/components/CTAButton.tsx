// app/components/CTAButton.tsx
export const CTAButton = ({
  children,
  href,
  variant = "primary",
}: {
  children: React.ReactNode;
  href: string;
  variant?: "primary" | "secondary";
}) => {
  const baseStyles = "px-8 py-3 rounded-lg font-semibold transition-colors";
  const variants = {
    primary:
      "bg-blue-600 text-white shadow-sm hover:bg-blue-700 hover:shadow-lg",
    secondary:
      "bg-white text-blue-600 shadow-sm hover:bg-gray-100 hover:shadow-lg",
  };

  return (
    <a href={href} className={`${baseStyles} ${variants[variant]}`}>
      {children}
    </a>
  );
};
