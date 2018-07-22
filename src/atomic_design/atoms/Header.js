import React, {Component} from 'react'
import {Col, Row} from 'reactstrap';
import { NavLink } from 'react-router-dom';

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
export default Header;
