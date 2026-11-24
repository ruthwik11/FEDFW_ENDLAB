import Counter from "./Counter.jsx";
import Calculator from "./Calculator.jsx";

export default function App() {
  return (
    <main className="app">
      <h1>React useState Demo</h1>
      <div className="grid">
        <Counter />
        <Calculator />
      </div>
    </main>
  );
}
