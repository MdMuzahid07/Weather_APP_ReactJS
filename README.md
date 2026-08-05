<div align="center">
  <img src="public/icon.svg" width="128" height="128" alt="WeatherApp Logo" />
  <h1>Enterprise Weather App PWA</h1>
  <p><strong>Production-Grade, Offline-Capable, Keyless Progressive Web App</strong></p>

  <p>
    <a href="#tech-stack"><img src="https://img.shields.io/badge/React-18.3-61DAFB?style=for-the-badge&logo=react" alt="React 18" /></a>
    <a href="#tech-stack"><img src="https://img.shields.io/badge/Vite-5.4-646CFF?style=for-the-badge&logo=vite" alt="Vite 5" /></a>
    <a href="#tech-stack"><img src="https://img.shields.io/badge/TypeScript-5.7-3178C6?style=for-the-badge&logo=typescript" alt="TypeScript 5" /></a>
    <a href="#tech-stack"><img src="https://img.shields.io/badge/PWA-Workbox-4285F4?style=for-the-badge&logo=pwa" alt="PWA Workbox" /></a>
    <a href="#tech-stack"><img src="https://img.shields.io/badge/Tailwind-3.4-38BDF8?style=for-the-badge&logo=tailwindcss" alt="Tailwind CSS" /></a>
  </p>
</div>

---

## 📋 Executive Overview

**Enterprise Weather App** is a state-of-the-art Progressive Web App (PWA) built with **React 18**, **TypeScript 5**, **Vite 5**, **Zustand 5**, and **Tailwind CSS 3**. Powered by the 100% free **Open-Meteo Weather API**, it delivers hyper-local forecasts worldwide with **zero API keys required**, eliminating client-side secret leakage risks entirely.

Engineered with enterprise design principles:
- **Zero-Scroll Viewport**: Perfectly fits desktop and laptop screens with zero awkward container scrollbars.
- **Offline-First Architecture**: Service Worker caching guarantees weather visibility even when disconnected from the internet.
- **Zero Cumulative Layout Shift (CLS = 0)**: 1-to-1 exact structural shimmer skeletons eliminate UI layout jumps during data fetching.
- **Adaptive Dark & Light Glassmorphism**: High-contrast glassmorphic design system with ambient hero mesh grid patterns.

---

## ✨ Key Features & Innovations

### 🌦️ 100% Free & Keyless Weather Engine
Integrated with **Open-Meteo Geocoding & Forecast APIs** (`https://api.open-meteo.com` & `https://geocoding-api.open-meteo.com`). Allows up to 10,000 free requests per day without requiring API keys or secret proxy servers.

### 📱 Enterprise PWA & Offline Support
- **Workbox Caching**: Pre-caches core app shell (`/index.html`, `/manifest.json`, `/icon.svg`).
- **NetworkFirst Strategy**: Fetches live weather with a 5-second network timeout fallback to cached responses.
- **Installable**: Full W3C Web App Manifest compliance for native installation on iOS, Android, macOS, and Windows.
- **Offline Status Indicator**: Live status pill in the top header displaying exact cached sync timestamps when offline.

### 💡 Actionable Weather Insights Engine
Translates raw meteorological metrics into actionable human advice:
- 👕 **Clothing Recommendation**: Thermal layers vs. light breathable cotton based on temperature thresholds.
- 🏃 **Outdoor Activity Score**: 1-to-10 outdoor workout index incorporating rain, wind gust, and UV metrics.
- 🌧️ **Rain Warning Alert**: Proactive umbrella notifications when precipitation probability exceeds 40%.
- ☀️ **Sun Care Advice**: UV index guidance (SPF sunscreen & sunglasses reminders).

### 📊 Interactive 24-Hour Forecast Breakdown
Custom Recharts visualization with metric tab controls:
- **Temperature Curve (°C / °F)**: Smooth gradient area chart.
- **Rain Probability (%)**: Column bar breakdown.
- **UV Index**: Solar intensity tracking with dynamic custom tooltips.

### 🎨 Dark & Light Glassmorphism UI
- **Dark Mode**: Midnight obsidian (`#070A12`) backdrop with cyan/indigo radial mesh grid patterns.
- **Light Mode**: Crisp sky blue (`#E2EBF8`) backdrop with high-contrast slate typography (`#0F172A`).
- **Hero Sidebar**: Local vector pine forest & mountain landscape SVG background (`/hero-landscape.svg`).

---

## 🛠️ Tech Stack & Architecture

