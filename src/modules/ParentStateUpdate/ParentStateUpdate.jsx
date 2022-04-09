import React, { useState } from 'react';
import PageForm from './components/PageForm';
import PageHeadline from './components/PageHeadline';

const DEFAULT_STATE = {
  title: 'Landing Page',
};

const Props = () => {
  const [appState, setAppState] = useState(DEFAULT_STATE);

  const updateTitle = (newTitle) => {
    setAppState({
      ...appState,
      title: newTitle,
    });
  };

  return (
    <main>
      <PageHeadline title={appState.title} />
      <PageForm updateTitle={updateTitle} title={appState.title} />
    </main>
  );
};

export default Props;
