"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { FaArrowRight } from "react-icons/fa";

import { features } from "@/data/features";

export default function FeatureCards() {
  return (
    <section className="section relative overflow-hidden">

      <div className="container">

        {/* Section Heading */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: .7 }}
          className="mb-16 text-center"
        >

          <p className="mb-4 uppercase tracking-[0.35em] text-cyan-400">

            EXPLORE

          </p>

          <h2 className="font-heading text-5xl text-white">

            Everything in One Place

          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-slate-400">

            Discover worship music, books, creative projects and
            resources designed to glorify God and strengthen believers.

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
                  duration: .6,
                  delay: index * .12,
                }}

                className="group relative h-[520px] overflow-hidden rounded-[32px]"

              >

                {/* Background */}

                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover transition duration-700 group-hover:scale-110"
                />

                {/* Gradient */}

                <div
                  className={`absolute inset-0 bg-gradient-to-t ${item.gradient}`}
                />

                {/* Dark Overlay */}

                <div className="absolute inset-0 bg-black/35" />

                {/* Content */}

                <div className="absolute inset-0 flex flex-col justify-end p-8">

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

                    <Link
                      href={item.href}
                      className="mt-8 inline-flex items-center gap-3 font-semibold text-cyan-300 transition group-hover:gap-5"
                    >

                      Explore

                      <FaArrowRight />

                    </Link>

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