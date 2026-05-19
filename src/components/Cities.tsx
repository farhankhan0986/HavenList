const cities = [
  {
    id: 1,
    name: "New York",
    state: "NY",
    tagline: "The city that never sleeps",
    count: 284,
    image:
      "https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?w=800&q=85&auto=format&fit=crop",
    size: "tall",
  },
  {
    id: 2,
    name: "Miami",
    state: "FL",
    tagline: "Sun, art & architecture",
    count: 147,
    image:
      "https://images.unsplash.com/photo-1535498730771-e735b998cd64?w=800&q=85&auto=format&fit=crop",
    size: "wide",
  },
  {
    id: 3,
    name: "Aspen",
    state: "CO",
    tagline: "Mountain serenity",
    count: 63,
    image:
      "https://images.unsplash.com/photo-1520209759809-a9bcb6cb3241?w=800&q=85&auto=format&fit=crop",
    size: "wide",
  },
  {
    id: 4,
    name: "Los Angeles",
    state: "CA",
    tagline: "Hills, coast & culture",
    count: 321,
    image:
      "https://images.unsplash.com/photo-1563503136947-cc262fa1e423?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bG9zJTIwYW5nZWxlc3xlbnwwfHwwfHx8MA%3D%3D",
    size: "tall",
  },
  {
    id: 5,
    name: "Austin",
    state: "TX",
    tagline: "Creative energy & space",
    count: 98,
    image:
      "https://images.unsplash.com/photo-1531218150217-54595bc2b934?w=800&q=85&auto=format&fit=crop",
    size: "wide",
  },
  {
    id: 6,
    name: "Chicago",
    state: "IL",
    tagline: "Architecture on the lake",
    count: 176,
    image:
      "https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?w=800&q=85&auto=format&fit=crop",
    size: "wide",
  },
];

function CityCard({ city }: { city: (typeof cities)[0] }) {
  return (
    <div
      className="city-card cursor-pointer overflow-hidden relative w-full"
      style={{ aspectRatio: "4/5" }}
    >
      <div className="absolute inset-0 w-full h-full overflow-hidden">
        <img
          src={city.image}
          alt={`${city.name}, ${city.state}`}
          className="w-full h-full object-cover"
          loading="lazy"
        />
        <div className="image-overlay absolute inset-0" />
        <div className="absolute bottom-0 left-0 right-0 p-6">
          <p
            className="overline mb-1.5"
            style={{ color: "rgba(250,248,245,0.65)" }}
          >
            {city.count} properties
          </p>
          <h3
            className="font-serif text-2xl md:text-3xl font-light"
            style={{ color: "var(--color-warm-white)" }}
          >
            {city.name}
          </h3>
          <p
            className="text-xs font-light mt-1"
            style={{ color: "rgba(250,248,245,0.72)" }}
          >
            {city.tagline}
          </p>
        </div>
        {/* State label top right */}
        <div className="absolute top-4 right-4">
          <span
            className="px-2.5 py-1 text-[10px] tracking-[0.12em] uppercase font-medium"
            style={{
              background: "rgba(250,248,245,0.18)",
              color: "rgba(250,248,245,0.85)",
              border: "1px solid rgba(250,248,245,0.2)",
            }}
          >
            {city.state}
          </span>
        </div>
      </div>
    </div>
  );
}

export default function Cities() {
  return (
    <section
      style={{
        background: "var(--color-alabaster)",
        marginTop: "14px",
        paddingTop: "clamp(6rem, 11vw, 11rem)",
        paddingBottom: "clamp(6rem, 11vw, 11rem)",
      }}
    >
      <div className="container-custom px-6 md:px-10 lg:px-16">
        {/* Header */}
        <div className="mb-14 md:mb-20">
          <p
            className="section-label mb-4 inline-flex items-center px-3 py-1.5"
            style={{
              border: "1px solid rgba(28,28,28,0.12)",
              color: "var(--color-charcoal-faint)",
              letterSpacing: "0.16em",
              background: "rgba(255,255,255,0.55)",
            }}
          >
            Explore by City
          </p>
          <h2
            className="font-serif text-4xl md:text-5xl font-light leading-[1.2]"
            style={{ color: "var(--color-charcoal)" }}
          >
            Where do you
            <br />
            <em>want to be?</em>
          </h2>
        </div>

        {/* Uniform city grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {cities.map((city) => (
            <CityCard key={city.id} city={city} />
          ))}
        </div>
      </div>
    </section>
  );
}
