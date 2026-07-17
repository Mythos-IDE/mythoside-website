import { FadeIn } from '../ui/FadeIn'
import { Button } from '../ui/Button'

export function FinalCTA() {
  return (
    <section className="relative overflow-hidden px-6 py-32 sm:py-40">
      {/* Subtle radial gradient glow */}
      <div
        className="pointer-events-none absolute inset-0 flex items-center justify-center"
        aria-hidden="true"
      >
        <div
          className="h-[500px] w-[500px] rounded-full opacity-[0.07]"
          style={{
            background:
              'radial-gradient(circle, rgba(255, 255, 255, 0.8) 0%, transparent 70%)',
          }}
        />
      </div>

      <div className="relative mx-auto max-w-4xl text-center">
        <FadeIn>
          <h2 className="text-3xl font-semibold tracking-tight text-text-primary sm:text-4xl lg:text-5xl">
            <span className="block">If you're building a world,</span>
            <span className="block">you need Mythos.</span>
          </h2>
          <p className="mt-4 text-lg text-text-secondary">
            Free, open-source, and built for writers who think in universes.
          </p>
          <div className="mt-10">
            <Button variant="primary" size="lg" href="#">
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="-ml-1 mr-2"
                aria-hidden="true"
              >
                <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
              </svg>
              Star on GitHub
            </Button>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
