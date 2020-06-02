import React from 'react';
import logo from './logo.svg';
import './App.css';

class Callout extends React.Component {
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
        <section class="callout">
        <div class="container text-center">
          <h2 class="mx-auto mb-5">Welcome to
            <em>your</em>
            next website!</h2>
          <a class="btn btn-primary btn-xl" href="https://startbootstrap.com/template-overviews/stylish-portfolio/">Download Now!</a>
        </div>
      </section>
    );
  }
}

export default Callout;
