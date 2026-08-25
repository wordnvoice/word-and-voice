import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export default function ProjectsPage() {
  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-[#050B15] text-white">

        {/* =========================================================
            PROJECTS HERO
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
                Ideas. Initiatives. Purpose.
              </h1>

              {/* Description */}
              <p className="mx-auto mt-8 w-full max-w-3xl text-center font-body text-lg leading-relaxed text-slate-300 md:text-xl">
                Word & Voice is exploring projects that bring faith, creativity,
                and practical purpose together. From creative work and digital
                initiatives to church support, fundraising efforts, and future
                collaborations, each project will have a purpose behind it.
              </p>

              {/* Divider */}
              <div className="mx-auto mt-12 h-px w-32 bg-gradient-to-r from-transparent via-cyan-400 to-transparent" />

              {/* Coming Soon */}
              <div className="mx-auto mt-12 max-w-2xl text-center">

                <p className="font-body text-sm font-semibold uppercase tracking-[0.35em] text-cyan-300">
                  Coming Soon
                </p>

                <h2 className="mt-5 font-heading text-3xl font-bold md:text-4xl">
                  Something New Is Taking Shape
                </h2>

                <p className="mt-6 font-body text-lg leading-relaxed text-slate-400">
                  This space will soon feature the projects and initiatives
                  we are working on. Some may be creative, some practical,
                  and some created in partnership with others.
                </p>

              </div>

              {/* Scripture */}
              <blockquote className="mt-14 w-full max-w-3xl text-center font-heading text-2xl italic leading-relaxed text-white md:text-3xl">
                “Whatever you do, work at it with all your heart, as working
                for the Lord.”
              </blockquote>

              {/* Reference */}
              <p className="mt-6 text-center font-body text-sm font-semibold uppercase tracking-[0.35em] text-cyan-300">
                Colossians 3:23
              </p>

            </div>
          </div>
        </section>

      </main>

      <Footer />
    </>
  );
}