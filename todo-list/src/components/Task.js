/*
** EPITECH PROJECT, 2024
** Task-List-in-ReactJs
** File description:
** Task
*/

import React from 'react';

function Task({ task, toggleTaskCompletion, removeTask })
{
    var taskId = task.id;
    var taskText = task.text;
    var taskCompleted = task.completed;

    function handleToggle()
    {
        console.assert(taskId !== undefined, 'taskId should not be undefined');
        toggleTaskCompletion(taskId);
    }
    function handleRemove()
    {
        console.assert(taskId !== undefined, 'taskId should not be undefined');
        removeTask(taskId);
    }
    console.assert(taskText !== undefined, 'taskText should not be undefined');
    console.assert(typeof taskCompleted === 'boolean', 'taskCompleted should be a boolean');
    return (
        <li>
            <span 
                style={{ textDecoration: taskCompleted ? 'line-through' : 'none' }}
                onClick={handleToggle}
            >
                {taskText}
            </span>
            <button onClick={handleRemove}>Supprimer</button>
        </li>
    );
}

export default Task;