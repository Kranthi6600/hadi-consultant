
import HeaderEight from "@/components/header/HeaderEight";
import BannerEight from "@/components/banner/BannerEight";
import WhyChooseTwo from "@/components/whychooseus/WhyChooseTwo";




import BackToTop from "@/components/BackToTop";
import CtaEight from "@/components/calltoaction/CtaEight";
import ServiceSeven from "@/components/service/ServiceSeven";
import ServiceEight from "@/components/service/ServiceEight";
import AboutCompany from "@/components/about/AboutCompany";
import WorkingProcessFive from "@/components/workingprocess/WorkingProcessFive";
import CseSeven from "@/components/businesscase/CseSeven";
import TestimonialEight from "@/components/testimonials/TestimonialEight";
import ContactFormFour from "@/components/contactform/ContactFormFour";
import PricingOne from "@/components/pricing/PricingOne";
import BlogEight from "@/components/blog/BlogEight";
import FooterSeven from "@/components/footer/FooterSeven";

export default function Home() {

    return (

        <div className="home-blue medium-blue">
            <HeaderEight />
            <BannerEight />
            <WhyChooseTwo />
            <CtaEight />
            <ServiceSeven />
            <ServiceEight />
            <AboutCompany />
            <WorkingProcessFive />
            <CseSeven />
            <TestimonialEight />
            <PricingOne />
            <ContactFormFour />
            <BlogEight />
            <FooterSeven/>

            <BackToTop />
        </div>

    );
}
