import { createContext, useContext, useEffect, useState } from 'react'
import type { ReactNode, ElementType } from 'react'

export type Lang = 'en' | 'tr'

type Dict = Record<string, string>

const EN: Dict = {
  'nav.problem': 'problem', 'nav.model': 'model', 'nav.engine': 'engine', 'nav.ethos': 'ethos', 'nav.open': 'open&nbsp;source', 'nav.star': 'Star on GitHub',
  'hero.eyebrow': 'Local-first world development environment',
  'hero.h1': 'Continuity is a <em>solved</em> problem.',
  'hero.lead': "Mythos reads your whole series the way a compiler reads a codebase — so the lord who <b>died in Book One</b> can't quietly speak again in Book Two. You'd hear about it first.",
  'hero.cta2': 'See what it catches →',
  'hero.m1a': 'Rust engine', 'hero.m1b': 'no network port', 'hero.m2a': 'Plain .md + YAML', 'hero.m2b': 'files you own', 'hero.m3a': 'Series → Chapter', 'hero.m3b': 'one source of truth',
  'demo.entities': 'entities',
  'demo.l41': 'The council chamber held its breath.',
  'demo.l42': 'Salt light fell through the drowned windows.',
  'demo.l43a': 'When ', 'demo.l43b': ' rose to speak, even',
  'demo.l44': 'the Tidewatch fell silent, and listened.',
  'demo.problems': 'Problems', 'demo.err': '1 error',
  'demo.rc': 'reference to deceased entity',
  'demo.msg': '<b>Lord Corvath</b> died in <b>The Ashfall</b> — Book I, ch. 12. He is referenced here as present.',
  'demo.goto': '→ open lord-corvath.md &nbsp;·&nbsp; status: deceased',
  'problem.eyebrow': 'The problem',
  'problem.h2': 'Your canon lives in five&nbsp;places. <em>The truth lives in none of them.</em>',
  'problem.body': "A wiki here, a spreadsheet there, a folder of half-named drafts, and the real continuity held together in your head. Every tool knows a fragment. None of them reads the whole world. So the contradictions — the resurrected dead, the town that moved two hundred miles, the birthday before the birth — don't surface until a reader finds them.",
  'problem.n1': 'last synced 3 weeks ago', 'problem.n2': 'v7 · or was it v8?', 'problem.n3': 'naming: chaotic', 'problem.n4': 'Corvath died… right?', 'problem.mem': 'your memory',
  'model.eyebrow': 'The model',
  'model.h2': 'One world, modelled like&nbsp;a&nbsp;codebase.',
  'model.body': "A series is a project. Books, chapters, characters and locations are entities — plain Markdown files with a little structured front matter. Mention a character and you've made a reference. Mythos tracks every reference, the way an IDE tracks every call site.",
  'model.p1': 'entity', 'model.p2': 'references', 'model.p2fp': 'the world, as a graph',
  'engine.eyebrow': 'The consistency engine',
  'engine.h2': 'Diagnostics for fiction. <em>The same rigour a compiler gives code.</em>',
  'engine.body': 'Every rule maps a hard-won lesson from software onto storytelling. The engine runs quietly as you write and reports what it finds — no rule ever rewrites a word for you.',
  'rule.e012t': 'Use after death', 'rule.e012d': 'A character acts, speaks, or appears after the chapter that killed them.',
  'rule.e003t': 'Undefined reference', 'rule.e003d': 'A name is invoked as canon, but no entity behind it exists in the series.',
  'rule.e007t': 'Impossible presence', 'rule.e007d': 'One character stands in two places within the same moment of the timeline.',
  'rule.w031t': 'Timeline drift', 'rule.w031d': 'An event is dated before the cause that is supposed to have produced it.',
  'rule.w018t': 'Orphaned lore', 'rule.w018d': 'An entity is defined in rich detail and then never referenced anywhere.',
  'rule.w009t': 'Shadowed name', 'rule.w009d': "Two distinct entities answer to the same name, and the prose can't tell them apart.",
  'ethos.eyebrow': 'Local-first, structurally',
  'ethos.h2': 'No account. No server. <em>No open port.</em>',
  'ethos.body': 'The engine that reads your world never opens a network connection — not even to your own machine. It talks to the app through a private channel that nothing else can reach. Your world stays plain text on your own disk. Uninstall Mythos tomorrow and every file still opens in any editor you like.',
  'ethos.c1': '<b>Files, not a database.</b> The source of truth is Markdown + YAML on disk. The index is just a cache it can rebuild.',
  'ethos.c2': '<b>Yours to keep.</b> No lock-in, no export button needed — it was never locked in.',
  'ethos.c3': '<b>Offline by default.</b> Cloud sync, if it ever ships, is an opt-in layer — never the foundation.',
  'arch.label': '// two processes, on purpose',
  'arch.cap': 'The Rust engine parses and watches your world.<br>The app renders it. Nothing listens on the network,<br>so nothing on the machine can knock.',
  'open.eyebrow': 'Open source &amp; community',
  'open.h2': 'Free while we build. <em>Yours when it ships.</em>',
  'open.body': "Mythos is in active development, so it's completely free today. At the first release it becomes a one-time purchase — pay once, own it. Some features may later arrive as an optional subscription, and the community decides what goes where through open surveys.",
  'open.freeTier': 'Now — in development', 'open.freePrice': 'Free', 'open.freeSub': 'no account · every feature',
  'open.f1': 'The full editor and engine', 'open.f2': 'Unlimited series and books', 'open.f3': 'Every consistency diagnostic',
  'open.proTier': 'At launch — one&nbsp;time', 'open.proPrice': 'Pay once', 'open.proSub': 'own it · not a subscription',
  'open.p1': 'The full desktop app, yours to keep', 'open.p2': 'Everything that runs on your device', 'open.p3': 'Advanced extras stay optional',
  'open.fsl': "<b>Functional Source License v1.1.</b> The source is open to read, run, and fork — you just can't repackage Mythos as a competing product.<br>Two years after each release, it converts automatically to Apache&nbsp;2.0. The website is MIT.",
  'closing.eyebrow': 'v0 · in active development',
  'closing.h2': 'Write the myth.<br><em>Let the environment keep the facts.</em>',
  'closing.cta2': 'Read the design docs →',
  'foot.tagline': '<b>A world development environment for novelists.</b> Early days, built in the open by a small team.',
  'foot.repos': 'Repositories', 'foot.r1': 'mythoside-core · engine', 'foot.r2': 'mythoside-ts · app',
  'foot.project': 'Project', 'foot.pr1': 'Mythos-IDE on GitHub', 'foot.pr2': 'Contributing', 'foot.pr3': 'Security',
  'foot.motto': 'The world is the source of truth.',
}

