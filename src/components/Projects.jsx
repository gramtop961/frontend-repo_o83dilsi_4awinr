export default function Projects() {
  const items = [
    {
      title: "Forest Run",
      desc: "Endless runner tileset with dynamic parallax and reactive VFX.",
      tags: ["Tileset", "Parallax", "VFX"],
    },
    {
      title: "Mountain Quest",
      desc: "JRPG overworld with day/night palette swaps and sprites.",
      tags: ["Overworld", "Palette", "Sprites"],
    },
    {
      title: "Retro UI Kit",
      desc: "Game-ready HUD, buttons, and dialogue windows.",
      tags: ["UI", "HUD", "Kit"],
    },
  ];

  return (
    <section id="work" className="relative bg-black py-20">
      <div className="mx-auto max-w-6xl px-4">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-white">Selected Work</h2>
        <p className="mt-3 text-white/70 max-w-2xl">
          A few examples of pixel art packs and in-engine scenes. Each piece is optimized for
          crisp scaling and real-time performance.
        </p>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((it) => (
            <Card key={it.title} title={it.title} desc={it.desc} tags={it.tags} />
          ))}
        </div>
      </div>
    </section>
  );
}

function Card({ title, desc, tags }) {
  return (
    <div className="group relative rounded-lg border border-emerald-400/30 bg-gradient-to-br from-emerald-950 to-emerald-900/40 p-5 shadow-[0_0_0_2px_rgba(16,185,129,0.08)_inset]">
      {/* Pixel-border accent */}
      <div className="absolute -inset-[2px] rounded-lg bg-[repeating-linear-gradient(90deg,rgba(16,185,129,0.15)_0px,rgba(16,185,129,0.15)_2px,transparent_2px,transparent_4px)] opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
      <div className="relative">
        <div className="h-36 rounded-md overflow-hidden border border-white/10 bg-[radial-gradient(circle_at_30%_20%,rgba(16,185,129,0.35),transparent_40%),radial-gradient(circle_at_80%_60%,rgba(59,130,246,0.25),transparent_40%)]" style={{ imageRendering: 'pixelated' }} />
        <h3 className="mt-4 text-xl font-bold text-white">{title}</h3>
        <p className="mt-2 text-sm text-white/75">{desc}</p>
        <div className="mt-4 flex flex-wrap gap-2">
          {tags.map((t) => (
            <span key={t} className="text-xs font-semibold text-emerald-200 bg-emerald-900/50 border border-emerald-400/30 rounded px-2 py-1" style={{ imageRendering: 'pixelated' }}>
              {t}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
