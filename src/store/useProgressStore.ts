import { create } from "zustand";

interface ProgressState {
  xp: number;

  level: number;

  hearts: number;

  streak: number;

  gems: number;

  completedLessons: string[];

  addXP: (amount: number) => void;

  loseHeart: () => void;

  addGem: (amount: number) => void;

  completeLesson: (id: string) => void;
}

export const useProgressStore =
create<ProgressState>((set) => ({
  xp: 0,

  level: 1,

  hearts: 5,

  streak: 0,

  gems: 100,

  completedLessons: [],

  addXP: (amount) =>
    set((state) => ({
      xp: state.xp + amount,

      level:
        Math.floor(
          (state.xp + amount) / 100
        ) + 1
    })),

  loseHeart: () =>
    set((state) => ({
      hearts: Math.max(
        0,
        state.hearts - 1
      )
    })),

  addGem: (amount) =>
    set((state) => ({
      gems: state.gems + amount
    })),

  completeLesson: (id) =>
    set((state) => ({
      completedLessons: [
        ...state.completedLessons,
        id
      ]
    }))
}));
