import React from 'react';

export default function TaskFilter({ filter, setFilter, tasks }) {
  const all = tasks.length;
  const completed = tasks.filter(t => t.completed).length;
  const pending = tasks.filter(t => !t.completed).length;
  

  return (
    <div className="task-filter">
      <button
        className={filter === 'All' ? 'active' : ''}
        onClick={() => setFilter('All')}
      >
        All ({all})
      </button>
      <button
        className={filter === 'Completed' ? 'active' : ''}
        onClick={() => setFilter('Completed')}
      >
        Completed ({completed})
      </button>
      <button
        className={filter === 'Pending' ? 'active' : ''}
        onClick={() => setFilter('Pending')}
      >
        Pending ({pending})
      </button>
    </div>
  );
}
