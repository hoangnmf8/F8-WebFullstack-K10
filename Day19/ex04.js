// function outerFunction(outerVariable) {
//   console.log(outerVariable)
//   return function (innerVariable) {
//     console.log(`Outer variable: ${outerVariable}`);
//     console.log(`Inner variable: ${innerVariable}`);
//   };
// }

// const newFunction = outerFunction('outside');
// newFunction('inside');

import counter from "./counter.js";



const myCounter = counter()

document.body.addEventListener("click", myCounter.increment)

const showCountElement = document.getElementById("showCount")

showCountElement.addEventListener("click", ()=> console.log(myCounter.getCount()))