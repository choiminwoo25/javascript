//ex1

// export default function User(
//     {userObj, clickHandler}:
//     {userObj: { name: string, age: number; };
//         clickHandler: () => void}) 
//     {
//   return (
//     <>
//       <p>name: {userObj.name}</p>
//       <p>age: {userObj.age}</p>
//       <button onClick={clickHandler}>클릭</button>
//     </>
//   );
// }

//ex2

// export default function User(
//     {userObj : {name, age}, clickHandler}:
//     {userObj: { name: string, age: number; };
//         clickHandler: () => void}) 
//     {
//   return (
//     <>
//       <p>name: {name}</p>
//       <p>age: {age}</p>
//       <button onClick={clickHandler}>클릭</button>
//     </>
//   );
// }

//(Ex 3) 함수 내부에서의 구조 분해 할당
//props객체를 그대로 받아 함수 내부에서 
//분해해도 같은 효과를 얻을 수 있음.
//이 방식은 props 전체를 일단 받고, 
//구조 분해 할당을 코드 흐름 중간에서 명확하게 
//처리하고 싶을 때 유용함. 
//함수 선언부가 짧아서 함수 시그니처를 
//더 깔끔하게 만들 수 있음.

// export default function User( props : {
//   userObj: { name : string, age : number ; } ;
//     clickHandler : () =>void } )
//   {
//     //함수 내부에서 구조 분해 할당하는 코드
//     const {
//       userObj :{name , age} ,
//       clickHandler,
//     } = props ; 

//     return (
//       <>
//         <p>name: {name}</p>
//         <p>age: {age}</p>
//         <button onClick={clickHandler}>클릭</button>
//       </>
//     );
// }

//ex4 interface 를 이용한 타입 선언

// interface UserProps{
//     userObj :{name : string ; age: number};
//     clickHandler : () => void;
// }

export default function User(props: UserProps) {
  const {
    userObj: { name, age },
    clickHandler,
  } = props;
  return (
    <>
      <p>name: {name}</p>
      <p>age: {age}</p>
      <button onClick={clickHandler}>클릭</button>
    </>
  );
}