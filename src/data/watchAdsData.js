// Dummy data - no backend required.
import finverse from "../assets/ads/finverse.avif";
import stridex from "../assets/ads/stridex.avif";
import melody from "../assets/ads/melody.avif";
import driveez from "../assets/ads/driveez.avif";
import safenet from "../assets/ads/safenet.avif";
import shopjoy from "../assets/ads/shopjoy.avif";

export const initialStats = {
  todayEarnings: 96,
  dailyGoal: 150,
  lifetimeEarnings: 12450,
  adsWatchedToday: 5,
  remainingAds: 7,
  weeklyEarnings: 1260,
  streakDays: 7,
};

export const initialAds = [
  { id: 1, brand: "FinVerse Pro", tagline: "The future of smart finance management.", reward: 38, duration: 45, image: finverse, status: "available" },
  { id: 2, brand: "StrideX", tagline: "Step up your game with ultimate comfort.", reward: 25, duration: 30, image: stridex, status: "available" },
  { id: 3, brand: "Melody Beats", tagline: "Feel every beat. Anytime. Anywhere.", reward: 50, duration: 60, image: melody, status: "available", limitedTime: true },
  { id: 4, brand: "DriveEZ", tagline: "Book rides easier than ever before.", reward: 20, duration: 40, image: driveez, status: "available" },
  { id: 5, brand: "SafeNet VPN", tagline: "Secure. Private. Lightning fast.", reward: 18, duration: 30, image: safenet, status: "available" },
  { id: 6, brand: "ShopJoy", tagline: "Best deals. Big savings. Just for you.", reward: 15, duration: 25, image: shopjoy, status: "available" },
];

export const initialRecent = [
  { brand: "FinVerse Pro", reward: 38, time: "Just now" },
  { brand: "StrideX", reward: 25, time: "16 mins ago" },
  { brand: "DriveEZ", reward: 20, time: "35 mins ago" },
  { brand: "Melody Beats", reward: 50, time: "1 hour ago" },
  { brand: "SafeNet VPN", reward: 18, time: "1 hour ago" },
];

export const weeklyChart = [
  { day: "Mon", value: 120 }, { day: "Tue", value: 190 }, { day: "Wed", value: 150 },
  { day: "Thu", value: 200 }, { day: "Fri", value: 210 }, { day: "Sat", value: 205 },
  { day: "Sun", value: 185 },
];

export const weekDays = ["M", "T", "W", "T", "F", "S", "S"];
