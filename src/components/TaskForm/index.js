import React, { useState, useEffect } from "react";

const TaskForm = ({ addTask, editingTask, saveTask }) => {
  const [task, setTask] = useState({
    id: "",
    title: "",
    description: "",
    dueDate: "",
    status: "Pending",
  });

  
  useEffect(() => {
    if (editingTask) {
      setTask(editingTask);
    } else {
      setTask({
        id: "",
        title: "",
        description: "",
        dueDate: "",
        status: "Pending",
      });
    }
  }, [editingTask]);

  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setTask({ ...task, [name]: value });
  };

  
  const handleSubmit = (e) => {
    e.preventDefault();
    if (editingTask) {
      saveTask(task); 
    } else {
      addTask({ ...task, id: Date.now() }); 
    }
    setTask({
      id: "",
      title: "",
      description: "",
      dueDate: "",
      status: "Pending",
    });
  };

  return (
    <form onSubmit={handleSubmit} className="mb-4">
      <div className="form-group">
        <label>Title</label>
        <input
          type="text"
          className="form-control"
          name="title"
          value={task.title}
          onChange={handleChange}
          required
        />
      </div>
      <div className="form-group">
        <label>Description</label>
        <textarea
          className="form-control"
          name="description"
          value={task.description}
          onChange={handleChange}
          required
        />
      </div>
      <div className="form-group">
        <label>Due Date</label>
        <input
          type="date"
          className="form-control"
          name="dueDate"
          value={task.dueDate}
          onChange={handleChange}
          required
        />
      </div>
      <div className="form-group">
        <label>Status</label>
        <select
          className="form-control"
          name="status"
          value={task.status}
          onChange={handleChange}
        >
          <option value="Pending">Pending</option>
          <option value="In Progress">In Progress</option>
          <option value="Completed">Completed</option>
        </select>
      </div>
      <button type="submit" className="btn btn-success btn-block">
        {editingTask ? "Save Task" : "Add Task"}
      </button>
    </form>
  );
};

export default TaskForm;
