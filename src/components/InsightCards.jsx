import { Flame, CheckCircle2 } from "lucide-react";
import Reveal from "./Reveal";
import gift from "../assets/gift.avif";
import { weekDays, weeklyChart } from "../data/watchAdsData";
import { formatNumber } from "../utils/format";
import s from "../styles/WatchAds.module.css";

export function DailyStreak({ days }) {
  return (
    <Reveal className={s.card}>
      <h3 className={s.cardTitle}><Flame size={16} color="#ff7a45" /> Daily Streak</h3>
      <div className={s.streakRow}>
        <div className={s.streakNum}>{days} <span>Days</span></div>
        <img src={gift} alt="" width="64" height="62" />
      </div>
      <small className={s.muted}>Watch at least one ad daily to keep it going.</small>
      <div className={s.week}>
        {weekDays.map((d, i) => (
          <div key={i} className={`${s.weekDot} ${i < days ? s.weekOn : ""}`} style={{ "--i": i }}>{d}</div>
        ))}
      </div>
    </Reveal>
  );
}

export function RecentEarnings({ items }) {
  return (
    <Reveal className={s.card} delay={100}>
      <h3 className={s.cardTitle}>Recent Earnings</h3>
      <ul className={s.timeline}>
        {items.slice(0, 5).map((it, i) => (
          <li key={`${it.brand}-${it.time}-${i}`} style={{ "--i": i }}>
            <CheckCircle2 size={15} color="var(--success)" />
            <span>{it.brand}<small>{it.time}</small></span>
            <b>+{it.reward} VEs</b>
          </li>
        ))}
      </ul>
    </Reveal>
  );
}

export function WeeklyEarnings({ total }) {
  const max = Math.max(...weeklyChart.map((d) => d.value));
  return (
    <Reveal className={s.card} delay={200}>
      <h3 className={s.cardTitle}>Weekly Earnings</h3>
      <div className={s.weeklyHead}>
        <div className={s.weeklyTotal}>{formatNumber(total)} <span>VEs</span></div>
        <span className={s.chip}>+18% vs last week</span>
      </div>
      <div className={s.bars}>
        {weeklyChart.map((d, i) => (
          <div key={d.day} className={s.barCol} data-v={`${d.value} VEs`} style={{ "--i": i }}>
            <div className={s.bar} style={{ height: `${(d.value / max) * 100}%` }} />
            <small>{d.day}</small>
          </div>
        ))}
      </div>
    </Reveal>
  );
}
