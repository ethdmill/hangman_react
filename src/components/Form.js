import React, { Component } from 'react'


class Form extends Component {

  constructor() {
    super()
    this.state = { guess: '' }
  }

  handleChange = event => {
    this.setState({ guess: event.target.value })
  }

  handleSubmit = event => {
    event.preventDefault()
    this.setState({ guess: '' })
    let guess = (this.state.guess).toLowerCase()
    this.props.guessCheck(guess)
    }

  render() {
    return(
      <form onSubmit={this.handleSubmit}>
        <label>
          {"Type your guess here: "}
          <input
            type="text"
            id="guessInput"
            value={this.state.guess}
            onChange={this.handleChange}
          />
        </label>
        <button
          type="submit"
          value="Submit"
          disabled={this.props.attempts === 0}>
          Submit
        </button>
      </form>
    )
  }

}

export default Form
