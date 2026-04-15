"use client"
import React from 'react'
import Link from 'next/link';
function CallToActionFour() {
    return (
        <div>
            {/* start call to action area */}
            <div className="rts-callto-acation-area rts-callto-acation-area4 bg-call-to-action-two">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="cta-two-wrapper">
                                <div className="title-area">
                                    <h3 className="title">
                                        Let’s discuss about how we can help <br />
                                        make your insurance better
                                    </h3>
                                </div>
                                <Link className="rts-btn btn-secondary-3" href={'/contactus'}>
                                    Lets Work Together
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* end call to action area */}

        </div>
    )
}

export default CallToActionFour