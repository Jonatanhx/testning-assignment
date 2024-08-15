import { useContext } from "react";
import { TodosContext } from "./TodoProvider";

export const useTodos = () => {
  const context = useContext(TodosContext);
  if (!context) {
    throw new Error("useTodos requires parent being wrapped by todosProvider");
  }
  return context;
};
