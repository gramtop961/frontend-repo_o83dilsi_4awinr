import React from 'react';
import { Rocket, Star } from 'lucide-react';

const projects = [
  {
    title: 'Forest Runner',
    tag: 'Pixel Platformer',
    desc: 'A snappy runner through emerald peaks with crunchy SFX and dynamic parallax.',
    accent: 'emerald',
  },
  {
    title: 'Mountain Echoes',
    tag: 'Atmospheric Adventure',
    desc: 'Climb, camp, and listen to the wind — a moody 2D exploration with shaders.',
    accent: 'sky',
  },
  {
    title: 'Pine Valley Tactics',
    tag: 'Turn-based',
    desc: 'Grid-based combat with tiny sprites and big strategy in a serene valley.',
    accent: 'lime',
  },
];

const accentMap = {
  emerald: {
    border: 'border-emerald-400',
    bg: 'bg-emerald-500/10',
    shadow: 'shadow-[0_6px_0_#059669]',
    text: 'text-emerald-200',
    pill: 'bg-emerald-600/20 text-emerald-200 border-emerald-400',
  },
  sky: {
    border: 'border-sky-400',
    bg: 'bg-sky-500/10',
    shadow: 'shadow-[0_6px_0_#0284c7]',
    text: 'text-sky-200',
    pill: 'bg-sky-600/20 text-sky-200 border-sky-400',
  },
  lime: {
    border: 'border-lime-400',
    bg: 'bg-lime-500/10',
    shadow: 'shadow-[0_6px_0_#65a30d]',
    text: 'text-lime-200',
    pill: 'bg-lime-600/20 text-lime-200 border-lime-400',
  },
};

function ProjectCard({ p }) {
  const theme = accentMap[p.accent] || accentMap.emerald;
  return (
    <div
      className={`group rounded border-2 ${theme.border} ${theme.bg} p-5 ${theme.shadow} transition-all hover:-translate-y-1`}
    >
      <div className="flex items-center justify-between">
        <h3 className="font-extrabold text-xl text-white drop-shadow-[0_3px_0_rgba(0,0,0,0.25)]">
          {p.title}
        </h3>
        <div className={`flex items-center gap-1 rounded-full border px-2 py-1 text-xs ${theme.pill}`}>
          <Star size={14} />
          <span>{p.tag}</span>
        </div>
      </div>
      <p className="mt-3 text-slate-200 text-sm leading-relaxed">{p.desc}</p>
      <button className={`mt-4 inline-flex items-center gap-2 rounded border-2 ${theme.border} px-4 py-2 ${theme.text} ${theme.bg} transition active:translate-y-[2px]`}>
        <Rocket size={16} />
        View Case Study
      </button>
    </div>
  );
}

export default function ProjectsGrid() {
  return (
    <section id="work" className="relative z-10 bg-slate-950 py-20">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="text-3xl md:text-5xl font-extrabold text-white text-center drop-shadow-[0_4px_0_#0f172a]">
          Featured Worlds
        </h2>
        <p className="mt-4 text-center text-slate-300 max-w-3xl mx-auto">
          A selection of small but mighty games — tuned feel, sharp pixels, and layered scenes.
        </p>
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p) => (
            <ProjectCard key={p.title} p={p} />
          ))}
        </div>
      </div>
    </section>
  );
}
