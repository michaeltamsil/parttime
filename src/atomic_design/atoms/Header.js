import React, {Component} from 'react'
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {Dropdown, DropdownMenu, DropdownToggle, DropdownItem, Button} from 'reactstrap';
import {Link} from 'react-router-dom'
import {logoutUser} from '../../redux/modules/authentication';
import {mobileBreakpoint} from '../../helpers/ui-constants';
import {deleteCookie, getCookie} from '../../helpers/cookie-utils';

class Header extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
    <header className="header">
    <div>Am headers</div>
    </header>);
  }
}
export default connect()(Header);
