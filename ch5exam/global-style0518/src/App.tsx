//(Ex. 3-1) 글로벌 스타일(global style)
// 두 버튼을 수직방향으로 출력시킴.

// import "./App.css";
// import Child from "./components/Child";

// export default function App() {
//   return (
//     <>    
//       <button className="btn">App Button</button>
//       <Child />     
//     </>
//   );
// }

//(Ex. 3-2) 글로벌 스타일(global style)
// 두 버튼을 수평방향으로 출력시킴.
//<div style={{ display: 'flex' }}>
// 이 코드는 내부 요소들을 기본적으로 
// 가로(row) 방향으로 배치함.

// import "./App.css";
// import Child from "./components/Child";

// export default function App() {
//   return (
//     <>
//     <div style={{ display: 'flex' }}>
//       <button className="btn">App Button</button>
//       <Child />
//       </div>
//     </>
//   );
// }

//(Ex. 4) CSS 모듈(CSS module)

import styles from "./App.module.css";
import Child from "./components/Child";
export default function App() {
  return (
    <>
      <button className={styles.btn}>App Button</button>
      <Child />
    </>
  );
}