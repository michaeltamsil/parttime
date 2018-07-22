import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import FacebookLogin from 'react-facebook-login';

const responseFacebook = (response) => {
  console.log(response);
}

class Index extends Component {

  constructor(props) {
    super(props)
    this.state = {
      isRedirected: false
    }
    
    //; this binding is necessary to make `this` work in the callback
    this.loginIn = this.loginIn.bind(this)
  }

  loginIn() {
    if (this.props.updateLogin){
      this.props.updateLogin(true)
    }
    // this.setState({
    //   isRedirected: true
    // })
  }

  
  
  render = () => {
    
    
    return (<div>
      { this.state.isRedirected ? <Redirect to="/employee/free_time" /> : null }
      <div className="home-bg">
        <div className="home-content ">
          <div className="col-md-7">
            <div className="home-title">
              Come for the job… stay for the challenge
            </div>
            <div className="row justify-content-center">
              <div className="col-md-12">
                <div className="home-btn">
                  <button
                    className="btn btn-primary btn-lg btn-block"
                    onClick={this.loginIn}
                  >
                    <span>
                      <i style={{fontSize:20,paddingRight:13,paddingTop:6}} className="fa fa-facebook-square" ></i>
                    </span>
                    Connect With Facebook
                  </button>
                  <FacebookLogin
                    appId="323921654813697"
                    autoLoad={true}
                    fields="name,email,picture"
                    callback={responseFacebook} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>);
  }
}
export default Index;
