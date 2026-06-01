import { spanishCourse } from "../data/spanishCourse";
import { useNavigate } from "react-router-dom";
import { useProgressStore } from "../store/useProgressStore";

export default function SkillTree() {
  const navigate = useNavigate();

  const completed =
    useProgressStore(
      (s) => s.completedLessons
    );

  return (
    <div className="max-w-3xl mx-auto p-6">

      <h2 className="text-3xl font-bold mb-8">
        Learning Path
      </h2>

      <div className="flex flex-col gap-8">

        {spanishCourse.map((unit) => (
          <div
            key={unit.id}
            className="
              bg-slate-800
              rounded-2xl
              p-6
            "
          >
            <h3
              className="
                text-xl
                font-bold
                mb-4
              "
            >
              {unit.title}
            </h3>

            <div className="flex flex-wrap gap-4">

              {unit.lessons.map(
                (lesson) => {
                  const done =
                    completed.includes(
                      lesson.id
                    );

                  return (
                    <button
                      key={lesson.id}
                      onClick={() =>
                        navigate(
                          `/practice?lesson=${lesson.id}`
                        )
                      }
                      className={`
                        w-24 h-24 rounded-full
                        font-bold
                        transition-all

                        ${
                          done
                            ? "bg-green-500"
                            : "bg-blue-500"
                        }
                      `}
                    >
                      {lesson.title}
                    </button>
                  );
                }
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
