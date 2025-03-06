import React from 'react'

function TaskItem({ task, onDelete, onEdit }) {
  return (
    <li className="task-item">
    <h2>{task.title}</h2>
    <p>{task.description}</p>
    <p>Status: {task.status}</p>
    <p>Due Date: {new Date(task.dueDate).toLocaleDateString()}</p>
    <div>
      <button className="edit-button" onClick={() => onEdit(task)}>
        Edit
      </button>
      <button onClick={() => onDelete(task._id)}>Delete</button>
    </div>
  </li>
  );
}

export default TaskItem