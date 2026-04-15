import Link from 'next/link';
import HeaderOne from "@/components/header/HeaderOne";
import BackToTop from "@/components/BackToTop";
import Breadcrumb from "@/components/Breadcrumb";
import TeamTwo from "@/components/team/TeamTwo";
import FooterOne from "@/components/footer/FooterOne";
export default function Home() {
    const breadcrumbs = [
        { label: 'Home', link: '/' },
        { label: 'Appoinment' }
    ];
    return (

        <div className="">
            <HeaderOne />
            <Breadcrumb title="Appoinment" breadcrumbs={breadcrumbs} />

            {/* rts circle progress area */}
            <div className="rts-circle-progress-area rts-section-gap">
                <div className="container">
                    <div className="row g-5">
                        <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12">
                            {/* single progress area */}
                            <div className="single-circle-progress-inner">
                                {/* single */}
                                <div className="progress red">
                                    <span className="progress-left">
                                        <span className="progress-bar" />
                                    </span>
                                    <span className="progress-right">
                                        <span className="progress-bar" />
                                    </span>
                                    <div className="progress-value">85%</div>
                                </div>
                                {/* single */}
                                <h5 className="title">Quality Service</h5>
                            </div>
                            {/* single progress area End */}
                        </div>
                        <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12">
                            {/* single progress area */}
                            <div className="single-circle-progress-inner">
                                {/* single */}
                                <div className="progress red">
                                    <span className="progress-left">
                                        <span className="progress-bar" />
                                    </span>
                                    <span className="progress-right">
                                        <span className="progress-bar" />
                                    </span>
                                    <div className="progress-value">90%</div>
                                </div>
                                {/* single */}
                                <h5 className="title">Skilled Members</h5>
                            </div>
                            {/* single progress area End */}
                        </div>
                        <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12">
                            {/* single progress area */}
                            <div className="single-circle-progress-inner">
                                {/* single */}
                                <div className="progress red">
                                    <span className="progress-left">
                                        <span className="progress-bar" />
                                    </span>
                                    <span className="progress-right">
                                        <span className="progress-bar" />
                                    </span>
                                    <div className="progress-value">78%</div>
                                </div>
                                {/* single */}
                                <h5 className="title">Happy Customers</h5>
                            </div>
                            {/* single progress area End */}
                        </div>
                        <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12">
                            {/* single progress area */}
                            <div className="single-circle-progress-inner">
                                {/* single */}
                                <div className="progress red">
                                    <span className="progress-left">
                                        <span className="progress-bar" />
                                    </span>
                                    <span className="progress-right">
                                        <span className="progress-bar" />
                                    </span>
                                    <div className="progress-value">79%</div>
                                </div>
                                {/* single */}
                                <h5 className="title">Project Fails</h5>
                            </div>
                            {/* single progress area End */}
                        </div>
                    </div>
                </div>
            </div>
            {/* rts circle progress area End */}

            {/* contact area start */}
            <div className="rts-contact-area contact-one appoinment background-contact-appoinment">
                <div className="">
                    <div className="row g-0 align-items-center">
                        <div className="col-xl-5 col-lg-5 col-md-12 col-sm-12 col-12">
                            <div className="contact-image-one appoinment">
                                <img src="assets/images/appoinment/02.png" alt="" />
                            </div>
                        </div>
                        <div className="col-xl-7 col-lg-7 col-md-12 col-sm-12 col-12">
                            <div className="contact-form-area-one">
                                <div className="rts-title-area contact-appoinment text-start">
                                    <p className="pre-title">Make An Appointment</p>
                                    <h2 className="title">Request a free quote</h2>
                                </div>
                                <form action="#">
                                    <div className="name-email">
                                        <input type="text" placeholder="Your Name" />
                                        <input type="email" placeholder="Email Address" />
                                    </div>
                                    <div className="name-email">
                                        <input type="text" placeholder="Phone Number" />
                                        <input type="email" placeholder="Company Website" />
                                    </div>
                                    <input type="text" placeholder="Business Topic" />
                                    <textarea placeholder="Type Your Message" defaultValue={""} />
                                </form>
                                <Link href={'#'} className="rts-btn btn-primary">
                                    Submit Message
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* contact area end */}

            <TeamTwo/>
            <FooterOne />
            <BackToTop />
        </div>

    );
}
