import { useState, useEffect, type JSX } from 'react'

// ─── Shared Type ──────────────────────────────────────────────────────────────
export type PropertyPreviewData = {
  id: number
  title: string
  city: string
  state: string
  type: string
  collection: string
  beds: number
  baths: number
  guests: number
  price: number
  priceUnit: 'night' | 'month'
  image: string
  note: string
  images: string[]
  amenities: string[]
  fullDescription: string
  curator: {
    name: string
    specialty: string
    yearsActive: number
  }
}

// ─── Amenity Icons (thin-line SVG) ────────────────────────────────────────────
function AmenityIcon({ name }: { name: string }) {
  const s = {
    fill: 'none' as const,
    stroke: 'currentColor',
    strokeWidth: '1.35',
    strokeLinecap: 'round' as const,
    strokeLinejoin: 'round' as const,
  }
  const icons: Record<string, JSX.Element> = {
    WiFi: (
      <svg width="16" height="16" viewBox="0 0 24 24" {...s}>
        <path d="M5 12.55a11 11 0 0 1 14.08 0" />
        <path d="M1.42 9a16 16 0 0 1 21.16 0" />
        <path d="M8.53 16.11a6 6 0 0 1 6.95 0" />
        <circle cx="12" cy="20" r="1" fill="currentColor" stroke="none" />
      </svg>
    ),
    Workspace: (
      <svg width="16" height="16" viewBox="0 0 24 24" {...s}>
        <rect x="2" y="3" width="20" height="14" rx="2" />
        <line x1="8" y1="21" x2="16" y2="21" />
        <line x1="12" y1="17" x2="12" y2="21" />
      </svg>
    ),
    Pool: (
      <svg width="16" height="16" viewBox="0 0 24 24" {...s}>
        <path d="M2 12c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2s2.5 2 5 2 2.5-2 5-2c1.3 0 1.9.5 2.5 1" />
        <path d="M2 17c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2s2.5 2 5 2 2.5-2 5-2c1.3 0 1.9.5 2.5 1" />
        <line x1="12" y1="2" x2="12" y2="8" />
        <line x1="9" y1="5" x2="15" y2="5" />
      </svg>
    ),
    Balcony: (
      <svg width="16" height="16" viewBox="0 0 24 24" {...s}>
        <line x1="3" y1="5" x2="21" y2="5" />
        <line x1="3" y1="20" x2="21" y2="20" />
        <line x1="6" y1="5" x2="6" y2="20" />
        <line x1="11" y1="5" x2="11" y2="20" />
        <line x1="16" y1="5" x2="16" y2="20" />
        <line x1="3" y1="2" x2="21" y2="2" />
      </svg>
    ),
    Parking: (
      <svg width="16" height="16" viewBox="0 0 24 24" {...s}>
        <rect x="3" y="3" width="18" height="18" rx="2" />
        <path d="M9 17V7h4a3 3 0 0 1 0 6H9" />
      </svg>
    ),
    'Pet Friendly': (
      <svg width="16" height="16" viewBox="0 0 24 24" {...s}>
        <circle cx="4.5" cy="9.5" r="1.5" />
        <circle cx="9" cy="5" r="1.5" />
        <circle cx="15" cy="5" r="1.5" />
        <circle cx="19.5" cy="9.5" r="1.5" />
        <path d="M12 13c-3.333 0-6 2-6 4.5s2.667 4.5 6 4.5 6-2 6-4.5-2.667-4.5-6-4.5z" />
      </svg>
    ),
  }
  return icons[name] ?? null
}

// ─── Image crossfade viewer ───────────────────────────────────────────────────
function ImageViewer({ images, activeIdx }: { images: string[]; activeIdx: number }) {
  return (
    <>
      {images.map((src, i) => (
        <img
          key={i}
          src={src}
          alt={`View ${i + 1}`}
          style={{
            position: 'absolute',
            inset: 0,
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            opacity: i === activeIdx ? 1 : 0,
            transition: 'opacity 0.55s ease',
          }}
        />
      ))}
    </>
  )
}

