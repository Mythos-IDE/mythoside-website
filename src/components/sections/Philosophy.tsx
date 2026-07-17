import { FadeIn } from '../ui/FadeIn'
import { T, useLang } from '../../i18n'

export default function Philosophy() {
  const { t } = useLang()
  return (
    <section className="section" id="ethos">
      <div className="wrap">
        <FadeIn>
          <div className="ethos">
            <div className="ethos-grid">
              <div>
                <T k="ethos.eyebrow" className="eyebrow" />
                <T k="ethos.h2" as="h2" />
                <T k="ethos.body" as="p" className="body" />
                <ul className="checks" style={{ marginTop: 26 }}>
                  <li><span className="k">✓</span><T k="ethos.c1" /></li>
                  <li><span className="k">✓</span><T k="ethos.c2" /></li>
                  <li><span className="k">✓</span><T k="ethos.c3" /></li>
                </ul>
              </div>
              <div className="arch" aria-label="Architecture: the core engine talks to the app over standard input and output, and never opens a network port.">
                <div className="path" style={{ marginBottom: 18 }}>{t('arch.label')}</div>
                <span className="box core">{'mythos‑core'}</span> <span className="pipe">◂── stdio ──▸</span> <span className="box">Mythos.app</span>
                <br /><br />
                <span className="no">{'╳ 127.0.0.1:<port>'}</span>
                <T k="arch.cap" className="cap" />
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
