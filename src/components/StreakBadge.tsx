import { useProgressStore }
from "../store/progressStore";

export default function StreakBadge() {

 const streak =
 useProgressStore(
  s => s.streak
 );

 return (
  <div>
   🔥 {streak}
  </div>
 );
}
