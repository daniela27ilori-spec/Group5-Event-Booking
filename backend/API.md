# API Documentation

## Base URL
Local: `http://localhost:3000/api/v1`
Production: `https://your-app.onrender.com/api/v1`

## Authentication
Most endpoints require a Bearer token:
`Authorization: Bearer <your-token>`

## Endpoints

### Health Check
- `GET /health` - Check if API is running

### Auth
- `POST /auth/register` - Create account
  Body: `{ "email": "user@test.com", "password": "123456", "firstName": "John", "lastName": "Doe" }`
  
- `POST /auth/login` - Get token
  Body: `{ "email": "user@test.com", "password": "123456" }`
  Response: `{ "access_token": "...", "user": {...} }`

### Users (requires auth)
- `GET /users/me` - Get logged-in user profile

### Events
- `GET /events` - List all events
- `GET /events/:id` - Get single event
- `POST /events` - Create event (auth required)
  Body: `{ "title": "Event Name", "description": "...", "date": "2026-06-15T10:00:00Z", "location": "City", "capacity": 100, "price": 50 }`
- `PATCH /events/:id` - Update event (owner only)
- `DELETE /events/:id` - Delete event (owner only)

### Bookings (requires auth)
- `POST /bookings` - Book an event
  Body: `{ "eventId": "event-id", "quantity": 2 }`
- `GET /bookings` - Get my bookings
- `GET /bookings/:id` - Get single booking
- `PATCH /bookings/:id/confirm` - Confirm booking (mock payment)
  Body: `{ "paymentConfirmed": true }`