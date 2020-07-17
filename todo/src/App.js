import React from 'react';
import logo from './logo.svg';
import './App.css';
import { count, length } from './numbers.js';

const sayHi = 'Hello world!';
const num = 30;
const sum = 22 + 11;
const isTrue = true;
const flag = false;

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p style={{
          color: 'crimson'
        }}>Hello, Olga!
        </p>
        <p>
          {sayHi}
        </p>
        <p>
          {num}, {sum}
        </p>
          {isTrue && 'isTrue is true'}
        <p>
          {flag ? 'flag is true' : 'flag is false'}, {undefined}, {null}, {false}, {true}
        </p>
        <p>
          {count*length}
        </p>
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
