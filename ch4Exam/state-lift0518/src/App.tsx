//(ex1) 자식 컴포넌트에서 count 상태변수를 
// 독립적으로 가지고 잇는 상태  


// import { useState } from "react";
// import CountDisplay from "./components/CountDisplay";
// import CountButtons from "./components/CountButtons";

// export default function App() {

//   return (
//     <>
//       <CountDisplay  />
//       <CountButtons  />
//     </>
//   );
// }


//(ex2) 자식 컴포넌트들에서 공동으로 사용하는 count 상태변수와 상태변경함수들을 
// 부모인 App컴포넌트로 상태 끌어올리기 한 후 


import { useState } from "react";
import CountDisplay from "./components/CountDisplay";
import CountButtons from "./components/CountButtons";

export default function App() {
  const [count, setCount] = useState(0);
  //const increment = () => setCount(count + 1);
  //다음 코드와 같이 콜백 함수 형태로 작성하는 
  // 방식을 더 권장함.
  //이 방식은 상태 값을 안전하게 참조할 수 있어 
  //예기치 않은 문제를 방지 가능함.

  //콜백 함수 형태
  const increment = () => setCount(count => count + 1);

  const decrement = () => setCount( count => count - 1);
  const reset = () => setCount(0);
  return (
    <>
      <CountDisplay count={count} />
      <CountButtons increment={increment} 
                    decrement={decrement} 
                    reset={reset} />
    </>
  );
}
