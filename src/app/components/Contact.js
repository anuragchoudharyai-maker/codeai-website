"use client";

export default function Contact() {
  const handleWhatsApp = (e) => {
    e.preventDefault();

    const form = e.target;

    const name = form.name.value;
    const phone = form.phone.value;
    const email = form.email.value;
    const message = form.message.value;

    const text = `🎓 *New Admission Enquiry*

👤 Name: ${name}
📱 Mobile: ${phone}
📧 Email: ${email}

💬 Message:
${message}`;

    window.open(
      `https://wa.me/917756064254?text=${encodeURIComponent(text)}`,
      "_blank"
    );

    form.reset();
  };

  return (
    <section
      id="contact"
      data-aos="fade-left"
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

        {/* Glass Heading */}
        <div className="max-w-3xl mx-auto mb-16 rounded-3xl border border-cyan-500/20 bg-white/5 backdrop-blur-xl p-8">

          <h2 className="text-5xl font-extrabold text-center">
            Contact <span className="text-cyan-400">Us</span>
          </h2>

          <p className="text-center text-gray-300 mt-5">
            Ready to start your AI journey? Get in touch with us today.
          </p>

        </div>

        <div className="grid lg:grid-cols-2 gap-10">

          {/* Left Side */}
          <div className="rounded-3xl border border-cyan-500/20 bg-white/5 backdrop-blur-xl p-8 shadow-[0_0_35px_rgba(34,211,238,0.15)]">

            <h3 className="text-3xl font-bold text-cyan-400 mb-8">
              Get In Touch
            </h3>

            <div className="space-y-6">

              <div>
                <h4 className="font-bold">📞 Phone</h4>
                <p className="text-gray-300">+91 7756064254</p>
              </div>

              <div>
                <h4 className="font-bold">📧 Email</h4>
                <p className="text-gray-300">
                  info@codeaiinstitute.com
                </p>
              </div>

              <div>
                <h4 className="font-bold">📍 Address</h4>
                <p className="text-gray-300">
                  Swarn Commercial Complex,<br />
                  RSS Nagar,<br />
                  Korba, Chhattisgarh
                </p>
              </div>

              <div>
                <h4 className="font-bold">🕒 Timing</h4>
                <p className="text-gray-300">
                  Monday – Saturday<br />
                  10:00 AM – 7:00 PM
                </p>
              </div>

              <a
                href="https://maps.app.goo.gl/NLaUyFpcXc5vC9GJA"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-6 rounded-xl bg-gradient-to-r from-cyan-400 to-blue-500 px-6 py-3 font-bold text-black transition hover:scale-105"
              >
                📍 Get Directions
              </a>

            </div>

          </div>
          {/* Right Side */}
          <div className="rounded-3xl border border-cyan-500/20 bg-white/5 backdrop-blur-xl p-8 shadow-[0_0_35px_rgba(34,211,238,0.15)]">

            <h3 className="text-3xl font-bold text-cyan-400 mb-8">
              Send Message
            </h3>

            <form onSubmit={handleWhatsApp} className="space-y-5">

              <input
                type="text"
                name="name"
                placeholder="Your Name"
                required
                className="w-full rounded-xl border border-cyan-500/20 bg-white/5 backdrop-blur-xl p-4 outline-none transition focus:border-cyan-400"
              />

              <input
                type="tel"
                name="phone"
                placeholder="Mobile Number"
                required
                className="w-full rounded-xl border border-cyan-500/20 bg-white/5 backdrop-blur-xl p-4 outline-none transition focus:border-cyan-400"
              />

              <input
                type="email"
                name="email"
                placeholder="Email Address"
                className="w-full rounded-xl border border-cyan-500/20 bg-white/5 backdrop-blur-xl p-4 outline-none transition focus:border-cyan-400"
              />

              <textarea
                name="message"
                rows="5"
                placeholder="Your Message"
                required
                className="w-full rounded-xl border border-cyan-500/20 bg-white/5 backdrop-blur-xl p-4 outline-none transition focus:border-cyan-400"
              ></textarea>

              <button
                type="submit"
                className="w-full rounded-xl bg-gradient-to-r from-green-500 to-emerald-500 py-4 font-bold text-white transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(34,197,94,0.45)]"
              >
                💬 Send on WhatsApp
              </button>

            </form>

          </div>

        </div>

        {/* Google Map */}

        <div className="mt-20">

          <div className="max-w-3xl mx-auto mb-10 rounded-3xl border border-cyan-500/20 bg-white/5 backdrop-blur-xl p-6">

            <h3 className="text-4xl font-bold text-center text-cyan-400">
              Visit Our Institute
            </h3>

            <p className="mt-3 text-center text-gray-300">
              Come and experience practical AI learning at CodeAI Institute.
            </p>

          </div>

          <div
          className="rounded-3xl border border-cyan-500/20 overflow-hidden shadow-[0_0_35px_rgba(34,211,238,0.20)]"
>
  <iframe
    src="https://www.google.com/maps?q=Swarn+Commercial+Complex+RSS+Nagar+Korba+Chhattisgarh&output=embed"
    width="100%"
    height="500"
    style={{ border: 0 }}
    allowFullScreen
    loading="lazy"
    referrerPolicy="no-referrer-when-downgrade"
  ></iframe>
</div>

        </div>

      </div>
    </section>
  );
}