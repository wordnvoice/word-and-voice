"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { FaPlay, FaClock, FaEye } from "react-icons/fa";

type LatestVideo = {
  id: string;
  title: string;
  thumbnail: string;
  duration: string;
  views: string;
  url: string;
};

export default function LatestReleaseCard() {
  const [video, setVideo] = useState<LatestVideo | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadVideo() {
      try {
        const response = await fetch("/api/youtube/latest");

        if (!response.ok) {
          throw new Error("Failed to fetch latest video");
        }

        const data = await response.json();

        setVideo(data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    }

    loadVideo();
  }, []);

  if (loading) {
    return (
      <div className="glass card w-full max-w-md rounded-3xl border border-white/10 bg-black/50 p-5 backdrop-blur-xl">
        <div className="animate-pulse">
          <div className="flex gap-5">
            <div className="h-28 w-28 rounded-2xl bg-white/10" />

            <div className="flex flex-1 flex-col justify-center">
              <div className="mb-3 h-3 w-28 rounded bg-white/10" />
              <div className="mb-2 h-6 w-full rounded bg-white/10" />
              <div className="h-6 w-3/4 rounded bg-white/10" />
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (!video) {
    return (
      <div className="glass card w-full max-w-md rounded-3xl border border-white/10 bg-black/50 p-5 backdrop-blur-xl">
        <p className="text-center text-slate-400">
          Unable to load latest release.
        </p>
      </div>
    );
  }

  return (
    <a
      href={video.url}
      target="_blank"
      rel="noopener noreferrer"
      className="glass card block w-full max-w-md rounded-3xl border border-white/10 bg-black/50 p-5 backdrop-blur-xl transition duration-300 hover:-translate-y-2"
    >
      <div className="flex items-center gap-5">
        {/* Thumbnail */}

        <div className="relative h-28 w-28 flex-shrink-0 overflow-hidden rounded-2xl">
          <Image
            src={video.thumbnail}
            alt={video.title}
            fill
            sizes="140px"
            className="object-cover"
          />
        </div>

        {/* Content */}

        <div className="flex flex-1 flex-col">
          <p className="mb-2 text-xs font-semibold uppercase tracking-[0.25em] text-cyan-400">
            Latest Release
          </p>

          <h3 className="font-heading line-clamp-2 text-2xl leading-tight text-white">
            {video.title}
          </h3>

          <div className="mt-4 flex items-center gap-5 text-sm text-slate-400">
            <div className="flex items-center gap-2">
              <FaClock className="text-cyan-400" />
              <span>{video.duration}</span>
            </div>

            <div className="flex items-center gap-2">
              <FaEye className="text-cyan-400" />
              <span>{video.views} Views</span>
            </div>
          </div>
        </div>

        {/* Play Button */}

        <div className="flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-full bg-cyan-400 text-slate-900 transition hover:scale-105 hover:bg-cyan-300">
          <FaPlay className="ml-1 text-sm" />
        </div>
      </div>

      <div className="my-5 h-px bg-white/10" />

      <div className="flex items-center justify-between text-sm font-semibold uppercase tracking-widest text-cyan-400">
        <span>Watch Now</span>

        <span className="text-xl">→</span>
      </div>
    </a>
  );
}