import { useEffect, useState } from "react";

// Simple parallax scene made using layered SVG silhouettes to evoke green pixel mountains and trees
export default function ParallaxScene() {
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const onScroll = () => setOffset(window.scrollY || 0);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const layer = (children, speed) => (
    <div
      className="absolute inset-x-0"
      style={{
        transform: `translateY(${offset * speed}px)`,
        willChange: "transform",
      }}
    >
      {children}
    </div>
  );

  return (
    <section id="about" className="relative w-full h-[120vh] overflow-hidden bg-gradient-to-b from-emerald-900 via-emerald-950 to-black">
      {/* Sky shimmer pixels */}
      {layer(
        <div className="h-[120vh]" style={{
          backgroundImage:
            "repeating-linear-gradient(0deg, rgba(255,255,255,0.05) 0px, rgba(255,255,255,0.05) 1px, transparent 1px, transparent 3px)",
          imageRendering: "pixelated",
        }} />, 0.05)}

      {/* Far mountains */}
      {layer(
        <MountainBand height={280} color="#065f46" opacity={0.6} pixel />,
        0.12
      )}

      {/* Mid mountains */}
      {layer(
        <MountainBand height={340} color="#047857" opacity={0.85} pixel />,
        0.22
      )}

      {/* Near mountains */}
      {layer(
        <MountainBand height={420} color="#059669" opacity={1} pixel jagged />,
        0.32
      )}

      {/* Tree line foreground */}
      {layer(
        <TreeLine height={260} color="#10b981" />, 0.45
      )}

      <div className="relative z-10 mx-auto max-w-6xl px-4 pt-24">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-white drop-shadow-[0_2px_0_rgba(0,0,0,0.5)]">
          About the Artist
        </h2>
        <p className="mt-4 max-w-2xl text-white/80">
          I specialize in building side-scrolling worlds with lush parallax, punchy palettes,
          and animation that pops. From concept to in-engine implementation, I deliver game-ready
          assets and scenes that feel alive.
        </p>
      </div>
    </section>
  );
}

function MountainBand({ height = 300, color = "#065f46", opacity = 1, pixel = false, jagged = false }) {
  const path = jagged
    ? "M0 120 L60 100 L120 140 L180 90 L240 150 L300 110 L360 160 L420 120 L480 170 L540 130 L600 180 L660 140 L720 200 L780 150 L840 210 L900 160 L960 220 L1020 170 L1080 230 L1140 180 L1200 240 L1260 200 L1320 250 L1380 210 L1440 260 L1440 320 L0 320 Z"
    : "M0 200 C 200 120, 400 280, 600 200 C 800 120, 1000 280, 1200 200 C 1300 160, 1400 240, 1440 220 L1440 320 L0 320 Z";
  const svg = (
    <svg viewBox="0 0 1440 320" preserveAspectRatio="none" className="w-full" style={{ height }}>
      <path d={path} fill={color} fillOpacity={opacity} />
    </svg>
  );
  return (
    <div className="absolute bottom-0 left-0 right-0" style={{ imageRendering: pixel ? "pixelated" : "auto" }}>
      {svg}
    </div>
  );
}

function TreeLine({ height = 220, color = "#10b981" }) {
  // Generate a repeating pixel-tree strip using inline SVG
  const pattern = encodeURIComponent(
    `<svg xmlns='http://www.w3.org/2000/svg' width='64' height='64' viewBox='0 0 64 64'>
      <rect width='64' height='64' fill='none'/>
      <g fill='${color}'>
        <rect x='6' y='36' width='4' height='16' />
        <rect x='2' y='32' width='12' height='6' />
        <rect x='8' y='28' width='8' height='6' />

        <rect x='30' y='34' width='4' height='18' />
        <rect x='24' y='30' width='16' height='6' />
        <rect x='28' y='26' width='10' height='6' />

        <rect x='50' y='38' width='4' height='14' />
        <rect x='46' y='34' width='12' height='6' />
        <rect x='50' y='30' width='8' height='6' />
      </g>
    </svg>`
  );
  return (
    <div className="absolute bottom-0 left-0 right-0" style={{ height }}>
      <div
        className="w-[200%] h-full"
        style={{
          backgroundImage: `url("data:image/svg+xml,${pattern}")`,
          backgroundRepeat: "repeat-x",
          backgroundSize: "64px 64px",
          imageRendering: "pixelated",
        }}
      />
      <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/70 to-transparent pointer-events-none" />
    </div>
  );
}
