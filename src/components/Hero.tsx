import { useState } from "react";

const heroImage =
  "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1800&q=85&auto=format&fit=crop";

const tabs = ["All Stays", "Monthly", "Residences"];

const locationsList = [
  "Malibu, CA",
  "Los Angeles, CA",
  "New York, NY",
  "Hudson Valley, NY",
  "Catskills, NY",
  "Aspen, CO",
  "Miami, FL",
  "Portland, OR"
];

const dateOptions = [
  "Flexible Dates",
  "May 2026",
  "June 2026",
  "July 2026",
  "Late Summer",
  "Autumn 2026"
];

export default function Hero() {
  const [activeTab, setActiveTab] = useState("All Stays");
  const [location, setLocation] = useState("");
  const [checkin, setCheckin] = useState("");
  const [checkout, setCheckout] = useState("");
  const [adults, setAdults] = useState(1);
  const [childrenCount, setChildrenCount] = useState(0);
  const [activeDropdown, setActiveDropdown] = useState<
    "location" | "arrive" | "depart" | "guests" | null
  >(null);

  const guestsCount = adults + childrenCount;
  const guestsLabel =
    guestsCount === 0
      ? ""
      : guestsCount === 1
      ? "1 Guest"
      : `${guestsCount} Guests`;

  const handleSearch = () => {
    // Basic feedback on search trigger
    console.log("Searching stays:", {
      tab: activeTab,
      location,
      checkin,
      checkout,
      guests: guestsLabel,
    });
    // Scroll smoothly to properties listing
    const propertiesSection = document.querySelector("section.py-28");
    if (propertiesSection) {
      propertiesSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative w-full h-screen min-h-[700px] max-h-[980px]" style={{ zIndex: 10 }}>
      {/* Click-outside backdrop */}
      {activeDropdown && (
        <div
          onClick={() => setActiveDropdown(null)}
          style={{
            position: "fixed",
            inset: 0,
            zIndex: 40,
            background: "transparent",
          }}
        />
      )}

      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Luxury estate with pool"
          className="w-full h-full object-cover object-center"
          loading="eager"
        />
        <div
          className="absolute inset-0"
          style={{ background: "rgba(22,20,18,0.36)" }}
        />
        <div
          className="absolute bottom-0 left-0 right-0 h-[55%]"
          style={{
            background:
              "linear-gradient(to top, rgba(14,12,10,0.72) 0%, rgba(14,12,10,0.1) 70%, transparent 100%)",
          }}
        />
      </div>

      {/* Content */}
      <div
        className="relative h-full px-6 md:px-10 lg:px-16 container-custom"
        style={{ paddingTop: "72px", paddingBottom: "clamp(3rem, 8vh, 6rem)" }}
      >
        <div className="flex h-full flex-col justify-end">
          <div className="w-full max-w-5xl">
            {/* Editorial headline */}
            <div className="animate-fade-in delay-200 max-w-3xl">
              <div className="flex flex-col gap-6 md:gap-7">
                <p
                  className="overline"
                  style={{
                    color: "rgba(250,248,245,0.56)",
                    letterSpacing: "0.22em",
                  }}
                >
                  Curated US Residences
                </p>
                <h1
                  className="font-serif font-light leading-[1.02]"
                  style={{
                    color: "var(--color-warm-white)",
                    fontSize: "clamp(2.9rem, 6vw, 5.4rem)",
                    maxWidth: "10.5ch",
                  }}
                >
                  Find where
                  <br />
                  <em>you belong.</em>
                </h1>
                <p
                  className="text-sm md:text-[15px] font-light leading-[1.9] max-w-[42ch]"
                  style={{ color: "rgba(250,248,245,0.72)" }}
                >
                  Discover thoughtfully selected homes, long-stay residences,
                  and refined escapes designed for comfort, character, and a
                  deeper sense of place.
                </p>
              </div>
            </div>

            <div
              className="mt-10 md:mt-14 mb-4 h-px w-full max-w-[720px]"
              style={{ background: "rgba(250,248,245,0.18)" }}
            />

            {/* Search widget */}
            <div
              className="animate-fade-in delay-400 w-full max-w-4xl relative"
              style={{ opacity: 1, zIndex: 45, position: "relative" }}
            >
              <div
                style={{
                  background: "rgba(253,252,250,0.98)",
                  boxShadow: "0 12px 42px rgba(14,12,10,0.14)",
                  border: "1px solid rgba(196,184,168,0.18)",
                  backdropFilter: "blur(14px)",
                }}
              >
                {/* Top section: Elegant tabs */}
                <div
                  className="flex flex-col gap-4 px-6 py-4"
                  style={{
                    borderBottom: "1px solid rgba(196,184,168,0.14)",
                  }}
                >
                  <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
                    {/* Tabs */}
                    <div className="flex items-center gap-6 overflow-x-auto no-scrollbar">
                      {tabs.map((tab) => (
                        <button
                          key={tab}
                          onClick={() => setActiveTab(tab)}
                          className="text-[11px] tracking-[0.15em] uppercase font-light pb-2 transition-all duration-300 relative whitespace-nowrap"
                          style={{
                            background: "transparent",
                            color:
                              activeTab === tab
                                ? "var(--color-charcoal)"
                                : "var(--color-charcoal-muted)",
                            border: "none",
                            cursor: "pointer",
                          }}
                        >
                          {tab}
                          {activeTab === tab && (
                            <div
                              style={{
                                position: "absolute",
                                bottom: 0,
                                left: 0,
                                right: 0,
                                height: "1px",
                                background: "var(--color-charcoal)",
                              }}
                            />
                          )}
                        </button>
                      ))}
                    </div>

                    {/* Info text */}
                    <p
                      className="text-[11px] uppercase tracking-[0.14em]"
                      style={{
                        color: "var(--color-charcoal-faint)",
                        opacity: 0.9,
                      }}
                    >
                      Search curated stays across the US
                    </p>
                  </div>
                </div>

                {/* Fields section */}
                <div className="flex flex-col md:flex-row md:items-stretch">
                  {/* Segment 1: Location */}
                  <div className="flex-1 min-w-0 relative">
                    <SearchField
                      label="Location"
                      placeholder="Select destination"
                      value={location}
                      isActive={activeDropdown === "location"}
                      onClick={() =>
                        setActiveDropdown(
                          activeDropdown === "location" ? null : "location"
                        )
                      }
                      style={{
                        borderBottom: "1px solid var(--color-sandstone-pale)",
                      }}
                      className="md:border-b-0"
                    />

                    {activeDropdown === "location" && (
                      <div
                        style={{
                          position: "absolute",
                          top: "100%",
                          left: 0,
                          width: "280px",
                          background: "var(--color-warm-white)",
                          border: "1px solid var(--color-sandstone-light)",
                          boxShadow: "0 12px 36px rgba(14,12,10,0.12)",
                          zIndex: 50,
                          marginTop: "8px",
                          padding: "0.5rem 0",
                          maxHeight: "220px",
                          overflowY: "auto",
                        }}
                        className="no-scrollbar"
                      >
                        {locationsList.map((loc) => (
                          <button
                            key={loc}
                            onClick={() => {
                              setLocation(loc);
                              setActiveDropdown("arrive"); // Auto advance to date
                            }}
                            className="w-full text-left px-5 py-3 text-xs tracking-wider transition-colors duration-150 hover:bg-cream"
                            style={{
                              background: "transparent",
                              border: "none",
                              fontFamily: "var(--font-sans)",
                              fontWeight: location === loc ? 500 : 300,
                              color: "var(--color-charcoal)",
                              cursor: "pointer",
                            }}
                          >
                            {loc}
                          </button>
                        ))}
                      </div>
                    )}
                  </div>

                  <div
                    className="hidden md:block w-px my-3"
                    style={{ background: "var(--color-sandstone-pale)" }}
                  />

                  {/* Segment 2: Arrive */}
                  <div className="md:w-[155px] relative">
                    <SearchField
                      label="Arrive"
                      placeholder="Add timing"
                      value={checkin}
                      isActive={activeDropdown === "arrive"}
                      onClick={() =>
                        setActiveDropdown(
                          activeDropdown === "arrive" ? null : "arrive"
                        )
                      }
                      style={{
                        borderBottom: "1px solid var(--color-sandstone-pale)",
                      }}
                      className="md:border-b-0"
                    />

                    {activeDropdown === "arrive" && (
                      <div
                        style={{
                          position: "absolute",
                          top: "100%",
                          left: 0,
                          width: "260px",
                          background: "var(--color-warm-white)",
                          border: "1px solid var(--color-sandstone-light)",
                          boxShadow: "0 12px 36px rgba(14,12,10,0.12)",
                          zIndex: 50,
                          marginTop: "8px",
                          padding: "0.5rem 0",
                          maxHeight: "220px",
                          overflowY: "auto",
                        }}
                        className="no-scrollbar"
                      >
                        {dateOptions.map((opt) => (
                          <button
                            key={opt}
                            onClick={() => {
                              setCheckin(opt);
                              setActiveDropdown("depart"); // Auto-advance to checkout
                            }}
                            className="w-full text-left px-5 py-3 text-xs tracking-wider transition-colors duration-150 hover:bg-cream"
                            style={{
                              background: "transparent",
                              border: "none",
                              fontFamily: "var(--font-sans)",
                              fontWeight: checkin === opt ? 500 : 300,
                              color: "var(--color-charcoal)",
                              cursor: "pointer",
                            }}
                          >
                            {opt}
                          </button>
                        ))}
                      </div>
                    )}
                  </div>

                  <div
                    className="hidden md:block w-px my-3"
                    style={{ background: "var(--color-sandstone-pale)" }}
                  />

                  {/* Segment 3: Depart */}
                  <div className="md:w-[155px] relative">
                    <SearchField
                      label="Depart"
                      placeholder="Add timing"
                      value={checkout}
                      isActive={activeDropdown === "depart"}
                      onClick={() =>
                        setActiveDropdown(
                          activeDropdown === "depart" ? null : "depart"
                        )
                      }
                      style={{
                        borderBottom: "1px solid var(--color-sandstone-pale)",
                      }}
                      className="md:border-b-0"
                    />

                    {activeDropdown === "depart" && (
                      <div
                        style={{
                          position: "absolute",
                          top: "100%",
                          left: 0,
                          width: "260px",
                          background: "var(--color-warm-white)",
                          border: "1px solid var(--color-sandstone-light)",
                          boxShadow: "0 12px 36px rgba(14,12,10,0.12)",
                          zIndex: 50,
                          marginTop: "8px",
                          padding: "0.5rem 0",
                          maxHeight: "220px",
                          overflowY: "auto",
                        }}
                        className="no-scrollbar"
                      >
                        {dateOptions.map((opt) => (
                          <button
                            key={opt}
                            onClick={() => {
                              setCheckout(opt);
                              setActiveDropdown("guests"); // Auto-advance to guests
                            }}
                            className="w-full text-left px-5 py-3 text-xs tracking-wider transition-colors duration-150 hover:bg-cream"
                            style={{
                              background: "transparent",
                              border: "none",
                              fontFamily: "var(--font-sans)",
                              fontWeight: checkout === opt ? 500 : 300,
                              color: "var(--color-charcoal)",
                              cursor: "pointer",
                            }}
                          >
                            {opt}
                          </button>
                        ))}
                      </div>
                    )}
                  </div>

                  <div
                    className="hidden md:block w-px my-3"
                    style={{ background: "var(--color-sandstone-pale)" }}
                  />

                  {/* Segment 4: Guests */}
                  <div className="md:w-[155px] relative">
                    <SearchField
                      label="Guests"
                      placeholder="Add guests"
                      value={guestsLabel}
                      isActive={activeDropdown === "guests"}
                      onClick={() =>
                        setActiveDropdown(
                          activeDropdown === "guests" ? null : "guests"
                        )
                      }
                      style={{
                        borderBottom: "1px solid var(--color-sandstone-pale)",
                      }}
                      className="md:border-b-0"
                    />

                    {activeDropdown === "guests" && (
                      <div
                        style={{
                          position: "absolute",
                          top: "100%",
                          right: 0,
                          width: "280px",
                          background: "var(--color-warm-white)",
                          border: "1px solid var(--color-sandstone-light)",
                          boxShadow: "0 12px 36px rgba(14,12,10,0.12)",
                          zIndex: 50,
                          marginTop: "8px",
                          padding: "1.25rem",
                        }}
                        onClick={(e) => e.stopPropagation()} // Keep click inside
                      >
                        {/* Adults Row */}
                        <div className="flex items-center justify-between mb-4">
                          <div>
                            <p
                              className="text-xs font-medium"
                              style={{ color: "var(--color-charcoal)" }}
                            >
                              Adults
                            </p>
                            <p
                              className="text-[10px]"
                              style={{ color: "var(--color-charcoal-faint)" }}
                            >
                              Age 13 or above
                            </p>
                          </div>
                          <div className="flex items-center gap-3">
                            <button
                              onClick={() => setAdults(Math.max(1, adults - 1))}
                              disabled={adults <= 1}
                              style={{
                                width: "24px",
                                height: "24px",
                                borderRadius: "50%",
                                border:
                                  "1px solid var(--color-sandstone-light)",
                                background: "transparent",
                                cursor: "pointer",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                fontSize: "14px",
                                opacity: adults <= 1 ? 0.4 : 1,
                              }}
                            >
                              -
                            </button>
                            <span className="text-xs w-4 text-center font-light">
                              {adults}
                            </span>
                            <button
                              onClick={() => setAdults(adults + 1)}
                              style={{
                                width: "24px",
                                height: "24px",
                                borderRadius: "50%",
                                border:
                                  "1px solid var(--color-sandstone-light)",
                                background: "transparent",
                                cursor: "pointer",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                fontSize: "14px",
                              }}
                            >
                              +
                            </button>
                          </div>
                        </div>

                        {/* Children Row */}
                        <div className="flex items-center justify-between mb-4">
                          <div>
                            <p
                              className="text-xs font-medium"
                              style={{ color: "var(--color-charcoal)" }}
                            >
                              Children
                            </p>
                            <p
                              className="text-[10px]"
                              style={{ color: "var(--color-charcoal-faint)" }}
                            >
                              Ages 2–12
                            </p>
                          </div>
                          <div className="flex items-center gap-3">
                            <button
                              onClick={() =>
                                setChildrenCount(
                                  Math.max(0, childrenCount - 1)
                                )
                              }
                              disabled={childrenCount <= 0}
                              style={{
                                width: "24px",
                                height: "24px",
                                borderRadius: "50%",
                                border:
                                  "1px solid var(--color-sandstone-light)",
                                background: "transparent",
                                cursor: "pointer",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                fontSize: "14px",
                                opacity: childrenCount <= 0 ? 0.4 : 1,
                              }}
                            >
                              -
                            </button>
                            <span className="text-xs w-4 text-center font-light">
                              {childrenCount}
                            </span>
                            <button
                              onClick={() => setChildrenCount(childrenCount + 1)}
                              style={{
                                width: "24px",
                                height: "24px",
                                borderRadius: "50%",
                                border:
                                  "1px solid var(--color-sandstone-light)",
                                background: "transparent",
                                cursor: "pointer",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                fontSize: "14px",
                              }}
                            >
                              +
                            </button>
                          </div>
                        </div>

                        <button
                          onClick={() => setActiveDropdown(null)}
                          className="w-full mt-2 text-[10px] uppercase tracking-wider font-medium text-center py-2 text-warm-white hover:bg-opacity-90"
                          style={{
                            border: "none",
                            background: "var(--color-charcoal)",
                            cursor: "pointer",
                          }}
                        >
                          Apply
                        </button>
                      </div>
                    )}
                  </div>

                  {/* Search Action Button */}
                  <SearchButton onClick={handleSearch} />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll cue */}
        <div
          className="absolute right-6 md:right-16 animate-fade-in delay-600 flex flex-col items-center gap-2"
          style={{ bottom: "clamp(2rem, 5vh, 4rem)", opacity: 0 }}
        >
          <span
            style={{
              fontFamily: "var(--font-sans)",
              fontSize: "9px",
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              color: "rgba(250,248,245,0.4)",
              writingMode: "vertical-rl",
            }}
          >
            Scroll
          </span>
          <div
            style={{
              width: "1px",
              height: "40px",
              background: "rgba(250,248,245,0.25)",
            }}
          />
        </div>
      </div>
    </section>
  );
}

