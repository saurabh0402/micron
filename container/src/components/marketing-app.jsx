import React, { useRef, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

import { mount } from 'marketing/App';

const MarketingApp = () => {
  const ref = useRef(null);
  const history = useHistory();

  useEffect(() => {
    const { onParentNavigate } = mount(ref.current, {
      onNavigate: ({ pathname: nextPathName }) => {
        const { pathname } = history.location;

        if (pathname !== nextPathName) {
          history.push(nextPathName);
        }
      },
    });

    history.listen(onParentNavigate);
  }, []);

  return <div ref={ref}></div>;
};

export default MarketingApp;
