import './App.css';
import { Header } from './components/Header';
import { TodoForm } from './components/TodoForm';
import { Todos } from './components/Todos';
import { useApp } from './CustomHook/useApp';


function App() {
  const { handleAdd, deleteTask, error, handleClose, handleShow, todo, setTodo, show, todos } = useApp()


  return (
    <div>
      <Header />
      <TodoForm handleAdd={handleAdd} error={error} todo={todo} setTodo={setTodo} />

      <Todos todos={todos} deleteTask={deleteTask} handleClose={handleClose} handleShow={handleShow} show={show}  />
    </div>
  )
}

export default App;