```
weather_app/
├── public/
│   ├── hero-landscape.svg    # Guaranteed local vector hero landscape
│   ├── icon.svg              # Custom 100% original PWA vector icon
│   ├── manifest.json         # Web App Manifest specification
│   ├── sw.js                 # Workbox Service Worker caching script
│   └── robots.txt
├── src/
│   ├── components/
│   │   ├── Dashboard/
│   │   │   ├── WeatherDetails/
│   │   │   │   └── TodayWeatherDetails.tsx   # 6 Dark glass metric cards
│   │   │   ├── Chart.tsx                     # Recharts 24-hour breakdown
│   │   │   ├── Header.tsx                    # Top header & offline banner
│   │   │   └── WeatherSummaryCard.tsx        # Smart Insights cards
│   │   ├── WeatherView/
│   │   │   ├── WeatherLocation.tsx           # City name, date, sunrise/sunset
│   │   │   ├── WeatherSlider.tsx             # Temperature hero & 7-day forecast
│   │   │   └── WeatherViewHeader.tsx         # Searchbar & °C/°F switcher
│   │   ├── ErrorBoundary.tsx                 # Widget error boundary wrapper
│   │   ├── SearchModal.tsx                   # City search modal with GPS button
│   │   └── WeatherIcon.tsx                   # Animated Lucide weather icon
│   ├── services/
│   │   ├── weatherService.ts                 # Typed Open-Meteo API client
│   │   └── weatherInsights.ts                # Decision-oriented advice engine
│   ├── store/
│   │   └── useWeatherStore.ts                # Typed Zustand store
│   ├── types/
│   │   └── weather.ts                        # TypeScript interfaces & contracts
│   ├── App.tsx                               # Root wrapper with web-vitals
│   ├── index.css                             # Glassmorphism & Hero Mesh CSS
│   ├── index.tsx                             # Entry point & SW registration
│   └── reportWebVitals.ts                    # Web Vitals v4 performance monitor
├── vite.config.ts                            # Vite 5 + PWA + Compression config
├── tsconfig.json                             # Strict TypeScript config
├── .eslintrc.cjs                             # ESLint React + TS + Accessibility rules
├── .prettierrc                               # Code style formatting rules
├── README.md                                 # Project documentation
├── ADR.md                                    # Architecture Decision Records
└── package.json
```

---

## 🚀 Getting Started

### Prerequisites
- **Node.js**: `>= 18.0.0`
- **Package Manager**: `pnpm` (`>= 8.0.0` recommended)

### 1. Installation
Clone the repository and install dependencies:
```bash
git clone https://github.com/MdMuzahid07/Weather_APP_ReactJS.git
cd Weather_APP_ReactJS
pnpm install
```

### 2. Development Server
Start the local development server with Vite hot-module replacement (HMR):
```bash
pnpm dev
```
Open your browser and navigate to `http://localhost:5173/`.

### 3. Type Checking & Code Quality
Run strict TypeScript compilation check and ESLint analysis:
```bash
# Type check without emitting files
pnpm typecheck

# ESLint audit (React Hooks, TypeScript & Accessibility rules)
pnpm lint
```

### 4. Production Build & Preview
Build the production bundle with gzip and Brotli compression:
```bash
# Compile TypeScript & bundle production assets
pnpm build

# Preview production build locally
pnpm preview
```

---

## 🔒 Security & Performance Standards

### Security Hardening
1. **Content Security Policy (CSP)**: Configured in `index.html` to restrict script execution and prevent XSS attacks.
2. **Zero API Key Exposure**: All weather data is fetched from keyless public endpoints (`api.open-meteo.com`).
3. **Input Sanitization**: User search inputs are sanitized and escaped before dispatching network calls.
4. **Isolated Error Boundaries**: Components are wrapped in `<ErrorBoundary />` containers to prevent single-widget failures from crashing the app.

### Performance Optimization
- **Code Splitting**: `Chart` and `WeatherSlider` components are dynamically loaded via `React.lazy()` + `<Suspense />`.
- **Vendor Chunk Splitting**: Configured `manualChunks` in `vite.config.ts` (`vendor-react`, `vendor-recharts`, `vendor-lucide`, `vendor-state`).
- **Asset Compression**: Automatic `.gz` and `.br` asset pre-compression via `vite-plugin-compression`.
- **Web Vitals Monitoring**: Live tracking of CLS, LCP, INP, FCP, and TTFB via `reportWebVitals.ts`.

---

## ♿ Accessibility (WCAG 2.1 AA)

- **Keyboard Navigation**: Full tab navigation support with visible focus rings (`focus-visible:ring-2 focus-visible:ring-sky-400`).
- **Screen Reader Support**: ARIA attributes (`aria-label`, `role="tablist"`, `role="dialog"`, `aria-live="polite"`).
- **Reduced Motion**: All CSS micro-animations use `motion-safe` rules respecting user OS `prefers-reduced-motion` settings.

---

## 📖 Architecture Decision Records (ADRs)

Key architectural decisions are documented in detail in [ADR.md](ADR.md):
- **ADR 1**: Service Worker runtime caching via `vite-plugin-pwa` (Workbox).
- **ADR 2**: Keyless Open-Meteo API integration.
- **ADR 3**: Centralized state management using Zustand 5.

---

## 📄 License & Credits

This project is open-source under the MIT License.
- Weather data provided by [Open-Meteo API](https://open-meteo.com/) (Free Tier 10,000 calls/day).
- Icons provided by [Lucide React](https://lucide.dev/).
