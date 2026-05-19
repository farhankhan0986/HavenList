import { useState, useEffect } from 'react'

const navLinks = ['Stays', 'Residences', 'Collections', 'About']

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? 'navbar-scrolled' : 'bg-transparent'
      }`}
    >
      <div className="container-custom px-6 md:px-10 lg:px-16">
        <div className="flex items-center justify-between h-[72px]">
          {/* Logo */}
          <a href="/" className="flex items-center gap-2 no-underline">
            <span
              className="font-serif text-2xl tracking-wide"
              style={{ color: scrolled ? 'var(--color-charcoal)' : '#FAF8F5' }}
            >
              Havenlist
            </span>
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map(link => (
              <a
                key={link}
                href="#"
                className="nav-link text-sm font-light tracking-wide transition-colors duration-300 no-underline"
                style={{ color: scrolled ? 'var(--color-charcoal-light)' : 'rgba(250,248,245,0.88)' }}
              >
                {link}
              </a>
            ))}
          </div>

          {/* CTA */}
          <div className="hidden md:flex items-center gap-6">
            <a
              href="#"
              className="text-sm font-light tracking-wide transition-colors duration-300 no-underline"
              style={{ color: scrolled ? 'var(--color-charcoal-muted)' : 'rgba(250,248,245,0.78)' }}
            >
              Sign In
            </a>
            <a
              href="#"
              className="text-xs tracking-[0.14em] uppercase font-medium no-underline transition-all duration-300"
              style={{
                color: scrolled ? 'var(--color-charcoal)' : 'rgba(250,248,245,0.92)',
                borderBottom: scrolled ? '1px solid var(--color-charcoal)' : '1px solid rgba(250,248,245,0.6)',
                paddingBottom: '2px',
              }}
            >
              List Your Property
            </a>
          </div>

          {/* Mobile hamburger */}
          <button
            className="md:hidden flex flex-col gap-[5px] p-2"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            {[0, 1, 2].map(i => (
              <span
                key={i}
                className="block w-6 h-[1px] transition-all duration-300"
                style={{ backgroundColor: scrolled ? 'var(--color-charcoal)' : '#FAF8F5' }}
              />
            ))}
          </button>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div
            className="md:hidden py-6 border-t"
            style={{ borderColor: 'var(--color-sandstone-light)', background: 'var(--color-alabaster)' }}
          >
            {navLinks.map(link => (
              <a
                key={link}
                href="#"
                className="block py-3 text-sm font-light tracking-wide no-underline"
                style={{ color: 'var(--color-charcoal-light)' }}
              >
                {link}
              </a>
            ))}
            <div className="mt-4 pt-4 border-t" style={{ borderColor: 'var(--color-sandstone-light)' }}>
              <a
                href="#"
                className="block py-2 text-xs tracking-[0.14em] uppercase no-underline"
                style={{ color: 'var(--color-sage)' }}
              >
                List Your Property
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
