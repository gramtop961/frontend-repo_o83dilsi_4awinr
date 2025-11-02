import React from 'react';
import { Mail, Github, Twitter } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="w-full bg-[#071015] py-10 text-emerald-100">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
          <div>
            <p className="font-extrabold tracking-tight">Made with ❤️ and coffee</p>
            <p className="text-sm text-emerald-200/70">© {new Date().getFullYear()} Your Name</p>
          </div>
          <div className="flex items-center gap-4">
            <a href="#contact" className="inline-flex items-center gap-2 rounded-md border border-emerald-400/30 bg-emerald-500/10 px-3 py-2 text-sm hover:bg-emerald-500/20">
              <Mail className="h-4 w-4" /> Contact
            </a>
            <a href="https://github.com" target="_blank" rel="noreferrer" className="rounded-md p-2 hover:bg-white/5">
              <Github className="h-5 w-5" />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noreferrer" className="rounded-md p-2 hover:bg-white/5">
              <Twitter className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
