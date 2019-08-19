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
    let guess = (this.state.guess).toUpperCase()
    this.props.guessCheck(guess)
    }

  render() {
    return(
      <div>
        <form onSubmit={this.handleSubmit}>
          <div className="mt-2 pb-1">
            <input
              type="text"
              id="guessInput"
              placeholder="Type your guess here!"
              value={this.state.guess}
              onChange={this.handleChange}
            />
          </div>
          <div className="pt-2 mb-2">
            <button
              type="submit"
              value="Submit"
              disabled={this.props.attempts === 0 || !(this.props.tempAnswer).includes("-")}>
              Submit
            </button>
          </div>
        </form>
      </div>
    )
  }

}

export default Form
