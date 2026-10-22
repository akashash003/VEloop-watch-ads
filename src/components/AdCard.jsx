import { Wallet, Music, Car, ShieldCheck, Gift, Footprints, Clock, Zap } from "lucide-react";
import WatchButton from "./WatchButton";
import s from "../styles/WatchAds.module.css";

const ICONS = { wallet: Wallet, shoe: Footprints, music: Music, car: Car, shield: ShieldCheck, gift: Gift };

export default function AdCard({ ad, isActive, secondsLeft, busy, onWatch }) {
  const Icon = ICONS[ad.icon];
  const done = ad.status === "completed";
  const btnStatus = done ? "completed" : isActive ? "loading" : busy ? "disabled" : "available";
  return (
    <article className={`${s.adCard} ${done ? s.adDone : ""}`}>
      {ad.limitedTime && !done && <span className={s.limited}><Zap size={12} /> Limited time bonus</span>}
      <div className={s.adTop}>
        <div className={s.adArt} style={{ background: `linear-gradient(145deg, ${ad.gradient[0]}, ${ad.gradient[1]})` }}>
          <span className={s.sponsored}>Sponsored</span>
          <Icon size={44} strokeWidth={1.5} />
        </div>
        <div className={s.adBody}>
          <h3>{ad.brand}</h3>
          <p>{ad.tagline}</p>
          <div className={s.adMeta}>
            <span><Clock size={13} /> {ad.duration} sec</span>
            <span className={s.reward}>+{ad.reward} VEs</span>
          </div>
          <span className={`${s.status} ${done ? s.statusDone : ""}`}>
            <i /> {done ? "Watched" : isActive ? "In progress" : "Available"}
          </span>
        </div>
      </div>
      <WatchButton status={btnStatus} secondsLeft={secondsLeft} onClick={() => onWatch(ad.id)} />
    </article>
  );
}
