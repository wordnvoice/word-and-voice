import Image from "next/image";

export default function MusicHero() {
  return (
    <section className="relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <Image
          src="/images/backgrounds/master-worship-scene2.png"
          alt="Jesus and Worship"
          fill
          priority
          sizes="100vw"
          className="object-cover object-[80%_13%]"
        />

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-[#050B15]/55" />

        {/* Left Gradient */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#050B15]/90 via-[#050B15]/55 to-[#050B15]/15" />
      </div>

      {/* Content */}
      <div className="relative z-10 container flex min-h-[90vh] items-center pt-36 pb-20">
        <div className="max-w-5xl">

          {/* Bible Verse */}
          <blockquote className="max-w-4xl font-serif italic text-white leading-[1.18] text-5xl md:text-6xl lg:text-7xl">
            "Sing to the Lord
            <br />
            a new song;
            <br />
            sing to the Lord,
            <br />
            all the earth."
          </blockquote>

          <p className="mt-7 text-sm font-semibold uppercase tracking-[0.45em] text-cyan-300">
            Psalm 96:1
          </p>

          {/* Mission Statement */}
          <p className="mt-20 max-w-3xl font-playfair text-2xl md:text-3xl leading-relaxed text-slate-200">
            We exist to glorify{" "}
            <span className="text-[#1DB6FF] font-semibold">
              God
            </span>{" "}
            through every song, every word and every creative work.
          </p>

          {/* Divider */}
          <div className="mt-16 h-px w-36 bg-gradient-to-r from-cyan-400/70 via-cyan-300/30 to-transparent" />

        </div>
      </div>
    </section>
  );
}