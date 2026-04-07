//(Ex 1)...Type mismatch error 발생하는 코드

// export default function User(props: 
//     { name: string; age: number }) { //props 의 타입을 명시함
//   return (
//     <>
//       <p>name: {props.name}</p>
//       <p>age: {props.age}</p>
//     </>
//   );
// }


//(Ex 2)...Type mismatch error 해결하는 코드

// export default function User(props: {
//   userObj: { name: string; age: number };
//  }) {
//   return (
//     <>
//       <p>name: {props.userObj.name}</p>
//       <p>age: {props.userObj.age}</p>     
//     </>
//   );
// }

//(Ex 3)clickHandler 이벤트 핸들러 함수를 
//전달받아 처리하는 코드 추가
export default function User(props: {
  userObj: { name: string; age: number };
  clickHandler: () => void;
}) {
  return (
    <>
      <p>name: {props.userObj.name}</p>
      <p>age: {props.userObj.age}</p>
      <button onClick={props.clickHandler}>클릭</button>
    </>
  );
}
