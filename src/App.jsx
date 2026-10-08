import './components/todo/todo.css'
import TodoNew from './components/todo/TodoNew';
import TodoData from './components/todo/TodoData';
import ReactLogo from "./assets/react.png"
const App = () => {
  return(
    <div className="todo-container">
      <div className="todo-title">Todo List</div> 
      <TodoNew/>
      <TodoData/>
      <img className="todo-logo" src={ReactLogo} alt="React Logo"/>
    </div>
  )  
}
export default App;