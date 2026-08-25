import Link from "next/link";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export default function AboutPage() {
  return (
    <>
      <Navbar />

      <main className="bg-[#050B15] text-white">

        {/* =========================================================
            HERO
            ========================================================= */}
        <section className="relative overflow-hidden pt-44 pb-20 md:pt-48 md:pb-24">

          <div className="absolute inset-0 bg-gradient-to-b from-[#0B1728] via-[#050B15] to-[#050B15]" />

          <div className="relative z-10 mx-auto max-w-6xl px-6">

            <div className="mx-auto max-w-5xl text-center">

              <p className="font-body text-sm font-semibold uppercase tracking-[0.4em] text-cyan-300">
                About Word & Voice
              </p>

              <h1 className="mt-5 font-heading text-5xl font-bold leading-[1.05] md:text-6xl lg:text-7xl">
                Creating With Purpose.
                <br />
                Sharing His Love.
              </h1>

            <div className="mx-auto flex w-full max-w-3xl justify-center"></div>
            <p
              className="w-full text-center font-body text-lg leading-8 text-slate-300 md:text-xl"
               style={{ textAlign: "center" }}
            >
                Word & Voice is a Christian creative platform built around
                worship music, books, devotionals, creative projects, and
                Christ-centered resources. Through each of these, our desire
                is to create with purpose and point hearts toward Jesus Christ.
              </p>

            </div>

          </div>
        </section>


        {/* =========================================================
            WHO WE ARE
            ========================================================= */}
        <section className="border-t border-white/10 py-16 md:py-20">

          <div className="mx-auto max-w-6xl px-6">

            <div className="grid gap-8 md:grid-cols-[0.8fr_1.2fr] md:gap-16">

              <div>

                <p className="font-body text-sm font-semibold uppercase tracking-[0.35em] text-cyan-300">
                  Who We Are
                </p>

                <h2 className="mt-3 max-w-md font-heading text-4xl font-bold leading-tight md:text-5xl">
                  Faith expressed through creativity.
                </h2>

              </div>

              <div className="font-body text-lg leading-8 text-slate-300">

                <p>
                  Word & Voice brings together faith and creativity through
                  different forms of expression. Music, writing, visual
                  storytelling, digital projects, and other creative work can
                  become ways of communicating truth, encouraging people, and
                  reflecting the hope found in Christ.
                </p>

                <p className="mt-5 text-slate-400">
                  This platform is continually growing. New ideas and projects
                  will take shape over time — some creative, some practical,
                  and some developed in collaboration with others.
                </p>

              </div>

            </div>

          </div>
        </section>


        {/* =========================================================
            WHY WORD & VOICE
            ========================================================= */}
        <section className="border-t border-white/10 py-16 md:py-20">

          <div className="mx-auto max-w-6xl px-6">

            <div className="grid items-center gap-10 md:grid-cols-2 md:gap-16">

              <div>

                <p className="font-body text-sm font-semibold uppercase tracking-[0.35em] text-cyan-300">
                  Why Word & Voice
                </p>

                <h2 className="mt-3 font-heading text-4xl font-bold leading-tight md:text-5xl">
                  From the Word to the voice.
                </h2>

              </div>

              <div className="font-body text-lg leading-8 text-slate-300">

                <p>
                  The name Word & Voice reflects a simple idea: God&apos;s Word
                  gives us truth, while our voice gives us a way to express,
                  share, and communicate that truth.
                </p>

                <p className="mt-5 text-slate-400">
                  Whether through a worship song, a devotional, a book, a
                  visual story, or a practical project, we want the things we
                  create to have a purpose beyond themselves.
                </p>

              </div>

            </div>

          </div>
        </section>


        {/* =========================================================
            WHAT WE CREATE
            ========================================================= */}
        <section className="border-t border-white/10 py-16 md:py-20">

          <div className="mx-auto max-w-6xl px-6">

            <div className="max-w-3xl">

              <p className="font-body text-sm font-semibold uppercase tracking-[0.35em] text-cyan-300">
                What We Create
              </p>

              <h2 className="mt-3 font-heading text-4xl font-bold leading-tight md:text-5xl">
                Different forms. One purpose.
              </h2>

              <p className="mt-5 font-body text-lg leading-8 text-slate-400">
                Word & Voice brings several forms of creativity together under
                one purpose: creating things that encourage, serve, communicate,
                and point toward Christ.
              </p>

            </div>


            <div className="mt-10 grid gap-5 md:grid-cols-2">

              <div className="rounded-3xl border border-white/10 bg-white/[0.035] p-7">
                <p className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-300">
                  01
                </p>

                <h3 className="mt-3 font-heading text-2xl font-bold">
                  Music
                </h3>

                <p className="mt-3 font-body leading-7 text-slate-400">
                  Original worship songs and music created to glorify Christ,
                  encourage believers, and give expression to faith.
                </p>
              </div>


              <div className="rounded-3xl border border-white/10 bg-white/[0.035] p-7">
                <p className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-300">
                  02
                </p>

                <h3 className="mt-3 font-heading text-2xl font-bold">
                  Books & Devotionals
                </h3>

                <p className="mt-3 font-body leading-7 text-slate-400">
                  Written resources, devotionals, reflections, and books
                  created to encourage deeper reflection on faith and
                  Scripture.
                </p>
              </div>


              <div className="rounded-3xl border border-white/10 bg-white/[0.035] p-7">
                <p className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-300">
                  03
                </p>

                <h3 className="mt-3 font-heading text-2xl font-bold">
                  Projects & Initiatives
                </h3>

                <p className="mt-3 font-body leading-7 text-slate-400">
                  Creative and practical initiatives that may support churches,
                  communities, collaborations, and other Christ-centered
                  purposes.
                </p>
              </div>


              <div className="rounded-3xl border border-white/10 bg-white/[0.035] p-7">
                <p className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-300">
                  04
                </p>

                <h3 className="mt-3 font-heading text-2xl font-bold">
                  Creative Media
                </h3>

                <p className="mt-3 font-body leading-7 text-slate-400">
                  Visual storytelling, digital content, and other creative work
                  designed to communicate meaningful stories and biblical
                  themes.
                </p>
              </div>

            </div>

          </div>
        </section>


        {/* =========================================================
    OUR APPROACH
    ========================================================= */}
<section className="border-t border-white/10 py-16 md:py-20">

  <div className="mx-auto max-w-6xl px-6">

    <div className="mb-10 text-center">

      <p className="font-body text-sm font-semibold uppercase tracking-[0.4em] text-cyan-300">
        Our Approach
      </p>

      <h2 className="mt-3 font-heading text-4xl font-bold leading-tight md:text-5xl">
        Worship. Faith. Hope.
      </h2>

    </div>

    <div className="grid gap-5 md:grid-cols-3">

      {/* WORSHIP */}
      <div className="rounded-3xl border border-white/10 bg-white/[0.035] p-7">

        <h3 className="font-heading text-3xl font-bold text-[#E5B84B]">
          WORSHIP.
        </h3>

        <p className="mt-3 font-body text-lg leading-8 text-slate-300">
          We exist to glorify{" "}
          <span className="font-semibold text-[#E5B84B]">
            God
          </span>{" "}
          through every song, every word and every creative work.
        </p>

      </div>


      {/* FAITH */}
      <div className="rounded-3xl border border-white/10 bg-white/[0.035] p-7">

        <h3 className="font-heading text-3xl font-bold text-white">
          FAITH.
        </h3>

        <p className="mt-3 font-body text-lg leading-8 text-slate-300">
          Creating worship music, books and biblical resources that
          strengthen believers in their daily walk with Christ.
        </p>

      </div>


      {/* HOPE */}
      <div className="rounded-3xl border border-white/10 bg-white/[0.035] p-7">

        <h3 className="font-heading text-3xl font-bold text-cyan-400">
          HOPE.
        </h3>

        <p className="mt-3 font-body text-lg leading-8 text-slate-300">
          Sharing Christ through creative projects that encourage
          people, strengthen the Church and point hearts back to Him.
        </p>

      </div>

    </div>

  </div>

</section>


        {/* =========================================================
            SCRIPTURE
            ========================================================= */}
        <section className="border-t border-white/10 py-16 md:py-20">

          <div className="mx-auto max-w-5xl px-6">

            <div className="rounded-3xl border border-white/10 bg-white/[0.025] px-8 py-10 text-center md:px-12 md:py-12">

              <blockquote className="font-heading text-2xl italic leading-relaxed md:text-3xl">
                “And whatever you do, in word or deed, do everything in the
                name of the Lord Jesus.”
              </blockquote>

              <p className="mt-5 font-body text-sm font-semibold uppercase tracking-[0.35em] text-cyan-300">
                Colossians 3:17
              </p>

            </div>

          </div>
        </section>


        {/* =========================================================
            EXPLORE
            ========================================================= */}
        <section className="pb-16 md:pb-20">

          <div className="mx-auto flex w-full max-w-3xl flex-col items-center justify-center text-center">

            <p
              className="w-full text-center font-body text-sm font-semibold uppercase tracking-[0.35em] text-cyan-300"
              style={{ textAlign: "center" }}
            >
                Explore Word & Voice
              </p>

              <h2 className="mt-3 w-full text-center font-heading text-4xl font-bold md:text-5xl"
                  style={{ textAlign: "center" }}
              >
                There is more to come.
              </h2>

              <p  className="mx-auto mt-4 w-full max-w-2xl text-center font-body text-lg leading-8 text-slate-400"
                  style={{ textAlign: "center" }}
              >    
                Explore the music, books, and projects being created through
                Word & Voice.
              </p>

              <div className="mt-7 flex w-full flex-wrap justify-center gap-4">

                <Link
                  href="/music"
                  className="btn-primary"
                >
                  Explore Music
                </Link>

                <Link
                  href="/books"
                  className="btn-secondary"
                >
                  Explore Books
                </Link>

                <Link
                  href="/projects"
                  className="btn-secondary"
                >
                  View Projects
                </Link>

              </div>

            </div>

          </section>

      </main>

      <Footer />
    </>
  );
}