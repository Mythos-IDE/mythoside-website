import { FadeIn } from '../ui/FadeIn'
import { SectionHeading } from '../ui/SectionHeading'
import { Button } from '../ui/Button'
import { Card } from '../ui/Card'

const contributions = [
  {
    title: 'Report Issues',
    description: 'Help identify bugs',
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
        <circle cx="12" cy="12" r="10" />
        <line x1="12" y1="8" x2="12" y2="12" />
        <line x1="12" y1="16" x2="12.01" y2="16" />
      </svg>
    ),
  },
  {
    title: 'Submit PRs',
    description: 'Contribute features',
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
        <circle cx="18" cy="18" r="3" />
        <circle cx="6" cy="6" r="3" />
        <path d="M6 9v12" />
        <path d="M18 9a9 9 0 0 0-9 9" />
      </svg>
    ),
  },
  {
    title: 'Join Discussions',
    description: 'Shape the roadmap',
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
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
      </svg>
    ),
  },
]

export function OpenSource() {
  return (
    <section className="px-6 py-24 sm:py-32">
      <div className="mx-auto w-full">
        <SectionHeading
          label="Open Source"
          title="Built in the open"
          description="Mythos is developed transparently. Every decision, every line of code — open for review and contribution."
        />

        <FadeIn delay={100}>
          <div className="mt-16 flex justify-center">
            <Card className="w-full max-w-2xl p-8">
              <div className="flex items-center gap-2">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-text-secondary"
                  aria-hidden="true"
                >
                  <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
                  <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
                </svg>
                <span className="font-mono text-lg text-text-primary">
                  Mythos-IDE / mythoside-core
                </span>
              </div>

              <p className="mt-3 text-sm text-text-secondary">
                World Development Environment for novelists
              </p>

              <div className="mt-5 flex flex-wrap items-center gap-4 text-sm text-text-secondary">

                <span className="flex items-center gap-1">
                  <span aria-hidden="true">📝</span> MIT License
                </span>
              </div>

              <div className="mt-4 flex items-center gap-2 text-sm text-text-secondary">
                <span
                  className="inline-block h-3 w-3 rounded-full"
                  style={{ backgroundColor: '#3178C6' }}
                  aria-hidden="true"
                />
                <span>TypeScript</span>
              </div>

              <div className="mt-6">
                <Button variant="primary" size="md" href="#">
                  View Repository
                </Button>
              </div>
            </Card>
          </div>
        </FadeIn>

        <FadeIn delay={300}>
          <div className="mx-auto mt-12 grid max-w-2xl grid-cols-1 gap-8 sm:grid-cols-3">
            {contributions.map((item) => (
              <div key={item.title} className="flex flex-col items-center text-center">
                <div className="text-text-secondary">{item.icon}</div>
                <h3 className="mt-3 text-sm font-medium text-text-primary">
                  {item.title}
                </h3>
                <p className="mt-1 text-sm text-text-secondary">{item.description}</p>
              </div>
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
