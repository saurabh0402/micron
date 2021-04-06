import React, { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Header from './header';

let MarketingLazy = lazy(() => import('./marketing-app'));
let AuthLazy = lazy(() => import('./auth-app'));

const App = () => {
  return (
    <Router>
      <div>
        <Header />
        <Suspense fallback={<div>Loading!</div>}>
          <Switch>
            <Route path="/auth" component={AuthLazy} />
            <Route path="/" component={MarketingLazy} />
          </Switch>
        </Suspense>
      </div>
    </Router>
  );
};

export default App;
