// types.ts
export interface Task {
  id: number;
  title: string;
  description?: string;
  completed: boolean;
  dueDate?: string;
}

export type FilterType = 'all' | 'active' | 'completed';

// Добавляем недостающий тип TaskInput
export interface TaskInput {
  title: string;
  description?: string;
  completed: boolean;
}