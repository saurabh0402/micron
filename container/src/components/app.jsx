import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import MarketingApp from './marketing-app';
import Header from './header';

const App = () => {
  return (
    <Router>
      <div>
        <Header />
        <Switch>
          <Route path="/login">
            <h1> Login Page! </h1>
          </Route>
        </Switch>
        <MarketingApp />
      </div>
    </Router>
  );
};

export default App;
