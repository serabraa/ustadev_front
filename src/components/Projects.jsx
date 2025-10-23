import { useTranslation } from 'react-i18next'

// Projects section with clean card layout
function Projects() {
  const { t } = useTranslation()

  // Projects data with translation keys
  const projects = [
    {
      title: t('projects.items.ecommerce.title'),
      description: t('projects.items.ecommerce.description'),
      tech: t('projects.items.ecommerce.tech'),
      image: '🛒',
      link: 'https://solobeauty.am'
    },
    {
      title: t('projects.items.mobile.title'),
      description: t('projects.items.mobile.description'),
      tech: t('projects.items.mobile.tech'),
      image: '📱',
      link: ''
    },
    {
      title: t('projects.items.dashboard.title'),
      description: t('projects.items.dashboard.description'),
      tech: t('projects.items.dashboard.tech'),
      image: '📊',
      link: 'https://github.com/serabraa/CryptoBro'
    },
    {
      title: t('projects.items.portfolio.title'),
      description: t('projects.items.portfolio.description'),
      tech: t('projects.items.portfolio.tech'),
      image: '💼',
      link: 'https://github.com/serabraa/russianBlackjack'
    },
    {
      title: t('projects.items.saas.title'),
      description: t('projects.items.saas.description'),
      tech: t('projects.items.saas.tech'),
      image: '☁️',
      link: 'https://t.me/solo_grancum_bot'
    },
    {
      title: t('projects.items.api.title'),
      description: t('projects.items.api.description'),
      tech: t('projects.items.api.tech'),
      image: '🔗',
      link: 'https://github.com/serabraa/LOTRConverter'
    }
  ]

  return (
    <section id="projects" style={{ 
      minHeight: '100vh', 
      padding: '6rem 2rem', 
      background: '#ffffff' 
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
            {t('projects.title')}
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
            {t('projects.subtitle')}
          </p>
        </div>

        {/* Projects Minimalist List */}
        <div style={{ 
          maxWidth: '800px', 
          margin: '0 auto' 
        }}>
          {projects.map((project, index) => (
            <div
              key={index}
              data-aos="fade-up"
              data-aos-delay={index * 100}
              style={{
                padding: '2rem 0',
                borderBottom: index < projects.length - 1 ? '1px solid #e8e8e8' : 'none',
                transition: 'all 0.3s ease',
                cursor: 'pointer'
              }}
              onMouseEnter={(e) => {
                // Only apply hover effects to the container, not child elements
                if (e.target === e.currentTarget) {
                  e.target.style.paddingLeft = '1rem'
                  e.target.style.backgroundColor = '#f8f8f8'
                }
              }}
              onMouseLeave={(e) => {
                // Ensure all styles reset properly
                e.target.style.paddingLeft = '0'
                e.target.style.backgroundColor = 'transparent'
              }}
            >
              {/* Project Header */}
              <div style={{ 
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'space-between',
                marginBottom: '0.75rem'
              }}>
                <h3 style={{ 
                  fontSize: '1.5rem', 
                  fontWeight: '400', 
                  color: '#000000',
                  fontFamily: 'system-ui, -apple-system, sans-serif',
                  letterSpacing: '0.5px',
                  margin: '0',
                  pointerEvents: 'none'
                }}>
                  {project.title}
                </h3>
                
                <div style={{ 
                  display: 'flex', 
                  alignItems: 'center', 
                  gap: '1rem' 
                }}>
                  <span style={{ 
                    fontSize: '1.5rem',
                    pointerEvents: 'none'
                  }}>
                    {project.image}
                  </span>
                  
                  <a 
                    href={project.link}
                    style={{
                      color: '#000000',
                      textDecoration: 'none',
                      fontSize: '1rem',
                      fontWeight: '300',
                      letterSpacing: '0.5px',
                      fontFamily: 'system-ui, -apple-system, sans-serif',
                      borderBottom: '1px solid transparent',
                      transition: 'all 0.3s ease',
                      pointerEvents: 'auto'
                    }}
                    onMouseEnter={(e) => {
                      e.target.style.borderBottomColor = '#000000'
                    }}
                    onMouseLeave={(e) => {
                      e.target.style.borderBottomColor = 'transparent'
                    }}
                  >
                    {t('projects.viewProject')} →
                  </a>
                </div>
              </div>

              {/* Project Description */}
              <p style={{ 
                fontSize: '1rem', 
                color: '#666666', 
                lineHeight: '1.6',
                fontFamily: 'system-ui, -apple-system, sans-serif',
                margin: '0 0 1rem 0',
                pointerEvents: 'none'
              }}>
                {project.description}
              </p>

              {/* Tech Stack */}
              <div style={{ 
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
                pointerEvents: 'none'
              }}>
                <span style={{ 
                  fontSize: '0.875rem', 
                  color: '#999999',
                  fontWeight: '300',
                  letterSpacing: '0.5px',
                  fontFamily: 'system-ui, -apple-system, sans-serif'
                }}>
                  Tech:
                </span>
                <span style={{ 
                  fontSize: '0.875rem', 
                  color: '#000000',
                  fontWeight: '400',
                  letterSpacing: '0.5px',
                  fontFamily: 'system-ui, -apple-system, sans-serif'
                }}>
                  {project.tech}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div style={{ 
          textAlign: 'center', 
          marginTop: '4rem' 
        }} data-aos="fade-up">
          <button style={{
            background: '#000000',
            color: '#ffffff',
            border: 'none',
            padding: '1rem 2rem',
            fontSize: '1rem',
            fontWeight: '500',
            letterSpacing: '0.5px',
            fontFamily: 'system-ui, -apple-system, sans-serif',
            borderRadius: '4px',
            cursor: 'pointer',
            transition: 'all 0.3s ease',
            textTransform: 'uppercase'
          }}
          onMouseEnter={(e) => {
            e.target.style.backgroundColor = '#333333'
            e.target.style.transform = 'translateY(-2px)'
          }}
          onMouseLeave={(e) => {
            e.target.style.backgroundColor = '#000000'
            e.target.style.transform = 'translateY(0)'
          }}
          onMouseDown={(e) => {
            e.target.style.transform = 'translateY(-2px) scale(0.98)'
          }}
          onMouseUp={(e) => {
            e.target.style.transform = 'translateY(-2px) scale(1)'
          }}
          >
            {t('projects.viewAll')}
          </button>
        </div>
      </div>
    </section>
  )
}

export default Projects

