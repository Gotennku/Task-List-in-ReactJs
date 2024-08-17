/*
** EPITECH PROJECT, 2024
** Task-List-in-ReactJs
** File description:
** App
*/

import React, { useState } from 'react';
import TaskList from './components/TaskList';
import TaskForm from './components/TaskForm';

function App()
{
  const [tasks, setTasks] = useState([]);

  function addTask(task)
  {
    var newTasks;

    console.assert(task !== undefined, 'task should not be undefined');
    newTasks = [...tasks, task];
    setTasks(newTasks);
  }

  function toggleTaskCompletion(taskId)
  {
    var newTasks;

    console.assert(taskId !== undefined, 'taskId should not be undefined');
    newTasks = tasks.map(function(task) {
      return task.id === taskId ? { ...task, completed: !task.completed } : task;
    });
    setTasks(newTasks);
  }

  function removeTask(taskId)
  {
    var newTasks;

    console.assert(taskId !== undefined, 'taskId should not be undefined');
    newTasks = tasks.filter(function(task) {
      return task.id !== taskId;
    });
    setTasks(newTasks);
  }

  return (
    <div className="App">
      <h1>Liste de tâches</h1>
      <TaskForm addTask={addTask} />
      <TaskList 
        tasks={tasks} 
        toggleTaskCompletion={toggleTaskCompletion} 
        removeTask={removeTask} 
      />
    </div>
  );
}

export default App;