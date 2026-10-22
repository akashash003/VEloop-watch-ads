import { Sparkles, PlayCircle, Coins } from "lucide-react";
import useCountUp from "../hooks/useCountUp";
import s from "../styles/WatchAds.module.css";

export default function HeroSection({ today, goal, available, completed }) {
  const pct = Math.min(100, Math.round((today / goal) * 100));
  const shown = useCountUp(today);
  return (
    <section className={s.hero}>
      <div className={s.heroText}>
        <h2>Earn VEs,<br /><span>Real Rewards</span></h2>
        <p>Watch short advertisements and earn VEs. Convert VEs into real cash and withdraw to your linked bank account.</p>
        <div className={s.progressHead}><strong>Daily Earnings Progress</strong><span>{shown} / {goal} VEs</span></div>
        <div className={s.track}><div className={s.fill} style={{ width: `${pct}%` }} /></div>
        <small className={s.muted}>
          {pct >= 100 ? "Daily goal reached. Great job!" : "Keep going! You're so close to your daily goal."}
        </small>
        <div className={s.heroChips}>
          <span><PlayCircle size={14} /> {available} ads available</span>
          <span><Sparkles size={14} /> {completed} completed</span>
        </div>
      </div>
      <div className={s.heroArt} aria-hidden="true">
        <div className={s.player}><PlayCircle size={64} strokeWidth={1.5} /></div>
        <div className={`${s.coin} ${s.coin1}`}><Coins size={34} /></div>
        <div className={`${s.coin} ${s.coin2}`}>VE</div>
      </div>
    </section>
  );
}
