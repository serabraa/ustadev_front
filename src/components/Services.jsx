import { useTranslation } from 'react-i18next'
import { useState, useEffect } from 'react'

// Services section with clean card layout and simple mobile carousel
function Services() {
  const { t } = useTranslation()
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isMobile, setIsMobile] = useState(false)
  const [touchStart, setTouchStart] = useState(null)
  const [touchEnd, setTouchEnd] = useState(null)

  // Simple mobile detection
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768)
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  // Touch handlers for swipe
  const handleTouchStart = (e) => {
    setTouchEnd(null)
    setTouchStart(e.targetTouches[0].clientX)
  }

  const handleTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX)
  }

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return
    
    const distance = touchStart - touchEnd
    const isLeftSwipe = distance > 50
    const isRightSwipe = distance < -50

    if (isLeftSwipe) {
      setCurrentSlide((prev) => (prev + 1) % services.length)
    }
    if (isRightSwipe) {
      setCurrentSlide((prev) => (prev - 1 + services.length) % services.length)
    }
  }

  // Services data with translation keys
  const services = [
    {
      title: t('services.items.web.title'),
      description: t('services.items.web.description'),
      icon: '🌐'
    },
    {
      title: t('services.items.mobile.title'),
      description: t('services.items.mobile.description'),
      icon: '📱'
    },
    {
      title: t('services.items.backend.title'),
      description: t('services.items.backend.description'),
      icon: '⚙️'
    },
    {
      title: t('services.items.cloud.title'),
      description: t('services.items.cloud.description'),
      icon: '☁️'
    },
    {
      title: t('services.items.design.title'),
      description: t('services.items.design.description'),
      icon: '🎨'
    },
    {
      title: t('services.items.consulting.title'),
      description: t('services.items.consulting.description'),
      icon: '💡'
    }
  ]

  return (
    <section id="services" style={{ 
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
            {t('services.title')}
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
            {t('services.subtitle')}
          </p>
        </div>

        {/* Services Grid/Carousel */}
        {isMobile ? (
          /* Enhanced Mobile Carousel */
          <div 
            style={{ 
              position: 'relative', 
              overflow: 'hidden',
              borderRadius: '16px',
              background: 'linear-gradient(135deg, #f8f9fa 0%, #ffffff 100%)',
              padding: '1rem',
              boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)'
            }}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            {/* Navigation Arrows */}
            <button
              onClick={() => setCurrentSlide((prev) => (prev - 1 + services.length) % services.length)}
              style={{
                position: 'absolute',
                left: '8px',
                top: '50%',
                transform: 'translateY(-50%)',
                background: 'rgba(255, 255, 255, 0.9)',
                color: '#000000',
                border: 'none',
                borderRadius: '50%',
                width: '36px',
                height: '36px',
                cursor: 'pointer',
                zIndex: 10,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '1.1rem',
                fontWeight: 'bold',
                boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)',
                transition: 'all 0.3s ease'
              }}
              onMouseEnter={(e) => {
                e.target.style.background = 'rgba(0, 0, 0, 0.9)'
                e.target.style.color = '#ffffff'
                e.target.style.transform = 'translateY(-50%) scale(1.1)'
              }}
              onMouseLeave={(e) => {
                e.target.style.background = 'rgba(255, 255, 255, 0.9)'
                e.target.style.color = '#000000'
                e.target.style.transform = 'translateY(-50%) scale(1)'
              }}
            >
              ‹
            </button>

            <button
              onClick={() => setCurrentSlide((prev) => (prev + 1) % services.length)}
              style={{
                position: 'absolute',
                right: '8px',
                top: '50%',
                transform: 'translateY(-50%)',
                background: 'rgba(255, 255, 255, 0.9)',
                color: '#000000',
                border: 'none',
                borderRadius: '50%',
                width: '36px',
                height: '36px',
                cursor: 'pointer',
                zIndex: 10,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '1.1rem',
                fontWeight: 'bold',
                boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)',
                transition: 'all 0.3s ease'
              }}
              onMouseEnter={(e) => {
                e.target.style.background = 'rgba(0, 0, 0, 0.9)'
                e.target.style.color = '#ffffff'
                e.target.style.transform = 'translateY(-50%) scale(1.1)'
              }}
              onMouseLeave={(e) => {
                e.target.style.background = 'rgba(255, 255, 255, 0.9)'
                e.target.style.color = '#000000'
                e.target.style.transform = 'translateY(-50%) scale(1)'
              }}
            >
              ›
            </button>

            {/* Carousel Container */}
            <div style={{ 
              display: 'flex', 
              transform: `translateX(-${currentSlide * 100}%)`,
              transition: 'transform 0.5s cubic-bezier(0.4, 0, 0.2, 1)'
            }}>
              {services.map((service, index) => (
                <div key={index} style={{ minWidth: '100%', padding: '0 0.5rem' }}>
                  <div style={{
                    background: '#ffffff',
                    padding: '2.5rem 2rem',
                    borderRadius: '12px',
                    boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08)',
                    textAlign: 'center',
                    border: '1px solid #f0f0f0',
                    position: 'relative',
                    transform: 'scale(0.98)',
                    transition: 'transform 0.3s ease'
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.transform = 'scale(1)'
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.transform = 'scale(0.98)'
                  }}
                  >
                    {/* Service Icon */}
                    <div style={{ 
                      fontSize: '3.5rem', 
                      marginBottom: '1.5rem',
                      filter: 'drop-shadow(0 2px 4px rgba(0, 0, 0, 0.1))'
                    }}>
                      {service.icon}
                    </div>
                    {/* Service Title */}
                    <h3 style={{ 
                      fontSize: '1.6rem', 
                      fontWeight: '500', 
                      color: '#000000',
                      fontFamily: 'system-ui, -apple-system, sans-serif',
                      letterSpacing: '0.5px',
                      margin: '0 0 1rem 0'
                    }}>
                      {service.title}
                    </h3>
                    {/* Service Description */}
                    <p style={{ 
                      fontSize: '1.1rem', 
                      color: '#666666', 
                      lineHeight: '1.6',
                      fontFamily: 'system-ui, -apple-system, sans-serif',
                      margin: '0'
                    }}>
                      {service.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
            
            {/* Enhanced Progress Bar */}
            <div style={{ 
              display: 'flex', 
              justifyContent: 'center', 
              marginTop: '2rem',
              gap: '0.5rem'
            }}>
              {services.map((_, index) => (
                <div
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  style={{
                    width: index === currentSlide ? '24px' : '8px',
                    height: '8px',
                    borderRadius: '4px',
                    background: index === currentSlide ? '#000000' : '#cccccc',
                    cursor: 'pointer',
                    transition: 'all 0.3s ease',
                    transform: index === currentSlide ? 'scale(1.1)' : 'scale(1)'
                  }}
                  onMouseEnter={(e) => {
                    if (index !== currentSlide) {
                      e.target.style.background = '#999999'
                      e.target.style.transform = 'scale(1.05)'
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (index !== currentSlide) {
                      e.target.style.background = '#cccccc'
                      e.target.style.transform = 'scale(1)'
                    }
                  }}
                />
              ))}
            </div>

            {/* Slide Counter */}
            <div style={{
              position: 'absolute',
              bottom: '8px',
              right: '12px',
              background: 'rgba(0, 0, 0, 0.7)',
              color: '#ffffff',
              padding: '0.4rem 0.8rem',
              borderRadius: '12px',
              fontSize: '0.8rem',
              fontFamily: 'system-ui, -apple-system, sans-serif',
              fontWeight: '500',
              backdropFilter: 'blur(10px)'
            }}>
              {currentSlide + 1} / {services.length}
            </div>
          </div>
        ) : (
          /* Desktop Grid */
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', 
            gap: '2rem' 
          }}>
            {services.map((service, index) => (
              <div
                key={index}
                data-aos="fade-up"
                data-aos-delay={index * 100}
                style={{
                  background: '#ffffff',
                  padding: '2.5rem',
                  borderRadius: '8px',
                  boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08)',
                  transition: 'all 0.3s ease',
                  cursor: 'pointer',
                  border: '1px solid transparent',
                  position: 'relative'
                }}
                onMouseEnter={(e) => {
                  if (e.target === e.currentTarget) {
                    e.target.style.transform = 'translateY(-8px)'
                    e.target.style.boxShadow = '0 8px 30px rgba(0, 0, 0, 0.12)'
                    e.target.style.borderColor = '#000000'
                  }
                }}
                onMouseLeave={(e) => {
                  e.target.style.transform = 'translateY(0)'
                  e.target.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.08)'
                  e.target.style.borderColor = 'transparent'
                  e.target.style.backgroundColor = '#ffffff'
                }}
              >
                {/* Service Icon */}
                <div style={{ 
                  fontSize: '3rem', 
                  marginBottom: '1.5rem',
                  textAlign: 'center',
                  pointerEvents: 'none'
                }}>
                  {service.icon}
                </div>
                {/* Service Title */}
                <h3 style={{ 
                  fontSize: '1.5rem', 
                  fontWeight: '500', 
                  color: '#000000',
                  fontFamily: 'system-ui, -apple-system, sans-serif',
                  letterSpacing: '0.5px',
                  margin: '0 0 1rem 0',
                  textAlign: 'center',
                  pointerEvents: 'none'
                }}>
                  {service.title}
                </h3>
                {/* Service Description */}
                <p style={{ 
                  fontSize: '1rem', 
                  color: '#666666', 
                  lineHeight: '1.6',
                  fontFamily: 'system-ui, -apple-system, sans-serif',
                  textAlign: 'center',
                  margin: '0',
                  pointerEvents: 'none'
                }}>
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        )}

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
            {t('services.cta')}
          </button>
        </div>
      </div>
    </section>
  )
}

export default Services
