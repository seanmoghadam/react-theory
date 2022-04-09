import React, { useState } from 'react';
import PageHeadline from './components/PageHeadline';

const DEFAULT_STATE = {
  title: 'Landing Page',
};

const Props = () => {
  const [appState] = useState(DEFAULT_STATE);

  return (
    <main>
      <PageHeadline title={appState.title} />
    </main>
  );
};

export default Props;
