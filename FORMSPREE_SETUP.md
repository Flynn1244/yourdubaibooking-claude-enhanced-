# Email Form Setup Instructions

The contact form sends emails directly to **contact@yourdubaibooking.com** using Web3Forms (free service, no backend required).

## Quick Setup (2 minutes) - RECOMMENDED

### Option 1: Web3Forms (Free, Works Immediately)

1. **Get your free access key**:
   - Go to [web3forms.com](https://web3forms.com)
   - Enter your email: `contact@yourdubaibooking.com`
   - Click "Get Your Access Key"
   - Copy the access key (looks like: `xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx`)

2. **Add to Vercel environment variables**:
   - Go to your Vercel project settings
   - Add environment variable: `VITE_WEB3FORMS_ACCESS_KEY`
   - Value: Your access key from step 1
   - Redeploy your site

3. **That's it!** The form will now send emails directly to contact@yourdubaibooking.com

### Option 2: Formspree (Alternative)

1. Sign up at [formspree.io](https://formspree.io)
2. Create a form with email: `contact@yourdubaibooking.com`
3. Copy your form endpoint
4. Add to Vercel: `VITE_FORMSPREE_ENDPOINT` = your endpoint

## Current Behavior

- **If Web3Forms key is configured**: Emails are sent automatically to contact@yourdubaibooking.com
- **If not configured**: Form opens user's email client (mailto:) as fallback

## Email Format

Emails sent to contact@yourdubaibooking.com will include:
- **Subject**: "New Enquiry from [Name] - Your Dubai Booking"
- **Content**: Name, WhatsApp number, and message

## Testing

After adding your Web3Forms access key, test the form to ensure emails arrive at contact@yourdubaibooking.com.
