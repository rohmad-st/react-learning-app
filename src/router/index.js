import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Home from '../containers/Home';

class App extends Component {
  render() {
    return (
      <div>
        <Route path="/:filter?" component={Home}/>
      </div>
    );
  }
}

export default App;