import { useTranslation } from 'react-i18next'

// About section with clean layout
function About() {
  const { t } = useTranslation()


  // Company stats
  const stats = [
    {
      number: t('about.stats.projects'),
      label: t('about.stats.projectsLabel')
    },
    {
      number: t('about.stats.clients'),
      label: t('about.stats.clientsLabel')
    },
    {
      number: t('about.stats.experience'),
      label: t('about.stats.experienceLabel')
    },
    {
      number: t('about.stats.team'),
      label: t('about.stats.teamLabel')
    }
  ]

  return (
    <section id="about" style={{ 
      minHeight: '100vh', 
      padding: '6rem 2rem', 
      background: '#f8f8f8' 
    }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        {/* Section Header */}
        <div style={{ textAlign: 'center', marginBottom: '4rem' }} data-aos="fade-up">
          <h2 style={{ 
            fontSize: '3rem', 
            fontWeight: '300', 
            letterSpacing: '2px', 
            color: '#000000',
            fontFamily: 'system-ui, -apple-system, sans-serif',
            textTransform: 'uppercase',
            margin: '0 0 1rem 0'
          }}>
            {t('about.title')}
          </h2>
          <p style={{ 
            fontSize: '1.125rem', 
            color: '#666666', 
            fontWeight: '300',
            letterSpacing: '0.5px',
            fontFamily: 'system-ui, -apple-system, sans-serif',
            maxWidth: '600px',
            margin: '0 auto'
          }}>
            {t('about.subtitle')}
          </p>
        </div>

        {/* Company Description */}
        <div style={{ 
          textAlign: 'center', 
          marginBottom: '5rem',
          maxWidth: '800px',
          margin: '0 auto 5rem auto'
        }} data-aos="fade-up">
          <p style={{ 
            fontSize: '1.25rem', 
            color: '#000000', 
            lineHeight: '1.8',
            fontFamily: 'system-ui, -apple-system, sans-serif',
            fontWeight: '300',
            margin: '0'
          }}>
            {t('about.description')}
          </p>
        </div>

        {/* Company Stats */}
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', 
          gap: '2rem',
          marginBottom: '5rem'
        }}>
          {stats.map((stat, index) => (
            <div
              key={index}
              data-aos="fade-up"
              data-aos-delay={index * 100}
              style={{
                background: '#ffffff',
                padding: '2rem',
                borderRadius: '8px',
                boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08)',
                textAlign: 'center',
                border: '1px solid #f0f0f0',
                transition: 'all 0.3s ease'
              }}
              onMouseEnter={(e) => {
                e.target.style.transform = 'translateY(-4px)'
                e.target.style.boxShadow = '0 8px 25px rgba(0, 0, 0, 0.12)'
              }}
              onMouseLeave={(e) => {
                e.target.style.transform = 'translateY(0)'
                e.target.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.08)'
              }}
            >
              <div style={{ 
                fontSize: '3rem', 
                fontWeight: '700', 
                color: '#000000',
                fontFamily: 'system-ui, -apple-system, sans-serif',
                margin: '0 0 0.5rem 0'
              }}>
                {stat.number}
              </div>
              <div style={{ 
                fontSize: '1rem', 
                color: '#666666',
                fontFamily: 'system-ui, -apple-system, sans-serif',
                fontWeight: '400',
                letterSpacing: '0.5px'
              }}>
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        

        {/* Company Values */}
        <div style={{ 
          background: '#ffffff',
          padding: '3rem',
          borderRadius: '12px',
          boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08)',
          border: '1px solid #f0f0f0'
        }} data-aos="fade-up">
          <h3 style={{ 
            fontSize: '2rem', 
            fontWeight: '300', 
            letterSpacing: '1px', 
            color: '#000000',
            fontFamily: 'system-ui, -apple-system, sans-serif',
            textTransform: 'uppercase',
            textAlign: 'center',
            margin: '0 0 2rem 0'
          }}>
            {t('about.valuesTitle')}
          </h3>
          
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', 
            gap: '2rem' 
          }}>
            {[
              { icon: '🎯', title: t('about.values.quality.title'), desc: t('about.values.quality.desc') },
              { icon: '⚡', title: t('about.values.innovation.title'), desc: t('about.values.innovation.desc') },
              { icon: '🤝', title: t('about.values.collaboration.title'), desc: t('about.values.collaboration.desc') }
            ].map((value, index) => (
              <div key={index} style={{ textAlign: 'center' }}>
                <div style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>
                  {value.icon}
                </div>
                <h4 style={{ 
                  fontSize: '1.25rem', 
                  fontWeight: '500', 
                  color: '#000000',
                  fontFamily: 'system-ui, -apple-system, sans-serif',
                  margin: '0 0 0.75rem 0'
                }}>
                  {value.title}
                </h4>
                <p style={{ 
                  fontSize: '0.95rem', 
                  color: '#666666', 
                  lineHeight: '1.6',
                  fontFamily: 'system-ui, -apple-system, sans-serif',
                  margin: '0'
                }}>
                  {value.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
