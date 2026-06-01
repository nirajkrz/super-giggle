export const successSound =
() => {

 new Audio(
  "/sounds/correct.mp3"
 ).play();
};

export const failSound =
() => {

 new Audio(
  "/sounds/wrong.mp3"
 ).play();
};
