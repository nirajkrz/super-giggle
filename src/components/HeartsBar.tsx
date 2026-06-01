import { useProgressStore }
from "../store/progressStore";

export default function HeartsBar() {
 const hearts =
 useProgressStore(
   s => s.hearts
 );

 return (
  <div>
   {"❤️".repeat(hearts)}
  </div>
 );
}
