import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import Head from './Head';
import PremierComponent from './premierComponent';
import DeuxiemeComponent from './deuxiemeComponent';
import TroisiemeComponent from './troisiemeComponent';
import QuatriemeComponent from './quatriemeComponent';
import CinquiemeComponent from './cinquiemeComponent';
import Footer from './footer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Head/>
        <PremierComponent/>
        <DeuxiemeComponent/>
        <TroisiemeComponent/>
        <QuatriemeComponent/>
        <CinquiemeComponent/>
        <Footer/>
      </div>
    );
  }
}

export default App;
