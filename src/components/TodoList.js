import React, { useState } from 'react';
import TodoForm from './TodoForm';
import Todo from './Todo';

const TodoList = () => {
    const [ todos, setTodos ] = useState([]);

    const addTodo = todo => {
        if(!todo.text || /^\s*$/.test(todo.text)) { 
            return
        }
        const newTodos = [todo, ...todos] //newTodos array to add todo at the end of the array

        setTodos(newTodos); //update TodoList with new todos
       // console.log(todo, ...todos)
    }

    const updateTodo = (todoId, newValue) => {
        if(!newValue.text || /^\s*$/.test(newValue.text)) { 
            return;
        }
        setTodos(prev => prev.map(item => (item.id === todoId ? newValue : item)))
    }

    const removeTodo = id => {
        const removeArr = [...todos].filter(todo => todo.id !== id)
        setTodos(removeArr);
    }


    const completeTodo = id => {
        let updatedTodos = todos.map(todo => {
            if (todo.id === id) {
                todo.isComplete = !todo.isComplete;
            }
            return todo;
        });
        setTodos(updatedTodos);
    };

   
   
    return (
        <div>
           <TodoForm onSubmit={addTodo}/>
           <Todo 
                todos={todos} 
                complete={completeTodo} 
                removeTodo={removeTodo} 
                updateTodo={updateTodo}/>
        </div>
    )
}

export default TodoList;
