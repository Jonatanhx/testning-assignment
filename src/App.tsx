import Header from "./components/Header";
import TodoList from "./components/TodoList";

function App() {
  return (
    <>
      <Header />
      <main className="bg-slate-400 flex flex-1 h-screen justify-center">
        <TodoList />
      </main>
    </>
  );
}

export default App;
