//(Ex 1. , Ex 2) 관련 App()함수

import { useState } from "react";
import Count from "./components/Count";

// export default function App() {
//   const [count, setCount] = useState(0);
//   return (
//     <>
//       <Count count={count} setCount={setCount} />
//     </>
//   );
// }

export default function App() {
  const [count, setCount] = useState(0);

  const increment = () => setCount((count) => count + 1);

  return (
    <>
      <Count count={count} increment={increment} />
    </>
  );
}