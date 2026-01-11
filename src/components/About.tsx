export default function About() {
  // Dynamic stats that update automatically
  const eventsParticipated = 13;
  const eventsWon = 10;
  const winProbability = ((eventsWon / eventsParticipated) * 100).toFixed(0);

  return (
    <section id="about" className="relative min-h-screen py-24 md:py-32 bg-black/50 overflow-hidden">
      {/* Enhanced Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/3 right-1/3 w-96 h-96 bg-gradient-radial from-cyan-400/10 via-cyan-400/5 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-gradient-radial from-purple-400/10 via-purple-400/5 to-transparent rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 md:px-12 lg:px-20 relative z-10">
        {/* Two Column Layout */}
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          
          {/* Left Column - Content */}
          <div className="space-y-8">
            {/* Header */}
            <div>
              <h2 
                className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.1]"
                style={{ fontFamily: '"Dala Floda", serif', letterSpacing: '-0.02em' }}
              >
                About Us
              </h2>
            </div>

            {/* Story */}
            <div className="space-y-6">
              <p className="text-xl md:text-2xl text-white/90 leading-relaxed font-chillax font-light">
                Hacksters didn&apos;t start as a company. It started as students showing up to hackathons with curiosity, zero expectations, and a lot of caffeine.
              </p>
              
              <p className="text-base text-gray-400 leading-relaxed font-chillax">
                What began as chaos quickly turned into consistency. Late-night builds, failed demos, close losses, and unexpected wins shaped us into a team that values execution over ideas and learning over trophies.
              </p>
              
              <p className="text-base text-gray-400 leading-relaxed font-chillax">
                From AI and healthcare to mobility and space-tech — every project reflects how we think: practical, ambitious, and slightly obsessive about making things actually work.
              </p>
            </div>

            {/* Quote */}
            <div className="relative pl-6 border-l-2 border-cyan-400/50">
              <p className="text-lg text-white font-chillax italic">
                &ldquo;We&apos;re still learning. Still building. Still hungry.&rdquo;
              </p>
              <p className="text-cyan-400 text-sm mt-2 font-chillax">
                And this is just the beginning.
              </p>
            </div>
          </div>

          {/* Right Column - Stats */}
          <div className="lg:sticky lg:top-32 space-y-6">
            {/* Stats Cards - Stacked */}
            <div className="space-y-4">
              {/* Participated */}
              <div className="group relative">
                <div className="relative p-6 rounded-2xl bg-white/[0.02] border border-white/[0.05] hover:border-cyan-400/30 transition-all duration-500 backdrop-blur-sm">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-gray-300 uppercase tracking-wider font-chillax">
                        Events Participated
                      </p>
                    </div>
                    <div 
                      className="text-5xl md:text-6xl font-bold text-cyan-400"
                      style={{ fontFamily: '"Grafier", sans-serif' }}
                    >
                      {eventsParticipated}
                    </div>
                  </div>
                </div>
              </div>

              {/* Won */}
              <div className="group relative">
                <div className="relative p-6 rounded-2xl bg-white/[0.02] border border-white/[0.05] hover:border-purple-400/30 transition-all duration-500 backdrop-blur-sm">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-gray-300 uppercase tracking-wider font-chillax">
                        Events Won
                      </p>
                    </div>
                    <div 
                      className="text-5xl md:text-6xl font-bold text-purple-400"
                      style={{ fontFamily: '"Grafier", sans-serif' }}
                    >
                      {eventsWon}
                    </div>
                  </div>
                </div>
              </div>

              {/* Win Rate */}
              <div className="group relative">
                <div className="relative p-6 rounded-2xl bg-white/[0.02] border border-white/[0.05] hover:border-green-400/30 transition-all duration-500 backdrop-blur-sm">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-gray-300 uppercase tracking-wider font-chillax">
                        Win Rate
                      </p>
                    </div>
                    <div 
                      className="text-5xl md:text-6xl font-bold text-green-400"
                      style={{ fontFamily: '"Grafier", sans-serif' }}
                    >
                      {winProbability}%
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
