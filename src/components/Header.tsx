export default function Header({ todos }) {
  return (
    <header className="bg-slate-600 flex justify-center">
      <h1 className="text-white text-3xl drop-shadow-xl">To do app</h1>

      <div>
        <p>Number of todos:</p>
      </div>
    </header>
  );
}
