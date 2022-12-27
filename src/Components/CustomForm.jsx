import React from 'react';
import { useState } from 'react';
import { PlusIcon } from '@heroicons/react/24/solid';

    const CustomForm = ({addTask}) => {

    const [task, setTask] =useState("");

    const handleFormSubmit = (e)=>{
        e.preventDefault();
        console.log(e); 
        addTask({ name : task,
            checked: false,
            id: Date.now()
        })
        setTask("")
        }
    return (  
         <form
            className="todo"
            onSubmit={handleFormSubmit} >
                <div className="wrapper">
                    <input type="text"
                    id="task"
                    className="input"
                    onInput={(e)=> setTask(e.target.value)}
                    required
                    autoFocus
                    maxLength={60}
                    placeholder="Enter Task"
                    />
                    
                    <label htmlFor="task"
                    className='label'
                    >
                    Enter  Task</label>
                </div>
                <button 
                className="btn"
                aria-label='Add Task'
                type="submit">
                
                <PlusIcon className="h-6 w-6 text-blue-500" />
                </button>


         </form>
        

    );
}
 
export default CustomForm;