//(Ex )인라인 핸들러

// export default function App() {
//   return (
//     <>
//       <button         
//         onClick= { () => { alert("Button Clicked!")} } > click </button>
//     </>
//   );
// }


//(Ex 2)함수 참조 방식

// export default function App() {
//   const clickHandler = () => {
//     alert("Button clicked!");
//   };
//   return (
//     <>
//       <button 
//         style={{
//             width: "300px",
//             height: "200px"
//           }}
      
//         onClick={clickHandler}>click
//       </button>
//     </>
//   );
// }


//(Ex 3) 이벤트 핸들러의 매개변수 전달
//인라인 핸들러 방식만 가능

// export default function App() {
//   const clickHandler = (msg : string) => {
//     alert(msg);
//   };
//   return (        
//     <>      
//         <button 
//           style={{
//             width: "300px",
//             height: "200px"
//           }}         
      
//           onClick={ () => { clickHandler("hello"); } }>click

//         </button>
//     </>
//   );
// }

//(Ex 4) 이벤트 핸들러의 매개변수 전달
//함수 참조방식으로는 이벤트 핸들러의 
// 매개변수 전달 불가...웹브라우저에 실행은 되나
//바로 clickHandler 이벤트핸들러 함수가 실행됨.

// export default function App() {
//   const clickHandler = (msg : string) => {
//     alert(msg);
//   };
//   return (        
//     <>      
//         <button 
//           style={{
//             width: "300px",
//             height: "200px"
//           }}   
   
//           onClick={ clickHandler("hello") }>click
//         </button>  
//     </>
//   );
// }