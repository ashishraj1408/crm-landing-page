function Button({ children, variant = "primary", className = "" }) {
  const base =
    "px-8 py-4 rounded-xl font-semibold transition duration-300"

  const styles = {
    primary: "bg-sky-600 text-white hover:bg-sky-700",
    secondary: "bg-lime-500 text-white hover:bg-lime-600",
    outline: "border border-sky-600 text-sky-600 hover:bg-sky-50",
    white: "bg-white text-sky-600 hover:bg-slate-100"
  }

  return (
    <button className={`${base} ${styles[variant]} ${className}`}>
      {children}
    </button>
  )
}

export default Button
