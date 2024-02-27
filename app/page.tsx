
import HeroSection from "@/components/HeroSection";
import Features from "@/components/Features";
import Testimonials from "@/components/Testimonials";
import ContactForm from "@/components/ContactForm";
import ThreeTierPricingHorizontal from "@/components/Pricelist"; // Pricelist
import Carousel from "@/components/Carousel";

export default function Home() {
  return (
    <>
    <HeroSection/>
    <Features/>
    <Testimonials/>
    <Carousel/>
    <ThreeTierPricingHorizontal/>
    <ContactForm/>
    </>
  );
}
