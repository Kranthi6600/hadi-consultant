
import HeaderTen from "@/components/header/HeaderTen";
import BackToTop from "@/components/BackToTop";
import BannerTen from "@/components/banner/BannerTen";
import ServiceNine from "@/components/service/ServiceNine";
import CallToActionSeven from "@/components/calltoaction/CallToActionSeven";
import WhyChooseFour from "@/components/whychooseus/WhyChooseFour";
import AboutSeven from "@/components/about/AboutSeven";
import TeamSix from "@/components/team/TeamSix";
import BrandOne from "@/components/brand/BrandOne";
import TestimonialThree from "@/components/testimonials/TestimonialThree";
import BlogNine from "@/components/blog/BlogNine";
import FooterSeven from "@/components/footer/FooterSeven";

export default function Home() {

    return (

        <div className="home-blue home-ten">
            <HeaderTen />
            <BannerTen />
            <ServiceNine />
            <CallToActionSeven />
            <WhyChooseFour />
            <AboutSeven />
            <TeamSix />
            <BrandOne />
            <TestimonialThree />
            <BlogNine />
            <FooterSeven />

            <BackToTop />
        </div>

    );
}
