export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">
      <nav className="fixed top-0 w-full bg-black border-b border-cyan-500/30 z-50 py-5">
        <div className="max-w-6xl mx-auto px-6 flex justify-between items-center">
          <div className="text-3xl font-bold text-cyan-400">TechInsight</div>
          <div className="flex gap-8">
            <a href="#" className="hover:text-cyan-400">Home</a>
            <a href="#" className="hover:text-cyan-400">Articles</a>
            <a href="#" className="hover:text-cyan-400">Categories</a>
            <a href="#" className="hover:text-cyan-400">About</a>
          </div>
        </div>
      </nav>

      <section className="pt-32 pb-24 text-center px-6">
        <h1 className="text-6xl font-bold leading-tight mb-6">
          Insights That Shape<br />
          <span className="text-cyan-400">Tomorrow's Technology</span>
        </h1>
        <p className="text-xl text-gray-400 max-w-2xl mx-auto mb-12">
          Deep dives into artificial intelligence, programming, gadgets, and the future of tech.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="bg-cyan-500 hover:bg-cyan-400 text-black px-10 py-4 rounded-2xl font-semibold text-lg">
            Start Reading
          </button>
          <button className="border border-white/60 hover:border-white px-10 py-4 rounded-2xl text-lg">
            Watch Video
          </button>
        </div>
      </section>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-6xl mx-auto px-6">
        <div className="bg-zinc-900 border border-cyan-500/30 rounded-3xl p-8 text-center">
          <div className="text-4xl font-bold text-cyan-400">3.2M+</div>
          <div className="text-gray-400">Active Readers</div>
        </div>
        <div className="bg-zinc-900 border border-cyan-500/30 rounded-3xl p-8 text-center">
          <div className="text-4xl font-bold text-cyan-400">1,850+</div>
          <div className="text-gray-400">Articles</div>
        </div>
        <div className="bg-zinc-900 border border-cyan-500/30 rounded-3xl p-8 text-center">
          <div className="text-4xl font-bold text-cyan-400">75+</div>
          <div className="text-gray-400">Tech Experts</div>
        </div>
        <div className="bg-zinc-900 border border-cyan-500/30 rounded-3xl p-8 text-center">
          <div className="text-4xl font-bold text-cyan-400">98%</div>
          <div className="text-gray-400">Satisfaction</div>
        </div>
      </div>
    </main>
  );
}
