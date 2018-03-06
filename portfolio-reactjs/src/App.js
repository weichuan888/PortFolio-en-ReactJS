import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import Head from './Head';
import PremierComponent from './premierComponent';
import DeuxiemeComponent from './deuxiemeComponent';
import TroisiemeComponent from './troisiemeComponent';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Head/>
        <PremierComponent/>
        <DeuxiemeComponent/>
        <TroisiemeComponent/>
      </div>
    );
  }
}

export default App;
