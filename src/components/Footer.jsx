import { useTranslation } from 'react-i18next'

// Minimalist footer in black/white
function Footer() {
  const { t } = useTranslation()
  const year = new Date().getFullYear()

  return (
    <footer style={{
      background: '#000000',
      color: '#ffffff',
      padding: '2rem 1rem'
    }}>
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        textAlign: 'center',
        fontFamily: 'system-ui, -apple-system, sans-serif',
        fontWeight: 300,
        letterSpacing: '1px'
      }}>
        © {year} Ustadev. {t('footer.rights')}
      </div>
    </footer>
  )
}

export default Footer


