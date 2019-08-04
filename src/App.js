import React from 'react'
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'
import Game from './Game.js'
import Rules from './Rules.js'


class Home extends React.Component {

  render() {
    return (
      <div>
        <h1>Welcome to the Word Guessing Game.</h1>
        <h4>Please select an option above.</h4>
      </div>
    )
  }

}




function App() {

  return (
    <div>

      <Router>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark mb-4">
          <li class="nav-link"><Link to='/'>Home</Link></li>
          <li class="nav-link"><Link to='/game'>Play</Link></li>
          <li class="nav-link"><Link to='/rules'>Rules</Link></li>
        </nav>
        <Route path='/' exact component={Home} />
        <Route path='/game' exact component={Game} />
        <Route path='/rules' exact component={Rules} />
      </Router>
    </div>
  );
}

export default App;
