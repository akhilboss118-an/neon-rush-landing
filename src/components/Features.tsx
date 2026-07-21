import { Zap, Shield, Globe, Sparkles } from 'lucide-react'

const features = [
  {
    icon: Zap,
    title: 'High-Speed Action',
    desc: 'Blaze through procedurally generated neon cities at breakneck speeds with responsive controls and fluid physics.',
    color: 'bg-neon-cyan',
    glow: 'glow-cyan',
  },
  {
    icon: Sparkles,
    title: 'Power-Ups & Abilities',
    desc: 'Collect shields, speed boosts, and phase shifts. Each character brings a unique ability to master.',
    color: 'bg-neon-pink',
    glow: 'glow-pink',
  },
  {
    icon: Globe,
    title: 'Cross-Platform Play',
    desc: 'Race on any device — desktop, tablet, or mobile. Your progress syncs seamlessly across platforms.',
    color: 'bg-neon-purple',
    glow: '',
  },
  {
    icon: Shield,
    title: 'Competitive Ranks',
    desc: 'Climb the global leaderboard, earn season rewards, and prove you are the fastest runner in the grid.',
    color: 'bg-neon-cyan',
    glow: 'glow-cyan',
  },
]

export default function Features() {
  return (
    <section id="about" className="relative py-24 px-4">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-neon-purple/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <span className="text-neon-pink text-xs font-[Geist] font-semibold tracking-[0.1em] uppercase">
            Why Play
          </span>
          <h2 className="text-4xl md:text-5xl font-bold font-[Space_Grotesk] mt-3 text-white">
            FEATURES
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((f, i) => (
            <div
              key={i}
              className="group relative border border-border bg-dark-card/60 backdrop-blur-xl hover:border-neon-cyan/30 transition-all duration-500 hover:-translate-y-1"
            >
              <div className="p-6">
                <div className={`inline-flex p-3 ${f.color} mb-4 ${f.glow}`}>
                  <f.icon className="w-6 h-6 text-dark-bg" />
                </div>
                <h3 className="text-lg font-bold font-[Space_Grotesk] text-white mb-2">{f.title}</h3>
                <p className="text-text-secondary text-sm leading-relaxed font-[Hanken_Grotesk]">{f.desc}</p>
              </div>

              <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-neon-cyan/20 to-transparent" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
