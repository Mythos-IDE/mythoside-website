import { FadeIn } from '../ui/FadeIn'
import { Button } from '../ui/Button'

function EditorMockup() {
  return (
    <div className="relative bg-card rounded-xl border border-border shadow-2xl shadow-black/40 overflow-hidden">
      {/* Title bar */}
      <div className="flex items-center gap-3 px-4 py-3 border-b border-border/70">
        <div className="flex items-center gap-1.5">
          <span className="w-3 h-3 rounded-full bg-red-500/40" />
          <span className="w-3 h-3 rounded-full bg-yellow-500/40" />
          <span className="w-3 h-3 rounded-full bg-green-500/40" />
        </div>
        <div className="flex-1 flex items-center justify-center">
          <span className="text-xs text-text-secondary/70 font-mono bg-white/[0.04] px-3 py-1 rounded-md">
            Chapter 7 — The Council
          </span>
        </div>
        <div className="w-[54px]" />
      </div>

      <div className="flex">
        {/* Sidebar — series tree */}
        <div className="hidden sm:block w-48 border-r border-border/50 p-3 shrink-0">
          <div className="font-mono text-xs text-text-secondary space-y-1">
            <div className="text-text-primary/70 font-medium">▾ The Shattered Realm</div>
            <div className="pl-3 space-y-0.5">
              <div className="text-text-secondary/80">▾ Book 1: Ashfall</div>
              <div className="pl-3 space-y-0.5">
                <div className="text-text-secondary/50">Ch 1 — The Arrival</div>
                <div className="text-text-secondary/50">Ch 2 — Beneath the Wall</div>
                <div className="text-text-secondary/50">Ch 3 — First Blood</div>
                <div className="text-text-secondary/50">Ch 4 — The Crossing</div>
                <div className="text-text-secondary/50">Ch 5 — Old Alliances</div>
                <div className="text-text-secondary/50">Ch 6 — Ember and Ash</div>
                <div className="text-text-primary/60">Ch 7 — The Council</div>
              </div>
              <div className="text-text-secondary/80 mt-1">▸ Book 2: Ironhold</div>
            </div>
          </div>
        </div>

        {/* Editor content */}
        <div className="flex-1 p-5 sm:p-6 relative min-h-[260px]">
          {/* Line numbers gutter */}
          <div className="absolute left-0 top-5 sm:top-6 font-mono text-xs text-text-secondary/20 select-none space-y-[0.15rem] pl-2">
            <div>127</div>
            <div>128</div>
            <div>129</div>
            <div>130</div>
            <div>131</div>
            <div>132</div>
            <div>133</div>
          </div>

          {/* Text content */}
          <div className="pl-7 sm:pl-8 font-mono text-sm leading-relaxed text-text-secondary/80">
            <p className="mb-3">
              <span className="text-text-primary/50">The king met </span>
              <span className="text-accent bg-white/[0.06] rounded px-1 py-0.5">
                @Arlen
              </span>
              <span className="text-text-primary/50"> inside the great hall of</span>
            </p>
            <p className="mb-3">
              <span className="text-accent bg-white/[0.06] rounded px-1 py-0.5">
                @Silverkeep
              </span>
              <span className="text-text-primary/50">. The ancient walls hummed with</span>
            </p>
            <p className="mb-3">
              <span className="text-text-primary/50">a power older than memory. Torchlight</span>
            </p>
            <p className="mb-3">
              <span className="text-text-primary/50">danced across the stone, casting long</span>
            </p>
            <p className="mb-3">
              <span className="text-text-primary/50">shadows behind the gathered lords.</span>
            </p>
            <p className="mb-3">
              <span className="text-text-primary/50 opacity-40">|</span>
            </p>
          </div>

          {/* Floating hover card for Arlen */}
          <div className="absolute top-[4.5rem] left-[9.5rem] sm:left-[11rem] bg-card border border-border rounded-lg shadow-2xl shadow-black/50 p-3 w-56 z-10">
            <div className="flex items-center gap-2 mb-2">
              <div className="w-7 h-7 rounded-full bg-white/[0.08] flex items-center justify-center text-xs font-mono text-text-primary/80">
                A
              </div>
              <div>
                <div className="text-sm font-medium text-text-primary">
                  Arlen of Thornwall
                </div>
                <div className="text-xs text-text-secondary/70">Character</div>
              </div>
            </div>
            <div className="space-y-1 text-xs">
              <div className="flex justify-between">
                <span className="text-text-secondary/60">Role</span>
                <span className="text-text-secondary">
                  Commander, Eastern Watch
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-text-secondary/60">Appears in</span>
                <span className="text-text-secondary">Book 1, Book 2</span>
              </div>
              <div className="flex justify-between">
                <span className="text-text-secondary/60">Mentions</span>
                <span className="text-text-secondary">42</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom status bar */}
      <div className="flex items-center justify-between px-4 py-2 border-t border-border/50 text-[11px] font-mono text-text-secondary/40">
        <span>Ln 127, Col 14</span>
        <span>Markdown</span>
        <span>UTF-8</span>
      </div>
    </div>
  )
}

export function Hero() {
  return (
    <section className="relative min-h-screen pt-24 pb-16 flex items-center">
      {/* Subtle gradient background */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(255,255,255,0.03)_0%,_transparent_50%)] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left column — text */}
          <FadeIn>
            <div className="space-y-8">
              <span className="inline-block text-xs font-medium tracking-widest uppercase text-text-secondary">
                World Development Environment
              </span>

              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-semibold tracking-tight text-text-primary leading-[1.08]">
                <span className="block">Write naturally.</span>
                <span className="block">Build worlds</span>
                <span className="block">effortlessly.</span>
              </h1>

              <p className="text-lg text-text-secondary max-w-xl leading-relaxed">
                MythosIDE is a World Development Environment for novelists
                writing complex fictional universes.
              </p>

              <div className="flex flex-wrap gap-4">
                <Button variant="primary" size="lg" href="#">
                  View on GitHub
                </Button>
                <Button variant="secondary" size="lg" href="#">
                  Read Documentation
                </Button>
              </div>
            </div>
          </FadeIn>

          {/* Right column — editor mockup */}
          <FadeIn className="hidden lg:block" delay={200}>
            <EditorMockup />
          </FadeIn>
        </div>
      </div>
    </section>
  )
}
