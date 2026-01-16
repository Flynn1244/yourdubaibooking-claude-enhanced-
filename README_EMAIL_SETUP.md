# Email Setup Instructions

The contact form is configured to send emails to **contact@yourdubaibooking.com**.

## Setup Options

### Option 1: Resend (Recommended for Vercel)

1. Sign up at [resend.com](https://resend.com)
2. Get your API key
3. Add to Vercel environment variables:
   - `RESEND_API_KEY` = your Resend API key
   - `CONTACT_EMAIL` = contact@yourdubaibooking.com (optional, defaults to this)

### Option 2: Web3Forms (Free)

1. Sign up at [web3forms.com](https://web3forms.com)
2. Get your access key
3. Add to Vercel environment variables:
   - `WEB3FORMS_ACCESS_KEY` = your Web3Forms access key

### Option 3: EmailJS (Client-side)

1. Sign up at [emailjs.com](https://www.emailjs.com)
2. Create a service and template
3. Add to Vercel environment variables:
   - `VITE_EMAILJS_SERVICE_ID` = your service ID
   - `VITE_EMAILJS_TEMPLATE_ID` = your template ID
   - `VITE_EMAILJS_PUBLIC_KEY` = your public key

## Email Template Setup (for EmailJS)

If using EmailJS, configure your template with these variables:
- `{{to_email}}` = contact@yourdubaibooking.com
- `{{from_name}}` = user's name
- `{{from_phone}}` = user's WhatsApp number
- `{{message}}` = user's message
- `{{reply_to}}` = user's phone number

## Fallback

If no email service is configured, the form will attempt to use the browser's mailto: link as a fallback.

## Testing

After setting up your email service, test the form to ensure emails are being sent to contact@yourdubaibooking.com.
