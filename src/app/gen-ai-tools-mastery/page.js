export default function GenAIToolsMastery() {
  const syllabus = [
    { title: "Chatbots", tools: "ChatGPT, Claude, Gemini, Copilot, Perplexity, DeepSeek" },
    { title: "Image Gen", tools: "Midjourney, Leonardo, Ideogram, Firefly, Canva, Recraft" },
    { title: "Video/Audio", tools: "Runway, Kling, Pika, HeyGen, ElevenLabs, Suno" },
    { title: "Productivity", tools: "Gamma, Napkin, n8n, Zapier, Cursor, Bolt.new" },
  ];

  return (
    <main className="min-h-screen bg-[#020617] text-white font-sans selection:bg-cyan-500/30">
      
      {/* Hero Section */}
      <section className="relative py-32 px-6 overflow-hidden">
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-[150px]"></div>
        
        <div className="max-w-5xl mx-auto text-center relative">
          <h1 className="text-7xl md:text-9xl font-extrabold tracking-tighter italic">
            AI <span className="text-cyan-400">MASTERY</span>
          </h1>
          <p className="mt-8 text-2xl text-gray-400 max-w-2xl mx-auto">
            Chhattisgarh’s most exclusive 2-month AI accelerator.
          </p>
        </div>
      </section>

      {/* Syllabus - Bento Grid */}
      <section className="py-20 px-6 max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-4">
          {syllabus.map((item, i) => (
            <div key={i} className="p-8 rounded-3xl border border-white/5 bg-gradient-to-b from-white/10 to-transparent backdrop-blur-sm hover:border-cyan-500/50 transition-all">
              <h3 className="text-2xl font-bold mb-3">{item.title}</h3>
              <p className="text-gray-400 leading-relaxed">{item.tools}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Premium Pricing Card */}
      <section className="py-20 px-6">
        <div className="max-w-3xl mx-auto p-1 relative group">
          {/* Neon Glow Effect */}
          <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-[2.5rem] blur opacity-25 group-hover:opacity-50 transition duration-1000"></div>
          
          <div className="relative p-12 rounded-[2rem] bg-black border border-white/10 text-center">
            <h2 className="text-3xl font-light tracking-widest text-cyan-400 uppercase">Premium Enrollment</h2>
            <div className="mt-8 flex justify-center items-baseline gap-2">
              <span className="text-7xl font-bold">₹6,000</span>
              <span className="text-gray-500">/ total</span>
            </div>
            <p className="mt-4 text-gray-400 italic">2 Months of Hands-on AI Transformation</p>
            
            <a href="https://wa.me/917756064254" className="mt-10 block w-full py-5 rounded-2xl bg-white text-black font-bold text-lg hover:bg-cyan-400 transition-all">
              Join The Cohort
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}