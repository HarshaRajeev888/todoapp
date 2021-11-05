import React from 'react'
import "../components/TodoForm.css"



export const TodoForm = ({handleAdd,todo,setTodo,error}) => {
   
    return (
        <>
        <div>
        <form onSubmit={handleAdd}>
        <input value={todo} onChange={(e) => setTodo(e.target.value)} type="text" placeholder="Add item..." />
        <button className="btn" >+</button>
        {error ? <h5 className="required"><i>Input field empty</i></h5> : null}
        </form> 
        </div>
        
       </>
    )
}
