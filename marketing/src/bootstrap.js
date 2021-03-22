import React from 'react';
import ReactDom from 'react-dom';

const mount = (root) => {
  ReactDom.render(<h1> Marketing App! </h1>, root);
};

if (process.env.NODE_ENV === 'development') {
  const e = document.querySelector('#_marketing-root');
  if (e) {
    mount(e);
  }
}

export { mount };
