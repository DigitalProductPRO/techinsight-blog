import { ArrowRight, Play } from 'lucide-react';

export default function Home() {
  return (
    <main className="min-h-screen bg-[#050505] text-white overflow-hidden">
      {/* Navbar */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#050505]/90 backdrop-blur-md border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">
          <div className="text-2xl font-bold tracking-tighter text-cyan-400">TechInsight</div>
          
          <div className="hidden md:flex items-center gap-8 text-sm font-medium">
            <a href="#" className="hover:text-cyan-400 transition-colors">Home</a>
            <a href="#" className="hover:text-cyan-400 transition-colors">Articles</a>
            <a href="#" className="hover:text-cyan-400 transition-colors">Categories</a>
            <a href="#" className="hover:text-cyan-400 transition-colors">About</a>
          </div>

          <button className="bg-cyan-500 hover:bg-cyan-400 text-black px-6 py-2.5 rounded-full font-semibold text-sm transition flex items-center gap-2">
            Get Started <ArrowRight size={18} />
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen pt-24 flex items-center justify-center">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,#00f5ff15_0%,transparent_60%)]"></div>
        
        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
          <div className="mb-6 inline-flex items-center rounded-full bg-white/5 border border-white/10 px-5 py-1 text-sm">
            🚀 Exploring the Future of Technology
          </div>

          <h1 className="text-6xl md:text-7xl font-bold tracking-[-2px] leading-none mb-6">
            Insights That Shape<br />
            <span className="bg-gradient-to-r from-cyan-300 via-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Tomorrow&apos;s Technology
            </span>
          </h1>

          <p className="max-w-2xl mx-auto text-lg md:text-xl text-gray-400 mb-10">
            Deep dives into artificial intelligence, blockchain, quantum computing, 
            and emerging technologies transforming our world.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button className="bg-cyan-500 hover:bg-cyan-400 text-black font-semibold px-10 py-4 rounded-2xl flex items-center gap-3 text-lg transition-all active:scale-95">
              Start Reading 
              <ArrowRight size={22} />
            </button>
            
            <button className="border border-white/40 hover:border-white/70 px-10 py-4 rounded-2xl font-medium flex items-center gap-3 text-lg transition-all">
              <Play size={22} fill="currentColor" /> Watch Video
            </button>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="absolute bottom-16 left-1/2 -translate-x-1/2 w-full max-w-6xl px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { num: "3.2M+", label: "Active Readers" },
              { num: "1,850+", label: "Published Articles" },
              { num: "75+", label: "Tech Experts" },
              { num: "98%", label: "Satisfaction Rate" },
            ].map((item, index) => (
              <div key={index} className="bg-white/5 border border-white/10 rounded-3xl p-8 text-center hover:border-cyan-400/50 transition-all">
                <div className="text-4xl font-bold text-cyan-400 mb-2">{item.num}</div>
                <div className="text-gray-400 text-sm tracking-wide">{item.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Latest Articles */}
      <section className="py-20 bg-[#0a0a0a]">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-bold mb-12 text-center">Latest Insights</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              "Best AI Coding Tools 2026",
              "Next.js 15 App Router Mastery",
              "Dark Mode in Modern Web Apps"
            ].map((title, i) => (
              <div key={i} className="group bg-white/5 border border-white/10 rounded-3xl overflow-hidden hover:border-cyan-400/30 transition">
                <div className="h-56 bg-gradient-to-br from-zinc-800 to-black"></div>
                <div className="p-7">
                  <h3 className="font-semibold text-xl mb-3 group-hover:text-cyan-400 transition">{title}</h3>
                  <p className="text-gray-400 text-sm line-clamp-3 mb-6">
                    In-depth guide and analysis for developers who want to stay ahead in 2026 technology landscape.
                  </p>
                  <div className="text-xs text-gray-500">8 min read • March 26, 2026</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
