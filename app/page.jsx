export default function Home() {
  return (
    <main className="min-h-screen bg-[#050505] text-white">
      {/* Navbar */}
      <nav className="fixed top-0 w-full bg-[#050505]/95 backdrop-blur border-b border-white/10 z-50">
        <div className="max-w-6xl mx-auto px-6 py-5 flex justify-between items-center">
          <div className="text-3xl font-bold text-cyan-400">TechInsight</div>
          <div className="hidden md:flex gap-8 text-sm">
            <a href="#" className="hover:text-cyan-400">Home</a>
            <a href="#" className="hover:text-cyan-400">Articles</a>
            <a href="#" className="hover:text-cyan-400">Categories</a>
            <a href="#" className="hover:text-cyan-400">About</a>
          </div>
          <button className="bg-cyan-500 text-black px-6 py-2 rounded-full font-medium hover:bg-cyan-400 transition">
            Get Started
          </button>
        </div>
      </nav>

      {/* Hero */}
      <section className="min-h-screen pt-20 flex items-center relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(#22d3ee_0.8px,transparent_1px)] bg-[length:20px_20px] opacity-20"></div>
        
        <div className="max-w-5xl mx-auto px-6 text-center relative z-10">
          <h1 className="text-6xl md:text-7xl font-bold leading-none mb-6">
            Insights That Shape<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
              Tomorrow&apos;s Technology
            </span>
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto mb-10">
            Deep dives into AI, programming, gadgets, and future tech.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-cyan-500 hover:bg-cyan-400 text-black px-10 py-4 rounded-2xl font-semibold text-lg">
              Start Reading
            </button>
            <button className="border border-white/50 hover:border-white px-10 py-4 rounded-2xl font-medium text-lg">
              Watch Video
            </button>
          </div>
        </div>

        {/* Stats */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 grid grid-cols-2 md:grid-cols-4 gap-4 w-full max-w-5xl px-6">
          <div className="bg-white/5 border border-white/10 rounded-3xl p-6 text-center">
            <div className="text-3xl font-bold text-cyan-400">3.2M+</div>
            <div className="text-sm text-gray-400">Active Readers</div>
          </div>
          <div className="bg-white/5 border border-white/10 rounded-3xl p-6 text-center">
            <div className="text-3xl font-bold text-cyan-400">1,850+</div>
            <div className="text-sm text-gray-400">Articles</div>
          </div>
          <div className="bg-white/5 border border-white/10 rounded-3xl p-6 text-center">
            <div className="text-3xl font-bold text-cyan-400">75+</div>
            <div className="text-sm text-gray-400">Experts</div>
          </div>
          <div className="bg-white/5 border border-white/10 rounded-3xl p-6 text-center">
            <div className="text-3xl font-bold text-cyan-400">98%</div>
            <div className="text-sm text-gray-400">Satisfaction</div>
          </div>
        </div>
      </section>
    </main>
  );
}
