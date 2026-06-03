# Wanderlust - The Ultimate Travel Destination for Travellers 

[Live site](https://wonderlust-client-two.vercel.app)

Wanderlust is a travel destination booking dashboard built with the Next.js App Router, Node.js, Express.js and Mongodb. It offers authenticated user flows, destination management, booking tracking, and a responsive UI powered by Tailwind CSS and DaisyUI.

## Project Overview

This repository contains a full-stack Next.js application that connects to a backend API and uses Better Auth for user authentication.

Core capabilities:
- Email/password and social login via Better Auth
- Destination listing with dedicated detail pages
- Add, edit, and delete destination management
- Booking creation and personal booking overview
- Protected routes for profile, bookings, and destination management
- MongoDB persistence for authentication and session data

## Technologies

- Next.js 16.2.6 (App Router)
- React 19.2.4
- Tailwind CSS 4
- DaisyUI
- Better Auth (`better-auth`, `@better-auth/mongo-adapter`)
- MongoDB (`mongodb`)
- HeroUI (`@heroui/react`, `@heroui/styles`)
- Iconify (`@iconify/react`)
- Gravity UI Icons (`@gravity-ui/icons`)

## Key Features

- Authentication with email/password and Google provider
- Backend auth route under `src/app/api/auth/[...all]/route.js`
- Server-side authorization using JWT tokens
- Destination card listings and detailed destination views
- Booking creation, cancellation, and personal bookings page
- Add destination form with protected access
- Dynamic routes for destination details and editing
- Custom navigation, hero section, footer, and reusable UI components

## Getting Started

### Install dependencies

```bash
npm install
```

### Run in development

```bash
npm run dev
```

Open `http://localhost:3000` in your browser.

### Build for production

```bash
npm run build
```

### Start production server

```bash
npm start
```

### Run static analysis

```bash
npm run lint
```

## Environment Variables

Create a `.env.local` file with the following values:

```env
MONGO_URI=your_mongodb_connection_string
GOOGLE_CLIENT_ID=your_google_client_id
GOOGLE_CLIENT_SECRET=your_google_client_secret
BETTER_AUTH_URL=http://localhost:3000/api/auth
NEXT_PUBLIC_SERVER_URL=http://localhost:5000
```

> Adjust `NEXT_PUBLIC_SERVER_URL` to match the backend API URL used by destination and booking endpoints.

## Recommended Project Structure

- `src/app/` - main Next.js application routes and layouts
- `src/components/` - reusable UI and feature components
- `src/lib/auth.js` - backend Better Auth configuration
- `src/lib/auth-client.js` - frontend auth client setup
- `src/proxy.js` - server-side proxy for protected page routes
- `src/public/assets/destinations/` - destination images and static assets

## Notes

- This project uses remote image loading via `next.config.mjs`.
- Auth state is managed through Better Auth and JWT session cookies.
- The app relies on external API endpoints for destinations and bookings, so ensure `NEXT_PUBLIC_SERVER_URL` points to a valid backend.

## License

This project is private and currently does not include an open-source license.
