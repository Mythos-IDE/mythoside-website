import { FadeIn } from '../ui/FadeIn'
import { T } from '../../i18n'

export default function OpenSource() {
  return (
    <section className="section" id="open">
      <div className="wrap">
        <FadeIn>
          <div className="sec-head">
            <T k="open.eyebrow" className="eyebrow" />
            <T k="open.h2" as="h2" />
            <T k="open.body" as="p" className="body" />
          </div>
          <div className="os-grid">
            <div className="card">
              <T k="open.freeTier" className="tier" />
              <div className="price"><T k="open.freePrice" /><T k="open.freeSub" as="small" /></div>
              <ul>
                <li><T k="open.f1" /></li>
                <li><T k="open.f2" /></li>
                <li><T k="open.f3" /></li>
              </ul>
            </div>
            <div className="card pro">
              <T k="open.proTier" className="tier" />
              <div className="price"><T k="open.proPrice" /><T k="open.proSub" as="small" /></div>
              <ul>
                <li><T k="open.p1" /></li>
                <li><T k="open.p2" /></li>
                <li><T k="open.p3" /></li>
              </ul>
            </div>
          </div>
          <T k="open.fsl" as="div" className="fsl" />
        </FadeIn>
      </div>
    </section>
  )
}
