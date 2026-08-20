// app/contact/page.tsx
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export default function ContactPage() {
  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-[#050B15] px-6 py-32 text-white">
        <div className="container text-center">
          <h1 className="font-heading text-5xl font-bold">
            Contact
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-lg text-slate-400">
            This page is currently under construction. Please check back soon.
          </p>
        </div>
      </main>

      <Footer />
    </>
  );
}