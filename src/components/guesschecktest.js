import { answer } from './Words.js'
import { temp_answer, replaceSingleDashes, replaceAllDashes } from './Replace.js'


let already_guessed_letters = []
let already_guessed_words = []

export function guessCheck(guess) {

  if (guess.length === 1 || guess.length === answer.length) {

    if (guess.length === 1) {
      if (already_guessed_letters.includes(guess.toUpperCase())) {
        document.getElementById("flavorText").innerHTML = 'You already guessed that letter!'
      } else {
        already_guessed_letters.push(guess.toUpperCase())
        already_guessed_letters = already_guessed_letters.sort()
        document.getElementById("alreadyGuessedLetters").innerHTML = already_guessed_letters.join(", ")
      }
    }





    // if (already_guessed_letters.includes(guess.toUpperCase())) {
    //   document.getElementById("flavorText").innerHTML = 'You already guessed that letter!'
    //   console.log("Test")
    // } else if (guess.length === 1) {
    //   already_guessed_letters.push(guess.toUpperCase())
    //   already_guessed_letters = already_guessed_letters.sort()
    //   document.getElementById("alreadyGuessedLetters").innerHTML = already_guessed_letters.join(", ")
    // }

    if (guess.length === answer.length) {
      already_guessed_words.push(guess.toUpperCase())
      already_guessed_words = already_guessed_words.sort()
      document.getElementById("alreadyGuessedWords").innerHTML = already_guessed_words.join(", ")
    }

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

  } else {
    document.getElementById("flavorText").innerHTML = 'Remember, you can only guess either a single letter or the entire word!'
  }
}

export { already_guessed_letters, already_guessed_words }

// if (guess.length === 1)
