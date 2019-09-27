import React from 'react'
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'
import Game from './components/Game.js'
import Rules from './components/Rules.js'


class Home extends React.Component {

  render() {
    return (
      <div className="text-center">
        <h1 className="py-4">Welcome to Hangman!</h1>
        <h4>Please select an option above.</h4>
      </div>
    )
  }

}


function App() {

  return(
      <Router>
          <nav className="navbar navbar-expand-lg navbar-dark bg-dark mb-4 justify-content-center">
            <li className="nav-link"><Link to='/'>Home</Link></li>
            <li className="nav-link"><Link to='/game'>Play</Link></li>
            <li className="nav-link"><Link to='/rules'>Rules</Link></li>
          </nav>
        <Route path='/' exact component={Home} />
        <Route path='/game' exact component={Game} />
        <Route path='/rules' exact component={Rules} />
      </Router>
  );
}

export default App;
