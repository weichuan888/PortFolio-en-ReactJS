import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import Head from './Head';
import PremierComponent from './premierComponent';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Head/>
        <PremierComponent/>
      </div>
    );
  }
}

export default App;
