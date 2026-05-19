import { useState } from 'react'
import PropertyPreview from './PropertyPreview'
import type { PropertyPreviewData } from './PropertyPreview'

type DiscoveryProperty = PropertyPreviewData & {
  gridClass: string
}

type EditorialCollection = {
  title: string
  description: string
  locations: string
}

const properties: DiscoveryProperty[] = [
  {
    id: 1,
    title: 'Tribeca Loft Residence',
    city: 'New York',
    state: 'NY',
    type: 'Loft',
    collection: 'Modern City Sanctuaries',
    beds: 2,
    baths: 2,
    guests: 4,
    price: 485,
    priceUnit: 'night',
    image: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=1200&q=85&auto=format&fit=crop',
    note: 'Light-filled interiors with gallery-scale living spaces.',
    gridClass: 'lg:col-span-4',
    images: [
      'https://images.unsplash.com/photo-1484154218962-a197022b5858?w=1200&q=85&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1502005229762-cf1b2da7c5d6?w=1200&q=85&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=1200&q=85&auto=format&fit=crop',
    ],
    amenities: ['WiFi', 'Workspace', 'Parking', 'Pet Friendly'],
    fullDescription:
      'A photographer\'s loft converted with gallery-grade precision. Twelve-foot ceilings, poured concrete floors, and floor-to-ceiling windows that flood morning light across an open plan designed for quiet contemplation. The building retains its cast-iron bones; the interior is softened by warm oak joinery and a muted, restrained palette.',
    curator: {
      name: 'Michael Chen',
      specialty: 'Specializing in architecturally significant residences across urban American markets.',
      yearsActive: 8,
    },
  },
  {
    id: 2,
    title: 'Malibu Cliffside Villa',
    city: 'Los Angeles',
    state: 'CA',
    type: 'Villa',
    collection: 'Quiet Coastal Residences',
    beds: 4,
    baths: 4.5,
    guests: 8,
    price: 1240,
    priceUnit: 'night',
    image: 'https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=1200&q=85&auto=format&fit=crop',
    note: 'Pacific-facing terraces and long, contemplative mornings.',
    gridClass: 'lg:col-span-4',
    images: [
      'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=1200&q=85&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1615529182904-14819c35db37?w=1200&q=85&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1200&q=85&auto=format&fit=crop',
    ],
    amenities: ['WiFi', 'Pool', 'Balcony', 'Parking'],
    fullDescription:
      'Perched above the Pacific on a private promontory, this villa was conceived by an LA-based practice known for residences that dissolve the boundary between interior and landscape. Cantilevered terraces step down toward the water. The interior is calm and precise — limestone, white oak, and a palette drawn entirely from the coastal horizon.',
    curator: {
      name: 'Sarah Laurent',
      specialty: 'Coastal and hillside properties along the California coastline.',
      yearsActive: 11,
    },
  },
  {
    id: 3,
    title: 'Aspen Mountain Chalet',
    city: 'Aspen',
    state: 'CO',
    type: 'Chalet',
    collection: 'Architectural Escapes',
    beds: 5,
    baths: 5,
    guests: 10,
    price: 2100,
    priceUnit: 'night',
    image: 'https://images.unsplash.com/photo-1539104389789-1d1a7a54dc73?w=1200&q=85&auto=format&fit=crop',
    note: 'Timber, stone, and alpine quiet at an expansive scale.',
    gridClass: 'lg:col-span-4',
    images: [
      'https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=1200&q=85&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1543489822-c49534f3271f?w=1200&q=85&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1510798831971-661eb04b3739?w=1200&q=85&auto=format&fit=crop',
    ],
    amenities: ['WiFi', 'Workspace', 'Parking', 'Pet Friendly'],
    fullDescription:
      'Built from reclaimed Douglas fir and local stone, this chalet sits at 8,200 feet above sea level. The architecture is deliberately unhurried — wide timber beams, deep overhangs, and a fireplace scaled to the mountain. Snow-season mornings here carry a particular quality of stillness that is difficult to find anywhere else.',
    curator: {
      name: 'James Whitmore',
      specialty: 'Mountain retreats and Alpine architecture across the American West.',
      yearsActive: 14,
    },
  },
  {
    id: 4,
    title: 'South Beach Penthouse',
    city: 'Miami',
    state: 'FL',
    type: 'Penthouse',
    collection: 'Homes with Natural Light',
    beds: 3,
    baths: 3,
    guests: 6,
    price: 890,
    priceUnit: 'night',
    image: 'https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?w=1200&q=85&auto=format&fit=crop',
    note: 'Sunlit entertaining spaces with a calm ocean horizon.',
    gridClass: 'lg:col-span-4',
    images: [
      'https://images.unsplash.com/photo-1600607686527-6fb886090705?w=1200&q=85&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1613553507747-5f8d62ad5904?w=1200&q=85&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1560184897-ae75f418493e?w=1200&q=85&auto=format&fit=crop',
    ],
    amenities: ['WiFi', 'Pool', 'Balcony', 'Workspace'],
    fullDescription:
      'A full-floor penthouse in one of South Beach\'s quietest residential towers. The layout prioritizes morning light and ocean sightlines, with interiors that stay deliberately understated against the drama of the view. Terrazzo floors, linen upholstery, and a warm neutral palette create a home that recedes gracefully in favor of the horizon.',
    curator: {
      name: 'Elena Castillo',
      specialty: 'Urban luxury residences across Miami and the broader South Florida coast.',
      yearsActive: 9,
    },
  },
  {
    id: 5,
    title: 'Austin Hill Country Estate',
    city: 'Austin',
    state: 'TX',
    type: 'Estate',
    collection: 'Architectural Escapes',
    beds: 6,
    baths: 6,
    guests: 12,
    price: 1680,
    priceUnit: 'night',
    image: 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=1200&q=85&auto=format&fit=crop',
    note: 'A generous indoor-outdoor plan framed by oak and limestone.',
    gridClass: 'lg:col-span-4',
    images: [
      'https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=1200&q=85&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1615874959474-d609969a20ed?w=1200&q=85&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=1200&q=85&auto=format&fit=crop',
    ],
    amenities: ['WiFi', 'Pool', 'Parking', 'Pet Friendly', 'Balcony'],
    fullDescription:
      'Set across six oak-shaded acres in the Texas Hill Country, this estate unfolds as a series of connected pavilions. The architecture follows the contours of the land, creating a home that feels simultaneously generous and intimate. Stone quarried from the site is used throughout, lending a quality of permanence uncommon in contemporary construction.',
    curator: {
      name: 'Thomas Reed',
      specialty: 'Estate properties and rural architectural commissions across Texas.',
      yearsActive: 16,
    },
  },
  {
    id: 6,
    title: 'Gold Coast Garden Flat',
    city: 'Chicago',
    state: 'IL',
    type: 'Apartment',
    collection: 'Modern City Sanctuaries',
    beds: 1,
    baths: 1,
    guests: 2,
    price: 6200,
    priceUnit: 'month',
    image: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=1200&q=85&auto=format&fit=crop',
    note: "Compact, elegant living within one of Chicago's quietest enclaves.",
    gridClass: 'lg:col-span-4',
    images: [
      'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=1200&q=85&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1560185007-c5ca9d2c014d?w=1200&q=85&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=1200&q=85&auto=format&fit=crop',
    ],
    amenities: ['WiFi', 'Workspace', 'Pet Friendly'],
    fullDescription:
      "A quiet flat in one of Chicago's most secluded residential enclaves, finished with European restraint. The garden-level placement brings unexpected tranquility and a connection to a private courtyard that softens the city's edge. Herringbone oak floors, handmade tile, and a considered material palette mark it as something genuinely crafted.",
    curator: {
      name: 'Anna Holloway',
      specialty: 'Boutique urban stays and architecturally significant small residences.',
      yearsActive: 7,
    },
  },
]

