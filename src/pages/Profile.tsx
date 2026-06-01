import { useProgressStore }
from "../store/progressStore";

export default function Profile() {

 const {
  xp,
  level,
  gems,
  streak
 } = useProgressStore();

 return (

 <div className="p-8">

  <h1 className="text-4xl">
    Profile
  </h1>

  <div className="mt-8">

   <p>Level: {level}</p>
   <p>XP: {xp}</p>
   <p>Gems: {gems}</p>
   <p>Streak: {streak}</p>

  </div>

 </div>
 );
}
