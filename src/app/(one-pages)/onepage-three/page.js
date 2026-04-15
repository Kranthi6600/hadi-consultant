
import HeaderTHreeOnepage from "@/components/header/HeaderTHreeOnepage";
import BackToTop from "@/components/BackToTop";
import BannerThree from "@/components/banner/BannerThree";
import AboutThree from "@/components/about/AboutThree";
import ServiceThree from "@/components/service/ServiceThree";
import CallToActionTwo from "@/components/calltoaction/CallToActionTwo";
import BusinessGoalTwo from "@/components/businessgoal/BusinessGoalTwo";
import BusinessCaseTwo from "@/components/businesscase/BusinessCaseTwo";
import CounterUpTwo from "@/components/counterup/CounterUpTwo";
import FaqOne from "@/components/faq/FaqOne";
import TeamTwo from "@/components/team/TeamTwo";
import BrandThree from "@/components/brand/BrandThree";
import PricingTwo from "@/components/pricing/PricingTwo";
import ContactTwo from "@/components/contactform/ContactTwo";
import BlogThree from "@/components/blog/BlogThree";
import CallToActionThree from "@/components/calltoaction/CallToActionThree";
import FooterThree from "@/components/footer/FooterThree";



export default function Home() {

    return (

        <div className="home-yellow onepage">
            <HeaderTHreeOnepage />
            <BannerThree />
            <AboutThree />
            <ServiceThree />
            <CallToActionTwo />
            <BusinessGoalTwo />
            <BusinessCaseTwo />
            <CounterUpTwo />
            <FaqOne />
            <TeamTwo />
            <BrandThree />
            <PricingTwo />
            <ContactTwo />
            <BlogThree />
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
            <CallToActionThree />
            <FooterThree />
            <BackToTop />
        </div>

    );
}
