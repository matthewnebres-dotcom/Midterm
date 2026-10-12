
import { useState } from 'react'

function App() {
  const [menu, setMenu] = useState(false)
  const [showMore, setShowMore] = useState(false)
  const [details, setDetails] = useState(-1)
  const [sent, setSent] = useState(false)

  const projects = [
    {
      name: 'To-Do List',
      type: 'Web Application',
      description: 'A simple application for managing daily tasks.',
      number: '01',
    },
    {
      name: 'Airline System',
      type: 'Database Project',
      description: 'A system for managing flights, passengers, and reservations.',
      number: '02',
    },
    {
      name: 'Calculator',
      type: 'Web application',
      description: 'A simple calculator',
      number: '03',
    },
  ]

  function sendMessage(e) {
    e.preventDefault()

    const form = e.target
    const subject = encodeURIComponent('Portfolio Contact Message')
    const body = encodeURIComponent(
      `Name: ${form.name.value}\nEmail: ${form.email.value}\nMessage: ${form.message.value}`
    )

    window.location.href =
      `mailto:matthewnebres@cvsu.edu.ph?subject=${subject}&body=${body}`

    setSent(true)
    form.reset()
  }

  const navItems = ['Home', 'About', 'Projects', 'Resume', 'Contact']

  return (
    <div className="min-h-screen overflow-hidden bg-[#071f16] text-slate-100">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 border-b border-white/10 bg-[#071f16]/95 px-6 py-5 backdrop-blur">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-4">
          <a href="#home" className="text-2xl font-black tracking-wider">
            MY PORTFOLIO<span className="text-yellow-400">.</span>
          </a>

          <button
            onClick={() => setMenu(!menu)}
            className="rounded-lg border border-white/20 px-4 py-2 md:hidden"
          >
            {menu ? 'Close' : 'Menu'}
          </button>

          <div
            className={`${
              menu ? 'flex' : 'hidden'
            } w-full flex-col gap-5 md:flex md:w-auto md:flex-row`}
          >
            {navItems.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                onClick={() => setMenu(false)}
                className="text-slate-300 transition hover:text-yellow-400"
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      </nav>

      {/* Home */}
      <section
        id="home"
        className="scroll-mt-24 px-6 py-24 sm:py-32"
      >
        <div className="mx-auto grid max-w-6xl items-center gap-12 md:grid-cols-2">
          <div>
            <p className="font-bold tracking-[0.25em] text-yellow-400">
              BSIT STUDENT PORTFOLIO
            </p>

            <h1 className="mt-5 text-5xl font-black leading-tight sm:text-7xl">
              Matthew
              <br />
              <span className="text-green-400">Nebres.</span>
            </h1>

            <p className="mt-6 max-w-lg leading-8 text-slate-400">
              An Information Technology student interested in web development,
              drawing, and game creation. I want to improve my skills and build
              projects that turn my ideas into reality.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="#projects"
                className="rounded-xl bg-yellow-400 px-6 py-3 font-bold text-slate-950 transition hover:bg-white"
              >
                View My Work ↗
              </a>

              <a
                href="#about"
                className="rounded-xl border border-white/20 px-6 py-3 font-bold transition hover:border-green-400 hover:text-green-400"
              >
                About Me
              </a>
            </div>
          </div>

          <div className="flex justify-center">
            <div className="relative w-full max-w-sm rounded-3xl border border-green-400/30 bg-linear-to-br from-yellow-400/10 to-violet-500/20 p-8 text-center shadow-2xl shadow-violet-900/20">
              <div className="absolute -right-3 -top-3 h-16 w-16 rounded-full bg-yellow-400/10 blur-xl" />

              
              <img
                src={`${import.meta.env.BASE_URL}profile.jpg`}
                alt="Matthew Nebres"
                className="mx-auto h-40 w-40 rounded-full border-4 border-yellow-400/50 object-cover shadow-xl"
               />


              <h2 className="mt-6 text-2xl font-bold">Matthew Nebres</h2>
              <p className="mt-2 text-slate-400">
                Student • Creative • Gamer
              </p>

              <div className="mt-6 flex justify-center gap-3">
                <span className="rounded-full bg-yellow-400/10 px-4 py-2 text-sm text-cyan-300">
                  Technology
                </span>
                <span className="rounded-full bg-green-400/10 px-4 py-2 text-sm text-violet-300">
                  Creativity
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About */}
      <section
        id="about"
        className="scroll-mt-24 border-y border-white/5 bg-[#103b29] px-6 py-20"
      >
        <div className="mx-auto max-w-6xl">
          <p className="font-bold tracking-widest text-yellow-400">
            GET TO KNOW ME
          </p>

          <h2 className="mt-3 text-4xl font-black sm:text-5xl">
            About Me<span className="text-green-400">.</span>
          </h2>

          <div className="mt-8 grid gap-10 md:grid-cols-2">
            <p className="leading-8 text-slate-400">
              I am currently taking Bachelor of Science in Information
              Technology at Cavite State University Tanza Campus. I am learning programming,
              database management, and website development through my school
              projects. Outside of coding, I enjoy anime, drawing characters, reading mangas,
              and thinking of ideas for my own games.
            </p>

            <div>
              <h3 className="text-xl font-bold">My Skills and Interests</h3>

              <div className="mt-5 flex flex-wrap gap-3">
                {[
                  'ReactJS',
                  'Tailwind CSS',
                  'JavaScript',
                  'HTML & CSS',
                  'Java',
                  'Drawing',
                  'Game Design',
                ].map((skill) => (
                  <span
                    key={skill}
                    className="rounded-lg border border-green-400/20 bg-green-400/10 px-4 py-3 text-sm text-violet-200"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects */}
      <section
        id="projects"
        className="scroll-mt-24 px-6 py-20"
      >
        <div className="mx-auto max-w-6xl">
          <p className="font-bold tracking-widest text-yellow-400">
            WHAT I HAVE WORKED ON
          </p>

          <div className="mt-3 flex flex-wrap items-end justify-between gap-5">
            <h2 className="text-4xl font-black sm:text-5xl">
              My Projects<span className="text-green-400">.</span>
            </h2>

            <button
              onClick={() => setShowMore(!showMore)}
              className="rounded-lg border border-yellow-400/40 px-5 py-3 text-cyan-300 transition hover:bg-yellow-400 hover:text-slate-950"
            >
              {showMore ? 'Show Less ↑' : 'View More ↓'}
            </button>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {projects.slice(0, showMore ? 3 : 2).map((project, i) => (
              <article
                key={project.name}
                className="rounded-2xl border border-white/10 bg-[#103b29] p-6 transition hover:-translate-y-1 hover:border-yellow-400/50"
              >
                <div className="flex items-center justify-between">
                  <span className="text-5xl font-black text-green-400/70">
                    {project.number}
                  </span>
                  <span className="rounded-full bg-yellow-400/10 px-3 py-2 text-xs text-cyan-300">
                    {project.type}
                  </span>
                </div>

                <h3 className="mt-7 text-2xl font-bold">{project.name}</h3>

                <p className="mt-3 leading-7 text-slate-400">
                  {project.description}
                </p>

                <button
                  onClick={() => setDetails(details === i ? -1 : i)}
                  className="mt-6 font-bold text-yellow-400 transition hover:text-white"
                >
                  {details === i ? 'Hide Details −' : 'Project Details +'}
                </button>

                {details === i && (
                  <div className="mt-4 rounded-lg border border-white/10 bg-[#071f16] p-4 text-sm leading-6 text-slate-300">
                    This project helps me practice problem-solving and apply
                    what I have learned. More features and improvements can be
                    added as I continue learning.
                  </div>
                )}
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Resume */}
      <section
        id="resume"
        className="scroll-mt-24 border-y border-white/5 bg-[#103b29] px-6 py-20"
      >
        <div className="mx-auto max-w-6xl">
          <p className="font-bold tracking-widest text-yellow-400">
            MY BACKGROUND
          </p>

          <h2 className="mt-3 text-4xl font-black sm:text-5xl">
            Resume<span className="text-green-400">.</span>
          </h2>

          <div className="mt-8 grid gap-6 md:grid-cols-2">
            <div className="rounded-2xl border border-white/10 bg-[#071f16] p-6">
              <p className="text-sm font-bold text-green-400">EDUCATION</p>
              <h3 className="mt-4 text-xl font-bold">
                Bachelor of Science in Information Technology
              </h3>
              <p className="mt-3 text-slate-400">
                Cavite State University Tanza Campus
              </p>
              <p className="mt-2 text-sm text-slate-500">
                College Student
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-[#071f16] p-6">
              <p className="text-sm font-bold text-green-400">PROFILE</p>
              <h3 className="mt-4 text-xl font-bold">
                Skills and Interests
              </h3>
              <p className="mt-3 leading-7 text-slate-400">
                Basic web development, database systems, creative thinking,
                character drawing, and game ideas.
              </p>
            </div>
          </div>

          <a
            href="mailto:matthewnebres@cvsu.edu.ph?subject=Resume%20Request"
            
            className="mt-7 inline-block rounded-xl bg-yellow-400 px-6 py-3 font-bold text-green-950 transition hover:bg-yellow-300"

          >
            Request My CV ↗
          </a>
        </div>
      </section>

      {/* Contact */}
      <section
        id="contact"
        className="scroll-mt-24 px-6 py-20"
      >
        <div className="mx-auto grid max-w-6xl gap-12 md:grid-cols-2">
          <div>
            <p className="font-bold tracking-widest text-yellow-400">
              LET'S CONNECT
            </p>

            <h2 className="mt-3 text-4xl font-black sm:text-5xl">
              Contact Me<span className="text-green-400">.</span>
            </h2>

            <p className="mt-6 max-w-md leading-8 text-slate-400">
              Have a question or want to know more about my projects? Send me
              a message using the form.
            </p>

            <p className="mt-7 break-all text-cyan-300">
              matthewnebres@cvsu.edu.ph
            </p>

            <a
              href="https://github.com/matthewnebres-dotcom"
              target="_blank"
              rel="noreferrer"
              className="mt-4 inline-block text-green-400 transition hover:text-white"
            >
              Visit My GitHub ↗
            </a>
          </div>

          <form
            onSubmit={sendMessage}
            className="space-y-5 rounded-2xl border border-white/10 bg-[#103b29] p-6"
          >
            <div>
              <label htmlFor="name" className="mb-2 block text-sm">
                Your Name
              </label>
              <input
                id="name"
                name="name"
                required
                placeholder="Enter your name"
                className="w-full rounded-lg border border-white/10 bg-[#071f16] p-3 outline-none focus:border-yellow-400"
              />
            </div>

            <div>
              <label htmlFor="email" className="mb-2 block text-sm">
                Your Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                placeholder="Enter your email"
                className="w-full rounded-lg border border-white/10 bg-[#071f16] p-3 outline-none focus:border-yellow-400"
              />
            </div>

            <div>
              <label htmlFor="message" className="mb-2 block text-sm">
                Your Message
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows="4"
                placeholder="Write your message"
                className="w-full resize-y rounded-lg border border-white/10 bg-[#071f16] p-3 outline-none focus:border-yellow-400"
              />
            </div>

            <button
              type="submit"
              className="w-full rounded-lg bg-yellow-400 px-6 py-3 font-bold text-slate-950 transition hover:bg-white"
            >
              Send Message ↗
            </button>

            {sent && (
              <p className="text-sm text-cyan-300">
                Your email app should open so you can send your message.
              </p>
            )}
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 bg-[#103b29] px-6 py-7">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-4 text-sm text-slate-500">
          <p>© 2026 Matthew T. Nebres</p>
          <p>Built with ReactJS and Tailwind CSS</p>
          <a href="#home" className="text-yellow-400 hover:text-white">
            Back to Top ↑
          </a>
        </div>
      </footer>
    </div>
  )
}

export default App
