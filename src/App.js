import React from 'react';
import Home from './views/home.js';
import Nav from './components/nav.js';
import About from './views/about.js';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import './App.css';

function App() {
  return (
    <Router>
      <Nav />
      <Switch>
        <Route path="/about" component={About}>
        </Route>
        <Route path="/" component={Home}>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
