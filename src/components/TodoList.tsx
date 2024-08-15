import { useState } from "react";
import AddTodoForm from "./AddTodoForm";

interface Todo {
  title: string;
  description: string;
  date: string;
}

export default function TodoList() {
  const [todos, setTodos] = useState<Todo[]>([]);

  const handleAddTodo = (newTodo: Todo) => {
    setTodos([...todos, newTodo]);
  };

  return (
    <section className="inline-flex flex-col">
      <AddTodoForm onSubmit={handleAddTodo} />
      <ul className="inline-flex flex-col-reverse">
        {todos.map((todo, index) => (
          <li
            key={index}
            className="border border-black inline-flex flex-col my-1 bg-white px-1"
          >
            <div className="flex flex-col">
              <div>
                <p className="text-lg border-b border-neutral-400">
                  {todo.title}
                </p>
                <p>{todo.description}</p>
              </div>
              <p className="flex justify-end">{todo.date}</p>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
