function SectionTitle({ title, subtitle, center = true }) {
  return (
    <div className={`${center ? "text-center" : ""} mb-16`}>
      <h2 className="text-4xl font-bold text-slate-900 mb-4">
        {title}
      </h2>
      {subtitle && (
        <p className="text-slate-500 text-lg">
          {subtitle}
        </p>
      )}
    </div>
  )
}

export default SectionTitle
