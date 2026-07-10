export default function WhyChoose() {
  const features = [
    {
      icon: "🚀",
      title: "Live Projects",
      desc: "Build real-world AI and Data Science projects with practical experience.",
    },
    {
      icon: "🤖",
      title: "Industry Expert Trainers",
      desc: "Learn from experienced AI professionals and industry mentors.",
    },
    {
      icon: "📜",
      title: "Industry Certification",
      desc: "Earn a professional certificate to strengthen your career profile.",
    },
    {
      icon: "💼",
      title: "Placement Assistance",
      desc: "Resume building, mock interviews and career guidance support.",
    },
    {
      icon: "🎯",
      title: "Small Batch Size",
      desc: "Personal attention with interactive classroom learning.",
    },
    {
      icon: "💻",
      title: "100% Practical Training",
      desc: "Hands-on coding, AI tools and live implementation in every course.",
    },
  ];

  return (
    <section
      id="whychoose"
      className="relative py-24 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 overflow-hidden"
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-20"
        style={{ backgroundImage: "url('/images/hero.jpeg')" }}
      ></div>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-slate-950/75"></div>

      {/* Glow */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="max-w-3xl mx-auto mb-16 rounded-3xl border border-cyan-500/20 bg-white/5 backdrop-blur-xl p-8">

          <h2 className="text-5xl font-extrabold text-center">
            Why Choose <span className="text-cyan-400">CodeAI Institute</span>
          </h2>

          <p className="text-center text-gray-300 mt-5">
            We provide practical, industry-focused training designed to make
            students job-ready with the latest AI technologies.
          </p>

        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {features.map((item, index) => (
            <div
              key={index}
              className="rounded-3xl p-8 border border-cyan-500/20 bg-white/5 backdrop-blur-xl hover:border-cyan-400 hover:shadow-[0_0_35px_rgba(34,211,238,0.30)] hover:-translate-y-3 transition-all duration-500"
            >
              <div className="w-20 h-20 rounded-full bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-5xl mb-6">
                {item.icon}
              </div>

              <h3 className="text-2xl font-bold text-cyan-400">
                {item.title}
              </h3>

              <p className="text-gray-300 mt-4 leading-7">
                {item.desc}
              </p>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}