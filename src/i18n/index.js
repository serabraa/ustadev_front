import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

// Translation resources
const resources = {
  en: {
    translation: {
      nav: {
        hero: 'Hero',
        services: 'Services',
        projects: 'Projects',
        about: 'About',
        contacts: 'Contacts',
        menu: 'Menu',
        close: 'Close'
      },
      language: {
        en: 'EN',
        ru: 'RU',
        am: 'AM'
      },
      services: {
        title: 'Services',
        subtitle: 'Comprehensive IT solutions tailored to your business needs',
        cta: 'Get Started',
        items: {
          web: {
            title: 'Web Development',
            description: 'Custom websites and web applications built with modern technologies'
          },
          mobile: {
            title: 'Mobile Apps',
            description: 'Native and cross-platform mobile applications for iOS and Android'
          },
              backend: {
                title: 'AI & API Integration',
                description: 'Integrate AI capabilities and third-party APIs into your products'
              },
          cloud: {
            title: 'Cloud Services',
            description: 'Cloud infrastructure setup, migration, and optimization'
          },
              design: {
                title: 'Game Development',
                description: 'Design and develop lightweight web and mobile games'
              },
              consulting: {
                title: 'Server Hosting',
                description: 'Provision, deploy and maintain secure servers and infrastructure'
              }
        }
      },
      projects: {
        title: 'Projects',
        subtitle: 'Showcase of our latest work and successful implementations',
        viewProject: 'View Project',
        viewAll: 'View All Projects',
        items: {
          ecommerce: {
            title: 'Beauty Salon Website',
            description: 'Modern website for a beauty salon with clean UI and analytics',
            tech: 'JS, React, DB, GA4, SEO, A/B testing'
          },
          mobile: {
            title: 'QR Generation & Server Hosting',
            description: 'QR creation and dedicated server hosting for a client delivery',
            tech: 'Python, FastAPI, Docker, Nginx, QR tools, CI/CD'
          },
          dashboard: {
            title: 'CryptoBro – AI Crypto Tracker',
            description: 'iOS app with AI-powered analysis, price alerts and background notifications',
            tech: 'Swift, SwiftUI, BackgroundTasks, OpenAI API, CoinGecko API, CryptoPanic API, CoreML'
          },
          portfolio: {
            title: 'Russian Blackjack (Unity Game)',
            description: 'Card game inspired by blackjack with Russian roulette mechanics',
            tech: 'Unity, C#, ShaderLab, Cinemachine, Addressables'
          },
          saas: {
            title: 'Telegram Booking Bot',
            description: 'Telegram bot for appointment booking and notifications',
            tech: 'Python, Telegram Bot API, SQLite, OpenAI API, LangChain, Redis'
          },
          api: {
            title: 'LOTR Converter (iOS)',
            description: 'Fantasy-themed currency converter app with smooth UI and offline support',
            tech: 'Swift, UIKit, Haptics, CoreAnimation, CoreData'
          }
        }
      },
      about: {
        title: 'About Us',
        subtitle: 'Building the future of technology, one project at a time',
        description: 'We are a passionate team of developers, designers, and innovators dedicated to creating exceptional digital experiences. With years of expertise in cutting-edge technologies, we help businesses transform their ideas into powerful digital solutions.',
        teamTitle: 'Our Team',
        valuesTitle: 'Our Values',
        team: {
          ceo: {
            name: 'John Smith',
            role: 'CEO & Founder',
            description: 'Visionary leader with 10+ years in tech industry, passionate about innovation and team building.'
          },
          cto: {
            name: 'Sarah Johnson',
            role: 'Chief Technology Officer',
            description: 'Technical expert specializing in scalable architectures and modern development practices.'
          },
          designer: {
            name: 'Mike Chen',
            role: 'Lead Designer',
            description: 'Creative designer focused on user experience and beautiful, functional interfaces.'
          }
        },
        stats: {
          projects: '50+',
          projectsLabel: 'Projects Completed',
          clients: '30+',
          clientsLabel: 'Happy Clients',
          experience: '5+',
          experienceLabel: 'Years Experience',
          team: '12+',
          teamLabel: 'Team Members'
        },
        values: {
          quality: {
            title: 'Quality First',
            desc: 'We never compromise on quality, ensuring every project meets the highest standards.'
          },
          innovation: {
            title: 'Innovation',
            desc: 'We embrace new technologies and creative solutions to solve complex problems.'
          },
          collaboration: {
            title: 'Collaboration',
            desc: 'We work closely with our clients as partners in their digital transformation journey.'
          }
        }
      }
      ,
      contacts: {
        title: 'Contacts',
        subtitle: 'Reach out and let\'s build something great together',
        telegram: 'Telegram',
        phone: 'Phone',
        email: 'Email',
        note: 'Preferred contact via Telegram or email'
      }
      ,
      hero: {
        subtitle: 'IT Solutions & Development',
        cta: 'Explore services'
      }
      ,
      footer: {
        rights: 'All rights reserved.'
      }
    }
  },
  ru: {
    translation: {
      nav: {
        hero: 'Главная',
        services: 'Услуги',
        projects: 'Проекты',
        about: 'О нас',
        contacts: 'Контакты',
        menu: 'Меню',
        close: 'Закрыть'
      },
      language: {
        en: 'EN',
        ru: 'RU',
        am: 'AM'
      },
      services: {
        title: 'Услуги',
        subtitle: 'Комплексные IT-решения, адаптированные под потребности вашего бизнеса',
        cta: 'Начать',
        items: {
          web: {
            title: 'Веб-разработка',
            description: 'Индивидуальные веб-сайты и веб-приложения, созданные с использованием современных технологий'
          },
          mobile: {
            title: 'Мобильные приложения',
            description: 'Нативные и кроссплатформенные мобильные приложения для iOS и Android'
          },
              backend: {
                title: 'Интеграция ИИ и API',
                description: 'Интегрируем возможности ИИ и сторонние API в ваши продукты'
              },
          cloud: {
            title: 'Облачные сервисы',
            description: 'Настройка, миграция и оптимизация облачной инфраструктуры'
          },
              design: {
                title: 'Разработка игр',
                description: 'Проектируем и создаем легкие веб и мобильные игры'
              },
              consulting: {
                title: 'Хостинг серверов',
                description: 'Развертывание и сопровождение безопасных серверов и инфраструктуры'
              }
        }
      },
      projects: {
        title: 'Проекты',
        subtitle: 'Демонстрация наших последних работ и успешных реализаций',
        viewProject: 'Посмотреть проект',
        viewAll: 'Все проекты',
        items: {
          ecommerce: {
            title: 'Сайт для салона красоты',
            description: 'Современный сайт для салона красоты с чистым UI и аналитикой',
            tech: 'JS, React, DB, GA4, SEO, A/B тестирование'
          },
          mobile: {
            title: 'Генерация QR и хостинг сервера',
            description: 'Создание QR-кодов и развертывание выделенного сервера для клиента',
            tech: 'Python, FastAPI, Docker, Nginx, QR инструменты, CI/CD'
          },
          dashboard: {
            title: 'CryptoBro – AI трекер криптовалют',
            description: 'iOS-приложение с AI-анализом, ценовыми алертами и фоновыми уведомлениями',
            tech: 'Swift, SwiftUI, BackgroundTasks, OpenAI API, CoinGecko API, CryptoPanic API, CoreML'
          },
          portfolio: {
            title: 'Russian Blackjack (Unity игра)',
            description: 'Карточная игра, вдохновленная блэкджеком, с элементами русской рулетки',
            tech: 'Unity, C#, ShaderLab, Cinemachine, Addressables'
          },
          saas: {
            title: 'Telegram бот для бронирования',
            description: 'Telegram-бот для записи на прием и отправки уведомлений',
            tech: 'Python, Telegram Bot API, SQLite, OpenAI API, LangChain, Redis'
          },
          api: {
            title: 'LOTR Converter (iOS)',
            description: 'Фэнтези-конвертер валют с плавным интерфейсом и офлайн-режимом',
            tech: 'Swift, UIKit, Haptics, CoreAnimation, CoreData'
          }
        }
      },
      about: {
        title: 'О нас',
        subtitle: 'Строим будущее технологий, один проект за раз',
        description: 'Мы - страстная команда разработчиков, дизайнеров и новаторов, посвятивших себя созданию исключительных цифровых решений. С многолетним опытом в передовых технологиях, мы помогаем бизнесу превращать идеи в мощные цифровые решения.',
        teamTitle: 'Наша команда',
        valuesTitle: 'Наши ценности',
        team: {
          ceo: {
            name: 'Джон Смит',
            role: 'Генеральный директор и основатель',
            description: 'Визионер-лидер с 10+ летним опытом в технологической индустрии, увлеченный инновациями и построением команды.'
          },
          cto: {
            name: 'Сара Джонсон',
            role: 'Технический директор',
            description: 'Технический эксперт, специализирующийся на масштабируемых архитектурах и современных практиках разработки.'
          },
          designer: {
            name: 'Майк Чен',
            role: 'Ведущий дизайнер',
            description: 'Креативный дизайнер, сосредоточенный на пользовательском опыте и красивых, функциональных интерфейсах.'
          }
        },
        stats: {
          projects: '50+',
          projectsLabel: 'Завершенных проектов',
          clients: '30+',
          clientsLabel: 'Довольных клиентов',
          experience: '5+',
          experienceLabel: 'Лет опыта',
          team: '12+',
          teamLabel: 'Членов команды'
        },
        values: {
          quality: {
            title: 'Качество прежде всего',
            desc: 'Мы никогда не идем на компромисс в качестве, обеспечивая соответствие каждого проекта высочайшим стандартам.'
          },
          innovation: {
            title: 'Инновации',
            desc: 'Мы принимаем новые технологии и креативные решения для решения сложных задач.'
          },
          collaboration: {
            title: 'Сотрудничество',
            desc: 'Мы тесно работаем с нашими клиентами как партнеры в их цифровой трансформации.'
          }
        }
      }
      ,
      contacts: {
        title: 'Контакты',
        subtitle: 'Свяжитесь с нами — создадим что-то великое вместе',
        telegram: 'Телеграм',
        phone: 'Телефон',
        email: 'Эл. почта',
        note: 'Предпочтительно связываться через Телеграм или email'
      }
      ,
      hero: {
        subtitle: 'IT-решения и разработка',
        cta: 'Посмотреть услуги'
      }
      ,
      footer: {
        rights: 'Все права защищены.'
      }
    }
  },
  am: {
    translation: {
      nav: {
        hero: 'Գլխավոր',
        services: 'Ծառայություններ',
        projects: 'Նախագծեր',
        about: 'Մեր մասին',
        contacts: 'Կապ',
        menu: 'Մենյու',
        close: 'Փակել'
      },
      language: {
        en: 'EN',
        ru: 'RU',
        am: 'AM'
      },
      services: {
        title: 'Ծառայություններ',
        subtitle: 'Ամբողջական IT լուծումներ՝ հարմարեցված ձեր բիզնեսի կարիքներին',
        cta: 'Սկսել',
        items: {
          web: {
            title: 'Վեբ-ծրագրավորում',
            description: 'Անհատական վեբ-կայքեր և վեբ-հավելվածներ՝ ստեղծված ժամանակակից տեխնոլոգիաներով'
          },
          mobile: {
            title: 'Բջջային հավելվածներ',
            description: 'հեռախոսային հավելվածների ստեղծում iOS-ի և Android-ի համար'
          },
              backend: {
                title: 'Արհեստական Բանականության և API ինտեգրում',
                description: 'Ինտեգրում ենք տարբեր API-ներ'
              },
          cloud: {
            title: 'Cloud ծառայություններ',
            description: 'Cloud ենթակառուցվածքի կարգավորում, միգրացիա և օպտիմիզացիա'
          },
              design: {
                title: 'Խաղերի ստեղծում',
                description: 'Պլանավորում և ստեղծում ենք վեբ և բջջային խաղեր'
              },
              consulting: {
                title: 'Սերվերների հոսթինգ',
                description: 'Անվտանգ սերվերների հոսթինգ ձեր իսկ վեբ-կայքերի համար'
              }
        }
      },
      projects: {
        title: 'Նախագծեր',
        subtitle: 'Մեր վերջին աշխատանքները և հաջող իրականացումները',
        viewProject: 'Դիտել նախագիծը',
        viewAll: 'Բոլոր նախագծերը',
        items: {
          ecommerce: {
            title: 'Վեբ-կայք գեղեցկության սրահի համար',
            description: 'Ժամանակակից կայք գեղեցկության սրահի համար՝ մաքուր UI-ով և անալիտիկայով',
            tech: 'JS, React, DB, GA4, SEO, A/B թեստավորում'
          },
          mobile: {
            title: 'QR-կոդերի գեներացում',
            description: 'QR կոդերի ստեղծում և երկարաժամկետ տեղակայում մեր սերվերներում',
            tech: 'Python, FastAPI, Docker, Nginx, QR գործիքներ, CI/CD'
          },
          dashboard: {
            title: 'CryptoBro – AI կրիպտո թրեքեր',
            description: 'Հեռախոսային հավելված՝ AI վերլուծությամբ և կրիպտոարժույթների գների կանխատեսումով',
            tech: 'Swift, SwiftUI, BackgroundTasks, OpenAI API, CoinGecko API, CryptoPanic API, CoreML'
          },
          portfolio: {
            title: 'Russian Blackjack (Unity խաղ)',
            description: 'Քարտային խաղ՝ ներշնչված բլեքջեքից',
            tech: 'Unity, C#, ShaderLab, Cinemachine, Addressables'
          },
          saas: {
            title: 'Telegram-ի բոտ',
            description: 'Telegram բոտ՝ գեղեցկության սրահում ժամեր ամրագրելու համար',
            tech: 'Python, Telegram Bot API, SQLite, OpenAI API, LangChain, Redis'
          },
          api: {
            title: 'LOTR Converter (iOS)',
            description: 'Արժույթների փոխանակման(change) հեռախոսային հավելված',
            tech: 'Swift, UIKit, Haptics, CoreAnimation, CoreData'
          }
        }
      },
      about: {
        title: 'Մեր մասին',
        subtitle: 'Կառուցում ենք այն, ինչ ցանկանում եք',
        description: 'Մեր փոքր թիմը առաջարկում է ձեզ մեծ պրոեկտներ,որոնք օգտակար կլինեն ձեզ և ձեր բիզնեսին։ Մեր տարիների փորձը թույլ է տալիս մեզ կարճ ժամանակում հասնել նոր և պրակրիկ լուծումների։',
        teamTitle: 'Մեր թիմը',
        valuesTitle: 'Մեր արժեքները',
        team: {
          ceo: {
            name: 'Ջոն Սմիթ',
            role: 'Գլխավոր տնօրեն և հիմնադիր',
            description: 'Տեսլական առաջնորդ 10+ տարվա փորձով տեխնոլոգիական ոլորտում, նվիրված նորարարությանը և թիմի կառուցմանը:'
          },
          cto: {
            name: 'Սարա Ջոնսոն',
            role: 'Տեխնիկական տնօրեն',
            description: 'Տեխնիկական փորձագետ՝ մասնագիտացված մասշտաբային ճարտարապետություններում և ժամանակակից զարգացման մեթոդներում:'
          },
          designer: {
            name: 'Մայք Չեն',
            role: 'Գլխավոր դիզայներ',
            description: 'Կրեատիվ դիզայներ՝ կենտրոնացած օգտագործողի փորձառության և գեղեցիկ, ֆունկցիոնալ ինտերֆեյսների վրա:'
          }
        },
        stats: {
          projects: '50+',
          projectsLabel: 'Ավարտված պրոեկտներ',
          clients: '30+',
          clientsLabel: 'Գոհ հաճախորդներ',
          experience: '5+',
          experienceLabel: 'Տարի փորձ',
          team: '12+',
          teamLabel: 'Թիմի անդամներ'
        },
        values: {
          quality: {
            title: 'Որակ',
            desc: 'Պրոեկտներ ամենաբարձր որակական չափանիշներին համապատասխան։'
          },
          innovation: {
            title: 'Նորարարություն',
            desc: 'Ուշի-ուշով հետևում ենք տեխնոլոգիաների զարգացմանը և մեր պրոեկտներում կիրառում ենք ամենանոր և ակտուալ ժամանակային լուծումները:'
          },
          collaboration: {
            title: 'Համագործակցություն',
            desc: 'Մենք համագործակցում ենք մեր գործընկերների հետ և մեր ծառայությունները մատուցում ենք նրանց համապատասխան նրանց պահանջներին:'
          }
        }
      }
      ,
      contacts: {
        title: 'Կոնտակտներ',
        subtitle: 'Կապվեք մեզ հետ՝ միասին ստեղծելու մեծ բան',
        telegram: 'Թելեգրամ',
        phone: 'Հեռախոս',
        email: 'Էլ. փոստ',
        note: 'Նախընտրելի է կապ հաստատել Թելեգրամով կամ էլ. փոստով'
      }
      ,
      hero: {
        subtitle: 'ՏՏ լուծումներ և զարգացում',
        cta: 'Դիտել ծառայությունները'
      }
      ,
      footer: {
        rights: 'Բոլոր իրավունքները պաշտպանված են։'
      }
    }
  }
}

// Initialize i18n
i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: localStorage.getItem('language') || 'en', // Default to English, check localStorage
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false // React already escapes values
    }
  })

export default i18n
