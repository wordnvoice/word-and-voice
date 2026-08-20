import type { Metadata } from "next";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

import BooksHero from "@/components/sections/BooksHero";
import BookCard from "@/components/cards/BookCard";

import { featuredBook, recommendedBooks } from "@/data/books";

export const metadata: Metadata = {
  title: "Christian Books & Devotionals",
  description:
    "Explore Christian books, devotionals, Bibles and reading resources from Word & Voice, including Where Grace Rests, a 30-day devotional of Scripture, poetry and prayer.",
  alternates: {
    canonical: "/books",
  },
  openGraph: {
    title: "Christian Books & Devotionals | Word & Voice",
    description:
      "Explore Christian books, devotionals, Bibles and reading resources from Word & Voice, including Where Grace Rests, a 30-day devotional of Scripture, poetry and prayer.",
    url: "https://wordandvoice.in/books",
    siteName: "Word & Voice",
    type: "website",
  },
};

export default function BooksPage() {
  const christianBooks = recommendedBooks.filter(
    (book) =>
      book.category === "Christian Book" ||
      book.category === "Devotional"
  );

  const bibles = recommendedBooks.filter(
    (book) => book.category === "Bible"
  );

  const worshipBooks = recommendedBooks.filter(
    (book) => book.category === "Worship"
  );

  return (
    <>
      <Navbar />

      <main className="bg-[#050B15] text-white">
        {/* Hero */}
        <BooksHero />

        {/* Books Content */}
        <section className="relative overflow-hidden">
          {/* Background */}
          <div className="absolute inset-0 -z-10">
            <div className="absolute inset-0 bg-[#050B15]" />

            <div className="absolute inset-0 bg-gradient-to-b from-cyan-500/[0.03] via-transparent to-transparent" />
          </div>

          <div className="container relative z-10 py-20">

            {/* ========================================= */}
            {/* FEATURED BOOK */}
            {/* ========================================= */}

            <section className="mb-10">
              <div className="mb-8 text-center">
                <h2 className="text-5xl font-bold text-white">
                  Featured Book
                </h2>
              </div>

              <BookCard
                book={featuredBook}
                featured
              />
            </section>

            {/* ========================================= */}
            {/* RECOMMENDED READING */}
            {/* ========================================= */}

            <section>
              <div className="mb-12 text-center">
                <h2 className="text-5xl font-bold text-white">
                  Recommended Reading
                </h2>

                <div className="mt-3 flex w-full justify-center">
                  <p className="max-w-2xl text-center text-lg text-slate-400">
                    A curated collection of Christian books, Bibles,
                    devotionals and resources, including books by authors such
                    as Max Lucado and Tim Keller.
                  </p>
                </div>
              </div>

              {/* Christian Books & Devotionals */}

              {christianBooks.length > 0 && (
                <section className="mb-16">
                  <div className="mb-8">
                    <h3 className="font-heading text-3xl text-white">
                      Christian Books & Devotionals
                    </h3>
                  </div>

                  <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                    {christianBooks.map((book) => (
                      <BookCard
                        key={`${book.title}-${book.image}`}
                        book={book}
                      />
                    ))}
                  </div>
                </section>
              )}

              {/* Bibles */}

              {bibles.length > 0 && (
                <section className="mb-16">
                  <div className="mb-8">
                    <h3 className="font-heading text-3xl text-white">
                      Bibles
                    </h3>
                  </div>

                  <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                    {bibles.map((book) => (
                      <BookCard
                        key={`${book.title}-${book.image}`}
                        book={book}
                      />
                    ))}
                  </div>
                </section>
              )}

              {/* Worship & Songbooks */}

              {worshipBooks.length > 0 && (
                <section>
                  <div className="mb-8">
                    <h3 className="font-heading text-3xl text-white">
                      Worship & Songbooks
                    </h3>
                  </div>

                  <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                    {worshipBooks.map((book) => (
                      <BookCard
                        key={`${book.title}-${book.image}`}
                        book={book}
                      />
                    ))}
                  </div>
                </section>
              )}
            </section>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}