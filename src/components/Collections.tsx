const collections = [
  {
    id: 1,
    title: 'Urban Sanctuaries',
    subtitle: 'Refined city living',
    description: 'Light-filled penthouses and curated apartments in New York, Chicago, and Washington D.C. Designed for those who move through the world with intention.',
    image: 'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=1200&q=85&auto=format&fit=crop',
    count: '48 properties',
    tag: 'City',
    reverse: false,
  },
  {
    id: 2,
    title: 'Modern Retreats',
    subtitle: 'Architecture as escape',
    description: 'Contemporary homes in Malibu, Sedona, and the Hudson Valley. Where minimalist architecture meets the natural landscape in quiet dialogue.',
    image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=1200&q=85&auto=format&fit=crop',
    count: '31 properties',
    tag: 'Retreat',
    reverse: true,
  },
  {
    id: 3,
    title: 'Coastal Living',
    subtitle: "Water's edge residences",
    description: 'Ocean-facing homes along the Florida Keys, the Hamptons, and the California coast. Salt air and seclusion at every turn.',
    image: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=1200&q=85&auto=format&fit=crop',
    count: '62 properties',
    tag: 'Coastal',
    reverse: false,
  },
  {
    id: 4,
    title: 'Architectural Escapes',
    subtitle: 'Homes of singular vision',
    description: 'Award-winning residences by celebrated architects. Each stay an immersion in space, form, and the quiet luxury of good design.',
    image: 'https://images.unsplash.com/photo-1583608205776-bfd35f0d9f83?w=1200&q=85&auto=format&fit=crop',
    count: '19 properties',
    tag: 'Signature',
    reverse: true,
  },
]

export default function Collections() {
  return (
    <section
      style={{
        background: 'var(--color-alabaster)',
        marginTop: '14px',
        paddingTop: 'clamp(2.5rem, 4vw, 4rem)',
        paddingBottom: 'clamp(6rem, 11vw, 11rem)',
      }}
    >
      <div className="container-custom px-6 md:px-10 lg:px-16">
        {/* Section header */}
        <div className="mb-16 md:mb-24 max-w-xl">
         <p
  className="section-label mb-4 inline-flex items-center px-3 py-1.5"
  style={{
    border: "1px solid rgba(28,28,28,0.12)",
    color: "var(--color-charcoal-faint)",
    letterSpacing: "0.16em",
    background: "rgba(255,255,255,0.55)",
  }}
>
  Editorial Collections
</p>
          <h2
            className="font-serif text-4xl md:text-5xl font-light leading-[1.2]"
            style={{ color: 'var(--color-charcoal)' }}
          >
            Stays chosen<br />
            <em>for the discerning.</em>
          </h2>
        </div>

        {/* Collection items */}
        <div className="space-y-24 md:space-y-36">
          {collections.map(col => (
            <div
              key={col.id}
              className={`collection-card flex flex-col ${col.reverse ? 'md:flex-row-reverse' : 'md:flex-row'} gap-0 md:gap-0 items-stretch`}
            >
              {/* Image */}
              <div className="w-full md:w-[58%] overflow-hidden" style={{ aspectRatio: '4/3' }}>
                <img
                  src={col.image}
                  alt={col.title}
                  className="collection-image w-full h-full object-cover"
                  loading="lazy"
                />
              </div>

              {/* Text */}
              <div
                className="w-full md:w-[42%] flex flex-col justify-center"
                style={{
                  background: 'var(--color-cream)',
                  padding: 'clamp(2.5rem, 5vw, 4rem) clamp(2rem, 4vw, 4rem)',
                }}
              >
                <div className="flex flex-col gap-8">
                  <div className="flex items-start justify-between gap-4 border-b pb-5" style={{ borderColor: 'var(--color-sandstone-pale)' }}>
                    <div className="flex flex-col gap-3">
                      <span className="tag-pill">{col.tag}</span>
                      <p
                        className="font-sans text-[11px] tracking-[0.14em] uppercase"
                        style={{ color: 'var(--color-sage)' }}
                      >
                        {col.subtitle}
                      </p>
                    </div>
                    <span
                      className="text-[11px] font-light tracking-[0.08em] uppercase text-right"
                      style={{ color: 'var(--color-charcoal-faint)' }}
                    >
                      {col.count}
                    </span>
                  </div>

                  <div className="flex flex-col gap-5">
                    <h3
                      className="font-serif text-3xl md:text-4xl font-light leading-[1.15]"
                      style={{ color: 'var(--color-charcoal)' }}
                    >
                      {col.title}
                    </h3>
                    <p
                      className="text-sm font-light leading-relaxed"
                      style={{ color: 'var(--color-charcoal-muted)', maxWidth: '34ch' }}
                    >
                      {col.description}
                    </p>
                  </div>

                  <div>
                    <a
                      href="#"
                      className="inline-flex items-center gap-3 text-xs tracking-[0.12em] uppercase font-medium no-underline group"
                      style={{ color: 'var(--color-charcoal)' }}
                    >
                      <span style={{ borderBottom: '1px solid var(--color-charcoal)', paddingBottom: '1px' }}>
                        Explore Collection
                      </span>
                      <svg width="16" height="10" viewBox="0 0 16 10" fill="none" className="transition-transform duration-300 group-hover:translate-x-1">
                        <path d="M1 5H15M11 1L15 5L11 9" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
