import Image from "next/image";
import { FaClock, FaEye, FaPlay } from "react-icons/fa";

type Video = {
  id: string;
  title: string;
  thumbnail: string;
  duration: string;
  views: string;
  url: string;
};

type Props = {
  video: Video;
};

export default function PlaylistCard({ video }: Props) {
  return (
    <a
      href={video.url}
      target="_blank"
      rel="noopener noreferrer"
      className="group overflow-hidden rounded-3xl border border-white/10 bg-white/5 transition duration-300 hover:-translate-y-2 hover:border-cyan-400/40"
    >
      {/* Thumbnail */}

      <div className="relative aspect-video overflow-hidden">

        <Image
          src={video.thumbnail}
          alt={video.title}
          fill
          sizes="(max-width:768px) 100vw, 25vw"
          className="object-cover transition duration-500 group-hover:scale-110"
        />

        <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition" />

        <div className="absolute right-4 top-4 flex h-12 w-12 items-center justify-center rounded-full bg-cyan-400 text-slate-900 shadow-xl">

          <FaPlay className="ml-1 text-sm" />

        </div>

      </div>

      {/* Content */}

      <div className="p-6">

        <h3 className="line-clamp-2 font-heading text-2xl leading-snug text-white">

          {video.title}

        </h3>

        <div className="mt-5 flex items-center gap-6 text-sm text-slate-400">

          <div className="flex items-center gap-2">

            <FaClock className="text-cyan-400" />

            <span>{video.duration}</span>

          </div>

          <div className="flex items-center gap-2">

            <FaEye className="text-cyan-400" />

            <span>{video.views}</span>

          </div>

        </div>

      </div>

    </a>
  );
}