import { useTranslation } from 'react-i18next'

// Contacts section with minimalist black/white styling
function Contacts() {
  const { t } = useTranslation()

  // Contact methods with i18n labels
  const contacts = [
    { label: t('contacts.telegram'), value: '@serabraa', href: 'https://t.me/serabraa' },
    { label: t('contacts.phone'), value: '+374 (55) 64-61-63', href: 'tel:+37455646163' },
    { label: t('contacts.email'), value: 'serabrserabr@gmail.com', href: 'mailto:serabrserabr@gmail.com' }
  ]

  return (
    <section id="contacts" style={{ 
      minHeight: '100vh', 
      padding: '6rem 2rem', 
      background: '#000000',
      color: '#ffffff'
    }}>
      <div style={{ maxWidth: '900px', margin: '0 auto' }}>
        {/* Section Header */}
        <div style={{ textAlign: 'center', marginBottom: '3rem' }} data-aos="fade-up">
          <h2 style={{ 
            fontSize: '3rem', 
            fontWeight: '300', 
            letterSpacing: '2px', 
            color: '#ffffff',
            fontFamily: 'system-ui, -apple-system, sans-serif',
            textTransform: 'uppercase',
            margin: '0 0 1rem 0'
          }}>
            {t('contacts.title')}
          </h2>
          <p style={{ 
            fontSize: '1.125rem', 
            color: '#d0d0d0', 
            fontWeight: '300',
            letterSpacing: '0.5px',
            fontFamily: 'system-ui, -apple-system, sans-serif',
            margin: '0'
          }}>
            {t('contacts.subtitle')}
          </p>
        </div>

        {/* Contact List */}
        <div style={{ 
          background: '#0f0f0f',
          border: '1px solid #222222',
          borderRadius: '12px',
          overflow: 'hidden'
        }}>
          {contacts.map((item, index) => (
            <a
              key={index}
              href={item.href}
              target={item.href.startsWith('http') ? '_blank' : undefined}
              rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                padding: '1.25rem 1.5rem',
                textDecoration: 'none',
                borderBottom: index < contacts.length - 1 ? '1px solid #1a1a1a' : 'none',
                transition: 'all 0.2s ease',
                color: '#ffffff'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = '#151515'
                e.currentTarget.style.transform = 'translateY(-1px)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = 'transparent'
                e.currentTarget.style.transform = 'translateY(0)'
              }}
            >
              <span style={{ 
                fontSize: '1rem', 
                color: '#d9d9d9',
                letterSpacing: '0.5px',
                fontFamily: 'system-ui, -apple-system, sans-serif'
              }}>
                {item.label}
              </span>
              <span style={{ 
                fontSize: '1.125rem', 
                color: '#ffffff',
                fontWeight: 500,
                fontFamily: 'system-ui, -apple-system, sans-serif'
              }}>
                {item.value}
              </span>
            </a>
          ))}
        </div>

        {/* Note */}
        <p style={{ 
          fontSize: '0.9rem', 
          color: '#a8a8a8', 
          marginTop: '1rem',
          textAlign: 'center',
          fontFamily: 'system-ui, -apple-system, sans-serif'
        }}>
          {t('contacts.note')}
        </p>
      </div>
    </section>
  )
}

export default Contacts


