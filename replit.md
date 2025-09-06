# AK Nexus FZ LLC - Technology Services Platform

## Overview

This is a modern, full-stack web application for AK Nexus FZ LLC, a technology services company specializing in Blockchain, Metaverse, SaaS development, and Project Management solutions. The platform serves as a corporate website with contact form functionality and showcases the company's services and portfolio.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

The application follows a modern full-stack architecture with clear separation between frontend and backend concerns:

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Routing**: Wouter (lightweight client-side routing)
- **UI Components**: Radix UI with shadcn/ui component library
- **Styling**: Tailwind CSS with custom CSS variables for theming
- **State Management**: TanStack Query (React Query) for server state
- **Forms**: React Hook Form with Zod validation
- **Animations**: Framer Motion for smooth transitions and animations
- **Build Tool**: Vite for fast development and optimized builds

### Backend Architecture
- **Runtime**: Node.js with Express.js
- **Language**: TypeScript with ES modules
- **Database ORM**: Drizzle ORM
- **Database**: PostgreSQL (configured for Neon Database)
- **Email Service**: SendGrid for contact form notifications
- **Session Storage**: PostgreSQL-based sessions with connect-pg-simple

## Key Components

### Frontend Structure
- **Pages**: Home, Service Detail, Policy Pages, 404 Not Found
- **Sections**: Hero, Services, Portfolio, Testimonials, About, Contact, CTA
- **Components**: Header with navigation, Footer, UI components, ScrollToTop
- **Data**: Static data for services, portfolio items, and testimonials

### Backend Structure
- **API Routes**: RESTful contact form submission endpoint
- **Storage Layer**: Abstracted storage interface with in-memory implementation
- **Email Utils**: SendGrid integration for contact notifications
- **Middleware**: Request logging, error handling, JSON parsing

### Database Schema
- **Users Table**: Basic user management (id, username, password)
- **Contact Submissions Table**: Form submissions (id, name, email, subject, service, message, createdAt)

## Data Flow

1. **Contact Form Submission**:
   - User fills out contact form on frontend
   - Form validation using Zod schema
   - React Hook Form handles form state and submission
   - API request sent to `/api/contact` endpoint
   - Backend validates data and stores in database
   - SendGrid sends email notification to company
   - Success/error feedback displayed to user

2. **Content Rendering**:
   - Static content loaded from data files
   - Service detail pages with dynamic routing based on slug
   - Smooth scrolling navigation between sections
   - Responsive design for all device sizes

## External Dependencies

### Core Dependencies
- **@neondatabase/serverless**: PostgreSQL database driver for Neon
- **@sendgrid/mail**: Email service integration
- **@tanstack/react-query**: Server state management
- **drizzle-orm**: Type-safe SQL ORM
- **react-hook-form**: Form handling and validation
- **framer-motion**: Animation library
- **wouter**: Lightweight routing

### UI/Styling Dependencies
- **@radix-ui/***: Accessible UI primitives
- **tailwindcss**: Utility-first CSS framework
- **class-variance-authority**: Component variant styling
- **lucide-react**: Icon library

### Development Dependencies
- **typescript**: Type safety
- **vite**: Build tool and dev server
- **tsx**: TypeScript execution for Node.js
- **esbuild**: Fast JavaScript bundler for production

## Deployment Strategy

### Build Process
- **Frontend**: Vite builds the React application to `dist/public`
- **Backend**: esbuild bundles the Express server to `dist/index.js`
- **Database**: Drizzle Kit manages schema migrations

### Environment Configuration
- **Development**: Uses tsx for hot reloading of server code
- **Production**: Node.js serves the bundled application
- **Database**: Requires `DATABASE_URL` environment variable
- **Email**: Requires `SENDGRID_API_KEY` environment variable

### File Structure
```
├── client/          # Frontend React application
├── server/          # Backend Express application
├── shared/          # Shared types and schemas
├── migrations/      # Database migration files
└── dist/           # Built application files
```

The application is designed to be deployed on platforms that support Node.js applications with PostgreSQL databases, with Replit-specific optimizations included for development.