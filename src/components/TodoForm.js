import React, { useState } from 'react'

const TodoForm = (props) => {
    const [input, setInput] = useState('') //initial state, setState

    const handleSubmit = e => {
        e.preventDefault(); //prevents page refresh

        props.onSubmit({
           id: Math.floor(Math.random() * 10000), 
            text: input
        });

        setInput('')
    }

    const handleChange = e => {
        setInput(e.target.value)
    }

    return (
        <form className='todo-form' onSubmit={handleSubmit}>
            <input
                className='todo-input'
                type='text'
                name='text'
                placeholder='Add a todo'
                value={input}
                onChange={handleChange}
            />
            <button className='todo-button'>Submit</button>
        </form>
    )
}

export default TodoForm;