const curatedCollections: EditorialCollection[] = [
  {
    title: 'Architectural Escapes',
    description: 'Residences where structure, proportion, and materiality shape the stay as much as the destination.',
    locations: 'Aspen, Austin, Los Angeles',
  },
  {
    title: 'Homes with Natural Light',
    description: 'Open interiors, warm morning exposure, and long sightlines designed to soften the day.',
    locations: 'Miami, Chicago, New York',
  },
  {
    title: 'Quiet Coastal Residences',
    description: 'Salt air, private terraces, and considered spaces that stay understated even beside the water.',
    locations: 'Malibu, Miami',
  },
  {
    title: 'Modern City Sanctuaries',
    description: 'Urban homes with calm palettes, discreet luxury, and enough distance from the noise to feel restorative.',
    locations: 'New York, Chicago',
  },
]

const locationOptions = ['All Destinations', 'New York', 'Aspen', 'Miami', 'Los Angeles', 'Austin', 'Chicago']
const dateOptions = ['Flexible', 'This Month', 'Summer', 'Long Stay']
const guestOptions = ['Any Size', '1-2 Guests', '3-6 Guests', '7+ Guests']
const priceOptions = ['Any Price', 'Under $600', '$600-$1,200', '$1,200+', 'Monthly Stays']
const typeOptions = ['All Types', 'Loft', 'Villa', 'Chalet', 'Penthouse', 'Estate', 'Apartment']

