import React, { Component } from 'react';
import {Route, Switch} from 'react-router-dom';
import Dashboard from '../atomic_design/pages/dashboard';
import Login from '../atomic_design/pages/login';


class Routes extends Component {
  constructor(props){
    super(props)
    this.state = {
      isLogin: true,
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

// const TopLevelRoutes = () => (
// <Switch>
//   <Route exact={true} path="/employee/applied_jobs" component={EmployeeAppliedJobs}/>
//   <Route exact={true} path="/employee/free_time" component={EmployeeFreetime}/>
//   <Route exact={true} path="/employee/jobs" component={EmployeeJobs}/>
//   <Route exact={true} path="/employee/profile" component={EmployeeProfile}/>
//   <Route exact={true} path="/dashboard1" component={Dashboard}/>
//   <Route exact={true} path="/login" component={Login}/>
//   <Route exact={true} path="/" component={Home}/>

// </Switch>);

// export default TopLevelRoutes;
// <Route exact path="/register" component={Register} />
// <Route exact path="/forgot-password" component={ForgotPassword} />
// <Route path="/reset-password/:token" component={ResetPassword} />
