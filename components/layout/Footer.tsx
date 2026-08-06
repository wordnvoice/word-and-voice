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

      {/* Background Glow */}

      <div className="absolute inset-0 overflow-hidden">

        <div className="absolute -left-40 top-0 h-[420px] w-[420px] rounded-full bg-cyan-500/10 blur-[170px]" />

        <div className="absolute right-0 bottom-0 h-[320px] w-[320px] rounded-full bg-blue-500/10 blur-[160px]" />

      </div>

      <div className="container relative z-10 py-20">

        {/* ========================================= */}
        {/* TOP */}
        {/* ========================================= */}

        <div className="grid gap-20 lg:grid-cols-[380px_1fr]">

          {/* ========================================= */}
          {/* BRAND */}
          {/* ========================================= */}

          <div>

            <Image
              src="/logos/logo.png"
              alt="Word & Voice"
              width={130}
              height={130}
            />

            <h2 className="mt-8 font-heading text-4xl text-white">

              WORD & VOICE

            </h2>

            <p className="mt-4 leading-8 text-slate-300">

              Creating With Purpose.

              <br />

              Sharing His Love.

            </p>

            <p className="mt-7 max-w-sm leading-8 text-slate-400">

              A Christian creative platform sharing
              worship music, books, devotionals and
              creative projects that glorify Jesus
              Christ.

            </p>

            {/* Social */}

            <div className="mt-10 flex gap-4">

              <a
                href="https://www.youtube.com/@WordnVoice"
                target="_blank"
                rel="noopener noreferrer"
                className="glass flex h-12 w-12 items-center justify-center rounded-full transition hover:-translate-y-1"
              >
                <FaYoutube />
              </a>

              <a
                href="https://open.spotify.com/artist/0INYdICAWs39j0QzZaC72F?si=evHQkalGSDyRd9UsIYjd_A"
                target="_blank"
                rel="noopener noreferrer"
                className="glass flex h-12 w-12 items-center justify-center rounded-full transition hover:-translate-y-1"
              >
                <FaSpotify />
              </a>

              <a
                href="https://instagram.com/word.n.voice"
                target="_blank"
                rel="noopener noreferrer"
                className="glass flex h-12 w-12 items-center justify-center rounded-full transition hover:-translate-y-1"
              >
                <FaInstagram />
              </a>

              <a
                href="https://whatsapp.com/channel/0029VbCLJH0EquiZLhsW0y3g"
                target="_blank"
                rel="noopener noreferrer"
                className="glass flex h-12 w-12 items-center justify-center rounded-full transition hover:-translate-y-1"
              >
                <FaWhatsapp />
              </a>

            </div>

          </div>

          {/* ========================================= */}
          {/* LINKS */}
          {/* ========================================= */}

          <div className="grid gap-12 md:grid-cols-3">

            {/* MUSIC */}

            <div>

              <h3 className="mb-6 text-xl font-semibold text-white">

                Music

              </h3>

              <div className="space-y-4">

                <Link href="#music" className="block hover:text-cyan-400">

                  Latest Releases

                </Link>

                <Link href="#music" className="block hover:text-cyan-400">

                  Worship Songs

                </Link>

                <Link href="#music" className="block hover:text-cyan-400">

                  Albums

                </Link>

                <Link href="#music" className="block hover:text-cyan-400">

                  Lyrics

                </Link>

              </div>

            </div>

            {/* BOOKS */}

            <div>

              <h3 className="mb-6 text-xl font-semibold text-white">

                Books

              </h3>

              <div className="space-y-4">

                <Link href="#books" className="block hover:text-cyan-400">

                  Devotionals

                </Link>

                <Link href="#books" className="block hover:text-cyan-400">

                  Bible Studies

                </Link>

                <Link href="#downloads" className="block hover:text-cyan-400">

                  Free Downloads

                </Link>

                <Link href="#books" className="block hover:text-cyan-400">

                  Reading Plans

                </Link>

              </div>

            </div>

            {/* ABOUT */}

            <div>

              <h3 className="mb-6 text-xl font-semibold text-white">

                About

              </h3>

              <div className="space-y-4">

                <Link href="#projects" className="block hover:text-cyan-400">

                  Projects

                </Link>

                <Link href="#about" className="block hover:text-cyan-400">

                  Our Vision

                </Link>

                <Link href="#downloads" className="block hover:text-cyan-400">

                  Downloads

                </Link>

                <Link href="/contact" className="block hover:text-cyan-400">

                  Contact

                </Link>

                <Link href="/contact" className="block hover:text-cyan-400">

                  Join Us

                </Link>

              </div>

            </div>

          </div>

        </div>

        {/* Divider */}

        <div className="my-14 h-px bg-white/10" />

        {/* COMMUNITY + CONTACT */}

        <div className="grid gap-16 lg:grid-cols-2">
                  {/* ========================================= */}
          {/* COMMUNITY */}
          {/* ========================================= */}

          <div>

            <p className="text-sm uppercase tracking-[0.3em] text-green-400">

              COMMUNITY

            </p>

            <h3 className="mt-4 font-heading text-3xl text-white">

              Join Our WhatsApp Channel

            </h3>

            <p className="mt-5 max-w-md leading-8 text-slate-400">

              Receive worship song releases,
              devotionals, ministry updates and
              encouraging messages directly on
              WhatsApp.

            </p>

            <a
              href="https://whatsapp.com/channel/0029VbCLJH0EquiZLhsW0y3g"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary mt-8 inline-flex items-center gap-3"
            >

              <FaWhatsapp />

              Join Channel

            </a>

          </div>

          {/* ========================================= */}
          {/* CONTACT */}
          {/* ========================================= */}

          <div>

            <p className="text-sm uppercase tracking-[0.3em] text-cyan-400">

              CONTACT

            </p>

            <h3 className="mt-4 font-heading text-3xl text-white">

              Let's Connect

            </h3>

            <p className="mt-5 max-w-md leading-8 text-slate-400">

              Whether it's a prayer request,
              collaboration, ministry enquiry or
              simply saying hello, we'd love to
              hear from you.

            </p>

            <div className="mt-8 space-y-3">

              <p className="text-lg font-medium text-white">

                contact@wordandvoice.com

              </p>

              <p className="text-slate-400">

                Prayer Requests • Collaboration • General Enquiries

              </p>

            </div>

            <Link
              href="/contact"
              className="btn-secondary mt-8 inline-flex items-center gap-3"
            >

              Contact Us

              <FaArrowRight />

            </Link>

          </div>

        </div>

        {/* Divider */}

        <div className="my-14 h-px bg-white/10" />

        {/* ========================================= */}
        {/* BOTTOM BAR */}
        {/* ========================================= */}

        <div className="flex flex-col gap-5 text-sm text-slate-500 lg:flex-row lg:items-center lg:justify-between">

          <p>

            © {year} Word & Voice. All Rights Reserved.

          </p>

          <p>

            Creating With Purpose. Sharing His Love.

          </p>

          <div className="flex gap-8">

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