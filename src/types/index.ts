export type ExerciseType =
  | "translation"
  | "typing"
  | "matching"
  | "listening"
  | "speaking";

export interface Exercise {
  id: string;
  type: ExerciseType;

  question: string;

  answer: string;

  options?: string[];

  audio?: string;
}

export interface Lesson {
  id: string;

  title: string;

  xpReward: number;

  exercises: Exercise[];
}

export interface Unit {
  id: string;

  title: string;

  lessons: Lesson[];
}
