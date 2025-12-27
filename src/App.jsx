import React, { useState } from 'react';

function App() {
  // state for counter
  const [count, setCount] = useState(0);

  // function to increase counter
  const increaseCount = () => {
    setCount(count + 1);
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>React Counter App</h1>
      <h2>Count: {count}</h2>
      <button onClick={increaseCount}>
        Increase
      </button>
    </div>
  );
}

export default App;
