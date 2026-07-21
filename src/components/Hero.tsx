import { Play, ChevronDown } from 'lucide-react'

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden scanline-effect scanline-move"
    >
      {/* Animated grid background */}
      <div className="absolute inset-0 opacity-30">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              'linear-gradient(#1A1A1A 1px, transparent 1px), linear-gradient(90deg, #1A1A1A 1px, transparent 1px)',
            backgroundSize: '32px 32px',
          }}
        />
        <div
          className="absolute inset-0 animate-grid-scroll"
          style={{
            backgroundImage:
              'linear-gradient(rgba(0,251,251,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(0,251,251,0.05) 1px, transparent 1px)',
            backgroundSize: '32px 32px',
          }}
        />
      </div>

      {/* Glow orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-neon-cyan/10 rounded-full blur-[150px]" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-neon-purple/10 rounded-full blur-[150px]" />
      <div className="absolute top-1/3 right-1/3 w-64 h-64 bg-neon-pink/10 rounded-full blur-[120px]" />

      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 border border-neon-cyan/30 bg-neon-cyan/5 text-neon-cyan text-xs font-[Geist] font-semibold tracking-[0.1em] uppercase mb-6 animate-fade-in">
          <span className="w-2 h-2 rounded-full bg-neon-cyan animate-neon-pulse" />
          SYSTEM_READY — Open Beta v1.0
        </div>

        <h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-bold font-[Space_Grotesk] leading-none mb-6 animate-flicker">
          <span className="bg-gradient-to-r from-white via-neon-cyan to-neon-purple bg-clip-text text-transparent">
            NEON RUSH
          </span>
        </h1>

        <p className="text-text-secondary text-lg sm:text-xl max-w-2xl mx-auto mb-10 leading-relaxed animate-slide-up font-[Hanken_Grotesk]">
          Enter the high-stakes digital simulation where velocity meets precision.
          Dodge obstacles, collect power-ups, and dominate the leaderboard.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-slide-up">
          <a
            href="https://3d-runner-opal.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative inline-flex items-center gap-2 px-8 py-3.5 text-base font-bold font-[Geist] text-dark-bg bg-neon-cyan overflow-hidden transition-all duration-300 glow-cyan"
          >
            <Play className="w-5 h-5 fill-dark-bg" />
            PLAY NOW — IT'S FREE
          </a>
          <a
            href="#characters"
            className="inline-flex items-center gap-2 px-8 py-3.5 text-base font-semibold font-[Geist] text-neon-cyan border border-neon-cyan/40 hover:bg-neon-cyan/10 transition-all duration-300"
          >
            VIEW CHARACTERS
          </a>
        </div>

        {/* HUD elements */}
        <div className="hidden lg:block absolute -left-32 top-1/2 -translate-y-1/2 text-[10px] font-[Geist] text-text-muted/30 tracking-widest -rotate-90">
          COORDINATE: 0.042 // SYSTEM: NOMINAL
        </div>
        <div className="hidden lg:block absolute -right-32 top-1/3 text-[10px] font-[Geist] text-text-muted/30 tracking-widest">
          &gt; CONNECTION_ESTABLISHED
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-float">
        <ChevronDown className="w-6 h-6 text-text-muted" />
      </div>
    </section>
  )
}
