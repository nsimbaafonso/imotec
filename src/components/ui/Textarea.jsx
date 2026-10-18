"use client";

export default function Textarea({
  label,
  name,
  error,
  id,
  rows = 5,
  className = "",
  ...props
}) {
  const textareaId = id || name;

  return (
    <div className="w-full">
      {label && (
        <label
          htmlFor={textareaId}
          className="mb-2 block text-sm font-semibold text-gray-800"
        >
          {label}
        </label>
      )}

      <textarea
        id={textareaId}
        name={name}
        rows={rows}
        aria-invalid={Boolean(error)}
        aria-describedby={error ? `${textareaId}-error` : undefined}
        className={`w-full resize-none border bg-white px-4 py-3.5 text-sm text-gray-800 outline-none transition-colors placeholder:text-gray-400 focus:border-green-600 focus:ring-1 focus:ring-green-600 ${
          error ? "border-red-500" : "border-gray-300"
        } ${className}`}
        {...props}
      />

      {error && (
        <p
          id={`${textareaId}-error`}
          className="mt-2 text-sm text-red-600"
          role="alert"
        >
          {error}
        </p>
      )}
    </div>
  );
}
