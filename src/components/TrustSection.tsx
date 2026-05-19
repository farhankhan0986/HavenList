const pillars = [
  {
    number: '01',
    title: 'Curated by Hand',
    description: 'Every property on Havenlist is reviewed by our editorial team. We visit, photograph, and vet each home — so you only encounter the exceptional.',
  },
  {
    number: '02',
    title: 'Verified Homes',
    description: 'Our verification process covers safety standards, accurate listings, and host reliability. You book with complete confidence.',
  },
  {
    number: '03',
    title: 'Premium Experience',
    description: 'From first inquiry to checkout, your stay is supported by a dedicated concierge. Local expertise. Seamless logistics. White-glove care.',
  },
  {
    number: '04',
    title: 'Human-Centered Stays',
    description: 'We believe hospitality is personal. Every host on our platform shares our belief that a home well-shared transforms a trip into a memory.',
  },
]

const stats = [
  { value: '4,800+', label: 'Verified properties' },
  { value: '38', label: 'US cities' },
  { value: '99.2%', label: 'Guest satisfaction' },
  { value: '8 yrs', label: 'In hospitality' },
]

export default function TrustSection() {
  return (
    <section
      className="border-y"
      style={{
        background: 'var(--color-cream)',
        borderColor: 'var(--color-sandstone-pale)',
        marginTop: '0px',
        paddingTop: 'clamp(6rem, 11vw, 11rem)',
        paddingBottom: 'clamp(6rem, 11vw, 11rem)',
      }}
    >
      <div className="container-custom px-6 md:px-10 lg:px-16">
        {/* Top: heading + stats */}
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 mb-24 md:mb-32">
          {/* Heading */}
          <div className="lg:w-[45%]">
            <p className="section-label mb-5" style={{ color: 'var(--color-sage)' }}>
              The Havenlist Standard
            </p>
            <h2
              className="font-serif text-4xl md:text-5xl lg:text-6xl font-light leading-[1.15]"
              style={{ color: 'var(--color-charcoal)' }}
            >
              A higher bar
              <br />
              for every stay.
            </h2>
            <p
              className="mt-6 text-sm font-light leading-relaxed max-w-[38ch]"
              style={{ color: 'var(--color-charcoal-muted)' }}
            >
              We don't list thousands of generic apartments. We curate the homes that earn their place — through beauty, character, and the quality of the people behind them.
            </p>
          </div>

          {/* Stats */}
          <div className="lg:w-[55%] grid grid-cols-2 gap-x-12 gap-y-10 lg:pl-8 self-end">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="pb-8 border-b"
                style={{ borderColor: 'var(--color-sandstone-pale)' }}
              >
                <p
                  className="font-serif text-4xl md:text-5xl font-light mb-2"
                  style={{ color: 'var(--color-sage)' }}
                >
                  {stat.value}
                </p>
                <p
                  className="text-xs tracking-[0.1em] uppercase font-light"
                  style={{ color: 'var(--color-charcoal-muted)' }}
                >
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Divider */}
        <div
          className="h-px mb-24 md:mb-32"
          style={{ background: 'var(--color-sandstone-pale)' }}
        />

        {/* Pillars */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-10 gap-y-12">
          {pillars.map((p) => (
            <div key={p.number}>
              <p
                className="font-serif text-sm mb-6 font-light"
                style={{ color: 'var(--color-sandstone)' }}
              >
                {p.number}
              </p>
              <h3
                className="font-serif text-xl font-light mb-4 leading-snug"
                style={{ color: 'var(--color-charcoal)' }}
              >
                {p.title}
              </h3>
              <p
                className="text-sm font-light leading-relaxed"
                style={{ color: 'var(--color-charcoal-muted)' }}
              >
                {p.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
