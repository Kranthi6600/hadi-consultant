"use client"
import React from 'react'
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';


function CounterUpThree() {
    const { ref, inView } = useInView({
        triggerOnce: true, // Trigger the animation only once when in view
        threshold: 0.5, // 50% of the element needs to be visible for it to trigger
    });
    return (
        <div>
            {/* rts-counter up area start */}
            <div className="rts-counter-up-area counter-5 rts-section-gap">
                <div className="container">
                    <div className="row">
                        {/* counter up area */}
                        <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12">
                            <div className="single-counter">
                                <img
                                    src="assets/images/counterup/icon/09.svg"
                                    alt="Business_counter"
                                />
                                <div ref={ref} className="counter-details">
                                    {inView && ( // Only render CountUp when the element is in view
                                        <h2 className="title counter animate__animated animate__fadeInDownBig">
                                            <CountUp start={0} end={854} delay={0} duration={1} />
                                        </h2>

                                    )}

                                    <p className="disc">Media Activities</p>
                                </div>
                            </div>
                        </div>
                        {/* counter up area */}
                        {/* counter up area */}
                        <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12">
                            <div className="single-counter pl--10 justify-content-center two pl--30">
                                <img
                                    src="assets/images/counterup/icon/10.svg"
                                    alt="Business_counter"
                                />
                                <div ref={ref} className="counter-details">
                                    {inView && ( // Only render CountUp when the element is in view
                                        <h2 className="title counter animate__animated animate__fadeInDownBig">
                                            <CountUp start={0} end={650} delay={0} duration={1} />
                                        </h2>

                                    )}

                                    <p className="disc">Media Activities</p>
                                </div>
                            </div>
                        </div>
                        {/* counter up area */}
                        {/* counter up area */}
                        <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12">
                            <div className="single-counter pl--10 justify-content-center three pl--50">
                                <img
                                    src="assets/images/counterup/icon/11.svg"
                                    alt="Business_counter"
                                />
                                <div ref={ref} className="counter-details">
                                    {inView && ( // Only render CountUp when the element is in view
                                        <h2 className="title counter animate__animated animate__fadeInDownBig">
                                            <CountUp start={0} end={567} delay={0} duration={1} />
                                        </h2>

                                    )}

                                    <p className="disc">Media Activities</p>
                                </div>
                            </div>
                        </div>
                        {/* counter up area */}
                        {/* counter up area */}
                        <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12">
                            <div className="single-counter pl--10 justify-content-end four">
                                <img
                                    src="assets/images/counterup/icon/12.svg"
                                    alt="Business_counter"
                                />
                                <div ref={ref} className="counter-details">
                                    {inView && ( // Only render CountUp when the element is in view
                                        <h2 className="title counter animate__animated animate__fadeInDownBig">
                                            <CountUp start={0} end={87} delay={0} duration={1} />
                                        </h2>

                                    )}

                                    <p className="disc">Happy Clients</p>
                                </div>
                            </div>
                        </div>
                        {/* counter up area */}
                    </div>
                </div>
            </div>
            {/* rts-counter up area end */}
        </div>
    )
}

export default CounterUpThree