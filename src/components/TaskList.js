import React, { useState } from "react";
import FormTask from "./FormTask";
import Task from "./Task";
import '../styles/TaskList.css'

function TaskList() {
    const [tasks, setTasks] = useState([]);

    const addTask = task => {
        if (task.text.trim()) {
            task.text = task.text.trim();
            const updatedTasks = [task, ...tasks];
            setTasks(updatedTasks);
        }
        console.log('Task added');
    };

    const deleteTask = id => {
        const updatedTasks = tasks.filter(task => task.id !== id);
        setTasks(updatedTasks);
    };

    const completeTask = id => {
        const updatedTasks = tasks.map(task => {
            if(task.id === id) {
                task.completed = !task.completed;
            }
            return task;
        })
        setTasks(updatedTasks);
    };

    return(
        <>
            <FormTask onSubmit={addTask}/>
            <div className='task-list-container'>
                {
                   tasks.map((task) => 
                    <Task 
                    key={task.id}
                    id={task.id}
                    text={task.text}
                    message={task.message}
                    completed={task.completed}
                    completeTask={completeTask}
                    deleteTask={deleteTask}
                    />
                    ) 
                }
            </div>
        </>
    );
}

export default TaskList;