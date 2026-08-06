import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/sections/Hero";
import FeatureCards from "@/components/sections/FeatureCards";
import Footer from "@/components/layout/Footer";

export default function HomePage() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />

        <FeatureCards />
      </main>

      <Footer />
    </>
  );
}