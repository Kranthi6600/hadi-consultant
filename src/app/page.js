import AboutOne from "@/components/about/AboutOne";
import BannerOne from "@/components/banner/BannerOne";
import HeaderOne from "@/components/header/HeaderOne";
import ServiceOne from "@/components/service/ServiceOne";
import BusinessGoalOne from "@/components/businessgoal/BusinessGoalOne";
import Counterup from "@/components/counterup/Counterup";
import GalleryOne from "@/components/gallery/GalleryOne";
import BrandOne from "@/components/brand/BrandOne";
import TeamOne from "@/components/team/TeamOne";
import Feature from "@/components/feature/Feature";
import TestimonialOne from "@/components/testimonials/TestimonialOne";
import BlogOne from "@/components/blog/BlogOne";
import ContactForm from "@/components/contactform/ContactForm";
import MapOne from "@/components/map/MapOne";
import FooterOne from "@/components/footer/FooterOne";
import BackToTop from "@/components/BackToTop";

export default function Home() {
  return (
    <div className="#">

      <HeaderOne />
      <BannerOne />
      <AboutOne />
      <ServiceOne />
      <BusinessGoalOne />
      <Counterup />
      <GalleryOne />
      <BrandOne />
      <TeamOne />
      <Feature />
      <TestimonialOne />
      <BlogOne />
      <ContactForm />
      <MapOne />
      <FooterOne />
      <BackToTop />

    </div>
  );
}
