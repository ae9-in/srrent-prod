# 🛕 SRR Pooja Works — Full Stack Website

Premium wholesale pooja products website built with **React + Tailwind CSS** (frontend) and **Node.js + Express + MongoDB** (backend).

---

## 📁 Project Structure

```
srr-pooja-works/
│
├── frontend/                        ← React App
│   ├── index.html
│   ├── vite.config.js
│   ├── tailwind.config.js
│   ├── postcss.config.js
│   ├── package.json
│   └── src/
│       ├── main.jsx                 ← Entry point
│       ├── App.jsx                  ← Router setup
│       ├── index.css                ← Global styles
│       ├── data/
│       │   └── products.js          ← Product data (12 products)
│       ├── components/
│       │   ├── Navbar.jsx           ← Fixed navbar + mobile drawer
│       │   └── Footer.jsx           ← 4-column footer
│       └── pages/
│           ├── Home.jsx             ← Landing page (Hero + Carousel + About + Why Us + Testimonials + CTA)
│           ├── Products.jsx         ← Products grid with search & filter
│           └── Contact.jsx          ← Bulk inquiry form + contact details
│
└── backend/                         ← Express API
    ├── server.js                    ← App entry + MongoDB connection
    ├── package.json
    ├── .env.example                 ← Copy to .env and fill in values
    ├── models/
    │   ├── Contact.js               ← Inquiry schema
    │   └── Product.js               ← Product schema
    └── routes/
        ├── contact.js               ← POST/GET/PATCH inquiry endpoints
        └── products.js              ← Full CRUD product endpoints
```

---

## 🚀 Getting Started

### Prerequisites
- **Node.js** v18+ → [nodejs.org](https://nodejs.org)
- **MongoDB** (local) or a free [MongoDB Atlas](https://cloud.mongodb.com) cluster

---

### 1. Start the Frontend

```bash
cd frontend
npm install
npm run dev
```
Open → **http://localhost:5173**

> The frontend works fully without the backend. The contact form shows a success state even in demo mode.

---

### 2. Start the Backend

```bash
cd backend
npm install
cp .env.example .env   # then edit .env with your MongoDB URI
npm run dev            # uses nodemon for auto-reload
# or:
npm start              # production
```
API runs on → **http://localhost:5000**

---

### Backend .env

```
PORT=5000
MONGO_URI=mongodb://localhost:27017/srr-pooja-works
CLIENT_URL=http://localhost:5173
NODE_ENV=development
```

---

## 🌐 Pages

| Page     | Route       | Description                                               |
|----------|-------------|-----------------------------------------------------------|
| Home     | `/`         | Hero → Carousel → About → Why Us → Testimonials → CTA   |
| Products | `/products` | All 12 products with live search + category filter        |
| Contact  | `/contact`  | Inquiry form, contact cards, how-to-order steps          |

---

## 🔌 API Endpoints

| Method | Endpoint                    | Description             |
|--------|-----------------------------|-------------------------|
| GET    | `/api/health`               | Health check            |
| POST   | `/api/contact`              | Submit bulk inquiry      |
| GET    | `/api/contact`              | List all inquiries      |
| PATCH  | `/api/contact/:id/status`   | Update inquiry status   |
| GET    | `/api/products`             | List products           |
| GET    | `/api/products/:id`         | Get single product      |
| POST   | `/api/products`             | Add product (admin)     |
| PUT    | `/api/products/:id`         | Update product (admin)  |
| DELETE | `/api/products/:id`         | Delete product (admin)  |

---

## 🎨 Design Highlights

- **Color palette** — warm golden amber (#c9965a → #ddb87a → #f4e0c0 → cream) from brand image
- **Fonts** — Cinzel (headings) + Playfair Display (subheadings) + Cormorant Garamond (body)
- **Glassmorphism** — navbar, cards, form panels
- **GSAP-style animations** — CSS keyframe hero title reveal, scroll-triggered reveals
- **Auto-playing carousel** — 3-card sliding with dot navigation
- **Mobile responsive** — hamburger drawer, single-column stacking, fluid font sizes

---

## 📱 Mobile Responsive

- Full-screen animated mobile navigation drawer
- Single column layout on small screens
- `clamp()` for fluid typography
- Touch-friendly buttons and tap targets
