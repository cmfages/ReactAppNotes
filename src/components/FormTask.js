import React, { useState } from "react";
import '../styles/FormTask.css';
import { v4 as uuidv4 } from 'uuid';

function FormTask(props) {

    const [input, setInput] = useState('');

    const handleChange = e => {
        setInput(e.target.value);
        console.log('Writing...');
    };
    const handleDelivery = e => {
        e.preventDefault();
        console.log('Sending form...')
        const newTask = {
            id: uuidv4(),
            text: input,
            completed: false
        }
        props.onSubmit(newTask);
        console.log(newTask)
    };

    return(
        <form 
            className="form-task"
            onSubmit={handleDelivery}
            >
                <input 
                className="task-input"
                type='text'
                placeholder="Write a task."
                name='text'
                onChange={handleChange}
            />
            <button className="task-button">
                Add Task
            </button>    
        </form>
    );
}

export default FormTask;