// ─── Thumbnail strip ──────────────────────────────────────────────────────────
function ThumbnailStrip({
  images,
  activeIdx,
  onSelect,
}: {
  images: string[]
  activeIdx: number
  onSelect: (i: number) => void
}) {
  return (
    <div
      className="no-scrollbar"
      style={{
        display: 'flex',
        gap: '3px',
        padding: '0.5rem',
        borderTop: '1px solid var(--color-sandstone-pale)',
        background: 'var(--color-alabaster)',
        overflowX: 'auto',
        flexShrink: 0,
      }}
    >
      {images.map((src, i) => (
        <button
          key={i}
          onClick={() => onSelect(i)}
          aria-label={`View image ${i + 1}`}
          style={{
            flexShrink: 0,
            width: '66px',
            height: '50px',
            overflow: 'hidden',
            padding: 0,
            background: 'none',
            cursor: 'pointer',
            border: `1.5px solid ${i === activeIdx ? 'var(--color-charcoal)' : 'transparent'}`,
            transition: 'border-color 0.2s ease',
          }}
        >
          <img
            src={src}
            alt=""
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              display: 'block',
              opacity: i === activeIdx ? 1 : 0.48,
              transition: 'opacity 0.25s ease',
            }}
          />
        </button>
      ))}
    </div>
  )
}

// ─── CTA Buttons ─────────────────────────────────────────────────────────────
function CTAButtons({ saved, onSave }: { saved: boolean; onSave: () => void }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
      {/* Primary */}
      <button
        style={{
          width: '100%',
          padding: '0.9375rem',
          background: 'var(--color-charcoal)',
          border: '1px solid var(--color-charcoal)',
          color: 'var(--color-warm-white)',
          fontFamily: 'var(--font-sans)',
          fontSize: '0.6875rem',
          letterSpacing: '0.18em',
          textTransform: 'uppercase',
          fontWeight: 500,
          cursor: 'pointer',
          transition: 'opacity 0.2s ease',
        }}
        onMouseEnter={(e) => (e.currentTarget.style.opacity = '0.85')}
        onMouseLeave={(e) => (e.currentTarget.style.opacity = '1')}
      >
        View Full Residence
      </button>

      {/* Secondary */}
      <button
        style={{
          width: '100%',
          padding: '0.9375rem',
          background: 'transparent',
          border: '1px solid var(--color-charcoal)',
          color: 'var(--color-charcoal)',
          fontFamily: 'var(--font-sans)',
          fontSize: '0.6875rem',
          letterSpacing: '0.18em',
          textTransform: 'uppercase',
          fontWeight: 500,
          cursor: 'pointer',
          transition: 'background 0.22s ease, color 0.22s ease',
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.background = 'var(--color-charcoal)'
          e.currentTarget.style.color = 'var(--color-warm-white)'
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.background = 'transparent'
          e.currentTarget.style.color = 'var(--color-charcoal)'
        }}
      >
        Reserve Inquiry
      </button>

      {/* Tertiary */}
      <button
        onClick={onSave}
        style={{
          width: '100%',
          padding: '0.75rem',
          background: 'transparent',
          border: '1px solid var(--color-sandstone-light)',
          color: saved ? 'var(--color-sage)' : 'var(--color-charcoal-muted)',
          fontFamily: 'var(--font-sans)',
          fontSize: '0.6875rem',
          letterSpacing: '0.18em',
          textTransform: 'uppercase',
          fontWeight: 500,
          cursor: 'pointer',
          transition: 'color 0.2s ease, border-color 0.2s ease',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '0.5rem',
        }}
      >
        <svg
          width="12"
          height="12"
          viewBox="0 0 24 24"
          fill={saved ? 'currentColor' : 'none'}
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
        </svg>
        {saved ? 'Saved to Collection' : 'Save Residence'}
      </button>
    </div>
  )
}

