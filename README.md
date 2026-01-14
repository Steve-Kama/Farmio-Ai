# AI Farmer Mini Lab
<img width="419" height="819" alt="screenshot" src="https://github.com/user-attachments/assets/06b41d0a-a3ca-4ed6-aab0-f77e4a5bae06" />

![Uploading Screenshtttttt.png…]()

Sample full-stack demo combining a Next.js frontend and a lightweight TypeScript Express backend. The backend is intentionally small and in-memory for local development and quick experimentation.

**Architecture**
- **Frontend:** Next.js app located under `app/` and `components/` (Next 13+ with App Router).
- **Backend:** python, KAFKA, HuggingFace,  using LLaMa Large language model 
![alt text](image.png)
**What I added**
- `backend/` — a minimal TypeScript Express backend scaffold with routes and an in-memory store.
- `backend/src/index.ts` — Express server and API endpoints.
- `backend/src/data.ts` — small in-memory data store and helper functions.
- `backend/tsconfig.json`, `backend/package.json`, `.env.example`, and `backend/README.md`.

**Backend API (sample endpoints)**
- `GET /status` — health check
- `GET /insights` — returns sample insights
- `GET /farmers` — list sample farmers
- `POST /farmers` — create farmer (body: `{ name, crop }`)
- `POST /feedback` — submit feedback (body: `{ name?, email?, message }`)

Example curl calls:

`curl -s http://localhost:4000/status | jq` — health

`curl -s http://localhost:4000/farmers | jq` — list farmers

`curl -X POST http://localhost:4000/farmers -H 'Content-Type: application/json' -d '{"name":"Eve","crop":"Rice"}' | jq`

`curl -X POST http://localhost:4000/feedback -H 'Content-Type: application/json' -d '{"message":"Nice app!"}' | jq`

Notes: the backend uses an in-memory store (no DB). Data resets on restart.

**Run the backend**
1. Change into the backend folder:

```bash
cd backend
```

2. Install dependencies and run development server:

```bash
npm install
npm run dev
```

3. Build and run production bundle:

```bash
npm run build
npm start
```

See [backend/.env.example](backend/.env.example) for environment variables (`PORT` defaults to `4000`).

**Run the frontend (Next.js)**
From the project root run the usual Next.js commands. The repository contains `package.json` and uses Node + Next. Example:

```bash
# from project root
npm install
npm run dev
```

If you prefer `pnpm`:

```bash
pnpm install
pnpm dev
```

By default the frontend will run on `http://localhost:3000` and the backend on `http://localhost:4000`.

To connect the frontend to the backend set an environment variable (Next public env):

```bash
# in a .env.local at project root
NEXT_PUBLIC_API_URL=http://localhost:4000
```

Then in the frontend use `process.env.NEXT_PUBLIC_API_URL` for API calls.

**CORS**
The backend includes CORS for easy local development. If you host backend separately, ensure `CORS` and allowed origins are configured appropriately.

**Where to look in the code**
- Backend server: [backend/src/index.ts](backend/src/index.ts)
- Backend data store: [backend/src/data.ts](backend/src/data.ts)
- Backend README: [backend/README.md](backend/README.md)
- Frontend entry: [app/layout.tsx](app/layout.tsx) and [app/page.tsx](app/page.tsx)

**Development tips**
- The backend is intentionally simple to make integration testing and UI development fast.
- If you want persistence, replace `backend/src/data.ts` with a small database adapter (SQLite, Postgres, or MongoDB) and update the CRUD functions.
- Add TypeScript types in the frontend for request/response shapes to strengthen integration.

**Next steps I can do for you**
- Add a proxy or environment-based fetch helper in the frontend to call the backend securely.
- Add tests or a simple SQLite integration for persistence.
- Add CORS origin restriction and authentication to the backend.

**License & notes**
This is a sample/demo scaffold; adjust for production use (add logging, error handling, security, and persistent storage).
