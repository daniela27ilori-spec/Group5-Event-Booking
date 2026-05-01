# Event Booking Backend

## Setup
1. Copy `.env.example` to `.env` and fill in your database URL, JWT secret, Paystack keys.
2. Run `npm install`
3. Run `npx prisma migrate dev --name init`
4. Run `npm run start:dev`

## API Endpoints
- `POST /api/v1/auth/register` â€“ Register user
- `POST /api/v1/auth/login` â€“ Login
- `GET /api/v1/events` â€“ List events
- `POST /api/v1/events` â€“ Create event (auth required)
- `POST /api/v1/bookings` â€“ Book an event (auth required)
- `POST /api/v1/payments/initialize` â€“ Initiate payment
- `GET /api/v1/health` â€“ Health check

## Environment Variables
See `.env.example` for required variables.

## Technologies
- NestJS, Prisma, PostgreSQL, JWT, Paystack