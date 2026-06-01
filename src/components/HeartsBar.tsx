import {
 useProgressStore
}
from "../store/useProgressStore";

export default function HeartsBar() {
 const hearts =
 useProgressStore(
   (s) => s.hearts
 );

 return (
   <div className="text-2xl">
     {Array.from({
       length: hearts
     }).map((_, i) => (
       <span key={i}>
         ❤️
       </span>
     ))}
   </div>
 );
}
