import Link from "next/link";

export default function ButtonLink({
  children,
  href,
  variant = "primary",
  fullWidth = false,
  className = "",
  ...props
}) {
  const variants = {
    primary: "bg-green-600 text-white hover:bg-green-800",
    secondary: "bg-black text-white hover:bg-gray-800",
    outline:
      "border border-green-600 text-green-600 hover:bg-green-600 hover:text-white",
  };

  return (
    <Link
      href={href}
      className={`inline-flex items-center justify-center px-5 py-3 text-sm font-semibold transition-colors duration-200 ${variants[variant] ?? variants.primary} ${fullWidth ? "w-full" : ""} ${className}`}
      {...props}
    >
      {children}
    </Link>
  );
}
