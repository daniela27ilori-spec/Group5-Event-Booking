# Event Booking Backend

## Setup
# 1. Install dependencies
npm install

# 2. Create .env file in the backend folder and copy the template from the env.example


# 4. Create the database and all tables
npx prisma db push

# 5. Generate Prisma client (TypeScript types for database)
npx prisma generate

# 6. Start the server
npm run start:dev

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
- NestJS, Prisma, JWT, Sqlite