import React, { useState } from "react";

const TaskForm = ({addTask}) => {
  const [title, setTitle] =useState('');
  const [description, setDescription] =useState('');
  const [tags, setTags] = useState('');
  const [dueDate, setDueDate] = useState('');
  const [priority, setPriority] = useState('Normal');

  const handleSubmit = (e) =>{
    e.preventDefault();
    if(!title.trim()){
      return;
    }
    const newTask ={
      id: Date.now(),
      title,
      description,
      completed : false,
      createdAt: new Date().toISOString(),
      dueDate,
      priority,
      tags: tags.split(',').map(t => t.trim()).filter(Boolean),

    };
    addTask(newTask);
    setTitle('');
    setDescription('');
    setTags('');
    setDueDate('');
    setPriority('Normal');
  }

  return(
     <form className="task-form" onSubmit={handleSubmit}>
     <input
     type="text"
     placeholder="Task title"
     value={title}
     onChange={(e)=> setTitle(e.target.value)}
     required
     />
     <input
     type="text"
     placeholder="Description (optinal)"
     value={description}
     onChange={(e)=> setDescription(e.target.value)}
     required
     />
     <input
  type="text"
  placeholder="Tags (comma separated)"
  value={tags}
  onChange={(e) => setTags(e.target.value)}
/>

<input
  type="date"
  value={dueDate}
  onChange={(e) => setDueDate(e.target.value)}
/>

<select
  value={priority}
  onChange={(e) => setPriority(e.target.value)}
>
  <option value="Low">Low</option>
  <option value="Normal">Normal</option>
  <option value="High">High</option>
</select>
     
     <button className="add-task-btn" type="submit">Add Task</button>

     </form>
  )
};

export default TaskForm;
