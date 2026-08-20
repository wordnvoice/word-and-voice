"use client";

import Image from "next/image";
import { FaAmazon, FaBookOpen } from "react-icons/fa";

import { trackEvent } from "@/lib/analytics";

type Book = {
  title: string;
  subtitle?: string;
  author?: string;
  language?: string;
  image: string;
  amazonUrl?: string;
  kindleUrl?: string;
  featured?: boolean;
};

type Props = {
  book: Book;
  featured?: boolean;
};

export default function BookCard({ book, featured = false }: Props) {
  const handlePurchaseClick = (destination: string) => {
    if (!book.amazonUrl) return;

    trackEvent("book_purchase_click", {
      book_title: book.title,
      destination,
    });
  };

  if (featured) {
    return (
      <article className="overflow-hidden rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl">
        <div className="grid items-center gap-10 p-8 md:p-10 lg:grid-cols-[320px_1fr] lg:p-12">
          {/* Book Cover */}

          <div className="relative mx-auto w-full max-w-[320px]">
            <div className="relative aspect-[2/3] overflow-hidden rounded-2xl shadow-2xl">
              <Image
                src={book.image}
                alt={`${book.title}${book.author ? ` by ${book.author}` : ""}${book.language ? ` — ${book.language}` : ""}`}
                fill
                sizes="(max-width:1024px) 320px, 320px"
                className="object-cover"
              />
            </div>
          </div>

          {/* Content */}

          <div className="text-center lg:text-left">
            <h2 className="font-heading text-4xl leading-tight text-white md:text-5xl">
              {book.title}
            </h2>

            {book.subtitle && (
              <p className="mt-4 text-lg leading-relaxed text-slate-300">
                {book.subtitle}
              </p>
            )}

            {book.author && (
              <p className="mt-3 text-sm text-slate-400">
                by {book.author}
              </p>
            )}

            {book.language && (
              <p className="mt-2 text-sm text-slate-500">
                {book.language}
              </p>
            )}

            {book.title === "Where Grace Rests" && (
              <p className="mt-7 text-base leading-8 text-slate-300">
                A 30-day Christian devotional designed to help you slow down,
                breathe, and rediscover the peace of God&apos;s grace through
                Scripture, reflection, poetry, and prayer. Across four weeks,
                it explores peace, grace, strength, love, and forgiveness.
              </p>
            )}

            {/* Buttons */}

            <div className="mt-8 flex flex-wrap justify-center gap-4 lg:justify-start">
              {book.amazonUrl && (
                <a
                  href={book.amazonUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => handlePurchaseClick("amazon")}
                  className="inline-flex items-center gap-3 rounded-full bg-cyan-400 px-6 py-3 text-sm font-semibold text-slate-900 transition hover:bg-cyan-300"
                >
                  <FaAmazon />
                  View on Amazon
                </a>
              )}

              {book.kindleUrl && (
                <a
                  href={book.kindleUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => handlePurchaseClick("kindle")}
                  className="inline-flex items-center gap-3 rounded-full border border-white/15 px-6 py-3 text-sm font-semibold text-white transition hover:border-cyan-400/50 hover:text-cyan-400"
                >
                  <FaBookOpen />
                  Kindle Edition
                </a>
              )}
            </div>
          </div>
        </div>
      </article>
    );
  }

  return (
    <article className="group overflow-hidden rounded-3xl border border-white/10 bg-white/5 transition duration-300 hover:-translate-y-2 hover:border-cyan-400/40">
      {/* Cover */}

      <div className="relative aspect-[2/3] overflow-hidden">
        <Image
          src={book.image}
          alt={`${book.title}${book.author ? ` by ${book.author}` : ""}${book.language ? ` — ${book.language}` : ""}`}
          fill
          sizes="(max-width:768px) 50vw, (max-width:1280px) 25vw, 20vw"
          className="object-cover transition duration-500 group-hover:scale-105"
        />

        <div className="absolute inset-0 bg-black/10 transition group-hover:bg-black/0" />
      </div>

      {/* Content */}

      <div className="p-6">
        <h3 className="line-clamp-2 font-heading text-2xl leading-snug text-white">
          {book.title}
        </h3>

        {book.author && (
          <p className="mt-2 text-sm text-slate-400">
            {book.author}
          </p>
        )}

        {book.language && (
          <p className="mt-1 text-xs uppercase tracking-wider text-slate-500">
            {book.language}
          </p>
        )}

        {/* Purchase Links */}

        <div className="mt-6 flex flex-wrap gap-3">
          {book.amazonUrl && (
            <a
              href={book.amazonUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => handlePurchaseClick("amazon")}
              className="inline-flex items-center gap-2 rounded-full bg-cyan-400 px-4 py-2 text-xs font-semibold text-slate-900 transition hover:bg-cyan-300"
            >
              <FaAmazon />
              Amazon
            </a>
          )}

          {book.kindleUrl && (
            <a
              href={book.kindleUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => handlePurchaseClick("kindle")}
              className="inline-flex items-center gap-2 rounded-full border border-white/15 px-4 py-2 text-xs font-semibold text-white transition hover:border-cyan-400/50 hover:text-cyan-400"
            >
              <FaBookOpen />
              Kindle
            </a>
          )}
        </div>
      </div>
    </article>
  );
}