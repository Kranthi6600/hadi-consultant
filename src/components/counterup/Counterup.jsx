"use client"
import React from 'react';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';
import ErrorBoundary from "@/components/ErrorBoundary";

function Counterup() {
    const { ref, inView } = useInView({
        triggerOnce: true, // Trigger the animation only once when in view
        threshold: 0.5, // 50% of the element needs to be visible for it to trigger
    });
    return (
        <ErrorBoundary>
        <div>
            <div className="rts-counter-up-area rts-section-gap counter-bg">
                <div className="container">
                    <div className="row">
                        {/* counter up area */}
                        <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12">
                            <div className="single-counter">
                                <img
                                    src="assets/images/counterup/icon/01.svg"
                                    alt="Business_counter"
                                />
                                <div ref={ref} className="counter-details">
                                    {inView && ( // Only render CountUp when the element is in view
                                        <h2 className="title counter animate__animated animate__fadeInDownBig">
                                            <CountUp start={0} end={230} delay={0} duration={1} />
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
                                    src="assets/images/counterup/icon/02.svg"
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
                                    src="assets/images/counterup/icon/03.svg"
                                    alt="Business_counter"
                                />
                                <div ref={ref} className="counter-details">
                                    {inView && ( // Only render CountUp when the element is in view
                                        <h2 className="title counter animate__animated animate__fadeInDownBig">
                                            <CountUp start={0} end={950} delay={0} duration={1} />
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
                                    src="assets/images/counterup/icon/04.svg"
                                    alt="Business_counter"
                                />
                                <div ref={ref} className="counter-details">
                                    {inView && ( // Only render CountUp when the element is in view
                                        <h2 className="title counter animate__animated animate__fadeInDownBig">
                                            <CountUp start={0} end={250} delay={0} duration={1} />
                                        </h2>

                                    )}
                                    <p className="disc">Serv Activities</p>
                                </div>
                            </div>
                        </div>
                        {/* counter up area */}
                    </div>
                </div>
            </div>

        </div>
        </ErrorBoundary>
    )
}

export default Counterup