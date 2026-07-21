import { Zap, Code2, Globe, Gamepad2, Mail } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="relative border-t border-border bg-dark-card/60 backdrop-blur-xl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          <div className="space-y-4">
            <a href="#" className="flex items-center gap-2">
              <Zap className="w-5 h-5 text-neon-cyan" />
              <span className="text-lg font-bold font-[Space_Grotesk] text-white">
                NEON<span className="text-neon-cyan">RUSH</span>
              </span>
            </a>
            <p className="text-text-muted text-sm leading-relaxed font-[Hanken_Grotesk]">
              The ultimate cyberpunk 3D runner. Push your limits and own the leaderboard.
            </p>
            <div className="flex gap-3">
              {[Code2, Globe, Gamepad2, Mail].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-9 h-9 flex items-center justify-center border border-border text-text-muted hover:text-neon-cyan hover:border-neon-cyan/30 transition-all duration-300"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {[
            { title: 'Game', links: ['Home', 'Characters', 'Download', 'About'] },
            { title: 'Support', links: ['Help Center', 'Contact Us', 'Report Bug', 'Feedback'] },
            { title: 'Legal', links: ['Privacy Policy', 'Terms of Service', 'Cookie Policy', 'EULA'] },
          ].map((section) => (
            <div key={section.title}>
              <h4 className="text-xs font-[Geist] font-semibold tracking-[0.1em] text-text-muted uppercase mb-4">
                {section.title}
              </h4>
              <ul className="space-y-2.5">
                {section.links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-sm text-text-muted hover:text-neon-cyan transition-colors duration-200 font-[Hanken_Grotesk]"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-border pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-text-muted font-[Geist]">
            &copy; {new Date().getFullYear()} Neon Rush. All rights reserved.
          </p>
          <p className="text-xs text-text-muted font-[Geist]">
            Built for cyberpunk runners
          </p>
        </div>
      </div>
    </footer>
  )
}
