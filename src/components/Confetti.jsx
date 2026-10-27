import { useMemo } from "react";
import s from "../styles/WatchAds.module.css";

const COLORS = ["#7c5cff", "#ffb53d", "#34d399", "#38bdf8", "#f472b6"];

/** Small CSS-only confetti burst used by the reward modal. */
export default function Confetti({ count = 36 }) {
  const pieces = useMemo(
    () =>
      Array.from({ length: count }, (_, i) => ({
        "--x": `${Math.round((Math.random() - 0.5) * 340)}px`,
        "--y": `${-Math.round(60 + Math.random() * 160)}px`,
        "--r": `${Math.round(Math.random() * 720 - 360)}deg`,
        "--c": COLORS[i % COLORS.length],
        "--dl": `${Math.round(Math.random() * 150)}ms`,
      })),
    [count]
  );
  return (
    <div className={s.confetti} aria-hidden="true">
      {pieces.map((style, i) => <i key={i} style={style} />)}
    </div>
  );
}
