import "./style.css";

export default function LoginBtn({
  text,
  variant = "primary", // Variante por defecto
  size = "medium", // Tamaño por defecto
  onClick,
  isFullWidth = false,
  disabled = false,
}) {
  return (
    <button
      className={`custom-button ${variant} ${size} ${isFullWidth ? "full-width" : ""}`}
      onClick={onClick}
      disabled={disabled}
    >
      {text}
    </button>
  );
}
