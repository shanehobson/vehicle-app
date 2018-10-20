import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';
import Dashboard from '../components/DashboardPage';

export const history = createHistory();

class AppRouter extends React.Component {

  componentDidMount() {
    document.title = "Vehicle Information Dashboard";
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
