import React from 'react';
import {Route, Switch} from 'react-router-dom';
import Home from '../atomic_design/pages/home/view';
const TopLevelRoutes = () => (<Switch>
  <Route exact="exact" path="/" component={Home}/>
</Switch>);

export default TopLevelRoutes;
// <Route exact path="/register" component={Register} />
// <Route exact path="/forgot-password" component={ForgotPassword} />
// <Route path="/reset-password/:token" component={ResetPassword} />
