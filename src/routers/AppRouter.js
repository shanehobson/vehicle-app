import React from 'react';
import { Component } from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';
import Dashboard from '../components/DashboardPage';

export const history = createHistory();

class AppRouter extends Component {

  componentDidMount() {
    document.title = "Vehicle Information";
  }

  render() {
    return (      
        <Router history={history}>
          <div>
            <Switch>
              <Route path="/" component={Dashboard} exact={true} />
            </Switch>
          </div>
        </Router>
    );
  }
}
  
export default AppRouter;
