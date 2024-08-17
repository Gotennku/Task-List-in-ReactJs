/*
** EPITECH PROJECT, 2024
** Task-List-in-ReactJs
** File description:
** TaskList
*/

import React from 'react';
import Task from './Task';

function TaskList({ tasks, toggleTaskCompletion, removeTask })
{
    var taskElements = tasks.map(function(task) {
        console.assert(task.id !== undefined, 'task.id should not be undefined');
        console.assert(task.text !== undefined, 'task.text should not be undefined');
        return (
            <Task 
                key={task.id} 
                task={task} 
                toggleTaskCompletion={toggleTaskCompletion} 
                removeTask={removeTask} 
            />
        );
    });
    console.assert(Array.isArray(taskElements), 'taskElements should be an array');
    console.assert(taskElements.length === tasks.length, 'taskElements length should match tasks length');
    return (
        <ul>
            {taskElements}
        </ul>
    );
}

export default TaskList;