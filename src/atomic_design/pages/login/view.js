import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import Layout from '../../templates/Layout';

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
    this.setState({
      isRedirected: true
    })
  }
  
  render = () => {
    const { authentication } = this.props
    
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
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>);
  }
}
export default connect()(Index);
