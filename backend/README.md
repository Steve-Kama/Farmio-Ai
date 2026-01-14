# ai-farmer-backend (sample)

Simple TypeScript Express backend used for local development and demo purposes.

Quick start

1. Install dependencies (from `backend/`):

```bash
cd backend
npm install
```

2. Run in development (auto-reload):

```bash
npm run dev
```

3. Build and start:

```bash
npm run build
npm start
```

API endpoints

- `GET /status` — health check
- `GET /insights` — sample insights
- `GET /farmers` — list sample farmers
- `POST /farmers` — create farmer { name, crop }
- `POST /feedback` — submit feedback { name?, email?, message }

Notes

- This is an in-memory demo store — data resets on restart.
- Use `.env` to set `PORT` if needed.
