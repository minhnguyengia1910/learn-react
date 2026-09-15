import './App.css';
import { useState } from 'react';
import logo from './logo.svg';

const Mycomponent = () => {
  return(
    <div> hỏi dân IT update</div>
  );
}
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
        <Mycomponent/>
      </header>
    </div>
  );
}
export default App;