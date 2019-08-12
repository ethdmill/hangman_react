import React, { Component } from 'react'
import { answer } from './Words.js'
import { guessCheck } from './GuessCheck.js'


class Form extends Component {

  constructor() {
    super()
    this.state = { guess: '' }
  }

  handleChange = event => {
    this.setState({ guess: event.target.value })
  }

  handleSubmit = event => {
    document.getElementById("guessInput").value = ''
    let guess = (this.state.guess).toLowerCase()
    guessCheck(guess)
    console.log(guess)
    console.log(answer)
    event.preventDefault()
    }

  render() {
    return(
      <form onSubmit={this.handleSubmit}>
        <label>
          {"Type your guess here: "}
          <input type="text" id="guessInput" value={this.state.guess} onChange={this.handleChange} />
        </label>
        <input type="submit" value="Submit" />
      </form>
    )
  }

}

export default Form

// if (answer.includes(this.guess)) {
//   return(<div>"Nice one!"</div>)
// } else {
//   return(<div>"Try again!"</div>)
