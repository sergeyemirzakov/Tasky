export interface TodoListTypes {
  task: {
    id: string;
    text: string;
    complete: boolean;
    important: boolean;
  }[];
}
