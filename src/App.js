import './App.css';
import { Header } from './components/Header';
import { TodoForm } from './components/TodoForm';
import { Todos } from './components/Todos';
import { useApp } from './CustomHook/useApp';
import Footer from './NewProject/Footer/Footer';
import MainNavigation from './NewProject/Navigation/MainNavigation';

function App() {
  // const { handleAdd, deleteTask, error, handleClose, handleShow, todo, setTodo, show, todos } = useApp()

return (
    <div className="page-container">
      <div className="content-wrap">
      {/* <Header />
      <TodoForm handleAdd={handleAdd} error={error} todo={todo} setTodo={setTodo} />
      <Todos todos={todos} deleteTask={deleteTask} handleClose={handleClose} handleShow={handleShow} show={show}  /> */}
   
      <MainNavigation/>
      </div>
      <Footer />
      </div>
  )
}

export default App;
