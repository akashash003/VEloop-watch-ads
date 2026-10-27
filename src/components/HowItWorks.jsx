import { Fragment } from "react";
import { ArrowRight, ChevronRight } from "lucide-react";
import Reveal from "./Reveal";
import watch from "../assets/step-watch.avif";
import earn from "../assets/step-earn.avif";
import withdraw from "../assets/step-withdraw.avif";
import s from "../styles/WatchAds.module.css";

const STEPS = [
  { img: watch, title: "Watch", text: "Watch short ads and complete the timer." },
  { img: earn, title: "Earn", text: "Earn VEs instantly after completing the ad." },
  { img: withdraw, title: "Withdraw", text: "Convert VEs to real cash and withdraw to your bank." },
];

export default function HowItWorks() {
  return (
    <Reveal as="section" className={s.card}>
      <h3 className={s.cardTitle}>How It Works</h3>
      <div className={s.steps}>
        {STEPS.map(({ img, title, text }, i) => (
          <Fragment key={title}>
            <div className={s.step}>
              <span className={s.stepNo}>{i + 1}</span>
              <img src={img} alt="" width="44" height="44" />
              <div><strong>{title}</strong><p>{text}</p></div>
            </div>
            <ChevronRight className={s.stepArrow} size={20} />
          </Fragment>
        ))}
        <a className={s.btnOutline} href="/wallet">View My Wallet <ArrowRight size={14} /></a>
      </div>
    </Reveal>
  );
}
