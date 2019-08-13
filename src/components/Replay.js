import React, { Component } from 'react'



class Replay extends Component {

  constructor() {
    super()
    this.state = {
      playing: "playing"
    }
  }

  gameOver = () => {
    if (document.getElementById("flavorText").innerHTML === 'Congratulations, you won!') {
      this.setState({ playing: this.donePlaying })
    }
  }

  replayGame = () => {
    this.setState({ playing: this.playing })
  }

  render() {
    return(
      <button onClick={this.replayGame()}>Play Again?</button>
    )
  }

}

// export default Replay
