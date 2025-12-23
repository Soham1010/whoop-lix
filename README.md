# 🎬 whoop-lix

A simple, delightful movie discovery and search app built with **React**, **Vite**, and **Tailwind CSS**. Search thousands of movies using The Movie Database (TMDB) API — quick, responsive, and easy to run locally. 🚀

---

## ✨ Features

- 🔎 Search movies by title with debounce to reduce API calls
- 🎯 Discover popular movies (default view)
- ⏳ Loading spinner while fetching data
- 🖼️ Movie cards show poster, rating, language, and release year
- ⚡ Fast dev experience with Vite and React

---

## 🧰 Tech Stack

- React 19
- Vite
- Tailwind CSS
- The Movie Database (TMDB) API
- Appwrite (installed dependency — optional backend integration)

---

## 🚀 Getting Started

### Prerequisites

- Node.js (v18+ recommended)
- A TMDB API read access token (Bearer token)

### Setup

1. Install dependencies:

```bash
npm install
```

2. Create environment file and add your TMDB API key (use a read access token as the app expects a Bearer token):

```bash
# .env
VITE_TMDB_API_KEY=your_tmdb_bearer_token_here
```

3. Start the development server:

```bash
npm run dev
```

4. Build for production:

```bash
npm run build
```

5. Preview production build locally:

```bash
npm run preview
```

---

## ⚙️ Configuration

- The app reads the TMDB token from `import.meta.env.VITE_TMDB_API_KEY`.
- If you'd like to integrate a backend or user authentication, Appwrite is already included as a dependency.

---

## 📸 Usage

- Type in the search input to look for movies (results update after a short debounce).
- The app falls back to a popular/discover list when the search field is empty.
- Each movie card shows title, rating, original language, and release year.

---

## ✅ Contributing

Contributions, issues, and feature requests are welcome! Please open an issue or submit a pull request.

---

## 📝 Notes

- Keep your TMDB token secret — do not commit `.env` to version control.
- This project is a lightweight demo and may include development TODOs.

---

Enjoy exploring movies! 🍿
