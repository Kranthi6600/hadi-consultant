
import HeaderTenOnepage from "@/components/header/HeaderTenOnepage";
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

        <div className="home-blue home-ten onepage">
            <HeaderTenOnepage />
            <BannerTen />
            <ServiceNine />
            <CallToActionSeven />
            <WhyChooseFour />
            <AboutSeven />
            <TeamSix />
            <BrandOne />
            <TestimonialThree />
            <BlogNine />
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
            <FooterSeven />

            <BackToTop />
        </div>

    );
}
