import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  let firstValue: number[] = [1, 2, 3, 4, 5]
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          The value {firstValue} is of {typeof firstValue} type!
        </p>
      </header>
    </div>
  );
}

export default App;
