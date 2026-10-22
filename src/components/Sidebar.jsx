import { LayoutDashboard, PlayCircle, Gift, Wallet, History, User, Settings, LifeBuoy, Crown } from "lucide-react";
import s from "../styles/WatchAds.module.css";

const NAV = [
  { label: "Dashboard", icon: LayoutDashboard },
  { label: "Watch Ads", icon: PlayCircle, active: true },
  { label: "Rewards", icon: Gift },
  { label: "Wallet", icon: Wallet },
  { label: "History", icon: History },
  { label: "Profile", icon: User },
  { label: "Settings", icon: Settings },
  { label: "Help & Support", icon: LifeBuoy },
];

export default function Sidebar({ open, onClose }) {
  return (
    <>
      {open && <div className={s.backdrop} onClick={onClose} />}
      <aside className={`${s.sidebar} ${open ? s.sidebarOpen : ""}`}>
        <div className={s.logo}>
          <span className={s.logoMark}>V</span> VELOOP
        </div>
        <nav className={s.nav}>
          {NAV.map(({ label, icon: Icon, active }) => (
            <button key={label} className={`${s.navItem} ${active ? s.navActive : ""}`} onClick={onClose}>
              <Icon size={18} /> {label}
            </button>
          ))}
        </nav>
        <div className={s.premium}>
          <div className={s.premiumTitle}><Crown size={16} color="var(--gold)" /> Go Premium</div>
          <p>Higher earnings and exclusive offers.</p>
          <button className={s.btnPrimary}>Upgrade Now</button>
        </div>
      </aside>
    </>
  );
}
