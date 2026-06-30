"use client"
import React, { useState, useEffect } from 'react'

function ContactForm() {
    const [services, setServices] = useState([]);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        service: '',
        message: ''
    });
    const [errors, setErrors] = useState({});
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState(null);

    useEffect(() => {
        fetch("/api/proxy-services")
            .then((res) => res.json())
            .then((data) => setServices(data.data || []))
            .catch(() => setServices([]));
    }, []);

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
        
        if (!formData.phone.trim()) {
            newErrors.phone = 'Phone number is required';
        } else if (!/^\d{10,15}$/.test(formData.phone.replace(/\D/g, ''))) {
            newErrors.phone = 'Invalid phone number';
        }
        
        if (!formData.service) {
            newErrors.service = 'Please select a service';
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
                body: JSON.stringify(formData),
            });
            
            const data = await response.json();
            
            if (response.ok) {
                setSubmitStatus({ success: true, message: data.message });
                // Reset form
                setFormData({
                    name: '',
                    email: '',
                    phone: '',
                    service: '',
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
        <div>
            <div className="rts-contact-area contact-one">
                <div className="container">
                    <div className="row align-items-center g-0">
                        <div className="col-lg-4 col-md-12 col-sm-12 col-12">
                            <div className="contact-image-one">
                                <img src="assets/images/contact/01.jpg" alt="" />
                            </div>
                        </div>
                        <div className="col-lg-8 col-md-12 col-sm-12 col-12">
                            <div className="contact-form-area-one">
                                <div className="rts-title-area contact text-start">
                                    <p className="pre-title">Get A Free Quote</p>
                                    <h2 className="title">Contact Hadi Consultant</h2>
                                </div>
                                
                                {/* Status Messages */}
                                {submitStatus && (
                                    <div className={`alert ${submitStatus.success ? 'success' : 'error'}`} style={{
                                        padding: '15px',
                                        borderRadius: '8px',
                                        marginBottom: '20px',
                                        backgroundColor: submitStatus.success ? '#d4edda' : '#f8d7da',
                                        color: submitStatus.success ? '#155724' : '#721c24',
                                        border: `1px solid ${submitStatus.success ? '#c3e6cb' : '#f5c6cb'}`
                                    }}>
                                        {submitStatus.message}
                                    </div>
                                )}
                                
                                <form onSubmit={handleSubmit} className="modern-contact-form" style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                                    <div className="form-row" style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
                                        <div className="form-group" style={{ marginBottom: '0', flex: '1 1 48%', minWidth: '200px' }}>
                                            <label htmlFor="name" className="form-label" style={{ display: 'block', marginBottom: '4px', fontSize: '14px', fontWeight: '500' }}>Your Name *</label>
                                            <input
                                                type="text"
                                                id="name"
                                                placeholder="Enter your full name"
                                                name="name"
                                                value={formData.name}
                                                onChange={handleInputChange}
                                                className={`form-input ${errors.name ? 'error' : ''}`}
                                                disabled={isSubmitting}
                                                style={{ width: '100%', height: '42px', padding: '8px 12px', fontSize: '14px', border: '1px solid #ddd', borderRadius: '6px' }}
                                            />
                                            {errors.name && <span className="error-message" style={{ display: 'block', fontSize: '12px', color: '#DF0A0A', marginTop: '2px' }}>{errors.name}</span>}
                                        </div>
                                        <div className="form-group" style={{ marginBottom: '0', flex: '1 1 48%', minWidth: '200px' }}>
                                            <label htmlFor="email" className="form-label" style={{ display: 'block', marginBottom: '4px', fontSize: '14px', fontWeight: '500' }}>Email Address *</label>
                                            <input
                                                type="email"
                                                id="email"
                                                placeholder="your.email@example.com"
                                                name="email"
                                                value={formData.email}
                                                onChange={handleInputChange}
                                                className={`form-input ${errors.email ? 'error' : ''}`}
                                                disabled={isSubmitting}
                                                style={{ width: '100%', height: '42px', padding: '8px 12px', fontSize: '14px', border: '1px solid #ddd', borderRadius: '6px' }}
                                            />
                                            {errors.email && <span className="error-message" style={{ display: 'block', fontSize: '12px', color: '#DF0A0A', marginTop: '2px' }}>{errors.email}</span>}
                                        </div>
                                    </div>
                                    
                                    <div className="form-group" style={{ marginBottom: '0' }}>
                                        <label htmlFor="phone" className="form-label" style={{ display: 'block', marginBottom: '4px', fontSize: '14px', fontWeight: '500' }}>Phone Number *</label>
                                        <input 
                                            type="tel" 
                                            id="phone"
                                            placeholder="+1 (555) 123-4567" 
                                            name="phone" 
                                            value={formData.phone}
                                            onChange={handleInputChange}
                                            className={`form-input ${errors.phone ? 'error' : ''}`}
                                            disabled={isSubmitting}
                                            style={{ width: '100%', height: '42px', padding: '8px 12px', fontSize: '14px', border: '1px solid #ddd', borderRadius: '6px' }}
                                        />
                                        {errors.phone && <span className="error-message" style={{ display: 'block', fontSize: '12px', color: '#DF0A0A', marginTop: '2px' }}>{errors.phone}</span>}
                                    </div>
                                    
                                    <div className="form-group" style={{ marginBottom: '0' }}>
                                        <label htmlFor="service" className="form-label" style={{ display: 'block', marginBottom: '4px', fontSize: '14px', fontWeight: '500' }}>Service Type *</label>
                                        <select 
                                            id="service"
                                            name="service" 
                                            className={`form-select ${errors.service ? 'error' : ''}`}
                                            value={formData.service}
                                            onChange={handleInputChange}
                                            disabled={isSubmitting}
                                            style={{ width: '100%', height: '42px', padding: '8px 12px', fontSize: '14px', border: '1px solid #ddd', borderRadius: '6px' }}
                                        >
                                            <option value="">Select a Service</option>
                                            {services.map((svc) => (
                                                <option key={svc.id} value={svc.slug}>{svc.title}</option>
                                            ))}
                                            <option value="other">Other</option>
                                        </select>
                                        {errors.service && <span className="error-message" style={{ display: 'block', fontSize: '12px', color: '#DF0A0A', marginTop: '2px' }}>{errors.service}</span>}
                                    </div>
                                    
                                    <div className="form-group" style={{ marginBottom: '0' }}>
                                        <label htmlFor="message" className="form-label" style={{ display: 'block', marginBottom: '4px', fontSize: '14px', fontWeight: '500' }}>Message *</label>
                                        <textarea
                                            id="message"
                                            placeholder="Tell us about your tax/financial needs..."
                                            name="message"
                                            value={formData.message}
                                            onChange={handleInputChange}
                                            className={`form-textarea ${errors.message ? 'error' : ''}`}
                                            disabled={isSubmitting}
                                            rows="4"
                                            style={{ width: '100%', padding: '8px 12px', fontSize: '14px', border: '1px solid #ddd', borderRadius: '6px', minHeight: '80px' }}
                                        />
                                        {errors.message && <span className="error-message" style={{ display: 'block', fontSize: '12px', color: '#DF0A0A', marginTop: '2px' }}>{errors.message}</span>}
                                    </div>
                                    
                                    <div className="form-submit" style={{ marginTop: '4px' }}>
                                        <button 
                                            type="submit" 
                                            disabled={isSubmitting}
                                            style={{
                                                backgroundColor: '#DF0A0A',
                                                color: '#FFFFFF',
                                                border: '2px solid #DF0A0A',
                                                borderRadius: '15px',
                                                fontSize: '16px',
                                                fontWeight: '700',
                                                padding: '17px 30px',
                                                cursor: 'pointer',
                                                boxShadow: '0 4px 15px rgba(223, 10, 10, 0.3)',
                                                transition: 'all 0.3s ease',
                                                display: 'inline-flex',
                                                alignItems: 'center',
                                                gap: '8px'
                                            }}
                                        >
                                            {isSubmitting ? 'Submitting...' : (
                                                <>
                                                    <span style={{ fontSize: '24px' }}></span>
                                                    Get Free Consultation
                                                </>
                                            )}
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ContactForm