export default function DataAnalyticsMastery() {
  return (
    <main className="min-h-screen bg-slate-950 text-white overflow-x-hidden">
      
      {/* --- Hero Section --- */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        <div className="absolute inset-0 bg-slate-950/85"></div>
        <div className="absolute top-10 left-10 h-80 w-80 rounded-full bg-emerald-500/20 blur-3xl"></div>
        <div className="absolute bottom-10 right-10 h-80 w-80 rounded-full bg-blue-500/20 blur-3xl"></div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            
            {/* Left Content */}
            <div>
              <span className="inline-block rounded-full border border-emerald-400/30 bg-emerald-500/10 px-5 py-2 text-emerald-300 backdrop-blur-xl">
                📊 Chhattisgarh's #1 Data Analytics Program
              </span>
              <h1 className="mt-8 text-5xl md:text-7xl font-extrabold leading-tight">
                Become a <br />
                <span className="text-emerald-400">Data Analytics Expert</span>
              </h1>
              <p className="mt-8 max-w-2xl text-xl leading-9 text-gray-300">
                Master Excel, SQL, Power BI, Tableau, Python, and Statistics. 
                Build a professional portfolio with 100+ real-world projects and start your data career.
              </p>

              <div className="mt-10 flex flex-wrap gap-5">
                <a href="#syllabus" className="rounded-xl bg-gradient-to-r from-emerald-400 to-blue-500 px-8 py-4 font-bold text-black transition-all hover:scale-105">
                  📘 View Curriculum
                </a>
                <a href="https://wa.me/917756064254" target="_blank" rel="noopener noreferrer" className="rounded-xl border border-emerald-400 px-8 py-4 font-bold hover:bg-emerald-500 hover:text-black transition-all">
                  💬 Enroll Now
                </a>
              </div>

              {/* Stats */}
              <div className="mt-14 grid grid-cols-2 md:grid-cols-4 gap-5">
                {[
                  { val: "4", label: "Months" },
                  { val: "100+", label: "Projects" },
                  { val: "₹4K", label: "Per Month" },
                  { val: "100%", label: "Practical" }
                ].map((stat, i) => (
                  <div key={i} className="rounded-2xl border border-emerald-500/20 bg-white/5 p-5 text-center backdrop-blur-xl">
                    <h3 className="text-3xl font-extrabold text-emerald-400">{stat.val}</h3>
                    <p className="mt-2 text-gray-300">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Side */}
            <div className="flex justify-center">
              <div className="p-10 rounded-3xl border border-emerald-500/30 bg-white/5 backdrop-blur-xl shadow-[0_0_50px_rgba(16,185,129,0.35)]">
                <div className="text-[120px]">📈</div>
                <h2 className="text-2xl font-bold mt-4 text-center">Data-Driven Success</h2>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- Curriculum Section --- */}
      <section id="syllabus" className="py-24 relative overflow-hidden bg-slate-900/50">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[500px] w-[500px] rounded-full bg-emerald-500/10 blur-[120px]"></div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-extrabold">Complete <span className="text-emerald-400">Curriculum</span></h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              "Module 1: Advanced Excel & Dashboards",
              "Module 2: SQL for Data Analysis",
              "Module 3: Data Visualization",
              "Module 4: Tableau Mastery",
              "Module 5: Python Programming",
              "Module 6: Statistics & Probability",
              "Module 7: Data Cleaning & Prep",
              "Module 8: Business Intelligence",
              "Module 9: Capstone Portfolio"
            ].map((module, index) => (
              <div key={index} className="group relative rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur-md transition-all duration-300 hover:border-emerald-500/50 hover:bg-white/10 hover:shadow-[0_0_30px_rgba(16,185,129,0.15)]">
                <div className="text-emerald-400 font-bold mb-2 opacity-70">0{index + 1}</div>
                <h3 className="text-xl font-semibold text-white group-hover:text-emerald-300 transition-colors">
                  {module}
                </h3>
                <div className="mt-4 h-1 w-12 bg-emerald-500/50 rounded-full group-hover:w-full transition-all duration-500"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

    </main>
  );
}