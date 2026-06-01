import { Exercise }
from "../../types";

interface Props {
 exercise: Exercise;
 onCorrect: () => void;
}

export default function SpeakingExercise({
 exercise,
 onCorrect
}: Props) {

 const startRecording = () => {

   const SpeechRecognition =
   (
     window as any
   ).SpeechRecognition ||
   (
     window as any
   ).webkitSpeechRecognition;

   if (!SpeechRecognition) {
     alert(
       "Speech API unsupported"
     );
     return;
   }

   const recognition =
   new SpeechRecognition();

   recognition.lang =
   "es-ES";

   recognition.start();

   recognition.onresult =
   (event:any) => {

     const spoken =
      event.results[0][0]
      .transcript
      .toLowerCase();

     if (
       spoken.includes(
         exercise.answer
          .toLowerCase()
       )
     ) {
       onCorrect();
     }
   };
 };

 return (
  <div className="p-8">

   <h2 className="text-3xl mb-6">
      Speak:
   </h2>

   <div
    className="
      text-4xl
      mb-6
    "
   >
     {exercise.answer}
   </div>

   <button
    onClick={
      startRecording
    }
    className="
      bg-blue-500
      px-6 py-3
      rounded-xl
    "
   >
      🎤 Start
   </button>

  </div>
 );
}
