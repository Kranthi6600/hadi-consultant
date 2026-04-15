"use client"
import React from 'react'
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';


function CounterUpTwo() {

    const { ref, inView } = useInView({
        triggerOnce: true, // Trigger the animation only once when in view
        threshold: 0.5, // 50% of the element needs to be visible for it to trigger
    });

    return (
        <div>
            {/* rts counter up section area */}
            <div className="pb--120 pb_md--80 pb_sm--60 rts-counter-up-area rts-section-gapTop">
                <div className="container">
                    <div className="row g-5">
                        <div className="col-lg-4 col-md-6 col-sm-12 col-12">
                            <div className="counter-wrapper-two">
                                <div className="single-counter">
                                    <img
                                        src="assets/images/counterup/icon/05.svg"
                                        alt="Business_counter"
                                    />
                                    <div className="counter-details" ref={ref}>
                                        {inView && ( // Only render CountUp when the element is in view
                                            <h2 className="title counter animate__animated animate__fadeInDownBig">
                                                <CountUp start={0} end={1500} delay={0} duration={1} />
                                            </h2>
                                        )}
                                        <p className="disc">Business Solution</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-12 col-12">
                            <div className="counter-wrapper-two">
                                <div className="single-counter">
                                    <img
                                        src="assets/images/counterup/icon/08.svg"
                                        alt="Business_counter"
                                    />
                                    <div className="counter-details" ref={ref}>
                                        {inView && ( // Only render CountUp when the element is in view
                                            <h2 className="title counter animate__animated animate__fadeInDownBig">
                                                <CountUp start={0} end={196} delay={0} duration={1} />
                                            </h2>
                                        )}
                                        <p className="disc">Business Solution</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-12 col-12">
                            <div className="counter-wrapper-two">
                                <div className="single-counter">
                                    <img
                                        src="assets/images/counterup/icon/07.svg"
                                        alt="Business_counter"
                                    />
                                    <div className="counter-details" ref={ref}>
                                        {inView && ( // Only render CountUp when the element is in view
                                            <h2 className="title counter animate__animated animate__fadeInDownBig">
                                                <CountUp start={0} end={999} delay={0} duration={1} />
                                            </h2>
                                        )}
                                        <p className="disc">Business Solution</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* rts counter up section area */}
        </div>
    )
}

export default CounterUpTwo