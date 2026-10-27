import { ShieldCheck } from "lucide-react";
import Reveal from "./Reveal";
import s from "../styles/WatchAds.module.css";

export default function InfoBanner() {
  return (
    <Reveal as="section" className={s.info}>
      <div className={s.infoIcon}><ShieldCheck size={22} /></div>
      <div className={s.infoText}>
        <strong>Your VEs. Your Rewards.</strong>
        <p>Earn VEs by watching ads. Convert them into real cash and withdraw to your linked bank account once you meet the minimum withdrawal conditions.</p>
      </div>
      <a className={s.btnOutline} href="/watchAd-bonus">Learn More</a>
    </Reveal>
  );
}