// ─── Info Panel Content ───────────────────────────────────────────────────────
function InfoContent({
  property,
  saved,
  onSave,
  showCTA,
}: {
  property: PropertyPreviewData
  saved: boolean
  onSave: () => void
  showCTA: boolean
}) {
  const divider = (
    <div
      style={{
        height: '1px',
        background: 'var(--color-sandstone-pale)',
        margin: '1.5rem 0',
      }}
    />
  )

  return (
    <div style={{ padding: '1.75rem 1.75rem 2.25rem' }}>
      {/* Location + type */}
      <p
        style={{
          fontSize: '0.625rem',
          letterSpacing: '0.2em',
          textTransform: 'uppercase',
          color: 'var(--color-charcoal-faint)',
          fontFamily: 'var(--font-sans)',
          marginBottom: '0.5rem',
        }}
      >
        {property.city}, {property.state}&ensp;·&ensp;{property.type}
      </p>

      {/* Title */}
      <h2
        className="font-serif font-light"
        style={{
          fontSize: 'clamp(1.55rem, 2.2vw, 2.4rem)',
          lineHeight: 1.05,
          color: 'var(--color-charcoal)',
          marginBottom: '1rem',
        }}
      >
        {property.title}
      </h2>

      {/* Price */}
      <div
        style={{
          display: 'flex',
          alignItems: 'baseline',
          gap: '0.35rem',
          marginBottom: '1.5rem',
        }}
      >
        <span
          className="font-serif font-light"
          style={{ fontSize: '1.9rem', color: 'var(--color-charcoal)', lineHeight: 1 }}
        >
          ${property.price.toLocaleString()}
        </span>
        <span
          style={{
            fontSize: '0.75rem',
            color: 'var(--color-charcoal-faint)',
            fontFamily: 'var(--font-sans)',
            fontWeight: 300,
          }}
        >
          / {property.priceUnit}
        </span>
      </div>

      {divider}

      {/* Editorial description */}
      <p
        style={{
          fontSize: '0.875rem',
          lineHeight: 1.92,
          color: 'var(--color-charcoal-muted)',
          fontFamily: 'var(--font-sans)',
          fontWeight: 300,
          marginBottom: '1.5rem',
        }}
      >
        {property.fullDescription}
      </p>

      {/* Stats grid */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: '1px',
          background: 'var(--color-sandstone-pale)',
          border: '1px solid var(--color-sandstone-pale)',
          marginBottom: '1.75rem',
        }}
      >
        {[
          { label: 'Guests', value: String(property.guests) },
          { label: 'Bedrooms', value: String(property.beds) },
          { label: 'Bathrooms', value: String(property.baths) },
        ].map(({ label, value }) => (
          <div
            key={label}
            style={{ background: 'var(--color-warm-white)', padding: '0.875rem 0.875rem' }}
          >
            <p
              style={{
                fontSize: '0.5625rem',
                letterSpacing: '0.18em',
                textTransform: 'uppercase',
                color: 'var(--color-charcoal-faint)',
                fontFamily: 'var(--font-sans)',
                marginBottom: '0.35rem',
              }}
            >
              {label}
            </p>
            <p
              className="font-serif font-light"
              style={{ fontSize: '1.5rem', color: 'var(--color-charcoal)', lineHeight: 1 }}
            >
              {value}
            </p>
          </div>
        ))}
      </div>

      {/* Amenities */}
      <div style={{ marginBottom: '1.5rem' }}>
        <p
          style={{
            fontSize: '0.5625rem',
            letterSpacing: '0.2em',
            textTransform: 'uppercase',
            color: 'var(--color-charcoal-faint)',
            fontFamily: 'var(--font-sans)',
            marginBottom: '0.75rem',
          }}
        >
          Included
        </p>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '0.35rem',
          }}
        >
          {property.amenities.map((a) => (
            <div
              key={a}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
                padding: '0.5625rem 0.625rem',
                border: '1px solid var(--color-sandstone-pale)',
                background: 'var(--color-cream)',
                color: 'var(--color-charcoal-muted)',
              }}
            >
              <AmenityIcon name={a} />
              <span
                style={{
                  fontSize: '0.6875rem',
                  letterSpacing: '0.04em',
                  fontFamily: 'var(--font-sans)',
                  fontWeight: 400,
                }}
              >
                {a}
              </span>
            </div>
          ))}
        </div>
      </div>

      {divider}

      {/* Curator */}
      <div style={{ marginBottom: '1.5rem' }}>
        <p
          style={{
            fontSize: '0.5625rem',
            letterSpacing: '0.2em',
            textTransform: 'uppercase',
            color: 'var(--color-charcoal-faint)',
            fontFamily: 'var(--font-sans)',
            marginBottom: '0.75rem',
          }}
        >
          Curated by
        </p>
        <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.875rem' }}>
          {/* Monogram avatar */}
          <div
            style={{
              width: '42px',
              height: '42px',
              flexShrink: 0,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              border: '1px solid var(--color-sandstone-light)',
              background: 'var(--color-alabaster)',
            }}
          >
            <span
              className="font-serif font-light"
              style={{ fontSize: '1.15rem', color: 'var(--color-charcoal-muted)', lineHeight: 1 }}
            >
              {property.curator.name.charAt(0)}
            </span>
          </div>
          <div>
            <p
              style={{
                fontSize: '0.8125rem',
                fontFamily: 'var(--font-sans)',
                color: 'var(--color-charcoal)',
                fontWeight: 500,
                marginBottom: '0.2rem',
              }}
            >
              {property.curator.name}
            </p>
            <p
              style={{
                fontSize: '0.75rem',
                fontFamily: 'var(--font-sans)',
                color: 'var(--color-charcoal-muted)',
                fontWeight: 300,
                lineHeight: 1.65,
                marginBottom: '0.35rem',
              }}
            >
              {property.curator.specialty}
            </p>
            <p
              style={{
                fontSize: '0.5625rem',
                letterSpacing: '0.16em',
                textTransform: 'uppercase',
                color: 'var(--color-charcoal-faint)',
                fontFamily: 'var(--font-sans)',
              }}
            >
              {property.curator.yearsActive} yrs curating
            </p>
          </div>
        </div>
      </div>

      {showCTA && (
        <>
          {divider}
          <CTAButtons saved={saved} onSave={onSave} />
        </>
      )}
    </div>
  )
}

