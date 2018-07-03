import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Col, Thumbnail, Button, LinkContainer} from 'reactstrap';
import {Link, NavLink} from 'react-router-dom';

class Footer extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (<footer  id="footer">
      <div>ini footer</div>
    </footer>)
  }
}

export default connect()(Footer);
