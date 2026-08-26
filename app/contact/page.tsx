"use client";

import { FormEvent, useState } from "react";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    setIsSubmitting(true);
    setSuccessMessage("");
    setErrorMessage("");

    const form = event.currentTarget;
    const formData = new FormData(form);

    const name = formData.get("name")?.toString().trim() || "";
    const email = formData.get("email")?.toString().trim() || "";
    const subject = formData.get("subject")?.toString().trim() || "";
    const message = formData.get("message")?.toString().trim() || "";

    if (!name || !email || !subject || !message) {
      setErrorMessage("Please fill in all fields.");
      setIsSubmitting(false);
      return;
    }

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          subject,
          message,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Unable to send your message.");
      }

      setSuccessMessage(
        "Message sent successfully. We'll get back to you soon."
      );

      form.reset();
    } catch (error) {
      console.error("Contact form submission error:", error);

      setErrorMessage(
        error instanceof Error
          ? error.message
          : "Something went wrong. Please try again."
      );
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <>
      <Navbar />

      <main className="bg-[#050B15] text-white">
        {/* =========================================================
            CONTACT HERO
            ========================================================= */}
        <section className="relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-[#0B1728] via-[#050B15] to-[#050B15]" />

          <div className="relative z-10 container flex min-h-[70vh] items-center justify-center px-6 py-32 text-center">
            <div className="w-full max-w-4xl">
              <p className="font-body text-sm font-semibold uppercase tracking-[0.45em] text-cyan-300">
                Contact
              </p>

              <h1 className="mt-6 font-heading text-5xl font-bold leading-tight md:text-6xl lg:text-7xl">
                Let's Connect
              </h1>

              <p className="mx-auto mt-8 max-w-3xl font-body text-lg leading-relaxed text-slate-300 md:text-xl">
                Whether it's a prayer request, collaboration enquiry,
                question, or simply saying hello, we'd love to hear from you.
              </p>

              <div className="mx-auto mt-12 h-px w-32 bg-gradient-to-r from-transparent via-cyan-400 to-transparent" />
            </div>
          </div>
        </section>

        {/* =========================================================
            CONTACT SECTION
            ========================================================= */}
        <section className="px-6 py-24">
          <div className="container">
            <div className="grid gap-12 lg:grid-cols-2">

              {/* =====================================================
                  CONTACT INFORMATION
                  ===================================================== */}
              <div className="rounded-[26px] border border-white/10 bg-white/[0.04] p-8 md:p-10">
                <p className="font-body text-sm font-semibold uppercase tracking-[0.35em] text-cyan-300">
                  Get in Touch
                </p>

                <h2 className="mt-4 font-heading text-4xl font-bold md:text-5xl">
                  We'd love to hear from you.
                </h2>

                <p className="mt-6 font-body text-lg leading-relaxed text-slate-300">
                  Whether you have a question about Word & Voice, want to
                  discuss a creative collaboration, or simply want to reach
                  out, you can get in touch with us here.
                </p>

                <div className="mt-10 space-y-7">
                  {/* Email */}
                  <div>
                    <p className="font-body text-sm font-semibold uppercase tracking-[0.2em] text-slate-400">
                      Email
                    </p>

                    <a
                      href="mailto:contact@wordandvoice.in"
                      className="mt-2 block font-body text-lg text-white transition-colors hover:text-cyan-300"
                    >
                      contact@wordandvoice.in
                    </a>
                  </div>

                  {/* Enquiries */}
                  <div>
                    <p className="font-body text-sm font-semibold uppercase tracking-[0.2em] text-slate-400">
                      Enquiries
                    </p>

                    <p className="mt-2 font-body text-lg leading-relaxed text-slate-300">
                      Prayer Requests · Collaboration · General Enquiries
                    </p>
                  </div>
                </div>
              </div>

              {/* =====================================================
                  CONTACT FORM
                  ===================================================== */}
              <div className="rounded-[26px] border border-white/10 bg-white/[0.04] p-8 md:p-10">
                <p className="font-body text-sm font-semibold uppercase tracking-[0.35em] text-cyan-300">
                  Send a Message
                </p>

                <h2 className="mt-4 font-heading text-4xl font-bold md:text-5xl">
                  Get in touch
                </h2>

                <form
                  onSubmit={handleSubmit}
                  className="mt-8 space-y-6"
                >
                  {/* Name */}
                  <div>
                    <label
                      htmlFor="name"
                      className="font-body text-sm font-medium text-slate-300"
                    >
                      Name
                    </label>

                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      autoComplete="name"
                      className="mt-2 w-full rounded-xl border border-white/10 bg-black/20 px-4 py-3 font-body text-white outline-none transition focus:border-cyan-400/60"
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label
                      htmlFor="email"
                      className="font-body text-sm font-medium text-slate-300"
                    >
                      Email
                    </label>

                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      autoComplete="email"
                      className="mt-2 w-full rounded-xl border border-white/10 bg-black/20 px-4 py-3 font-body text-white outline-none transition focus:border-cyan-400/60"
                    />
                  </div>

                  {/* Subject */}
                  <div>
                    <label
                      htmlFor="subject"
                      className="font-body text-sm font-medium text-slate-300"
                    >
                      Subject
                    </label>

                    <input
                      id="subject"
                      name="subject"
                      type="text"
                      required
                      className="mt-2 w-full rounded-xl border border-white/10 bg-black/20 px-4 py-3 font-body text-white outline-none transition focus:border-cyan-400/60"
                    />
                  </div>

                  {/* Message */}
                  <div>
                    <label
                      htmlFor="message"
                      className="font-body text-sm font-medium text-slate-300"
                    >
                      Message
                    </label>

                    <textarea
                      id="message"
                      name="message"
                      rows={6}
                      required
                      className="mt-2 w-full resize-none rounded-xl border border-white/10 bg-black/20 px-4 py-3 font-body text-white outline-none transition focus:border-cyan-400/60"
                    />
                  </div>

                  {/* Status Messages */}
                  {successMessage && (
                    <p
                      role="status"
                      className="rounded-xl border border-green-400/20 bg-green-400/10 px-4 py-3 text-sm leading-relaxed text-green-300"
                    >
                      {successMessage}
                    </p>
                  )}

                  {errorMessage && (
                    <p
                      role="alert"
                      className="rounded-xl border border-red-400/20 bg-red-400/10 px-4 py-3 text-sm leading-relaxed text-red-300"
                    >
                      {errorMessage}
                    </p>
                  )}

                  {/* Submit */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 px-8 py-4 font-body font-semibold text-white transition-transform hover:scale-[1.02] disabled:cursor-not-allowed disabled:opacity-60"
                  >
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>

        {/* =========================================================
            CONNECT WITH US
            ========================================================= */}
        <section className="px-6 pb-24">
          <div className="container">
            <div className="rounded-[26px] border border-white/10 bg-white/[0.04] px-8 py-16 md:px-12">

              <div className="flex w-full flex-col items-center text-center">
                <p className="font-body text-sm font-semibold uppercase tracking-[0.35em] text-cyan-300">
                  Connect With Us
                </p>

                <h2 className="mt-4 w-full text-center font-heading text-4xl font-bold leading-tight md:text-5xl">
                  Stay connected with Word & Voice
                </h2>

                <p className="mt-5 w-full text-center font-body text-lg leading-relaxed text-slate-300 md:text-xl">
                  Follow along for worship songs, devotional content, new releases,
                  projects, and updates from Word & Voice.
                </p>
              </div>

              {/* ===================================================
                  SOCIAL LINKS
                  =================================================== */}
              <div className="mx-auto mt-12 grid w-full max-w-5xl gap-5 sm:grid-cols-2 lg:grid-cols-4">

                {/* YouTube */}
                <a
                  href="https://www.youtube.com/@WordnVoice"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Visit Word & Voice on YouTube"
                  className="group rounded-2xl border border-white/10 bg-black/20 p-6 text-center transition-all hover:border-cyan-400/40 hover:bg-white/[0.06]"
                >
                  <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full border border-white/10 bg-white/[0.04]">
                    <svg
                      viewBox="0 0 24 24"
                      className="h-6 w-6 fill-current text-white transition-colors group-hover:text-cyan-300"
                      aria-hidden="true"
                    >
                      <path d="M23.5 6.2a3 3 0 0 0-2.1-2.1C19.5 3.5 12 3.5 12 3.5s-7.5 0-9.4.6A3 3 0 0 0 .5 6.2 31.8 31.8 0 0 0 0 12a31.8 31.8 0 0 0 .5 5.8 3 3 0 0 0 2.1 2.1c1.9.6 9.4.6 9.4.6s7.5 0 9.4-.6a3 3 0 0 0 2.1-2.1A31.8 31.8 0 0 0 24 12a31.8 31.8 0 0 0-.5-5.8ZM9.6 15.9V8.1l6.8 3.9-6.8 3.9Z" />
                    </svg>
                  </div>

                  <h3 className="mt-5 font-heading text-2xl font-bold">
                    YouTube
                  </h3>

                  <p className="mt-2 font-body text-sm text-slate-400">
                    Watch & listen
                  </p>
                </a>

                {/* Spotify */}
                <a
                  href="https://open.spotify.com/artist/0INYdICAWs39j0QzZaC72F?si=evHQkalGSDyRd9UsIYjd_A&nd=1&dlsi=b61be1b47d8f4bbc"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Listen to Word & Voice on Spotify"
                  className="group rounded-2xl border border-white/10 bg-black/20 p-6 text-center transition-all hover:border-cyan-400/40 hover:bg-white/[0.06]"
                >
                  <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full border border-white/10 bg-white/[0.04]">
                    <svg
                      viewBox="0 0 24 24"
                      className="h-6 w-6 fill-current text-white transition-colors group-hover:text-cyan-300"
                      aria-hidden="true"
                    >
                      <path d="M12 1.8A10.2 10.2 0 1 0 12 22.2 10.2 10.2 0 0 0 12 1.8Zm4.7 14.7a.75.75 0 0 1-1.03.25c-2.83-1.73-6.4-2.12-10.61-1.16a.75.75 0 1 1-.33-1.46c4.6-1.05 8.55-.6 11.72 1.34.35.21.46.67.25 1.03Zm1.37-3.05a.94.94 0 0 1-1.29.31c-3.24-1.99-8.18-2.57-12.01-1.41a.94.94 0 1 1-.54-1.8c4.38-1.33 9.83-.68 13.54 1.6.43.26.56.82.3 1.3Zm.12-3.18C14.3 7.9 7.57 7.7 3.7 8.87a1.13 1.13 0 1 1-.65-2.17c4.55-1.38 12.13-1.1 16.73 1.63a1.13 1.13 0 0 1-.59 2.1Z" />
                    </svg>
                  </div>

                  <h3 className="mt-5 font-heading text-2xl font-bold">
                    Spotify
                  </h3>

                  <p className="mt-2 font-body text-sm text-slate-400">
                    Listen to our music
                  </p>
                </a>

                {/* Instagram */}
                <a
                  href="https://www.instagram.com/word.n.voice"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Follow Word & Voice on Instagram"
                  className="group rounded-2xl border border-white/10 bg-black/20 p-6 text-center transition-all hover:border-cyan-400/40 hover:bg-white/[0.06]"
                >
                  <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full border border-white/10 bg-white/[0.04]">
                    <svg
                      viewBox="0 0 24 24"
                      className="h-6 w-6 fill-none stroke-current text-white transition-colors group-hover:text-cyan-300"
                      strokeWidth="1.8"
                      aria-hidden="true"
                    >
                      <rect x="3.5" y="3.5" width="17" height="17" rx="4" />
                      <circle cx="12" cy="12" r="4" />
                      <circle
                        cx="17.5"
                        cy="6.7"
                        r="1"
                        className="fill-current stroke-none"
                      />
                    </svg>
                  </div>

                  <h3 className="mt-5 font-heading text-2xl font-bold">
                    Instagram
                  </h3>

                  <p className="mt-2 font-body text-sm text-slate-400">
                    Follow our journey
                  </p>
                </a>

                {/* WhatsApp */}
                <a
                  href="https://www.whatsapp.com/channel/0029VbCLJH0EquiZLhsW0y3g"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Join the Word & Voice WhatsApp Channel"
                  className="group rounded-2xl border border-white/10 bg-black/20 p-6 text-center transition-all hover:border-cyan-400/40 hover:bg-white/[0.06]"
                >
                  <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full border border-white/10 bg-white/[0.04]">
                    <svg
                      viewBox="0 0 24 24"
                      className="h-6 w-6 fill-none stroke-current text-white transition-colors group-hover:text-cyan-300"
                      strokeWidth="1.8"
                      aria-hidden="true"
                    >
                      <path d="M20.5 11.7a8.4 8.4 0 0 1-12.4 7.4L4 20.5l1.4-4A8.4 8.4 0 1 1 20.5 11.7Z" />
                      <path d="M9 8.7c.2-.3.4-.3.7-.3h.5c.2 0 .4.1.5.4l.7 1.6c.1.2.1.4-.1.6l-.6.7c.5 1 1.2 1.7 2.2 2.2l.7-.6c.2-.2.4-.2.6-.1l1.6.7c.3.1.4.3.4.5v.5c0 .3 0 .5-.3.7-.4.3-1 .5-1.6.4-1.4-.2-2.7-.9-3.8-2-1.1-1.1-1.8-2.4-2-3.8-.1-.6.1-1.2.5-1.6Z" />
                    </svg>
                  </div>

                  <h3 className="mt-5 font-heading text-2xl font-bold">
                    WhatsApp
                  </h3>

                  <p className="mt-2 font-body text-sm text-slate-400">
                    Join our channel
                  </p>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* =========================================================
            SCRIPTURE
            ========================================================= */}
        <section className="border-t border-white/10 px-6 py-24">
          <div className="container text-center">
            <blockquote className="mx-auto max-w-3xl font-heading text-3xl italic leading-relaxed text-white md:text-4xl">
              "Let your conversation be always full of grace."
            </blockquote>

            <p className="mt-6 font-body text-sm font-semibold uppercase tracking-[0.35em] text-cyan-300">
              Colossians 4:6
            </p>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}