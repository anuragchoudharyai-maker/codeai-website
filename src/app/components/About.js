import Image from "next/image";

export default function About() {
return (
<section
  id="about"
  data-aos="fade-up"
  className="relative py-24 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 overflow-hidden"
>
  {/* Background Image */}
<div
  className="absolute inset-0 bg-cover bg-center opacity-20"
  style={{ backgroundImage: "url('/images/hero.jpeg')" }}
></div>

{/* Dark Overlay */}
<div className="absolute inset-0 bg-slate-950/75"></div>
<div className="relative z-10 max-w-7xl mx-auto px-6">

<div className="grid lg:grid-cols-2 gap-16 items-center">  

      {/* Left Image */}  
      <div>  
        <Image  
          src="/images/about.jpeg"  
          alt="About CodeAI"  
          width={700}  
          height={500}  
          className="rounded-3xl border border-cyan-500/30 shadow-[0_0_40px_rgba(34,211,238,0.20)] transition-all duration-700 hover:scale-105 hover:shadow-[0_0_60px_rgba(34,211,238,0.40)]"  
        />  
      </div>  

      {/* Right Content */}  
      <div>  

        <span className="text-cyan-400 font-semibold uppercase tracking-widest">  
          About Us  
        </span>  

        <h2 className="text-5xl font-extrabold mt-4">  
          Welcome to  
          <span className="text-cyan-400"> CodeAI Institute</span>  
        </h2>  

        <p className="mt-8 text-gray-300 leading-8 text-lg">  
          CodeAI Institute is committed to preparing students for the  
          future with practical, industry-focused training in  
          Generative AI, Data Science, Data Analytics and Full Stack  
          Development. Our courses are designed with live projects,  
          real-world applications and expert mentorship.  
        </p>  

        <div className="grid grid-cols-2 gap-6 mt-10">  

          <div className="bg-slate-800 rounded-2xl p-5 border border-cyan-500/20">  
            <h3 className="text-cyan-400 font-bold">  
              ✔ Live Projects  
            </h3>  
            <p className="text-gray-400 mt-2 text-sm">  
              Work on real industry projects.  
            </p>  
          </div>  

          <div className="bg-slate-800 rounded-2xl p-5 border border-cyan-500/20">  
            <h3 className="text-cyan-400 font-bold">  
              ✔ Expert Trainers  
            </h3>  
            <p className="text-gray-400 mt-2 text-sm">  
              Learn from experienced mentors.  
            </p>  
          </div>  

          <div className="bg-slate-800 rounded-2xl p-5 border border-cyan-500/20">  
            <h3 className="text-cyan-400 font-bold">  
              ✔ Placement Support  
            </h3>  
            <p className="text-gray-400 mt-2 text-sm">  
              Career guidance and interview preparation.  
            </p>  
          </div>  

          <div className="bg-slate-800 rounded-2xl p-5 border border-cyan-500/20">  
            <h3 className="text-cyan-400 font-bold">  
              ✔ Industry Certificate  
            </h3>  
            <p className="text-gray-400 mt-2 text-sm">  
              Get a professional course completion certificate.  
            </p>  
          </div>  

        </div>  

        {/* Stats */}  
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-10">  

          <div className="text-center">  
            <h2 className="text-4xl font-bold text-cyan-400">100+</h2>  
            <p className="text-gray-400 text-sm">Students</p>  
          </div>  

          <div className="text-center">  
            <h2 className="text-4xl font-bold text-cyan-400">50+</h2>  
            <p className="text-gray-400 text-sm">AI Tools</p>  
          </div>  

          <div className="text-center">  
            <h2 className="text-4xl font-bold text-cyan-400">100+</h2>  
            <p className="text-gray-400 text-sm">Projects</p>  
          </div>  

          <div className="text-center">  
            <h2 className="text-4xl font-bold text-cyan-400">24×7</h2>  
            <p className="text-gray-400 text-sm">Support</p>  
          </div>  

        </div>  

      </div>  

    </div>  

  </div>  
</section>

);
}