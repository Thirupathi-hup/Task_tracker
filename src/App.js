import React, { useState, useEffect } from "react";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";

const App = () => {
  const [tasks, setTasks] = useState([]); 
  const [editingTask, setEditingTask] = useState(null); 

  
  useEffect(() => {
    const savedTasks = JSON.parse(localStorage.getItem("tasks")) || [];
    setTasks(savedTasks);
  }, []);


  const saveToLocalStorage = () => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
    alert("Tasks saved to local storage!");
  };

  const addTask = (task) => {
    setTasks([...tasks, task]);
  };

  
  const editTask = (task) => {
    setEditingTask(task);
  };

  const saveTask = (updatedTask) => {
    setTasks(
      tasks.map((task) => (task.id === updatedTask.id ? updatedTask : task))
    );
    setEditingTask(null); 
  };

  
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  return (
    <div className="container mt-4">
      <h1 className="text-center">Task Tracker</h1>
      <div className="row">
        <div className="col-12 col-md-6 offset-md-3">
          <TaskForm
            addTask={addTask}
            editingTask={editingTask}
            saveTask={saveTask}
          />
        </div>
      </div>
      <div className="d-flex justify-content-between align-items-center mt-3">
        <h3>Task List</h3>
        <button
          className="btn btn-primary mb-2"
          onClick={saveToLocalStorage}
        >
          Save 
        </button>
      </div>
      <TaskList tasks={tasks} editTask={editTask} deleteTask={deleteTask} />
    </div>
  );
};

export default App;
