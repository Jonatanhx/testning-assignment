import Header from "./components/Header";
import TodoList from "./components/TodoList";
import { TodosProvider } from "./components/TodoProvider";

function App() {
  return (
    <TodosProvider>
      <Header />
      <main className="bg-slate-400 flex flex-1 h-screen justify-center">
        <TodoList />
      </main>
    </TodosProvider>
  );
}

export default App;
