import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

// Create a transporter using your email service
const createTransporter = () => {
  // For development, you can use a test account or Gmail
  // For production, you should use environment variables
  return nodemailer.createTransporter({
    host: process.env.SMTP_HOST || 'smtp.gmail.com',
    port: process.env.SMTP_PORT || 587,
    secure: false, // true for 465, false for other ports
    auth: {
      user: process.env.SMTP_USER || 'your-email@gmail.com', // Replace with your email
      pass: process.env.SMTP_PASS || 'your-app-password', // Replace with your password/app password
    },
  });
};

const getServiceLabel = (serviceValue) => {
  const services = {
    'financial-statements': 'Financial Statements Preparation',
    'tax-filing-individual': 'Tax Filing for Individuals',
    'financial-advisory': 'Financial Advisory',
    'tax-corporate': 'Taxes for Corporate',
    't4-filing': 'T4 Filing',
    'family-benefits': 'Family Benefits',
    'child-benefits': 'Child Benefits',
    'canada-workers': 'Canada Workers Benefits',
    'estate-trust': 'Estate & Trust Tax Services',
    'register-business': 'Register a Business',
    'corporate-tax-filing': 'Corporate Tax Filing',
    'individual-tax-filing': 'Individual Tax Filing',
    'other': 'Other'
  };
  return services[serviceValue] || serviceValue;
};

export async function POST(request) {
  try {
    const body = await request.json();
    const { name, email, phone, service, message, subject } = body;

    // For general inquiry form, phone and service might not be provided
    const isGeneralInquiry = service === 'general-inquiry';
    
    // Validate required fields based on form type
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Name, email, and message are required' },
        { status: 400 }
      );
    }

    // Additional validation for service-specific forms
    if (!isGeneralInquiry && (!phone || !service)) {
      return NextResponse.json(
        { error: 'Phone and service are required for service inquiries' },
        { status: 400 }
      );
    }

    // Additional validation for general inquiry forms
    if (isGeneralInquiry && !subject) {
      return NextResponse.json(
        { error: 'Subject is required' },
        { status: 400 }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Invalid email format' },
        { status: 400 }
      );
    }

    // Log the submission
    console.log('Contact form submission:', {
      name,
      email,
      phone,
      service,
      message,
      timestamp: new Date().toISOString()
    });

    // Send email notification
    try {
      const transporter = createTransporter();
      
      // Email to admin
      const adminEmailHtml = `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #333;">New Contact Form Submission</h2>
          <div style="background-color: #f9f9f9; padding: 20px; border-radius: 5px;">
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            ${phone !== 'N/A' ? `<p><strong>Phone:</strong> ${phone}</p>` : ''}
            ${subject ? `<p><strong>Subject:</strong> ${subject}</p>` : ''}
            ${service !== 'general-inquiry' ? `<p><strong>Service:</strong> ${getServiceLabel(service)}</p>` : ''}
            <p><strong>Message:</strong></p>
            <p style="white-space: pre-wrap;">${message}</p>
          </div>
          <p style="margin-top: 20px; color: #666;">
            Submitted on: ${new Date().toLocaleString()}
          </p>
        </div>
      `;

      // Auto-reply to customer
      const customerEmailHtml = `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #333;">Thank You for Contacting Hadi Consultant</h2>
          <p>Dear ${name},</p>
          <p>Thank you for reaching out to us${service !== 'general-inquiry' ? ` regarding your ${getServiceLabel(service)} needs` : ''}. We have received your inquiry and will contact you within 24 hours.</p>
          <div style="background-color: #f9f9f9; padding: 20px; border-radius: 5px; margin: 20px 0;">
            <h3>Your Inquiry Details:</h3>
            ${subject ? `<p><strong>Subject:</strong> ${subject}</p>` : ''}
            ${service !== 'general-inquiry' ? `<p><strong>Service Requested:</strong> ${getServiceLabel(service)}</p>` : ''}
            <p><strong>Message:</strong></p>
            <p style="white-space: pre-wrap;">${message}</p>
          </div>
          <p>If you have any urgent questions, please don't hesitate to call us at your earliest convenience.</p>
          <p>Best regards,<br/>Hadi Consultant Team</p>
        </div>
      `;

      // Send to admin
      await transporter.sendMail({
        from: process.env.SMTP_USER || 'your-email@gmail.com',
        to: process.env.ADMIN_EMAIL || 'admin@hadiconsultant.com', // Replace with admin email
        subject: `New Contact Form Submission - ${getServiceLabel(service)}`,
        html: adminEmailHtml,
        replyTo: email
      });

      // Send auto-reply to customer
      await transporter.sendMail({
        from: process.env.SMTP_USER || 'your-email@gmail.com',
        to: email,
        subject: 'Thank You for Your Inquiry - Hadi Consultant',
        html: customerEmailHtml
      });

    } catch (emailError) {
      console.error('Email sending failed:', emailError);
      // Continue with success response even if email fails
      // You might want to handle this differently in production
    }

    return NextResponse.json(
      { 
        success: true, 
        message: 'Thanks for contacting us! We will be in touch with you shortly.' 
      },
      { status: 200 }
    );

  } catch (error) {
    console.error('Contact form error:', error);
    return NextResponse.json(
      { error: 'Failed to submit form. Please try again later.' },
      { status: 500 }
    );
  }
}
