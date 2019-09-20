import React, { Component } from 'react'
import { randomWord } from './Words.js'
import Form from './Form.js'
import Replay from './Replay.js'


class Game extends Component {

  constructor() {
    super()
    let answer = randomWord()
    this.state = {
      answer: answer,
      attempts: this.getAttempts(answer),
      alreadyGuessedLetters: [],
      alreadyGuessedWords: [],
      flavorText: 'Take a guess!',
      tempAnswer: ("-").repeat(answer.length).split(""),
      previousAnswer: null,
    }
  }

  // Determines amount of attempts user gets based on length of randomly chosen answer
  getAttempts = (answer) => {
    let attempts
    if (answer.length <= 10) {
      attempts = 15
    } else {
      attempts = 20
    }
    return attempts
  }

  // Chooses flavor text to display on screen based on number of attempts user has left
  attemptsRemaining = () => {
    if (this.state.attempts <= 3 && this.state.attempts > 0) {
      return 'You only have ' + this.state.attempts + ' attempts left, be careful!!'
    } else if (this.state.attempts === 0) {
      return 'Game over, man! Game over!'
    } else if (!this.state.tempAnswer.includes("-")) {
      return 'Congratulations, you won!'
    } else {
      return 'You have ' + this.state.attempts + ' attempts left.'
    }
  }

  // Checks user guess against randomly chosen answer and either accepts or rejects it
  guessCheck = (guess) => {
    if (guess.length === 1) {
      if (this.state.alreadyGuessedLetters.includes(guess.toUpperCase())) {
        this.setState({ flavorText: 'You already guessed that one!' })
      } else {
        this.setState({ alreadyGuessedLetters: [...this.state.alreadyGuessedLetters, guess.toUpperCase()].sort() })
        this.guessReplace(guess)
      }
    } else if (guess.length === this.state.answer.length) {
      if (this.state.alreadyGuessedWords.includes(guess.toUpperCase())) {
        this.setState({ flavorText: 'You already guessed that one!' })
      } else {
        this.setState({ alreadyGuessedWords: [...this.state.alreadyGuessedWords, guess.toUpperCase()].sort() })
        this.guessReplace(guess)
      }
    } else {
      this.setState({ flavorText: 'Remember, you can only guess either a single letter or the entire word!', attempts: (this.state.attempts - 1) })
    }
  }

  // Replaces dashes in displayed temporary answer with user guess if guess exists anywhere in answer
  guessReplace = (guess) => {
    if (this.state.answer.includes(guess) && this.state.answer !== guess) {
      this.replaceSingleDashes(guess)
      if (this.state.tempAnswer.includes("-")) {
        this.setState({ flavorText: 'Nice one!' })
      }
    } else if (this.state.answer === guess) {
      this.replaceAllDashes(guess)
      this.setState({ flavorText: 'Wow, great job!' })
    } else {
      this.setState({ flavorText: 'Try again!', attempts: (this.state.attempts - 1) })
    }
  }

  // Handles the replacement of dashes with individual-letter guesses
  replaceSingleDashes = (guess) => {
    let temp_answer = this.state.tempAnswer.slice(0)
    for(var i = 0; i < this.state.answer.length; i++) {
      if (this.state.answer[i] === guess) {
        temp_answer[i] = guess
      }
    }
    this.setState({ tempAnswer: temp_answer })
  }

  // Handles the replacement of dashes if user guesses entire answer
  replaceAllDashes = (guess) => {
    this.setState({ tempAnswer: this.state.answer.toUpperCase() })
  }

  // Allows user to replay game by resetting state to mostly default
  replayGame = () => {
    let newAnswer = randomWord()

    // If answer is ever randomly selected as "recursion", answer is locked as "recursion" forever
    if (this.state.answer === 'recursion') {
      newAnswer = 'recursion'
    }

    this.setState({
      answer: newAnswer,
      attempts: this.getAttempts(newAnswer),
      alreadyGuessedLetters: [],
      alreadyGuessedWords: [],
      flavorText: 'Take a guess!',
      tempAnswer: ("-").repeat(newAnswer.length).split(""),
      previousAnswer: this.state.answer,
    })
  }

  render() {
    return(
      <div className="text-center">
        <h4 className="mt-5 pt-5">{this.attemptsRemaining()}</h4>
        <h1 className="py-4 my-3">{(this.state.attempts === 0) ? this.state.answer : this.state.tempAnswer}</h1>
        <div><Form guessCheck={this.guessCheck} attempts={this.state.attempts} tempAnswer={this.state.tempAnswer} /></div>
        <h5 className="py-3">{this.state.flavorText}</h5>
        <div className="mb-1">{"Guessed letters: " + this.state.alreadyGuessedLetters.join(", ")}</div>
        <div className="mt-1">{"Guessed words: " + this.state.alreadyGuessedWords.join(", ")}</div>
        <div className="py-4"><Replay renderButton={(!this.state.tempAnswer.includes("-")) || (this.state.attempts === 0)} replayGame={this.replayGame} /></div>
      </div>
    )
  }

}

export default Game
