//(ex1) 상태끌어올리기 전 


// import { useState } from 'react';

// export default function CountDisplay() {
//   const [count] = useState(0);
//   return <h1>Count: {count}</h1>;
// }

export default function CountDisplay(
  { count }: { count: number }) {
  return <h1>Count: {count} </h1>;
}
