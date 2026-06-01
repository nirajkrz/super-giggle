import {
 Link
} from "react-router-dom";

export default function Home() {
 return (
  <div className="p-10">

   <h1
    className="
      text-5xl
      font-bold
      text-green-400
    "
   >
    Learn Languages
   </h1>

   <p className="mt-4">
     Duolingo-style React App
   </p>

   <Link
    to="/learn"
    className="
      mt-6
      inline-block
      px-6
      py-3
      bg-green-500
      rounded-xl
    "
   >
      Start Learning
   </Link>
  </div>
 );
}
