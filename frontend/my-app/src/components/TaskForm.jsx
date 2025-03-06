import React, { useState, useEffect } from "react";
import axios from "axios";

function TaskForm({ onSubmit, task }) {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    status: "pending",
    dueDate: "",
  });

  // Pre-fill the form if editing a task
  useEffect(() => {
    if (task) {
      setFormData({
        title: task.title,
        description: task.description,
        status: task.status,
        dueDate: task.dueDate ? task.dueDate.split("T")[0] : "",
      });
    }
  }, [task]);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
    setFormData({
      title: "",
      description: "",
      status: "pending",
      dueDate: "",
    });
  };


  return (
    <form onSubmit={handleSubmit} className="task-form">
    <input
      type="text"
      placeholder="Title"
      value={formData.title}
      onChange={(e) => setFormData({ ...formData, title: e.target.value })}
      required
    />
    <textarea
      placeholder="Description"
      value={formData.description}
      onChange={(e) => setFormData({ ...formData, description: e.target.value })}
    />
    <select
      value={formData.status}
      onChange={(e) => setFormData({ ...formData, status: e.target.value })}
    >
        <option value="pending">Pending</option>
        <option value="in progress">In Progress</option>
        <option value="completed">Completed</option>
      </select>
      <input
        type="date"
        value={formData.dueDate}
        onChange={(e) => setFormData({ ...formData, dueDate: e.target.value })}
      />
      <button type="submit">{task ? "Update Task" : "Add Task"}</button>
    </form>
    
       
  );
};

export default TaskForm