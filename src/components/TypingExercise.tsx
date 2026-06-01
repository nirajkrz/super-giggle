import {
 useState
}
from "react";

import { Exercise }
from "../../types";

interface Props {
  exercise: Exercise;
  onCorrect: () => void;
}

export default function TypingExercise({
 exercise,
 onCorrect
}: Props) {

 const [answer,setAnswer] =
 useState("");

 const verify = () => {

   if (
     answer
      .trim()
      .toLowerCase()
      ===
     exercise.answer
      .toLowerCase()
   ) {
     onCorrect();
   } else {
     alert("Incorrect");
   }
 };

 return (
  <div className="p-8">

   <h2 className="text-3xl mb-8">
     Type Translation
   </h2>

   <div
    className="
      text-4xl
      mb-8
    "
   >
     {exercise.question}
   </div>

   <input
    value={answer}
    onChange={(e)=>
      setAnswer(
        e.target.value
      )
    }
    className="
      w-full
      p-4
      bg-slate-800
      rounded-xl
    "
   />

   <button
    onClick={verify}
    className="
      mt-4
      bg-green-500
      px-6 py-3
      rounded-xl
    "
   >
      Check
   </button>

  </div>
 );
}
