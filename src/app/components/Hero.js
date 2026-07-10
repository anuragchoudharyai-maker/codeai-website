export default function Hero() {

  const stats = [
    { icon: "👥", value: "1000+", label: "Students" },
    { icon: "🤖", value: "50+", label: "AI Tools" },
    { icon: "💻", value: "100+", label: "Projects" },
    { icon: "🎧", value: "24×7", label: "Support" },
  ];

  return (
    <section
      id="home"
      data-aos="fade-up"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('/images/hero.jpeg')" }}
    >

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/75"></div>

      {/* Background Glow */}
      <div className="absolute top-20 left-0 w-96 h-96 rounded-full bg-cyan-500/20 blur-[120px]"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 rounded-full bg-blue-500/20 blur-[120px]"></div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">

        <span className="inline-flex items-center rounded-full border border-cyan-400/40 bg-cyan-500/10 backdrop-blur-xl px-6 py-3 text-cyan-300 font-medium">
          🚀 Chhattisgarh's Best Practical AI Training Institute
        </span>

        <h1 className="mt-8 text-5xl md:text-7xl font-extrabold leading-tight">
          Learn <span className="text-cyan-400 drop-shadow-[0_0_20px_#22d3ee]">AI.</span>
          <br />
          Build Your <span className="text-blue-400 drop-shadow-[0_0_20px_#60a5fa]">Future.</span>
        </h1>

        <p className="mt-8 text-xl md:text-2xl text-gray-300 leading-relaxed">
          Generative AI • Data Science • Data Analytics
          <br />
          GenAI Tools Mastery
        </p>

        <div className="mt-10 flex flex-wrap justify-center gap-5">

          <a
            href="#contact"
            className="rounded-2xl bg-cyan-500 px-8 py-4 font-bold text-black shadow-[0_0_35px_rgba(34,211,238,.6)] transition-all duration-300 hover:scale-105 hover:bg-cyan-400"
          >
            🚀 Join Now
          </a>

          <a
            href="#courses"
            className="rounded-2xl border border-cyan-400/50 bg-white/5 backdrop-blur-xl px-8 py-4 font-bold text-white transition-all duration-300 hover:border-cyan-300 hover:bg-cyan-500/10"
          >
            📘 Explore Courses
          </a>

        </div>

        {/* Premium Neon Stats */}

        <div className="mt-20 grid grid-cols-2 lg:grid-cols-4 gap-7">

          {stats.map((item, index) => (

            <div
              key={index}
              className="group relative overflow-hidden rounded-3xl border border-cyan-400/40 bg-black/40 backdrop-blur-2xl p-8 transition-all duration-500 hover:-translate-y-4 hover:border-cyan-300 hover:shadow-[0_0_60px_rgba(34,211,238,.9)]"
            >

              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-gradient-to-br from-cyan-400/10 via-transparent to-blue-500/10"></div>

              <div className="relative w-20 h-20 mx-auto flex items-center justify-center rounded-full border border-cyan-300 bg-cyan-500/15 shadow-[0_0_40px_rgba(34,211,238,.8)] text-4xl">
                {item.icon}
              </div>

              <h2 className="relative mt-7 text-6xl font-extrabold text-cyan-300 drop-shadow-[0_0_25px_#22d3ee]">
                {item.value}
              </h2>

              <p className="relative mt-3 text-lg text-gray-300">
                {item.label}
              </p>

              <div className="relative mt-6 mx-auto h-1 w-20 rounded-full bg-cyan-400 shadow-[0_0_20px_#22d3ee]"></div>

            </div>

          ))}
        

        </div>

      </div>

    </section>
  );
}