import { PlayCircle, Coins, Banknote, ArrowRight } from "lucide-react";
import s from "../styles/WatchAds.module.css";

const STEPS = [
  { icon: PlayCircle, title: "Watch", text: "Watch short ads and complete the timer." },
  { icon: Coins, title: "Earn", text: "Earn VEs instantly after completing the ad." },
  { icon: Banknote, title: "Withdraw", text: "Convert VEs to real cash and withdraw to your bank." },
];

export default function HowItWorks() {
  return (
    <section className={s.card}>
      <h3 className={s.cardTitle}>How It Works</h3>
      <div className={s.steps}>
        {STEPS.map(({ icon: Icon, title, text }, i) => (
          <div key={title} className={s.step}>
            <span className={s.stepNo}>{i + 1}</span>
            <Icon size={28} color="var(--primary)" />
            <div><strong>{title}</strong><p>{text}</p></div>
          </div>
        ))}
        <a className={s.btnOutline} href="/wallet">View My Wallet <ArrowRight size={14} /></a>
      </div>
    </section>
  );
}
