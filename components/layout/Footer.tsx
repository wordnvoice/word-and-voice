"use client";

import Image from "next/image";
import Link from "next/link";

import {
  FaYoutube,
  FaSpotify,
  FaInstagram,
  FaWhatsapp,
  FaArrowRight,
} from "react-icons/fa";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative border-t border-white/10 bg-[#050B15]">

      {/* =========================================================
          BACKGROUND GLOW
          ========================================================= */}

      <div className="pointer-events-none absolute inset-0 overflow-hidden">

        <div className="absolute -left-40 top-0 h-[320px] w-[320px] rounded-full bg-cyan-500/10 blur-[150px]" />

        <div className="absolute bottom-0 right-0 h-[260px] w-[260px] rounded-full bg-blue-500/10 blur-[140px]" />

      </div>


      <div className="container relative z-10 py-14">


        {/* =========================================================
            MAIN FOOTER
            ========================================================= */}

        <div className="grid gap-12 lg:grid-cols-[1.3fr_2fr]">


          {/* =======================================================
              BRAND
              ======================================================= */}

          <div>

            <Image
              src="/logos/logo.png"
              alt="Word & Voice"
              width={100}
              height={100}
            />

            <h2 className="mt-5 font-heading text-3xl text-white">
              WORD & VOICE
            </h2>

            <p className="mt-3 text-sm leading-6 text-slate-300">
              Creating With Purpose.
              <br />
              Sharing His Love.
            </p>

            <p className="mt-4 max-w-sm text-sm leading-6 text-slate-400">
              A Christian creative platform sharing worship music,
              books, devotionals and creative projects that glorify
              Jesus Christ.
            </p>


            {/* =====================================================
                SOCIAL LINKS
                ===================================================== */}

            <div className="mt-6 flex gap-3">

              {/* YouTube */}

              <a
                href="https://www.youtube.com/@WordnVoice"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="YouTube"
                className="glass flex h-10 w-10 items-center justify-center rounded-full transition hover:-translate-y-1 hover:text-cyan-400"
              >
                <FaYoutube />
              </a>


              {/* Spotify */}

              <a
                href="https://open.spotify.com/artist/0INYdICAWs39j0QzZaC72F"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Spotify"
                className="glass flex h-10 w-10 items-center justify-center rounded-full transition hover:-translate-y-1 hover:text-cyan-400"
              >
                <FaSpotify />
              </a>


              {/* Instagram */}

              <a
                href="https://instagram.com/word.n.voice"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="glass flex h-10 w-10 items-center justify-center rounded-full transition hover:-translate-y-1 hover:text-cyan-400"
              >
                <FaInstagram />
              </a>


              {/* WhatsApp */}

              <a
                href="https://whatsapp.com/channel/0029VbCLJH0EquiZLhsW0y3g"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="glass flex h-10 w-10 items-center justify-center rounded-full transition hover:-translate-y-1 hover:text-cyan-400"
              >
                <FaWhatsapp />
              </a>

            </div>

          </div>


          {/* =======================================================
              NAVIGATION
              ======================================================= */}

          <div className="grid gap-10 sm:grid-cols-3">


            {/* =====================================================
                MUSIC
                ===================================================== */}

            <div>

              <h3 className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-white">
                Music
              </h3>

              <div className="space-y-3 text-sm text-slate-400">

                <Link
                  href="/music"
                  className="block transition hover:text-cyan-400"
                >
                  Latest Releases
                </Link>

                <Link
                  href="/music"
                  className="block transition hover:text-cyan-400"
                >
                  Worship Songs
                </Link>

                <Link
                  href="/music"
                  className="block transition hover:text-cyan-400"
                >
                  Albums
                </Link>

                <Link
                  href="/downloads"
                  className="block transition hover:text-cyan-400"
                >
                  Lyrics
                </Link>

              </div>

            </div>


            {/* =====================================================
                BOOKS
                ===================================================== */}

            <div>

              <h3 className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-white">
                Books
              </h3>

              <div className="space-y-3 text-sm text-slate-400">

                <Link
                  href="/books"
                  className="block transition hover:text-cyan-400"
                >
                  Devotionals
                </Link>

                <Link
                  href="/books"
                  className="block transition hover:text-cyan-400"
                >
                  Bible Studies
                </Link>

                <Link
                  href="/downloads"
                  className="block transition hover:text-cyan-400"
                >
                  Free Downloads
                </Link>

                <Link
                  href="/books"
                  className="block transition hover:text-cyan-400"
                >
                  Reading Plans
                </Link>

              </div>

            </div>


            {/* =====================================================
                ABOUT
                ===================================================== */}

            <div>

              <h3 className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-white">
                About
              </h3>

              <div className="space-y-3 text-sm text-slate-400">

                <Link
                  href="/projects"
                  className="block transition hover:text-cyan-400"
                >
                  Projects
                </Link>

                <Link
                  href="/about"
                  className="block transition hover:text-cyan-400"
                >
                  Our Vision
                </Link>

                <Link
                  href="/downloads"
                  className="block transition hover:text-cyan-400"
                >
                  Downloads
                </Link>

                <Link
                  href="/contact"
                  className="block transition hover:text-cyan-400"
                >
                  Contact
                </Link>

                <Link
                  href="/contact"
                  className="block transition hover:text-cyan-400"
                >
                  Join Us
                </Link>

              </div>

            </div>

          </div>

        </div>


        {/* =========================================================
            CONTACT INFORMATION
            ========================================================= */}

        <div className="my-10 border-y border-white/10 py-8">

          <div className="grid gap-8 lg:grid-cols-[1.2fr_1fr_1.5fr_auto] lg:items-center">


            {/* =====================================================
                EMAIL
                ===================================================== */}

            <div>

              <p className="text-xs uppercase tracking-[0.25em] text-slate-500">
                Email
              </p>

              <a
                href="mailto:contact@wordandvoice.in"
                className="mt-2 block text-sm text-slate-300 transition hover:text-cyan-400"
              >
                contact@wordandvoice.in
              </a>

            </div>


            {/* =====================================================
                PHONE
                ===================================================== */}

            <div>

              <p className="text-xs uppercase tracking-[0.25em] text-slate-500">
                Phone
              </p>

              <a
                href="tel:+91702384179"
                className="mt-2 block text-sm text-slate-300 transition hover:text-cyan-400"
              >
                +91 7023841729
              </a>

            </div>


            {/* =====================================================
                ADDRESS
                ===================================================== */}

            <div>

              <p className="text-xs uppercase tracking-[0.25em] text-slate-500">
                Address
              </p>

              <p className="mt-2 text-sm leading-5 text-slate-300">
                102- STD Road, Goyala Dairy,
                <br />
                Qutab Vihar, New Delhi - 110071
              </p>

            </div>


            {/* =====================================================
                CONTACT BUTTON
                ===================================================== */}

            <div>

              <Link
                href="/contact"
                className="btn-secondary inline-flex items-center gap-2 whitespace-nowrap"
              >
                Contact Us
                <FaArrowRight />
              </Link>

            </div>

          </div>

        </div>


        {/* =========================================================
            BOTTOM BAR
            ========================================================= */}

        <div className="flex flex-col gap-4 text-xs text-slate-500 lg:flex-row lg:items-center lg:justify-between">


          {/* Copyright */}

          <p>
            © {year} Word & Voice. All Rights Reserved.
          </p>


          {/* Tagline */}

          <p>
            Creating With Purpose. Sharing His Love.
          </p>


          {/* Legal Links */}

          <div className="flex gap-6">

            <Link
              href="/privacy"
              className="transition hover:text-white"
            >
              Privacy Policy
            </Link>

            <Link
              href="/terms"
              className="transition hover:text-white"
            >
              Terms of Use
            </Link>

          </div>

        </div>

      </div>

    </footer>
  );
}