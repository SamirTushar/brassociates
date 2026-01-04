import Header from "@/components/layout/Header";
import Hero from "@/components/sections/Hero";
import TrustBar from "@/components/sections/TrustBar";
import PracticeAreas from "@/components/sections/PracticeAreas";
import Consultation from "@/components/sections/Consultation";
import WhyChooseUs from "@/components/sections/WhyChooseUs";
import AboutPreview from "@/components/sections/AboutPreview";
import Testimonials from "@/components/sections/Testimonials";
import CTASection from "@/components/sections/CTASection";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/layout/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <TrustBar />
      <PracticeAreas />
      <Consultation />
      <WhyChooseUs />
      <AboutPreview />
      <Testimonials />
      <CTASection />
      <Contact />
      <Footer />
    </>
  );
}
