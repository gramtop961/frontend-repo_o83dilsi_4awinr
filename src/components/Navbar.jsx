import { Rocket, Star } from "lucide-react";

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur bg-black/30 border-b border-white/10">
      <nav className="mx-auto max-w-6xl px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Rocket className="w-5 h-5 text-emerald-400" />
          <span className="font-semibold tracking-wide text-white">Pixel Peaks</span>
        </div>
        <div className="flex items-center gap-6 text-sm text-white/80">
          <a href="#work" className="hover:text-white transition-colors flex items-center gap-1">
            <Star className="w-4 h-4 text-yellow-400" /> Work
          </a>
          <a href="#about" className="hover:text-white transition-colors">About</a>
          <a href="#contact" className="hover:text-white transition-colors">Contact</a>
        </div>
      </nav>
    </header>
  );
}