const mapPins = [
  { city: 'New York', state: 'NY', top: '29%', left: '82%' },
  { city: 'Chicago', state: 'IL', top: '34%', left: '64%' },
  { city: 'Aspen', state: 'CO', top: '46%', left: '41%' },
  { city: 'Los Angeles', state: 'CA', top: '66%', left: '13%' },
  { city: 'Austin', state: 'TX', top: '67%', left: '46%' },
  { city: 'Miami', state: 'FL', top: '84%', left: '81%' },
]

export default function FeaturedProperties() {
  const [location, setLocation] = useState('All Destinations')
  const [dates, setDates] = useState('Flexible')
  const [guests, setGuests] = useState('Any Size')
  const [priceRange, setPriceRange] = useState('Any Price')
  const [propertyType, setPropertyType] = useState('All Types')
  const [selectedProperty, setSelectedProperty] = useState<DiscoveryProperty | null>(null)

  const filteredProperties = properties.filter((property) => {
    const matchesLocation = location === 'All Destinations' || property.city === location
    const matchesType = propertyType === 'All Types' || property.type === propertyType
    const matchesGuests =
      guests === 'Any Size'
      || (guests === '1-2 Guests' && property.guests <= 2)
      || (guests === '3-6 Guests' && property.guests >= 3 && property.guests <= 6)
      || (guests === '7+ Guests' && property.guests >= 7)
    const matchesPrice =
      priceRange === 'Any Price'
      || (priceRange === 'Under $600' && property.priceUnit === 'night' && property.price < 600)
      || (priceRange === '$600-$1,200' && property.priceUnit === 'night' && property.price >= 600 && property.price <= 1200)
      || (priceRange === '$1,200+' && property.price >= 1200)
      || (priceRange === 'Monthly Stays' && property.priceUnit === 'month')

    return matchesLocation && matchesType && matchesGuests && matchesPrice
  })

  // Dynamic column span so cards never orphan in a 12-col grid.
  const cardColSpan =
    filteredProperties.length === 1 ? 'col-span-12'
    : filteredProperties.length === 2 ? 'col-span-6'
    : 'col-span-4'

  return (
    <section
      style={{
        background: 'var(--color-cream)',
        paddingTop: 'clamp(6rem, 11vw, 11rem)',
        paddingBottom: 'clamp(6rem, 11vw, 11rem)',
      }}
    >
      <div className="container-custom px-6 md:px-10 lg:px-16">
        <DiscoveryHeader propertyCount={filteredProperties.length} />

        <div className="mt-16 md:mt-20">
          <DiscoveryFilters
            location={location}
            dates={dates}
            guests={guests}
            priceRange={priceRange}
            propertyType={propertyType}
            resultCount={filteredProperties.length}
            onLocationChange={setLocation}
            onDatesChange={setDates}
            onGuestsChange={setGuests}
            onPriceRangeChange={setPriceRange}
            onPropertyTypeChange={setPropertyType}
            onReset={() => {
              setLocation('All Destinations')
              setDates('Flexible')
              setGuests('Any Size')
              setPriceRange('Any Price')
              setPropertyType('All Types')
            }}
          />

          {filteredProperties.length === 0 ? (
            <div className="mt-12 md:mt-16">
              <EmptyState />
            </div>
          ) : (
            <>
              {/* Mobile: horizontal scroll carousel */}
              <div className="lg:hidden mt-12">
                <div className="flex gap-5 overflow-x-auto no-scrollbar snap-x snap-mandatory pb-2">
                  {filteredProperties.map((property) => (
                    <div key={property.id} className="min-w-[84%] snap-start">
                      <PropertyCard
                        property={property}
                        onClick={() => setSelectedProperty(property)}
                      />
                    </div>
                  ))}
                </div>

                <div className="mt-28">
                  <CollectionsIndex />
                </div>
                <div className="mt-32">
                  <MapPreview />
                </div>
              </div>

              {/* Desktop: unified equal-size grid */}
              <div className="hidden lg:block">
                <div className="mt-16">
                  <div className="grid grid-cols-12 gap-7 items-start">
                    {filteredProperties.map((property) => (
                      <div key={property.id} className={cardColSpan}>
                        <PropertyCard
                          property={property}
                          onClick={() => setSelectedProperty(property)}
                        />
                      </div>
                    ))}
                  </div>
                </div>

                {/* Divider */}
                <div
                  style={{
                    height: '1px',
                    background: 'var(--color-sandstone-light)',
                    marginTop: 'clamp(5rem, 9vw, 9rem)',
                    marginBottom: 'clamp(5rem, 9vw, 9rem)',
                  }}
                />

                {/* Editorial blocks after all properties */}
                <div className="grid grid-cols-12 gap-10 items-stretch">
                  <div className="col-span-7">
                    <MapPreview />
                  </div>
                  <div className="col-span-5">
                    <CollectionsIndex />
                  </div>
                </div>
              </div>
            </>
          )}
        </div>
      </div>

      {selectedProperty && (
        <PropertyPreview
          property={selectedProperty}
          onClose={() => setSelectedProperty(null)}
        />
      )}
    </section>
  )
}

