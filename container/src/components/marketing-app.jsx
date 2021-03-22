import React, { useRef, useEffect } from 'react';

import { mount } from 'marketing/App';

const MarketingApp = () => {
  const ref = useRef(null);

  useEffect(() => {
    mount(ref.current);
  });

  return <div ref={ref}></div>;
};

export default MarketingApp;
