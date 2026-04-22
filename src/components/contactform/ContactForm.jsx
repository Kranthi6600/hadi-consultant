"use client"
import React, { useState } from 'react'

function ContactForm() {
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
                                
                                <form onSubmit={handleSubmit}>
                                    <div className="name-email">
                                        <div>
                                            <input
                                                type="text"
                                                placeholder="Your Name"
                                                name="name"
                                                value={formData.name}
                                                onChange={handleInputChange}
                                                className={errors.name ? 'error' : ''}
                                                disabled={isSubmitting}
                                            />
                                            {errors.name && <span className="error-message">{errors.name}</span>}
                                        </div>
                                        <div>
                                            <input
                                                type="email"
                                                placeholder="Email Address"
                                                name="email"
                                                value={formData.email}
                                                onChange={handleInputChange}
                                                className={errors.email ? 'error' : ''}
                                                disabled={isSubmitting}
                                            />
                                            {errors.email && <span className="error-message">{errors.email}</span>}
                                        </div>
                                    </div>
                                    
                                    <div>
                                        <input 
                                            type="tel" 
                                            placeholder="Phone Number" 
                                            name="phone" 
                                            value={formData.phone}
                                            onChange={handleInputChange}
                                            className={errors.phone ? 'error' : ''}
                                            disabled={isSubmitting}
                                        />
                                        {errors.phone && <span className="error-message">{errors.phone}</span>}
                                    </div>
                                    
                                    <div>
                                        <select 
                                            name="service" 
                                            className={`service-select ${errors.service ? 'error' : ''}`}
                                            value={formData.service}
                                            onChange={handleInputChange}
                                            disabled={isSubmitting}
                                        >
                                            <option value="">Select a Service</option>
                                            <option value="financial-statements">Financial Statements Preparation</option>
                                            <option value="tax-filing-individual">Tax Filing for Individuals</option>
                                            <option value="financial-advisory">Financial Advisory</option>
                                            <option value="tax-corporate">Taxes for Corporate</option>
                                            <option value="t4-filing">T4 Filing</option>
                                            <option value="family-benefits">Family Benefits</option>
                                            <option value="child-benefits">Child Benefits</option>
                                            <option value="canada-workers">Canada Workers Benefits</option>
                                            <option value="estate-trust">Estate & Trust Tax Services</option>
                                            <option value="register-business">Register a Business</option>
                                            <option value="corporate-tax-filing">Corporate Tax Filing</option>
                                            <option value="individual-tax-filing">Individual Tax Filing</option>
                                            <option value="other">Other</option>
                                        </select>
                                        {errors.service && <span className="error-message">{errors.service}</span>}
                                    </div>
                                    
                                    <div>
                                        <textarea
                                            placeholder="Tell us about your tax/financial needs..."
                                            name="message"
                                            value={formData.message}
                                            onChange={handleInputChange}
                                            className={errors.message ? 'error' : ''}
                                            disabled={isSubmitting}
                                            rows="5"
                                        />
                                        {errors.message && <span className="error-message">{errors.message}</span>}
                                    </div>
                                    
                                    <button 
                                        type="submit" 
                                        className="rts-btn btn-primary"
                                        disabled={isSubmitting}
                                    >
                                        {isSubmitting ? 'Submitting...' : 'Get Free Consultation'}
                                    </button>
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