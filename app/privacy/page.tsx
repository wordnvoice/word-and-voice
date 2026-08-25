import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export const metadata = {
  title: "Privacy Policy",
  description:
    "Privacy Policy for Word & Voice, covering information collected through the website and how it is used.",
};

export default function PrivacyPage() {
  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-[#050B15] text-white">
        <section className="container py-24">

          {/* Header */}

          <div className="mx-auto max-w-4xl text-center">

            <p className="font-body text-sm font-semibold uppercase tracking-[0.4em] text-cyan-300">
              Privacy Policy
            </p>

            <h1 className="mt-5 font-heading text-5xl font-bold leading-tight md:text-6xl">
              Your Privacy Matters.
            </h1>

            <p className="mt-6 text-slate-400">
              Last updated: August 25, 2026
            </p>

          </div>


          {/* Content */}

          <div className="mx-auto mt-16 max-w-4xl space-y-12 text-slate-300">

            <section>
              <h2 className="font-heading text-3xl text-white">
                1. About This Policy
              </h2>

              <p className="mt-4 leading-8">
                Word & Voice respects your privacy and is committed to
                handling personal information responsibly. This Privacy
                Policy explains what information may be collected when you
                use the Word & Voice website and how that information may
                be used.
              </p>
            </section>


            <section>
              <h2 className="font-heading text-3xl text-white">
                2. Information We May Collect
              </h2>

              <p className="mt-4 leading-8">
                Depending on how you interact with the website, we may
                receive information such as your name, email address,
                telephone number, messages or other information that you
                voluntarily provide when contacting Word & Voice.
              </p>

              <p className="mt-4 leading-8">
                The website may also automatically receive limited technical
                information such as browser type, device information,
                approximate location, pages visited, and general website
                usage information.
              </p>
            </section>


            <section>
              <h2 className="font-heading text-3xl text-white">
                3. How We Use Information
              </h2>

              <p className="mt-4 leading-8">
                Information may be used to respond to enquiries, communicate
                with you when requested, provide requested resources,
                improve the website, understand website usage, maintain
                security, and operate Word & Voice.
              </p>

              <p className="mt-4 leading-8">
                We do not intend to collect more personal information than
                is reasonably necessary for these purposes.
              </p>
            </section>


            <section>
              <h2 className="font-heading text-3xl text-white">
                4. Google Analytics
              </h2>

              <p className="mt-4 leading-8">
                Word & Voice uses Google Analytics to understand how visitors
                use the website. This may involve the collection of
                information such as pages viewed, approximate geographic
                information, device type, browser information, and website
                interaction data.
              </p>

              <p className="mt-4 leading-8">
                Analytics information is used to understand website
                performance and improve the experience for visitors.
              </p>
            </section>


            <section>
              <h2 className="font-heading text-3xl text-white">
                5. Cookies and Similar Technologies
              </h2>

              <p className="mt-4 leading-8">
                Word & Voice and third-party services used by the website
                may use cookies or similar technologies for functionality,
                analytics, security, and website performance.
              </p>
            </section>


            <section>
              <h2 className="font-heading text-3xl text-white">
                6. External Websites and Services
              </h2>

              <p className="mt-4 leading-8">
                Word & Voice contains links to external websites and
                platforms including YouTube, Spotify, Instagram, WhatsApp,
                book retailers, music platforms, and other third-party
                services.
              </p>

              <p className="mt-4 leading-8">
                When you follow an external link, you are leaving the Word &
                Voice website. Those services have their own privacy
                policies and terms, and Word & Voice is not responsible for
                how those third parties process information.
              </p>
            </section>


            <section>
              <h2 className="font-heading text-3xl text-white">
                7. Affiliate Links
              </h2>

              <p className="mt-4 leading-8">
                Some links on Word & Voice may be affiliate links. If you
                make a purchase through an affiliate link, Word & Voice may
                receive a commission at no additional cost to you.
              </p>

              <p className="mt-4 leading-8">
                Affiliate relationships do not give Word & Voice access to
                your payment information.
              </p>
            </section>


            <section>
              <h2 className="font-heading text-3xl text-white">
                8. Data Sharing
              </h2>

              <p className="mt-4 leading-8">
                Word & Voice does not sell your personal information.
              </p>

              <p className="mt-4 leading-8">
                Information may be shared with service providers when
                necessary to operate the website, provide requested
                services, maintain security, analyse website performance,
                or comply with applicable law.
              </p>
            </section>


            <section>
              <h2 className="font-heading text-3xl text-white">
                9. Data Security
              </h2>

              <p className="mt-4 leading-8">
                Reasonable measures are taken to protect information
                processed through Word & Voice. However, no method of
                transmitting or storing information online can be guaranteed
                to be completely secure.
              </p>
            </section>


            <section>
              <h2 className="font-heading text-3xl text-white">
                10. Your Choices and Rights
              </h2>

              <p className="mt-4 leading-8">
                Depending on applicable law, you may have rights relating to
                your personal information, including the ability to request
                access, correction, deletion, or other actions regarding
                information you have provided.
              </p>

              <p className="mt-4 leading-8">
                To make a privacy-related request, contact Word & Voice
                using the details below.
              </p>
            </section>


            <section>
              <h2 className="font-heading text-3xl text-white">
                11. Contact
              </h2>

              <div className="mt-4 space-y-2 leading-8">
                <p>
                  <strong className="text-white">Word & Voice</strong>
                </p>

                <p>
                  Email: contact@wordandvoice.in
                </p>

                <p>
                  Phone: +91 7023841729
                </p>

                <p>
                  102- STD Road, Goyala Dairy,
                  <br />
                  Qutab Vihar, New Delhi - 110071
                </p>
              </div>
            </section>


            <section>
              <h2 className="font-heading text-3xl text-white">
                12. Changes to This Policy
              </h2>

              <p className="mt-4 leading-8">
                This Privacy Policy may be updated from time to time to
                reflect changes to the website, services, or applicable
                requirements. The updated version will be published on this
                page with a revised date.
              </p>
            </section>

          </div>

        </section>
      </main>

      <Footer />
    </>
  );
}