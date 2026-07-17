import { FadeIn } from '../ui/FadeIn'
import { SectionHeading } from '../ui/SectionHeading'
import { Card } from '../ui/Card'

function WriteVisual() {
  return (
    <div className="mt-5 bg-white/[0.02] rounded-lg p-4 border border-border/50">
      <div className="font-mono text-xs text-text-secondary/70 leading-relaxed space-y-1">
        <div>
          <span className="text-text-primary/50">The king met </span>
          <span className="text-accent bg-white/[0.06] rounded px-1">
            @Arlen
          </span>
          <span className="text-text-primary/50"> at the gates</span>
        </div>
        <div>
          <span className="text-text-primary/50">of </span>
          <span className="text-accent bg-white/[0.06] rounded px-1">
            @Silverkeep
          </span>
          <span className="text-text-primary/50"> before dawn.</span>
        </div>
      </div>
    </div>
  )
}

function ConnectVisual() {
  return (
    <div className="mt-5 bg-white/[0.02] rounded-lg p-4 border border-border/50">
      <div className="flex items-center gap-3">
        {/* Entity chip */}
        <div className="flex items-center gap-1.5 bg-white/[0.06] rounded-md px-2.5 py-1.5 border border-border/50">
          <span className="w-5 h-5 rounded-full bg-white/[0.08] flex items-center justify-center text-[10px] font-mono text-text-primary/70">
            A
          </span>
          <span className="text-xs font-mono text-accent">@Arlen</span>
        </div>

        {/* Connection line */}
        <svg
          width="48"
          height="2"
          viewBox="0 0 48 2"
          className="text-text-secondary/30"
          aria-hidden="true"
        >
          <line
            x1="0"
            y1="1"
            x2="48"
            y2="1"
            stroke="currentColor"
            strokeWidth="1"
            strokeDasharray="4 3"
          />
        </svg>

        {/* Linked data */}
        <div className="flex flex-col gap-0.5 text-[10px] font-mono text-text-secondary/60">
          <span>character.role</span>
          <span>character.appears_in</span>
          <span>character.traits</span>
        </div>
      </div>
    </div>
  )
}

function RememberVisual() {
  return (
    <div className="mt-5 bg-white/[0.02] rounded-lg p-4 border border-border/50 flex items-center justify-center">
      <svg
        width="140"
        height="80"
        viewBox="0 0 140 80"
        fill="none"
        aria-hidden="true"
      >
        {/* Connection lines */}
        <line
          x1="35"
          y1="25"
          x2="70"
          y2="55"
          stroke="rgba(161,161,170,0.2)"
          strokeWidth="1"
        />
        <line
          x1="105"
          y1="25"
          x2="70"
          y2="55"
          stroke="rgba(161,161,170,0.2)"
          strokeWidth="1"
        />
        <line
          x1="35"
          y1="25"
          x2="105"
          y2="25"
          stroke="rgba(161,161,170,0.2)"
          strokeWidth="1"
        />
        <line
          x1="70"
          y1="55"
          x2="120"
          y2="65"
          stroke="rgba(161,161,170,0.15)"
          strokeWidth="1"
        />
        <line
          x1="35"
          y1="25"
          x2="15"
          y2="50"
          stroke="rgba(161,161,170,0.15)"
          strokeWidth="1"
        />

        {/* Nodes */}
        <circle cx="35" cy="25" r="8" fill="rgba(255,255,255,0.08)" stroke="rgba(255,255,255,0.15)" strokeWidth="1" />
        <circle cx="105" cy="25" r="8" fill="rgba(255,255,255,0.08)" stroke="rgba(255,255,255,0.15)" strokeWidth="1" />
        <circle cx="70" cy="55" r="10" fill="rgba(255,255,255,0.1)" stroke="rgba(255,255,255,0.2)" strokeWidth="1" />
        <circle cx="120" cy="65" r="5" fill="rgba(255,255,255,0.05)" stroke="rgba(255,255,255,0.1)" strokeWidth="1" />
        <circle cx="15" cy="50" r="5" fill="rgba(255,255,255,0.05)" stroke="rgba(255,255,255,0.1)" strokeWidth="1" />

        {/* Node labels */}
        <text x="35" y="28" textAnchor="middle" fontSize="7" fill="rgba(250,250,250,0.5)" fontFamily="monospace">A</text>
        <text x="105" y="28" textAnchor="middle" fontSize="7" fill="rgba(250,250,250,0.5)" fontFamily="monospace">S</text>
        <text x="70" y="58" textAnchor="middle" fontSize="7" fill="rgba(250,250,250,0.6)" fontFamily="monospace">B1</text>
      </svg>
    </div>
  )
}

const steps = [
  {
    number: '01',
    title: 'Write',
    description:
      'Open your editor and write naturally. Use Markdown. Focus on your story, not on organizing files.',
    visual: <WriteVisual />,
  },
  {
    number: '02',
    title: 'Connect',
    description:
      'Type @ and Mythos recognizes your characters, locations, and artifacts. Every mention becomes a living reference.',
    visual: <ConnectVisual />,
  },
  {
    number: '03',
    title: 'Remember',
    description:
      'Mythos maintains a complete knowledge graph of your world. Every entity, relationship, and appearance — across all books.',
    visual: <RememberVisual />,
  },
]

export function HowItWorks() {
  return (
    <section className="py-24 sm:py-32">
      <div className="max-w-6xl mx-auto px-6">
        <FadeIn>
          <SectionHeading
            label="How It Works"
            title="From manuscript to living world"
          />
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {steps.map((step, i) => (
            <FadeIn key={step.number} delay={i * 150}>
              <Card hover={false} className="h-full border-t border-t-white/10">
                <span className="font-mono text-sm text-text-secondary/60">
                  {step.number}
                </span>
                <h3 className="text-xl font-semibold text-text-primary mt-2">
                  {step.title}
                </h3>
                <p className="text-sm text-text-secondary leading-relaxed mt-3">
                  {step.description}
                </p>
                {step.visual}
              </Card>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}
