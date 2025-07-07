export const saveUsername = (username) => {
  localStorage.setItem('username', username);
};

export const getUsername = () => {
  return localStorage.getItem('username') || '';
};

export const saveTasks = (tasks) => {
  localStorage.setItem('tasks', JSON.stringify(tasks));
};

export const getTasks = () => {
  const stored = localStorage.getItem('tasks');
  return stored ? JSON.parse(stored) : [];
};
