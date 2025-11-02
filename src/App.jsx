import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import ParallaxScene from "./components/ParallaxScene";
import Projects from "./components/Projects";

function App() {
  return (
    <div className="min-h-screen bg-black text-white font-['Inter','IBM Plex Sans','Manrope',system-ui]">
      <Navbar />
      <Hero />
      <ParallaxScene />
      <Projects />

      {/* Footer */}
      <footer id="contact" className="border-t border-white/10 bg-black py-10">
        <div className="mx-auto max-w-6xl px-4 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white/70 text-sm">© {new Date().getFullYear()} Pixel Peaks — 2D/Pixel Art Portfolio</p>
          <a
            href="mailto:hello@pixelpeaks.dev"
            className="inline-flex items-center rounded-md bg-emerald-500 px-4 py-2 font-semibold shadow-lg shadow-emerald-500/30 hover:bg-emerald-400 transition-colors"
          >
            hello@pixelpeaks.dev
          </a>
        </div>
      </footer>
    </div>
  );
}

export default App;
