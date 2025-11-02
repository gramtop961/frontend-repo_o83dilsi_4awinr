import React, { useEffect, useRef, useState } from 'react';

// Utility to create data URI for inline SVG backgrounds
const svgToDataUri = (svg) => `url("data:image/svg+xml,${encodeURIComponent(svg)}")`;

export default function ParallaxMountains() {
  const [offset, setOffset] = useState(0);
  const rafRef = useRef(0);

  useEffect(() => {
    const onScroll = () => {
      // use rAF for smoothness
      cancelAnimationFrame(rafRef.current);
      rafRef.current = requestAnimationFrame(() => setOffset(window.scrollY));
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', onScroll);
      cancelAnimationFrame(rafRef.current);
    };
  }, []);

  // SVG layers (simple pixel-styled shapes)
  const skyGradient = 'linear-gradient(to bottom, #022c22, #064e3b 40%, #0b6b4a)';

  const farMountainsSVG = `
    <svg xmlns='http://www.w3.org/2000/svg' width='600' height='200' viewBox='0 0 600 200'>
      <rect width='600' height='200' fill='none' />
      <path d='M0 160 L60 120 L110 155 L170 110 L230 150 L300 100 L360 150 L430 115 L490 155 L550 120 L600 160 L600 200 L0 200 Z' fill='#0b4f3a'/>
    </svg>
  `;

  const midMountainsSVG = `
    <svg xmlns='http://www.w3.org/2000/svg' width='600' height='200' viewBox='0 0 600 200'>
      <rect width='600' height='200' fill='none' />
      <path d='M0 170 L50 140 L95 168 L145 130 L195 165 L245 125 L295 160 L345 132 L395 168 L445 138 L495 170 L600 170 L600 200 L0 200 Z' fill='#0f7a52'/>
    </svg>
  `;

  const treesSVG = `
    <svg xmlns='http://www.w3.org/2000/svg' width='200' height='120' viewBox='0 0 200 120'>
      <rect width='200' height='120' fill='none' />
      <!-- Tree 1 -->
      <rect x='18' y='70' width='8' height='30' fill='#3b2f2f' />
      <polygon points='22,40 5,70 39,70' fill='#10b981' />
      <polygon points='22,54 9,78 35,78' fill='#059669' />

      <!-- Tree 2 -->
      <rect x='98' y='66' width='8' height='34' fill='#3b2f2f' />
      <polygon points='102,36 85,66 119,66' fill='#34d399' />
      <polygon points='102,50 90,74 116,74' fill='#10b981' />

      <!-- Tree 3 -->
      <rect x='158' y='74' width='8' height='26' fill='#3b2f2f' />
      <polygon points='162,48 147,74 177,74' fill='#22c55e' />
      <polygon points='162,58 151,80 173,80' fill='#16a34a' />
    </svg>
  `;

  const grassSVG = `
    <svg xmlns='http://www.w3.org/2000/svg' width='80' height='20' viewBox='0 0 80 20'>
      <rect width='80' height='20' fill='#065f46' />
      <path d='M0 20 L5 12 L10 20 M10 20 L15 11 L20 20 M20 20 L25 12 L30 20 M30 20 L35 11 L40 20 M40 20 L45 12 L50 20 M50 20 L55 11 L60 20 M60 20 L65 12 L70 20 M70 20 L75 11 L80 20' stroke='#10b981' stroke-width='2' fill='none'/>
    </svg>
  `;

  const farY = Math.round(offset * 0.1);
  const midY = Math.round(offset * 0.2);
  const treeY = Math.round(offset * 0.35);
  const fgY = Math.round(offset * 0.5);

  return (
    <section aria-label="Parallax Mountains" className="relative w-full bg-emerald-900 text-white">
      {/* Sky */}
      <div className="absolute inset-0" style={{ backgroundImage: skyGradient }} />

      {/* Distant mountains */}
      <div
        className="absolute left-0 right-0 h-[40vh] top-[10vh]"
        style={{
          backgroundImage: svgToDataUri(farMountainsSVG),
          backgroundRepeat: 'repeat-x',
          backgroundSize: 'auto 100%',
          transform: `translateY(${farY}px)`,
        }}
      />

      {/* Mid mountains */}
      <div
        className="absolute left-0 right-0 h-[45vh] top-[25vh]"
        style={{
          backgroundImage: svgToDataUri(midMountainsSVG),
          backgroundRepeat: 'repeat-x',
          backgroundSize: 'auto 100%',
          transform: `translateY(${midY}px)`,
        }}
      />

      {/* Trees layer */}
      <div
        className="absolute left-0 right-0 h-[35vh] top-[45vh]"
        style={{
          backgroundImage: svgToDataUri(treesSVG),
          backgroundRepeat: 'repeat-x',
          backgroundSize: 'auto 100%',
          transform: `translateY(${treeY}px)`,
        }}
      />

      {/* Foreground grass */}
      <div
        className="absolute left-0 right-0 h-[120px] bottom-0"
        style={{
          backgroundImage: svgToDataUri(grassSVG),
          backgroundRepeat: 'repeat-x',
          backgroundSize: 'auto 100%',
          transform: `translateY(${fgY}px)`,
          boxShadow: '0 -8px 0 rgba(0,0,0,0.25) inset',
        }}
      />

      {/* Content over the parallax */}
      <div className="relative z-10 mx-auto max-w-5xl px-6 py-24 md:py-36">
        <h2 className="text-center text-3xl md:text-5xl font-extrabold drop-shadow-[0_4px_0_#064e3b]">
          Green Peaks & Pixel Pines
        </h2>
        <p className="mt-4 text-center text-emerald-100 max-w-3xl mx-auto">
          A playful parallax forest inspired by classic platformers. Scroll to explore the layers — built to evoke
          cozy cartridge-era vibes while showcasing modern craft.
        </p>
      </div>

      {/* Spacer to allow parallax to breathe */}
      <div className="h-[120vh]" />
    </section>
  );
}
