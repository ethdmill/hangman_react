import React, { Component } from 'react'
// import Attempts from './Attempts.js'
import Form from './Form.js'
// import Replay from './Replay.js'
import { already_guessed } from './GuessCheck.js'
import { temp_answer } from './Replace.js'


class Game extends Component {

  render() {
    // console.log(answer)
    return(
      <div>
        <div id="tempAnswer">{temp_answer}</div>
        <div id="gameForm"><Form /></div>
        <div id="flavorText">Take a guess!</div>
        <div id="alreadyGuessed">{already_guessed}</div>
        <div id="playAgain"></div>
      </div>
    )
  }

}

export default Game

// <div id="attemptsRemaining"><Attempts /></div>
