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


            {/* =========================================
                FEATURED BOOK
                ========================================= */}

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


            {/* =========================================
                SUPPORT & TRANSPARENCY
                ========================================= */}

            <section className="mb-20 w-full">

              <div className="flex w-full justify-center">

                  <div className="w-full max-w-5xl rounded-3xl border border-white/10 bg-white/[0.035] px-8 py-10 text-center md:px-12">

                <p className="text-center text-sm font-semibold uppercase tracking-[0.35em] text-cyan-300">
                  Creating With Purpose
                </p>

                <h2 className="mt-4 text-center font-heading text-3xl text-white md:text-4xl">
                  Your Support Helps Build More
                </h2>

              <div className="mx-auto mt-5 w-full max-w-2xl">

                 <p className="text-center text-base leading-8 text-slate-400 md:text-lg">
                  Word & Voice is committed to transparency. 70% of the
                  income generated through YouTube advertising and affiliate
                  programs is used toward church music equipment purchases
                  and creative projects.
                </p>

                <p className="mt-4 text-center text-base leading-8 text-slate-400 md:text-lg">
                  Every book, song and project helps us continue creating
                  with purpose and sharing His love.
                </p>

              </div>

            </div>

          </div>

        </section>


            {/* =========================================
                RECOMMENDED READING
                ========================================= */}

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