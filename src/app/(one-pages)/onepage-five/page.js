
import HeaderFiveOnepage from "@/components/header/HeaderFiveOnepage";
import BackToTop from "@/components/BackToTop";
import BannerFive from "@/components/banner/BannerFive";
import ServiceFive from "@/components/service/ServiceFive";
import MarketingSolution from "@/components/businessgoal/MarketingSolution";
import CallToActionFive from "@/components/calltoaction/CallToActionFive";
import BusinessCaseThree from "@/components/businesscase/BusinessCaseThree";
import CounterUpThree from "@/components/counterup/CounterUpThree";
import BusinessCaseFour from "@/components/businesscase/BusinessCaseFour";
import TestimonialThree from "@/components/testimonials/TestimonialThree";
import BlogFive from "@/components/blog/BlogFive";
import BrandFive from "@/components/brand/BrandFive";
import FooterFive from "@/components/footer/FooterFive";



export default function Home() {

    return (

        <div className="home-blue2 onepage">
            <HeaderFiveOnepage />
            <BannerFive />
            <ServiceFive />
            <MarketingSolution />
            <CallToActionFive />
            <BusinessCaseThree />
            <CounterUpThree />
            <BusinessCaseFour />
            <TestimonialThree />
            <BlogFive />
            <BrandFive />
            <FooterFive />

            <BackToTop />
        </div>

    );
}
