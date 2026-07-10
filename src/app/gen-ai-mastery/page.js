export default function GenAIMastery() {
  return (
    <main className="min-h-screen bg-slate-950 text-white overflow-x-hidden">

      {/* Hero Section */}

      <section className="relative min-h-screen flex items-center overflow-hidden">

        {/* Background Image */}

        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/images/hero.jpeg')" }}
        ></div>

        {/* Dark Overlay */}

        <div className="absolute inset-0 bg-slate-950/85"></div>

        {/* Glow Effects */}

        <div className="absolute top-10 left-10 h-80 w-80 rounded-full bg-cyan-500/20 blur-3xl"></div>

        <div className="absolute bottom-10 right-10 h-80 w-80 rounded-full bg-blue-500/20 blur-3xl"></div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">

          <div className="grid lg:grid-cols-2 gap-16 items-center">

            {/* Left */}

            <div>

              <span className="inline-block rounded-full border border-cyan-400/30 bg-cyan-500/10 px-5 py-2 text-cyan-300 backdrop-blur-xl">

                🚀 Chhattisgarh's #1 Practical AI Program

              </span>

              <h1 className="mt-8 text-5xl md:text-7xl font-extrabold leading-tight">

                Become a

                <br />

                <span className="text-cyan-400">
                  Generative AI Expert
                </span>

              </h1>

              <p className="mt-8 max-w-2xl text-xl leading-9 text-gray-300">

                Learn Python, Machine Learning, Deep Learning,
                LLMs, Prompt Engineering, RAG, AI Agents,
                LangChain, MCP, Ollama and build real-world AI applications.

              </p>

              <div className="mt-10 flex flex-wrap gap-5">

                <a
                  href="#syllabus"
                  className="rounded-xl bg-gradient-to-r from-cyan-400 to-blue-500 px-8 py-4 font-bold text-black transition-all duration-300 hover:scale-105"
                >
                  📘 View Syllabus
                </a>

                <a
                  href="https://wa.me/917756064254"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-xl border border-cyan-400 px-8 py-4 font-bold transition-all duration-300 hover:bg-cyan-500 hover:text-black"
                >
                  💬 Enroll Now
                </a>

              </div>

              {/* Stats */}

              <div className="mt-14 grid grid-cols-2 md:grid-cols-4 gap-5">
                <div className="rounded-2xl border border-cyan-500/20 bg-white/5 p-5 text-center backdrop-blur-xl">
                  <h3 className="text-4xl font-extrabold text-cyan-400">6</h3>
                  <p className="mt-2 text-gray-300">Months</p>
                </div>

                <div className="rounded-2xl border border-cyan-500/20 bg-white/5 p-5 text-center backdrop-blur-xl">
                  <h3 className="text-4xl font-extrabold text-cyan-400">20+</h3>
                  <p className="mt-2 text-gray-300">Live Projects</p>
                </div>

                <div className="rounded-2xl border border-cyan-500/20 bg-white/5 p-5 text-center backdrop-blur-xl">
                  <h3 className="text-4xl font-extrabold text-cyan-400">50+</h3>
                  <p className="mt-2 text-gray-300">AI Tools</p>
                </div>

                <div className="rounded-2xl border border-cyan-500/20 bg-white/5 p-5 text-center backdrop-blur-xl">
                  <h3 className="text-4xl font-extrabold text-cyan-400">100%</h3>
                  <p className="mt-2 text-gray-300">Practical</p>
                </div>

              </div>

            </div>

            {/* Right Side */}

            <div className="flex justify-center">

              <div className="overflow-hidden rounded-3xl border border-cyan-500/30 bg-white/5 backdrop-blur-xl shadow-[0_0_50px_rgba(34,211,238,0.35)]">

                <img
                  src="/images/GenAIMastery.jpeg"
                  alt="Gen AI Mastery"
                  className="w-[420px] transition-all duration-500 hover:scale-105"
                />

              </div>

            </div>

          </div>

        </div>

      </section>
      {/* Course Highlights */}

<section className="relative py-24 bg-gradient-to-b from-slate-900 via-slate-950 to-slate-900 overflow-hidden">

  <div className="absolute top-20 left-20 h-80 w-80 rounded-full bg-cyan-500/10 blur-3xl"></div>

  <div className="absolute bottom-20 right-20 h-80 w-80 rounded-full bg-blue-500/10 blur-3xl"></div>

  <div className="relative z-10 max-w-7xl mx-auto px-6">

    <div className="text-center mb-16">

      <h2 className="text-5xl font-extrabold">
              Why Choose
              <span className="text-cyan-400"> Gen AI Mastery?</span>
            </h2>

            <p className="mt-4 text-xl text-gray-300">
              Learn from industry experts with real-world AI projects.
            </p>

          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

            <div className="rounded-3xl border border-cyan-500/20 bg-white/5 p-8 backdrop-blur-xl hover:border-cyan-400 hover:shadow-[0_0_35px_rgba(34,211,238,0.30)] transition">
              <div className="text-5xl">🎯</div>
              <h3 className="mt-6 text-2xl font-bold">100% Practical</h3>
              <p className="mt-4 text-gray-300">
                Learn by building real AI applications.
              </p>
            </div>

            <div className="rounded-3xl border border-cyan-500/20 bg-white/5 p-8 backdrop-blur-xl hover:border-cyan-400 hover:shadow-[0_0_35px_rgba(34,211,238,0.30)] transition">
              <div className="text-5xl">🤖</div>
              <h3 className="mt-6 text-2xl font-bold">50+ AI Tools</h3>
              <p className="mt-4 text-gray-300">
                ChatGPT, Claude, Gemini, Cursor, Ollama and more.
              </p>
            </div>

            <div className="rounded-3xl border border-cyan-500/20 bg-white/5 p-8 backdrop-blur-xl hover:border-cyan-400 hover:shadow-[0_0_35px_rgba(34,211,238,0.30)] transition">
              <div className="text-5xl">💻</div>
              <h3 className="mt-6 text-2xl font-bold">20+ Live Projects</h3>
              <p className="mt-4 text-gray-300">
                Portfolio-ready projects for your career.
              </p>
            </div>

            <div className="rounded-3xl border border-cyan-500/20 bg-white/5 p-8 backdrop-blur-xl hover:border-cyan-400 hover:shadow-[0_0_35px_rgba(34,211,238,0.30)] transition">
              <div className="text-5xl">🏆</div>
              <h3 className="mt-6 text-2xl font-bold">Certificate</h3>
              <p className="mt-4 text-gray-300">
                Industry-recognized completion certificate.
              </p>
            </div>

          </div>

        </div>

      </section>

      {/* Course Overview */}

      <section className="py-24">

        <div className="max-w-7xl mx-auto px-6">

          <div className="rounded-3xl border border-cyan-500/20 bg-white/5 p-10 backdrop-blur-xl">

            <h2 className="text-5xl font-extrabold">
              Course <span className="text-cyan-400">Overview</span>
            </h2>

            <p className="mt-8 text-lg leading-9 text-gray-300">
              This comprehensive program covers everything from Python programming
              to advanced Generative AI. You'll build AI chatbots, AI agents,
              RAG applications, automation workflows, and deploy production-ready
              AI solutions using the latest industry tools.
            </p>

            <div className="mt-10 grid md:grid-cols-3 gap-8">

              <div className="rounded-2xl bg-slate-900/70 p-6 border border-cyan-500/20">
                <h3 className="text-2xl font-bold text-cyan-400">Duration</h3>
                <p className="mt-3 text-gray-300">6 Months</p>
              </div>

              <div className="rounded-2xl bg-slate-900/70 p-6 border border-cyan-500/20">
                <h3 className="text-2xl font-bold text-cyan-400">Mode</h3>
                <p className="mt-3 text-gray-300">Offline + Online</p>
              </div>

              <div className="rounded-2xl bg-slate-900/70 p-6 border border-cyan-500/20">
                <h3 className="text-2xl font-bold text-cyan-400">Eligibility</h3>
                <p className="mt-3 text-gray-300">Anyone can join</p>
              </div>

            </div>

          </div>

        </div>

      </section>
      {/* Complete Course Syllabus */}

      <section id="syllabus" className="py-24 bg-slate-950">

        <div className="max-w-7xl mx-auto px-6">

          <div className="text-center mb-16">

            <h2 className="text-5xl font-extrabold">
              Complete <span className="text-cyan-400">Course Syllabus</span>
            </h2>

            <p className="mt-5 text-lg text-gray-300">
              Learn Generative AI from Beginner to Advanced with Live Projects.
            </p>

          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

            {[
              "Module 1 : Python Programming",
              "Module 2 : Advanced Python",
              "Module 3 : NumPy",
              "Module 4 : Pandas",
              "Module 5 : Data Visualization",
              "Module 6 : Machine Learning",
              "Module 7 : Deep Learning",
              "Module 8 : Natural Language Processing",
              "Module 9 : Prompt Engineering",
              "Module 10 : Large Language Models",
              "Module 11 : OpenAI API",
              "Module 12 : Google Gemini API",
              "Module 13 : Claude API",
              "Module 14 : Hugging Face",
              "Module 15 : LangChain",
              "Module 16 : RAG",
              "Module 17 : AI Agents",
              "Module 18 : MCP",
              "Module 19 : Ollama",
              "Module 20 : Open WebUI",
              "Module 21 : Cursor AI",
              "Module 22 : n8n Automation",
              "Module 23 : AI Deployment",
              "Module 24 : Final Capstone Project"
            ].map((module,index)=>(

              <div
                key={index}
                className="rounded-3xl border border-cyan-500/20 bg-white/5 backdrop-blur-xl p-6 transition-all duration-300 hover:-translate-y-2 hover:border-cyan-400 hover:shadow-[0_0_30px_rgba(34,211,238,0.35)]"
              >

                <div className="flex items-center gap-4">

                  <div className="h-12 w-12 rounded-full bg-cyan-500 flex items-center justify-center font-bold text-black">
                    {index+1}
                  </div>

                  <h3 className="font-semibold text-lg">
                    {module}
                  </h3>

                </div>

              </div>

            ))}

          </div>

        </div>

      </section>
      {/* Career Opportunities */}

      <section className="py-24 bg-slate-900">

        <div className="max-w-7xl mx-auto px-6">

          <div className="text-center mb-16">

            <h2 className="text-5xl font-extrabold">
              Career <span className="text-cyan-400">Opportunities</span>
            </h2>

            <p className="mt-4 text-lg text-gray-300">
              After completing this course you can work as:
            </p>

          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

            {[
              "🤖 Generative AI Engineer",
              "💻 AI Application Developer",
              "🧠 Prompt Engineer",
              "⚡ AI Automation Expert",
              "📊 Machine Learning Engineer",
              "🚀 AI Startup Founder"
            ].map((career,index)=>(

              <div
                key={index}
                className="rounded-3xl border border-cyan-500/20 bg-white/5 p-8 backdrop-blur-xl text-center hover:border-cyan-400 hover:shadow-[0_0_30px_rgba(34,211,238,0.30)] transition-all"
              >

                <h3 className="text-2xl font-bold text-white">
                  {career}
                </h3>

              </div>

            ))}

          </div>

        </div>

      </section>

      {/* Final CTA */}

      <section className="py-24">

        <div className="max-w-5xl mx-auto px-6">

          <div className="rounded-3xl border border-cyan-500/20 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 backdrop-blur-xl p-12 text-center">

            <h2 className="text-5xl font-extrabold">
              Start Your <span className="text-cyan-400">AI Career Today</span>
            </h2>

            <p className="mt-6 text-xl text-gray-300">
              Join CodeAI Institute and become an Industry-Ready
              Generative AI Developer.
            </p>

            <div className="mt-10 flex flex-wrap justify-center gap-6">

              <a
                href="https://wa.me/917756064254"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-xl bg-gradient-to-r from-cyan-400 to-blue-500 px-10 py-4 text-lg font-bold text-black hover:scale-105 transition-all duration-300"
              >
                🚀 Enroll Now
              </a>

              <a
                href="/"
                className="rounded-xl border border-cyan-400 px-10 py-4 text-lg font-bold hover:bg-cyan-500 hover:text-black transition-all duration-300"
              >
                ⬅ Back to Home
              </a>

            </div>

          </div>

        </div>

      </section>
      </main>
  );
}