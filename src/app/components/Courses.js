import Image from "next/image";

const courses = [
  {
    title: "Gen AI Mastery",
    image: "/images/GenAIMastery.jpeg",
    duration: "6 Months",
    desc: "Learn Prompt Engineering, LLMs, RAG, AI Agents & Live Projects.",
    badge: "🔥 Trending",
    link: "/gen-ai-mastery",
  },
  {
    title: "Gen AI Tools Mastery",
    image: "/images/GenAIToolsMastery.jpeg",
    duration: "2 Months",
    desc: "Master 50+ AI Tools including Prompt Engineering, Automation, AI Productivity & Real Projects.",
    badge: "⭐ Popular",
    link: "/gen-ai-tools-mastery",
  },
  {
    title: "Data Science",
    image: "/images/DataScience.jpeg",
    duration: "6 Months",
    desc: "Python, NumPy, Pandas, Machine Learning, Deep Learning & Real Projects.",
    badge: "🚀 Career",
    link: "/data-science",
  },
  {
    title: "Data Analytics",
    image: "/images/DataAnalytics.jpeg",
    duration: "4 Months",
    desc: "Excel, SQL, Power BI, Tableau & Dashboard Development.",
    badge: "📈 In Demand",
    link: "/data-analytics",
  },
];

export default function Courses() {
  return (
    <section
      id="courses"
      data-aos="zoom-in"
      className="relative py-24 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 overflow-hidden"
    >
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-20"
        style={{ backgroundImage: "url('/images/hero.jpeg')" }}
      />

      <div className="absolute inset-0 bg-slate-950/75"></div>

      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-80 h-80 rounded-full bg-cyan-500/10 blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 rounded-full bg-blue-500/10 blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">

        <div className="max-w-3xl mx-auto mb-16 rounded-3xl border border-cyan-500/20 bg-white/5 backdrop-blur-xl p-8">
          <h2 className="text-5xl font-extrabold text-center">
            Our <span className="text-cyan-400">Courses</span>
          </h2>

          <p className="mt-4 text-center text-lg text-gray-300">
            Choose your career path with industry-ready practical training.
          </p>
        </div>

        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-8">

          {courses.map((course, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-3xl border border-cyan-500/30 bg-white/5 backdrop-blur-xl transition-all duration-500 hover:-translate-y-3 hover:border-cyan-400 hover:shadow-[0_0_45px_rgba(34,211,238,0.35)]"
            >

              <div className="absolute top-4 left-4 z-20 rounded-full bg-cyan-500 px-3 py-1 text-xs font-bold text-black">
                {course.badge}
              </div>

              <div className="h-[300px] flex items-center justify-center overflow-hidden rounded-t-3xl bg-black">

                <Image
                  src={course.image}
                  alt={course.title}
                  width={700}
                  height={900}
                  className="max-h-full w-auto object-contain transition-transform duration-500 group-hover:scale-105"
                />

              </div>

              <div className="p-6 flex flex-col justify-between min-h-[250px]">

                <h3 className="text-2xl font-bold text-white group-hover:text-cyan-400 transition">
                  {course.title}
                </h3>

                <p className="mt-3 text-sm leading-6 text-gray-300">
                  {course.desc}
                </p>

                <div className="mt-6 flex items-center justify-between">

                  <span className="rounded-full border border-cyan-500/30 bg-cyan-500/10 px-3 py-1 text-sm text-cyan-300">
                    ⏳ {course.duration}
                  </span>

                  <a
                    href={course.link}
                    className="rounded-xl bg-gradient-to-r from-cyan-400 to-blue-500 px-4 py-2 text-sm font-bold text-black transition-all duration-300 hover:scale-105"
                  >
                    Explore →
                  </a>

                </div>

              </div>

            </div>
          ))}
          </div>

      </div>

    </section>
  );
}