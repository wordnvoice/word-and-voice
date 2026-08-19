"use client";

import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";

import PlaylistCard from "@/components/cards/PlaylistCard";
import { trackEvent } from "@/lib/analytics";

type Video = {
  id: string;
  title: string;
  thumbnail: string;
  duration: string;
  views: string;
  url: string;
};

type Playlist = {
  title: string;
  id: string;
  url: string;
  videos: Video[];
};

type Props = {
  playlist: Playlist;
};

export default function PlaylistSection({ playlist }: Props) {
  // Hide empty playlists
  if (playlist.videos.length === 0) {
    return null;
  }

  return (
    <section>
      {/* Header */}

      <div className="mb-10 flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
        <div>
          <h2 className="font-heading text-4xl text-white">
            {playlist.title}
          </h2>

          <p className="mt-3 text-slate-400">
            {playlist.videos.length} Song
            {playlist.videos.length > 1 ? "s" : ""} Featured
          </p>
        </div>

        <Link
          href={playlist.url}
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => {
            trackEvent("youtube_playlist_click", {
              playlist_id: playlist.id,
            });
          }}
          className="inline-flex items-center gap-3 text-cyan-400 transition hover:text-cyan-300"
        >
          View Complete Playlist

          <FaArrowRight />
        </Link>
      </div>

      {/* Videos */}

      <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-4">
        {playlist.videos.map((video) => (
          <PlaylistCard
            key={video.id}
            video={video}
          />
        ))}
      </div>
    </section>
  );
}