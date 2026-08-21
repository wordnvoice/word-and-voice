import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export default function ProjectsPage() {
  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-[#050B15] text-white">

        {/* =========================================================
            PROJECTS
            ========================================================= */}
        <section className="relative min-h-[calc(100vh-120px)] overflow-hidden">

          {/* Background */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#0B1728] via-[#050B15] to-[#050B15]" />

          {/* Content */}
          <div className="relative z-10 flex min-h-[calc(100vh-120px)] w-full items-center justify-center px-6 py-32">

            <div className="flex w-full flex-col items-center text-center">

              {/* Eyebrow */}
              <p className="font-body text-sm font-semibold uppercase tracking-[0.45em] text-cyan-300">
                Projects
              </p>

              {/* Heading */}
              <h1 className="mt-6 w-full text-center font-heading text-5xl font-bold leading-tight md:text-6xl lg:text-7xl">
                Something New Is Taking Shape
              </h1>

              {/* Description */}
              <p className="mt-8 w-full max-w-3xl text-center font-body text-lg leading-relaxed text-slate-300 md:text-xl">
                We’re working on new creative projects that bring together
                music, stories, visual art, and the Word of God. This space
                will soon become a place to explore what we’re creating and
                what’s still taking shape.
              </p>

              {/* Divider */}
              <div className="mx-auto mt-12 h-px w-32 bg-gradient-to-r from-transparent via-cyan-400 to-transparent" />

              {/* Scripture */}
              <blockquote className="mt-12 w-full max-w-3xl text-center font-heading text-2xl italic leading-relaxed text-white md:text-3xl">
                “Being confident of this, that he who began a good work in you
                will carry it on to completion.”
              </blockquote>

              {/* Reference */}
              <p className="mt-6 text-center font-body text-sm font-semibold uppercase tracking-[0.35em] text-cyan-300">
                Philippians 1:6
              </p>

            </div>
          </div>
        </section>

      </main>

      <Footer />
    </>
  );
}