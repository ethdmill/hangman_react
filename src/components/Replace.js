import { answer, answer_dashes } from './Words.js'

let temp_answer = answer_dashes.split("")

export function replaceSingleDashes(guess) {
  for(var i = 0; i < answer_dashes.length; i++) {
    if (answer[i] === guess) {
      temp_answer[i] = guess
    }
  }
  console.log(temp_answer)
  document.getElementById("tempAnswer").innerHTML = temp_answer.join("").toUpperCase()
}

export function replaceAllDashes(guess) {
  document.getElementById("tempAnswer").innerHTML = answer.toUpperCase()
}

export { temp_answer }
