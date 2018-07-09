import React, { Component } from 'react'
import { Route, Switch, NavLink } from 'react-router-dom'
import { Col, Nav, NavItem, Row } from 'reactstrap'

import Jobs from '../pages/employer/jobs'


class MenuEmployer extends Component {
  
  constructor(props) {
    super(props);
  }

  render() {
    const { path } = this.props.match

    return (<Row className="mt-3">
      <Col md="12">
        <Nav tabs>
          <NavItem>
            <NavLink className="nav-link" to="/employer/jobs">Jobs</NavLink>
          </NavItem>
        </Nav>
      </Col>
      <Col md="12 mt-4">
        <Switch>
          <Route
            path={`${path}/jobs`}
            render={ props => <Jobs { ...props } />}
          />
        </Switch>
      </Col>
    </Row>)
  }

}
export default MenuEmployer;
