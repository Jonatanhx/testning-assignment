import { createContext, ReactNode, useState } from "react";

export interface Todo {
  title: string;
  description: string;
  date: string;
}

export interface TodosContextType {
  todos: Todo[];
  addTodo: (newTodo: Todo) => void;
}

export const TodosContext = createContext<TodosContextType | undefined>(
  undefined
);

export const TodosProvider = ({ children }: { children: ReactNode }) => {
  const [todos, setTodos] = useState<Todo[]>([]);

  const addTodo = (newTodo: Todo) => {
    setTodos((prevTodos) => [...prevTodos, newTodo]);
  };

  return (
    <TodosContext.Provider value={{ todos, addTodo }}>
      {children}
    </TodosContext.Provider>
  );
};
