import React from 'react'
import { Link } from 'react-router-dom';
function TestimonialFour() {
    return (
        <div>
            {/* rts customer feedback area start */}
            <div className="rts-customer-feedback-area-six rts-section-gap bg-feedback-seven">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="title-area text-center">
                                <p className="pre-title">Our Testimonials</p>
                                <h2 className="title">Our Customer Feedbacks</h2>
                            </div>
                        </div>
                    </div>
                    <div className="row mt--40">
                        <div className="swiper mySwiperh2_clients">
                            <div className="swiper-wrapper">
                                <div className="swiper-slide">
                                    {/* single client reviews */}
                                    <div className="rts-client-reviews-h2 six">
                                        <div className="review-header">
                                            <Link to={'#'} className="thumbnail">
                                                <img
                                                    src="assets/images/testimonials/02.png"
                                                    alt="testimonials_area"
                                                />
                                            </Link>
                                            <div className="discription">
                                                <Link to={'#'}>
                                                    <h6 className="title">David Smith</h6>
                                                </Link>
                                                <span>Finance</span>
                                            </div>
                                        </div>
                                        <div className="review-body">
                                            <p className="disc">
                                                “Dabus nisl aliquet congue tellus nascetur lectus sagpien
                                                mattis arcu dictums augue volutpat felis etiam suspendisse
                                                rhoncus mauris dignissim ante”
                                            </p>
                                            <div className="body-end">
                                                <Link to={'#'}>
                                                    <img
                                                        src="assets/images/testimonials/icon/logo-01.png"
                                                        alt="Client_logo"
                                                    />
                                                </Link>
                                                <div className="star-icon">
                                                    <i className="fas fa-star" />
                                                    <i className="fas fa-star" />
                                                    <i className="fas fa-star" />
                                                    <i className="fas fa-star" />
                                                    <i className="fas fa-star" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    {/* single client reviews End */}
                                </div>
                                <div className="swiper-slide">
                                    {/* single client reviews */}
                                    <div className="rts-client-reviews-h2 six">
                                        <div className="review-header">
                                            <Link to={'#'} className="thumbnail">
                                                <img
                                                    src="assets/images/testimonials/03.png"
                                                    alt="testimonials_area"
                                                />
                                            </Link>
                                            <div className="discription">
                                                <Link to={'#'}>
                                                    <h6 className="title">Mark Jone</h6>
                                                </Link>
                                                <span>Finance</span>
                                            </div>
                                        </div>
                                        <div className="review-body">
                                            <p className="disc">
                                                “Dabus nisl aliquet congue tellus nascetur lectus sagpien
                                                mattis arcu dictums augue volutpat felis etiam suspendisse
                                                rhoncus mauris dignissim ante”
                                            </p>
                                            <div className="body-end">
                                                <Link to={'#'}>
                                                    <img
                                                        src="assets/images/testimonials/icon/logo-02.png"
                                                        alt="Client_logo"
                                                    />
                                                </Link>
                                                <div className="star-icon">
                                                    <i className="fas fa-star" />
                                                    <i className="fas fa-star" />
                                                    <i className="fas fa-star" />
                                                    <i className="fas fa-star" />
                                                    <i className="fas fa-star" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    {/* single client reviews End */}
                                </div>
                                <div className="swiper-slide">
                                    {/* single client reviews */}
                                    <div className="rts-client-reviews-h2 six">
                                        <div className="review-header">
                                            <Link to={'#'} className="thumbnail">
                                                <img
                                                    src="assets/images/testimonials/04.png"
                                                    alt="testimonials_area"
                                                />
                                            </Link>
                                            <div className="discription">
                                                <Link to={'#'}>
                                                    <h6 className="title">Lord Korn</h6>
                                                </Link>
                                                <span>Finance</span>
                                            </div>
                                        </div>
                                        <div className="review-body">
                                            <p className="disc">
                                                “Dabus nisl aliquet congue tellus nascetur lectus sagpien
                                                mattis arcu dictums augue volutpat felis etiam suspendisse
                                                rhoncus mauris dignissim ante”
                                            </p>
                                            <div className="body-end">
                                                <Link to={'#'}>
                                                    <img
                                                        src="assets/images/testimonials/icon/logo-03.png"
                                                        alt="Client_logo"
                                                    />
                                                </Link>
                                                <div className="star-icon">
                                                    <i className="fas fa-star" />
                                                    <i className="fas fa-star" />
                                                    <i className="fas fa-star" />
                                                    <i className="fas fa-star" />
                                                    <i className="fas fa-star" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    {/* single client reviews End */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* rts customer feedback area end */}
        </div>
    )
}

export default TestimonialFour