import Header from "./components/Header";
import { TodosProvider } from "./components/TodoContext";
import TodoList from "./components/TodoList";

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
