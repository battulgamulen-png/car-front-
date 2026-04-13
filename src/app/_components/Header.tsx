const navItems = ["Inventory", "Formula 1", "Garage Stories"];

export default function Header() {
  return (
    <header className="relative border-b border-white/10 bg-neutral-950 text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(249,115,22,0.22),_transparent_30%),radial-gradient(circle_at_right,_rgba(56,189,248,0.12),_transparent_28%)]" />
      <div className="relative mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
        <div className="flex items-center gap-3">
          <span className="flex h-11 w-11 items-center justify-center rounded-2xl border border-white/10 bg-white/10 text-sm font-semibold tracking-[0.35em] text-orange-300">
            C
          </span>
          <div>
            <p className="text-lg font-semibold tracking-[0.18em] text-white">
              CARS
            </p>
            <p className="text-xs uppercase tracking-[0.28em] text-white/45">
              Performance Club
            </p>
          </div>
        </div>

        <nav className="hidden items-center gap-8 text-sm text-white/70 md:flex">
          {navItems.map((item) => (
            <a
              key={item}
              href="#"
              className="transition hover:text-white"
            >
              {item}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <button className="hidden rounded-full border border-white/15 px-4 py-2 text-sm font-medium text-white/80 transition hover:border-white/30 hover:text-white md:inline-flex">
            Log in
          </button>
          <button className="rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-neutral-950 transition hover:bg-orange-200">
            Start driving
          </button>
        </div>
      </div>
    </header>
  );
}
