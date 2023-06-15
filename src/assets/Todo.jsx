import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Todo = () => {
  const [task, setTask] = useState('');
  const [priority, setPriority] = useState('low');
  const [tasks, setTasks] = useState([]);
  const [editingTaskId, setEditingTaskId] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');

  const handleTaskChange = (e) => {
    setTask(e.target.value);
  };

  const handlePriorityChange = (e) => {
    setPriority(e.target.value);
  };

  const handleTaskSubmit = (e) => {
    e.preventDefault();
    if (task.trim() === '') {
      return;
    }
    const newTask = {
      id: new Date().getTime(),
      name: task,
      priority: priority
    };
    setTasks([...tasks, newTask]);
    setTask('');
    setPriority('low');
  };

  const handleTaskDelete = (id) => {
    const updatedTasks = tasks.filter((task) => task.id !== id);
    setTasks(updatedTasks);
  };

  const handleTaskEdit = (id) => {
    const taskToEdit = tasks.find((task) => task.id === id);
    if (taskToEdit) {
      setTask(taskToEdit.name);
      setPriority(taskToEdit.priority);
      setEditingTaskId(id);
    }
  };

  const handleTaskUpdate = (e) => {
    e.preventDefault();
    if (task.trim() === '') {
      return;
    }
    const updatedTasks = tasks.map((task) => {
      if (task.id === editingTaskId) {
        return { ...task, name: task.name, priority: priority };
      }
      return task;
    });
    setTasks(updatedTasks);
    setTask('');
    setPriority('low');
    setEditingTaskId(null);
  };

  const filteredTasks = tasks.filter((task) =>
    task.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <div className='tasks'>
      <h2>Add Tasks</h2>
      <form onSubmit={editingTaskId ? handleTaskUpdate : handleTaskSubmit}>
        <div>
          <input
            type='text'
            value={task}
            onChange={handleTaskChange}
            placeholder='Enter a task'
            required
          />
          <select value={priority} onChange={handlePriorityChange}>
            <option value='low'>Low</option>
            <option value='medium'>Medium</option>
            <option value='high'>High</option>
          </select>
          <button type='submit'>
            {editingTaskId ? 'Update' : 'Add Task'}
          </button>
        </div>
      </form>
      <div className='searchbar'>
        <input
          type='text'
          value={searchTerm}
          onChange={handleSearch}
          placeholder='Search tasks'
        />
      </div>
      {filteredTasks.map((task) => (
        <li key={task.id}>
          <span className={`priority ${task.priority}`}></span>
          {task.name}
          <button className='btn' onClick={() => handleTaskEdit(task.id)}>
            Update
          </button>
          <button className='btn' onClick={() => handleTaskDelete(task.id)}>
            Delete
          </button>
        </li>
      ))}
      <Link to={'/'}>
        <button className='btnLink'>Back</button>
      </Link>
    </div>
  );
};

export default Todo;
