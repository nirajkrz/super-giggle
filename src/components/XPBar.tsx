import {
 useProgressStore
}
from "../store/useProgressStore";

export default function XPBar() {
 const xp =
 useProgressStore(
   (s) => s.xp
 );

 const level =
 useProgressStore(
   (s) => s.level
 );

 return (
   <div className="w-full">
     <div className="mb-2">
       Level {level}
     </div>

     <div className="h-4 bg-slate-700 rounded-full">
       <div
         className="
           bg-green-500
           h-4
           rounded-full
         "
         style={{
           width:
             `${xp % 100}%`
         }}
       />
     </div>
   </div>
 );
}
