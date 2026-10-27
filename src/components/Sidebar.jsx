import { LayoutDashboard, PlayCircle, Gift, Wallet, History, User, Settings, LifeBuoy, Crown, Banknote } from "lucide-react";
import logoMark from "../assets/logo-mark.avif";
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

export default function Sidebar({ open, onClose, page, onNavigate }) {
  return (
    <>
      {open && <div className={s.backdrop} onClick={onClose} />}
      <aside className={`${s.sidebar} ${open ? s.sidebarOpen : ""}`}>
        <div className={s.logo}>
          <img className={s.logoMark} src={logoMark} alt="" width="32" height="32" /> VELOOP
        </div>
        <nav className={s.nav} aria-label="Main navigation">
          {NAV.map(({ label, icon: Icon }) => (
            <button key={label} className={`${s.navItem} ${page === "watch" && label === "Watch Ads" ? s.navActive : ""}`} onClick={() => { onNavigate(label === "Watch Ads" ? "watch" : label === "Wallet" || label === "Rewards" ? "withdraw" : label === "Dashboard" ? "watch" : "watch"); onClose(); }}>
              <Icon size={18} /> {label}
            </button>
          ))}
          <button className={`${s.navItem} ${page === "withdraw" ? s.navActive : ""}`} onClick={() => { onNavigate("withdraw"); onClose(); }}>
            <Banknote size={18} /> Withdraw
          </button>
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
