import React from 'react';
import logo from './logo.svg';
import './App.css';

class App extends React.Component {
  constructor(props){
    console.log("hello")
    super(props)
    this.state = {
      myState: 'My first state',
      saySomething: 'Hello World'
    }
  }

  shouldComponentUpdate(nextProps, nextState) { 
    if (this.state.title != nextState.title) { 
      return true;
    } 
    return false
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    console.log("hello")
    
    if (nextProps.title != prevState.title) {
      return {
        title: nextProps.title 
      };
    }
    return null;
  }

  changeTxext = () => { 
    this.setState({ saySomething: 'How are you?' })
  }

  render() {
    console.log("hello")
    return (
      <div className="App">
        <p>{this.state.myState}</p>
        <p>{this.state.saySomething}</p>
        <button onClick={this.changeTxext}>Click</button>
      </div>
    );
  }
}

export default App;

import React, { Component } from 'react';
import Navigation from './components/Navigation'
import Scroll_to_Top_Button from './components/Scroll_to_Top_Button'
import Portfolio from './components/Portfolio'
import About from './components/About'
import Services from './components/Services'
import Footer from './components/Footer'
import Call_to_Action from './components/Call_to_Action'
import Callout from './components/Callout'
import Header from './components/Header'
import Map from './components/Map'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navigation/>
        <Scroll_to_Top_Button/>
        <Portfolio/>
        <About/>
        <Services/>
        <Footer/>
        <Call_to_Action/>
        <Callout/>
        <Header/>
        <Map/>
      </div>
    );
  }
}

export default App;