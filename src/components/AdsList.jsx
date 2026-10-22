import { RefreshCw, PartyPopper } from "lucide-react";
import AdCard from "./AdCard";
import s from "../styles/WatchAds.module.css";

export default function AdsList({ ads, loading, active, onWatch, onRefresh }) {
  const pending = ads.filter((a) => a.status !== "completed").length;
  return (
    <section>
      <div className={s.sectionHead}>
        <h2>Available Ads <span className={s.pill}>{pending} ads available</span></h2>
        <button className={s.ghostBtn} onClick={onRefresh}><RefreshCw size={14} /> Refresh</button>
      </div>

      {loading ? (
        <div className={s.grid}>
          {Array.from({ length: 6 }).map((_, i) => <div key={i} className={s.skeleton} />)}
        </div>
      ) : pending === 0 ? (
        <div className={s.empty}>
          <PartyPopper size={40} color="var(--gold)" />
          <h3>No ads available right now</h3>
          <p>You have watched every ad for now. Check back later for new advertisements.</p>
          <button className={s.btnPrimary} onClick={onRefresh}>Check for new ads</button>
        </div>
      ) : (
        <div className={s.grid}>
          {ads.map((ad) => (
            <AdCard
              key={ad.id}
              ad={ad}
              isActive={active?.id === ad.id}
              secondsLeft={active?.left}
              busy={active !== null && active.id !== ad.id}
              onWatch={onWatch}
            />
          ))}
        </div>
      )}
    </section>
  );
}
