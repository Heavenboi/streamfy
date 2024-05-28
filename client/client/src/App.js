import React from 'react';
import { Route, BrowserRouter as Router } from "react-router-dom";
import Home from './Home';
import Player from './Player';
import './App.css';

function App() {
  return (
    <Router>
      {/* Home Route */}
      <Route exact path="/">
        <Home />
      </Route>
      
      {/* Player Route */}
      <Route path="/player/:id">
        <Player />
      </Route>
    </Router>
  );
}

export default App;
