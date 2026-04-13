const navItems = ["Inventory", "Formula 1", "Garage Stories"];
const highlights = [
  { label: "Curated Models", value: "24" },
  { label: "Track Editions", value: "08" },
  { label: "Launches This Month", value: "03" },
];
export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-neutral-950 pb-18 text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(249,115,22,0.38),_transparent_33%),radial-gradient(circle_at_right,_rgba(56,189,248,0.18),_transparent_30%),linear-gradient(180deg,_rgba(10,10,10,0.94)_0%,_rgba(10,10,10,1)_100%)]" />
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-orange-300 to-transparent" />
      <div className="absolute right-[-8rem] top-24 h-72 w-72 rounded-full bg-orange-400/10 blur-3xl" />

      <div className="relative mx-auto grid max-w-6xl gap-10 px-6 pb-4 pt-14 lg:grid-cols-[minmax(0,1fr)_320px] lg:items-end">
        <div className="max-w-3xl">
          <span className="inline-flex rounded-full border border-white/10 bg-white/8 px-4 py-2 text-xs font-medium uppercase tracking-[0.28em] text-orange-200">
            Track-inspired design
          </span>
          <h1 className="mt-5 text-4xl font-semibold tracking-tight text-white sm:text-5xl lg:text-6xl">
            Cars that feel fast before the engine even starts.
          </h1>
          <p className="mt-5 max-w-2xl text-base leading-7 text-white/70 sm:text-lg">
            Premium inventory, racing energy, and a stronger first impression
            for the section right under your header.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <button className="rounded-full bg-orange-400 px-6 py-3 text-sm font-semibold text-neutral-950 transition hover:bg-orange-300">
              Explore collection
            </button>
            <button className="rounded-full border border-white/15 px-6 py-3 text-sm font-semibold text-white transition hover:border-white/35 hover:bg-white/5">
              View race stories
            </button>
          </div>
        </div>

        <div className="rounded-[2rem] border border-white/10 bg-white/10 p-6 backdrop-blur">
          <p className="text-xs font-medium uppercase tracking-[0.28em] text-white/45">
            Featured Snapshot
          </p>
          <div className="mt-5 space-y-4">
            {highlights.map((item) => (
              <div
                key={item.label}
                className="flex items-center justify-between border-b border-white/10 pb-3 last:border-b-0 last:pb-0"
              >
                <span className="text-sm text-white/65">{item.label}</span>
                <span className="text-lg font-semibold text-white">
                  {item.value}
                </span>
              </div>
            ))}
          </div>
          <p className="mt-6 text-sm leading-6 text-white/65">
            Separate hero section with stronger contrast and more visual weight,
            while keeping the header component unchanged above it.
          </p>
        </div>
      </div>

      <div className="relative mx-auto mt-10 grid max-w-6xl gap-4 px-6 sm:grid-cols-3">
        {navItems.map((item, index) => (
          <div
            key={item}
            className="rounded-3xl border border-white/10 bg-white/6 px-5 py-4 backdrop-blur"
          >
            <p className="text-xs uppercase tracking-[0.3em] text-white/40">
              0{index + 1}
            </p>
            <p className="mt-2 text-lg font-medium text-white">{item}</p>
            <p className="mt-2 text-sm leading-6 text-white/60">
              Designed to keep the hero area feeling alive even before the rest
              of the page is filled in.
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
