import { useEffect } from "react";
import { useProgressStore } from "../store/progressStore";

export default function useDailyStreak() {

 const increment =
 useProgressStore(
   s => s.incrementStreak
 );

 useEffect(() => {

   const today =
   new Date()
   .toDateString();

   const saved =
   localStorage.getItem(
     "last-login"
   );

   if(saved !== today){

     increment();

     localStorage.setItem(
       "last-login",
       today
     );
   }

 },[]);
}
