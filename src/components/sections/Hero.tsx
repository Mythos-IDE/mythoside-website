import { T, useLang } from '../../i18n'

export default function Hero() {
  const { t } = useLang()
  return (
    <section className="hero wrap">
      <div className="hero-grid">
        <div>
          <T k="hero.eyebrow" className="eyebrow" />
          <T k="hero.h1" as="h1" />
          <T k="hero.lead" as="p" className="lead" />
          <div className="hero-cta">
            <a className="btn btn-primary" href="https://github.com/Mythos-IDE"><span className="star">★</span> <T k="nav.star" /></a>
            <a className="btn" href="#engine"><T k="hero.cta2" /></a>
          </div>
          <div className="hero-meta">
            <div className="hm"><T k="hero.m1a" as="b" /><T k="hero.m1b" /></div>
            <div className="hm"><T k="hero.m2a" as="b" /><T k="hero.m2b" /></div>
            <div className="hm"><T k="hero.m3a" as="b" /><T k="hero.m3b" /></div>
          </div>
        </div>

        {/* Signature: the narrative diagnostic. File paths/names stay literal; prose + diagnostic are translated. */}
        <div className="editor" role="img" aria-label="The Mythos editor flags 'Lord Corvath', a character who died in Book One, being referenced as present in Book Two — diagnostic MYTH-E012.">
          <div className="editor-bar">
            <span className="dot" />
            <span className="crumb">the-ashfall-cycle / book-02-the-drowned-throne / <b>ch-03-the-tidewatch.md</b></span>
            <span className="unsaved">•</span>
          </div>
          <div className="editor-body">
            <div className="tree" aria-hidden="true">
              <div className="grp">the-ashfall-cycle</div>
              <div className="row"><span className="tw">▾</span> book-01-embergate</div>
              <div className="row file">ch-12-the-fall.md</div>
              <div className="row"><span className="tw">▾</span> book-02-the-drowned-throne</div>
              <div className="row file">ch-01-saltlight.md</div>
              <div className="row file active">ch-03-the-tidewatch.md <span className="fdot">•</span></div>
              <T k="demo.entities" as="div" className="grp" />
              <div className="row"><span className="tw">▾</span> characters</div>
              <div className="row file">lord-corvath.md</div>
              <div className="row file">sera-of-vael.md</div>
            </div>
            <div className="code">
              <div className="ln"><span className="n">41</span><span className="t prose-line">{t('demo.l41')}</span></div>
              <div className="ln"><span className="n">42</span><span className="t prose-line">{t('demo.l42')}</span></div>
              <div className="ln"><span className="n">43</span><span className="t prose-line">{t('demo.l43a')}<span className="flag">Lord Corvath<svg className="sq" viewBox="0 0 120 6" preserveAspectRatio="none" aria-hidden="true"><path d="M0 3 Q7 0 14 3 T28 3 T42 3 T56 3 T70 3 T84 3 T98 3 T112 3 T120 3" /></svg></span>{t('demo.l43b')}</span></div>
              <div className="ln"><span className="n">44</span><span className="t prose-line">{t('demo.l44')}</span></div>
            </div>
          </div>
          <div className="problems">
            <div className="ph">{t('demo.problems')} <span className="c">{t('demo.err')}</span></div>
            <div className="diag">
              <span className="sev" aria-hidden="true">✕</span>
              <div className="dcode">
                <div className="rc">MYTH-E012 · {t('demo.rc')}</div>
                <T k="demo.msg" as="div" className="msg" />
                <a className="goto" href="#model"><T k="demo.goto" /></a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
