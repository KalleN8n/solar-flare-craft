import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import CapabilitiesSection from "@/components/CapabilitiesSection";
import DashboardSection from "@/components/DashboardSection";
import AdvantageSection from "@/components/AdvantageSection";
import ServicesSection from "@/components/ServicesSection";
import ApproachSection from "@/components/ApproachSection";
import StatsSection from "@/components/StatsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSection />
      <CapabilitiesSection />
      <DashboardSection />
      <AdvantageSection />
      <ServicesSection />
      <ApproachSection />
      <StatsSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
