import Hero from './components/Hero'
import Description from './components/Description'
import Mission from './components/Mission'
import Vision from './components/Vision'
import Footer from './components/Footer'

function App() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <div className="app-container">
      {/* Left Sidebar Navigation */}
      <aside className="sidebar">
        <div className="sidebar-logo">
          <h2>L1ne<br />Company</h2>
        </div>
        <nav>
          <a
            href="#"
            className="nav-button"
            onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }) }}
          >
            Home Page
          </a>
          <a
            href="#description"
            className="nav-button"
            onClick={(e) => { e.preventDefault(); scrollToSection('description') }}
          >
            About L1ne
          </a>
          <a
            href="#mission"
            className="nav-button"
            onClick={(e) => { e.preventDefault(); scrollToSection('mission') }}
          >
            Mission
          </a>
          <a
            href="#vision"
            className="nav-button"
            onClick={(e) => { e.preventDefault(); scrollToSection('vision') }}
          >
            Vision
          </a>
          <a
            href="#technology"
            className="nav-button"
            onClick={(e) => { e.preventDefault(); scrollToSection('hero') }}
          >
            Technology
          </a>
          <a
            href="#contact"
            className="nav-button"
            onClick={(e) => { e.preventDefault(); window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' }) }}
          >
            Contact
          </a>
        </nav>
      </aside>

      {/* Main Content Area */}
      <div className="main-content">
        <header className="top-header">
          <h1>L1ne Company Home Page</h1>
          <div className="window-controls">
            <span className="window-button">_</span>
            <span className="window-button">□</span>
            <span className="window-button">×</span>
          </div>
        </header>

        <div className="container">
          <Hero />
          <Description />
          <Mission />
          <Vision />
        </div>

        {/* Bottom Navigation */}
        <div className="bottom-nav">
          <a href="#" className="bottom-nav-button" onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }) }}>Home</a>
          <a href="#description" className="bottom-nav-button" onClick={(e) => { e.preventDefault(); scrollToSection('description') }}>About</a>
          <a href="#mission" className="bottom-nav-button" onClick={(e) => { e.preventDefault(); scrollToSection('mission') }}>Mission</a>
          <a href="#vision" className="bottom-nav-button" onClick={(e) => { e.preventDefault(); scrollToSection('vision') }}>Vision</a>
        </div>

        <Footer />
      </div>
    </div>
  )
}

export default App
