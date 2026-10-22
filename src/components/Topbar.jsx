import { Bell, Menu, Coins } from "lucide-react";
import { formatNumber } from "../utils/format";
import s from "../styles/WatchAds.module.css";

export default function Topbar({ balance, onMenu }) {
  return (
    <header className={s.topbar}>
      <button className={s.menuBtn} onClick={onMenu} aria-label="Open menu"><Menu size={22} /></button>
      <div className={s.topTitle}>
        <h1>Watch Ads</h1>
        <span>Watch ads and earn VEs</span>
      </div>
      <button className={s.iconBtn} aria-label="Notifications"><Bell size={18} /><i className={s.dot} /></button>
      <div className={s.balance}><Coins size={16} color="var(--gold)" /> {formatNumber(balance)} VEs</div>
      <div className={s.avatar}>AK</div>
    </header>
  );
}
