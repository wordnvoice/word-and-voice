import Image from "next/image";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

import MusicHero from "@/components/sections/MusicHero";
import LatestReleaseCard from "@/components/cards/LatestReleaseCard";
import PlaylistSection from "@/components/sections/PlaylistSection";

export default async function MusicPage() {
  const response = await fetch(
    "http://localhost:3000/api/youtube/playlists",
    {
      next: {
        revalidate: 3600,
      },
    }
  );

  const playlists = await response.json();

  return (
    <>
      <Navbar />

      <main className="bg-[#050B15] text-white">

        {/* Hero */}
        <MusicHero />

        {/* Music Content */}
        <section className="relative overflow-hidden">

          {/* Background Texture */}
          <div className="absolute inset-0 -z-10">

            {/* Base Colour */}
            <div className="absolute inset-0 bg-[#050B15]" />

            {/* Musical Texture */}
            <Image
              src="/images/backgrounds/music-texture.png"
              alt=""
              fill
              sizes="100vw"
              priority={false}
              className="object-cover object-center opacity-30"
            />

            {/* Very Light Blue Wash */}
            <div className="absolute inset-0 bg-cyan-500/5" />

          </div>

          <div className="container relative z-10 py-24">

            {/* Latest Release */}

            <section className="mb-32">

              <div className="mb-12 text-center">

                <p className="text-sm uppercase tracking-[0.45em] text-cyan-400">
                  Featured
                </p>

                <h2 className="mt-3 text-5xl font-bold text-white">
                  Latest Release
                </h2>

                <p className="mx-auto mt-5 max-w-2xl text-lg text-slate-400">
                  Listen to the newest worship song from Word & Voice.
                </p>

              </div>

              <LatestReleaseCard />

            </section>

            {/* Playlists */}

            <section>

              <div className="mb-16 text-center">

                <p className="text-sm uppercase tracking-[0.45em] text-cyan-400">
                  Music Library
                </p>

                <h2 className="mt-3 text-5xl font-bold text-white">
                  Playlists
                </h2>

              </div>

              <div className="space-y-28">

                {playlists.map((playlist: any) => (
                  <PlaylistSection
                    key={playlist.id}
                    playlist={playlist}
                  />
                ))}

              </div>

            </section>

          </div>

        </section>

      </main>

      <Footer />
    </>
  );
}