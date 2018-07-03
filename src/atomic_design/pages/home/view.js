import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import Layout from '../../templates/Layout';

class Index extends Component {
  render = () => {
    const { authentication } = this.props
    return (<div>
      <div className="home-bg">
        <div className="home-content ">
          <div className="col-md-7">
            <div className="home-title">
              Come for the job… stay for the challenge
        </div>
            <div className="row justify-content-center">
              <div className="col-md-6">
                <div className="home-btn">
                  <button className="btn btn-primary btn-lg btn-block"><span><i style={{fontSize:20,paddingRight:13,paddingTop:6}} className="fa fa-facebook-square" ></i></span> Connect With Facebook</button>
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
