import './App.css';
import { useState } from 'react';
import logo from './logo.svg';
import ABC from './component/learn/MyComponent';
import {SecondComponent, ThirdComponent} from './component/learn/SecondComponent';

const App = () => {
  const [count, setCount] = useState(0);
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
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
        <ABC/>
        <SecondComponent/>
        <ThirdComponent/>
      </header>
    </div>
  );
}
export default App;