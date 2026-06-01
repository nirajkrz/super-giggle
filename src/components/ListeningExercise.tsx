import { Exercise }
from "../../types";

interface Props {
 exercise: Exercise;
 onCorrect: () => void;
}

export default function ListeningExercise({
 exercise,
 onCorrect
}: Props) {

 const playAudio = () => {

   const utterance =
   new SpeechSynthesisUtterance(
     exercise.question
   );

   utterance.lang =
     "es-ES";

   speechSynthesis.speak(
     utterance
   );
 };

 return (
  <div className="p-8">

   <h2 className="text-3xl mb-6">
     Listen
   </h2>

   <button
    onClick={playAudio}
    className="
      text-5xl
      mb-6
    "
   >
      🔊
   </button>

   <button
    onClick={onCorrect}
    className="
      bg-green-500
      px-5 py-2
      rounded-xl
    "
   >
      Continue
   </button>

  </div>
 );
}
