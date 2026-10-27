import useCountUp from "../hooks/useCountUp";
import Reveal from "./Reveal";
import { formatNumber } from "../utils/format";
import s from "../styles/WatchAds.module.css";

export default function StatCard({ icon: Icon, label, value, unit, hint, color, delay = 0 }) {
  const shown = useCountUp(value);
  return (
    <Reveal className={s.stat} delay={delay}>
      <div className={s.statIcon} style={{ background: `${color}22`, color }}><Icon size={20} /></div>
      <div className={s.statBody}>
        <small className={s.muted}>{label}</small>
        <div className={s.statValue}>{formatNumber(shown)} {unit && <span>{unit}</span>}</div>
        <small style={{ color }}>{hint}</small>
      </div>
    </Reveal>
  );
}
