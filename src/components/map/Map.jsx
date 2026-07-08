"use client"
import React from 'react'
import Link from 'next/link';
function Map() {
    return (
        <div>
            <div className="rts-map-area bg-light-white" id='address' style={{ padding: '80px 0' }}>
                <div className="container">
                    <div className="row align-items-center g-4">
                        <div className="col-lg-6">
                            <div className="mapdetails-inner-one" style={{ display: 'flex', flexWrap: 'wrap', gap: '40px' }}>
                                <div className="left-area single-wized" style={{ flex: '1 1 45%', minWidth: '250px' }}>
                                    <h5 className="title" style={{ fontSize: '20px', fontWeight: '700', marginBottom: '16px', color: '#333' }}>Get in touch</h5>
                                    <div className="details">
                                        <p style={{ color: '#666', marginBottom: '8px' }}>Work and general inquiries</p>
                                        <Link className="number" href={'tel:+14169987909'} style={{ display: 'block', fontSize: '18px', fontWeight: '600', color: '#DF0A0A', marginBottom: '16px', textDecoration: 'none' }}>
                                            (416) 998-7909
                                        </Link>
                                        <p className="time-header" style={{ fontWeight: '600', color: '#333', marginBottom: '4px' }}>Assistance hours:</p>
                                        <p className="time" style={{ color: '#666', marginBottom: '0' }}>
                                            Monday – Friday <br /> 6 am to 8 pm EST
                                        </p>
                                    </div>
                                </div>
                                <div className="right-area single-wized" style={{ flex: '1 1 45%', minWidth: '250px' }}>
                                    <h5 className="title" style={{ fontSize: '20px', fontWeight: '700', marginBottom: '16px', color: '#333' }}>Post Address</h5>
                                    <div className="details">
                                        <p style={{ color: '#666', marginBottom: '8px' }}>Service Office</p>
                                        <Link href={'https://maps.google.com/?q=1290+Eglinton+Ave+E+Mississauga+ON'} target="_blank" rel="noopener noreferrer" style={{ display: 'block', color: '#333', textDecoration: 'none', marginBottom: '16px', lineHeight: '1.6' }}>
                                            1290 Eglinton Ave E #8, Mississauga, <br />
                                            ON L4W 1K8 Canada
                                        </Link>
                                        <p className="headoffice" style={{ fontWeight: '600', color: '#333', marginBottom: '4px' }}>Email</p>
                                        <Link href={'mailto:faisal25us@yahoo.com'} style={{ display: 'block', color: '#DF0A0A', textDecoration: 'none' }}>
                                            faisal25us@yahoo.com
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div style={{ borderRadius: '12px', overflow: 'hidden', boxShadow: '0 4px 20px rgba(0,0,0,0.08)' }}>
                                <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2887.6950814459733!2d-79.62490962341647!3d43.633704953690895!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882b38975478ad11%3A0x114452bd23b24f94!2s1290%20Eglinton%20Ave%20E%20%238%2C%20Mississauga%2C%20ON%20L4W%201K8%2C%20Canada!5e0!3m2!1sen!2sin!4v1776880583755!5m2!1sen!2sin"
                                    width={'100%'}
                                    height={450}
                                    style={{ border: 0, display: 'block' }}
                                    allowFullScreen=""
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Map