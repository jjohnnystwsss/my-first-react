import React from 'react';

class Portfolio extends React.Component {
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
        <section class="content-section bg-primary text-white text-center" id="services">
        <div class="container">
          <div class="content-section-heading">
            <h3 class="text-secondary mb-0">Services</h3>
            <h2 class="mb-5">What We Offer</h2>
          </div>
          <div class="row">
            <div class="col-lg-3 col-md-6 mb-5 mb-lg-0">
              <span class="service-icon rounded-circle mx-auto mb-3">
                <i class="icon-screen-smartphone"></i>
              </span>
              <h4>
                <strong>Responsive</strong>
              </h4>
              <p class="text-faded mb-0">Looks great on any screen size!</p>
            </div>
            <div class="col-lg-3 col-md-6 mb-5 mb-lg-0">
              <span class="service-icon rounded-circle mx-auto mb-3">
                <i class="icon-pencil"></i>
              </span>
              <h4>
                <strong>Redesigned</strong>
              </h4>
              <p class="text-faded mb-0">Freshly redesigned for Bootstrap 4.</p>
            </div>
            <div class="col-lg-3 col-md-6 mb-5 mb-md-0">
              <span class="service-icon rounded-circle mx-auto mb-3">
                <i class="icon-like"></i>
              </span>
              <h4>
                <strong>Favorited</strong>
              </h4>
              <p class="text-faded mb-0">Millions of users
                <i class="fas fa-heart"></i>
                Start Bootstrap!</p>
            </div>
            <div class="col-lg-3 col-md-6">
              <span class="service-icon rounded-circle mx-auto mb-3">
                <i class="icon-mustache"></i>
              </span>
              <h4>
                <strong>Question</strong>
              </h4>
              <p class="text-faded mb-0">I mustache you a question...</p>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Portfolio;
