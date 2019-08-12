import React, { Component } from 'react'
// import Attempts from './Attempts.js'
import Form from './Form.js'
import { answer, answer_dashes } from './Words.js'
import { already_guessed } from './GuessCheck.js'


class Game extends Component {

  render() {
    console.log(answer)
    return(
      <div>
        <div id="tempAnswer">{answer_dashes}</div>
        <div id="gameForm"><Form /></div>
        <div id="flavorText">Take a guess!</div>
        <div id="alreadyGuessed">{already_guessed}</div>
      </div>
    )
  }

}

export default Game

// <div id="attemptsRemaining"><Attempts /></div>
