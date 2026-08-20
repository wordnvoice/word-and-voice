import Image from "next/image";

export default function BooksHero() {
  return (
    <section className="relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <Image
          src="/images/backgrounds/books-hero.png"
          alt="Open Bible at Psalm 119"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-[#050B15]/55" />

        {/* Left Gradient */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#050B15]/90 via-[#050B15]/55 to-[#050B15]/15" />
      </div>

      {/* Content */}
      <div className="relative z-10 container flex min-h-[80vh] items-center pt-36 pb-20">
        <div className="max-w-4xl">

          {/* Bible Verse */}
          <blockquote className="max-w-3xl font-serif italic text-white leading-[1.18] text-5xl md:text-6xl lg:text-7xl">
            "Your word is a lamp
            <br />
            for my feet,
            <br />
            a light on my path."
          </blockquote>

          <p className="mt-7 text-sm font-semibold uppercase tracking-[0.45em] text-cyan-300">
            Psalm 119:105
          </p>

          {/* Introduction */}
          <p className="mt-20 max-w-3xl font-playfair text-2xl md:text-3xl leading-relaxed text-slate-200">
            Stories, devotionals and resources
            <br />
            to help you encounter{" "}
            <span className="text-[#1DB6FF] font-semibold">
              God
            </span>{" "}
            through every page.
          </p>

          {/* Divider */}
          <div className="mt-16 h-px w-36 bg-gradient-to-r from-cyan-400/70 via-cyan-300/30 to-transparent" />

        </div>
      </div>
    </section>
  );
}