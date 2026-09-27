import { useEffect, useState } from 'react'
import Logo from './components/Logo.jsx'

const copy = {
  en: {
    spell: ['Name the spell.', 'I’ll code it.'],
    telegram: 'Telegram',
    email: 'Email',
    turn: 'turn the card',
    turnBack: 'turn it back',
    switchTo: 'hy',
    switchLabel: 'Հայ',
  },
  hy: {
    spell: ['Անվանիր կախարդանքը։', 'Ես այն կծրագրավորեմ։'],
    telegram: 'Թելեգրամ',
    email: 'Էլ. փոստ',
    turn: 'շրջիր քարտը',
    turnBack: 'շրջիր հետ',
    switchTo: 'en',
    switchLabel: 'Eng',
  },
}

// Saved choice first, then the browser's language; storage can be unavailable
function initialLang() {
  try {
    const saved = localStorage.getItem('lang')
    if (saved in copy) return saved
  } catch { /* ignore */ }
  return navigator.language?.startsWith('hy') ? 'hy' : 'en'
}

function App() {
  const [lang, setLang] = useState(initialLang)
  const [turned, setTurned] = useState(false)
  // One-time hint that the card turns: lift an edge, then let it fall back
  const [touched, setTouched] = useState(false)
  const [peeking, setPeeking] = useState(false)
  const t = copy[lang]

  useEffect(() => {
    document.documentElement.lang = lang
    try { localStorage.setItem('lang', lang) } catch { /* ignore */ }
  }, [lang])

  // Driven by the card's transition rather than a keyframe animation, so a
  // click mid-peek turns the card smoothly from wherever it currently is
  useEffect(() => {
    if (touched || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    const lift = setTimeout(() => setPeeking(true), 3400)
    const drop = setTimeout(() => setPeeking(false), 4300)
    return () => {
      clearTimeout(lift)
      clearTimeout(drop)
    }
  }, [touched])

  const flip = () => {
    setTouched(true)
    setPeeking(false)
    setTurned((v) => !v)
  }

  // Clicking anywhere on the card turns it, except on the contact links
  const turn = (e) => {
    if (e.target.closest('a')) return
    flip()
  }

  return (
    <main className="table">
      <button className="lang" onClick={() => setLang(t.switchTo)} lang={t.switchTo}>
        {t.switchLabel}
      </button>

      <div className={`card${turned ? ' turned' : ''}${peeking ? ' peeking' : ''}`} onClick={turn}>
        <div className="card-inner">
          <section className="face front" inert={turned}>
            <div className="frame">
              <span className="numeral">IX</span>
              <Logo className="sigil" />
              <h1 className="title" lang="en">Ustadev</h1>
            </div>
          </section>

          <section className="face back" inert={!turned}>
            <div className="frame">
              <span className="numeral">✦</span>

              <div className="reading">
                <h2>{t.spell[0]}<br />{t.spell[1]}</h2>
              </div>

              <dl className="contacts">
                <dt>{t.telegram}</dt>
                <dd><a href="https://t.me/serabraa" target="_blank" rel="noopener noreferrer">@serabraa</a></dd>
                <dt>{t.email}</dt>
                <dd><a href="mailto:serabrserabr@gmail.com">serabrserabr@gmail.com</a></dd>
              </dl>
            </div>
          </section>
        </div>
      </div>

      <button className="hint" onClick={flip} aria-pressed={turned}>
        {turned ? t.turnBack : t.turn}
      </button>
    </main>
  )
}

export default App
