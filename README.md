# GreatBuilders - Admin Panel

A professional React-based admin panel with custom CSS styling, built with Vite.

## Features

- 🏠 Modern landing page with gradient background
- 🔐 Login page
- 📊 Admin dashboard with statistics
- 👤 User profile management
- 📅 Appointments management
- 🎨 Custom CSS (no frameworks)
- 🚀 React Router DOM for navigation
- 📱 Fully responsive design

## Installation

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open your browser and navigate to `http://localhost:5173`

## Project Structure

```
src/
├── components/
│   ├── Header.jsx          # Navigation header
│   └── Sidebar.jsx         # Admin sidebar menu
├── pages/
│   ├── Home.jsx            # Landing page
│   ├── Login.jsx           # Login page
│   └── admin/
│       ├── AdminLayout.jsx # Admin layout wrapper
│       ├── Profile.jsx     # Admin profile page
│       ├── Dashboard.jsx   # Dashboard with stats
│       └── Appointments.jsx # Appointments table
├── App.jsx                 # Main app with routing
├── main.jsx               # Entry point
└── index.css              # All styling
```

## Routes

- `/` - Home page
- `/login` - Login page
- `/admin` - Admin dashboard (default)
- `/admin/profile` - Admin profile
- `/admin/dashboard` - Dashboard overview
- `/admin/appointments` - Appointments list

## Technologies

- React 18
- React Router DOM 6
- Vite 5
- Custom CSS

## Build for Production

```bash
npm run build
```

The built files will be in the `dist/` directory.
