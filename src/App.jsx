import './App.css';
import { useState } from 'react';
import Calculator from './Calculator';

const App = () => {
  const [count, setCount] = useState(0);
//   function myFunction() {
//     console.log(">>> run my function")
// }
  const myFunction = () => {
    console.log(">>> run my arrow function")
  }
myFunction()
  return (
    <div className="App">
      <h1>Calculator</h1>
      <Calculator />
    </div>  
  )
}

export default App;

