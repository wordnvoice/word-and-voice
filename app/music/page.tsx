import Image from "next/image";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

import MusicHero from "@/components/sections/MusicHero";
import LatestReleaseCard from "@/components/cards/LatestReleaseCard";
import PlaylistSection from "@/components/sections/PlaylistSection";

import { playlists } from "@/data/playlists";
import { getPlaylistVideos } from "@/lib/api/youtube";

export default async function MusicPage() {
  const playlistData = await Promise.all(
    playlists.map(async (playlist) => ({
      title: playlist.title,
      id: playlist.id,
      url: `https://www.youtube.com/playlist?list=${playlist.id}`,
      videos: await getPlaylistVideos(playlist.id),
    }))
  );

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

          <div className="container relative z-10 py-10">

            {/* ========================================= */}
            {/* LATEST RELEASE */}
            {/* ========================================= */}

            <section className="mb-16">

              <div className="mb-6 text-center">

                <h2 className="text-5xl font-bold text-white">
                  Latest Release
                </h2>

              </div>

              {/* Latest Release Card */}
              <div className="flex justify-center">
                <LatestReleaseCard />
              </div>

            </section>

            {/* ========================================= */}
            {/* PLAYLISTS */}
            {/* ========================================= */}

            <section>

              <div className="mb-8 text-center">

                <h2 className="text-5xl font-bold text-white">
                  Playlists
                </h2>

              </div>

              {/* Playlist Sections */}
              <div className="space-y-12">

                {playlistData.map((playlist) => (
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