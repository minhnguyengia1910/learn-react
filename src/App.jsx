import './components/todo/todo.css'
import TodoNew from './components/todo/TodoNew';
import TodoData from './components/todo/TodoData';
import ReactLogo from "./assets/logo.svg"
import {useState} from "react";
const App = () => {
  const [todoList, setTodoList] = useState([
    {id: 1, name: "Learning React"},
    {id: 2, name: "Watching Youtube"},
  ]);
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
      todoList = {todoList}
      />
      <div className = "image">
        <img className="logo" src={ReactLogo} alt="React Logo"/>
      </div>
      
    </div>
  )  
}
export default App;