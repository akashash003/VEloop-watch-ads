import { Trophy } from "lucide-react";
import s from "../styles/WatchAds.module.css";

export default function Toast({ message }) {
  if (!message) return null;
  return (
    <div className={s.toast} role="status">
      <Trophy size={18} color="var(--gold)" /> {message}
    </div>
  );
}
