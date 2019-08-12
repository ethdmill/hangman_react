import { answer } from './Words.js'
import { temp_answer, replaceSingleDashes, replaceAllDashes } from './Replace.js'


let already_guessed = []

export function guessCheck(guess) {
  if (guess.length === 1 || guess.length === answer.length) {
    if (already_guessed.includes(guess.toUpperCase())) {
      document.getElementById("flavorText").innerHTML = 'You already guessed that one!'
    } else {
      already_guessed.push(guess.toUpperCase())
      already_guessed = already_guessed.sort()
      document.getElementById("alreadyGuessed").innerHTML = already_guessed.join(", ")
      if (answer.includes(guess) && answer !== guess) {
        replaceSingleDashes(guess)
        if (temp_answer.includes("-")) {
          document.getElementById("flavorText").innerHTML = 'Nice one!'
        } else {
          document.getElementById("flavorText").innerHTML = 'Congratulations, you won!'
        }
      } else if (answer === guess) {
        replaceAllDashes(guess)
        document.getElementById("flavorText").innerHTML = 'Congratulations, you won!'
      } else {
        document.getElementById("flavorText").innerHTML = 'Try again!'
      }
    }
  } else {
    document.getElementById("flavorText").innerHTML = 'Remember, you can only guess either a single letter or the entire word!'
  }
}

export { already_guessed }
