import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles/theme.css";
import "./index.css";
import WatchAds from "./pages/WatchAds.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <WatchAds />
  </StrictMode>
);
