import { useState } from 'react'
import { useTranslation } from 'react-i18next'

// Stylish language switcher with dropdown
function LanguageSwitcher() {
  const { i18n } = useTranslation()
  const [isOpen, setIsOpen] = useState(false)

  // Available languages
  const languages = [
    { code: 'en', name: 'EN', flag: '🇺🇸' },
    { code: 'ru', name: 'RU', flag: '🇷🇺' },
    { code: 'am', name: 'AM', flag: '🇦🇲' }
  ]

  // Get current language name
  const currentLang = languages.find(lang => lang.code === i18n.language) || languages[0]

  // Handle language change
  const handleLanguageChange = (languageCode) => {
    i18n.changeLanguage(languageCode)
    localStorage.setItem('language', languageCode)
    document.documentElement.lang = languageCode
    setIsOpen(false)
  }

  return (
    <div style={{ position: 'relative', zIndex: 1100 }}>
      {/* Current language display */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        style={{
          background: 'transparent',
          border: 'none',
          color: '#ffffff',
          cursor: 'pointer',
          fontSize: '0.95rem',
          fontWeight: '500',
          padding: '0.25rem 0',
          display: 'flex',
          alignItems: 'center',
          gap: '0.5rem',
          lineHeight: '1',
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
        <span style={{ fontSize: '1rem', display: 'inline-block', lineHeight: '1' }} aria-hidden>{currentLang.flag}</span>
        {currentLang.name}
        <span style={{ 
          fontSize: '0.75rem',
          transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
          transition: 'transform 0.2s ease'
        }}>
          ▼
        </span>
      </button>

      {/* Dropdown menu */}
      {isOpen && (
        <div style={{
          position: 'absolute',
          top: '100%',
          right: '0',
          background: '#ffffff',
          minWidth: '100px',
          zIndex: 2000,
          boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
          borderRadius: '4px'
        }}>
          {languages.map((lang) => (
            <button
              key={lang.code}
              onClick={() => handleLanguageChange(lang.code)}
              style={{
                background: lang.code === i18n.language ? '#000000' : 'transparent',
                border: 'none',
                color: lang.code === i18n.language ? '#ffffff' : '#000000',
                width: '100%',
                padding: '0.75rem 1rem',
                cursor: 'pointer',
                fontSize: '0.95rem',
                fontWeight: '500',
                textAlign: 'left',
                transition: 'all 0.2s ease',
                letterSpacing: '0.5px',
                fontFamily: 'system-ui, -apple-system, sans-serif',
                borderRadius: '0',
                outline: 'none',
                margin: '0',
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
                lineHeight: '1'
              }}
              onMouseEnter={(e) => {
                if (lang.code !== i18n.language) {
                  e.target.style.backgroundColor = '#f5f5f5'
                }
              }}
              onMouseLeave={(e) => {
                if (lang.code !== i18n.language) {
                  e.target.style.backgroundColor = 'transparent'
                } else {
                  e.target.style.backgroundColor = '#000000'
                }
              }}
            >
              <span style={{ display: 'inline-block', lineHeight: '1' }} aria-hidden>{lang.flag}</span>
              {lang.name}
            </button>
          ))}
        </div>
      )}
    </div>
  )
}

export default LanguageSwitcher
