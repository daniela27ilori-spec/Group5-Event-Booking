# Event Booking System

## Overview
The Event Booking System is a full-stack web application that allows users to browse events, book tickets, and manage reservations online.
This project was developed as part of the CSC 202 – Computer Programming II group project.

---

## Features

- User registration and login
- Browse available events
- Book event tickets
- View booking history
- Create and manage events

---

## Tech Stack

### Frontend
- React
- Next.js

### Backend
- Nestjs
- Express.js
- Prisma
- Paystack

### Database
- PostgreSQL

### Tools
- Git & GitHub
- VS Code

---

## Folder Structure

```bash
event-booking-system/
│
├── backend/
│   ├── prisma/
│   ├── src/
│   ├── models/
│   
│
│
├── frontend/
│   ├── src/
│   ├── components/
│   ├── pages/
│   └── App.jsx
│
└── README.md
```

---

## Installation

### Clone the Repository

```bash
git clone https://github.com/daniela27ilori-spec/Group5-Event-Booking
```

---

## Backend Setup

```bash
cd backend
npm install
npm run dev
```

Backend runs on:

```bash
http://localhost:5000
```

---

## Frontend Setup

```bash
cd frontend
npm install
npm run dev
```

Frontend runs on:

```bash
http://localhost:3000
```

---

## API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | /events | Get all events |
| GET | /events/:id | Get single event |
| GET | /api / v1 /events |
| POST | /bookings | Create booking |
| DELETE | /bookings/:id | Cancel booking |

---

## Git Workflow

This project follows GitHub collaboration best practices:
- Feature branches
- Pull Requests
- No direct push to main branch

---

## Team Members – Group 5

- Onyedikachi Nzute (Backend Developer)
- Ebubechukwu Ogbuefi (Backend Developer)
- Oluwadarasimi Oguntoyinbo (DevOps & Integration)
- Ewomazino Omugre (Frontend Developer)
- Ehigie Paul (QA/Documentation)
- Daniela Ilori (Team Lead)
- Ifolochukwu Ugbechie (Frontend Developer)

---

## Future Improvements

- Payment integration
- Email notifications
- Search and filtering
- Admin dashboard
- QR code verification

---

## Live Demo

deployed link .

---

## GitHub Repository

https://github.com/daniela27ilori-spec/Group5-Event-Booking

---

## Screenshots
### Events Page 
add in images later 


--

## License

This project was created for academic purposes.
