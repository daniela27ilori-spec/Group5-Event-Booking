# QA Test Results

## Backend API Tests

| Endpoint | Method | Status | Notes |
|----------|--------|--------|-------|
| /events | GET |  PASS | Returns events |
| /events | POST |  PASS | Requires ISO date |
| /auth/register | POST | PASS | User created |
| /auth/login | POST |  PASS | Returns token |

## Known Issues

- Database empty – needs seed data
- Date must include time (ISO-8601)

## Test Environment
- Backend URL: http://localhost:3000
- Database: SQLite (prisma.db)

## Prerequisites
1. Backend running: `npm run start:dev`
2. Database pushed: `npx prisma db push`
3. `.env` file configured with JWT_SECRET


---

## Authentication Steps

```markdown
## Authentication Steps
1. POST /auth/register → `{ "email": "test@test.com", "password": "123456" }`
2. POST /auth/login → Copy `access_token`
3. Add to requests: `Authorization: Bearer <token>`
```
## Sample Working Request

### POST /api/v1/events
```json
{
  "title": "Test Concert",
  "date": "2026-06-01T00:00:00.000Z",
  "location": "Main Hall",
  "price": 5000,
  "capacity": 100
}
```

## Tested By

- Daniela (Team Lead)
- Date: 2026-05-15
