import { useEffect, useState } from "react";
import { RefreshCw, PartyPopper, Inbox } from "lucide-react";
import AdCard from "./AdCard";
import s from "../styles/WatchAds.module.css";

const FILTERS = [
  { key: "all", label: "All" },
  { key: "available", label: "Available" },
  { key: "completed", label: "Completed" },
];
const REFRESH_SECONDS = 45;
const mmss = (n) => `00:${String(n).padStart(2, "0")}`;

export default function AdsList({ ads, loading, active, onWatch, onRefresh }) {
  const [filter, setFilter] = useState("all");
  const [sort, setSort] = useState("default");
  const [left, setLeft] = useState(REFRESH_SECONDS);

  // "Auto refresh in 00:45" countdown (visual only, no data changes)
  useEffect(() => {
    const t = setInterval(() => setLeft((l) => (l <= 1 ? REFRESH_SECONDS : l - 1)), 1000);
    return () => clearInterval(t);
  }, []);

  const pending = ads.filter((a) => a.status !== "completed").length;
  const done = ads.length - pending;
  const counts = { all: ads.length, available: pending, completed: done };

  const visible = ads
    .filter((a) => filter === "all" || (filter === "completed") === (a.status === "completed"))
    .sort((a, b) =>
      sort === "reward" ? b.reward - a.reward : sort === "time" ? a.duration - b.duration : a.id - b.id
    );

  const empty =
    pending === 0 && filter !== "completed"
      ? { icon: PartyPopper, title: "No ads available right now", text: "You have watched every ad for now. Check back later for new advertisements.", cta: "Check for new ads" }
      : { icon: Inbox, title: "Nothing here yet", text: "Watch an ad and it will show up in this list.", cta: null };

  return (
    <section>
      <div className={s.sectionHead}>
        <h2>Available Ads <span className={s.pill}>{pending} ads available</span></h2>
        <button className={s.ghostBtn} onClick={onRefresh}>
          <RefreshCw size={14} /> Auto refresh in {mmss(left)}
        </button>
      </div>

      <div className={s.toolbar}>
        <div className={s.tabs} role="tablist">
          {FILTERS.map(({ key, label }) => (
            <button key={key} role="tab" aria-selected={filter === key} className={`${s.tab} ${filter === key ? s.tabOn : ""}`} onClick={() => setFilter(key)}>
              {label} <b>{counts[key]}</b>
            </button>
          ))}
        </div>
        <label className={s.sort}>
          Sort by
          <select value={sort} onChange={(e) => setSort(e.target.value)}>
            <option value="default">Recommended</option>
            <option value="reward">Highest reward</option>
            <option value="time">Shortest time</option>
          </select>
        </label>
      </div>

      {loading ? (
        <div className={s.grid}>
          {Array.from({ length: 6 }).map((_, i) => <div key={i} className={s.skeleton} />)}
        </div>
      ) : visible.length === 0 ? (
        <div className={s.empty}>
          <empty.icon size={40} color="var(--gold)" />
          <h3>{empty.title}</h3>
          <p>{empty.text}</p>
          {empty.cta && <button className={s.btnPrimary} onClick={onRefresh}>{empty.cta}</button>}
        </div>
      ) : (
        <div className={s.grid}>
          {visible.map((ad, i) => (
            <AdCard
              key={ad.id}
              ad={ad}
              index={i}
              isActive={active?.id === ad.id}
              secondsLeft={active?.left}
              progress={active ? (active.total - active.left) / active.total : 0}
              busy={active !== null && active.id !== ad.id}
              onWatch={onWatch}
            />
          ))}
        </div>
      )}
    </section>
  );
}
