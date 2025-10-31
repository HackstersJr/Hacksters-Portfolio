export default function Gallery() {
  return (
    <section id="gallery" className="relative min-h-screen py-20 bg-gradient-to-b from-transparent via-gray-900/20 to-black overflow-hidden">
      {/* Futuristic Background Elements */}
      <div className="absolute inset-0 pointer-events-none">

        
        {/* Floating Geometric Shapes */}
        <div className="absolute top-20 left-10 w-16 h-16 border border-cyan-400/30 rotate-45 float-enhanced"></div>
        <div className="absolute top-40 right-20 w-12 h-12 border border-purple-400/40 rotate-12 parallax-slow" style={{animationDelay: '1s'}}></div>
        <div className="absolute bottom-40 left-1/4 w-8 h-8 bg-cyan-400/20 rotate-45 parallax-medium" style={{animationDelay: '2s'}}></div>
        <div className="absolute bottom-20 right-1/3 w-20 h-20 border-2 border-cyan-400/20 rounded-full parallax-fast" style={{animationDelay: '0.5s'}}></div>
        
        {/* Premium Dynamic Gradient Orbs */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-radial from-cyan-400/8 via-cyan-400/4 to-transparent rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-radial from-purple-500/8 via-purple-500/4 to-transparent rounded-full blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
        
        {/* Floating Particles */}
        <div className="absolute top-32 left-1/3 w-2 h-2 bg-cyan-400/60 rounded-full parallax-fast shadow-lg shadow-cyan-400/50"></div>
        <div className="absolute top-1/2 right-1/4 w-1 h-1 bg-purple-400/80 rounded-full parallax-medium" style={{animationDelay: '1.5s'}}></div>
        <div className="absolute bottom-1/3 left-1/2 w-1.5 h-1.5 bg-green-400/60 rounded-full parallax-slow" style={{animationDelay: '3s'}}></div>
        <div className="absolute top-3/4 left-1/5 w-2 h-2 bg-blue-400/70 rounded-full float-enhanced" style={{animationDelay: '2.5s'}}></div>
        
        {/* Premium Scanning Lines */}
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-cyan-400/40 to-transparent animate-pulse"></div>
        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-purple-400/40 to-transparent animate-pulse" style={{animationDelay: '1s'}}></div>
        
        {/* Premium Corner Accent Elements */}
        <div className="absolute top-0 left-0 w-32 h-32 border-l-2 border-t-2 border-cyan-400/25"></div>
        <div className="absolute top-0 right-0 w-32 h-32 border-r-2 border-t-2 border-cyan-400/25"></div>
        <div className="absolute bottom-0 left-0 w-32 h-32 border-l-2 border-b-2 border-purple-400/25"></div>
        <div className="absolute bottom-0 right-0 w-32 h-32 border-r-2 border-b-2 border-purple-400/25"></div>
        
        {/* Data Stream Lines */}
        <div className="absolute left-0 top-1/4 w-px h-32 bg-gradient-to-b from-transparent via-cyan-400/40 to-transparent animate-pulse"></div>
        <div className="absolute right-0 top-1/2 w-px h-24 bg-gradient-to-b from-transparent via-purple-400/40 to-transparent animate-pulse" style={{animationDelay: '1.5s'}}></div>
        
        {/* Hexagonal Pattern */}
        <div className="absolute top-1/3 right-1/3 w-24 h-24 opacity-20">
          <svg viewBox="0 0 100 100" className="w-full h-full stroke-cyan-400 fill-none stroke-1">
            <polygon points="50,5 85,25 85,75 50,95 15,75 15,25" className="animate-pulse"/>
          </svg>
        </div>
        <div className="absolute bottom-1/3 left-1/5 w-16 h-16 opacity-15">
          <svg viewBox="0 0 100 100" className="w-full h-full stroke-purple-400 fill-none stroke-1">
            <polygon points="50,5 85,25 85,75 50,95 15,75 15,25" className="animate-pulse" style={{animationDelay: '2s'}}/>
          </svg>
        </div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <h2 className="text-4xl md:text-6xl font-bold text-center mb-16 neon-text fade-in-up font-chillax">
          Innovation Gallery
        </h2>

        {/* Gallery Container with Enhanced Background */}
        <div className="relative">
          {/* Gallery-specific decorative elements */}
          <div className="absolute -top-8 -left-8 w-4 h-4 bg-cyan-400/60 rotate-45 glow-pulse"></div>
          <div className="absolute -top-4 -right-12 w-6 h-6 border border-purple-400/50 rounded-full glow-pulse" style={{animationDelay: '1s'}}></div>
          <div className="absolute -bottom-6 left-1/2 w-2 h-2 bg-green-400/70 rounded-full glow-pulse" style={{animationDelay: '2s'}}></div>
          
          {/* Flowing Data Streams */}
          <div className="absolute top-0 left-1/4 w-px h-8 bg-cyan-400/50 data-stream"></div>
          <div className="absolute top-0 left-3/4 w-px h-6 bg-purple-400/50 data-stream" style={{animationDelay: '1s'}}></div>
          <div className="absolute top-0 left-1/2 w-px h-4 bg-green-400/50 data-stream" style={{animationDelay: '2s'}}></div>
          
          {/* Circuit-like connecting lines */}
          <div className="absolute top-1/2 -left-4 w-8 h-px bg-gradient-to-r from-transparent to-cyan-400/30"></div>
          <div className="absolute top-1/2 -right-4 w-8 h-px bg-gradient-to-l from-transparent to-purple-400/30"></div>
          
          <div className="overflow-x-auto gallery-scroll relative">
            {/* Scrolling indicator lines */}
            <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-cyan-400/30 to-transparent"></div>
            <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-purple-400/30 to-transparent"></div>
            
            <div className="flex space-x-6 pb-4 relative">
            <div className="flex-none w-80 holographic-card rounded-lg overflow-hidden border border-cyan-400/30 hover:border-cyan-400/60 transition-all duration-300 hover:shadow-xl hover:shadow-cyan-400/20 fade-in-up">
              <div className="relative h-48 overflow-hidden">
                <img src="https://images.unsplash.com/photo-1677756119517-756a188d2d94?w=400&h=300&fit=crop" alt="AI Healthcare Platform" className="w-full h-full object-cover transition-transform duration-300 hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
                <div className="absolute bottom-4 left-4">
                  <span className="text-cyan-400 text-xs font-semibold tracking-wider uppercase font-chillax">Healthcare AI</span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-white font-chillax">MediAI Diagnostics</h3>
                <p className="text-gray-400 text-sm font-chillax">Won National AI Challenge 2020. ML platform that analyzes medical images with 95% accuracy, helping doctors detect diseases earlier.</p>
              </div>
            </div>

            <div className="flex-none w-80 holographic-card rounded-lg overflow-hidden border border-cyan-400/30 hover:border-cyan-400/60 transition-all duration-300 hover:shadow-xl hover:shadow-cyan-400/20 fade-in-up">
              <div className="relative h-48 overflow-hidden">
                <img src="https://images.unsplash.com/photo-1554474051-025697423853?w=400&h=300&fit=crop" alt="Neural Network Visualization" className="w-full h-full object-cover transition-transform duration-300 hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
                <div className="absolute bottom-4 left-4">
                  <span className="text-cyan-400 text-xs font-semibold tracking-wider uppercase font-chillax">Deep Learning</span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-white font-chillax">NeuroLink Platform</h3>
                <p className="text-gray-400 text-sm font-chillax">Advanced neural network for financial market prediction. Used by hedge funds worldwide, achieving 87% prediction accuracy.</p>
              </div>
            </div>

            <div className="flex-none w-80 holographic-card rounded-lg overflow-hidden border border-cyan-400/30 hover:border-cyan-400/60 transition-all duration-300 hover:shadow-xl hover:shadow-cyan-400/20 fade-in-up">
              <div className="relative h-48 overflow-hidden">
                <img src="https://images.unsplash.com/photo-1558655146-d09347e92766?w=400&h=300&fit=crop" alt="Holographic AR Interface" className="w-full h-full object-cover transition-transform duration-300 hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
                <div className="absolute bottom-4 left-4">
                  <span className="text-cyan-400 text-xs font-semibold tracking-wider uppercase font-chillax">AR/VR Tech</span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-white font-chillax">HoloLearn</h3>
                <p className="text-gray-400 text-sm font-chillax">Immersive AR learning platform for STEM education. Adopted by 200+ universities, improving student engagement by 300%.</p>
              </div>
            </div>

            <div className="flex-none w-80 holographic-card rounded-lg overflow-hidden border border-cyan-400/30 hover:border-cyan-400/60 transition-all duration-300 hover:shadow-xl hover:shadow-cyan-400/20 fade-in-up">
              <div className="relative h-48 overflow-hidden">
                <img src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=400&h=300&fit=crop" alt="Cybersecurity Dashboard" className="w-full h-full object-cover transition-transform duration-300 hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
                <div className="absolute bottom-4 left-4">
                  <span className="text-cyan-400 text-xs font-semibold tracking-wider uppercase font-chillax">Cybersecurity</span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-white font-chillax">ShieldNet</h3>
                <p className="text-gray-400 text-sm font-chillax">AI-powered cybersecurity platform protecting enterprise networks. Prevents 99.7% of cyber attacks for Fortune 500 clients.</p>
              </div>
            </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
