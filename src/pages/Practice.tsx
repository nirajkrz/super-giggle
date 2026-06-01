import { useSearchParams }
from "react-router-dom";

import LessonEngine
from "../components/LessonEngine";

import {
 spanishCourse
}
from "../data/spanishCourse";

export default function Practice() {

 const [params] =
 useSearchParams();

 const lessonId =
 params.get("lesson");

 const lesson =
 spanishCourse
  .flatMap(
    unit => unit.lessons
  )
  .find(
    l => l.id === lessonId
  );

 if (!lesson) {
   return (
    <div>
      Lesson not found
    </div>
   );
 }

 return (
   <LessonEngine
     lesson={lesson}
   />
 );
}
