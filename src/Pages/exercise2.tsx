import { useState, useId } from "react";
import { generateFibonacci } from "../utils/fibonacci";

function Exercise2() {
  const [number, setNumber] = useState<number>(0);
  const [fibonacci, setFibonacci] = useState<number[]>([]);
  const id = useId();

  const handleGenerateFibonacci = () => {
    setFibonacci(generateFibonacci(number));
  };

  return (
    <div>
      <h1>Sucesión de Fibonacci en JavaScript</h1>
      <p>
        Ingrese el numero hasta el cual desea generar la sucesión de Fibonacci
      </p>
      <input
        type="number"
        id="number"
        placeholder="Número"
        onChange={(e) => setNumber(parseInt(e.target.value))}
      />
      <button id="btn" onClick={handleGenerateFibonacci}>
        Generar
      </button>
      <p>
        {fibonacci.map((number, index) => (
          <span key={id + index}> {number}, </span>
        ))}
      </p>
    </div>
  );
}

export default Exercise2;
