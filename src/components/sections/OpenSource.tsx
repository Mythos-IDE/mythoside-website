import { FadeIn } from '../ui/FadeIn'
import { SectionHeading } from '../ui/SectionHeading'
import { Button } from '../ui/Button'
import { Card } from '../ui/Card'

const repositories = [
  {
    name: 'mythoside-core',
    description: 'The core Rust engine, knowledge graph, and local server.',
    language: 'Rust',
    color: '#DEA584',
    url: 'https://github.com/Mythos-IDE/mythoside-core',
  },
  {
    name: 'mythoside-ts',
    description: 'Tauri & React desktop application and user interface.',
    language: 'TypeScript',
    color: '#3178C6',
    url: 'https://github.com/Mythos-IDE/mythoside-ts',
  },
  {
    name: 'mythoside-website',
    description: 'The landing page and official documentation.',
    language: 'TypeScript',
    color: '#3178C6',
    url: 'https://github.com/Mythos-IDE/mythoside-website',
  },
]

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
          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
            {repositories.map((repo) => (
              <Card key={repo.name} className="flex flex-col p-6">
                <div className="flex items-center gap-2">
                  <svg
                    width="18"
                    height="18"
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
                  <span className="font-mono text-sm text-text-primary">
                    Mythos-IDE / {repo.name}
                  </span>
                </div>

                <p className="mt-3 flex-1 text-sm text-text-secondary">
                  {repo.description}
                </p>

                <div className="mt-5 flex items-center justify-between">
                  <div className="flex items-center gap-2 text-xs text-text-secondary">
                    <span
                      className="inline-block h-2.5 w-2.5 rounded-full"
                      style={{ backgroundColor: repo.color }}
                      aria-hidden="true"
                    />
                    <span>{repo.language}</span>
                  </div>
                  <a
                    href={repo.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs font-medium text-text-secondary hover:text-text-primary transition-colors"
                  >
                    View Source &rarr;
                  </a>
                </div>
              </Card>
            ))}
          </div>

          <div className="mt-10 flex justify-center">
            <Button variant="secondary" size="md" href="https://github.com/Mythos-IDE" target="_blank" rel="noopener noreferrer">
              View Mythos-IDE Organization
            </Button>
          </div>
        </FadeIn>

        <FadeIn delay={300}>
          <div className="mx-auto mt-20 grid max-w-2xl grid-cols-1 gap-8 sm:grid-cols-3">
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
