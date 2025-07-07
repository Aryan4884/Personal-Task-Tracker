import React, { useState } from 'react';

export default function TaskItem({ task, updateTask, deleteTask }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editTitle, setEditTitle] = useState(task.title);
  const [editDescription, setEditDescription] = useState(task.description);
  const [editDueDate, setEditDueDate] = useState(task.dueDate || '');
  const [editPriority, setEditPriority] = useState(task.priority || 'Normal');
  const [editTags, setEditTags] = useState(task.tags ? task.tags.join(', ') : '');

  const toggleComplete = () => {
    updateTask({ ...task, completed: !task.completed });
  };

  const handleSave = () => {
    updateTask({
      ...task,
      title: editTitle,
      description: editDescription,
      dueDate: editDueDate,
      priority: editPriority,
      tags: editTags.split(',').map(t => t.trim()).filter(Boolean),
    });
    setIsEditing(false);
  };

  const handleDelete = () => {
    if (window.confirm('Delete this task?')) {
      deleteTask(task.id);
    }
  };

  return (
    <div className="task-item">
      

      {isEditing ? (
        <>
          <div className="task-content">
            <input
              type="text"
              value={editTitle}
              onChange={(e) => setEditTitle(e.target.value)}
              placeholder="Title"
            />
            <input
              type="text"
              value={editDescription}
              onChange={(e) => setEditDescription(e.target.value)}
              placeholder="Description"
            />
            <input
              type="date"
              value={editDueDate}
              onChange={(e) => setEditDueDate(e.target.value)}
            />
            <select
              value={editPriority}
              onChange={(e) => setEditPriority(e.target.value)}
            >
              <option value="Low">Low</option>
              <option value="Normal">Normal</option>
              <option value="High">High</option>
            </select>
            <input
              type="text"
              value={editTags}
              onChange={(e) => setEditTags(e.target.value)}
              placeholder="Tags (comma separated)"
            />
          </div>
          <div className="task-actions">
            <button onClick={handleSave}>Save</button>
            <button onClick={() => setIsEditing(false)}>Cancel</button>
          </div>
        </>
      ) : (
        <>
          <input
        type="checkbox"
        checked={task.completed}
        onChange={toggleComplete}
      />
          <div className={`task-content ${task.completed ? 'completed' : ''}`}>
            <h3>{task.title}</h3>
            <p>{task.description}</p>
            <small>Created: {new Date(task.createdAt).toLocaleString()}</small>
            {task.dueDate && <p>Due: {task.dueDate}</p>}
            <p>Priority: {task.priority}</p>
            {task.tags && task.tags.length > 0 && (
              <p>Tags: {task.tags.join(', ')}</p>
            )}
          </div>
          <div className="task-actions">
            <button onClick={() => setIsEditing(true)}>Edit</button>
            <button onClick={handleDelete}>Delete</button>
          </div>
        </>
      )}
    </div>
  );
}
