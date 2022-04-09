import React, { useState } from 'react';
import PageNavigation from './components/PageNavigation';

const DEFAULT_STATE = {
  title: 'Landing Page',
};

const Router = () => {
  const [appState] = useState(DEFAULT_STATE);

  return (
    <main>
      <PageNavigation title={appState.title} />
    </main>
  );
};

export default Router;
