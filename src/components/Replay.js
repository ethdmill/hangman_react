import React, { Component } from 'react'


class Replay extends Component {

  render() {
    return (
      <div>{this.props.renderButton ? <button onClick={this.props.replayGame}>Play Again?</button> : null }</div>
    )
  }

}

export default Replay
