import { createContext, ReactNode, useContext, useState } from "react";

// Define the Todo type
export interface Todo {
  title: string;
  description: string;
  date: string;
}

// Define the shape of the context
export interface TodosContextType {
  todos: Todo[];
  addTodo: (newTodo: Todo) => void;
}

// Create the context with default value as undefined
export const TodosContext = createContext<TodosContextType | undefined>(
  undefined
);

// Define the provider component
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

// Custom hook to use the TodosContext
export const useTodos = () => {
  const context = useContext(TodosContext);
  return context;
};
