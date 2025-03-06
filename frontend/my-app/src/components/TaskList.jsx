import React from 'react'
import TaskItem from "./TaskItem";
function TaskList({ tasks, onDelete, onEdit }) {

  return (
    <div>
      <h2 className="task-list">Task List</h2>
      {tasks.map((task) => (
        <TaskItem key={task._id} task={task} onDelete={onDelete} onEdit={onEdit} />
      ))}
    </div>
  )
}

export default TaskList