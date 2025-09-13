# Haven Homestay - Luxury Boutique Website

A modern, animated website for Haven Homestay - a luxury boutique accommodation featuring premium experiences, elegant design, and immersive storytelling.

![Haven Homestay](./public/images/hero-preview.jpg)

## 🌟 Features

### ✨ Premium Design & Animations
- **Luxury Color Palette**: Deep navy (#082033), soft teal (#00b3a6), warm gold (#ffd166), clean off-white (#fbfbfb)
- **Glass Morphism Effects**: Frosted backdrop blur with subtle rounded corners
- **Spring Animations**: Powered by Framer Motion for smooth, premium feel
- **Parallax Scrolling**: Immersive scroll experiences with particle backgrounds
- **Micro-interactions**: Hover effects, button animations, and form interactions

### 🏠 Core Pages
- **Home**: Hero with animated particles, featured rooms, about section, stats, testimonials
- **Rooms**: Filterable room grid with booking functionality and detailed views
- **Gallery**: Photo gallery with categories and lightbox modal
- **About**: Company story, team profiles, values, and achievements
- **Contact**: Booking form with EmailJS integration and contact information

### 🎯 Technical Excellence
- **Next.js 15**: App Router with TypeScript for type safety
- **TailwindCSS v4**: Utility-first styling with custom design tokens
- **Framer Motion**: Advanced animations and page transitions
- **EmailJS**: Contact form integration (no backend required)
- **Responsive Design**: Mobile-first approach with touch-friendly interactions
- **Accessibility**: WCAG AA compliance with keyboard navigation and screen reader support

### 🚀 Performance & SEO
- **Core Web Vitals Optimized**: Fast loading and minimal layout shift
- **SEO-Friendly**: Comprehensive meta tags and Open Graph data
- **Image Optimization**: Lazy loading with blur-up placeholders
- **Code Splitting**: Efficient bundle sizes and tree shaking

## 🛠️ Technology Stack

### Frontend Framework
- **Next.js 15** - React framework with App Router
- **TypeScript** - Type-safe development
- **React 19** - Latest React features

### Styling & Design
- **TailwindCSS v4** - Utility-first CSS framework
- **Custom Design Tokens** - Consistent spacing, colors, and typography
- **Google Fonts** - Playfair Display (headings) + Inter (body)

### Animations & Interactions
- **Framer Motion** - Advanced animations and gestures
- **React Intersection Observer** - Scroll-triggered animations
- **Custom Hooks** - Parallax, count-up, and scroll animations

### Forms & Communication
- **EmailJS** - Contact form without backend
- **React DatePicker** - Date selection for bookings
- **Form Validation** - Client-side validation with error handling

### Development Tools
- **ESLint** - Code linting and quality
- **TypeScript** - Static type checking
- **Git** - Version control

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ 
- npm or yarn
- Git

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd homestay-luxury
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Set up environment variables**
   ```bash
   cp env.example .env.local
   ```
   
   Edit `.env.local` and add your EmailJS credentials:
   ```env
   NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_service_id
   NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_template_id
   NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_public_key
   ```

4. **Run the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

5. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📧 EmailJS Setup

To enable the contact form, you'll need to set up EmailJS:

1. **Create an EmailJS account** at [emailjs.com](https://www.emailjs.com/)

2. **Create a service** (Gmail, Outlook, etc.)

3. **Create an email template** with these variables:
   - `{{from_name}}` - Sender's name
   - `{{from_email}}` - Sender's email
   - `{{phone}}` - Phone number
   - `{{check_in}}` - Check-in date
   - `{{check_out}}` - Check-out date
   - `{{guests}}` - Number of guests
   - `{{room_type}}` - Preferred room type
   - `{{message}}` - Message content
   - `{{to_email}}` - Your homestay email

4. **Get your credentials**:
   - Service ID from your service settings
   - Template ID from your template settings
   - Public Key from Account > API Keys

5. **Update environment variables** in `.env.local`

6. **Uncomment the EmailJS code** in `src/app/contact/page.tsx`

## 🎨 Design System

### Color Palette
```css
/* Primary Colors */
--navy: #082033      /* Primary text, dark backgrounds */
--teal: #00b3a6      /* Secondary color, CTAs */
--gold: #ffd166      /* Accent color, highlights */
--off-white: #fbfbfb /* Background, light areas */

/* Variants */
--dark-navy: #041a29
--light-teal: #33c5ba
--warm-gold: #ffdc7a
--pure-white: #ffffff
```

### Typography
- **Display Font**: Playfair Display (elegant serif for headings)
- **Body Font**: Inter (clean sans-serif for UI and content)
- **Font Scale**: Responsive sizing with luxury spacing

### Spacing Scale
```css
--spacing-xs: 0.5rem   /* 8px */
--spacing-sm: 0.75rem  /* 12px */
--spacing-md: 1rem     /* 16px */
--spacing-lg: 1.5rem   /* 24px */
--spacing-xl: 2rem     /* 32px */
--spacing-2xl: 3rem    /* 48px */
--spacing-3xl: 4rem    /* 64px */
--spacing-4xl: 6rem    /* 96px */
--spacing-5xl: 8rem    /* 128px */
```

## 📱 Responsive Design

- **Mobile First**: Designed for mobile devices first
- **Breakpoints**: 
  - `sm`: 640px
  - `md`: 768px  
  - `lg`: 1024px
  - `xl`: 1280px
  - `2xl`: 1536px

## ♿ Accessibility Features

- **WCAG AA Compliance**: Meets accessibility standards
- **Keyboard Navigation**: Full site navigable via keyboard
- **Screen Reader Support**: Proper ARIA labels and semantic HTML
- **Focus Management**: Visible focus indicators
- **Reduced Motion**: Respects `prefers-reduced-motion` setting
- **Color Contrast**: All text meets contrast requirements

## 🚀 Deployment

### Vercel (Recommended)

1. **Connect to Vercel**
   - Push your code to GitHub/GitLab/Bitbucket
   - Import project in [Vercel](https://vercel.com)

2. **Set environment variables** in Vercel dashboard:
   ```env
   NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_service_id
   NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_template_id
   NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_public_key
   ```

3. **Deploy**
   - Vercel will automatically build and deploy
   - Your site will be available at `https://your-project.vercel.app`

### Manual Deployment

1. **Build the project**
   ```bash
   npm run build
   ```

2. **Start production server**
   ```bash
   npm start
   ```

## 📁 Project Structure

```
homestay-luxury/
├── src/
│   ├── app/                 # App Router pages
│   │   ├── about/          # About page
│   │   ├── contact/        # Contact page
│   │   ├── gallery/        # Gallery page
│   │   ├── rooms/          # Rooms page
│   │   ├── globals.css     # Global styles
│   │   ├── layout.tsx      # Root layout
│   │   └── page.tsx        # Home page
│   ├── components/         # Reusable components
│   │   ├── ui/            # UI components (Button, Card, etc.)
│   │   └── sections/      # Page sections (Hero, Navigation, etc.)
│   ├── hooks/             # Custom React hooks
│   ├── lib/               # Utility functions
│   └── types/             # TypeScript type definitions
├── public/                # Static assets
│   ├── images/           # Image assets
│   └── ...
├── env.example           # Environment variables template
├── tailwind.config.ts    # Tailwind configuration
├── next.config.ts        # Next.js configuration
└── package.json          # Dependencies
```

## 🔧 Customization

### Adding New Rooms
1. Update the `rooms` array in `src/app/rooms/page.tsx`
2. Add room images to `public/images/`
3. Update filtering categories if needed

### Modifying Colors
1. Edit CSS variables in `src/app/globals.css`
2. Update the `@theme inline` section for Tailwind integration

### Adding New Pages
1. Create a new directory in `src/app/`
2. Add a `page.tsx` file with your page component
3. Update navigation in `src/components/sections/Navigation.tsx`

### Customizing Animations
1. Modify animation variants in `src/lib/animations.ts`
2. Adjust timing and easing for your brand feel
3. Update the `prefers-reduced-motion` handling as needed

## 📈 Performance Tips

1. **Image Optimization**
   - Use Next.js Image component
   - Implement proper alt text
   - Use WebP format when possible

2. **Code Splitting**
   - Dynamic imports for heavy components
   - Lazy load animations libraries
   - Route-based code splitting (automatic with App Router)

3. **SEO Optimization**
   - Update metadata in each page
   - Use structured data
   - Optimize Core Web Vitals

## 🐛 Troubleshooting

### Common Issues

**Animations not working**
- Check if `prefers-reduced-motion` is disabled
- Verify Framer Motion is properly installed
- Ensure components are wrapped in motion elements

**Form not submitting**
- Verify EmailJS credentials in environment variables
- Check browser console for errors
- Ensure EmailJS service and template are active

**Styling issues**
- Clear browser cache
- Check Tailwind classes are being generated
- Verify custom CSS variables are defined

**Build errors**
- Check TypeScript errors with `npm run type-check`
- Ensure all dependencies are installed
- Verify environment variables are set

## 📝 License

This project is proprietary software. All rights reserved.

## 🤝 Contributing

This is a custom project for Haven Homestay. For modifications or enhancements, please contact the development team.

## 📞 Support

For technical support or questions about customization:
- Email: dev@havenhomestay.com
- Documentation: [Project Wiki]
- Issues: [GitHub Issues]

---

**Built with ❤️ using Next.js, TailwindCSS, and Framer Motion**