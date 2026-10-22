import { CheckCircle2 } from "lucide-react";
import s from "../styles/WatchAds.module.css";

export default function RewardModal({ ad, onClose }) {
  if (!ad) return null;
  return (
    <div className={s.modalWrap} onClick={onClose}>
      <div className={s.modal} onClick={(e) => e.stopPropagation()} role="dialog" aria-modal="true">
        <div className={s.burst}><CheckCircle2 size={56} /></div>
        <h3>Reward earned!</h3>
        <div className={s.bigReward}>+{ad.reward} VEs</div>
        <p>Thanks for watching {ad.brand}. Your VEs were added to your balance.</p>
        <button className={s.btnPrimary} onClick={onClose}>Continue earning</button>
      </div>
    </div>
  );
}