function DiscoveryHeader({ propertyCount }: { propertyCount: number }) {
  return (
    <div className="max-w-4xl">
      <p
        className="section-label mb-5 inline-flex items-center px-3 py-1.5"
        style={{
          border: '1px solid rgba(28,28,28,0.12)',
          color: 'var(--color-charcoal-faint)',
          letterSpacing: '0.16em',
          background: 'rgba(255,255,255,0.55)',
        }}
      >
        Listings &amp; Discovery
      </p>
      <h2
        className="font-serif text-4xl md:text-5xl lg:text-6xl font-light leading-[1.08]"
        style={{ color: 'var(--color-charcoal)' }}
      >
        Curated residences across America's most sought-after destinations.
      </h2>
      <p
        className="mt-6 text-sm md:text-base font-light leading-[1.85] max-w-[48ch]"
        style={{ color: 'var(--color-charcoal-muted)' }}
      >
        Browse architecturally minded rentals and long-stay homes selected for daylight, proportion, material warmth, and a quieter sense of luxury.
      </p>
      <div
        className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3 text-[11px] uppercase tracking-[0.14em]"
        style={{ color: 'var(--color-charcoal-faint)' }}
      >
        <span>United States</span>
        <span>6 cities in focus</span>
        <span>{propertyCount} curated stays</span>
      </div>
    </div>
  )
}

