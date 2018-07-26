import React, { Component } from 'react';
import {Route, Switch} from 'react-router-dom';
import Dashboard from '../atomic_design/pages/dashboard';
import Login from '../atomic_design/pages/login';


class Routes extends Component {
  constructor(props){
    super(props)
    this.state = {
      isLogin: false,
      updateLogin: bol => {
        this.setState({
          isLogin: bol
        })
      }
    }
  }

  render = () => {
    let state = this.state;


    return (
      <div>
        <Switch>
          <Route
            path="/"
            render={ props => this.state.isLogin ? 
              <Dashboard {...props} /> :
              <Login {...props} {...state }/>
            }
          />
        </Switch>
      </div>
    )
  }
}

export default Routes;