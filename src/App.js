import React, { Component } from 'react';
import './App.css';
import Header from './components/headerComponent';
import Cover from './components/coverComponent';
import Sosial from './components/sosialComponent';
import Portfolio from './components/portfolioComponent';
import Footer from './components/footerComponent';

class App extends Component {
  render() {
    return (
      <div className="App">
      <Header />
      <Cover />
      <Sosial />
      <Portfolio />
      <Footer />
      </div>
    );
  }
}

export default App;