function SearchField({
  label,
  value,
  placeholder,
  isActive,
  onClick,
  style = {},
  className = "",
}: {
  label: string;
  value: string;
  placeholder: string;
  isActive: boolean;
  onClick: () => void;
  style?: React.CSSProperties;
  className?: string;
}) {
  return (
    <div
      className={`transition-colors duration-200 hover:bg-[rgba(44,42,40,0.02)] ${className}`}
      onClick={onClick}
      style={{
        padding: "18px 24px",
        background: isActive ? "rgba(44,42,40,0.02)" : "transparent",
        cursor: "pointer",
        ...style,
      }}
    >
      <p
        style={{
          fontFamily: "var(--font-sans)",
          fontSize: "9px",
          letterSpacing: "0.18em",
          textTransform: "uppercase",
          color: isActive ? "var(--color-sage)" : "var(--color-charcoal-faint)",
          fontWeight: 500,
          marginBottom: "6px",
          transition: "color 0.2s ease",
        }}
      >
        {label}
      </p>
      <div
        style={{
          fontFamily: "var(--font-sans)",
          fontSize: "13px",
          fontWeight: 300,
          color: value ? "var(--color-charcoal)" : "var(--color-warm-gray)",
          whiteSpace: "nowrap",
          overflow: "hidden",
          textOverflow: "ellipsis",
        }}
      >
        {value || placeholder}
      </div>
    </div>
  );
}

function SearchButton({ onClick }: { onClick: () => void }) {
  const [hovered, setHovered] = useState(false);
  return (
    <button
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onClick={onClick}
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        gap: "10px",
        padding: "0 36px",
        background: hovered ? "var(--color-charcoal-light)" : "var(--color-sage)",
        color: "var(--color-warm-white)",
        border: "none",
        cursor: "pointer",
        fontFamily: "var(--font-sans)",
        fontSize: "10px",
        letterSpacing: "0.18em",
        textTransform: "uppercase",
        fontWeight: 500,
        whiteSpace: "nowrap",
        transition: "all 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
        flexShrink: 0,
        minWidth: "140px",
        minHeight: "72px",
      }}
    >
      <svg
        width="13"
        height="13"
        viewBox="0 0 14 14"
        fill="none"
        style={{
          transform: hovered ? "scale(1.1) rotate(5deg)" : "scale(1)",
          transition: "transform 0.3s ease",
        }}
      >
        <circle cx="6" cy="6" r="4.5" stroke="currentColor" strokeWidth="1.2" />
        <path
          d="M9.5 9.5L12.5 12.5"
          stroke="currentColor"
          strokeWidth="1.2"
          strokeLinecap="round"
        />
      </svg>
      Search
    </button>
  );
}
