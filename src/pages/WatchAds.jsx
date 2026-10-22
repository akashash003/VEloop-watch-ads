import { useEffect, useState } from "react";
import { Wallet, Coins, PlayCircle, ListChecks } from "lucide-react";
import Sidebar from "../components/Sidebar";
import Topbar from "../components/Topbar";
import HeroSection from "../components/HeroSection";
import StatCard from "../components/StatCard";
import InfoBanner from "../components/InfoBanner";
import AdsList from "../components/AdsList";
import RewardModal from "../components/RewardModal";
import { DailyStreak, RecentEarnings, WeeklyEarnings } from "../components/InsightCards";
import HowItWorks from "../components/HowItWorks";
import { initialStats, initialAds, initialRecent } from "../data/watchAdsData";
import s from "../styles/WatchAds.module.css";

const DEMO_SPEED = 10; // timers run 10x faster so the demo is quick to test

export default function WatchAds() {
  const [loading, setLoading] = useState(true);
  const [ads, setAds] = useState(initialAds);
  const [stats, setStats] = useState(initialStats);
  const [recent, setRecent] = useState(initialRecent);
  const [active, setActive] = useState(null); // { id, left }
  const [reward, setReward] = useState(null);
  const [menu, setMenu] = useState(false);
  const [withdrawOpen, setWithdrawOpen] = useState(false);

  // Fake network delay to show loading skeletons
  useEffect(() => {
    const t = setTimeout(() => setLoading(false), 1200);
    return () => clearTimeout(t);
  }, []);

  // Countdown for the ad being watched
  useEffect(() => {
    if (!active) return;
    if (active.left <= 0) {
      completeAd(active.id);
      return;
    }
    const t = setTimeout(() => setActive((a) => ({ ...a, left: a.left - 1 })), 1000);
    return () => clearTimeout(t);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [active]);

  function startAd(id) {
    if (active) return;
    const ad = ads.find((a) => a.id === id);
    setActive({ id, left: Math.ceil(ad.duration / DEMO_SPEED) });
  }

  function completeAd(id) {
    const ad = ads.find((a) => a.id === id);
    setAds((list) => list.map((a) => (a.id === id ? { ...a, status: "completed" } : a)));
    setStats((st) => ({
      ...st,
      todayEarnings: st.todayEarnings + ad.reward,
      lifetimeEarnings: st.lifetimeEarnings + ad.reward,
      weeklyEarnings: st.weeklyEarnings + ad.reward,
      adsWatchedToday: st.adsWatchedToday + 1,
      remainingAds: Math.max(0, st.remainingAds - 1),
    }));
    setRecent((r) => [{ brand: ad.brand, reward: ad.reward, time: "Just now" }, ...r]);
    setReward(ad);
    setActive(null);
  }

  function refreshAds() {
    setLoading(true);
    setAds(initialAds.map((a) => ({ ...a }))); // demo: bring ads back
    setTimeout(() => setLoading(false), 900);
  }

  const pending = ads.filter((a) => a.status !== "completed").length;

  return (
    <div className={s.app}>
      <Sidebar open={menu} onClose={() => setMenu(false)} />
      <main className={s.main}>
        <Topbar balance={stats.lifetimeEarnings} onMenu={() => setMenu(true)} />
        <HeroSection today={stats.todayEarnings} goal={stats.dailyGoal} available={pending} completed={stats.adsWatchedToday} />

        <div className={s.statsGrid}>
          <StatCard icon={Wallet} label="Today's Earnings" value={stats.todayEarnings} unit="VEs" hint="+12% vs yesterday" color="#34d399" />
          <StatCard icon={Coins} label="Lifetime Earnings" value={stats.lifetimeEarnings} unit="VEs" hint="All time" color="#ffb53d" />
          <StatCard icon={PlayCircle} label="Ads Watched Today" value={stats.adsWatchedToday} hint="+2 vs yesterday" color="#7c5cff" />
          <StatCard icon={ListChecks} label="Remaining Ads" value={stats.remainingAds} hint="Start watching now!" color="#38bdf8" />
        </div>

        <InfoBanner onWithdraw={() => setWithdrawOpen(true)} />
        <AdsList ads={ads} loading={loading} active={active} onWatch={startAd} onRefresh={refreshAds} />

        <div className={s.insights}>
          <DailyStreak days={stats.streakDays} />
          <RecentEarnings items={recent} />
          <WeeklyEarnings total={stats.weeklyEarnings} />
        </div>
        <HowItWorks />
        <footer className={s.footer}>© 2026 VELOOP Rewards. All rights reserved.</footer>
      </main>
      <RewardModal ad={reward} onClose={() => setReward(null)} />
      {withdrawOpen && (
        <div className={s.modalWrap} onClick={() => setWithdrawOpen(false)}>
          <section className={s.modal} onClick={(event) => event.stopPropagation()} role="dialog" aria-modal="true" aria-labelledby="withdraw-title">
            <button type="button" className={s.withdrawClose} onClick={() => setWithdrawOpen(false)} aria-label="Close withdrawal details">×</button>
            <div className={s.burst}><Wallet size={42} /></div>
            <h3 id="withdraw-title">Withdraw your VEs</h3>
            <p>Your earned VEs can be converted into real cash and sent to your linked bank account once the minimum withdrawal conditions are met.</p>
            <div className={s.withdrawDetails}>
              <div><span>Available VE balance</span><strong>{stats.lifetimeEarnings.toLocaleString()} VEs</strong></div>
              <div><span>Withdrawal method</span><strong>Linked bank account</strong></div>
              <div><span>Eligibility</span><strong>Minimum conditions apply</strong></div>
            </div>
            <p className={s.withdrawNote}>Demo interface only. No real withdrawal or bank transfer is processed.</p>
            <button type="button" className={s.btnPrimary} onClick={() => setWithdrawOpen(false)}>Got it</button>
          </section>
        </div>
      )}
    </div>
  );
}
