import { FadeIn } from '../ui/FadeIn'
import { T } from '../../i18n'

// The consistency-engine rules. Codes and CS analogs are universal jargon (not translated).
const RULES = [
  { code: 'MYTH-E012', warn: false, key: 'e012', analog: '≈ use-after-free' },
  { code: 'MYTH-E003', warn: false, key: 'e003', analog: '≈ undefined symbol' },
  { code: 'MYTH-E007', warn: false, key: 'e007', analog: '≈ data race' },
  { code: 'MYTH-W031', warn: true, key: 'w031', analog: '≈ causality violated' },
  { code: 'MYTH-W018', warn: true, key: 'w018', analog: '≈ dead code' },
  { code: 'MYTH-W009', warn: true, key: 'w009', analog: '≈ name collision' },
]

export default function Features() {
  return (
    <section className="section" id="engine">
      <div className="wrap">
        <FadeIn>
          <div className="sec-head">
            <T k="engine.eyebrow" className="eyebrow" />
            <T k="engine.h2" as="h2" />
            <T k="engine.body" as="p" className="body" />
          </div>
          <div className="rules">
            {RULES.map((r) => (
              <div className={r.warn ? 'rule warn' : 'rule'} key={r.code}>
                <span className="rc">{r.code}</span>
                <T k={`rule.${r.key}t`} as="span" className="rt" />
                <span className="analog"><b>{r.analog}</b></span>
                <T k={`rule.${r.key}d`} as="div" className="rd" />
              </div>
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
