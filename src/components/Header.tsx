import { useTodos } from "./UseTodoHook";

export default function Header() {
  const { todos } = useTodos();

  return (
    <header className="bg-slate-600 flex border-b border-neutral-900">
      <div id="empty-div" className="flex flex-1"></div>
      <h1 className="text-white text-3xl drop-shadow-xl">To do app</h1>
      <div className="flex items-center flex-1 justify-end">
        <p className="text-white mr-4">Number of todos: {todos.length}</p>
      </div>
    </header>
  );
}