const TR: Dict = {
  'nav.problem': 'problem', 'nav.model': 'model', 'nav.engine': 'motor', 'nav.ethos': 'ilke', 'nav.open': 'açık&nbsp;kaynak', 'nav.star': "GitHub'da Yıldızla",
  'hero.eyebrow': 'Yerel-öncelikli dünya geliştirme ortamı',
  'hero.h1': 'Süreklilik <em>çözülmüş</em> bir problem.',
  'hero.lead': "Mythos, tüm serini bir derleyicinin kod tabanını okuduğu gibi okur — böylece <b>Birinci Kitap'ta ölen</b> lord, İkinci Kitap'ta usulca yeniden konuşamaz. İlk sen duyarsın.",
  'hero.cta2': 'Neleri yakaladığını gör →',
  'hero.m1a': 'Rust motoru', 'hero.m1b': 'ağ portu yok', 'hero.m2a': 'Düz .md + YAML', 'hero.m2b': 'sana ait dosyalar', 'hero.m3a': 'Seri → Bölüm', 'hero.m3b': 'tek doğruluk kaynağı',
  'demo.entities': 'varlıklar',
  'demo.l41': 'Meclis salonu nefesini tuttu.',
  'demo.l42': 'Tuz ışığı boğulmuş pencerelerden içeri düştü.',
  'demo.l43a': '', 'demo.l43b': ' söz almak için ayağa kalktığında,',
  'demo.l44': 'Tidewatch bile sustu ve dinledi.',
  'demo.problems': 'Sorunlar', 'demo.err': '1 hata',
  'demo.rc': 'ölü varlığa referans',
  'demo.msg': "<b>Lord Corvath</b>, <b>The Ashfall</b>'da öldü — Birinci Kitap, ch. 12. Burada canlı olarak geçiyor.",
  'demo.goto': '→ lord-corvath.md aç &nbsp;·&nbsp; durum: ölü',
  'problem.eyebrow': 'Problem',
  'problem.h2': 'Kanonun beş ayrı&nbsp;yerde. <em>Gerçek ise hiçbirinde.</em>',
  'problem.body': 'Bir yerde bir wiki, başka yerde bir tablo, yarım isimli taslaklarla dolu bir klasör ve gerçek süreklilik yalnızca senin kafanda. Her araç bir parçayı bilir; hiçbiri tüm dünyayı okumaz. Böylece çelişkiler — dirilen ölüler, üç yüz kilometre taşınan kasaba, doğumdan önceki doğum günü — bir okur bulana dek yüzeye çıkmaz.',
  'problem.n1': '3 hafta önce eşitlendi', 'problem.n2': 'v7 · yoksa v8 miydi?', 'problem.n3': 'isimlendirme: kaotik', 'problem.n4': 'Corvath öldü… değil mi?', 'problem.mem': 'senin hafızan',
  'model.eyebrow': 'Model',
  'model.h2': 'Tek dünya, bir kod tabanı&nbsp;gibi&nbsp;modellenmiş.',
  'model.body': "Bir seri, bir projedir. Kitaplar, bölümler, karakterler ve mekânlar birer varlıktır — biraz yapılandırılmış ön bilgi taşıyan düz Markdown dosyaları. Bir karakterden söz edersen bir referans oluşturmuş olursun. Mythos, bir IDE'nin her çağrı noktasını izlediği gibi her referansı izler.",
  'model.p1': 'varlık', 'model.p2': 'referanslar', 'model.p2fp': 'dünya, bir graf olarak',
  'engine.eyebrow': 'Tutarlılık motoru',
  'engine.h2': 'Kurmaca için tanılamalar. <em>Bir derleyicinin koda gösterdiği titizlikle.</em>',
  'engine.body': 'Her kural, yazılımdan zorlukla öğrenilmiş bir dersi hikâye anlatımına taşır. Motor sen yazarken sessizce çalışır ve bulduklarını bildirir — hiçbir kural senin yerine tek bir kelime bile yazmaz.',
  'rule.e012t': 'Ölümden sonra kullanım', 'rule.e012d': 'Bir karakter, onu öldüren bölümden sonra hareket eder, konuşur ya da görünür.',
  'rule.e003t': 'Tanımsız referans', 'rule.e003d': 'Bir isim kanon olarak anılır, ama seride arkasında bir varlık yoktur.',
  'rule.e007t': 'İmkânsız mevcudiyet', 'rule.e007d': 'Bir karakter, zaman çizgisinin aynı anında iki ayrı yerde bulunur.',
  'rule.w031t': 'Zaman çizgisi kayması', 'rule.w031d': 'Bir olay, onu doğurması gereken nedenden önceye tarihlenir.',
  'rule.w018t': 'Öksüz lore', 'rule.w018d': 'Bir varlık zengin ayrıntıyla tanımlanır, ama hiçbir yerde referans verilmez.',
  'rule.w009t': 'Gölgelenen isim', 'rule.w009d': 'İki ayrı varlık aynı isme yanıt verir ve metin onları birbirinden ayıramaz.',
  'ethos.eyebrow': 'Yapısal olarak yerel-öncelikli',
  'ethos.h2': 'Hesap yok. Sunucu yok. <em>Açık port yok.</em>',
  'ethos.body': "Dünyanı okuyan motor asla bir ağ bağlantısı açmaz — kendi makinene bile. Uygulamayla, başka hiçbir şeyin erişemeyeceği özel bir kanaldan konuşur. Dünyan kendi diskinde düz metin olarak kalır. Yarın Mythos'u kaldır, her dosya yine istediğin editörde açılır.",
  'ethos.c1': "<b>Veritabanı değil, dosyalar.</b> Doğruluk kaynağı diskteki Markdown + YAML'dir. İndeks, yeniden kurabileceği bir önbellekten ibarettir.",
  'ethos.c2': '<b>Senin, sende kalır.</b> Kilitlenme yok, dışa aktarma düğmesine gerek yok — zaten hiç kilitli değildi.',
  'ethos.c3': '<b>Varsayılan olarak çevrimdışı.</b> Bulut eşitleme, bir gün gelirse, isteğe bağlı bir katmandır — asla temel değil.',
  'arch.label': '// iki süreç, bilinçli olarak',
  'arch.cap': 'Rust motoru dünyanı ayrıştırır ve izler.<br>Uygulama onu görselleştirir. Ağda hiçbir şey dinlemez,<br>bu yüzden makinedeki hiçbir şey kapıyı çalamaz.',
  'open.eyebrow': 'Açık kaynak ve topluluk',
  'open.h2': 'İnşa ederken ücretsiz. <em>Çıkınca senin.</em>',
  'open.body': 'Mythos etkin geliştirme aşamasında, bu yüzden bugün tamamen ücretsiz. İlk sürümde tek seferlik satın almaya dönüşür — bir kez öde, senin olsun. Bazı özellikler ileride opsiyonel bir abonelik olarak gelebilir; neyin nereye gireceğine açık anketlerle topluluk karar verir.',
  'open.freeTier': 'Şimdi — geliştirmede', 'open.freePrice': 'Ücretsiz', 'open.freeSub': 'hesap yok · tüm özellikler',
  'open.f1': 'Tam editör ve motor', 'open.f2': 'Sınırsız seri ve kitap', 'open.f3': 'Tüm tutarlılık tanılamaları',
  'open.proTier': 'Çıkışta — tek&nbsp;seferlik', 'open.proPrice': 'Bir kez öde', 'open.proSub': 'senin olur · abonelik değil',
  'open.p1': 'Tüm masaüstü uygulaması, sende kalır', 'open.p2': 'Cihazında çalışan her şey', 'open.p3': 'Gelişmiş ekstralar opsiyonel kalır',
  'open.fsl': "<b>Functional Source License v1.1.</b> Kaynak; okunmaya, çalıştırılmaya ve fork'lanmaya açık — yalnızca Mythos'u rakip bir ürün olarak yeniden paketleyemezsin.<br>Her sürümden iki yıl sonra otomatik olarak Apache&nbsp;2.0'a döner. Web sitesi MIT'tir.",
  'closing.eyebrow': 'v0 · etkin geliştirmede',
  'closing.h2': 'Miti sen yaz.<br><em>Gerçekleri ortam tutsun.</em>',
  'closing.cta2': 'Tasarım belgelerini oku →',
  'foot.tagline': '<b>Romancılar için bir dünya geliştirme ortamı.</b> Daha ilk günler; küçük bir ekip tarafından açıkça geliştiriliyor.',
  'foot.repos': 'Depolar', 'foot.r1': 'mythoside-core · motor', 'foot.r2': 'mythoside-ts · uygulama',
  'foot.project': 'Proje', 'foot.pr1': "GitHub'da Mythos-IDE", 'foot.pr2': 'Katkıda bulunma', 'foot.pr3': 'Güvenlik',
  'foot.motto': 'Dünya, doğruluğun kaynağıdır.',
}

