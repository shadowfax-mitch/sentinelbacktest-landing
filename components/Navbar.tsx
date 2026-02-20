'use client';

import { useState } from 'react';
import Link from 'next/link';

const navLinks = [
  { label: 'Products', href: '/products' },
  { label: 'Blog', href: '/blog' },
  { label: 'Research', href: '/research' },
  { label: 'Tools', href: '/tools' },
  { label: 'About', href: '/about' },
  { label: 'Newsletter', href: '/#waitlist' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-slate-950/80 backdrop-blur-md border-b border-slate-800/50">
      <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 text-white font-bold text-lg hover:text-blue-400 transition-colors">
          <span className="text-blue-400 text-xl">📊</span>
          <span>Sentinel Algo</span>
        </Link>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="text-slate-300 hover:text-white text-sm font-medium transition-colors"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="https://twitter.com/Sentinel_Algo"
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-300 hover:text-blue-400 text-sm font-medium transition-colors"
          >
            𝕏 Follow
          </Link>
        </div>

        {/* Mobile hamburger */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-slate-300 hover:text-white p-2"
          aria-label="Toggle menu"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {open ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-slate-950/95 backdrop-blur-md border-b border-slate-800/50 px-4 pb-4">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              onClick={() => setOpen(false)}
              className="block py-3 text-slate-300 hover:text-white text-sm font-medium transition-colors border-b border-slate-800/30 last:border-0"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="https://twitter.com/Sentinel_Algo"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setOpen(false)}
            className="block py-3 text-blue-400 hover:text-blue-300 text-sm font-medium transition-colors"
          >
            𝕏 Follow @Sentinel_Algo
          </Link>
        </div>
      )}
    </nav>
  );
}
