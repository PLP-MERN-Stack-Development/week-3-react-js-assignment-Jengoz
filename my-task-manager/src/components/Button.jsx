;
export default function Button({ children, variant = "primary", onClick, className = "", ...props }) {
  const base =
    "px-4 py-2 rounded text-white font-medium transition-all duration-300 focus:outline-none focus:ring-2";
  const variants = {
    primary: "bg-blue-600 hover:bg-blue-700 focus:ring-blue-300",
    secondary: "bg-gray-600 hover:bg-gray-700 focus:ring-gray-300",
    danger: "bg-red-600 hover:bg-red-700 focus:ring-red-300",
  };

  return (
    <button
      onClick={onClick}
      className={`${base} ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
