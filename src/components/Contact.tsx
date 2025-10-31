export default function Contact() {
  return (
    <section id="contact" className="relative py-20 bg-gradient-to-t from-black via-gray-900/10 to-black overflow-hidden">
      {/* Premium Contact Background Elements - Consistent Theme */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Background elements removed for cleaner look */}
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Premium Header Section */}
          <div className="relative mb-12">
            <h2 className="text-4xl md:text-6xl font-bold mb-6 fade-in-up font-chillax">
              <span className="text-white">Get In</span>{' '}
              <span className="neon-text">Touch</span>
            </h2>
            <div className="w-24 h-px bg-gradient-to-r from-transparent via-cyan-400/50 to-transparent mx-auto mb-8"></div>
          </div>
          
          <p className="text-xl text-gray-300 mb-12 leading-relaxed fade-in-up max-w-2xl mx-auto font-chillax">
            Ready to build the future together? Let&apos;s connect and explore 
            the infinite possibilities of tomorrow&apos;s technology.
          </p>

          {/* Premium Contact Methods */}
          <div className="mb-16 fade-in-up">
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a 
                href="mailto:contact@hacksters.com" 
                className="group relative inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-400/10 to-cyan-400/5 border border-cyan-400/20 text-cyan-300 rounded-2xl font-medium hover:from-cyan-400/20 hover:to-cyan-400/10 hover:border-cyan-400/40 transition-all duration-500 hover:shadow-lg hover:shadow-cyan-400/10 glass-morphism font-chillax"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <span className="relative flex items-center gap-3">
                  <span className="text-lg">📧</span>
                  <span>contact@hacksters.com</span>
                </span>
              </a>
              
              <a 
                href="tel:+1-555-HACKSTERS" 
                className="group relative inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-400/10 to-purple-400/5 border border-purple-400/20 text-purple-300 rounded-2xl font-medium hover:from-purple-400/20 hover:to-purple-400/10 hover:border-purple-400/40 transition-all duration-500 hover:shadow-lg hover:shadow-purple-400/10 glass-morphism font-chillax"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-purple-400/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <span className="relative flex items-center gap-3">
                  <span className="text-lg">📞</span>
                  <span>+1 (555) HACKSTERS</span>
                </span>
              </a>
            </div>
          </div>

          {/* Premium Social Links */}
          <div className="flex justify-center space-x-6 fade-in-up">
            <a 
              href="https://linkedin.com/company/hacksters" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="group relative p-4 rounded-2xl border border-cyan-400/15 hover:border-blue-400/30 transition-all duration-500 glass-morphism hover:shadow-lg hover:shadow-blue-400/5"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-blue-400/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <span className="relative text-2xl group-hover:text-blue-400 transition-colors duration-300">💼</span>
            </a>
            
            <a 
              href="https://github.com/hacksters" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="group relative p-4 rounded-2xl border border-cyan-400/15 hover:border-gray-300/30 transition-all duration-500 glass-morphism hover:shadow-lg hover:shadow-gray-300/5"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-gray-300/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <span className="relative text-2xl group-hover:text-gray-300 transition-colors duration-300">🐙</span>
            </a>
            
            <a 
              href="https://twitter.com/hacksters" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="group relative p-4 rounded-2xl border border-cyan-400/15 hover:border-blue-300/30 transition-all duration-500 glass-morphism hover:shadow-lg hover:shadow-blue-300/5"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-blue-300/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <span className="relative text-2xl group-hover:text-blue-300 transition-colors duration-300">🐦</span>
            </a>
            
            <a 
              href="https://instagram.com/hacksters" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="group relative p-4 rounded-2xl border border-cyan-400/15 hover:border-pink-400/30 transition-all duration-500 glass-morphism hover:shadow-lg hover:shadow-pink-400/5"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-pink-400/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <span className="relative text-2xl group-hover:text-pink-400 transition-colors duration-300">📷</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
