export default function Layout() {
  return (
    <div id="main-content" className="topo-bg min-h-screen w-full text-white flex flex-col relative justify-center">
      {/* ── Main heading ── */}
      <div className="text-center pt-8 z-10">
        <h1 className="font-display font-extrabold text-[66px] md:text-[82px] leading-[0.92] tracking-wide uppercase">
          <span className="text-white">ALWAYS </span>
          <span className="text-f1-red">BUILDING</span>
        </h1>
        <h2 className="font-display font-extrabold text-[66px] md:text-[82px] leading-[0.92] tracking-wide uppercase">
          <span className="text-white">THE </span>
          <span className="text-f1-red">FUTURE</span>
        </h2>
      </div>

      {/* ── Middle three-column area ── */}
      <div className="flex flex-1 items-center justify-between px-8 md:px-16 z-10">
        {/* Left — Pages nav */}
        <div className="flex flex-col gap-1">
          <span className="font-tech text-f1-red text-[11px] md:text-[13px] tracking-[0.25em] uppercase mb-2">
            PAGES
          </span>
          <span className="font-nav font-black text-white text-[26px] md:text-[32px] leading-tight tracking-[0.12em] uppercase">
            HOME
          </span>
          <span className="font-nav font-black text-white text-[26px] md:text-[32px] leading-tight tracking-[0.12em] uppercase">
            ABOUT US
          </span>
          <span className="font-nav font-black text-white text-[26px] md:text-[32px] leading-tight tracking-[0.12em] uppercase">
            TIMELINE
          </span>
        </div>

        {/* Center — Helmet image (enlarged) */}
        <div className="flex items-center justify-center flex-shrink-0">
          <img
            src="/End.svg"
            alt="Red Bull Helmet"
            className="w-[380px] md:w-[500px] lg:w-[560px] drop-shadow-2xl object-contain"
            draggable="false"
          />
        </div>

        {/* Right — Social links */}
        <div className="flex flex-col gap-1 text-right">
          <span className="font-tech text-f1-red text-[11px] md:text-[13px] tracking-[0.25em] uppercase mb-2">
            FOLLOW ON
          </span>
          <span className="font-nav font-black text-white text-[26px] md:text-[32px] leading-tight tracking-[0.12em] uppercase">
            INSATGRAM
          </span>
          <span className="font-nav font-black text-white text-[26px] md:text-[32px] leading-tight tracking-[0.12em] uppercase">
            LINKED IN
          </span>
        </div>
      </div>

      {/* ── Footer bar ── */}
      <div className="flex items-center justify-between px-8 md:px-16 pb-4 z-10">
        <span className="font-tech text-[12px] md:text-[14px] tracking-[0.3em] uppercase text-white/80">
          ENGINEERED
        </span>
        <span className="text-[12px] md:text-[14px] tracking-wider text-white/70">
          <span className="font-display italic">By the </span>
          <span className="font-tech tracking-[0.18em] uppercase">
            TECHNICAL BOARD
          </span>
        </span>
        <span className="font-tech text-[12px] md:text-[14px] tracking-[0.3em] uppercase text-white/80">
          DEVELOPED
        </span>
      </div>
    </div>
  );
}
