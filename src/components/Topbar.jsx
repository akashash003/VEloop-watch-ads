import { Bell, Menu, Coins } from "lucide-react";
import useCountUp from "../hooks/useCountUp";
import { formatNumber } from "../utils/format";
import s from "../styles/WatchAds.module.css";

export default function Topbar({ balance, onMenu, title = "Watch Ads", subtitle = "Watch ads and earn VEs" }) {
  const shown = useCountUp(balance, 700);
  return (
    <header className={s.topbar}>
      <button className={s.menuBtn} onClick={onMenu} aria-label="Open menu"><Menu size={22} /></button>
      <div className={s.topTitle}>
        <h1>{title}</h1>
        <span>{subtitle}</span>
      </div>
      <button className={s.iconBtn} aria-label="Notifications"><Bell size={18} /><i className={s.dot} /></button>
      {/* key remounts the pill whenever the balance changes, replaying the bump animation */}
      <div key={balance} className={s.balance}><Coins size={16} color="var(--gold)" /> {formatNumber(shown)} VEs</div>
      <div className={s.avatar}>SM</div>
    </header>
  );
}
