import { useState } from "react";
import { validateLeapYear } from "../utils/leapYear";

function Exercise1() {
  const [year, setYear] = useState(0);
  const [isLeapYear, setIsLeapYear] = useState<boolean | undefined>(undefined);

  const handleValidateLeapYear = () => {
    setIsLeapYear(validateLeapYear(year));
  };

  return (
    <div>
      <h1>Verificación de Año Bisiesto en JavaScript</h1>

      <p>Ingrese el año</p>
      <input
        type="number"
        id="year"
        placeholder="Año"
        onChange={(e) => {
          setYear(parseInt(e.target.value));
        }}
      />
      <button id="btn" onClick={handleValidateLeapYear}>
        Verificar
      </button>

      {isLeapYear !== undefined && (
        <p>{isLeapYear ? "El año es bisiesto" : "El año no es bisiesto"}</p>
      )}
    </div>
  );
}

export default Exercise1;
