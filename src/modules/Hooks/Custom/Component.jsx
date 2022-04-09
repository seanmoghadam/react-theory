import React from 'react';
import { useLocalStorage } from './hooks/useLocalStorage';

const DEFAULT_STATE = {
  counter: 0,
};

const Component = () => {
  // basic state example
  // const [appState, setAppState] = useState(DEFAULT_STATE);

  // what when we want to persist the changes to local storage
  const [appState, setAppState] = useLocalStorage('app', DEFAULT_STATE);

  const incrementCounter = (e) => {
    const clonedState = { ...appState };
    const newCount = clonedState.counter + 1;

    setAppState({
      ...appState,
      counter: newCount,
    });
  };

  const resetCounter = (e) => {
    setAppState({
      ...appState,
      counter: 0,
    });
  };

  return (
    <section>
      <button onClick={incrementCounter}>Button</button>
      <button onClick={resetCounter}>Button</button>
      <span>Aktueller Zähler: {appState.counter}</span>
    </section>
  );
};

export default Component;
