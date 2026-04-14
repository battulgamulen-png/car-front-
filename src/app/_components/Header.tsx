export default function Header() {
  const categories = ["SUV", "Sedan", "Sport", "Hyper"];

  return (
    <header className="relative overflow-hidden border-b border-white/10 bg-black text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(249,115,22,0.28),_transparent_30%),radial-gradient(circle_at_85%_15%,_rgba(56,189,248,0.18),_transparent_24%),linear-gradient(180deg,_rgba(255,255,255,0.04),_rgba(255,255,255,0))]" />
      <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-orange-300/60 to-transparent" />

      <div className="relative mx-auto max-w-7xl px-4 py-4 sm:px-6 lg:px-8">
        <div className="rounded-[28px] border border-white/10 bg-white/[0.04] px-4 py-4 shadow-[0_24px_80px_rgba(0,0,0,0.45)] backdrop-blur-xl sm:px-5 lg:px-6">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
            <div className="flex items-center gap-4">
              <div>
                <p className="text-lg font-semibold uppercase tracking-[0.22em] text-white">
                  Auto Mart
                </p>
                <div className="mt-1 flex items-center gap-2 text-[11px] uppercase tracking-[0.28em] text-white/45">
                  <span>Luxury Cars</span>
                  <span className="h-1 w-1 rounded-full bg-orange-300/80" />
                  <span>2026 Collection</span>
                </div>
              </div>
            </div>

            <nav className="flex flex-wrap items-center gap-2 lg:justify-center">
              {categories.map((category) => (
                <a
                  key={category}
                  href="#"
                  className="rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-xs font-medium uppercase tracking-[0.22em] text-white/70 transition hover:border-orange-300/60 hover:bg-orange-300/10 hover:text-white"
                >
                  {category}
                </a>
              ))}
            </nav>

            <div className="flex items-center gap-3">
              <button className="hidden rounded-full border border-white/15 bg-white/[0.03] px-4 py-2 text-sm font-medium text-white/75 transition hover:border-white/30 hover:text-white md:inline-flex">
                Log in
              </button>
              <button className="rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-neutral-950 transition hover:bg-orange-200">
                Book a test drive
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
