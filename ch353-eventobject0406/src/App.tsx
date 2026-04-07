//(Ex 1) 이벤트 객체와 인라인 핸들러
//인라인 핸들러에서는 이벤트 객체를 
//함수의 매개변수로 직접 받아 사용 가능함.

// export default function App() {
//   return (
//     <>
//       <button         
//         onClick= { (e) => { console.log(e); } } > click </button>
//     </>
//   );
// }

//(Ex 2) 이벤트 객체와 함수 참조
//함수 참조 방식에서는 이벤트 핸들러에 
// 이벤트 객체를 직접 전달하지 않아도 React가 
// 자동으로 이벤트 객체를 해당 함수의 
// 첫 번째 매개변수로 전달함.

export default function App() {
  const clickHandler = (    
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
    msg: string
  ) => {
    console.log(e);
    alert(msg);
  };
  return (
    <>
      <button onClick={(e) => clickHandler(e, "Hello")}>
          click</button>
      { /*<button onClick={(e) => e }>click</button> */ }
    </>
  );
}