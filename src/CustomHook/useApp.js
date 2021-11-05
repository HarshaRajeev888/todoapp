import { useState } from 'react'

export const useApp = () => {

    const [todo, setTodo] = useState('')
    const [todos, setTodos] = useState([])
    const [error, setError] = useState(false)
    const [show, setShow] = useState(false)



    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


    const handleAdd = (e) => {
        e.preventDefault();
        if (todo) {
            setTodos([...todos, { id:Date.now() ,  text: todo }])
            setTodo('')
            setError(false)
        }
        else {
            setError(true)
        }


    }
    const deleteTask = ( {id} ) => {
        handleClose()
        setTodos(
            todos.filter((obj) => obj.id !== id)
        )

    }

      return {
        handleAdd,
        deleteTask,
        error,
        handleClose,
        handleShow,
        todo,
        setTodo,
        show,
        todos

    }
}





