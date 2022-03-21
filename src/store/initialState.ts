export interface Todo {
  id: string;
  text: string;
  description: string;
  complete: boolean;
  priority: string;
  priorityIndex: number;
}

export interface IInitialState {
  todos: Todo[];
  sorted: string;
}

export const initialState: IInitialState = {
  todos: [
    {
      id: '0',
      text: 'Just Random Title😀',
      description: 'Don`t forget to create a Great Description too😁',
      complete: false,
      priority: 'high',
      priorityIndex: 3,
    },
    {
      id: '1',
      text: 'I have to drink coffee',
      description: 'More Coffee. Moooooore☕',
      complete: false,
      priority: 'low',
      priorityIndex: 1,
    },
    {
      id: '2',
      text: 'Do not forget to push all changes!!!',
      description: '🍊🍊🍊🍊',
      complete: false,
      priority: 'medium',
      priorityIndex: 2,
    },
    {
      id: '3',
      text: 'Awesome card',
      description: '',
      complete: false,
      priority: 'low',
      priorityIndex: 2,
    },
    {
      id: '4',
      text: 'Try to use image here',
      description: 'You can upload your image here',
      complete: false,
      priority: 'low',
      priorityIndex: 2,
    },
  ],
  sorted: '',
};
