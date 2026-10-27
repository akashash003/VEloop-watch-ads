import { Clock, Zap } from "lucide-react";
import WatchButton from "./WatchButton";
import s from "../styles/WatchAds.module.css";

export default function AdCard({ ad, index, isActive, secondsLeft, progress, busy, onWatch }) {
  const done = ad.status === "completed";
  const btnStatus = done ? "completed" : isActive ? "loading" : busy ? "disabled" : "available";

  // Cursor-following spotlight on the card
  function onMove(e) {
    const r = e.currentTarget.getBoundingClientRect();
    e.currentTarget.style.setProperty("--mx", `${e.clientX - r.left}px`);
    e.currentTarget.style.setProperty("--my", `${e.clientY - r.top}px`);
  }

  return (
    <article
      className={`${s.adCard} ${done ? s.adDone : ""} ${isActive ? s.adActive : ""}`}
      style={{ "--i": index }}
      onMouseMove={onMove}
    >
      {ad.limitedTime && !done && <span className={s.limited}><Zap size={12} /> Limited time bonus</span>}
      <div className={s.adTop}>
        <div className={s.adArt}>
          <img src={ad.image} alt={`${ad.brand} advertisement`} loading="lazy" width="112" height="112" />
        </div>
        <div className={s.adBody}>
          <h3>{ad.brand}</h3>
          <p>{ad.tagline}</p>
          <span className={s.duration}><Clock size={13} /> {ad.duration} sec</span>
          <div className={s.adFoot}>
            <span className={`${s.status} ${done ? s.statusDone : ""}`}>
              <i /> {done ? "Watched" : isActive ? "In progress" : "Available"}
            </span>
            <span className={s.reward}>+{ad.reward} VEs</span>
          </div>
        </div>
      </div>
      <WatchButton status={btnStatus} secondsLeft={secondsLeft} progress={progress} onClick={() => onWatch(ad.id)} />
    </article>
  );
}
