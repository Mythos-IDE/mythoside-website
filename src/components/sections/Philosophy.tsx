import { FadeIn } from '../ui/FadeIn'
import { Card } from '../ui/Card'

const principles = [
  {
    title: 'No Cloud Lock-in',
    description: 'Your files live on your machine. Always accessible. Always portable.',
    icon: (
      <svg
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <path d="M20 16.2A4.5 4.5 0 0 0 17.5 8h-1.8A7 7 0 1 0 4 14.9" />
        <line x1="4" y1="15" x2="20" y2="15" />
        <line x1="9" y1="12" x2="9" y2="18" />
        <line x1="15" y1="12" x2="15" y2="18" />
      </svg>
    ),
  },
  {
    title: 'No Subscriptions',
    description: 'Mythos is free and open-source. No recurring fees. No paywalls.',
    icon: (
      <svg
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <line x1="12" y1="1" x2="12" y2="23" />
        <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
      </svg>
    ),
  },
  {
    title: 'Plain Files',
    description: 'Markdown and YAML. Open formats that work with any text editor.',
    icon: (
      <svg
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
        <polyline points="14 2 14 8 20 8" />
        <line x1="8" y1="13" x2="16" y2="13" />
        <line x1="8" y1="17" x2="16" y2="17" />
      </svg>
    ),
  },
  {
    title: 'Future-proof',
    description: 'Your world data is never trapped in a proprietary format.',
    icon: (
      <svg
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
        <path d="M7 11V7a5 5 0 0 1 10 0v4" />
      </svg>
    ),
  },
]

export function Philosophy() {
  return (
    <section id="philosophy" className="border-t border-border px-6 py-24 sm:py-32">
      <div className="mx-auto w-full">
        <FadeIn>
          <div className="text-center">
            <blockquote className="space-y-2">
              <p className="text-4xl font-semibold tracking-tight text-text-primary sm:text-5xl lg:text-6xl">
                Your device.
              </p>
              <p className="text-4xl font-semibold tracking-tight text-text-primary sm:text-5xl lg:text-6xl">
                Your words.
              </p>
              <p className="text-4xl font-semibold tracking-tight text-text-primary sm:text-5xl lg:text-6xl">
                Your world.
              </p>
            </blockquote>
          </div>
        </FadeIn>

        <FadeIn delay={200}>
          <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-4">
            {principles.map((principle) => (
              <Card key={principle.title} className="p-5">
                <div className="text-text-secondary">{principle.icon}</div>
                <h3 className="mt-3 text-sm font-medium text-text-primary">
                  {principle.title}
                </h3>
                <p className="mt-1 text-xs leading-relaxed text-text-secondary">
                  {principle.description}
                </p>
              </Card>
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
