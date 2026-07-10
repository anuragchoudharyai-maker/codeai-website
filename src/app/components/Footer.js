export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-cyan-500/20 bg-gradient-to-b from-slate-950 via-black to-slate-950">

      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-10"
        style={{ backgroundImage: "url('/images/hero.jpeg')" }}
      ></div>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/80"></div>

      {/* Glow */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-20 w-72 h-72 bg-cyan-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-20 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-16">

        <div className="grid md:grid-cols-4 gap-10">

          {/* Company */}
          <div>
            <h2 className="text-4xl font-extrabold">
              <span className="text-white">Code</span>
              <span className="text-cyan-400">AI</span>
            </h2>

            <p className="text-cyan-300 mt-4 font-medium">
              🚀 Chhattisgarh's Best Practical AI Training Institute
            </p>

            <p className="text-gray-400 mt-5 leading-7">
              Learn AI, Data Science, Data Analytics and Full Stack
              Development with Live Projects and Industry Experts.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold text-cyan-400 mb-5">
              Quick Links
            </h3>

            <ul className="space-y-3 text-gray-300">
              <li><a href="#home" className="hover:text-cyan-400 transition">Home</a></li>
              <li><a href="#courses" className="hover:text-cyan-400 transition">Courses</a></li>
              <li><a href="#about" className="hover:text-cyan-400 transition">About</a></li>
              <li><a href="#contact" className="hover:text-cyan-400 transition">Contact</a></li>
            </ul>
          </div>

          {/* Courses */}
          <div>
            <h3 className="text-xl font-bold text-cyan-400 mb-5">
              Popular Courses
            </h3>

            <ul className="space-y-3 text-gray-300">
              <li>🤖 Generative AI</li>
              <li>🛠 AI Tools Mastery</li>
              <li>📊 Data Science</li>
              <li>📈 Data Analytics</li>
              <li>💻 Full Stack Development</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-xl font-bold text-cyan-400 mb-5">
              Contact
            </h3>

            <p className="text-gray-300">📞 +91 7756064254</p>
            <p className="text-gray-300 mt-3">📧 info@codeaiinstitute.com</p>
            <p className="text-gray-300 mt-3">
              📍 Swarn Commercial Complex,
              <br />
              RSS Nagar,
              <br />
              Korba, Chhattisgarh
            </p>

            <a
              href="https://wa.me/917756064254"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-6 rounded-xl bg-gradient-to-r from-green-500 to-emerald-500 px-5 py-3 font-bold text-white transition-all duration-300 hover:scale-105 hover:shadow-[0_0_25px_rgba(34,197,94,0.45)]"
            >
              💬 Chat on WhatsApp
            </a>

          </div>

        </div>

        <hr className="border-cyan-500/20 my-10" />

        <div className="flex flex-col md:flex-row justify-between items-center">

          <p className="text-gray-400 text-center md:text-left">
            © 2026 CodeAI Institute. All Rights Reserved.
          </p>

          <div className="flex gap-5 mt-5 md:mt-0 text-2xl">
            <a href="#" className="hover:scale-110 transition">📘</a>
            <a href="#" className="hover:scale-110 transition">📷</a>
            <a href="#" className="hover:scale-110 transition">▶️</a>
            <a href="#" className="hover:scale-110 transition">💬</a>
          </div>

        </div>

      </div>

    </footer>
  );
}