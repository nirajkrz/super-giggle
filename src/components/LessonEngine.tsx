import { useState } from "react";
import { Lesson } from "../types";

import TranslationExercise from
"../features/lessons/TranslationExercise";

import TypingExercise from
"../features/lessons/TypingExercise";

import MatchingExercise from
"../features/lessons/MatchingExercise";

import ListeningExercise from
"../features/lessons/ListeningExercise";

import SpeakingExercise from
"../features/lessons/SpeakingExercise";

import { useProgressStore }
from "../store/useProgressStore";

interface Props {
  lesson: Lesson;
}

export default function LessonEngine({
  lesson
}: Props) {

  const [index, setIndex] =
    useState(0);

  const addXP =
    useProgressStore(
      (s) => s.addXP
    );

  const completeLesson =
    useProgressStore(
      (s) => s.completeLesson
    );

  const exercise =
    lesson.exercises[index];

  const handleCorrect = () => {
    addXP(10);

    if (
      index ===
      lesson.exercises.length - 1
    ) {
      addXP(
        lesson.xpReward
      );

      completeLesson(
        lesson.id
      );

      alert(
        "Lesson Complete!"
      );

      return;
    }

    setIndex(index + 1);
  };

  switch (exercise.type) {

    case "translation":
      return (
        <TranslationExercise
          exercise={exercise}
          onCorrect={
            handleCorrect
          }
        />
      );

    case "typing":
      return (
        <TypingExercise
          exercise={exercise}
          onCorrect={
            handleCorrect
          }
        />
      );

    case "matching":
      return (
        <MatchingExercise
          exercise={exercise}
          onCorrect={
            handleCorrect
          }
        />
      );

    case "listening":
      return (
        <ListeningExercise
          exercise={exercise}
          onCorrect={
            handleCorrect
          }
        />
      );

    case "speaking":
      return (
        <SpeakingExercise
          exercise={exercise}
          onCorrect={
            handleCorrect
          }
        />
      );

    default:
      return null;
  }
}
