# AskChristianity.org | Personal Website
A high-performance, dynamic web application built to showcase modern frontend development practices. This project serves as a migration from a legacy WordPress site to a custom React and TypeScript architecture.

## 🚀 The Tech Stack
Frontend: React (Vite-powered)

Language: TypeScript

Styling: ?

Backend/Database: ?

Hosting: Vercel

Domain: askchristianity.org

## 🛠️ Essential Commands

```bash
# Start the local development Vercel server (Recommended)
vercel dev

# Install all packages listed in package.json (run after cloning)
npm install

# Start the lightweight Vite local development server
npm run dev
```

## 📂 Project Structure
/src/components - Reusable UI elements (Buttons, Comment Cards).

/src/hooks - Custom logic for fetching "Likes" and Auth states.

/src/lib - Configuration files (Supabase client initialization).

/.env - (Secret) Stores your API keys. Never commit this file to GitHub.

## 📝 Features to Implement
[X] Basic hosting of blogs

[ ] Responsive UI for mobile/desktop.

[ ] User Authentication via Supabase.

[ ] Real-time "Like" counter.

[ ] Comment section with database persistence.