import {
 Routes,
 Route
} from "react-router-dom";

import Home from "../pages/Home";
import Learn from "../pages/Learn";
import Profile from "../pages/Profile";
import Practice from "../pages/Practice";
import Leaderboard from "../pages/Leaderboard";

export default function AppRoutes() {
 return (
   <Routes>
      <Route path="/" element={<Home />} />

      <Route path="/learn" element={<Learn />} />

      <Route path="/practice" element={<Practice />} />

      <Route path="/profile" element={<Profile />} />

      <Route
        path="/leaderboard"
        element={<Leaderboard />}
      />
   </Routes>
 );
}
