
import HeaderNineOnepage from "@/components/header/HeaderNineOnepage";
import BannerNine from "@/components/banner/BannerNine";
import WhyChooseThree from "@/components/whychooseus/WhyChooseThree";
import AboutSix from "@/components/about/AboutSix";
import WorkingProcessSix from "@/components/workingprocess/WorkingProcessSix";
import CaseSeven from "@/components/businesscase/CaseSeven";
import TestimonialNine from "@/components/testimonials/TestimonialNine";
import BlogSix from "@/components/blog/BlogSix";
import FooterEight from "@/components/footer/FooterEight";



import BackToTop from "@/components/BackToTop";

export default function Home() {

    return (

        <div className="home-nine onepage">
            <HeaderNineOnepage />
            <BannerNine />
            <WhyChooseThree />
            <AboutSix />
            <WorkingProcessSix />
            <CaseSeven />
            <TestimonialNine />
            <BlogSix />
            <FooterEight />


            <BackToTop />
        </div>

    );
}
