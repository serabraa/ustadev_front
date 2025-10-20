import Header from './components/Header.jsx'
import Hero from './components/Hero.jsx'
import Services from './components/Services.jsx'
import Projects from './components/Projects.jsx'
import About from './components/About.jsx'
import Contacts from './components/Contacts.jsx'
import Footer from './components/Footer.jsx'

function App() {
  return (
    <>
      <Header brand="Ustadev" logoSrc={null} />
      <Hero />
      <main>
        
            <Services />
            <Projects />
            <About />
            <Contacts />
        <Footer />
      </main>
    </>
  )
}

export default App
