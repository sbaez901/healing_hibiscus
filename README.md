# The Healing Hibiscus, PLLC Website

A modern, responsive website for The Healing Hibiscus, PLLC - Mental Health Therapy and Consulting Services.

## Features

- **Modern Design**: Clean, professional design with a calming color palette
- **Responsive**: Fully responsive design that works on all devices
- **Navigation**: Comprehensive navigation with dropdown menus (inspired by And Still We Rise)
- **Content Flow**: Simple, content-focused layout (inspired by Meetings with Feelings)
- **Service Pages**: Detailed pages for Therapy, Consulting, and Supervision
- **Contact Form**: Contact page with request form
- **Resources**: Helpful resources page with crisis and mental health links

## Tech Stack

- **Next.js 14** (App Router)
- **TypeScript**
- **Tailwind CSS**
- **React**

## Color Palette

- **Red**: Primary accent color (#C41E3A)
- **Black**: Text and headers (#000000)
- **Dark Charcoal Grey**: Secondary text (#2C2C2C)
- **Medium Dark Grey**: Borders and dividers (#4A4A4A)
- **Light Muted Pink/Peach**: Backgrounds and highlights (#F5D7C4)
- **Light Grey/Off-White**: Main backgrounds (#F5F5F0)

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone git@github.com:sbaez901/healing_hibiscus.git
cd healing_hibiscus
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Deployment to Vercel

### Option 1: Deploy via Vercel Dashboard

1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Import your GitHub repository
4. Vercel will automatically detect Next.js and configure the project
5. Click "Deploy"

### Option 2: Deploy via Vercel CLI

1. Install Vercel CLI:
```bash
npm i -g vercel
```

2. Deploy:
```bash
vercel
```

3. Follow the prompts to link your project

### Environment Variables

No environment variables are currently required. If you add any in the future, add them in the Vercel dashboard under Project Settings > Environment Variables.

## Project Structure

```
healing_hibiscus/
├── app/
│   ├── about/          # About page
│   ├── blog/           # Blog page
│   ├── consulting/     # Consulting services page
│   ├── contact/        # Contact page
│   ├── resources/      # Resources page
│   ├── supervision/    # Clinical supervision page
│   ├── therapy/        # Therapy services page
│   ├── globals.css     # Global styles and color variables
│   ├── layout.tsx        # Root layout with navigation and footer
│   └── page.tsx         # Homepage
├── components/
│   ├── Navigation.tsx  # Navigation component with dropdowns
│   └── Footer.tsx       # Footer component
├── public/
│   └── logo.png        # Logo file
├── vercel.json         # Vercel deployment configuration
└── package.json        # Dependencies and scripts
```

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## Logo

The logo is located at `/public/logo.png`. To adjust the logo colors to match the brand palette, you can:

1. Use image editing software to modify the PNG
2. Convert to SVG and modify colors directly
3. Use CSS filters (limited control)

## Customization

### Updating Colors

Edit the CSS variables in `app/globals.css`:

```css
:root {
  --color-red: #C41E3A;
  --color-black: #000000;
  /* ... other colors */
}
```

### Adding Content

- Pages are in the `app/` directory
- Components are in the `components/` directory
- Static assets go in the `public/` directory

## License

Private - All rights reserved by The Healing Hibiscus, PLLC

## Contact

For questions about the website, contact:
- Email: marienellylicsw@gmail.com
- Phone: (774) 293-2690
