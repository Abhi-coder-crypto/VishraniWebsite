# Vishrani Computech Website

## Overview
A modern, futuristic website for Vishrani Computech - a software development company providing end-to-end software solutions since 2000. The website features a dark tech aesthetic with glassmorphism effects, smooth animations, and a fully functional contact form.

## Recent Changes
- **December 2024**: Initial build with all pages (Home, Products, Services, Know Us, Connect)
- Added contact form with database storage and email notification capability
- Implemented futuristic dark theme with glassmorphism UI

## Project Structure
```
├── client/              # React frontend
│   ├── src/
│   │   ├── components/  # UI components
│   │   │   ├── layout/  # Navbar, Footer, Layout
│   │   │   └── ui/      # Shadcn UI components
│   │   └── pages/       # Route pages
│   └── index.html
├── server/              # Express backend
│   ├── email.ts         # Email notification service
│   ├── routes.ts        # API routes
│   └── storage.ts       # Database operations
├── shared/
│   └── schema.ts        # Drizzle ORM schema
└── attached_assets/     # Generated images
```

## Pages
1. **Home** - Hero section with company intro and stats
2. **Products** - Custom software solutions portfolio
3. **Services** - Consultancy and development services
4. **Know Us** - Company history and team info
5. **Connect** - Contact form with email functionality

## Email Configuration
The contact form stores messages in the database. To enable email notifications:

1. Add these environment variables:
   - `SMTP_USER` - Gmail address for sending emails
   - `SMTP_PASS` - Gmail App Password (not regular password)

2. Current recipient: abhijeet18012001@gmail.com
   - Can be changed in `server/email.ts`

3. To create Gmail App Password:
   - Go to Google Account → Security → 2-Step Verification
   - Scroll to "App passwords" and generate one

## Tech Stack
- **Frontend**: React, TypeScript, Tailwind CSS, Framer Motion, Wouter
- **Backend**: Express.js, Node.js
- **Database**: PostgreSQL with Drizzle ORM
- **Email**: Nodemailer with Gmail SMTP

## Design System
- **Theme**: Dark Future Tech
- **Primary Color**: Purple (#7c3aed)
- **Accent Color**: Cyan (#06b6d4)
- **Font**: Outfit (headings), Inter (body)
