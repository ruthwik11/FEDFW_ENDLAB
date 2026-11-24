import { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);

  return (
    <section className="card">
      <h2>Counter</h2>
      <p className="count">{count}</p>
      <div className="row">
        <button onClick={() => setCount(count - 1)}>Decrement</button>
        <button onClick={() => setCount(0)} className="secondary">
          Reset
        </button>
        <button onClick={() => setCount(count + 1)}>Increment</button>
      </div>
    </section>
  );
}
