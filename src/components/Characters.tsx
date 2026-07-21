import { useState } from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import * as THREE from 'three'
import CharacterModel from './CharacterModel'
import { ChevronLeft, ChevronRight, Zap, Shield, Star, Brain } from 'lucide-react'

const characters = [
  {
    id: 'vaishnavi', name: 'VAISHNAVI', title: 'Shadow Blade',
    model: '/models/VAISHNAVI_Idle.fbx', color: '#fe00fe',
    stats: { speed: 95, stamina: 70, power: 85, agility: 90 },
    trait: 'Night vision — sees obstacles before they appear',
  },
  {
    id: 'pravalika', name: 'PRAVALIKA', title: 'Cyber Striker',
    model: '/models/PRAVALIKA_Idle.fbx', color: '#00fbfb',
    stats: { speed: 80, stamina: 95, power: 75, agility: 85 },
    trait: 'Phase shift — passes through barriers once per race',
  },
  {
    id: 'nandini', name: 'NANDINI', title: 'Chrono Runner',
    model: '/models/NANDINI_Idle.fbx', color: '#7000ff',
    stats: { speed: 75, stamina: 90, power: 95, agility: 80 },
    trait: 'Time warp — slows surroundings on activation',
  },
  {
    id: 'harika', name: 'HARIKA', title: 'Neon Juggernaut',
    model: '/models/hARIKA_Idle.fbx', color: '#ff6600',
    stats: { speed: 70, stamina: 85, power: 98, agility: 75 },
    trait: 'Shockwave — destroys obstacles in a radius',
  },
]

const statIcons = [Zap, Shield, Star, Brain]

export default function Characters() {
  const [current, setCurrent] = useState(0)
  const ch = characters[current]

  return (
    <section className="relative py-24 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-neon-cyan text-xs font-[Geist] font-semibold tracking-[0.1em] uppercase">
            Choose Your Runner
          </span>
          <h2 className="text-4xl md:text-5xl font-bold font-[Space_Grotesk] mt-3 text-white">
            CHARACTERS
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 items-center">
          {/* 3D Viewer */}
          <div className="relative h-[450px] sm:h-[550px] border border-border bg-dark-card overflow-hidden">
            <Canvas
              shadows
              camera={{ position: [0, 1.8, 3.2], fov: 40 }}
              gl={{ toneMapping: THREE.ACESFilmicToneMapping, toneMappingExposure: 1.2 }}
            >
              <CharacterModel
                modelPath={ch.model}
                scale={1.4}
                position={[0, -0.8, 0]}
              />
              <OrbitControls
                enableZoom={false}
                autoRotate
                autoRotateSpeed={3}
                minPolarAngle={Math.PI / 3}
                maxPolarAngle={Math.PI / 2}
              />
            </Canvas>

            <button
              onClick={() => setCurrent((current - 1 + characters.length) % characters.length)}
              className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 flex items-center justify-center bg-dark-surface border border-border text-text-muted hover:text-white hover:border-neon-cyan/30 transition-all z-10"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={() => setCurrent((current + 1) % characters.length)}
              className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 flex items-center justify-center bg-dark-surface border border-border text-text-muted hover:text-white hover:border-neon-cyan/30 transition-all z-10"
            >
              <ChevronRight className="w-5 h-5" />
            </button>

            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
              {characters.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className={`w-2 h-2 transition-all duration-300 ${
                    i === current ? 'bg-neon-cyan w-6' : 'bg-border hover:bg-text-muted'
                  }`}
                />
              ))}
            </div>

            {/* HUD label */}
            <div className="absolute top-3 left-3 text-[10px] font-[Geist] text-text-muted/40 tracking-widest">
              CHARACTER_SLOT: {String(current + 1).padStart(2, '0')}
            </div>
          </div>

          {/* Info Card */}
          <div className="space-y-6">
            <div>
              <span className="text-xs font-[Geist] font-semibold tracking-[0.1em] uppercase" style={{ color: ch.color }}>
                {ch.title}
              </span>
              <h3 className="text-3xl font-bold font-[Space_Grotesk] text-white mt-1">{ch.name}</h3>
            </div>

            <p className="text-text-secondary text-sm leading-relaxed font-[Hanken_Grotesk]">{ch.trait}</p>

            <div className="space-y-3">
              {Object.entries(ch.stats).map(([key, value], i) => {
                const Icon = statIcons[i]
                return (
                  <div key={key} className="flex items-center gap-3">
                    <Icon className="w-4 h-4 text-text-muted shrink-0" />
                    <span className="text-[10px] font-[Geist] text-text-muted uppercase tracking-wider w-16 shrink-0">
                      {key}
                    </span>
                    <div className="flex-1 h-1.5 bg-dark-surface overflow-hidden relative">
                      <div
                        className="h-full transition-all duration-500"
                        style={{
                          width: `${value}%`,
                          background: `linear-gradient(90deg, ${ch.color}, ${ch.color}88)`,
                          boxShadow: `0 0 8px ${ch.color}44`,
                        }}
                      />
                      <div
                        className="absolute inset-0 w-full h-full animate-progress-scan"
                        style={{
                          background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent)',
                        }}
                      />
                    </div>
                    <span className="text-xs text-text-muted w-8 text-right font-[Geist]">{value}</span>
                  </div>
                )
              })}
            </div>

            <button
              className="w-full py-3 font-bold text-sm font-[Geist] tracking-wider text-dark-bg transition-all duration-300"
              style={{
                background: `linear-gradient(135deg, ${ch.color}, ${ch.color}88)`,
                boxShadow: `0 0 15px ${ch.color}44`,
              }}
            >
              SELECT_{ch.name}
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
