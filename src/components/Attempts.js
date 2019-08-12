// This is definitely going to have to be a stateful component

import { answer } from './Words.js'


export function gameAttempts(answer) {

  if (answer.length <= 10) {
    attempts = 15
  } else {
    attempts = 20
  }
}

export function outOfAttempts(attempts) {
  if (attempts = 0) {
    document.getElementById("gameForm").innerHTML = 'Oh no, you\'re out of tries!\nGame over, man! Game over!'
  }
}

// export { attempts }
