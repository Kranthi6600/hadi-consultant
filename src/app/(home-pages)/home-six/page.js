
import HeaderSix from "@/components/header/HeaderSix";
import BannerSix from "@/components/banner/BannerSix";
import CounterupFour from "@/components/counterup/CounterupFour";
import AboutFour from "@/components/about/AboutFour";




import BackToTop from "@/components/BackToTop";
import ServiceSix from "@/components/service/ServiceSix";
import ProgressCircle from "@/components/counterup/ProgressCircle";
import TeamFour from "@/components/team/TeamFour";
import BusinessGroth from "@/components/businessgoal/BusinessGroth";
import WorkingProcessThree from "@/components/workingprocess/WorkingProcessThree";
import GalleryTwo from "@/components/gallery/GalleryTwo";
import BrandOne from "@/components/brand/BrandOne";
import TestimonialFive from "@/components/testimonials/TestimonialFive";
import BlogSix from "@/components/blog/BlogSix";
import FooterSix from "@/components/footer/FooterSix";



export default function Home() {

    return (

        <div className="index-six">
            <HeaderSix />
            <BannerSix/>
            <ServiceSix/>
            <CounterupFour/>
            <AboutFour/>
            <ProgressCircle/>
            <TeamFour/>
            <BusinessGroth/>
            <WorkingProcessThree/>
            <GalleryTwo/>
            <BrandOne/>
            <TestimonialFive/>
            <BlogSix/>
            <FooterSix/>


            <BackToTop />
        </div>

    );
}
