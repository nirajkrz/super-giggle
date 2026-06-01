import { useProgressStore }
from "../store/progressStore";

export default function XPBar() {

 const xp =
 useProgressStore(
   s => s.xp
 );

 const level =
 useProgressStore(
   s => s.level
 );

 const percent =
 (xp % 100);

 return (
  <div className="w-48">

   <div>
     Lvl {level}
   </div>

   <div
    className="
      h-3
      rounded-full
      bg-slate-700
    "
   >
     <div
      className="
       bg-green-500
       h-full
       rounded-full
      "
      style={{
       width: `${percent}%`
      }}
     />
   </div>

  </div>
 );
}
