import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './Home';
import MovieDescription from './MovieDescription';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/movie/:id" component={MovieDescription} />
      </Switch>
    </Router>
  );
}

export default App;