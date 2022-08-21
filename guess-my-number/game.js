// const getRandomInt = (max) => {
//     return Math.floor(Math.random() * max);
//   }

let guessList = ""
let numGuess = 0
const guessElement = document.getElementById("guesses")
guessElement.innerHTML = numGuess;

let correctAnswer = null

const rangeForm = document.getElementById('range-form');
rangeForm.addEventListener('submit', (event) => {
  event.preventDefault();

  //console.log(event.target.elements)
  let min = event.target.elements[0].value; //access first array element
  let max = event.target.elements[1].value;
  correctAnswer = getRangeInt(Number(min), Number(max))
})
function getRangeInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// //const getRandomInt = (limit) => {
//   //return Math.floor(Math.random() * limit)
// }

//const correctAnswer = getRandomInt(10);

const guessForm = document.getElementById('guessForm');

guessForm.addEventListener('submit', (event) => {
  event.preventDefault();
  const guessNum = parseInt(document.getElementById('guess').value);
  numGuess += 1
  guessElement.innerHTML = numGuess + " Number of Attempts"
  // check if our current guess equals the correctAnswer
  guessList += '<li>' + guessNum + '</li>'
  document.querySelector("#guess-list").innerHTML = guessList
  if (guessNum === correctAnswer) {
    alert("Correct!")
  } else if (guessNum < correctAnswer){
    alert("try higher number ")
}else {
  alert("try lower number")
}
});

console.log(correctAnswer);
