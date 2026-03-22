# Teddy Smile — Dental Clinic

Monorepo with a **frontend** (React + Vite) and **backend** (Node.js) app.

## Structure

- **`frontend/`** — React, TypeScript, Tailwind, Vite. Web UI for the dental clinic.
- **`backend/`** — Node.js HTTP server. API placeholder for future app logic.

## Commands (from repo root)

| Command | Description |
|---------|-------------|
| `npm run dev` | Start frontend dev server (default) |
| `npm run dev:frontend` | Start frontend at http://localhost:5173 |
| `npm run dev:backend` | Start backend at http://localhost:3001 |
| `npm run build` | Build frontend for production |
| `npm run start:backend` | Run backend (production) |

## First-time setup

```bash
# Frontend (from root)
npm install --prefix frontend

# Backend has no dependencies; run with Node
npm run dev:backend
```

## API (backend)

- `GET http://localhost:3001/api/health` — Health check
- `GET http://localhost:3001/api` — API info
# TeddySmile
