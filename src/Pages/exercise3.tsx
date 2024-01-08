import { useState } from "react";
import { TOWNS_DEPARMENT } from "../constants/town_deparment";

function Exercise3() {
  const [towns, setTowns] = useState<string[]>([]);
  const deparments = Object.keys(TOWNS_DEPARMENT);

  return (
    <div>
      <h1>Listados Dinámicos en JavaScript</h1>

      <select
        name=""
        id=""
        onChange={(e) => setTowns(TOWNS_DEPARMENT[e.target.value] || [])}
      >
        <option value="">Departamentos</option>
        {deparments.map((deparment, index) => (
          <option key={index} value={deparment}>
            {deparment.split("")[0].toUpperCase() + deparment.slice(1)}
          </option>
        ))}
      </select>

      <select name="" id="" disabled={towns.length === 0 ? true : false}>
        {towns.map((town, index) => (
          <option key={index} value={town}>
            {town}
          </option>
        ))}
      </select>
    </div>
  );
}

export default Exercise3;
