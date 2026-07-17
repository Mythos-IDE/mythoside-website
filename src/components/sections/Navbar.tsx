import { T, LangToggle } from '../../i18n'
import { ThemeToggle } from '../../theme'
import Logo from '../ui/Logo'

export default function Navbar() {
  return (
    <header className="nav">
      <div className="wrap">
        <a className="brand" href="#top" aria-label="Mythos home"><Logo /> Mythos</a>
        <nav className="nav-links" aria-label="Primary">
          <a href="#problem"><T k="nav.problem" /></a>
          <a href="#model"><T k="nav.model" /></a>
          <a href="#engine"><T k="nav.engine" /></a>
          <a href="#ethos"><T k="nav.ethos" /></a>
          <a href="#open"><T k="nav.open" /></a>
        </nav>
        <div className="nav-tools">
          <LangToggle />
          <ThemeToggle />
          <a className="btn" href="https://github.com/Mythos-IDE"><span className="star">★</span> <T k="nav.star" className="lbl" /></a>
        </div>
      </div>
    </header>
  )
}
