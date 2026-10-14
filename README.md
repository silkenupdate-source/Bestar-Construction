# Bestar Construction Website

Modern, responsive web platform for Bestar Construction — leading building construction, civil engineering, architectural design, and renovation company.

---

## Tech Stack & Architecture

- **Framework:** Next.js 16 (App Router)
- **Language:** TypeScript 5
- **Styling:** Tailwind CSS & Lucide Icons
- **Image Optimization:** Next.js Image component with WebP / high-resolution photography
- **Backend API:** Next.js Route Handlers (`/api/contact`) for quotation form submissions

---

## Pages & Routes

- `/` — Homepage: Hero slider, company overview, service highlights, featured projects, stats, and call to action
- `/about` — About Us: Company history, values, safety standards, and team
- `/services` — Services: Full breakdown of Residential, Commercial, Civil Engineering, and Renovation services with high-res photography
- `/projects` — Projects: Filterable portfolio of completed and ongoing building projects
- `/contact` — Contact & Quote Request: Interactive inquiry form with live WhatsApp link and company contact cards
- `/api/contact` — Server-side endpoint handling quotation form submissions

---

## Getting Started

### 1. Install Dependencies
```bash
npm install
```

### 2. Configure Environment Variables
Copy `.env.example` to `.env.local`:
```bash
cp .env.example .env.local
```

Configure the following variables in `.env.local`:
| Variable | Description | Default / Example |
|---|---|---|
| `RESEND_API_KEY` | *(Optional)* API key from [Resend](https://resend.com) to automatically deliver form submissions via email | `re_123456...` |
| `CONTACT_NOTIFICATION_EMAIL` | Destination email where quote requests are forwarded | `bestarconstructioninfo@gmail.com` |
| `NEXT_PUBLIC_SITE_URL` | Canonical site URL for metadata / OpenGraph | `https://bestarconstruction.com` |

> **Note:** If `RESEND_API_KEY` is not provided, the contact API endpoint still logs all received inquiries to the server logs and returns a successful response to the user.

### 3. Run the Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) to view the application.

---

## Quality Checks & Production Build

### Linting
```bash
npm run lint
```

### TypeScript Validation
```bash
npx tsc --noEmit
```

### Production Build
```bash
npm run build
```

### Start Production Server
```bash
npm run start
```

---

## Deployment Recommendations

1. **Vercel (Recommended):**
   - Connect the Git repository to Vercel.
   - Set `RESEND_API_KEY` and `CONTACT_NOTIFICATION_EMAIL` in the Vercel Project Settings > Environment Variables.
   - Deploy. Next.js App Router and serverless Route Handlers are supported natively out-of-the-box.

2. **Self-Hosted Node.js / Docker:**
   - Run `npm run build` followed by `npm run start` behind a reverse proxy (e.g., Nginx, Caddy).
