import { useState } from "react";

export default function Calculator() {
  const [num1, setNum1] = useState("");
  const [num2, setNum2] = useState("");
  const [result, setResult] = useState("");
  const [error, setError] = useState("");

  const calculate = (operation) => {
    if (num1 === "" || num2 === "") {
      setResult("");
      setError("Enter both numbers.");
      return;
    }

    const a = parseFloat(num1);
    const b = parseFloat(num2);
    setError("");

    switch (operation) {
      case "add":
        setResult(a + b);
        break;
      case "subtract":
        setResult(a - b);
        break;
      case "multiply":
        setResult(a * b);
        break;
      case "divide":
        if (b === 0) {
          setResult("");
          setError("Cannot divide by zero.");
        } else {
          setResult(a / b);
        }
        break;
      default:
        break;
    }
  };

  const clearAll = () => {
    setNum1("");
    setNum2("");
    setResult("");
    setError("");
  };

  return (
    <section className="card">
      <h2>Calculator</h2>

      <div className="inputs">
        <input
          type="number"
          placeholder="First number"
          value={num1}
          onChange={(e) => setNum1(e.target.value)}
        />
        <input
          type="number"
          placeholder="Second number"
          value={num2}
          onChange={(e) => setNum2(e.target.value)}
        />
      </div>

      <div className="row">
        <button onClick={() => calculate("add")} aria-label="Add">+</button>
        <button onClick={() => calculate("subtract")} aria-label="Subtract">−</button>
        <button onClick={() => calculate("multiply")} aria-label="Multiply">×</button>
        <button onClick={() => calculate("divide")} aria-label="Divide">÷</button>
      </div>

      <p className="result" aria-live="polite">
        {error ? <span className="error">{error}</span> : <>Result: <strong>{result === "" ? "—" : result}</strong></>}
      </p>

      <button onClick={clearAll} className="secondary full">
        Clear
      </button>
    </section>
  );
}
