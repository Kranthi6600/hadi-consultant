"use client"
import React, { useState, useEffect } from 'react';
import Link from 'next/link';

function Video() {
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
            {/* start vedio area start */}
            <div className="rts-vedio-area-home-6 rts-section-gapBottom">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="thumbnail-image-gallery">
                                <img src="assets/images/gallery/01.jpg" alt="thumbnail-image" />
                                <Link className="vedio-icone" href={'#'}>
                                    {/* Video Play Button */}
                                    <span id="play-video" className="video-play-button"  onClick={openVideo}>
                                        <span />
                                    </span>

                                    {/* Video Overlay */}
                                    {isVideoOpen && (
                                        <div id="video-overlay" className="video-overlay open">
                                            {/* Close button for the video overlay */}
                                            <span className="video-overlay-close" onClick={closeVideo}>
                                                ×
                                            </span>
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
                                </Link>
                                <div className="vedio-title-area">
                                    <h2 className="title">Watch Video Here</h2>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="bg-shape-vedio-section">
                    <img src="assets/images/gallery/bg-vedio.png" alt="bg" />
                </div>
            </div>
            {/* start vedio area end */}
        </div>
    )
}

export default Video