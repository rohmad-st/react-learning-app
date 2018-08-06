import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Home from '../pages/Home';
import Favorite from '../pages/Favorite';

class App extends Component {
  render() {
    return (
      <div>
        <Route path="/" exact component={Home}/>
        <Route path="/favorites" component={Favorite}/>
      </div>
    );
  }
}

export default App;