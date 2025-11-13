# Selucia Wellness Center Website

A modern, responsive website built with Next.js, React, and Tailwind CSS for Selucia Wellness Center - a premium e-consulting service for fitness, nutrition, and holistic well-being.

## Features

- **Modern Design**: Clean, professional design with smooth animations and transitions
- **Fully Responsive**: Optimized for all devices (mobile, tablet, desktop)
- **Fast Performance**: Built with Next.js for optimal performance and SEO
- **Interactive Navigation**: Smooth scrolling navigation with mobile menu
- **Comprehensive Sections**:
  - Hero section with compelling tagline
  - About Us with vision and mission
  - Our Expertise showcase
  - How E-Consulting Works process
  - Why Choose Us benefits
  - Call to Action for booking
  - Professional footer

## Getting Started

### Prerequisites

- Node.js 18.x or higher
- npm or yarn

### Installation

1. Navigate to the project directory:
```bash
cd selucia-wellness
```

2. Install dependencies (already done):
```bash
npm install
```

### Running the Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the website.

### Building for Production

```bash
npm run build
npm start
```

## Project Structure

```
selucia-wellness/
├── app/
│   ├── layout.tsx          # Root layout with metadata
│   ├── page.tsx             # Main page with all sections
│   └── globals.css          # Global styles
├── public/
│   └── images/              # Image assets
├── tailwind.config.ts       # Tailwind CSS configuration
├── tsconfig.json            # TypeScript configuration
└── package.json             # Dependencies and scripts
```

## Technologies Used

- **Next.js 14**: React framework for production
- **React 18**: UI library
- **TypeScript**: Type-safe JavaScript
- **Tailwind CSS**: Utility-first CSS framework
- **Lucide React**: Beautiful icon library

## Customization

### Colors

The primary color palette can be customized in `tailwind.config.ts`:

```typescript
colors: {
  primary: {
    // Customize these values
    500: '#22c55e',
    600: '#16a34a',
    // ...
  },
}
```

### Images

Replace images in the `public/images/` directory:
- `photo.jpg` - Hero section
- `photo2.jpg` - About section
- `photo3.jpg` - Why Choose Us section

### Content

All content can be edited in `app/page.tsx`.

## Contact Information

Update the contact information in the footer section of `app/page.tsx`.

## License

Copyright © 2024 Selucia Wellness Center. All rights reserved.
