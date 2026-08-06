"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaYoutube,
  FaSpotify,
  FaInstagram,
  FaBars,
  FaTimes,
} from "react-icons/fa";
import { navigation } from "@/data/navigation";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 z-50 w-full transition-all duration-300 ${
          scrolled ? "py-4" : "py-5"
        }`}
      >
        <div className="container">
          <div
            className={`glass flex items-center justify-between rounded-full border border-white/10 px-12 transition-all duration-300 ${ 
              scrolled ? "py-4" : "py-3"
            }`}
          >
            {/* Logo */}

            <Link
  href="/"
  className="relative z-20 flex items-center justify-center -my-8"
>
              <Image
                src="/logos/logo.png"
                alt="Word & Voice"
                width={132}
                height={132}
                priority
                className="drop-shadow-2xl select-none"
                draggable={false}
              />

              
            </Link>

            {/* Desktop Navigation */}

            <nav className="hidden lg:flex flex-1 justify-center items-center gap-10">
              {navigation.map((item) => (
                <a
                  key={item.id}
                  href={item.href}
                  className="text-sm font-medium text-slate-300 transition hover:text-cyan-400"
                >
                  {item.label}
                </a>
              ))}
            </nav>

            {/* Right Side */}

            <div className="hidden lg:flex items-center gap-5">
              <a
                href="#"
                aria-label="YouTube"
                className="text-slate-300 transition hover:text-red-500"
              >
                <FaYoutube size={20} />
              </a>

              <a
                href="#"
                aria-label="Spotify"
                className="text-slate-300 transition hover:text-green-500"
              >
                <FaSpotify size={18} />
              </a>

              <a
                href="#"
                aria-label="Instagram"
                className="text-slate-300 transition hover:text-pink-500"
              >
                <FaInstagram size={18} />
              </a>

              <button className="btn-primary">
                Join us
              </button>
            </div>

            {/* Mobile Button */}

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden text-white"
              aria-label="Toggle Menu"
            >
              {mobileMenuOpen ? (
                <FaTimes size={24} />
              ) : (
                <FaBars size={24} />
              )}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.25 }}
            className="fixed top-24 left-0 z-40 w-full px-4 lg:hidden"
          >
            <div className="glass rounded-3xl p-8">
              <nav className="flex flex-col gap-6">
                {navigation.map((item) => (
                  <a
                    key={item.id}
                    href={item.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="text-lg text-slate-200 transition hover:text-cyan-400"
                  >
                    {item.label}
                  </a>
                ))}
              </nav>

              <div className="mt-8 flex items-center gap-6">
                <FaYoutube
                  className="text-slate-300 hover:text-red-500 transition"
                  size={22}
                />

                <FaSpotify
                  className="text-slate-300 hover:text-green-500 transition"
                  size={22}
                />

                <FaInstagram
                  className="text-slate-300 hover:text-pink-500 transition"
                  size={22}
                />
              </div>

              <button className="btn-primary mt-8 w-full">
                Support
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}