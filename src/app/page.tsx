import ContactUsSection from "@/components/ContactUsSection";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import InspirationSection from "@/components/InspirationSection";
import Navbar from "@/components/Navbar";
import OurImpactSection from "@/components/OurImpactSection";
import ProgramSection from "@/components/ProgramSection";
import WhyUdaraMattersSection from "@/components/WhyUdaraMatters";

export default function LandingPage() {
  return (
    <div>
      <Navbar />

      {/* main */}
      <main>
        <HeroSection />
        <ProgramSection />
        <WhyUdaraMattersSection />
        <OurImpactSection />
        <InspirationSection />
        <ContactUsSection />
      </main>

      {/* footer */}
      <Footer />
    </div>
  );
}
