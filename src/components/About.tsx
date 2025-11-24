export default function About() {
  return (
    <section id="about" className="relative min-h-screen py-20 bg-transparent overflow-hidden">
      {/* Minimal Clean Background */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Very subtle gradient orb */}
        <div className="absolute top-1/3 right-1/3 w-48 h-48 bg-gradient-radial from-cyan-400/2 via-cyan-400/1 to-transparent rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="space-y-6 fade-in-up">
            <div>
              <h2 
                className="text-4xl md:text-6xl font-semibold mb-4"
                style={{ fontFamily: '"Dala Floda", serif', letterSpacing: '-0.01em' }}
              >
                <span className="text-white">About</span> <span className="text-glow-cyan">Us</span>
              </h2>
              <div className="h-1 w-24 bg-gradient-to-r from-cyan-400 to-green-400 rounded-full mb-6"></div>
            </div>
            <p 
              className="text-lg text-gray-300 leading-relaxed font-chillax"
            >
              Hacksters is a pioneering tech company at the forefront of artificial intelligence,
              quantum computing, and immersive technologies. Founded in 2019 by a team of
              visionary engineers and researchers, we&apos;ve been pushing the boundaries of what&apos;s
              possible in technology.
            </p>
            <p 
              className="text-gray-400 leading-relaxed font-chillax"
            >
              Our mission is to harness the power of cutting-edge technologies to solve
              real-world problems. From revolutionizing healthcare with AI diagnostics to
              securing digital infrastructure with advanced cybersecurity, every project we
              undertake demonstrates our commitment to innovation that matters.
            </p>
            {/* Premium Stats Section */}
            <div className="grid grid-cols-3 gap-6 pt-8">
              <div className="text-center group">
                <div className="relative p-4 rounded-2xl glass-morphism border border-cyan-400/10 hover:border-cyan-400/20 transition-all duration-500">
                  <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="relative">
                    <div 
                      className="text-3xl font-bold text-cyan-400 mb-2"
                      style={{ fontFamily: '"Grafier", sans-serif' }}
                    >
                      25+
                    </div>
                    <div 
                      className="text-xs text-gray-400 uppercase tracking-wider font-chillax"
                    >
                      Patents Filed
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="text-center group">
                <div className="relative p-4 rounded-2xl glass-morphism border border-purple-400/10 hover:border-purple-400/20 transition-all duration-500">
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-400/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="relative">
                    <div 
                      className="text-3xl font-bold text-purple-400 mb-2"
                      style={{ fontFamily: '"Grafier", sans-serif' }}
                    >
                      500M
                    </div>
                    <div 
                      className="text-xs text-gray-400 uppercase tracking-wider font-chillax"
                    >
                      IPO Valuation
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="text-center group">
                <div className="relative p-4 rounded-2xl glass-morphism border border-green-400/10 hover:border-green-400/20 transition-all duration-500">
                  <div className="absolute inset-0 bg-gradient-to-br from-green-400/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="relative">
                    <div 
                      className="text-3xl font-bold text-green-400 mb-2"
                      style={{ fontFamily: '"Grafier", sans-serif' }}
                    >
                      50+
                    </div>
                    <div 
                      className="text-xs text-gray-400 uppercase tracking-wider font-chillax"
                    >
                      Team Members
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
