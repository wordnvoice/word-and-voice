"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { FaArrowRight } from "react-icons/fa";
import { features } from "@/data/features";

export default function FeatureCards() {
  return (
    <section className="section relative overflow-hidden pt-12">
      <div className="container">

        {/* Section Heading */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mx-auto mb-10 flex w-full max-w-5xl flex-col items-center text-center"
        >
          <p className="mb-3 text-sm uppercase tracking-[0.35em] text-cyan-400">
            THE WORLD OF WORD & VOICE
          </p>

          <h2 className="font-heading text-4xl leading-tight text-white md:text-5xl">
            Where Faith Becomes Creative
          </h2>

          <div className="mx-auto mt-6 max-w-3xl">
            <p className="text-lg italic leading-8 text-slate-300">
              “And whatever you do, in word or deed, do everything in the name
              of the Lord Jesus.”
            </p>

            <p className="mt-3 text-sm font-medium tracking-wide text-cyan-400">
              — Colossians 3:17
            </p>
          </div>

          <p className="mx-auto mt-6 max-w-2xl leading-7 text-slate-400">
            Explore worship music, books, creative projects and the story
            behind Word & Voice — all created with faith, purpose and a desire
            to point hearts toward Christ.
          </p>
        </motion.div>

        {/* Cards */}

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-4">

          {features.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.article
                key={item.id}
                initial={{
                  opacity: 0,
                  y: 50,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.12,
                }}
                className="group relative h-[520px] overflow-hidden rounded-[32px]"
              >

                {/* Entire Card Link */}

                <Link
                  href={item.href}
                  className="absolute inset-0 z-10"
                  aria-label={`Explore ${item.title}`}
                />

                {/* Background */}

                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 25vw"
                  className="object-cover transition duration-700 group-hover:scale-110"
                />

                {/* Gradient */}

                <div
                  className={`absolute inset-0 bg-gradient-to-t ${item.gradient}`}
                />

                {/* Dark Overlay */}

                <div className="absolute inset-0 bg-black/35" />

                {/* Content */}

                <div className="absolute inset-0 flex flex-col justify-end p-8 pointer-events-none">

                  <div className="glass rounded-3xl p-6">

                    <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-white/10">
                      <Icon
                        size={26}
                        className="text-white"
                      />
                    </div>

                    <p className="mb-2 text-xs uppercase tracking-[0.3em] text-slate-300">
                      {item.subtitle}
                    </p>

                    <h3 className="font-heading text-3xl text-white">
                      {item.title}
                    </h3>

                    <p className="mt-5 text-sm leading-7 text-slate-300">
                      {item.description}
                    </p>

                    <div className="mt-8 inline-flex items-center gap-3 font-semibold text-cyan-300 transition-all duration-300 group-hover:gap-5">
                      Explore
                      <FaArrowRight />
                    </div>

                  </div>

                </div>

              </motion.article>
            );
          })}

        </div>
      </div>
    </section>
  );
}