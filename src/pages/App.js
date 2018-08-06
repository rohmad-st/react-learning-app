import React, { Component } from 'react';
import Router from '../router';
import Menu from '../components/Menu';

class App extends Component {
  render() {
    return (
      <div>
        <Menu/>
        <Router/>
      </div>
    );
  }
}

export default App;