function DiscoveryFilters({
  location,
  dates,
  guests,
  priceRange,
  propertyType,
  resultCount,
  onLocationChange,
  onDatesChange,
  onGuestsChange,
  onPriceRangeChange,
  onPropertyTypeChange,
  onReset,
}: {
  location: string
  dates: string
  guests: string
  priceRange: string
  propertyType: string
  resultCount: number
  onLocationChange: (val: string) => void
  onDatesChange: (val: string) => void
  onGuestsChange: (val: string) => void
  onPriceRangeChange: (val: string) => void
  onPropertyTypeChange: (val: string) => void
  onReset: () => void
}) {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)

  const hasActiveFilters =
    location !== 'All Destinations' ||
    dates !== 'Flexible' ||
    guests !== 'Any Size' ||
    priceRange !== 'Any Price' ||
    propertyType !== 'All Types'

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', position: 'relative' }}>
      {/* Backdrop for closing dropdown */}
      {activeDropdown && (
        <div
          onClick={() => setActiveDropdown(null)}
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 40,
            background: 'transparent',
          }}
        />
      )}

      {/* Extremely minimal text filter row */}
      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          alignItems: 'baseline',
          columnGap: '1rem',
          rowGap: '0.625rem',
          fontSize: '0.75rem',
          fontFamily: 'var(--font-sans)',
          color: 'var(--color-charcoal-muted)',
          zIndex: 45,
          position: 'relative',
        }}
      >
        <span
          style={{
            fontSize: '0.5625rem',
            letterSpacing: '0.16em',
            textTransform: 'uppercase',
            color: 'var(--color-charcoal-faint)',
            fontWeight: 500,
            marginRight: '0.25rem',
          }}
        >
          Filter Stays:
        </span>

        {/* Location Dropdown Trigger */}
        <div style={{ position: 'relative', display: 'inline-block' }}>
          <button
            onClick={() => setActiveDropdown(activeDropdown === 'location' ? null : 'location')}
            style={{
              background: 'transparent',
              border: 'none',
              padding: '0 0 0.15rem 0',
              fontSize: '0.75rem',
              color: location !== 'All Destinations' ? 'var(--color-charcoal)' : 'var(--color-charcoal-muted)',
              fontWeight: location !== 'All Destinations' ? 500 : 300,
              borderBottom: '1px dotted var(--color-sandstone)',
              cursor: 'pointer',
              fontFamily: 'var(--font-sans)',
            }}
          >
            {location === 'All Destinations' ? 'Anywhere' : location}
          </button>
          {activeDropdown === 'location' && (
            <DropdownMenu
              options={locationOptions}
              value={location}
              onChange={(val) => {
                onLocationChange(val)
                setActiveDropdown(null)
              }}
            />
          )}
        </div>

        <span style={{ color: 'var(--color-sandstone-light)', fontSize: '0.6875rem' }}>/</span>

        {/* Dates Dropdown Trigger */}
        <div style={{ position: 'relative', display: 'inline-block' }}>
          <button
            onClick={() => setActiveDropdown(activeDropdown === 'dates' ? null : 'dates')}
            style={{
              background: 'transparent',
              border: 'none',
              padding: '0 0 0.15rem 0',
              fontSize: '0.75rem',
              color: dates !== 'Flexible' ? 'var(--color-charcoal)' : 'var(--color-charcoal-muted)',
              fontWeight: dates !== 'Flexible' ? 500 : 300,
              borderBottom: '1px dotted var(--color-sandstone)',
              cursor: 'pointer',
              fontFamily: 'var(--font-sans)',
            }}
          >
            {dates === 'Flexible' ? 'Any Timing' : dates}
          </button>
          {activeDropdown === 'dates' && (
            <DropdownMenu
              options={dateOptions}
              value={dates}
              onChange={(val) => {
                onDatesChange(val)
                setActiveDropdown(null)
              }}
            />
          )}
        </div>

        <span style={{ color: 'var(--color-sandstone-light)', fontSize: '0.6875rem' }}>/</span>

        {/* Guests Dropdown Trigger */}
        <div style={{ position: 'relative', display: 'inline-block' }}>
          <button
            onClick={() => setActiveDropdown(activeDropdown === 'guests' ? null : 'guests')}
            style={{
              background: 'transparent',
              border: 'none',
              padding: '0 0 0.15rem 0',
              fontSize: '0.75rem',
              color: guests !== 'Any Size' ? 'var(--color-charcoal)' : 'var(--color-charcoal-muted)',
              fontWeight: guests !== 'Any Size' ? 500 : 300,
              borderBottom: '1px dotted var(--color-sandstone)',
              cursor: 'pointer',
              fontFamily: 'var(--font-sans)',
            }}
          >
            {guests === 'Any Size' ? 'Any Size' : guests}
          </button>
          {activeDropdown === 'guests' && (
            <DropdownMenu
              options={guestOptions}
              value={guests}
              onChange={(val) => {
                onGuestsChange(val)
                setActiveDropdown(null)
              }}
            />
          )}
        </div>

        <span style={{ color: 'var(--color-sandstone-light)', fontSize: '0.6875rem' }}>/</span>

        {/* Budget Dropdown Trigger */}
        <div style={{ position: 'relative', display: 'inline-block' }}>
          <button
            onClick={() => setActiveDropdown(activeDropdown === 'priceRange' ? null : 'priceRange')}
            style={{
              background: 'transparent',
              border: 'none',
              padding: '0 0 0.15rem 0',
              fontSize: '0.75rem',
              color: priceRange !== 'Any Price' ? 'var(--color-charcoal)' : 'var(--color-charcoal-muted)',
              fontWeight: priceRange !== 'Any Price' ? 500 : 300,
              borderBottom: '1px dotted var(--color-sandstone)',
              cursor: 'pointer',
              fontFamily: 'var(--font-sans)',
            }}
          >
            {priceRange === 'Any Price' ? 'Any Budget' : priceRange}
          </button>
          {activeDropdown === 'priceRange' && (
            <DropdownMenu
              options={priceOptions}
              value={priceRange}
              onChange={(val) => {
                onPriceRangeChange(val)
                setActiveDropdown(null)
              }}
            />
          )}
        </div>

        <span style={{ color: 'var(--color-sandstone-light)', fontSize: '0.6875rem' }}>/</span>

        {/* Type Dropdown Trigger */}
        <div style={{ position: 'relative', display: 'inline-block' }}>
          <button
            onClick={() => setActiveDropdown(activeDropdown === 'propertyType' ? null : 'propertyType')}
            style={{
              background: 'transparent',
              border: 'none',
              padding: '0 0 0.15rem 0',
              fontSize: '0.75rem',
              color: propertyType !== 'All Types' ? 'var(--color-charcoal)' : 'var(--color-charcoal-muted)',
              fontWeight: propertyType !== 'All Types' ? 500 : 300,
              borderBottom: '1px dotted var(--color-sandstone)',
              cursor: 'pointer',
              fontFamily: 'var(--font-sans)',
            }}
          >
            {propertyType === 'All Types' ? 'Any Type' : propertyType}
          </button>
          {activeDropdown === 'propertyType' && (
            <DropdownMenu
              options={typeOptions}
              value={propertyType}
              onChange={(val) => {
                onPropertyTypeChange(val)
                setActiveDropdown(null)
              }}
            />
          )}
        </div>

        {/* Clear/Reset button */}
        {hasActiveFilters && (
          <button
            onClick={onReset}
            style={{
              background: 'transparent',
              border: 'none',
              color: 'var(--color-sage)',
              fontSize: '0.625rem',
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
              fontWeight: 600,
              marginLeft: 'auto',
              cursor: 'pointer',
              fontFamily: 'var(--font-sans)',
            }}
          >
            Reset Filters
          </button>
        )}

        <span
          style={{
            fontSize: '0.6875rem',
            color: 'var(--color-charcoal-faint)',
            marginLeft: hasActiveFilters ? '0px' : 'auto',
            fontWeight: 300,
            fontFamily: 'var(--font-sans)',
          }}
        >
          {resultCount} matches
        </span>
      </div>
    </div>
  )
}

