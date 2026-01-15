# Your Dubai Booking

A luxury travel concierge platform for booking premium Dubai experiences including desert safaris, yacht rentals, restaurant reservations, and VIP nightlife access.

## Features

- 🏜️ **Desert Safari Experiences** - From budget-friendly to VIP private safaris
- 🛥️ **Yacht Rentals** - Premium yacht charters with crew and catering
- 🍽️ **Restaurant Reservations** - Access to Michelin-starred and exclusive dining venues
- 🌃 **VIP Nightlife** - Skip-the-line access to Dubai's premier clubs and lounges
- 🤖 **AI Concierge** - Interactive chat assistant powered by Google Gemini
- 📱 **Responsive Design** - Beautiful, modern UI optimized for all devices

## Tech Stack

- **React 19** - Modern UI library
- **TypeScript** - Type-safe development
- **Vite** - Fast build tool and dev server
- **Tailwind CSS** - Utility-first styling
- **Google Gemini AI** - AI-powered concierge chat
- **Lucide React** - Beautiful icon library

## Prerequisites

- Node.js (v18 or higher recommended)
- npm or yarn
- Google Gemini API key

## Installation

1. Clone the repository:
```bash
git clone https://github.com/Flynn1244/yourdubaibooking-claude-enhanced-.git
cd yourdubaibooking
```

2. Install dependencies:
```bash
npm install
```

3. Create a `.env.local` file in the root directory:
```env
GEMINI_API_KEY=your_gemini_api_key_here
```

4. Start the development server:
```bash
npm run dev
```

The app will be available at `http://localhost:3000`

## Building for Production

```bash
npm run build
```

The production build will be in the `dist` directory.

Preview the production build:
```bash
npm run preview
```

## Project Structure

```
yourdubaibooking/
├── components/          # React components
│   ├── ui/            # Reusable UI components
│   └── ...            # Feature components
├── context/           # React context providers
├── data/              # Static data and content
├── services/          # API services
├── types.ts           # TypeScript type definitions
├── App.tsx            # Main app component
└── index.tsx          # Entry point
```

## Environment Variables

- `GEMINI_API_KEY` - Your Google Gemini API key (required for AI chat feature)

## Features in Detail

### AI Concierge Chat
The platform includes an intelligent AI assistant "Q" that helps users with:
- Travel recommendations
- Restaurant suggestions
- Event access information
- General Dubai travel inquiries

### Service Packages
Each service offers multiple package tiers:
- **Budget Options** - Accessible experiences
- **VIP/Private Options** - Exclusive, personalized experiences

### Responsive Navigation
- Smooth scrolling navigation
- Mobile-friendly menu
- Service detail pages
- Privacy policy and terms pages

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is private and proprietary.

## Contact

For inquiries about Dubai booking services, use the contact form on the website.
