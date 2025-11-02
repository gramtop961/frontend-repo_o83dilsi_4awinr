import React from 'react';
import { Github, Mail, Twitter } from 'lucide-react';

export default function ContactFooter() {
  return (
    <footer id="contact" className="bg-emerald-950 text-emerald-100">
      <div className="mx-auto max-w-6xl px-6 py-14">
        <div className="grid gap-8 md:grid-cols-3 items-center">
          <div className="md:col-span-2">
            <h3 className="text-2xl font-extrabold drop-shadow-[0_3px_0_#064e3b]">Let's build your next pixel world</h3>
            <p className="mt-2 text-emerald-200/90">
              Available for freelance work, prototypes, shaders, and juicy feel passes.
            </p>
          </div>
          <div className="flex gap-3 md:justify-end">
            <a
              href="mailto:hello@example.com"
              className="rounded border-2 border-emerald-400 bg-emerald-500/10 px-4 py-2 text-emerald-200 shadow-[0_4px_0_#059669] transition active:translate-y-[2px]"
            >
              <span className="inline-flex items-center gap-2"><Mail size={18} /> Email</span>
            </a>
            <a
              href="https://github.com/"
              target="_blank"
              rel="noreferrer"
              className="rounded border-2 border-emerald-400 bg-emerald-500/10 px-4 py-2 text-emerald-200 shadow-[0_4px_0_#059669] transition active:translate-y-[2px]"
            >
              <span className="inline-flex items-center gap-2"><Github size={18} /> GitHub</span>
            </a>
            <a
              href="https://twitter.com/"
              target="_blank"
              rel="noreferrer"
              className="rounded border-2 border-emerald-400 bg-emerald-500/10 px-4 py-2 text-emerald-200 shadow-[0_4px_0_#059669] transition active:translate-y-[2px]"
            >
              <span className="inline-flex items-center gap-2"><Twitter size={18} /> Twitter</span>
            </a>
          </div>
        </div>
        <div className="mt-10 h-2 bg-[repeating-linear-gradient(90deg,#064e3b_0_16px,#0d9488_16px_32px)]" />
        <p className="mt-6 text-xs text-emerald-300/70">© {new Date().getFullYear()} Your Name — Built with love for pixels.</p>
      </div>
    </footer>
  );
}
