// import type { Dispatch, SetStateAction } from "react";

//(Ex 1.)App.tsx 파일에서 count에 마우스를 올렸을 때
// 발생하는 오류 메시지를 보려면 Count 함수 컴포넌트에
// 아래처럼 빈 형태라도 코드가 작성되어 있어야 함.

// export default function Count( )
//   {  
//   return (
//     <div>
//       count
//     </div>
//   );
// } 

//(Ex 2.)
//setCount()의 타입을 명시하려면 
// Dispatch와 SetStateAction을 react 패키지에서 불러옴.



// props 객체를 구조 분해 할당해 
// count와 setCount를 바로 사용함.
//props 타입 지정 : props 객체의 타입을 명확하게 
// 지정하면 부모 컴포넌트에서 정의한 
// 상태(count)와 상태 변경 함수(setCount())를 
// 자식 컴포넌트에서 props로 안전하게 전달받아 사용 가능.

// export default function Count({
//   count,   setCount,  //props 객체를 구조 분해 할당
// }: {
//   count: number; setCount: Dispatch<SetStateAction<number>>;
// }) {
//   return (
//     <>
//       <h1>Count: {count}</h1>
//       <button onClick={() => setCount((count) => count + 1)}>증가</button>
//     </>
//   );
// }

/*
setCount: Dispatch<SetStateAction<number>>; 의미
setCount 라는 숫자(number) 값 또는 이전 숫자 상태를 
받아 새로운 숫자를 반환하는 함수를 전달받아 
상태를 변경하는 함수.
SetStateAction<number>는 "상태를 변경할 때 
숫자 자체를 넣을 수도 있고, 이전 숫자를 
이용해서 새 숫자를 계산하는 함수를 넣을 수도 있다."라는 의미.
*/

//setCount는 함수이고 숫자(number) 상태를 변경하는 
// 함수라는 의미. Dispatch는 React가 제공하는 함수 타입으로서
//Dispatch<무언가>는 "무언가를 전달받아 처리하는 함수"라는 뜻
//(예) Dispatch<string> 이면 문자열을 전달받는 함수라는 의미.
//SetStateAction<number>는 다음 두 가지 중 하나를 의미함.
//(1)number , (2)(prevState: number) => number
//즉, setCount는 아래 두 방식 모두 가능해야 함.
//(1) setCount(10); -->숫자(number)를 직접 전달
//(2) setCount((count) => count + 1); 콜백함수가 전달됨.
//즉, (2)(prevState: number) => number 형태임.

//(Ex 3)

export default function Count({
  count, increment,
}: { count: number; increment: () => void; }) {
  return (
    <>
      <h1>Count: {count}</h1>
      <button onClick={increment}>증가</button>
    </>
  );
}