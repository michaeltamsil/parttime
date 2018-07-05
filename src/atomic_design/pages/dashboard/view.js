import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import Layout from '../../templates/Layout';

class Dashboard extends Component {
  
  render = () => {
    const { authentication } = this.props

    return (
      <Layout>
        <div>helo</div>
      </Layout>);
  }
}
export default connect()(Dashboard);
