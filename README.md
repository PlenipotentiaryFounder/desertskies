# Desert Skies Aviation

Professional flight training school based in Arizona, offering comprehensive aviation education programs for both recreational and career pilots.

## Features

- Discovery Flight Booking
- Training Programs
  - General Aviation
  - Career Pilot Path
- Contact Management
- Blog System
- Testimonials
- Responsive Design

## Tech Stack

- Next.js 14
- TypeScript
- Tailwind CSS
- Supabase
- Resend Email Service
- Vercel Hosting

## Development

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build
```

## Environment Variables

Create a `.env.local` file with the following variables:

```env
# Supabase Configuration
NEXT_PUBLIC_SUPABASE_URL=your-supabase-url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-supabase-anon-key
SUPABASE_SERVICE_ROLE_KEY=your-supabase-service-key

# Resend Configuration
RESEND_API_KEY=your-resend-api-key

# Email Configuration
ADMIN_EMAIL=your-admin-email
SCHOOL_NAME="Desert Skies Aviation"
DOMAIN=your-domain
```

## License

Copyright © 2024 Desert Skies Aviation. All rights reserved. 