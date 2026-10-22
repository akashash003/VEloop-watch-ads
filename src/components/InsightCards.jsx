import { Flame, CheckCircle2 } from "lucide-react";
import { weekDays, weeklyChart } from "../data/watchAdsData";
import { formatNumber } from "../utils/format";
import s from "../styles/WatchAds.module.css";

export function DailyStreak({ days }) {
  return (
    <div className={s.card}>
      <h3 className={s.cardTitle}><Flame size={16} color="#ff7a45" /> Daily Streak</h3>
      <div className={s.streakNum}>{days} <span>Days</span></div>
      <small className={s.muted}>Watch at least one ad daily to keep it going.</small>
      <div className={s.week}>
        {weekDays.map((d, i) => (
          <div key={i} className={`${s.weekDot} ${i < days ? s.weekOn : ""}`}>{d}</div>
        ))}
      </div>
    </div>
  );
}

export function RecentEarnings({ items }) {
  return (
    <div className={s.card}>
      <h3 className={s.cardTitle}>Recent Earnings</h3>
      <ul className={s.timeline}>
        {items.slice(0, 5).map((it, i) => (
          <li key={`${it.brand}-${i}`}>
            <CheckCircle2 size={15} color="var(--success)" />
            <span>{it.brand}<small>{it.time}</small></span>
            <b>+{it.reward} VEs</b>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function WeeklyEarnings({ total }) {
  const max = Math.max(...weeklyChart.map((d) => d.value));
  return (
    <div className={s.card}>
      <h3 className={s.cardTitle}>Weekly Earnings</h3>
      <div className={s.weeklyTotal}>{formatNumber(total)} <span>VEs</span></div>
      <div className={s.bars}>
        {weeklyChart.map((d) => (
          <div key={d.day} className={s.barCol}>
            <div className={s.bar} style={{ height: `${(d.value / max) * 100}%` }} title={`${d.value} VEs`} />
            <small>{d.day}</small>
          </div>
        ))}
      </div>
    </div>
  );
}
