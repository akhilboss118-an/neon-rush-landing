import { Smartphone, Monitor, Gamepad2, ArrowDown } from 'lucide-react'

const platforms = [
  {
    icon: Smartphone, title: 'Android',
    desc: 'APK download — 64MB',
    color: '#00fbfb', bg: 'bg-neon-cyan',
  },
  {
    icon: Monitor, title: 'Windows',
    desc: 'Installer — 128MB',
    color: '#fe00fe', bg: 'bg-neon-pink',
  },
  {
    icon: Gamepad2, title: 'Play Free',
    desc: 'Browser — no install needed',
    color: '#7000ff', bg: 'bg-neon-purple',
  },
]

export default function Download() {
  return (
    <section id="download" className="relative py-24 px-4">
      <div className="absolute top-1/3 right-1/4 w-80 h-80 bg-neon-cyan/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-neon-pink/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-5xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <span className="text-neon-cyan text-xs font-[Geist] font-semibold tracking-[0.1em] uppercase">
            Get the Game
          </span>
          <h2 className="text-4xl md:text-5xl font-bold font-[Space_Grotesk] mt-3 text-white">
            DOWNLOAD
          </h2>
          <p className="text-text-secondary mt-4 max-w-xl mx-auto text-sm font-[Hanken_Grotesk]">
            Choose your platform and start running. Cross-platform saves keep your progress everywhere.
          </p>
        </div>

        <div className="grid sm:grid-cols-3 gap-6">
          {platforms.map((p, i) => (
            <a
              key={i}
              href={
                i === 0
                  ? "https://github.com/akhilboss118-an/3d-runner-game/releases/download/v1.0.0/app-release.apk"
                  : i === 1
                  ? "https://github.com/akhilboss118-an/3d-runner-game/releases/tag/v1.0.0"
                  : "https://3d-runner-opal.vercel.app/"
              }
              target="_blank"
              rel="noopener noreferrer"
              className="group relative border border-border bg-dark-card/60 backdrop-blur-xl overflow-hidden hover:-translate-y-1 transition-all duration-500"
            >
              <div className="p-8 flex flex-col items-center text-center">
                <div
                  className={`inline-flex p-4 ${p.bg} mb-5 group-hover:scale-110 transition-transform duration-300`}
                  style={{ boxShadow: `0 0 15px ${p.color}44` }}
                >
                  <p.icon className="w-8 h-8 text-dark-bg" />
                </div>
                <h3 className="text-xl font-bold font-[Space_Grotesk] text-white mb-1">{p.title}</h3>
                <p className="text-text-secondary text-sm mb-6 font-[Hanken_Grotesk]">{p.desc}</p>

                <span
                  className={`inline-flex items-center gap-2 px-5 py-2.5 text-sm font-bold font-[Geist] text-dark-bg ${p.bg} transition-all duration-300`}
                  style={{ boxShadow: `0 0 15px ${p.color}44` }}
                >
                  <ArrowDown className="w-4 h-4" />
                  {i === 2 ? 'PLAY_NOW →' : 'DOWNLOAD'}
                </span>
              </div>

              <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
