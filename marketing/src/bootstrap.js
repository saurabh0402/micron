import React from 'react';
import ReactDom from 'react-dom';
import { Router, Switch, Route, Link } from 'react-router-dom';
import { createMemoryHistory, createBrowserHistory } from 'history';

const mount = (root, { onNavigate, defaultHistory }) => {
  const history = defaultHistory || createMemoryHistory();

  history.listen(onNavigate);

  ReactDom.render(
    <Router history={history}>
      <div>
        <Link to="/">Marketing Home</Link>
        <Link to="/pricing">Pricing</Link>
        <Switch>
          <Route exact path="/pricing">
            <h1> Pricing Page</h1>
          </Route>
          <Route exact path="/">
            <h1> Marketing Home! </h1>
          </Route>
        </Switch>
      </div>
    </Router>,
    root
  );

  return {
    onParentNavigate: ({ pathname: nextPathName }) => {
      const { pathname } = history.location;

      if (pathname !== nextPathName) {
        history.push(nextPathName);
      }
    },
  };
};

if (process.env.NODE_ENV === 'development') {
  const e = document.querySelector('#_marketing-root');
  if (e) {
    mount(e, {
      onNavigate: () => {},
      defaultHistory: createBrowserHistory(),
    });
  }
}

export { mount };
