import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import LanguageSwitcher from './LanguageSwitcher'

// Sticky header with logo and mobile menu
function Header({ brand = 'Ustadev', logoSrc }) {
  const { t } = useTranslation()
  // Controls mobile menu state
  const [open, setOpen] = useState(false)

  return (
    <header style={{ 
      position: 'fixed', 
      top: 0, 
      left: 0,
      right: 0,
      zIndex: 1000, 
      background: '#000000', 
      color: '#ffffff',
      width: '100%'
    }}>
      {/* Main container with flex layout */}
      <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0.75rem 1rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        {/* Logo and brand name */}
        <a href="#hero" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', textDecoration: 'none', color: 'inherit' }}>
          {logoSrc ? (
            <img src={logoSrc} alt="Ustadev logo" style={{ width: '80px', height: '80px' }} />
          ) : null}
          <span style={{ 
            fontWeight: 700, 
            fontSize: '1.5rem',
            letterSpacing: '1px',
            fontFamily: 'system-ui, -apple-system, sans-serif'
          }}>
            {brand}
          </span>
        </a>

        {/* Desktop nav - hidden for now */}
        <nav className="desktop-nav" style={{ display: 'none', gap: '2rem' }}>
          <a href="#hero" style={{ 
            color: '#ffffff', 
            textDecoration: 'none',
            fontWeight: '500',
            fontSize: '0.95rem',
            letterSpacing: '0.5px',
            fontFamily: 'system-ui, -apple-system, sans-serif',
            transition: 'all 0.3s ease',
            position: 'relative'
          }}
          onMouseEnter={(e) => {
            e.target.style.opacity = '0.7'
            e.target.style.transform = 'translateY(-2px)'
          }}
          onMouseLeave={(e) => {
            e.target.style.opacity = '1'
            e.target.style.transform = 'translateY(0)'
          }}
          >
            {t('nav.hero')}
          </a>
          <a href="#services" style={{ 
            color: '#ffffff', 
            textDecoration: 'none',
            fontWeight: '500',
            fontSize: '0.95rem',
            letterSpacing: '0.5px',
            fontFamily: 'system-ui, -apple-system, sans-serif',
            transition: 'all 0.3s ease'
          }}
          onMouseEnter={(e) => {
            e.target.style.opacity = '0.7'
            e.target.style.transform = 'translateY(-2px)'
          }}
          onMouseLeave={(e) => {
            e.target.style.opacity = '1'
            e.target.style.transform = 'translateY(0)'
          }}
          >
            {t('nav.services')}
          </a>
          <a href="#projects" style={{ 
            color: '#ffffff', 
            textDecoration: 'none',
            fontWeight: '500',
            fontSize: '0.95rem',
            letterSpacing: '0.5px',
            fontFamily: 'system-ui, -apple-system, sans-serif',
            transition: 'all 0.3s ease'
          }}
          onMouseEnter={(e) => {
            e.target.style.opacity = '0.7'
            e.target.style.transform = 'translateY(-2px)'
          }}
          onMouseLeave={(e) => {
            e.target.style.opacity = '1'
            e.target.style.transform = 'translateY(0)'
          }}
          >
            {t('nav.projects')}
          </a>
          <a href="#about" style={{ 
            color: '#ffffff', 
            textDecoration: 'none',
            fontWeight: '500',
            fontSize: '0.95rem',
            letterSpacing: '0.5px',
            fontFamily: 'system-ui, -apple-system, sans-serif',
            transition: 'all 0.3s ease'
          }}
          onMouseEnter={(e) => {
            e.target.style.opacity = '0.7'
            e.target.style.transform = 'translateY(-2px)'
          }}
          onMouseLeave={(e) => {
            e.target.style.opacity = '1'
            e.target.style.transform = 'translateY(0)'
          }}
          >
            {t('nav.about')}
          </a>
          <a href="#contacts" style={{ 
            color: '#ffffff', 
            textDecoration: 'none',
            fontWeight: '500',
            fontSize: '0.95rem',
            letterSpacing: '0.5px',
            fontFamily: 'system-ui, -apple-system, sans-serif',
            transition: 'all 0.3s ease'
          }}
          onMouseEnter={(e) => {
            e.target.style.opacity = '0.7'
            e.target.style.transform = 'translateY(-2px)'
          }}
          onMouseLeave={(e) => {
            e.target.style.opacity = '1'
            e.target.style.transform = 'translateY(0)'
          }}
          >
            {t('nav.contacts')}
          </a>
        </nav>

        {/* Language switcher and mobile menu button */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
          <LanguageSwitcher />
          <button 
            aria-label="Toggle menu" 
            aria-expanded={open} 
            onClick={() => setOpen(!open)} 
            style={{ 
              background: 'transparent', 
              border: 'none', 
              color: '#ffffff', 
              padding: '0.5rem',
              cursor: 'pointer',
              fontWeight: '500',
              fontSize: '0.95rem',
              letterSpacing: '0.5px',
              fontFamily: 'system-ui, -apple-system, sans-serif',
              transition: 'all 0.3s ease'
            }}
            onMouseEnter={(e) => {
              e.target.style.opacity = '0.7'
              e.target.style.transform = 'translateY(-2px)'
            }}
            onMouseLeave={(e) => {
              e.target.style.opacity = '1'
              e.target.style.transform = 'translateY(0)'
            }}
          >
            {open ? t('nav.close') : t('nav.menu')}
          </button>
        </div>
      </div>

      {/* Mobile dropdown menu */}
      {open && (
        <div style={{ background: '#000000', padding: '1rem 0' }}>
          <ul style={{ listStyle: 'none', margin: 0, padding: '0 1rem' }}>
            <li style={{ padding: '0.75rem 0' }}>
              <a 
                onClick={() => setOpen(false)} 
                href="#hero" 
                style={{ 
                  color: '#ffffff', 
                  textDecoration: 'none',
                  fontWeight: '500',
                  fontSize: '1rem',
                  letterSpacing: '0.5px',
                  fontFamily: 'system-ui, -apple-system, sans-serif',
                  transition: 'all 0.3s ease',
                  display: 'block',
                  padding: '0.5rem 1rem',
                  borderRadius: '4px'
                }}
                onMouseEnter={(e) => {
                  e.target.style.backgroundColor = '#333333'
                  e.target.style.transform = 'translateX(8px)'
                }}
                onMouseLeave={(e) => {
                  e.target.style.backgroundColor = 'transparent'
                  e.target.style.transform = 'translateX(0)'
                }}
                onMouseDown={(e) => {
                  e.target.style.transform = 'translateX(8px) scale(0.98)'
                }}
                onMouseUp={(e) => {
                  e.target.style.transform = 'translateX(8px) scale(1)'
                }}
              >
                {t('nav.hero')}
              </a>
            </li>
            <li style={{ padding: '0.75rem 0' }}>
              <a 
                onClick={() => setOpen(false)} 
                href="#services" 
                style={{ 
                  color: '#ffffff', 
                  textDecoration: 'none',
                  fontWeight: '500',
                  fontSize: '1rem',
                  letterSpacing: '0.5px',
                  fontFamily: 'system-ui, -apple-system, sans-serif',
                  transition: 'all 0.3s ease',
                  display: 'block',
                  padding: '0.5rem 1rem',
                  borderRadius: '4px'
                }}
                onMouseEnter={(e) => {
                  e.target.style.backgroundColor = '#333333'
                  e.target.style.transform = 'translateX(8px)'
                }}
                onMouseLeave={(e) => {
                  e.target.style.backgroundColor = 'transparent'
                  e.target.style.transform = 'translateX(0)'
                }}
                onMouseDown={(e) => {
                  e.target.style.transform = 'translateX(8px) scale(0.98)'
                }}
                onMouseUp={(e) => {
                  e.target.style.transform = 'translateX(8px) scale(1)'
                }}
              >
                {t('nav.services')}
              </a>
            </li>
            <li style={{ padding: '0.75rem 0' }}>
              <a 
                onClick={() => setOpen(false)} 
                href="#projects" 
                style={{ 
                  color: '#ffffff', 
                  textDecoration: 'none',
                  fontWeight: '500',
                  fontSize: '1rem',
                  letterSpacing: '0.5px',
                  fontFamily: 'system-ui, -apple-system, sans-serif',
                  transition: 'all 0.3s ease',
                  display: 'block',
                  padding: '0.5rem 1rem',
                  borderRadius: '4px'
                }}
                onMouseEnter={(e) => {
                  e.target.style.backgroundColor = '#333333'
                  e.target.style.transform = 'translateX(8px)'
                }}
                onMouseLeave={(e) => {
                  e.target.style.backgroundColor = 'transparent'
                  e.target.style.transform = 'translateX(0)'
                }}
                onMouseDown={(e) => {
                  e.target.style.transform = 'translateX(8px) scale(0.98)'
                }}
                onMouseUp={(e) => {
                  e.target.style.transform = 'translateX(8px) scale(1)'
                }}
              >
                {t('nav.projects')}
              </a>
            </li>
            <li style={{ padding: '0.75rem 0' }}>
              <a 
                onClick={() => setOpen(false)} 
                href="#about" 
                style={{ 
                  color: '#ffffff', 
                  textDecoration: 'none',
                  fontWeight: '500',
                  fontSize: '1rem',
                  letterSpacing: '0.5px',
                  fontFamily: 'system-ui, -apple-system, sans-serif',
                  transition: 'all 0.3s ease',
                  display: 'block',
                  padding: '0.5rem 1rem',
                  borderRadius: '4px'
                }}
                onMouseEnter={(e) => {
                  e.target.style.backgroundColor = '#333333'
                  e.target.style.transform = 'translateX(8px)'
                }}
                onMouseLeave={(e) => {
                  e.target.style.backgroundColor = 'transparent'
                  e.target.style.transform = 'translateX(0)'
                }}
                onMouseDown={(e) => {
                  e.target.style.transform = 'translateX(8px) scale(0.98)'
                }}
                onMouseUp={(e) => {
                  e.target.style.transform = 'translateX(8px) scale(1)'
                }}
              >
                {t('nav.about')}
              </a>
            </li>
            <li style={{ padding: '0.75rem 0' }}>
              <a 
                onClick={() => setOpen(false)} 
                href="#contacts" 
                style={{ 
                  color: '#ffffff', 
                  textDecoration: 'none',
                  fontWeight: '500',
                  fontSize: '1rem',
                  letterSpacing: '0.5px',
                  fontFamily: 'system-ui, -apple-system, sans-serif',
                  transition: 'all 0.3s ease',
                  display: 'block',
                  padding: '0.5rem 1rem',
                  borderRadius: '4px'
                }}
                onMouseEnter={(e) => {
                  e.target.style.backgroundColor = '#333333'
                  e.target.style.transform = 'translateX(8px)'
                }}
                onMouseLeave={(e) => {
                  e.target.style.backgroundColor = 'transparent'
                  e.target.style.transform = 'translateX(0)'
                }}
                onMouseDown={(e) => {
                  e.target.style.transform = 'translateX(8px) scale(0.98)'
                }}
                onMouseUp={(e) => {
                  e.target.style.transform = 'translateX(8px) scale(1)'
                }}
              >
                {t('nav.contacts')}
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  )
}

export default Header


