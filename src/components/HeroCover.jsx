import React from 'react';
import Spline from '@splinetool/react-spline';

export default function HeroCover() {
  return (
    <section className="relative h-screen w-full overflow-hidden bg-black">
      {/* Spline 3D cover */}
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/Jd4wcqFfe70N-TXP/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Readability gradient overlay */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/60 via-black/20 to-black/80" />

      {/* Headline */}
      <div className="relative z-10 flex h-full flex-col items-center justify-center text-center px-6">
        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-white drop-shadow-[0_4px_0_#0f172a]">
          Pixel Art Game Dev Portfolio
        </h1>
        <p className="mt-4 max-w-2xl text-base md:text-lg text-slate-200">
          Hi, I craft playful 2D worlds with retro charm — mountains, forests, and adventures in pixels.
        </p>
        <div className="mt-8 flex items-center gap-4">
          <a
            href="#work"
            className="rounded border-2 border-emerald-400 bg-emerald-500/20 px-5 py-2 text-emerald-200 shadow-[0_4px_0_#059669] transition active:translate-y-[2px]"
          >
            See My Work
          </a>
          <a
            href="#contact"
            className="rounded border-2 border-sky-400 bg-sky-500/20 px-5 py-2 text-sky-200 shadow-[0_4px_0_#0284c7] transition active:translate-y-[2px]"
          >
            Get In Touch
          </a>
        </div>
      </div>

      {/* Pixel ground line for vibe */}
      <div className="absolute bottom-0 left-0 right-0 h-3 bg-[repeating-linear-gradient(90deg,#059669_0_16px,#10b981_16px_32px)] shadow-[0_-6px_0_0_rgba(0,0,0,0.3)]" />
    </section>
  );
}
