import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

import { subscribeToTimer } from './api';

function App() {
  const [ timestamp, setTimestamp ] = useState('No timestamp yet');

  subscribeToTimer((err, timestamp) => setTimestamp(timestamp));

  return (
    <div className="App">
      <p className="App-Intro">
        This is the timer value: {timestamp}
      </p>
    </div>
  );
}

export default App;
