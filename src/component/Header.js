import React from 'react';
import logo from './logo.svg';
import './App.css';

class Header extends React.Component {
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
        <header class="masthead d-flex">
        <div class="container text-center my-auto">
          <h1 class="mb-1">Stylish Portfolio</h1>
          <h3 class="mb-5">
            <em>A Free Bootstrap Theme by Start Bootstrap</em>
          </h3>
          <a class="btn btn-primary btn-xl js-scroll-trigger" href="#about">Find Out More</a>
        </div>
        <div class="overlay"></div>
      </header>
    );
  }
}

export default Header;
