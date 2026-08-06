"use client";

import Image from "next/image";
import { FaPlay } from "react-icons/fa";

export default function LatestReleaseCard() {
  return (
    <div className="glass card w-full max-w-md rounded-3xl border border-white/10 bg-black/50 p-5 backdrop-blur-xl">
      <div className="flex items-center gap-5">
        {/* Album Artwork */}

        <div className="relative h-28 w-28 overflow-hidden rounded-2xl flex-shrink-0">
          <Image
            src="/images/music/latest-release.jpg"
            alt="Latest Release"
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* Content */}

        <div className="flex-1">
          <p className="mb-2 text-xs font-semibold uppercase tracking-[0.25em] text-cyan-400">
            Latest Release
          </p>

          <h3 className="font-heading text-3xl leading-tight text-white">
            Tu Mera
            <br />
            Sharansthan
          </h3>

          <p className="mt-3 text-sm text-slate-400">
            New Worship Song
          </p>
        </div>

        {/* Play Button */}

        <button
          aria-label="Play Latest Song"
          className="flex h-14 w-14 items-center justify-center rounded-full bg-cyan-400 text-slate-900 transition duration-300 hover:scale-105 hover:bg-cyan-300"
        >
          <FaPlay className="ml-1 text-sm" />
        </button>
      </div>

      <div className="my-5 h-px bg-white/10" />

      <button className="flex w-full items-center justify-between text-sm font-semibold uppercase tracking-widest text-cyan-400 transition hover:text-cyan-300">
        <span>Watch Now</span>

        <span className="text-xl">→</span>
      </button>
    </div>
  );
}