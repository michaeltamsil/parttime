import React, {Component} from 'react'
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {Button, Col, Row} from 'reactstrap';
import { NavLink } from 'react-router-dom';

import {Link} from 'react-router-dom'
import {logoutUser} from '../../redux/modules/authentication';
import {deleteCookie, getCookie} from '../../helpers/cookie-utils';

class Header extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (<Row className="mt-3">
      <Col>
        <NavLink className="btn btn-primary btn-sm mr-3" to="/employee">Employee</NavLink>
        <NavLink className="btn btn-primary btn-sm mr-3" to="/employer">Employer</NavLink>
      </Col>
    </Row>);
  }
}
export default connect()(Header);
