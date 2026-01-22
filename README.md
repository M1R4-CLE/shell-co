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
