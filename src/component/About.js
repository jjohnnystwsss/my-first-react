import React from 'react';
import logo from './logo.svg';
import './App.css';

class About extends React.Component {
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
        <section class="content-section bg-light" id="about">
        <div class="container text-center">
          <div class="row">
            <div class="col-lg-10 mx-auto">
              <h2>Stylish Portfolio is the perfect theme for your next project!</h2>
              <p class="lead mb-5">This theme features a flexible, UX friendly sidebar menu and stock photos from our friends at
                <a href="https://unsplash.com/">Unsplash</a>!</p>
              <a class="btn btn-dark btn-xl js-scroll-trigger" href="#services">What We Offer</a>
            </div>
          </div>
        </div>
      </section>    
    );
  }
}

export default About;
