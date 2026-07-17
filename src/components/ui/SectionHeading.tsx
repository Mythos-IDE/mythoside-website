interface SectionHeadingProps {
  label?: string
  title: string
  description?: string
}

export function SectionHeading({ label, title, description }: SectionHeadingProps) {
  return (
    <div className="text-center mb-16">
      {label && (
        <span className="inline-block text-xs font-medium tracking-widest uppercase text-text-secondary mb-4">
          {label}
        </span>
      )}
      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-text-primary">
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-lg text-text-secondary max-w-2xl mx-auto leading-relaxed">
          {description}
        </p>
      )}
    </div>
  )
}
