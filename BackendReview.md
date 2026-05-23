# Backend Development Summary – Group 5 (Piked Events)

## 1. Initial Setup & Architecture

- **Framework:** NestJS with TypeScript  
- **Database:** SQLite + Prisma ORM  
- **Modules:** Auth, Users, Events, Bookings, Payments (later removed), Health  
- **Authentication:** JWT + Passport  
- **Global:** `/api/v1` prefix, response interceptor, exception filter, validation pipe  

**Goal:** Build a REST API that supports user registration, event management, and booking system.

---

## 2. Development Stages

| Stage             |   Work Done                                                       |
|-------            |   -----------                                                     |
| Project init      | `nest new backend`, added Prisma, JWT, bcrypt, class-validator    |
| Database schema   | Created `User`, `Event`, `Booking` models in Prisma               |
| Modules           | Generated auth, users, events, bookings, payments, health modules |
| Auth              | Register, login, JWT strategy, guards                             |
| Events CRUD       | GET all, GET one, POST, PATCH, DELETE                             |
| Bookings          | Create booking, list user bookings no real payment (mock only)       |
| Health            | Endpoint with database ping                                       |
| CORS              | Enabled for frontend (any origin, credentials allowed)            |
| Error handling    | Fixed JWT to return 401, not 404                                  |
| Deployment prep   | Migrations, `postinstall`, `prisma migrate deploy`                 |

---

## 3. Errors Encountered & Fixes

| Error                                                |  Cause                                       |Fix |
|-------                                               |-------                                       |-----|
| `TS2306: File is not a module`                       | Missing module files                         | Created all required module folders and files                             |
| `Nest can't resolve dependencies of PaymentsService` | PrismaService not in PaymentsModule          | Added PrismaService to providers (later removed Payments module entirely) |
| `SQLite does not support enums`                      | Used `enum Role` and `enum BookingStatus`    | Changed to `String` with `@default("USER")` and `@default("PENDING")`     |
| `Parameter 'user' implicitly has 'any'`              | TypeScript strict mode                       | Added `: any` as quick fix                                                |
| `Cannot find name 'describe'`                        | Test file in `src/` without Jest             | Deleted `sample.spec.ts`                                                  |
| `JWT strategy returns 404 when user deleted`         | `findById` throws NotFoundException          | Wrapped in try-catch → `UnauthorizedException`                            |
| `Prisma schema hardcoded to dev.db`                  | Fixed URL                                    | Changed to `env("DATABASE_URL")`                                          |
| `Frontend cannot call API`                           | CORS missing                                 | Added `app.enableCors()` in `main.ts`                                     |
| `'next' is not recognized` (frontend)                | Frontend dependencies not installed          | Frontend team needed to reinstall                                         |
  
---

## 4. Major Changes & Decisions

- **SQLite instead of PostgreSQL** – Simpler for local dev and school demo.
- **Enums replaced with strings** – SQLite limitation; kept TypeScript enums for type safety.
- **Removed payments module** – Real Paystack too complex; used `bookings/:id/confirm` with `paymentConfirmed: true` as mock.
- **Moved `prisma` folder to root** – Cleaner structure.
- **Added migrations** – To enable `prisma migrate deploy` on Render.
- **CORS permissive** – `origin: true` for school demo.
- **Health check with DB ping** – So Render can see if DB is reachable.

---

## 5. Real Problems Encountered

- **Duplicate `prisma` folder** – Accidentally created `prisma/prisma/` with two `dev.db` files. Fixed by flattening structure.
- **`.env` file missing for teammates** – Forgot it's ignored by Git; had to ask them to create their own with `JWT_SECRET`.
- **Frontend team unable to install dependencies** – Had to reinstall `node_modules`.
- **SQLite persistence on Render** – Data may reset on redeploy, but fine for school project.
- **TypeScript strict errors** – Many implicit `any` warnings; ignored or quick-fixed.

---

## 6. Current Status

- ✅ Backend fully functional
- ✅ All endpoints tested with Thunder Client
- ✅ JWT authentication works
- ✅ Database connected (SQLite)
- ✅ CORS enabled
- ✅ Deployable to Render
- ✅ API documentation in README

---

## 7. Lessons Learned

- Use environment variables for secrets and database paths.
- SQLite is fine for demos, but production needs PostgreSQL.
- Migrations are essential for deployment.
- CORS must be configured early for frontend team.
- Keep test files outside `src/` to avoid compile errors.
- Document API changes in a shared collection (Thunder Client).
