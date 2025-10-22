export default function Header() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <nav className="nav-bar">
      <ul>
        <li>
          <a href="#" onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }) }}>
            Home
          </a>
        </li>
        <li>
          <a href="#description" onClick={(e) => { e.preventDefault(); scrollToSection('description') }}>
            About
          </a>
        </li>
        <li>
          <a href="#mission" onClick={(e) => { e.preventDefault(); scrollToSection('mission') }}>
            Mission
          </a>
        </li>
        <li>
          <a href="#vision" onClick={(e) => { e.preventDefault(); scrollToSection('vision') }}>
            Vision
          </a>
        </li>
      </ul>
    </nav>
  )
}
