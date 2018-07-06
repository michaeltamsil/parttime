import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Layout from '../../templates/Layout';
import MenuEmployee from '../../templates/MenuEmployee';
import MenuEmployer from '../../templates/MenuEmployer';


class Dashboard extends Component {
  constructor(props){
    super(props)
  }
  
  render = () => {
    const { authentication } = this.props
    return (
      <Layout {...this.props}>
        <Switch>
          <Route
            path={`${this.props.match.path}employee`}
            render= { props => <MenuEmployee { ...props } />}
          />
          <Route
            path={`${this.props.match.path}employer`}
            render={ props => <MenuEmployer { ...props } />}
          />
        </Switch>
      </Layout>);
  }
}
export default connect()(Dashboard);
