import { useId } from "react";
import { EXERCICES } from "./constants/exercices";

function App() {
  const id = useId();
  return (
    <div>
      <h1>Práctica 1</h1>
      <ul>
        {EXERCICES.map((exercice, index) => (
          <li key={id + index}>
            <a href={exercice.path}>{exercice.title}</a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
