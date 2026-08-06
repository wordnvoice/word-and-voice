"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  FaArrowRight,
  FaPlay,
} from "react-icons/fa";

import LatestReleaseCard from "@/components/cards/LatestReleaseCard";

const fadeUp = {
  hidden: {
    opacity: 0,
    y: 40,
  },

  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,

    transition: {
      duration: 0.8,
      delay,
    },
  }),
};

export default function Hero() {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden">

      {/* =========================
          Background Video
      ========================== */}

      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 h-full w-full object-cover"
        src="/videos/hero/hero.mp4"
      />

      {/* Dark Overlay */}

      <div className="hero-overlay" />

      {/* Blue Glow */}

      <div className="pointer-events-none absolute right-0 top-0 h-[650px] w-[650px] rounded-full bg-cyan-500/10 blur-[160px]" />

      <div className="pointer-events-none absolute left-0 bottom-0 h-[500px] w-[500px] rounded-full bg-blue-500/10 blur-[140px]" />

      {/* =========================
            Hero Container
      ========================== */}

      <div className="container relative z-20 grid min-h-screen items-center gap-20 pt-40 lg:grid-cols-2">

        {/* ======================================
                    LEFT SIDE
        ======================================= */}

        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          custom={0}
          className="max-w-lg"
        >

          {/* Top Heading */}

          <motion.div
            variants={fadeUp}
            custom={0.15}
            className="mb-5"
          >

            <p className="text-sm uppercase tracking-[0.35em] text-slate-300">

              CREATING{" "}

              <span className="font-semibold text-white">

                WITH PURPOSE.

              </span>

            </p>

            <p className="mt-3 text-sm uppercase tracking-[0.35em] text-slate-300">

              SHARING{" "}

              <span className="text-gradient font-semibold">

                HIS LOVE.

              </span>

            </p>

          </motion.div>

          {/* Brand */}

          <motion.h1
            variants={fadeUp}
            custom={0.3}
            className="font-heading text-white leading-[0.9]
                       text-5xl
                       md:text-6xl
                       xl:text-[4.8rem]"
          >

            WORD{" "}

            <span
              style={{
                background:
                  "linear-gradient(135deg,#FFD978 0%,#C89B3C 100%)",

                WebkitBackgroundClip: "text",

                WebkitTextFillColor: "transparent",
              }}
            >
              &
            </span>

            <br />

            VOICE

          </motion.h1>

          {/* ======================
              Mission Blocks
          ======================= */}

          <motion.div
            variants={fadeUp}
            custom={0.45}
            className="mt-8 space-y-6"
          >

            {/* Worship */}

            <div>

              <h3
                className="font-heading text-3xl"
                style={{
                  background:
                    "linear-gradient(135deg,#FFD978,#C89B3C)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                WORSHIP.
              </h3>

              <p className="mt-2 max-w-md leading-8 text-slate-300">

                We exist to glorify{" "}

                <span
                  style={{
                    background:
                      "linear-gradient(135deg,#FFD978,#27D6FF)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    fontWeight: 700,
                  }}
                >
                  God
                </span>

                {" "}through every song, every word and every creative work.

              </p>

            </div>

            {/* Faith */}

            <div>

              <h3 className="font-heading text-3xl text-white">

                FAITH.

              </h3>

              <p className="mt-2 max-w-md leading-8 text-slate-300">

                Creating worship music, books and biblical resources
                that strengthen believers in their daily walk with Christ.

              </p>

            </div>

            {/* Hope */}
                        <div>

              <h3 className="font-heading text-3xl text-gradient">

                HOPE.

              </h3>

              <p className="mt-2 max-w-md leading-8 text-slate-300">

                Sharing Christ through creative projects that encourage
                people, strengthen the Church and point hearts back to Him.

              </p>

            </div>

          </motion.div>

          {/* ===========================
                  CTA BUTTONS
          ============================ */}

          <motion.div
            variants={fadeUp}
            custom={0.6}
            className="mt-8 flex flex-wrap gap-5"
          >

            <Link
              href="#music"
              className="btn-primary"
            >

              <FaPlay />

              Watch Latest Song

            </Link>

            <Link
              href="#projects"
              className="btn-secondary"
            >

              Explore Projects

              <FaArrowRight />

            </Link>

          </motion.div>

        </motion.div>

        {/* =====================================
                    RIGHT COLUMN
        ====================================== */}

        <motion.div
          initial={{
            opacity: 0,
            x: 60,
          }}
          animate={{
            opacity: 1,
            x: 0,
          }}
          transition={{
            duration: 1,
            delay: .4,
          }}
          className="relative flex items-center justify-center lg:justify-end"
        >

          {/* Glow */}

          <div className="absolute h-[560px] w-[560px] rounded-full bg-cyan-400/10 blur-[130px]" />

          {/* Floating Card */}

          <motion.div
            animate={{
              y: [0, -12, 0],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="relative z-20 w-full max-w-md xl:translate-x-10"
          >

            <LatestReleaseCard />

          </motion.div>

        </motion.div>

      </div>

      {/* Bottom Gradient */}

      <div className="absolute bottom-0 left-0 h-52 w-full bg-gradient-to-t from-[#07111f] to-transparent" />

      {/* Scroll Indicator */}

      <motion.div
        initial={{
          opacity: 0,
        }}
        animate={{
          opacity: 1,
        }}
        transition={{
          delay: 1.4,
        }}
        className="absolute bottom-10 left-1/2 hidden -translate-x-1/2 lg:flex"
      >

        <a
          href="#music"
          className="flex flex-col items-center gap-3"
        >

          <span className="text-xs uppercase tracking-[0.35em] text-slate-400">

            Scroll

          </span>

          <motion.div
            animate={{
              y: [0, 8, 0],
            }}
            transition={{
              repeat: Infinity,
              duration: 1.8,
            }}
            className="flex h-14 w-8 justify-center rounded-full border border-white/20"
          >

            <motion.div
              animate={{
                y: [4, 20, 4],
              }}
              transition={{
                repeat: Infinity,
                duration: 1.8,
              }}
              className="mt-2 h-3 w-3 rounded-full bg-cyan-400"
            />

          </motion.div>

        </a>

      </motion.div>

    </section>
  );
}   