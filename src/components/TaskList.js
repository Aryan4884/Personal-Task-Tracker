import React from "react";
import TaskItem from "./TaskItem";

const TaskList = ({tasks,updateTask, deleteTask}) => {
  if(tasks.length===0) return <p>No task found</p>
  return (
  <div className="task-list">
  {tasks.map(task=>(
    <TaskItem
    key={task.id}
    task={task}
    updateTask={updateTask}
    deleteTask={deleteTask}
    />
  ))}
  </div>
  )
};

export default TaskList;
