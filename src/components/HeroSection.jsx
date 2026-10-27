import { Sparkles, PlayCircle } from "lucide-react";
import useCountUp from "../hooks/useCountUp";
import Reveal from "./Reveal";
import heroArt from "../assets/hero-art.avif";
import s from "../styles/WatchAds.module.css";

export default function HeroSection({ today, goal, available, completed }) {
  const pct = Math.min(100, Math.round((today / goal) * 100));
  const shown = useCountUp(today);

  // Pointer parallax for the hero artwork
  function onMove(e) {
    const r = e.currentTarget.getBoundingClientRect();
    e.currentTarget.style.setProperty("--px", ((e.clientX - r.left) / r.width - 0.5).toFixed(3));
    e.currentTarget.style.setProperty("--py", ((e.clientY - r.top) / r.height - 0.5).toFixed(3));
  }

  return (
    <Reveal as="section" className={s.hero} onMouseMove={onMove}>
      <div className={s.heroText}>
        <h2>Earn VEs,<br /><span>Real Rewards</span></h2>
        <p>Watch short advertisements and earn VEs. Convert VEs into real cash and withdraw to your linked bank account.</p>
        <div className={s.progressHead}><strong>Daily Earnings Progress</strong><span>{shown} / {goal} VEs</span></div>
        <div className={s.track} role="progressbar" aria-valuenow={pct} aria-valuemin={0} aria-valuemax={100}>
          <div className={s.fill} style={{ width: `${pct}%` }} />
        </div>
        <small className={s.muted}>
          {pct >= 100 ? "Daily goal reached. Great job!" : `${goal - today} VEs to go. You're so close to your daily goal.`}
        </small>
        <div className={s.heroChips}>
          <span><PlayCircle size={14} /> {available} ads available</span>
          <span><Sparkles size={14} /> {completed} completed</span>
        </div>
      </div>
      <div className={s.heroArt}>
        <img src={heroArt} alt="" width="393" height="228" />
      </div>
    </Reveal>
  );
}
