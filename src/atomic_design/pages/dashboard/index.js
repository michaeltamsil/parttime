import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Layout from '../../templates/Layout';
import MenuEmployee from '../../templates/MenuEmployee';
import MenuEmployer from '../../templates/MenuEmployer';


class Dashboard extends Component {
  constructor(props){
    super(props)
  }
  
  render = () => {
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
export default Dashboard;