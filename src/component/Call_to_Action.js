import React from 'react';
import logo from './logo.svg';
import './App.css';

class Call_to_Action extends React.Component {
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
        <section class="content-section bg-primary text-white">
        <div class="container text-center">
          <h2 class="mb-4">The buttons below are impossible to resist...</h2>
          <a href="#" class="btn btn-xl btn-light mr-4">Click Me!</a>
          <a href="#" class="btn btn-xl btn-dark">Look at Me!</a>
        </div>
      </section>
    );
  }
}

export default Call_to_Action;
