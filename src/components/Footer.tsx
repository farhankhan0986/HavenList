import { useState } from 'react'

const footerColumns = [
  {
    heading: 'Stays',
    links: ['Browse All', 'Monthly Rentals', 'Long-Term', 'Corporate Housing', 'Vacation Rentals'],
  },
  {
    heading: 'Collections',
    links: ['Urban Sanctuaries', 'Modern Retreats', 'Coastal Living', 'Architectural Escapes'],
  },
  {
    heading: 'Company',
    links: ['About Havenlist', 'How It Works', 'Careers', 'Press & Media', 'Sustainability'],
  },
  {
    heading: 'Hosts',
    links: ['List Your Property', 'Host Resources', 'Partner Program', 'Property Management'],
  },
]

function FooterLink({ children }: { children: string }) {
  return (
    <li>
      <a
        href="#"
        style={{
          display: 'inline-block',
          fontFamily: 'var(--font-sans)',
          fontSize: '13px',
          fontWeight: 300,
          color: 'rgba(250,248,245,0.4)',
          textDecoration: 'none',
          lineHeight: 1,
          transition: 'color 0.2s ease',
        }}
        onMouseEnter={e => { (e.currentTarget).style.color = 'rgba(250,248,245,0.82)' }}
        onMouseLeave={e => { (e.currentTarget).style.color = 'rgba(250,248,245,0.4)' }}
      >
        {children}
      </a>
    </li>
  )
}

function CtaButton({ children, variant }: { children: string; variant: 'sage' | 'ghost' }) {
  const [hovered, setHovered] = useState(false)

  const base: React.CSSProperties = {
    fontFamily: 'var(--font-sans)',
    fontSize: '10px',
    letterSpacing: '0.16em',
    textTransform: 'uppercase',
    fontWeight: 500,
    padding: '12px 24px',
    cursor: 'pointer',
    transition: 'background 0.22s ease, color 0.22s ease, border-color 0.22s ease',
    whiteSpace: 'nowrap',
  }

  const sageStyle: React.CSSProperties = {
    ...base,
    background: hovered ? 'var(--color-sage-light)' : 'transparent',
    color: hovered ? 'var(--color-warm-white)' : 'var(--color-sage-muted)',
    border: '1px solid var(--color-sage)',
  }

  const ghostStyle: React.CSSProperties = {
    ...base,
    background: 'transparent',
    color: hovered ? 'rgba(250,248,245,0.85)' : 'rgba(250,248,245,0.45)',
    border: `1px solid ${hovered ? 'rgba(196,184,168,0.5)' : 'rgba(196,184,168,0.2)'}`,
  }

  return (
    <button
      style={variant === 'sage' ? sageStyle : ghostStyle}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {children}
    </button>
  )
}

export default function Footer() {
  return (
    <footer style={{ background: 'var(--color-charcoal)' }}>

      {/* ── Host CTA band ── */}
      <div style={{ borderBottom: '1px solid rgba(196,184,168,0.12)' }}>
        <div
          className="container-custom px-6 md:px-10 lg:px-16"
          style={{ paddingTop: '72px', paddingBottom: '72px' }}
        >
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8">
            <div style={{ maxWidth: '440px' }}>
              <h3
                className="font-serif font-light"
                style={{
                  color: 'var(--color-warm-white)',
                  fontSize: 'clamp(1.6rem, 3vw, 2.25rem)',
                  lineHeight: 1.25,
                  marginBottom: '10px',
                }}
              >
                A home for your home.
              </h3>
              <p style={{
                fontFamily: 'var(--font-sans)',
                fontSize: '13px',
                fontWeight: 300,
                color: 'rgba(250,248,245,0.4)',
                lineHeight: 1.65,
              }}>
                Join the community of hosts sharing exceptional properties across the US.
              </p>
            </div>

            <div style={{ display: 'flex', gap: '12px', flexShrink: 0 }}>
              <CtaButton variant="sage">List Your Property</CtaButton>
              <CtaButton variant="ghost">Learn More</CtaButton>
            </div>
          </div>
        </div>
      </div>

      {/* ── Main link columns ── */}
      <div style={{ borderBottom: '1px solid rgba(196,184,168,0.12)' }}>
        <div
          className="container-custom px-6 md:px-10 lg:px-16"
          style={{ paddingTop: '64px', paddingBottom: '64px' }}
        >
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))',
              gap: '40px 32px',
            }}
          >
            {footerColumns.map(col => (
              <div key={col.heading}>
                <p
                  style={{
                    fontFamily: 'var(--font-sans)',
                    fontSize: '10px',
                    letterSpacing: '0.17em',
                    textTransform: 'uppercase',
                    fontWeight: 500,
                    color: 'var(--color-sandstone)',
                    marginBottom: '20px',
                  }}
                >
                  {col.heading}
                </p>
                <ul style={{
                  listStyle: 'none',
                  padding: 0,
                  margin: 0,
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '13px',
                }}>
                  {col.links.map(link => (
                    <FooterLink key={link}>{link}</FooterLink>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── Bottom bar ── */}
      <div>
        <div
          className="container-custom px-6 md:px-10 lg:px-16"
          style={{ paddingTop: '28px', paddingBottom: '28px' }}
        >
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">

            {/* Brand */}
            <span
              className="font-serif"
              style={{ fontSize: '18px', color: 'rgba(250,248,245,0.32)', letterSpacing: '0.04em' }}
            >
              Havenlist
            </span>

            {/* Copyright */}
            <p style={{
              fontFamily: 'var(--font-sans)',
              fontSize: '11px',
              fontWeight: 300,
              color: 'rgba(250,248,245,0.2)',
              textAlign: 'center',
            }}>
              © {new Date().getFullYear()} Havenlist, Inc. All rights reserved.
            </p>

            {/* Legal links */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '24px' }}>
              {['Privacy', 'Terms', 'Sitemap'].map(item => (
                <a
                  key={item}
                  href="#"
                  style={{
                    fontFamily: 'var(--font-sans)',
                    fontSize: '11px',
                    fontWeight: 300,
                    color: 'rgba(250,248,245,0.26)',
                    textDecoration: 'none',
                    transition: 'color 0.2s ease',
                  }}
                  onMouseEnter={e => { (e.currentTarget).style.color = 'rgba(250,248,245,0.62)' }}
                  onMouseLeave={e => { (e.currentTarget).style.color = 'rgba(250,248,245,0.26)' }}
                >
                  {item}
                </a>
              ))}
            </div>

          </div>
        </div>
      </div>

    </footer>
  )
}
