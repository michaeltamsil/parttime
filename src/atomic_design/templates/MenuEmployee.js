import React, { Component } from 'react'
import { Route, Switch, NavLink } from 'react-router-dom'
import { Col, Nav, NavItem, Row } from 'reactstrap'

import Profile from '../pages/employee/profile'
import Free_Time from '../pages/employee/free_time'
import Jobs from '../pages/employee/jobs'
import Applied_Jobs from '../pages/employee/applied_jobs'


class MenuEmployee extends Component {
  
  constructor(props) {
    super(props);
  }

  render() {
    const { path } = this.props.match

    return (<Row className="mt-3">
    <Col md="12">
      <Nav tabs>
        <NavItem>
          <NavLink className="nav-link" to="/employee/profile">Profile</NavLink>
        </NavItem>
        <NavItem>
          <NavLink className="nav-link" to="/employee/free_time">Free Time</NavLink>
        </NavItem>
        <NavItem>
          <NavLink className="nav-link" to="/employee/jobs">Jobs</NavLink>
        </NavItem>
        <NavItem>
          <NavLink className="nav-link" to="/employee/applied_jobs">Applied Jobs</NavLink>
        </NavItem>
      </Nav>
    </Col>
    <Col md="12 mt-4">
      <Switch>
        <Route
          path={`${path}/profile`}
          render = { props => <Profile { ...props } />}
        />
        <Route
          path={`${path}/free_time`}
          exact={true}
          render = { props => <Free_Time { ...props } />}
        />
        <Route
          path={`${path}/jobs`}
          render = { props => <Jobs { ...props } />}
        />
        <Route
          path={`${path}/applied_jobs`}
          render = { props => <Applied_Jobs { ...props } />}
        />
      </Switch>
    </Col>
  </Row>)
  }

}
export default MenuEmployee;
