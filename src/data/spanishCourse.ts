import { Unit } from "../types";

export const spanishCourse: Unit[] = [
  {
    id: "unit1",

    title: "Basics",

    lessons: [
      {
        id: "greetings",

        title: "Greetings",

        xpReward: 20,

        exercises: [
          {
            id: "1",
            type: "translation",
            question: "Hola",
            answer: "Hello",
            options: [
              "Hello",
              "Goodbye",
              "Please",
              "Friend"
            ]
          },

          {
            id: "2",
            type: "translation",
            question: "Gracias",
            answer: "Thank you",
            options: [
              "Thank you",
              "Sorry",
              "Hello",
              "Good morning"
            ]
          },

          {
            id: "3",
            type: "typing",
            question: "Buenos días",
            answer: "Good morning"
          }
        ]
      }
    ]
  },

  {
    id: "unit2",

    title: "Food",

    lessons: [
      {
        id: "food1",

        title: "Common Foods",

        xpReward: 30,

        exercises: [
          {
            id: "4",
            type: "translation",
            question: "Agua",
            answer: "Water",
            options: [
              "Water",
              "Milk",
              "Bread",
              "Rice"
            ]
          },

          {
            id: "5",
            type: "typing",
            question: "Pan",
            answer: "Bread"
          }
        ]
      }
    ]
  }
];
