# Email Setup Instructions for Contact Form

## Overview
The contact form now includes full functionality with email notifications. Here's how to configure it:

## Environment Variables
Create a `.env.local` file in your project root with the following variables:

```env
# Email Configuration
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=consultantshadi1@gmail.com
SMTP_PASS=your-app-password
ADMIN_EMAIL=admin@hadiconsultant.com
```

## Gmail Setup (Recommended)
1. Enable 2-factor authentication on your Gmail account
2. Go to Google Account settings > Security
3. Enable "App passwords"
4. Generate a new app password for your application
5. Use the app password as `SMTP_PASS`

## Alternative Email Services
You can also use other email services by updating the SMTP configuration:

### Outlook/Hotmail
```env
SMTP_HOST=smtp-mail.outlook.com
SMTP_PORT=587
```

### SendGrid (Recommended for production)
```env
SMTP_HOST=smtp.sendgrid.net
SMTP_PORT=587
SMTP_USER=apikey
SMTP_PASS=your-sendgrid-api-key
```

## Testing
1. Start your development server: `npm run dev`
2. Fill out the contact form on your website
3. Check both:
   - Admin email for the notification
   - Customer email for the auto-reply

## Features Included
- Form validation with real-time error messages
- Email notification to admin
- Auto-reply to customer
- Professional HTML email templates
- Error handling and user feedback
- Form submission status messages

## Security Notes
- Never commit `.env.local` to version control
- Use app passwords instead of regular passwords
- Consider using a dedicated email service like SendGrid for production
- The form includes basic spam protection through validation

## Troubleshooting
If emails aren't sending:
1. Check your SMTP credentials
2. Verify firewall/network settings
3. Check the console for error messages
4. Ensure your email provider allows SMTP access
