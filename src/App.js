import React, { Component } from 'react';
import './App.css';
import Header from './components/headerComponent';
import Cover from './components/coverComponent';
import Sosial from './components/sosialComponent';
import Portfolio from './components/portfolioComponent';
import Footer from './components/footerComponent';

class App extends Component {
    constructor(){
      super();

    }
    onChangeHandler = (val) =>{
      // console.log(val.target.value)
    }

    onSubmitHandler = (val) =>{
      console.log(val.target.value)
    }
  render() {
    return (
      <div className="App">
      <Header />
      <Cover onSubmitHandler={this.onSubmitHandler} onChangeHandler={this.onChangeHandler} />
      <Sosial />
      <Portfolio />
      <Footer />
      </div>
    );
  }
}

export default App;
