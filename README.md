# AskChristianity.org | Personal Website
A high-performance, dynamic web application built to showcase modern frontend development practices. This project serves as a migration from a legacy WordPress site to a custom React and TypeScript architecture, featuring user interactivity via Supabase.

## 🚀 The Tech Stack
Frontend: React (Vite-powered)

Language: TypeScript

Styling: ?

Backend/Database: ?

Hosting: Vercel

Domain: askchristianity.org

## 🛠️ Essential Commands

```bash
# Start the local development server (with Hot Module Replacement)
npm run dev

# Install all packages listed in package.json (run after cloning)
npm install

# Install a tool for development only (e.g., types)
npm install -D @types/node

# Push to GitHub (This automatically triggers a Vercel deploy)
git push origin main

# Build the project for production (Vercel does this automatically)
npm run build

# Preview the production build locally
npm run preview
```

## 📂 Project Structure
/src/components - Reusable UI elements (Buttons, Comment Cards).

/src/hooks - Custom logic for fetching "Likes" and Auth states.

/src/lib - Configuration files (Supabase client initialization).

/.env - (Secret) Stores your API keys. Never commit this file to GitHub.

## Environment Variables
To run this project locally, you must create a .env file in the root directory with the following:

```bash
VITE_SUPABASE_URL=your_supabase_url
VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
```

## 📝 Features to Implement
[ ] Basic hosting of blogs

[ ] Responsive UI for mobile/desktop.

[ ] User Authentication via Supabase.

[ ] Real-time "Like" counter.

[ ] Comment section with database persistence.