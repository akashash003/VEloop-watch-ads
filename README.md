<<<<<<< HEAD
# VELOOP Rewards - Watch Ads Page

## Project Overview
A redesigned Watch Ads page for VELOOP Rewards (Task 04). Users watch short ads to earn VEs (VELOOP Earn Tokens), which can be converted to cash and withdrawn to a linked bank account. Built with dummy data, no backend.

## Features
- Hero section with daily earnings progress and animated art
- Animated stat counters (today, lifetime, ads watched, remaining)
- 6 ad cards with reward badge, status, limited-time bonus tag
- Watch button states: available, loading (countdown), completed, disabled
- Loading skeletons, empty state ("No ads available"), reward success modal
- Daily streak, recent earnings timeline, weekly earnings chart, How It Works
- Filter tabs (All / Available / Completed), sort by reward or time, auto-refresh countdown
- Interactive touches: cursor spotlight on cards, hero parallax, button ripple and progress fill, confetti on reward, daily-goal toast, bar chart tooltips
- Scroll-reveal animations (respects `prefers-reduced-motion`)
- Dark fintech theme, responsive from 320px to ultra-wide screens

## Technology Stack
React 18, Vite, Bootstrap 5, CSS Modules, Lucide React, React Icons, React Hooks

## Folder Structure
```
src/
  components/   UI pieces (Sidebar, Topbar, HeroSection, AdCard, ...)
  pages/        WatchAds.jsx (page state and composition)
  hooks/        useCountUp.js, useInView.js
  data/         watchAdsData.js (dummy data)
  utils/        format.js
  styles/       theme.css, WatchAds.module.css
```

## Installation Guide
```bash
npm install
```

## Running the Project
```bash
npm run dev      # development
npm run build    # production build
npm run preview  # preview build
```
Demo note: ad timers run 10x faster (`DEMO_SPEED` in `WatchAds.jsx`).

## Screenshots
Add screenshots here.

## Live Demo
Live:v-eloop-watch-ads.vercel.app

## Author
Akash M - Frontend Developer, Chennai
=======
# VEloop-watch-ads
>>>>>>> a606d4c46258c69d71fddba8d90e823ab7af2211
