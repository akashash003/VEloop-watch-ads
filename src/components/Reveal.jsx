import useInView from "../hooks/useInView";
import s from "../styles/WatchAds.module.css";

/** Wrapper that plays a fade-up entrance when it scrolls into view. */
export default function Reveal({ as: Tag = "div", className = "", delay = 0, style, children, ...rest }) {
  const [ref, seen] = useInView();
  return (
    <Tag
      ref={ref}
      className={`${s.reveal} ${seen ? s.in : ""} ${className}`}
      style={{ ...style, "--d": `${delay}ms` }}
      {...rest}
    >
      {children}
    </Tag>
  );
}
