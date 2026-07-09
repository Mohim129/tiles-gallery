# Tiles Gallery

**Live Site:** [https://tiles-gallery-lac.vercel.app/](https://tiles-gallery-lac.vercel.app/)

![Tiles Gallery Preview](https://i.ibb.co.com/RGwgB7Q2/tile-gallery.png)

## About
A fully responsive single‑page application to explore, search, and view a curated collection of premium tiles. Users can authenticate (email/password or Google), manage their profile, and browse a gallery with detailed tile pages. Built with Next.js (App Router), HeroUI, Tailwind CSS, and BetterAuth.

## Purpose
- Provide a modern, intuitive interface for showcasing a tile catalog.
- Allow users to authenticate securely and view protected tile details.
- Offer a rich browsing experience with search, image previews, a featured carousel, and a responsive design.

## ✨ Key Features
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

## 🛠️ Technologies & Packages
| Package / Tool | Purpose |
|----------------|---------|
| **Next.js** (App Router) | React framework with server‑side rendering, API routes, and file‑based routing |
| **Tailwind CSS** | Utility‑first CSS framework |
| **DaisyUI** | Pre‑built components and themes on top of Tailwind CSS |
| **HeroUI** | Accessible form components (Input, InputGroup, Button, Form, TextField, etc.) |
| **Gravity UI Icons** | Icon library used for UI elements (e.g., Magnifier, Eye, Check) |
| **BetterAuth** | Authentication library (credentials & Google OAuth) |
| **MongoDB** | Database used for storing user authentication data via BetterAuth adapter |
| **react-fast-marquee** | Scrolling marquee component used in the banner |
| **SwiperJS** | Touch‑enabled responsive carousel for the featured tiles section |
| **react-hot-toast** | Toast notifications for login/update feedback |
| **json-server** | Fake REST API for development (tiles read from `db.json`) |

---

## 🚀 Getting Started

Follow these steps to run the project locally on your machine.

1. **Clone the repository**
   ```bash
   git clone [https://github.com/Mohim129/tiles-gallery.git](https://github.com/Mohim129/tiles-gallery.git)
   cd tiles-gallery

```

2. **Install dependencies**
```bash
npm install

```


*(Note: This installs all required packages including DaisyUI, HeroUI, BetterAuth, Swiper, etc.)*
3. **Set up environment variables**
Create a `.env` file in the root directory and add the necessary keys for BetterAuth, MongoDB, and Google OAuth:
```env
BETTER_AUTH_SECRET=your-random-secret
BETTER_AUTH_URL=http://localhost:3000
MONGODB_URI=your-mongodb-connection-string
GOOGLE_CLIENT_ID=your-google-client-id
GOOGLE_CLIENT_SECRET=your-google-client-secret

```


4. **Run the development server**
```bash
npm run dev

```


Open [http://localhost:3000](http://localhost:3000) to view the application in your browser.

```

```