// ─── Main Preview Component ───────────────────────────────────────────────────
export default function PropertyPreview({
  property,
  onClose,
}: {
  property: PropertyPreviewData
  onClose: () => void
}) {
  const [visible, setVisible] = useState(false)
  const [activeImg, setActiveImg] = useState(0)
  const [saved, setSaved] = useState(false)
  const allImages = [property.image, ...property.images]

  // Fade-in animation on mount + body scroll lock
  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 16)
    const prev = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      clearTimeout(t)
      document.body.style.overflow = prev
    }
  }, [])

  // Escape key to close
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [onClose])

  // Image counter pill
  const counter = (
    <div
      style={{
        position: 'absolute',
        bottom: '0.875rem',
        right: '0.875rem',
        background: 'rgba(253,252,250,0.92)',
        border: '1px solid var(--color-sandstone-pale)',
        padding: '0.2rem 0.55rem',
        fontSize: '0.5625rem',
        letterSpacing: '0.14em',
        textTransform: 'uppercase',
        color: 'var(--color-charcoal-muted)',
        fontFamily: 'var(--font-sans)',
      }}
    >
      {activeImg + 1} / {allImages.length}
    </div>
  )

  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 100,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      {/* Dimmed backdrop */}
      <div
        onClick={onClose}
        style={{
          position: 'absolute',
          inset: 0,
          background: 'rgba(18,18,16,0.58)',
          opacity: visible ? 1 : 0,
          transition: 'opacity 0.35s ease',
          cursor: 'pointer',
        }}
      />

      {/* Panel — full screen on mobile, constrained modal on desktop */}
      <div
        style={{
          position: 'relative',
          width: '100%',
          height: '100%',
          background: 'var(--color-warm-white)',
          border: '1px solid var(--color-sandstone-light)',
          display: 'flex',
          flexDirection: 'column',
          overflow: 'hidden',
          opacity: visible ? 1 : 0,
          transform: visible ? 'scale(1) translateY(0)' : 'scale(0.975) translateY(20px)',
          transition: 'opacity 0.42s ease, transform 0.46s cubic-bezier(0.22, 1, 0.36, 1)',
        }}
        className="lg:w-[92vw] lg:max-w-[1300px] lg:max-h-[88vh]"
      >
        {/* ── TOP BAR ────────────────────────────────── */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: '0.75rem 1.25rem',
            borderBottom: '1px solid var(--color-sandstone-pale)',
            flexShrink: 0,
            background: 'var(--color-warm-white)',
          }}
        >
          {/* Left: breadcrumb */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.625rem' }}>
            <p className="section-label" style={{ color: 'var(--color-charcoal-faint)' }}>
              Residence Preview
            </p>
            <span
              style={{
                display: 'inline-block',
                width: '3px',
                height: '3px',
                borderRadius: '50%',
                background: 'var(--color-sandstone)',
              }}
            />
            <p
              style={{
                fontSize: '0.5625rem',
                letterSpacing: '0.14em',
                textTransform: 'uppercase',
                color: 'var(--color-charcoal-faint)',
                fontFamily: 'var(--font-sans)',
              }}
            >
              {property.collection}
            </p>
          </div>

          {/* Right: Save + Close */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.875rem' }}>
            <button
              onClick={() => setSaved(!saved)}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.35rem',
                background: 'transparent',
                border: 'none',
                cursor: 'pointer',
                fontSize: '0.5625rem',
                letterSpacing: '0.14em',
                textTransform: 'uppercase',
                color: saved ? 'var(--color-sage)' : 'var(--color-charcoal-faint)',
                fontFamily: 'var(--font-sans)',
                fontWeight: 500,
                transition: 'color 0.2s ease',
                padding: '0.25rem 0',
              }}
            >
              <svg
                width="12"
                height="12"
                viewBox="0 0 24 24"
                fill={saved ? 'currentColor' : 'none'}
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
              </svg>
              {saved ? 'Saved' : 'Save'}
            </button>

            <div
              style={{ width: '1px', height: '14px', background: 'var(--color-sandstone-light)' }}
            />

            <button
              onClick={onClose}
              aria-label="Close preview"
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.375rem',
                background: 'transparent',
                border: '1px solid var(--color-sandstone-light)',
                cursor: 'pointer',
                padding: '0.35rem 0.625rem',
                fontSize: '0.5625rem',
                letterSpacing: '0.14em',
                textTransform: 'uppercase',
                color: 'var(--color-charcoal-muted)',
                fontFamily: 'var(--font-sans)',
                fontWeight: 500,
                transition: 'border-color 0.2s ease, color 0.2s ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = 'var(--color-charcoal)'
                e.currentTarget.style.color = 'var(--color-charcoal)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = 'var(--color-sandstone-light)'
                e.currentTarget.style.color = 'var(--color-charcoal-muted)'
              }}
            >
              <svg
                width="9"
                height="9"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
              >
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
              Esc
            </button>
          </div>
        </div>

        {/* ── BODY ──────────────────────────────────── */}
        <div style={{ flex: 1, overflow: 'hidden', minHeight: 0, display: 'flex' }}>
          {/* ── MOBILE: single scrollable column ────── */}
          <div
            className="flex flex-col lg:hidden"
            style={{ flex: 1, overflowY: 'auto' }}
          >
            <div
              style={{
                position: 'relative',
                height: '52vw',
                minHeight: '220px',
                maxHeight: '360px',
                overflow: 'hidden',
                flexShrink: 0,
              }}
            >
              <ImageViewer images={allImages} activeIdx={activeImg} />
              {counter}
            </div>
            <ThumbnailStrip images={allImages} activeIdx={activeImg} onSelect={setActiveImg} />
            {/* Content without CTAs (handled by sticky bottom bar) */}
            <div style={{ paddingBottom: '1rem' }}>
              <InfoContent
                property={property}
                saved={saved}
                onSave={() => setSaved(!saved)}
                showCTA={false}
              />
            </div>
          </div>

          {/* ── DESKTOP: two-column layout ─────────── */}
          <div className="hidden lg:flex" style={{ flex: 1, minHeight: 0 }}>
            {/* Left: sticky image panel */}
            <div
              style={{
                width: '54%',
                flexShrink: 0,
                display: 'flex',
                flexDirection: 'column',
                borderRight: '1px solid var(--color-sandstone-pale)',
              }}
            >
              <div
                style={{
                  flex: 1,
                  position: 'relative',
                  overflow: 'hidden',
                  minHeight: 0,
                }}
              >
                <ImageViewer images={allImages} activeIdx={activeImg} />
                {counter}
              </div>
              <ThumbnailStrip
                images={allImages}
                activeIdx={activeImg}
                onSelect={setActiveImg}
              />
            </div>

            {/* Right: scrollable info panel */}
            <div
              className="no-scrollbar"
              style={{
                flex: 1,
                overflowY: 'auto',
                background: 'var(--color-warm-white)',
              }}
            >
              <InfoContent
                property={property}
                saved={saved}
                onSave={() => setSaved(!saved)}
                showCTA={true}
              />
            </div>
          </div>
        </div>

        {/* ── MOBILE BOTTOM CTA BAR ─────────────────── */}
        <div
          className="flex lg:hidden"
          style={{
            gap: '0.5rem',
            padding: '0.875rem 1.25rem',
            background: 'var(--color-warm-white)',
            borderTop: '1px solid var(--color-sandstone-pale)',
            flexShrink: 0,
          }}
        >
          <button
            style={{
              flex: 1,
              padding: '0.8125rem',
              background: 'var(--color-charcoal)',
              border: 'none',
              color: 'var(--color-warm-white)',
              fontFamily: 'var(--font-sans)',
              fontSize: '0.625rem',
              letterSpacing: '0.16em',
              textTransform: 'uppercase',
              fontWeight: 500,
              cursor: 'pointer',
            }}
          >
            View Residence
          </button>
          <button
            style={{
              padding: '0.8125rem 1.125rem',
              background: 'transparent',
              border: '1px solid var(--color-charcoal)',
              color: 'var(--color-charcoal)',
              fontFamily: 'var(--font-sans)',
              fontSize: '0.625rem',
              letterSpacing: '0.16em',
              textTransform: 'uppercase',
              fontWeight: 500,
              cursor: 'pointer',
            }}
          >
            Inquire
          </button>
        </div>
      </div>
    </div>
  )
}
