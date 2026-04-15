
import HeaderSevenOnepage from "@/components/header/HeaderSevenOnepage";
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

        <div className="index-seven hr onepage">
            <HeaderSevenOnepage />
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
            <FooterOne/>

            <BackToTop />
        </div>

    );
}