function DropdownMenu({
  options,
  value,
  onChange,
}: {
  options: string[]
  value: string
  onChange: (val: string) => void
}) {
  return (
    <div
      style={{
        position: 'absolute',
        top: '100%',
        left: 0,
        width: '240px',
        background: 'var(--color-warm-white)',
        border: '1px solid var(--color-sandstone-light)',
        boxShadow: '0 8px 30px rgba(28,24,18,0.08)',
        zIndex: 50,
        marginTop: '6px',
        padding: '0.5rem 0',
      }}
    >
      <div style={{ maxHeight: '280px', overflowY: 'auto' }} className="no-scrollbar">
        {options.map((option) => {
          const isActive = option === value
          return (
            <button
              key={option}
              onClick={() => onChange(option)}
              style={{
                width: '100%',
                textAlign: 'left',
                padding: '0.625rem 1rem',
                fontSize: '0.6875rem',
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
                fontFamily: 'var(--font-sans)',
                fontWeight: isActive ? 500 : 300,
                color: isActive ? 'var(--color-charcoal)' : 'var(--color-charcoal-muted)',
                background: isActive ? 'var(--color-cream)' : 'transparent',
                border: 'none',
                borderLeft: `3px solid ${isActive ? 'var(--color-sage)' : 'transparent'}`,
                cursor: 'pointer',
                transition: 'background 0.15s ease',
              }}
              onMouseEnter={(e) => {
                if (!isActive) {
                  e.currentTarget.style.background = 'rgba(248,245,240,0.5)'
                }
              }}
              onMouseLeave={(e) => {
                if (!isActive) {
                  e.currentTarget.style.background = 'transparent'
                }
              }}
            >
              {option}
            </button>
          )
        })}
      </div>
    </div>
  )
}

