export default function Trailer() {
  return (
    <section className="relative py-24 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-neon-cyan text-xs font-[Geist] font-semibold tracking-[0.1em] uppercase">
            Watch The Action
          </span>
          <h2 className="text-4xl md:text-5xl font-bold font-[Space_Grotesk] mt-3 text-white">
            OFFICIAL TRAILER
          </h2>
        </div>

        <div className="relative aspect-video max-w-5xl mx-auto border border-border bg-dark-card overflow-hidden">
          <iframe
            className="absolute inset-0 w-full h-full"
            src="https://www.youtube.com/embed/qByRshyc-0A"
            title="Official Trailer"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
      </div>
    </section>
  )
}
