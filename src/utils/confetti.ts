import confetti
from "canvas-confetti";

export const launchConfetti =
() => {

 confetti({
  particleCount:150,
  spread:120
 });

};

//npm install canvas-confetti
