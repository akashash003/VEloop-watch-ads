import { useState } from "react";
import { Play, Check, Loader2 } from "lucide-react";
import s from "../styles/WatchAds.module.css";

/** status: available | loading | completed | disabled. progress: 0..1 while loading. */
export default function WatchButton({ status, secondsLeft, progress = 0, onClick }) {
  const [ripples, setRipples] = useState([]);
  const label = {
    available: "Watch Advertisement",
    loading: `Watching... ${secondsLeft}s`,
    completed: "Completed",
    disabled: "Finish current ad first",
  }[status];

  function handleClick(e) {
    const r = e.currentTarget.getBoundingClientRect();
    const id = Date.now();
    setRipples((list) => [...list, { id, x: e.clientX - r.left, y: e.clientY - r.top }]);
    setTimeout(() => setRipples((list) => list.filter((i) => i.id !== id)), 650);
    onClick();
  }

  return (
    <button className={`${s.watchBtn} ${s[`btn_${status}`]}`} disabled={status !== "available"} onClick={handleClick}>
      {status === "loading" && <span className={s.btnFill} style={{ width: `${progress * 100}%` }} />}
      {ripples.map((r) => <span key={r.id} className={s.ripple} style={{ left: r.x, top: r.y }} />)}
      <span className={s.btnLabel}>
        {status === "available" && <Play size={15} fill="currentColor" />}
        {status === "loading" && <Loader2 size={15} className={s.spin} />}
        {status === "completed" && <Check size={15} />}
        {label}
      </span>
    </button>
  );
}
