/*
** EPITECH PROJECT, 2024
** Task-List-in-ReactJs
** File description:
** TaskForm
*/

import React, { useState } from 'react';

function TaskForm({ addTask })
{
    const [text, setText] = useState('');

    function handleSubmit(e)
    {
        var newTask;

        e.preventDefault();
        console.assert(text !== '', 'text should not be empty');
        if (!text)
          return;

        newTask = {
            id: Date.now(),
            text: text,
            completed: false
        };
        console.assert(newTask.id !== undefined, 'newTask.id should not be undefined');
        console.assert(newTask.text !== undefined, 'newTask.text should not be undefined');
        addTask(newTask);
        setText('');
    }
    return (
        <form onSubmit={handleSubmit}>
            <input 
                type="text" 
                value={text} 
                onChange={(e) => setText(e.target.value)} 
                placeholder="Ajouter une tâche" 
            />
            <button type="submit">Ajouter</button>
        </form>
    );
}

export default TaskForm;