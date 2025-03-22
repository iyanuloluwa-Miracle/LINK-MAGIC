<div align="center">
  <img src="/src/assets/link_1017466.png" alt="Link Magic Logo" width="200"/>
  
  # Link Magic ✨
  
  A modern, lightning-fast URL shortening service built with Vue 3 and TailwindCSS.
  
  [![Vue.js](https://img.shields.io/badge/Vue.js-3.0-4FC08D?style=for-the-badge&logo=vue.js&logoColor=white)](https://vuejs.org/)
  [![TailwindCSS](https://img.shields.io/badge/TailwindCSS-3.0-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
  [![Pinia](https://img.shields.io/badge/Pinia-State_Management-yellow?style=for-the-badge&logo=vue.js&logoColor=white)](https://pinia.vuejs.org/)
  [![License](https://img.shields.io/badge/License-MIT-blue.svg?style=for-the-badge)](LICENSE)

  [View Demo](https://link-magic.vercel.app) · [Report Bug](https://github.com/iyanuloluwa-Miracle/LINK-MAGIC/issues) · [Request Feature](https://github.com/iyanuloluwa-Miracle/LINK-MAGIC/issues)
</div>

## ✨ Features

- 🚀 **Instant URL Shortening** - Transform long URLs into short, memorable links in milliseconds
- 📋 **One-Click Copy** - Copy shortened URLs to clipboard with a single click
- 📱 **Responsive Design** - Perfect experience across all devices
- 🛡️ **Input Validation** - Smart URL validation and error handling
- ⚡ **Real-Time Feedback** - Immediate visual feedback for all actions
- 🎯 **Smart Redirection** - Efficient handling of shortened URL redirects

## 🖥️ Demo & Screenshots

<div align="center">
  <img src="/public/images/screenshots/homepage.png" alt="Link Magic Homepage" width="100%"/>
</div>

## 🛠️ Tech Stack

- **Frontend Framework:** Vue.js 3
- **State Management:** Pinia
- **Styling:** TailwindCSS
- **HTTP Client:** Fetch API
- **Build Tool:** Vite
- **Deployment:** Vercel

## 🚀 Quick Start

1. **Clone the repository**
```bash
git clone https://github.com/iyanuloluwa-Miracle/LINK-MAGIC.git
cd LINK-MAGIC
```

2. **Install dependencies**
```bash
npm install
# or
yarn install
```

3. **Set up environment variables**
```bash
cp .env.example .env
```

4. **Start development server**
```bash
npm run dev
# or
yarn dev
```

5. **Build for production**
```bash
npm run build
# or
yarn build
```

## 🖥 Project Structure
```
link-magic/
├── src/
│   ├── components/
│   │   ├── Navbar/
│   │   ├── HeroSection/
│   │   ├── Features/
│   │   └── Footer/
│   ├── stores/
│   │   └── urlStore.js
│   ├── middleware.js
│   └── App.vue
├── public/
│   └── images/
└── package.json
```

## Key Features
1. URL Shortening
2. Copy to Clipboard
3. Responsive Design
4. Error Handling
5. Loading States
6. URL Redirection

## Components

### App.vue
Main application component that includes the layout and middleware integration.

### Navbar Component
Navigation component with branding and links.

### HeroSection Component
Main interface for URL shortening with:
- URL input field
- Shortening button
- Results display
- Copy functionality

### Features Component
Displays the key features and benefits of the service.

### Footer Component
Contains links and additional information.

## State Management
Using Pinia store (`urlStore.js`) for managing:
- Original URL
- Shortened URL
- Loading states
- Error handling
- Clipboard operations

## URL Shortening Flow
1. User enters URL
2. Frontend validates input
3. Request sent to backend
4. Response processed and displayed
5. Copy option provided

## Project Images

### Where to Add Project Images
1. Create an `images` folder in the `public` directory:
```bash
mkdir public/images
```

2. Recommended image structure:
```
public/images/
├── screenshots/
│   ├── homepage.png
│   ├── shortening-process.png
│   └── features.png
├── logos/
│   └── link-magic-logo.png
└── icons/
    └── various-icons.png
```

3. Accessing images in components:
```vue
<template>
  <img src="/images/screenshots/homepage.png" alt="Homepage Screenshot">
</template>
```

### Recommended Screenshots
1. **Homepage** - Full page view showing all components
2. **URL Shortening Process** - Before and after shortening
3. **Features Section** - Highlighting key features
4. **Mobile View** - Responsive design demonstration
5. **Error States** - How errors are displayed
6. **Success States** - Successful URL shortening result

### Image Guidelines
- Use PNG format for screenshots
- Recommended dimensions:
  - Desktop screenshots: 1920x1080
  - Mobile screenshots: 375x812
- Maximum file size: 500KB per image
- Use descriptive filenames (e.g., `homepage-dark-theme.png`)

## Environment Configuration
- Base URL: https://link-magic.vercel.app
- API Endpoint: https://link-magic-backend.onrender.com

## Development Setup
```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build
```

## Deployment
The frontend is deployed on Vercel:
1. Connect your GitHub repository
2. Configure build settings:
   - Build Command: `npm run build`
   - Output Directory: `dist`
   - Install Command: `npm install`

## Common Issues and Solutions
1. **404 on Shortened URLs**
   - Ensure middleware is properly configured
   - Check backend connectivity

2. **Copying Issues**
   - Verify clipboard API availability
   - Check HTTPS requirement

3. **Loading States**
   - Verify store state management
   - Check network timeouts

## Best Practices
1. Always validate URLs before submission
2. Implement proper error handling
3. Show loading states for better UX
4. Maintain responsive design
5. Keep console clean of errors

## Future Enhancements
1. Analytics dashboard
2. Custom short URLs
3. QR code generation
4. Link expiration
5. User authentication