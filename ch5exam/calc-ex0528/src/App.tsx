import { useState } from "react";
import Decimal from "decimal.js";


interface CalculatorState {
  currentNumber: string;
  previousNumber: string; // 이전에 입력한 숫자
  operation: string | null; // 연산 기호 또는 null
  isNewNumber: boolean; // 새로운 숫자 입력 여부
}

export default function App() { 
  const [state, setState] = useState<CalculatorState>({
    currentNumber: "0",
    previousNumber: "",
    operation: null,
    isNewNumber: true,
  });

  

  return (
    <article className="calculator">
      <form name="forms">
        <input type="text" name="output" readOnly />
        <input type="button" className="clear" value="C" />
        <input type="button" className="operator" value="/" />
        <input type="button" value="1" />
        <input type="button" value="2" />
        <input type="button" value="3" />
        <input type="button" className="operator" value="*" />
        <input type="button" value="4" />
        <input type="button" value="5" />
        <input type="button" value="6" />
        <input type="button" className="operator" value="+" />
        <input type="button" value="7" />
        <input type="button" value="8" />
        <input type="button" value="9" />
        <input type="button" className="operator" value="-" />
        <input type="button" className="dot" value="." />
        <input type="button" value="0" />
        <input type="button" className="operator result" value="=" />
      </form>
    </article>
  )
}