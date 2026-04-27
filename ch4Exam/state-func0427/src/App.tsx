//(1) 상태변경함수를 이용하여 상태변수의 값을 변경하는 방식
import { useState } from "react";
export default function App() {
  const [count, setCount] = useState(0);
  const clickHandler = () => 
      setCount(128);
  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={clickHandler}>증가
      </button>
    </div>
  );
}


//(2) 이전 상태 갑을 참조하는 방식

// import { useState } from "react";

// export default function App() {
//   const [count, setCount] = useState(0);
//   const clickHandler = () => {
//     setCount((count) => count +1);
//   }
//   return (
//     <div>
//       <h1>Count : {count}</h1>
//       <button onClick={clickHandler}>증가</button>

//     </div>
//   )
// }