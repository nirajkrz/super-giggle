import { create } from "zustand";
import { persist } from "zustand/middleware";

interface ProgressState {
  xp: number;
  level: number;
  hearts: number;
  gems: number;
  streak: number;

  completedLessons: string[];

  addXP: (value: number) => void;
  loseHeart: () => void;
  addGem: (value: number) => void;
  incrementStreak: () => void;
  completeLesson: (id: string) => void;
}

export const useProgressStore =
  create<ProgressState>()(
    persist(
      (set) => ({
        xp: 0,
        level: 1,
        hearts: 5,
        gems: 100,
        streak: 0,

        completedLessons: [],

        addXP: (value) =>
          set((state) => ({
            xp: state.xp + value,
            level:
              Math.floor(
                (state.xp + value) / 100
              ) + 1
          })),

        loseHeart: () =>
          set((state) => ({
            hearts: Math.max(
              state.hearts - 1,
              0
            )
          })),

        addGem: (value) =>
          set((state) => ({
            gems: state.gems + value
          })),

        incrementStreak: () =>
          set((state) => ({
            streak: state.streak + 1
          })),

        completeLesson: (id) =>
          set((state) => ({
            completedLessons: [
              ...new Set([
                ...state.completedLessons,
                id
              ])
            ]
          }))
      }),
      {
        name: "language-progress"
      }
    )
  );
