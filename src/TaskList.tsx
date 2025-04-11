import React, { useState } from 'react';
import { Task, FilterType, TaskInput } from './types';

const TaskList: React.FC = () => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [filter, setFilter] = useState<FilterType>('all');
  
  const handleAddTask = (task: TaskInput) => {
    const newTask: Task = {
      ...task,
      id: Date.now(),
      completed: false
    };
    setTasks([...tasks, newTask]);
  };

  const toggleTaskStatus = (id: number) => {
    setTasks(tasks.map(task => 
      task.id === id ? {...task, completed: !task.completed} : task
    ));
  };

  const deleteTask = (id: number) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  const filteredTasks = tasks.filter(task => {
    if (filter === 'active') return !task.completed;
    if (filter === 'completed') return task.completed;
    return true;
  });

  return (
    <div className="task-list-container">
      <div className="task-controls">
        <form 
          className="task-form"
          onSubmit={(e) => {
            e.preventDefault();
            const form = e.target as HTMLFormElement;
            const titleInput = form.elements.namedItem('title') as HTMLInputElement;
            const descriptionInput = form.elements.namedItem('description') as HTMLInputElement;
            
            handleAddTask({
              title: titleInput.value,
              description: descriptionInput.value,
              completed: false
            });
            
            form.reset();
          }}
        >
          <input
            name="title"
            type="text"
            placeholder="Название задачи"
            required
            className="task-input"
          />
          <input
            name="description"
            type="text"
            placeholder="Описание (необязательно)"
            className="task-input"
          />
          <button type="submit" className="task-submit-btn">
            Добавить задачу
          </button>
        </form>

        <div className="filter-buttons">
          {(['all', 'active', 'completed'] as FilterType[]).map((filterType) => (
            <button
              key={filterType}
              onClick={() => setFilter(filterType)}
              className={`filter-btn ${filter === filterType ? 'active' : ''}`}
            >
              {filterType === 'all' ? 'Все' : 
               filterType === 'active' ? 'Активные' : 'Завершенные'}
            </button>
          ))}
        </div>
      </div>

      {filteredTasks.length > 0 ? (
        <ul className="task-items">
          {filteredTasks.map(task => (
            <li
              key={task.id}
              className={`task-item ${task.completed ? 'completed' : ''}`}
            >
              <input
                type="checkbox"
                checked={task.completed}
                onChange={() => toggleTaskStatus(task.id)}
                className="task-checkbox"
              />
              <div className="task-content">
                <h3>{task.title}</h3>
                {task.description && <p>{task.description}</p>}
              </div>
              <button
                onClick={() => deleteTask(task.id)}
                className="task-delete-btn"
              >
                Удалить
              </button>
            </li>
          ))}
        </ul>
      ) : (
        <div className="empty-state">
          <p>Нет задач. Добавьте первую!</p>
        </div>
      )}
    </div>
  );
};

export default TaskList;