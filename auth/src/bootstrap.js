import React from 'react';
import ReactDom from 'react-dom';
import { Router, Switch, Route, Link } from 'react-router-dom';
import { createMemoryHistory, createBrowserHistory } from 'history';

const mount = (root, { onNavigate, defaultHistory, initialPath }) => {
  const history =
    defaultHistory ||
    createMemoryHistory({
      initialEntries: [initialPath],
    });

  history.listen(onNavigate);

  ReactDom.render(
    <Router history={history}>
      <div>
        <Switch>
          <Route path="/auth/login">
            <h1> Login Page! </h1>
          </Route>
          <Route path="/auth/signup">
            <h1> Signup Page! </h1>
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
  const e = document.querySelector('#_auth-root');
  if (e) {
    mount(e, {
      onNavigate: () => {},
      defaultHistory: createBrowserHistory(),
    });
  }
}

export { mount };
