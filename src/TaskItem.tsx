import React from 'react';
import { Task } from './types';

interface TaskItemProps {
  task: Task;
  onToggle: (id: number) => void;
  onDelete: (id: number) => void;
}

const TaskItem: React.FC<TaskItemProps> = ({ task, onToggle, onDelete }) => {
  return (
    <div className={`task-item ${task.completed ? 'completed' : ''}`}>
      <input
        type="checkbox"
        checked={task.completed}
        onChange={() => onToggle(task.id)}
        className="task-checkbox"
      />
      <div className="task-content">
        <h3>{task.title}</h3>
        {task.description && <p>{task.description}</p>}
        {task.dueDate && (
          <small>
            <img 
              src="assets/icons/calendar.svg" 
              alt="Срок выполнения"
              width="16"
              height="16"
              className="calendar-icon"
            />
            {task.dueDate}
          </small>
        )}
      </div>
      <button 
        onClick={() => onDelete(task.id)}
        className="delete-button"
      >
        <img 
          src="assets/icons/trash.svg" 
          alt="Удалить"
          width="18"
          height="18"
          className="trash-icon"
        />
      </button>
    </div>
  );
};

export default TaskItem;