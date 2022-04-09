import React, { useReducer } from 'react';

const INITIAL_STATE = 0;

const reducer = (currentState, action) => {
  switch (action) {
    case 'increment':
      return currentState + 1;
    case 'decrement':
      return currentState - 1;
    case 'reset':
      return INITIAL_STATE;
    default:
      return currentState;
  }
};

const Component = () => {
  const [count, countDispatch] = useReducer(reducer, INITIAL_STATE);
  return (
    <div className="App">
      <p>Aktueller Zähler: {count}</p>
      <button onClick={() => countDispatch('increment')}>Erhöhen</button>
      <button onClick={() => countDispatch('decrement')}>Reduzieren</button>
      <button onClick={() => countDispatch('reset')}>Reset</button>
    </div>
  );
};

export default Component;
