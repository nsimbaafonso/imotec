"use client";

export default function Input({
  label,
  name,
  error,
  id,
  type = "text",
  className = "",
  ...props
}) {
  const inputId = id || name;

  return (
    <div className="w-full">
      {label && (
        <label
          htmlFor={inputId}
          className="mb-2 block text-sm font-semibold text-gray-800"
        >
          {label}
        </label>
      )}

      <input
        id={inputId}
        name={name}
        type={type}
        aria-invalid={Boolean(error)}
        aria-describedby={error ? `${inputId}-error` : undefined}
        className={`w-full border bg-white px-4 py-3.5 text-sm text-gray-800 outline-none transition-colors placeholder:text-gray-400 focus:border-green-600 focus:ring-1 focus:ring-green-600 ${
          error ? "border-red-500" : "border-gray-300"
        } ${className}`}
        {...props}
      />

      {error && (
        <p
          id={`${inputId}-error`}
          className="mt-2 text-sm text-red-600"
          role="alert"
        >
          {error}
        </p>
      )}
    </div>
  );
}