function PropertyCard({
  property,
  onClick,
}: {
  property: DiscoveryProperty
  onClick: () => void
}) {
  return (
    <article
      onClick={onClick}
      className="property-card overflow-hidden"
      style={{
        cursor: 'pointer',
        background: 'var(--color-warm-white)',
        border: '1px solid var(--color-sandstone-pale)',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      {/* Image */}
      <div className="overflow-hidden relative w-full" style={{ aspectRatio: '3/2' }}>
        <img
          src={property.image}
          alt={property.title}
          className="absolute inset-0 w-full h-full object-cover"
          loading="lazy"
        />
        <div className="image-overlay absolute inset-0" />

        {/* Location badge */}
        <div className="absolute top-4 left-4">
          <span
            className="text-[10px] uppercase tracking-[0.16em] font-medium px-2.5 py-1.5"
            style={{
              background: 'rgba(18,18,16,0.6)',
              color: 'rgba(253,252,250,0.95)',
              backdropFilter: 'blur(8px)',
              border: '1px solid rgba(255,255,255,0.14)',
              letterSpacing: '0.18em',
            }}
          >
            {property.city}, {property.state}
          </span>
        </div>

        {/* Title overlay */}
        <div
          className="absolute inset-x-0 bottom-0 px-6 pb-6 pt-14"
          style={{
            background: 'linear-gradient(to top, rgba(18,18,16,0.82) 0%, rgba(18,18,16,0.1) 75%, transparent 100%)',
          }}
        >
          <h3
            className="font-serif font-light leading-[1.06] text-[1.5rem]"
            style={{ color: 'var(--color-warm-white)' }}
          >
            {property.title}
          </h3>
        </div>
      </div>

      {/* Body */}
      <div
        className="flex flex-col flex-1"
        style={{ padding: '1.5rem 1.5rem 1.5rem', gap: '1.25rem' }}
      >
        {/* Collection label */}
        <p
          style={{
            fontSize: '0.625rem',
            letterSpacing: '0.2em',
            textTransform: 'uppercase',
            color: 'var(--color-sage)',
            fontFamily: 'var(--font-sans)',
            fontWeight: 600,
          }}
        >
          {property.collection}
        </p>

        {/* Note */}
        <p
          style={{
            fontSize: '0.875rem',
            fontFamily: 'var(--font-sans)',
            fontWeight: 300,
            lineHeight: 1.8,
            color: 'var(--color-charcoal-muted)',
            marginTop: '-0.5rem',
          }}
        >
          {property.note}
        </p>

        {/* Divider */}
        <div style={{ height: '1px', background: 'var(--color-sandstone-pale)' }} />

        {/* Meta row */}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.375rem' }}>
          {[
            property.type,
            `${property.beds} bd · ${property.baths} ba`,
            `${property.guests} guests`,
          ].map((tag) => (
            <span
              key={tag}
              style={{
                fontSize: '0.5625rem',
                letterSpacing: '0.14em',
                textTransform: 'uppercase',
                fontFamily: 'var(--font-sans)',
                fontWeight: 500,
                padding: '0.35rem 0.7rem',
                background: 'var(--color-cream)',
                color: 'var(--color-charcoal-muted)',
                border: '1px solid var(--color-sandstone-pale)',
              }}
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Price + CTA — pinned to bottom */}
        <div
          className="mt-auto"
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '0.75rem',
            paddingTop: '1.125rem',
            borderTop: '1px solid var(--color-sandstone-pale)',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'baseline', gap: '0.3rem' }}>
            <span
              className="font-serif font-light"
              style={{ fontSize: '1.65rem', color: 'var(--color-charcoal)', lineHeight: 1 }}
            >
              ${property.price.toLocaleString()}
            </span>
            <span
              style={{
                fontSize: '0.6875rem',
                fontFamily: 'var(--font-sans)',
                fontWeight: 300,
                color: 'var(--color-charcoal-faint)',
              }}
            >
              / {property.priceUnit}
            </span>
          </div>

          <button
            onClick={(e) => e.stopPropagation()}
            style={{
              padding: '0.5625rem 1rem',
              border: '1px solid var(--color-charcoal)',
              background: 'transparent',
              color: 'var(--color-charcoal)',
              fontFamily: 'var(--font-sans)',
              fontSize: '0.5625rem',
              letterSpacing: '0.18em',
              textTransform: 'uppercase',
              fontWeight: 500,
              cursor: 'pointer',
              transition: 'background 0.22s ease, color 0.22s ease',
              whiteSpace: 'nowrap',
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
            View →
          </button>
        </div>
      </div>
    </article>
  )
}

function CollectionsIndex() {
  return (
    <div
      style={{
        border: '1px solid var(--color-sandstone-light)',
        background: 'var(--color-warm-white)',
        padding: '2rem',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <p className="section-label mb-4" style={{ color: 'var(--color-charcoal-faint)' }}>
        Curated Discovery
      </p>
      <h3 className="font-serif text-3xl md:text-[2.4rem] font-light leading-[1.1]" style={{ color: 'var(--color-charcoal)' }}>
        Editorial ways to browse the collection.
      </h3>
      <p className="mt-5 text-sm font-light leading-[1.85] max-w-[34ch]" style={{ color: 'var(--color-charcoal-muted)' }}>
        A more organized set of entry points for guests who prefer to browse by mood, architecture, and atmosphere.
      </p>

      <div
        className="mt-8 grid grid-cols-1 gap-px sm:grid-cols-2"
        style={{ background: 'var(--color-sandstone-pale)', flex: 1 }}
      >
        {curatedCollections.map((collection) => (
          <div
            key={collection.title}
            className="p-5"
            style={{
              background: 'var(--color-warm-white)',
              transition: 'background 0.2s ease',
              cursor: 'pointer',
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLDivElement).style.background = 'var(--color-cream)'
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLDivElement).style.background = 'var(--color-warm-white)'
            }}
          >
            <p className="text-[10px] uppercase tracking-[0.16em] mb-3" style={{ color: 'var(--color-charcoal-faint)' }}>
              {collection.locations}
            </p>
            <h4 className="font-serif text-[1.6rem] font-light leading-[1.1]" style={{ color: 'var(--color-charcoal)' }}>
              {collection.title}
            </h4>
            <p className="mt-3 text-sm font-light leading-relaxed" style={{ color: 'var(--color-charcoal-muted)' }}>
              {collection.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  )
}

function MapPreview() {
  return (
    <div
      style={{
        border: '1px solid var(--color-sandstone)',
        background: 'var(--color-alabaster)',
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
      }}
    >
      {/* Header row */}
      <div
        style={{
          display: 'flex',
          alignItems: 'flex-end',
          justifyContent: 'space-between',
          gap: '2rem',
          padding: 'clamp(1.5rem, 3.5vw, 2.75rem) clamp(1.5rem, 3.5vw, 2.75rem) clamp(1.25rem, 3vw, 2.25rem)',
          borderBottom: '1px solid var(--color-sandstone-pale)',
        }}
      >
        <div>
          <p
            className="section-label"
            style={{ color: 'var(--color-charcoal-faint)', marginBottom: '0.875rem' }}
          >
            Map Preview
          </p>
          <h3
            className="font-serif font-light leading-[1.1]"
            style={{ fontSize: 'clamp(1.6rem, 2.2vw, 2.4rem)', color: 'var(--color-charcoal)' }}
          >
            Where each residence sits.
          </h3>
        </div>
        <p
          style={{
            fontSize: '0.75rem',
            fontFamily: 'var(--font-sans)',
            fontWeight: 300,
            lineHeight: 1.75,
            color: 'var(--color-charcoal-muted)',
            maxWidth: '22ch',
            textAlign: 'right',
            flexShrink: 0,
          }}
        >
          Six American cities, one curated collection.
        </p>
      </div>

      {/* Map canvas */}
      <div
        className="relative overflow-hidden"
        style={{
          flex: 1,
          minHeight: '380px',
          background: '#ede9e0',
        }}
      >
        {/* Grid lines — denser + more visible */}
        <svg
          aria-hidden="true"
          style={{
            position: 'absolute',
            inset: 0,
            width: '100%',
            height: '100%',
            opacity: 0.5,
          }}
        >
          {/* Horizontals */}
          {[18, 32, 46, 60, 74, 88].map((pct) => (
            <line key={`h${pct}`} x1="5%" y1={`${pct}%`} x2="95%" y2={`${pct}%`} stroke="#c4b9a8" strokeWidth="0.75" />
          ))}
          {/* Verticals */}
          {[12, 26, 40, 54, 68, 82].map((pct) => (
            <line key={`v${pct}`} x1={`${pct}%`} y1="6%" x2={`${pct}%`} y2="94%" stroke="#c4b9a8" strokeWidth="0.75" />
          ))}
        </svg>

        {/* Subtle watermark label */}
        <span
          style={{
            position: 'absolute',
            bottom: '1rem',
            left: '1.25rem',
            fontSize: '0.5rem',
            letterSpacing: '0.22em',
            textTransform: 'uppercase',
            color: 'rgba(100,90,76,0.38)',
            fontFamily: 'var(--font-sans)',
            userSelect: 'none',
          }}
        >
          United States — Curated Residences
        </span>

        {mapPins.map((pin) => (
          <div
            key={pin.city}
            className="absolute"
            style={{ top: pin.top, left: pin.left, transform: 'translate(-50%, -50%)' }}
          >
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
                padding: '0.4rem 0.75rem 0.4rem 0.5rem',
                background: 'rgba(253,252,250,0.97)',
                border: '1px solid rgba(180,168,150,0.55)',
                boxShadow: '0 2px 8px rgba(28,24,18,0.08)',
              }}
            >
              {/* Dot */}
              <span
                style={{
                  width: '7px',
                  height: '7px',
                  borderRadius: '50%',
                  background: 'var(--color-sage)',
                  flexShrink: 0,
                  display: 'block',
                }}
              />
              <span
                style={{
                  fontSize: '0.5625rem',
                  letterSpacing: '0.15em',
                  textTransform: 'uppercase',
                  fontFamily: 'var(--font-sans)',
                  fontWeight: 500,
                  color: 'var(--color-charcoal)',
                  whiteSpace: 'nowrap',
                }}
              >
                {pin.city}
              </span>
              <span
                style={{
                  fontSize: '0.5rem',
                  letterSpacing: '0.1em',
                  fontFamily: 'var(--font-sans)',
                  color: 'var(--color-charcoal-faint)',
                  borderLeft: '1px solid var(--color-sandstone-pale)',
                  paddingLeft: '0.4rem',
                  marginLeft: '0.1rem',
                }}
              >
                {pin.state}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

function EmptyState() {
  return (
    <div
      className="p-8 md:p-10"
      style={{
        border: '1px solid var(--color-sandstone-light)',
        background: 'var(--color-alabaster)',
      }}
    >
      <p className="section-label mb-4">No Matches</p>
      <h3 className="font-serif text-3xl font-light mb-4" style={{ color: 'var(--color-charcoal)' }}>
        Nothing available in this edit of the search.
      </h3>
      <p className="text-sm font-light leading-relaxed max-w-[42ch]" style={{ color: 'var(--color-charcoal-muted)' }}>
        Broaden the dates, open the price range, or return to all destinations to see the full curated set.
      </p>
    </div>
  )
}


