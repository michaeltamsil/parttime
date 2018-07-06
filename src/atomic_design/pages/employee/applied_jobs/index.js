import React, { Component } from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';

class Index extends Component {
  
  render = () => {
    return (<div className="container">
      <div className="row mt-3">
        <div className="col-sm-4">
          <button className="btn btn-primary btn-sm mr-1 active" type="button">Employee</button>{ }
          <button className="btn btn-primary btn-sm" type="button">Employer</button>
        </div>
      </div>
      <div className="row mt-3">
        <div className="col-sm-12">
          <ul className="nav nav-tabs">
            <li className="nav-item">
              <NavLink className="nav-link" to="/employee/profile">Profile</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/employee/free_time">Free Time</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/employee/jobs">Jobs</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/employee/applied_jobs">Applied Jobs</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </div>);
  }
}
export default connect()(Index);
