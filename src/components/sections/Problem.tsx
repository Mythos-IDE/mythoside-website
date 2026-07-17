import { FadeIn } from '../ui/FadeIn'
import { SectionHeading } from '../ui/SectionHeading'
import { Card } from '../ui/Card'

function DocumentIcon() {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className="text-text-secondary/60"
    >
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
      <polyline points="14 2 14 8 20 8" />
      <line x1="16" y1="13" x2="8" y2="13" />
      <line x1="16" y1="17" x2="8" y2="17" />
      <polyline points="10 9 9 9 8 9" />
    </svg>
  )
}

function GraphIcon() {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className="text-text-primary/70"
    >
      <circle cx="12" cy="5" r="3" />
      <circle cx="5" cy="19" r="3" />
      <circle cx="19" cy="19" r="3" />
      <line x1="12" y1="8" x2="5" y2="16" />
      <line x1="12" y1="8" x2="19" y2="16" />
      <line x1="5" y1="19" x2="19" y2="19" />
    </svg>
  )
}

function ArrowRightIcon() {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className="text-text-secondary/50"
    >
      <line x1="5" y1="12" x2="19" y2="12" />
      <polyline points="12 5 19 12 12 19" />
    </svg>
  )
}

const traditionalPains = [
  'Flat document structure',
  'No entity awareness',
  'Manual cross-referencing',
  'Context lost between files',
  'No series continuity',
]

const mythosCapabilities = [
  'Hierarchical world structure',
  'Context-aware entity references',
  'Automatic @linking',
  'Cross-book knowledge graph',
  'Series-level continuity',
]

export function Problem() {
  return (
    <section className="py-24 sm:py-32">
      <div className="w-full mx-auto px-6">
        <FadeIn>
          <SectionHeading
            label="The Problem"
            title="Writing tools weren't built for world-building"
            description="Documents don't understand your characters, your timelines, or the world you're creating. Once your novel becomes a universe, generic tools fall apart."
          />
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Traditional Tools — negative card */}
          <FadeIn delay={0}>
            <Card hover={false} className="h-full">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-lg bg-white/[0.04] flex items-center justify-center">
                  <DocumentIcon />
                </div>
                <h3 className="text-lg font-medium text-text-secondary">
                  Traditional Tools
                </h3>
              </div>

              <ul className="space-y-3.5">
                {traditionalPains.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span
                      className="text-sm font-medium mt-0.5 shrink-0"
                      style={{ color: 'rgba(239, 68, 68, 0.6)' }}
                    >
                      ✕
                    </span>
                    <span className="text-sm text-text-secondary/70">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </Card>
          </FadeIn>

          {/* Mythos — positive card */}
          <FadeIn delay={150}>
            <Card
              hover={false}
              className="h-full border-text-secondary/20"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-lg bg-white/[0.06] flex items-center justify-center">
                  <GraphIcon />
                </div>
                <h3 className="text-lg font-medium text-text-primary">
                  Mythos
                </h3>
              </div>

              <ul className="space-y-3.5">
                {mythosCapabilities.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span
                      className="text-sm font-medium mt-0.5 shrink-0"
                      style={{ color: 'rgba(34, 197, 94, 0.7)' }}
                    >
                      ✓
                    </span>
                    <span className="text-sm text-text-secondary">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </Card>
          </FadeIn>
        </div>

        {/* Transformation callout */}
        <FadeIn delay={300}>
          <div className="flex items-center justify-center gap-4 mt-16">
            <span className="text-xl font-medium text-text-secondary/60">
              Documents
            </span>
            <ArrowRightIcon />
            <span className="text-xl font-medium text-text-primary">
              Worlds
            </span>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
