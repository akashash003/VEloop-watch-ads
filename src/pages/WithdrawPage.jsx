import { useState } from "react";
import { ArrowDownToLine, Wallet, ShieldCheck, Clock3, CircleCheck, Info } from "lucide-react";
import s from "../styles/WatchAds.module.css";
import { formatNumber } from "../utils/format";

export default function WithdrawPage({ balance, onToast }) {
  const [amount, setAmount] = useState("500");
  const [method, setMethod] = useState("upi");
  const [upi, setUpi] = useState("");
  const [account, setAccount] = useState("");
  const [ifsc, setIfsc] = useState("");
  const [requests, setRequests] = useState([]);
  const [error, setError] = useState("");
  const numericAmount = Number(amount);

  function submit(e) {
    e.preventDefault();
    setError("");
    if (!Number.isFinite(numericAmount) || numericAmount < 500) return setError("Minimum withdrawal is 500 VEs.");
    if (numericAmount > balance) return setError("Amount exceeds your available balance.");
    if (method === "upi" && !/^[\w.-]+@[\w.-]+$/.test(upi.trim())) return setError("Enter a valid UPI ID (example: name@bank).");
    if (method === "bank" && (!account.trim() || !/^[A-Za-z]{4}0[A-Za-z0-9]{6}$/.test(ifsc.trim()))) return setError("Enter your account number and a valid IFSC code.");
    setRequests((list) => [{ id: Date.now(), amount: numericAmount, method: method === "upi" ? `UPI · ${upi.trim()}` : `Bank transfer · ${account.trim().slice(-4).padStart(account.trim().length, "•")}`, date: new Date().toLocaleDateString("en-IN"), status: "Pending review" }, ...list]);
    onToast?.("Withdrawal request submitted in demo mode.");
    setAmount("500");
  }

  return <section className={s.withdrawPage}>
    <div className={s.withdrawIntro}><div><span className={s.eyebrow}>YOUR REWARDS WALLET</span><h2>Withdraw your earnings</h2><p>Choose a payout method and submit a withdrawal request.</p></div><div className={s.withdrawIcon}><ArrowDownToLine size={28} /></div></div>
    <div className={s.withdrawBalance}><div className={s.withdrawBalanceIcon}><Wallet size={22} /></div><div><span>Available balance</span><strong>{formatNumber(balance)} <small>VEs</small></strong><p>Minimum withdrawal: 500 VEs</p></div><div className={s.balancePill}><CircleCheck size={15}/> Available</div></div>
    <div className={s.withdrawGrid}>
      <form className={s.withdrawForm} onSubmit={submit}>
        <h3>Withdrawal details</h3><p className={s.withdrawMuted}>Funds are simulated for this demo project.</p>
        <label className={s.fieldLabel} htmlFor="withdrawAmount">Amount (VEs)</label><div className={s.amountInputWrap}><input id="withdrawAmount" type="number" min="500" max={balance} step="1" value={amount} onChange={(e) => setAmount(e.target.value)} required/><button type="button" onClick={() => setAmount(String(balance))}>Max</button></div>
        <div className={s.quickAmounts}>{[500, 1000, 2500, 5000].filter((n) => n <= balance).map((n) => <button type="button" key={n} className={Number(amount) === n ? s.quickAmountActive : ""} onClick={() => setAmount(String(n))}>{n.toLocaleString("en-IN")}</button>)}</div>
        <label className={s.fieldLabel}>Payout method</label><div className={s.methodOptions}><button type="button" className={`${s.methodOption} ${method === "upi" ? s.methodSelected : ""}`} onClick={() => setMethod("upi")}><span className={s.methodMark}>UPI</span><span><strong>UPI ID</strong><small>Fast and convenient</small></span><span className={s.methodRadio}/></button><button type="button" className={`${s.methodOption} ${method === "bank" ? s.methodSelected : ""}`} onClick={() => setMethod("bank")}><span className={s.methodMark}>₹</span><span><strong>Bank transfer</strong><small>Direct to your account</small></span><span className={s.methodRadio}/></button></div>
        {method === "upi" ? <><label className={s.fieldLabel} htmlFor="upiId">UPI ID</label><input className={s.textField} id="upiId" placeholder="yourname@bank" value={upi} onChange={(e) => setUpi(e.target.value)} required/></> : <><label className={s.fieldLabel} htmlFor="accountNumber">Account number</label><input className={s.textField} id="accountNumber" placeholder="Enter account number" value={account} onChange={(e) => setAccount(e.target.value)} required/><label className={s.fieldLabel} htmlFor="ifscCode">IFSC code</label><input className={s.textField} id="ifscCode" placeholder="ABCD0123456" value={ifsc} onChange={(e) => setIfsc(e.target.value.toUpperCase())} required/></>}
        {error && <div className={s.withdrawError} role="alert">{error}</div>}
        <div className={s.withdrawSummary}><span>Requested amount</span><strong>{Number.isFinite(numericAmount) && numericAmount > 0 ? formatNumber(numericAmount) : "0"} VEs</strong><span>Processing fee</span><strong>0 VEs</strong></div>
        <button className={s.submitWithdraw} type="submit"><ArrowDownToLine size={17}/> Submit withdrawal request</button>
        <p className={s.demoNotice}><Info size={15}/> Demo only: no real money is transferred.</p>
      </form>
      <aside className={s.withdrawAside}><div className={s.infoCard}><div className={s.infoCardIcon}><Clock3 size={19}/></div><h3>How it works</h3><ol><li><span>1</span><div><strong>Submit request</strong><p>Choose your amount and payout details.</p></div></li><li><span>2</span><div><strong>Review in progress</strong><p>Your request appears in the history below.</p></div></li><li><span>3</span><div><strong>Receive payout</strong><p>Real payouts require a connected payment backend.</p></div></li></ol></div><div className={s.securityCard}><ShieldCheck size={21}/><div><strong>Your details stay in this demo</strong><p>This frontend does not send or store your payout information on a server.</p></div></div></aside>
    </div>
    <div className={s.withdrawHistory}><div className={s.historyHeading}><div><h3>Withdrawal history</h3><p>Recent requests made in this session</p></div><span>{requests.length} request{requests.length === 1 ? "" : "s"}</span></div>{requests.length ? <div className={s.requestList}>{requests.map((request) => <div className={s.requestRow} key={request.id}><div className={s.requestBadge}><ArrowDownToLine size={18}/></div><div className={s.requestDetails}><strong>{request.method}</strong><span>{request.date} · Request #{String(request.id).slice(-6)}</span></div><div className={s.requestAmount}>−{formatNumber(request.amount)} VEs</div><span className={s.pendingStatus}>{request.status}</span></div>)}</div> : <div className={s.emptyHistory}><div><ArrowDownToLine size={20}/></div><strong>No withdrawal requests yet</strong><p>Your submitted requests will appear here.</p></div>}</div>
  </section>;
}
