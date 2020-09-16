import React from 'react';
import Home from './views/home';
import Nav from './components/nav';
import About from './views/about';
import Services from './views/services';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import './App.scss';

function App() {
  return (
    <Router>
      <Nav />
      <Switch>
        <Route path="/services">
          <Services />
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/home">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;