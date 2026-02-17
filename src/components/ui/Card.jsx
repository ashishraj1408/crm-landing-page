function Card({ children, className = "" }) {
  return (
    <div
      className={`bg-white rounded-3xl p-8 shadow-sm hover:shadow-md transition ${className}`}
    >
      {children}
    </div>
  )
}

export default Card
