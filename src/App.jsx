import './components/todo/todo.css'
import TodoNew from './components/todo/TodoNew';
import TodoData from './components/todo/TodoData';
import ReactLogo from "./assets/logo.svg"
const App = () => {
  const hoidanit = "Eric Liverpool";
  const age = 30;
  const data = {
    address: "hanoi",
    city: "vietnam"
  }

  const addNewTodo = (name) => {
    alert (`call me ${name}`)
  }
  return(
    <div className="todo-container">
      <div className="todo-title">Todo List</div> 
      <TodoNew
      addNewTodo = {addNewTodo}
      />
      <TodoData
      name = {hoidanit}
      age = {age}
      data = {data}
      />
      <div className = "image">
        <img className="logo" src={ReactLogo} alt="React Logo"/>
      </div>
      
    </div>
  )  
}
export default App;