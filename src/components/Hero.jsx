import { useTranslation } from 'react-i18next'
import logoText from '@/assets/ustadev_logo_text.svg'

// Hero section with centered text logo and minimalist content
function Hero() {
  const { t } = useTranslation()

  return (
    <section id="hero" style={{ 
      minHeight: '85vh', 
      display: 'flex', 
      alignItems: 'center', 
      justifyContent: 'center', 
      background: '#ffffff',
      padding: '2rem'
    }}>
      <div style={{ textAlign: 'center' }} data-aos="fade-up">
        <img
          src={logoText}
          alt="Ustadev logo text"
          style={{ 
            width: 'min(90vw, 820px)', 
            height: 'auto',
            display: 'block',
            margin: '0 auto 1.25rem auto'
          }}
        />
        <p style={{
          fontSize: '1.125rem',
          color: '#666666',
          fontWeight: '300',
          letterSpacing: '1px',
          fontFamily: 'system-ui, -apple-system, sans-serif',
          margin: 0
        }}>
          {t('hero.subtitle')}
        </p>

        {/* Primary CTA to guide scroll */}
        <div style={{ marginTop: '1.5rem' }}>
          <button
            onClick={() => {
              const el = document.getElementById('services')
              if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
            }}
            style={{
              background: '#000000',
              color: '#ffffff',
              border: 'none',
              padding: '0.9rem 1.5rem',
              fontSize: '0.95rem',
              fontWeight: 500,
              letterSpacing: '0.5px',
              borderRadius: '4px',
              cursor: 'pointer',
              transition: 'all 0.25s ease',
              fontFamily: 'system-ui, -apple-system, sans-serif'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = '#333333'
              e.currentTarget.style.transform = 'translateY(-2px)'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = '#000000'
              e.currentTarget.style.transform = 'translateY(0)'
            }}
          >
            {t('hero.cta')}
          </button>
        </div>
      </div>
    </section>
  )
}

export default Hero


