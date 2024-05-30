import React from 'react';
import { Route, BrowserRouter as Router } from 'react-router-dom';
import Home from './Home';
import Player from './Player';
import './App.css';

function App() {
  return (
    <Router>
      <div className="app">
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/player/:id">
          <Player />
        </Route>
      </div>
    </Router>
  );
}

export default App;
