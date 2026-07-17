import { FadeIn } from '../ui/FadeIn'
import { T } from '../../i18n'

export default function FinalCTA() {
  return (
    <section className="closing wrap">
      <FadeIn>
        <T k="closing.eyebrow" className="eyebrow" />
        <T k="closing.h2" as="h2" />
        <div className="hero-cta">
          <a className="btn btn-primary" href="https://github.com/Mythos-IDE"><span className="star">★</span> <T k="nav.star" /></a>
          <a className="btn" href="https://github.com/Mythos-IDE/mythoside-ts"><T k="closing.cta2" /></a>
        </div>
      </FadeIn>
    </section>
  )
}
