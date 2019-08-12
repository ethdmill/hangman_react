import React, { Component } from 'react'


class Rules extends Component {

  render() {
    return (
      <div>
        <h4>The rules are simple!</h4>
        <ul>
          <li>A word will be selected at random.</li>
          <li>You will have a set number of attempts to guess the word.</li>
          <li>The word will be displayed, hidden by a corresponding amount of dashes.</li>
          <li>You can guess one letter at a time, or the whole word at once.</li>
          <li>If you guess a letter correctly, you don't lose any attempts.</li>
          <li>However, if you guess wrong, you lose an attempt!</li>
          <li>Be careful! If you run out of guesses, it's game over!</li>
        </ul>
      </div>
    )
  }

}

export default Rules
