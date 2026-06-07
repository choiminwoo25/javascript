/*구조 분해 할당 + TypeScript 타입 선언이 결합된 문법으로써
타입이 있는 구조분해 매개변수임.

{ increment, decrement, reset } 은 
 구조 분해 할당(Destructuring)
 즉, props 객체에서 값을 꺼내는 구조분해 할당

 아래 코드는  props 객체의 타입 정의로써 
 각 속성은 함수이며 반환값 없음
{
  increment: () => void;
  decrement: () => void;
  reset: () => void;
}
*/

export default function CountButtons({
  increment,
  decrement,
  reset,
}: {
  increment: () => void;
  decrement: () => void;
  reset: () => void;
}) {
  return (
    <>
      <button onClick={decrement}>감소</button>
      <button onClick={reset}>초기화</button>
      <button onClick={increment}>증가</button>
    </>
  );
}
