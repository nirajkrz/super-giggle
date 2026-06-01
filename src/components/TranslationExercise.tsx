import { Exercise }
from "../../types";

interface Props {
  exercise: Exercise;
  onCorrect: () => void;
}

export default function TranslationExercise({
  exercise,
  onCorrect
}: Props) {

  const verify = (
    answer: string
  ) => {

    if (
      answer ===
      exercise.answer
    ) {
      onCorrect();
    } else {
      alert("Incorrect");
    }
  };

  return (
    <div className="p-8">

      <h2
        className="
          text-3xl
          font-bold
          mb-8
        "
      >
        Translate:
      </h2>

      <div
        className="
          text-4xl
          mb-8
        "
      >
        {exercise.question}
      </div>

      <div
        className="
          grid
          grid-cols-2
          gap-4
        "
      >
        {exercise.options?.map(
          (option) => (
            <button
              key={option}
              onClick={() =>
                verify(option)
              }
              className="
                bg-slate-700
                p-4
                rounded-xl
              "
            >
              {option}
            </button>
          )
        )}
      </div>
    </div>
  );
}
