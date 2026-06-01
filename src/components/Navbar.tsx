import { Link } from "react-router-dom";
import HeartsBar from "./HeartsBar";
import XPBar from "./XPBar";
import StreakBadge from "./StreakBadge";

export default function Navbar() {
  return (
    <nav
      className="
      bg-slate-800
      p-4
      border-b
      border-slate-700
    "
    >
      <div
        className="
        max-w-6xl
        mx-auto
        flex
        justify-between
        items-center
      "
      >
        <div className="flex gap-6">
          <Link to="/">Home</Link>
          <Link to="/learn">Learn</Link>
          <Link to="/profile">Profile</Link>
          <Link to="/leaderboard">
            Leaderboard
          </Link>
        </div>

        <div className="flex gap-6 items-center">
          <HeartsBar />
          <StreakBadge />
          <XPBar />
        </div>
      </div>
    </nav>
  );
}
