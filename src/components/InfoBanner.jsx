import { ShieldCheck } from "lucide-react";
import s from "../styles/WatchAds.module.css";

export default function InfoBanner({ onWithdraw }) {
  return (
    <section className={s.info}>
      <div className={s.infoIcon}><ShieldCheck size={22} /></div>
      <div className={s.infoText}>
        <strong>Your VEs. Your Rewards.</strong>
        <p>Earn VEs by watching ads. Convert them into real cash and withdraw to your linked bank account once you meet the minimum withdrawal conditions.</p>
      </div>
      <button type="button" className={s.btnOutline} onClick={onWithdraw}>Withdraw VEs</button>
    </section>
  );
}
