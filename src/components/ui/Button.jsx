export default function Button({
  children,
  type = "button",
  variant = "primary",
  fullWidth = false,
  disabled = false,
  onClick,
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
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`
        inline-flex items-center justify-center
        cursor-pointer
        px-5 py-3 text-sm font-semibold
        transition-colors duration-200
        disabled:cursor-not-allowed disabled:opacity-50
        ${variants[variant] ?? variants.primary}
        ${fullWidth ? "w-full" : ""}
        ${className}
      `}
      {...props}
    >
      {children}
    </button>
  );
}
