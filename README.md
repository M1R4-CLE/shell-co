This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.


# Shell Co. Poultry Farm Website

A modern, fully-responsive website for Shell Co. Poultry Farm built with Next.js 13+, featuring product showcase, interactive mapping, contact form with email integration, and comprehensive farm information.

![Shell Co. Logo](public/images/ShellCo-notext-bg.png)

## 📋 Table of Contents

- [Features](#-features)
- [Tech Stack](#-tech-stack)
- [Installation](#-installation)
- [Environment Setup](#-environment-setup)
- [Getting Started](#-getting-started)
- [Project Structure](#-project-structure)
- [Features Details](#-features-details)
- [API Integrations](#-api-integrations)
- [Customization](#-customization)
- [Deployment](#-deployment)
- [Troubleshooting](#-troubleshooting)
- [Contact](#-contact)
- [License](#-license)

## 🌟 Features

### Core Features
- ✅ **Responsive Design** - Mobile, tablet, and desktop optimized
- ✅ **Hero Section** - Eye-catching landing page with CTA buttons
- ✅ **About Us** - Farm information with interactive hover animations
- ✅ **Services** - 5 service offerings with animated cards
- ✅ **Products Showcase** - 4 product categories with carousel modal
- ✅ **Contact Form** - Email integration with Resend API
- ✅ **Interactive Map** - Leaflet.js with routing and directions
- ✅ **Social Media Integration** - Facebook, Viber, Telegram, Email, Phone
- ✅ **Footer** - Professional footer with copyright info

### Advanced Features
- 🗺️ **Geoapify Routing API** - Best route calculation from user location to farm
- 📍 **Geolocation** - Automatic user location detection
- 📧 **Email Notifications** - Contact form submissions to monecorporation1@gmail.com
- 🎨 **Smooth Animations** - Hover effects, transitions, and modal animations
- 📱 **Mobile Optimized** - Touch-friendly interface for all screen sizes
- ⚡ **Performance Optimized** - Fast loading with optimized images
- 🔄 **Product Carousel** - Image gallery with navigation buttons

## 🛠️ Tech Stack

### Frontend
- **Next.js 13+** - React framework with built-in optimization
- **React 18+** - UI library
- **CSS Modules** - Scoped styling
- **Leaflet.js** - Interactive mapping library

### Backend
- **Next.js API Routes** - Serverless functions
- **Resend** - Email service

### APIs & Services
- **Geoapify** - Routing and directions API
- **Google Maps** - Directions integration
- **Browser Geolocation API** - User location
- **OpenStreetMap** - Map tiles

### Fonts
- **Archivo Black** - Headings
- **Crimson Text** - Body text

## 📦 Installation

### Prerequisites
- Node.js 16.x or higher
- npm 7.x or higher (or yarn)
- Git

### Step 1: Clone the Repository

```bash
git clone https://github.com/yourusername/shell-co.git
cd shell-co

Step 2: Install Dependencies
npm install

Step 3: Install Resend (Email Service)
npm install resend

Step 4: Create Environment Variables
Create a .env.local file in the root directory:
touch .env.local

🔐 Environment Setup
Required Environment Variables
Create .env.local with the following:

# Email Service (Resend)
RESEND_API_KEY=your_resend_api_key_here

# Mapping Service (Geoapify)
NEXT_PUBLIC_GEOAPIFY_API_KEY=22ac35a9ac97450ca9b5a8ee3eba0d37

Getting Resend API Key
Visit resend.com
Sign up for a free account
Go to API Keys section
Create a new API key
Copy and paste into .env.local
Getting Geoapify API Key
Visit geoapify.com
Sign up for free
Go to Dashboard → API Keys
Copy your API key (already provided: 22ac35a9ac97450ca9b5a8ee3eba0d37)
Add to .env.local

🚀 Getting Started
Development Mode
Start the development server:
npm run dev

🎨 Features Details
1. Navigation & Header
Sticky header with logo and brand name
Responsive navigation menu
Smooth scroll behavior
Active link highlighting
2. Hero Section
Full-screen background image
Large, impactful headline
Subtitle with description
Call-to-action buttons
Hover effects on buttons
3. About Us Section
Circular product image with hover animation
Rotate/tilt effect on hover (±8 degrees)
Responsive image sizing
Large typography for impact
4. Services Section
Grid layout (2 columns on desktop, 1 on mobile)
5 service cards:
Poultry Farming & Production
Wholesale & Retail Distribution
Custom Orders & Bulk Supply
Quality Control & Processing
Farm-to-Market Delivery
Hover scale animation (1.1x zoom)
Smooth transitions
5. Products Section
4 product categories displayed as cards
Click to open detailed modal
Products:
Fresh Chicken Eggs
Whole Chicken
Chicken Meat (Pieces)
Poultry Feed & Supplies
6. Product Modal
Click outside to close
Image carousel with prev/next buttons
Product title and description
Call-to-action button for feed products
Smooth animations
7. Contact Us Section
Two-column layout
Contact information with icons:
Facebook: ShellCo.
Phone: 09948086975
Viber: 9422 3649
Telegram: @TheShellCo
Email: m1corporation@gmail.com
Contact form with 4 fields:
Your Name
Your Email
Your Phone Number
Your Message
Email integration via Resend API
Form validation and error handling
8. Map Section
Interactive Leaflet.js map
Automatic user location detection (with permission)
Route from user to farm
Red pin marker for farm location
Blue circle marker for user location
Click marker to open Google Maps directions
Responsive map sizing
9. Footer
Yellow background (#ffe177)
Copyright information
Professional styling
Fully responsive

🔌 API Integrations
Resend Email API
Endpoint: /api/send-email

Request Body:

{
  "name": "John Doe",
  "email": "john@example.com",
  "phone": "09123456789",
  "message": "I'm interested in your products"
}

Response:
{
  "success": true,
  "message": "Email sent successfully!"
}

Email Received At: monecorporation1@gmail.com

Geoapify Routing API
Purpose: Calculate driving route from user location to farm

Endpoint: https://api.geoapify.com/v1/routing

Parameters:

waypoints: User location | Farm location
mode: drive
apiKey: Your Geoapify API key
Farm Coordinates:

Latitude: 7.162054928946735
Longitude: 125.45192125391031
Location: Mindanao, Philippines

Google Maps Directions
Purpose: Open directions in Google Maps when clicking marker

URL Format:
https://www.google.com/maps/dir/?api=1&destination=7.162054928946735,125.45192125391031
Browser Geolocation API
Purpose: Get user's current location

Permission: Requires user consent

Fallback: If permission denied, map shows only farm location

🎨 Customization
Colors
Update in page.module.css:

/* Primary Colors */
--primary-yellow: #ffe177;
--primary-brown: #b4a078;
--dark-text: #0b0b0b;
--light-text: rgba(255, 255, 255, 0.9);

Contact Information
Edit in page.js contact section:

<div className={styles.contactItem}>
  <img src="/images/Social-Media_Icons/[icon].png" alt="[Name]" />
  <span>[Your Contact Info]</span>
</div>

Farm Location
Update coordinates in page.js initMap function:
const farmLocation = [7.162054928946735, 125.45192125391031];

Email Recipient
Change in app/api/send-email/route.js:

to: 'your-email@gmail.com', // Change this

Products
Edit productDetails object in page.js:

const productDetails = {
  eggs: {
    title: 'Product Name',
    description: 'Product description...',
    images: ['/images/path/to/image.png']
  },
  // ... more products
};

📱 Responsive Breakpoints
/* Mobile: 520px and below */
@media (max-width: 520px) { }

/* Tablet: 768px - 900px */
@media (max-width: 768px) { }

/* Desktop: 1200px and above */
@media (max-width: 1200px) { }

🚢 Deployment
Deploy on Vercel (Recommended)
Push to GitHub

git add .
git commit -m "Initial commit"
git push origin main

Connect to Vercel

Go to vercel.com
Click "New Project"
Import your GitHub repository
Add Environment Variables

In Vercel dashboard: Settings → Environment Variables
Add:
RESEND_API_KEY
NEXT_PUBLIC_GEOAPIFY_API_KEY
Deploy

Click "Deploy"
Wait for deployment to complete
Get your live URL
Add Custom Domain
In Vercel: Settings → Domains
Add your custom domain
Update DNS records as shown
Wait for SSL certificate (usually 5-10 minutes)
Deploy on Other Platforms
Netlify: Use next export then deploy static site
AWS: Use Amplify or EC2 with Node.js
DigitalOcean: App Platform or Droplet with Node.js
Heroku: Use buildpack for Next.js

🐛 Troubleshooting
Issue: Email Not Sending
Solution:

Verify RESEND_API_KEY in .env.local
Check Resend dashboard for API key
Ensure form data is complete
Check browser console for errors (F12)
Issue: Map Not Displaying
Solution:

Verify NEXT_PUBLIC_GEOAPIFY_API_KEY is set
Allow location permission in browser
Check browser console for errors
Clear browser cache and reload
Issue: Form Validation Errors
Solution:

Ensure all form fields are filled
Check email format is valid
Verify form handler function exists
Check browser console for errors
Issue: Images Not Loading
Solution:

Verify image paths in images
Use forward slashes: /images/...
Check image file names match exactly
Restart development server
Issue: Styling Not Applied
Solution:

Clear browser cache (Ctrl+Shift+Delete)
Restart development server (npm run dev)
Check CSS class names match in HTML
Verify .module.css file syntax
Issue: "Module not found" Error
Solution:

Run npm install to install dependencies
Delete node_modules and reinstall:

rm -rf node_modules package-lock.json
npm install

Restart development server

📞 Contact & Support
Farm Contact Information:

Email: monecorporation1@gmail.com
Facebook: ShellCo.
Viber: 9422 3649
Phone: 09948086975
Telegram: @TheShellCo
Farm Location:

Coordinates: 7.162054928946735, 125.45192125391031
Region: Mindanao, Philippines
📄 License
This project is proprietary software owned by Shell Co. Poultry Farm. All rights reserved.

Unauthorized copying, modification, or distribution is prohibited.

👨‍💻 Author
Created by: Masapa Daryll Dave R.

Course Information:

Course Code: IT103L.A223.2T.25.26
Course Name: Web Programming (Lab)
Assignment: M1 Summative Part 3
Institution: Web Programming Course
Date: January 22, 2026
📊 Project Statistics
Total Features: 15+
API Integrations: 4
Responsive Breakpoints: 3
Product Categories: 4
Services: 5
Animations: 10+
Lines of Code: 1000+
🔄 Version History
v1.0.0 (January 22, 2026)
Initial release
Core features implemented
Map integration
Email functionality
Responsive design
🎯 Future Enhancements
 Admin dashboard for product management
 Customer testimonials section
 Blog/news section
 Online ordering system
 Payment integration (Stripe/PayPal)
 Multi-language support (Tagalog, English)
 Live chat support
 Analytics dashboard
 SMS notifications
 WhatsApp integration
🙏 Acknowledgments
Next.js team for the amazing framework
Leaflet.js for mapping
Geoapify for routing API
Resend for email service
OpenStreetMap contributors
Last Updated: January 22, 2026

Repository: https://github.com/yourusername/shell-co

Live Demo: https://shell-co.vercel.app

Made with ❤️ for Shell Co. Poultry Farm

