import { FadeIn } from '../ui/FadeIn'
import { T } from '../../i18n'

// Static English sample content (a worked example, not UI copy) — safe constant HTML.
const YAML = `<span class="d">---</span>
<span class="k">id</span><span class="d">:</span> <span class="v">lord-corvath</span>
<span class="k">type</span><span class="d">:</span> <span class="v">character</span>
<span class="k">status</span><span class="d">:</span> <span class="dead">deceased</span>
<span class="k">died</span><span class="d">:</span>
  <span class="k">book</span><span class="d">:</span> <span class="v">1</span>
  <span class="k">chapter</span><span class="d">:</span> <span class="v">12</span>
  <span class="k">event</span><span class="d">:</span> <span class="v">the-fall-of-embergate</span>
<span class="k">titles</span><span class="d">:</span> <span class="s">[Warden of the Ash, Third of His Name]</span>
<span class="d">---</span>
<span class="pr">Corvath held the Embergate for thirty winters.
When it fell, so did he — and the ash has</span>
<span class="pr">carried his name ever since.</span>`

export default function HowItWorks() {
  return (
    <section className="section" id="model">
      <div className="wrap">
        <FadeIn>
          <div className="sec-head">
            <T k="model.eyebrow" className="eyebrow" />
            <T k="model.h2" as="h2" />
            <T k="model.body" as="p" className="body" />
          </div>
          <div className="model-grid">
            <div className="panel">
              <div className="head">◇ <T k="model.p1" /> <span className="fp">characters/lord-corvath.md</span></div>
              <pre className="yaml" dangerouslySetInnerHTML={{ __html: YAML }} />
            </div>
            <div className="panel">
              <div className="head">◇ <T k="model.p2" /> <T k="model.p2fp" className="fp" /></div>
              <div className="constellation">
                <svg viewBox="0 0 400 320" preserveAspectRatio="xMidYMid meet" aria-hidden="true">
                  <path className="edge" d="M200,60 L96,150" />
                  <path className="edge" d="M200,60 L310,140" />
                  <path className="edge" d="M96,150 L150,255" />
                  <path className="edge" d="M310,140 L150,255" />
                  <path className="edge" d="M310,140 L300,250" />
                  <path className="edge bad" d="M96,150 L300,250" />
                </svg>
                <div className="node" style={{ left: '50%', top: '19%' }}><span className="g" />The Ashfall Cycle <small>series</small></div>
                <div className="node dead" style={{ left: '24%', top: '47%' }}><span className="g" />Lord Corvath <small>†&nbsp;B1·12</small></div>
                <div className="node" style={{ left: '77.5%', top: '44%' }}><span className="g" />The Tidewatch</div>
                <div className="node" style={{ left: '37.5%', top: '80%' }}><span className="g" />Sera of Vael</div>
                <div className="node" style={{ left: '75%', top: '78%' }}><span className="g" />ch-03 <small>book 2</small></div>
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