const DICTS: Record<Lang, Dict> = { en: EN, tr: TR }

type LangCtx = { lang: Lang; setLang: (l: Lang) => void; t: (key: string) => string }
const Ctx = createContext<LangCtx>({ lang: 'en', setLang: () => {}, t: (k) => k })

export function LangProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>('en')

  useEffect(() => {
    try {
      const saved = localStorage.getItem('mythos-lang')
      if (saved === 'en' || saved === 'tr') setLangState(saved)
    } catch { /* ignore */ }
  }, [])

  const setLang = (l: Lang) => {
    setLangState(l)
    document.documentElement.setAttribute('lang', l)
    try { localStorage.setItem('mythos-lang', l) } catch { /* ignore */ }
  }

  const t = (key: string) => DICTS[lang][key] ?? key

  return <Ctx.Provider value={{ lang, setLang, t }}>{children}</Ctx.Provider>
}

export function useLang() {
  return useContext(Ctx)
}

/**
 * Render a translated string as HTML into the given element (keeps <em>/<b>/<br>).
 * Safe: `t()` only ever returns values from the static EN/TR dictionaries above —
 * compile-time constants authored here, never user input. No untrusted data reaches innerHTML.
 */
export function T({ k, as: Tag = 'span', className }: { k: string; as?: ElementType; className?: string }) {
  const { t } = useLang()
  return <Tag className={className} dangerouslySetInnerHTML={{ __html: t(k) }} />
}

export function LangToggle() {
  const { lang, setLang } = useLang()
  return (
    <div className="lang" role="group" aria-label="Language">
      <button type="button" className={lang === 'en' ? 'active' : ''} onClick={() => setLang('en')}>EN</button>
      <button type="button" className={lang === 'tr' ? 'active' : ''} onClick={() => setLang('tr')}>TR</button>
    </div>
  )
}
