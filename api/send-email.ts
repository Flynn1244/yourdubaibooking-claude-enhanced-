// Vercel serverless function to send emails to contact@yourdubaibooking.com
// This uses Resend API (recommended) or Web3Forms as fallback

export default async function handler(req: any, res: any) {
  // Only allow POST requests
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { name, phone, message } = req.body;

    // Validate required fields
    if (!name || !phone || !message) {
      return res.status(400).json({ error: 'Missing required fields' });
    }

    const recipientEmail = 'contact@yourdubaibooking.com';

    // Format the email content
    const emailSubject = `New Enquiry from ${name} - Your Dubai Booking`;
    const emailBody = `New enquiry received from Your Dubai Booking website:

Name: ${name}
WhatsApp Number: ${phone}

Message:
${message}

---
This email was sent from the contact form on yourdubaibooking.com`;

    // Try Resend API first (recommended for Vercel)
    if (process.env.RESEND_API_KEY) {
      const response = await fetch('https://api.resend.com/emails', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${process.env.RESEND_API_KEY}`,
        },
        body: JSON.stringify({
          from: 'Your Dubai Booking <noreply@yourdubaibooking.com>',
          to: [recipientEmail],
          subject: emailSubject,
          text: emailBody,
          reply_to: phone,
        }),
      });

      if (!response.ok) {
        const error = await response.json().catch(() => ({ message: 'Failed to send email' }));
        throw new Error(error.message || 'Failed to send email');
      }

      return res.status(200).json({ success: true, message: 'Email sent successfully' });
    }

    // Fallback: Use Web3Forms (free service, get key from web3forms.com)
    if (process.env.WEB3FORMS_ACCESS_KEY) {
      const web3formsResponse = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          access_key: process.env.WEB3FORMS_ACCESS_KEY,
          subject: emailSubject,
          from_name: name,
          email: recipientEmail,
          phone: phone,
          message: emailBody,
        }),
      });

      if (!web3formsResponse.ok) {
        throw new Error('Failed to send email via Web3Forms');
      }

      return res.status(200).json({ success: true, message: 'Email sent successfully' });
    }

    // If no email service configured, return success but log that mailto should be used
    // This allows the form to work while email service is being set up
    console.log('Email service not configured. Form data:', { name, phone, message });
    console.log('Please configure RESEND_API_KEY or WEB3FORMS_ACCESS_KEY in environment variables');
    
    // Return success so form doesn't show error
    // The client-side will handle mailto fallback
    return res.status(200).json({ 
      success: true, 
      message: 'Form submitted (email service not configured - using mailto fallback)',
      note: 'Configure RESEND_API_KEY or WEB3FORMS_ACCESS_KEY for direct email delivery'
    });

  } catch (error) {
    console.error('Error sending email:', error);
    return res.status(500).json({ 
      error: 'Failed to send email',
      message: error instanceof Error ? error.message : 'Unknown error'
    });
  }
}
