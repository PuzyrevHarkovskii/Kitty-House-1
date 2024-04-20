
import HeroSection from "@/components/HeroSection";
import Features from "@/components/Features";
import Testimonials from "@/components/Testimonials";
import ContactForm from "@/components/ContactForm";
import ThreeTierPricingHorizontal from "@/components/Pricelist"; // Pricelist
import Carousel from "@/components/Carousel";
import SimpleAccordion from "@/components/SimpleAccordion";
import WhatsappCallback from "@/components/WhatsappButton";


export default function Home() {
  return (
    <>
    
    <HeroSection/>
    
    <Features/>
    <Testimonials/>
    
    <SimpleAccordion/>
    
    <ThreeTierPricingHorizontal/>
    <Carousel/>
    <ContactForm/>
    
    </>
  );
}
