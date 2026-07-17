import { FadeIn } from '../ui/FadeIn'
import { T } from '../../i18n'

export default function Problem() {
  return (
    <section className="section" id="problem">
      <div className="wrap">
        <FadeIn>
          <div className="stack">
            <div>
              <div className="sec-head" style={{ marginBottom: 0 }}>
                <T k="problem.eyebrow" className="eyebrow" />
                <T k="problem.h2" as="h2" />
                <T k="problem.body" as="p" className="body" />
              </div>
            </div>
            <div className="tabs" aria-hidden="true">
              <div className="t"><span className="ic">◈</span> world-bible.notion <T k="problem.n1" className="note" /></div>
              <div className="t"><span className="ic">▦</span> timeline_v7_FINAL.xlsx <T k="problem.n2" className="note" /></div>
              <div className="t"><span className="ic">✎</span> characters/ (41 docs) <T k="problem.n3" className="note" /></div>
              <div className="t bad"><span className="ic">✕</span> <T k="problem.mem" /> <T k="problem.n4" className="note" /></div>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
