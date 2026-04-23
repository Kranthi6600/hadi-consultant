"use client"
import Link from 'next/link';
import React, { useState } from 'react';
import HeaderOne from "@/components/header/HeaderOne";
import BackToTop from "@/components/BackToTop";
import FooterOne from "@/components/footer/FooterOne";
import Breadcrumb from "@/components/Breadcrumb";
export default function Home() {
    const breadcrumbs = [
        { label: 'Home', link: '/' },
        { label: 'Contact Us' }
    ];

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });
    const [errors, setErrors] = useState({});
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState(null);

    const validateForm = () => {
        const newErrors = {};
        
        if (!formData.name.trim()) {
            newErrors.name = 'Name is required';
        }
        
        if (!formData.email.trim()) {
            newErrors.email = 'Email is required';
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
            newErrors.email = 'Invalid email format';
        }
        
        if (!formData.subject.trim()) {
            newErrors.subject = 'Subject is required';
        }
        
        if (!formData.message.trim()) {
            newErrors.message = 'Message is required';
        } else if (formData.message.trim().length < 10) {
            newErrors.message = 'Message must be at least 10 characters';
        }
        
        return newErrors;
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
        
        // Clear error for this field when user starts typing
        if (errors[name]) {
            setErrors(prev => ({
                ...prev,
                [name]: ''
            }));
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        const newErrors = validateForm();
        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors);
            return;
        }
        
        setIsSubmitting(true);
        setSubmitStatus(null);
        
        try {
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    ...formData,
                    service: 'general-inquiry', // Add service field for API compatibility
                    phone: 'N/A' // Add phone field for API compatibility
                }),
            });
            
            const data = await response.json();
            
            if (response.ok) {
                setSubmitStatus({ success: true, message: data.message });
                // Reset form
                setFormData({
                    name: '',
                    email: '',
                    subject: '',
                    message: ''
                });
            } else {
                setSubmitStatus({ success: false, message: data.error });
            }
        } catch (error) {
            setSubmitStatus({ 
                success: false, 
                message: 'Failed to submit form. Please try again later.' 
            });
        } finally {
            setIsSubmitting(false);
        }
    };
    return (
        <div className="">
            <HeaderOne />
            <Breadcrumb title="Contact Us" breadcrumbs={breadcrumbs} />
            {}
            <div className="rts-contact-area rts-section-gap">
                <div className="container">
                    <div className="row g-5">
                        {}
                        <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6 col-12">
                            <div className="single-contact-one-inner">
                                <div className="thumbnail">
                                    <img src="assets/images/contact/01.png" alt="" />
                                </div>
                                <div className="content">
                                    <div className="icone">
                                        <img src="assets/images/contact/shape/01.svg" alt="" />
                                    </div>
                                    <div className="info">
                                        <span>Call Us 24/7</span>
                                        <Link href={'tel:+14169987909'}>
                                            <h5>(416) 998-7909</h5>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {}
                        {}
                        <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6 col-12">
                            <div className="single-contact-one-inner">
                                <div className="thumbnail">
                                    <img src="assets/images/contact/02.png" alt="" />
                                </div>
                                <div className="content">
                                    <div className="icone">
                                        <img src="assets/images/contact/shape/02.svg" alt="" />
                                    </div>
                                    <div className="info">
                                        <span>Email Us</span>
                                        <Link href={'mailto:consultantshadi1@gmail.com'}>
                                            <h5>consultantshadi1@gmail.com</h5>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {}
                        {}
                        <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6 col-12">
                            <div className="single-contact-one-inner">
                                <div className="thumbnail">
                                    <img src="assets/images/contact/03.png" alt="" />
                                </div>
                                <div className="content">
                                    <div className="icone">
                                        <img src="assets/images/contact/shape/03.svg" alt="" />
                                    </div>
                                    <div className="info">
                                        <span>Visit Us</span>
                                        <Link href={'https://maps.google.com/?q=1290+Eglinton+Ave+E+Mississauga+ON'} target="_blank" rel="noopener noreferrer">
                                            <h5>Mississauga</h5>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {}
                    </div>
                </div>
            </div>
            {}
            {}
            <div className="rts-contact-map-area">
                <div className="contaciner-fluid">
                    <div className="row">
                        <div className="col-12">
                            <div className="contact-map-area-fluid">
                                <iframe
                                    className="contact-map"
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2887.6950814459733!2d-79.62490962341647!3d43.633704953690895!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882b38975478ad11%3A0x114452bd23b24f94!2s1290%20Eglinton%20Ave%20E%20%238%2C%20Mississauga%2C%20ON%20L4W%201K8%2C%20Canada!5e0!3m2!1sen!2sin!4v1776880583755!5m2!1sen!2sin"
                                    style={{ border: 0 }}
                                    allowFullScreen=""
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                />
                                <img
                                    className="location"
                                    src="/assets/images/cropped-cropped-HADI_CONSULTANTS_logo-removebg-preview-140x74.webp"
                                    alt="HADI CONSULTANTS logo"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {}
            {}
            <div className="rts-contact-form-area">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="rts-contact-fluid rts-section-gap">
                                <div className="rts-title-area contact-fluid text-center mb--50">
                                    <p className="pre-title">Get In Touch</p>
                                    <h2 className="title">Needs Help? Let’s Get in Touch</h2>
                                </div>
                                <div className="form-wrapper">
                                    <div className="custom-contact-form">
                                        {/* Status Messages */}
                                        {submitStatus && (
                                            <div className={`custom-alert ${submitStatus.success ? 'success' : 'error'}`}>
                                                {submitStatus.message}
                                            </div>
                                        )}
                                        
                                        <form onSubmit={handleSubmit}>
                                            <div className="custom-form-row">
                                                <div className="custom-field-group">
                                                    <input
                                                        type="text"
                                                        name="name"
                                                        placeholder="Your Name"
                                                        value={formData.name}
                                                        onChange={handleInputChange}
                                                        className={errors.name ? 'error' : ''}
                                                        disabled={isSubmitting}
                                                        required
                                                    />
                                                    {errors.name && <span className="custom-error-message">{errors.name}</span>}
                                                </div>
                                                <div className="custom-field-group">
                                                    <input
                                                        type="email"
                                                        name="email"
                                                        placeholder="Email Address"
                                                        value={formData.email}
                                                        onChange={handleInputChange}
                                                        className={errors.email ? 'error' : ''}
                                                        disabled={isSubmitting}
                                                        required
                                                    />
                                                    {errors.email && <span className="custom-error-message">{errors.email}</span>}
                                                </div>
                                            </div>
                                            
                                            <div className="custom-single-field">
                                                <input 
                                                    type="text" 
                                                    name="subject" 
                                                    placeholder="Your Subject"
                                                    value={formData.subject}
                                                    onChange={handleInputChange}
                                                    className={errors.subject ? 'error' : ''}
                                                    disabled={isSubmitting}
                                                    required
                                                />
                                                {errors.subject && <span className="custom-error-message">{errors.subject}</span>}
                                            </div>
                                            
                                            <div className="custom-single-field">
                                                <textarea
                                                    placeholder="Type Your Message"
                                                    name="message"
                                                    value={formData.message}
                                                    onChange={handleInputChange}
                                                    className={errors.message ? 'error' : ''}
                                                    disabled={isSubmitting}
                                                    required
                                                />
                                                {errors.message && <span className="custom-error-message">{errors.message}</span>}
                                            </div>
                                            
                                            <button 
                                                type="submit" 
                                                className="rts-btn btn-primary"
                                                disabled={isSubmitting}
                                            >
                                                {isSubmitting ? 'Sending...' : 'Send Message'}
                                            </button>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {}
            <FooterOne />
            <BackToTop />
        </div>
    );
}
