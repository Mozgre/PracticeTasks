import { Task } from './types';

const API_URL = 'http://localhost:3000/';

export const fetchTasks = async (): Promise<Task[]> => {
    const response = await fetch(API_URL);
    const data = await response.json();
    
    return data.slice(0, 5).map((task: any) => ({
      id: Number(task.id), // Гарантируем числовой ID
      title: task.title,
      description: '',
      completed: task.completed,
      dueDate: new Date(Date.now() + task.id * 24 * 60 * 60 * 1000)
        .toISOString()
        .split('T')[0]
    }));
  };

// api.ts
export const createTask = async (task: Omit<Task, 'id'>): Promise<Task> => {
    const response = await fetch(API_URL, {
      method: 'POST',
      body: JSON.stringify({
        title: task.title,
        completed: task.completed,
        // JSONPlaceholder позволяет добавлять custom fields в body
        description: task.description,
        dueDate: task.dueDate,
        userId: 1 // обязательное поле для этого API
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    });
    
    const data = await response.json();
    return {
      id: data.id,
      title: data.title,
      description: task.description, // сохраняем из исходных данных
      dueDate: task.dueDate,       // сохраняем из исходных данных
      completed: data.completed
    };
  };