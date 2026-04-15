"use client"
import React, { useState, useEffect } from 'react';

function BusinessGroth() {
    const [isVideoOpen, setIsVideoOpen] = useState(false);

    // Function to open the video overlay
    const openVideo = (e) => {
        e.preventDefault();
        setIsVideoOpen(true);
    };

    // Function to close the video overlay
    const closeVideo = (e) => {
        e.preventDefault();
        setIsVideoOpen(false);
    };

    // Effect to handle the escape key for closing the video overlay
    useEffect(() => {
        const handleKeyUp = (e) => {
            if (e.keyCode === 27) {
                setIsVideoOpen(false);
            }
        };

        // Add event listener for keyup
        document.addEventListener('keyup', handleKeyUp);

        // Cleanup function to remove event listener on component unmount
        return () => {
            document.removeEventListener('keyup', handleKeyUp);
        };
    }, []);
    return (
        <div>
            {/* rts business growth area */}
            <div className="rts-business-groth-home-6 rts-section-gap" id="goal">
                <div className="container">
                    <div className="row g-5 align-items-center">
                        <div className="col-lg-6">
                            <div className="thumbnaail">
                                <img src="assets/images/business-goal/04.jpg" alt="business_goal" />
                            </div>
                        </div>
                        <div className="col-lg-6 pl--40">
                            <div className="business-goal-inner">
                                <div className="title-area text-start working-process">
                                    <p className="pre-title">Business Growth</p>
                                    <h2 className="title">
                                        Contributing To Important Global Initiatives
                                    </h2>
                                </div>
                                <div className="content-inner">
                                    <p className="disc mb--30">
                                        Molestie velit imperdiet porttitor at taciti, aptent semper
                                        primis nislut velit penatibus tortor in sed curae urna lobortis
                                        ultricies aptent integer risus commodo viverra dis ridiculus
                                        elementum ligula lobortis
                                    </p>
                                    <p className="disc">
                                        cursus luctus tristique facilisi magna euismod sem nibh
                                        hendrerit vivamus volutpat ultricies egestas pharetra etiam eros
                                        in dignissim
                                    </p>
                                    <div className="button-area-business-groth">
                                        <a href="#" className="rts-btn btn-primary six">
                                            Read More
                                        </a>
                                        <div className="vedio-icone">
                                            {/* Video Play Button */}
                                            <a id="play-video" className="video-play-button" href="#" onClick={openVideo}>
                                                <span />
                                                <span className="outer-text">Watch Video</span>
                                            </a>

                                            {/* Video Overlay */}
                                            {isVideoOpen && (
                                                <div id="video-overlay" className="video-overlay open">
                                                    {/* Close button for the video overlay */}
                                                    <a className="video-overlay-close" href="#" onClick={closeVideo}>
                                                        ×
                                                    </a>
                                                    {/* Video iframe */}
                                                    <iframe
                                                        width="560"
                                                        height="315"
                                                        src="https://www.youtube.com/embed/6stlCkUDG_s"
                                                        title="YouTube video player"
                                                        frameBorder="0"
                                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                                        allowFullScreen
                                                    ></iframe>
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* rts business growth area End */}
        </div>
    )
}

export default BusinessGroth