# 🎬 PrimeTime

A **Netflix-style free movie streaming site** built with pure HTML, CSS, and JavaScript — no frameworks, no build tools.  
Browse millions of movies and TV shows powered by **TMDB**, and watch them via the **Vidking** embedded player.

**Black & Purple theme · Responsive · Lightning fast**

---

## ✨ Features

- 🖤💜 **Black & Purple Netflix-style design** with smooth animations and hover effects
- ✨ **Cinematic splash/loading screen** with glowing animated logo
- 🏠 **Netflix-style homepage** — hero banner, horizontally-scrolling category rows
- 🎥 **Movie detail page** — backdrop, metadata, genres, cast, Vidking player, similar movies
- 📺 **TV Show page** — season/episode selector, episode thumbnails, Vidking player
- 🔍 **Real-time search** — debounced TMDB multi-search with filter by Movie/TV
- ❤️ **My List** — add/remove favorites, persisted in `localStorage`
- ▶️ **Continue Watching** — tracks watch progress via Vidking postMessage events
- �� **Fully responsive** — mobile hamburger menu, fluid grids

---

## 🗂 File Structure

```
/
├── index.html    # Home page (splash + hero + category rows)
├── movie.html    # Movie detail + Vidking player
├── tv.html       # TV show detail + episode selector + Vidking player
├── search.html   # Real-time search results
├── styles.css    # All CSS (black & purple theme)
├── script.js     # All JavaScript (TMDB API, My List, progress, search)
└── README.md
```

---

## 🛠 Tech Stack

| Layer     | Technology                                   |
|-----------|----------------------------------------------|
| Frontend  | Plain HTML5, CSS3, JavaScript (ES2020)       |
| Data API  | [TMDB](https://www.themoviedb.org/) REST API |
| Player    | [Vidking](https://www.vidking.net/) embed    |
| Fonts     | Google Fonts — Inter                         |
| Hosting   | GitHub Pages / Vercel (static)               |

---

## 🚀 Deploy

### GitHub Pages
1. Push this repo to GitHub
2. Go to **Settings → Pages**
3. Select **Branch: main** → **/ (root)**
4. Click **Save** — your site will be live at `https://<user>.github.io/<repo>/`

### Vercel
1. Import the repo on [vercel.com](https://vercel.com)
2. Framework preset: **Other** (static)
3. Deploy — done!

---

## 📝 Notes

- Movie data is provided by [TMDB](https://www.themoviedb.org/). This product uses the TMDB API but is not endorsed or certified by TMDB.
- PrimeTime does not host any video content. All video streams are served by third-party providers via Vidking.
