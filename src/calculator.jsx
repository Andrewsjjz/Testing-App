/* eslint-disable react-refresh/only-export-components */
import { evaluate } from "mathjs";
import {useState} from "react"
export const numeros = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
export const rows = [[1, 2, 3], [4, 5, 6], [7, 8, 9], [0]];
export const operaciones = ["+", "-", "*", "/"];
export const igualdad = "="

export const Calculadora = () => {
    const [value, setValue] = useState('') 
    const handleClick = op => () => 
        setValue(value.concat(op))
  return (
    <section>
      <h1>Calculadora</h1>
      <input value={value} readOnly/>
      <div role="grid">
        {rows.map((row, idx) => (
          <div key={idx} role="row">
            {row.map((numero) => (
                <button key={numero} onClick={handleClick(numero)}>{numero}</button>
            ))}
          </div>
        ))}
        {operaciones.map((operacion) => (
          <div key={operacion}>
            <button onClick={handleClick(operacion)}>{operacion}</button>
          </div>
        ))}
        <button onClick={() => setValue(evaluate(value))}>{igualdad}</button>

      </div>
    </section>
  );
};
