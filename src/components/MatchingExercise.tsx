import { Exercise }
from "../../types";

interface Props {
 exercise: Exercise;
 onCorrect: () => void;
}

export default function MatchingExercise({
 exercise,
 onCorrect
}: Props) {

 return (
  <div className="p-8">

   <h2 className="text-3xl mb-4">
     Match Words
   </h2>

   <p>
     Matching activity
     implementation here.
   </p>

   <button
    onClick={onCorrect}
    className="
      mt-6
      bg-green-500
      px-5 py-2
      rounded-xl
    "
   >
      Complete
   </button>

  </div>
 );
}
