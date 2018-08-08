import React, { Component } from 'react';
import Router from '../router';
import Header from '../components/Header';

export default class App extends Component {
  render() {
    return (
      <div>
        <Header/>
        <Router/>
      </div>
    );
  }
}
