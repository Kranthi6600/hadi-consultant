
import HeaderSixOnepage from "@/components/header/HeaderSixOnepage";
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

        <div className="index-six onepage">
            <HeaderSixOnepage />
            <BannerSix />
            <ServiceSix />
            <CounterupFour />
            <AboutFour />
            <ProgressCircle />
            <TeamFour />
            <BusinessGroth />
            <WorkingProcessThree />
            <GalleryTwo />
            <BrandOne />
            <TestimonialFive />
            <BlogSix />
            <div className="rts-contact-form-area" id="f-contact">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="rts-contact-fluid rts-section-gap">
                                <div className="rts-title-area contact-fluid text-center mb--50">
                                    <p className="pre-title">Get In Touch</p>
                                    <h2 className="title">Needs Help? Let’s Get in Touch</h2>
                                </div>
                                <div className="form-wrapper">
                                    <div id="form-messages" />
                                    <form id="contact-form">
                                        <div className="name-email">
                                            <input
                                                type="text"
                                                name="name"
                                                placeholder="Your Name"
                                                required=""
                                            />
                                            <input
                                                type="email"
                                                name="email"
                                                placeholder="Email Address"
                                                required=""
                                            />
                                        </div>
                                        <input type="text" name="subject" placeholder="Your Subject" />
                                        <textarea
                                            placeholder="Type Your Message"
                                            name="message"
                                            defaultValue={""}
                                        />
                                        <button type="submit" className="rts-btn btn-primary">
                                            Send Message
                                        </button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <FooterSix />


            <BackToTop />
        </div>

    );
}
