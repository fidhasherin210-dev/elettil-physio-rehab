import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import HeroSection from "@/components/sections/HeroSection";
import AboutSection from "@/components/sections/AboutSection";
import WhyChooseUsSection from "@/components/sections/WhyChooseUsSection";
import ServicesSection from "@/components/sections/ServicesSection";
// import ProcessSection from "@/components/sections/ProcessSection";
import FacilitiesSection from "@/components/sections/FacilitiesSection";
import ContactSection from "@/components/sections/ContactSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background overflow-x-hidden w-full">
      <Header />
      <main className="w-full">
        <HeroSection />
        <AboutSection />
        <WhyChooseUsSection />
        <ServicesSection />
        {/* <ProcessSection /> */}
        <FacilitiesSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
