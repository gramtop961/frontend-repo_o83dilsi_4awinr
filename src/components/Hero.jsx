import Spline from "@splinetool/react-spline";

export default function Hero() {
  return (
    <section className="relative h-[100vh] w-full overflow-hidden bg-black">
      {/* Spline scene as full-bleed cover */}
      <div className="absolute inset-0" aria-hidden>
        <Spline
          scene="https://prod.spline.design/Jd4wcqFfe70N-TXP/scene.splinecode"
          style={{ width: "100%", height: "100%" }}
        />
      </div>

      {/* Soft gradient vignette to improve text readability (doesn't block interaction) */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/40 via-black/10 to-black/60" />

      {/* Content */}
      <div className="relative z-10 h-full mx-auto max-w-6xl px-4 flex flex-col items-start justify-center text-white">
        <h1 className="text-4xl sm:text-6xl font-extrabold leading-tight drop-shadow-[0_2px_0_rgba(0,0,0,0.6)]">
          2D Pixel Art Worlds
          <br /> Built for Play
        </h1>
        <p className="mt-4 max-w-xl text-white/80 text-lg">
          I craft nostalgic 8-bit and 16-bit experiences with modern polish. Level art, VFX,
          parallax magic, and game-ready assets.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <a
            href="#work"
            className="inline-flex items-center rounded-md bg-emerald-500 px-5 py-2.5 font-semibold shadow-lg shadow-emerald-500/30 hover:bg-emerald-400 transition-colors"
          >
            View Work
          </a>
          <a
            href="#contact"
            className="inline-flex items-center rounded-md border border-white/20 px-5 py-2.5 font-semibold hover:bg-white/10 transition-colors"
          >
            Get in Touch
          </a>
        </div>
      </div>
    </section>
  );
}
