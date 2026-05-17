# Tiles Gallery

A fully responsive single‑page application to explore, search, and view a curated collection of premium tiles. Users can authenticate (email/password or Google), manage their profile, and browse a gallery with detailed tile pages. Built with Next.js (App Router), HeroUI, Tailwind CSS, and BetterAuth.

## Live Demo
🔗 [Tiles Gallery Live](https://tiles-gallery-lac.vercel.app/)  


## Purpose
- Provide a modern, intuitive interface for showcasing a tile catalog.
- Allow users to authenticate securely and view protected tile details.
- Offer a rich browsing experience with search, image previews, a featured carousel, and a responsive design.

## Key Features
- 🏠 **Home Page** – Hero banner with background image, "Browse Now" CTA, animated marquee with a random tile name, and a SwiperJS‑powered featured tiles carousel.
- 🔐 **Authentication** – Email/password login & registration, plus Google social login, implemented with BetterAuth (MongoDB adapter). Loading states and error handling with alerts.
- 🖼️ **All Tiles Gallery** – Responsive grid of tile cards with a search bar (HeroUI Form + InputGroup) that filters tiles by title on form submission.
- 🔍 **Single Tile Details** – Private route showing a large, high‑res photo on one side and details on the other: title, price, stock status, creator, description, dimensions, material, and tags.
- 👤 **My Profile** – View current user info (name, email, profile image) and a link to an update form.
- ✏️ **Update Profile** – Dedicated page with a HeroUI form (matching the sign‑in/sign‑up style) to update name and image URL using BetterAuth’s `updateUser`.
- 🏷️ **Tags** – Each tile has descriptive tags (e.g., “Blue”, “Rustic”, “Hexagon”) shown as badges on the detail page.
- 📱 **Fully Responsive** – Mobile, tablet, and desktop breakpoints using Tailwind CSS and DaisyUI components.
- 🌙 **Custom Footer** – Social media icons (SVG) and a “Contact Us” section.
- 📦 **Unique Design** – Custom color palette, background images, and consistent HeroUI form patterns.
- ⚡ **Performance** – Next.js `<Image>` component for optimized loading, loading spinners on data fetch, and a custom 404 Not Found page (`app/not-found.jsx`).

## Technologies & Packages
| Package / Tool | Purpose |
|----------------|---------|
| [Next.js](https://nextjs.org/) (App Router) | React framework with server‑side rendering, API routes, and file‑based routing |
| [Tailwind CSS](https://tailwindcss.com/) | Utility‑first CSS framework |
| [DaisyUI](https://daisyui.com/) | Pre‑built components and themes on top of Tailwind CSS |
| [HeroUI](https://heroui.com/) (`@heroui/react`) | Accessible form components (Input, InputGroup, Button, Form, TextField, etc.) built with React Aria |
| [Gravity UI Icons](https://gravity-ui.com/icons) (`@gravity-ui/icons`) | Icon library used for UI elements (e.g., Magnifier, Eye, Check) |
| [BetterAuth](https://better-auth.com/) | Authentication library (credentials & Google OAuth) |
| [better-auth-adapter-mongodb](https://better-auth.com/docs/concepts/adapters/mongodb) | MongoDB adapter for BetterAuth |
| [MongoDB](https://www.mongodb.com/) | Database used for storing user authentication data |
| [react-fast-marquee](https://www.npmjs.com/package/react-fast-marquee) | Scrolling marquee component used in the banner |
| [SwiperJS](https://swiperjs.com/react) (`swiper`) | Touch‑enabled responsive carousel for the featured tiles section (challenge requirement) |
| [react-hot-toast](https://react-hot-toast.com/) | Toast notifications (can be used for login/update feedback) |
| [json-server](https://github.com/typicode/json-server) (dev dependency) | Fake REST API for development (not used in production; tiles are read from `db.json` via server‑side functions) |
| [react-social-icons](https://www.npmjs.com/package/react-social-icons) | Optional package for social media icons (if used) |

## NPM Install Commands
All packages can be installed with a single command if you have cloned the project (see **Getting Started** below). If you need to install them individually, here are the exact commands:




npm install daisyui
npm install @heroui/react @gravity-ui/icons

npm install better-auth better-auth-adapter-mongodb mongodb

npm install react-fast-marquee swiper
npm install react-hot-toast   

npm install -D json-server