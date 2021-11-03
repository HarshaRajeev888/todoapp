import './App.css';
import { useState } from 'react';
import { Header } from './components/Header';
import { TodoForm } from './components/TodoForm';
import { Todos } from './components/Todos';




function App() {

  const [todo, setTodo] = useState('')
  const [todos, setTodos] = useState([])
  const [error, setError] = useState(false)
  const [show, setShow] = useState(false)
  const [id, setId] = useState()

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);



  const handleAdd = (e) => {
    e.preventDefault();
    if (todo) {

      setTodos([...todos, { id: Date.now(), text: todo, completed: false }])
      setTodo('')
      setError(false)
    }
    else {
      setError(true)
    }


  }
  const deleteTask = ({ id }) => {
    handleClose()
    setTodos(
      todos.filter((obj) => obj.id !== id)
    )

  }
  return (
    <div>

      <Header />
      <TodoForm handleAdd={handleAdd} error={error} todo={todo}
        setTodo={setTodo} />

      <Todos todos={todos} deleteTask={deleteTask} handleClose={handleClose} handleShow={handleShow}
        id={id} setId={setId} show={show} />
    </div>
  )
}

export default App;
