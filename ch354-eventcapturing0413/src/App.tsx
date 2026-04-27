//(Ex 1) 캡처링(capturing) : 이벤트가 부모 요소에서 
//시작해 자식 요소로 내려가는 방식.
//React 에서 캡처링을 처리하려면 
//이벤트 속성에 Capture를 붙여 사용해야 함.

// export default function App() {
//   const handleCapture = () => {
//     console.log("Parent");
//   };
//   const handleBubble = () => {
//     console.log("Child");
//   };
//   return (
//     <div
//       onClickCapture={handleCapture}
//       style={{ padding: "50px", 
//         backgroundColor: "#f0f0f0" }}
//     >
//       Parent
//       <button onClick={handleBubble} style={{ marginTop: "20px" }}>
//         Click Me
//       </button>
//     </div>
//   );
// }

//(Ex 2) 버블링(Bubbling) : 이벤트가 자식 요소에서 
//시작해  부모 요소로 내려가는 방식.
//React에서는 버블링이 기본 동작이므로 캡처링처럼 
//Capture 수식어가 붙은 별도의 이벤트 속성이 
//필요하지 않고 이벤트 속성 이름을 그대로 사용하면 됨.

// export default function App() {
//   const handleCapture = () => {
//     console.log("Parent");
//   };
//   const handleBubble = () => {
//     console.log("Child");
//   };
//   return (
//     <div
//       onClick={handleCapture}
//       style={{ padding: "20px", 
//               backgroundColor: "#ccc" }}
//     >
//       Parent
//       <button onClick={handleBubble} 
//               style={{ marginTop: "20px" }}>
//         Click Me
//       </button>
//     </div>
//   );
// }

//(Ex 3) 버블링을 차단하기 위해 stopPropagation()을 호출해
//이벤트가 부모 요소로 전달되지 않도록 하는 코드

// export default function App() {
//   const handleCapture = () => {
//     console.log("Parent");
//   };
//   const handleBubble = (e: React.MouseEvent<HTMLButtonElement, 
//                             MouseEvent>) => {
//     e.stopPropagation();
//     console.log("Child");
//   };
//   return (
//     <div
//       onClick={handleCapture}      
//       style={{ padding: "50px", backgroundColor: "#f0f0f0" }}
//     >
//       Parent
//       <button onClick={handleBubble} style={{ marginTop: "20px" }}>
//         Click Me
//       </button>
//     </div>
//   );
// }

//(Ex 4-1) 캡처링(Capturing)을 차단하기 위해 
//이벤트 속성에 Capture 수식어를 사용하지 않음.
//결과적으로 버블링(Bubbling)으로 실행되어서
//Child --> Parent 순으로 전파됨.

// export default function App() {
//   const handleCapture = () => {
//     console.log("Parent");
//   };
//   const handleBubble = () => {
//     console.log("Child");
//   };
//   return (
//     <div
//       onClick={handleCapture}
//       style={{ padding: "50px", backgroundColor: "#f0f0f0" }}
//     >
//       Parent
//       <button onClick={handleBubble} style={{ marginTop: "20px" }}>
//         Click Me
//       </button>
//     </div>
//   );
// }

//(Ex 4-2) 캡처링(Capturing)을 차단하기 위해 
//버튼 클릭 시 Child → Parent(버블링)으로 
//실행되므로 Parent만 나오게 하려면 
//Child 실행을 막아야 함. 
//(해결) Child 인 버튼의 onClick 
// 이벤트 속성 자체를 제거하면 됨.

// export default function App() {
//   const handleCapture = () => {
//     console.log("Parent");
//   };

//   return (
//     <div
//       onClick={handleCapture}
//       style={{ padding: "50px", backgroundColor: "#f0f0f0" }}
//     >
//       Parent
//       <button style={{ marginTop: "20px" }}>
//         Click Me
//       </button>
//     </div>
//   );
// }

//(Ex 4-3) “캡처링 차단”이라는 조건을 정확히 반영하여
//캡처링을 사용하면서 Parent만 실행하는 코드
//즉, 캡처링 이후 전파(버블링 포함)를 차단한 것

// export default function App() {
//   const handleCapture = () => {
//     console.log("Parent");
//   };

//   const handleBubble = (e: React.MouseEvent<HTMLButtonElement, 
//                              MouseEvent>) => {
//     e.stopPropagation(); //자식에서 이벤트 종료
//   };

//   return (
//     <div
//       onClickCapture={handleCapture} // 캡처링 단계에서 실행
//       style={{ padding: "50px", backgroundColor: "#f0f0f0" }}
//     >
//       Parent
//       <button onClick={handleBubble} style={{ marginTop: "20px" }}>
//         Click Me
//       </button>
//     </div>
//   );
// }

//(Ex 5)
//onSubmit 화살표 함수는 폼이 제출될 때 
//자동으로 실행하는 이벤트 핸들러 함수.
//이 함수에서 e.preventDefault()가 호출되어 
// 페이지 새로 고침을 막음.
//단, preventDefault() 함수는 폼 제출시 
// 기본 동작을 취소할 뿐, 버튼을 클릭하는 
// 동작 자체는 막지 않음.

export default function App() {
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
      }}
    >
      <input type="text" name="email" />
      <input type="password" />
      <button type="submit">전송</button>
    </form>
  );
}