import React, { Component } from 'react';
import './App.css';
import Header from './components/headerComponent';
import Cover from './components/coverComponent';
import Sosial from './components/sosialComponent';
import Portfolio from './components/portfolioComponent';
import Footer from './components/footerComponent';
import Burger from './components/burgerMenu';

class App extends Component {
    constructor(){
      super();

    }
    onChangeHandler = (val) =>{
 return val.target.value
    }

    onSubmitHandler = (val) =>{
      val.preventDefault();
      console.log(val.target.value)
    }
  render() {
    return (
      <div className="App">
      <Header />
      <Burger />
      <Cover onSubmitHandler={this.onSubmitHandler} onChangeHandler={this.onChangeHandler} />
      <Sosial />
      <Portfolio />
      <Footer />
      </div>
    );
  }
}

export default App;
