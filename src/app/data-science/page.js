export default function DataScience() {
  return (
    <main className="min-h-screen bg-slate-950 text-white overflow-x-hidden">

      <section className="relative min-h-screen flex items-center overflow-hidden">

        {/* Background */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/images/hero.jpeg')" }}
        ></div>

        {/* Overlay */}
        <div className="absolute inset-0 bg-slate-950/85"></div>

        {/* Glow */}
        <div className="absolute top-10 left-10 h-80 w-80 rounded-full bg-cyan-500/20 blur-3xl"></div>
        <div className="absolute bottom-10 right-10 h-80 w-80 rounded-full bg-blue-500/20 blur-3xl"></div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">

          <h1 className="text-6xl md:text-7xl font-extrabold text-center">
            <span className="text-cyan-400">Data Science</span> Mastery
          </h1>

          <p className="mt-8 max-w-3xl mx-auto text-center text-xl leading-9 text-gray-300">
            Learn Python, Statistics, SQL, Power BI,
            Machine Learning, Deep Learning and AI
            with 25+ Live Industry Projects.
          </p>

          {/* Buttons */}

          <div className="mt-10 flex justify-center gap-5 flex-wrap">

            <a
              href="#syllabus"
              className="rounded-xl bg-gradient-to-r from-cyan-400 to-blue-500 px-8 py-4 font-bold text-black hover:scale-105 transition-all"
            >
              📘 View Syllabus
            </a>

            <a
              href="https://wa.me/917756064254"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-xl border border-cyan-400 px-8 py-4 font-bold hover:bg-cyan-500 hover:text-black transition-all"
            >
              💬 Enroll Now
            </a>

          </div>

          {/* Stats */}

          <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-5">

            <div className="rounded-2xl border border-cyan-500/20 bg-white/5 p-5 text-center backdrop-blur-xl">
              <h3 className="text-4xl font-extrabold text-cyan-400">6</h3>
              <p className="mt-2 text-gray-300">Months</p>
            </div>

            <div className="rounded-2xl border border-cyan-500/20 bg-white/5 p-5 text-center backdrop-blur-xl">
              <h3 className="text-4xl font-extrabold text-cyan-400">25+</h3>
              <p className="mt-2 text-gray-300">Projects</p>
            </div>

            <div className="rounded-2xl border border-cyan-500/20 bg-white/5 p-5 text-center backdrop-blur-xl">
              <h3 className="text-4xl font-extrabold text-cyan-400">₹4000</h3>
              <p className="mt-2 text-gray-300">Per Month</p>
            </div>

            <div className="rounded-2xl border border-cyan-500/20 bg-white/5 p-5 text-center backdrop-blur-xl">
              <h3 className="text-4xl font-extrabold text-cyan-400">100%</h3>
              <p className="mt-2 text-gray-300">Practical</p>
            </div>

          </div>

        </div>

      </section>

    </main>
  );
}