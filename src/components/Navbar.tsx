import { useState } from 'react'
import { Zap, Menu, X } from 'lucide-react'

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'Characters', href: '#characters' },
  { label: 'Download', href: '#download' },
  { label: 'About', href: '#about' },
  { label: 'Controls', href: '#controls' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-dark-bg/80 backdrop-blur-xl border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <a href="#" className="flex items-center gap-2 group">
            <div className="relative">
              <Zap className="w-5 h-5 text-neon-cyan animate-neon-pulse" />
              <div className="absolute inset-0 w-5 h-5 bg-neon-cyan/20 blur-md rounded-full" />
            </div>
            <span className="text-lg font-bold font-[Space_Grotesk] tracking-wider text-white">
              NEON<span className="text-neon-cyan">RUSH</span>
            </span>
          </a>

          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-[Geist] text-text-muted hover:text-neon-cyan transition-colors duration-300 relative group"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-neon-cyan transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
            <a
              href="https://3d-runner-opal.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2 text-sm font-semibold font-[Geist] text-dark-bg bg-neon-cyan rounded-none glow-cyan transition-all duration-300"
            >
              PLAY NOW
            </a>
          </div>

          <button
            className="md:hidden text-text-muted hover:text-white"
            onClick={() => setOpen(!open)}
          >
            {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden bg-dark-surface/95 backdrop-blur-xl border-t border-border animate-fade-in">
          <div className="px-4 py-4 space-y-3">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="block text-sm text-text-muted hover:text-neon-cyan transition-colors"
              >
                {link.label}
              </a>
            ))}
            <a
              href="https://3d-runner-opal.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setOpen(false)}
              className="block text-center px-5 py-2 text-sm font-semibold text-dark-bg bg-neon-cyan"
            >
              PLAY NOW
            </a>
          </div>
        </div>
      )}
    </nav>
  )
}
