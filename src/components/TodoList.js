import React, {useState } from 'react'
import TodoForm from './TodoForm'

const TodoList = () => {
    const [ todos, setTodos ] = useState([]);

    const addTodo = todo => {
        if(!todo.text || /^\s*$/.test(todo.text)) { 
            return
        }

        const newTodos = [todo, ...todos] //newTodos array to add todo at the end of the array

        setTodos(newTodos); //update TodoList with new todos

        console.log(todo, ...todos)
    }

    return (
        <div>
           <TodoForm onSubmit={addTodo}/>
        </div>
    )
}

export default TodoList;
