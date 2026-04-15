
import HeaderSeven from "@/components/header/HeaderSeven";
import BannerSeven from "@/components/banner/BannerSeven";
import BusinessGoalFour from "@/components/businessgoal/BusinessGoalFour";



import BackToTop from "@/components/BackToTop";
import AboutFive from "@/components/about/AboutFive";
import TestimonialSix from "@/components/testimonials/TestimonialSix";
import WorkingProcessFour from "@/components/workingprocess/WorkingProcessFour";
import Video from "@/components/video/Video";
import TeamFive from "@/components/team/TeamFive";
import BusinessFive from "@/components/businesscase/BusinessFive";
import CallToActionSix from "@/components/calltoaction/CallToActionSix";
import TestimonialSeven from "@/components/testimonials/TestimonialSeven";
import CaseSix from "@/components/businesscase/CaseSix";
import BlogSeven from "@/components/blog/BlogSeven";
import FooterOne from "@/components/footer/FooterOne";


export default function Home() {

    return (

        <div className="index-seven hr">
            <HeaderSeven />
            <BannerSeven />
            <BusinessGoalFour />
            <AboutFive />
            <TestimonialSix />
            <WorkingProcessFour />
            <Video />
            <TeamFive />
            <BusinessFive />
            <CallToActionSix />
            <TestimonialSeven />
            <CaseSix/>
            <BlogSeven/>
            <FooterOne/>

            <BackToTop />
        </div>

    );
}
