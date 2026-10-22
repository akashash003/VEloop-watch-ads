import { Play, Check, Loader2 } from "lucide-react";
import s from "../styles/WatchAds.module.css";

/** status: available | loading | completed | disabled */
export default function WatchButton({ status, secondsLeft, onClick }) {
  const label = {
    available: "Watch Advertisement",
    loading: `Watching... ${secondsLeft}s`,
    completed: "Completed",
    disabled: "Finish current ad first",
  }[status];
  return (
    <button
      className={`${s.watchBtn} ${s[`btn_${status}`]}`}
      disabled={status !== "available"}
      onClick={onClick}
    >
      {status === "available" && <Play size={15} fill="currentColor" />}
      {status === "loading" && <Loader2 size={15} className={s.spin} />}
      {status === "completed" && <Check size={15} />}
      {label}
    </button>
  );
}
